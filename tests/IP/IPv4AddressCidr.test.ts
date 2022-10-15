import {
    getBroadcastIPv4Address,
    getFirstAssignableIPv4Address,
    getBits,
    getIPv4AddressesAmount,
    getIPv4Address,
    getIPv4SubnetMask,
    getLastAssignableIPv4Address,
    getNetworkIPv4Address,
    hasIPv4Address,
    IPv4AddressCidr,
    is,
} from '../../src/IP/IPv4AddressCidr';
import type {IPv4Address} from '../../src/IP/IPv4Address';

describe(is, () => {
    test.each([['123.123.123.123/32'], ['0.0.0.0/0'], ['192.168.0.0/24'], ['127.0.0.0/8'], ['1.2.3.192/6']])(
        'valid ipv4 CIDR',
        cidr => {
            expect(is(cidr)).toBe(true);
        }
    );
    test.each([
        ['123.123.123.123'],
        ['123.123.123.123/33'],
        ['123.123.123.123'],
        [''],
        ['ff.ff.ff.0/24'],
        ['127.0.0.0/'],
    ])('invalid ipv4 CIDR', cidr => {
        expect(is(cidr)).toBe(false);
    });
});

describe(hasIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.0'],
        ['192.168.0.0/24', '192.168.0.255'],
        ['192.168.0.0/24', '192.168.0.123'],
        ['127.0.0.0/8', '127.0.0.0'],
        ['127.0.0.0/8', '127.255.255.255'],
        ['127.0.0.0/8', '127.1.2.3'],
        ['123.123.123.176/28', '123.123.123.183'],
        ['123.123.123.124/31', '123.123.123.125'],
        ['123.123.123.123/32', '123.123.123.123'],
    ])('ipv4 CIDR includes this ip address', (cidr, ip) => {
        expect(hasIPv4Address(cidr as IPv4AddressCidr, ip as IPv4Address)).toBe(true);
    });
    test.each([
        ['192.168.0.0/24', '192.168.1.0'],
        ['192.168.0.0/24', '192.168.255.255'],
        ['192.168.0.0/24', '192.168.123.123'],
        ['127.0.0.0/8', '128.0.0.0'],
        ['127.0.0.0/8', '126.255.255.255'],
        ['123.123.123.176/28', '123.123.123.192'],
        ['123.123.123.124/31', '123.123.123.123'],
        ['123.123.123.123/32', '123.123.123.124'],
    ])('ipv4 CIDR not includes this ip address', (cidr, ip) => {
        expect(hasIPv4Address(cidr as IPv4AddressCidr, ip as IPv4Address)).toBe(false);
    });
});

describe(getBits, () => {
    test.each([
        ['123.123.123.123/32', 32],
        ['0.0.0.0/0', 0],
        ['192.168.0.0/24', 24],
        ['1.2.3.192/6', 6],
    ])('get bits number from ipv4 CIDR', (cidr: string, bits: number) => {
        expect(getBits(cidr as IPv4AddressCidr)).toBe(bits);
    });
});

describe(getIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.0'],
        ['127.0.0.0/8', '127.0.0.0'],
        ['123.123.123.176/28', '123.123.123.176'],
        ['0.0.0.0/0', '0.0.0.0'],
        ['1.2.3.4/32', '1.2.3.4'],
    ])('get ipv4 address from CIDR', (cidr, ip) => {
        expect(getIPv4Address(cidr as IPv4AddressCidr)).toBe(ip);
    });
});

// TODO: add /0 test cases

describe(getNetworkIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.0'],
        ['127.0.0.0/8', '127.0.0.0'],
        ['123.123.123.176/28', '123.123.123.176'],
        ['123.123.123.124/31', null],
        ['123.123.123.123/32', null],
    ])('get network ipv4 address', (cidr, ip: string | null) => {
        expect(getNetworkIPv4Address(cidr as IPv4AddressCidr)).toBe(ip);
    });
});

describe(getFirstAssignableIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.1'],
        ['127.0.0.0/8', '127.0.0.1'],
        ['123.123.123.176/28', '123.123.123.177'],
        ['123.123.123.124/31', '123.123.123.124'],
        ['123.123.123.123/32', '123.123.123.123'],
    ])('get first ipv4 address, excluding network address', (cidr, ip) => {
        expect(getFirstAssignableIPv4Address(cidr as IPv4AddressCidr)).toBe(ip);
    });
});

describe(getLastAssignableIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.254'],
        ['127.0.0.0/8', '127.255.255.254'],
        ['123.123.123.176/28', '123.123.123.190'],
        ['123.123.123.124/31', '123.123.123.125'],
        ['123.123.123.123/32', '123.123.123.123'],
    ])('get last ipv4 address, excluding broadcast address', (cidr, ip) => {
        expect(getLastAssignableIPv4Address(cidr as IPv4AddressCidr)).toBe(ip);
    });
});

describe(getBroadcastIPv4Address, () => {
    test.each([
        ['192.168.0.0/24', '192.168.0.255'],
        ['127.0.0.0/8', '127.255.255.255'],
        ['123.123.123.176/28', '123.123.123.191'],
        ['123.123.123.124/31', null],
        ['123.123.123.123/32', null],
    ])('get broadcast ipv4 address', (cidr: string, ip: string | null) => {
        expect(getBroadcastIPv4Address(cidr as IPv4AddressCidr)).toBe(ip);
    });
});

describe(getIPv4AddressesAmount, () => {
    test.each([
        ['192.168.0.0/24', 256],
        ['127.0.0.0/8', 256 ** 3],
        ['123.123.123.176/28', 16],
        ['123.123.123.124/31', 2],
        ['123.123.123.123/32', 1],
    ])('get amount of ipv4 addresses in CIDR', (cidr: string, amount: number) => {
        expect(getIPv4AddressesAmount(cidr as IPv4AddressCidr)).toBe(amount);
    });
});

describe(getIPv4SubnetMask, () => {
    test.each([
        ['192.168.0.0/24', '255.255.255.0'],
        ['127.0.0.0/8', '255.0.0.0'],
        ['123.123.123.176/28', '255.255.255.240'],
        ['123.123.123.124/31', '255.255.255.254'],
        ['123.123.123.123/32', '255.255.255.255'],
    ])('get ipv4 subnet mask by CIDR', (cidr, mask) => {
        expect(getIPv4SubnetMask(cidr as IPv4AddressCidr)).toBe(mask);
    });
});
