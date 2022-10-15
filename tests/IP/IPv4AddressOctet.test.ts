import {getOctets, is} from '../../src/IP/IPv4AddressOctet';
import type {IPv4Address} from '../../src/IP/IPv4Address';

describe(is, () => {
    test.each([['0'], ['255'], ['3']])('valid ip address octet', octet => {
        expect(is(octet)).toBe(true);
    });
    test.each([['-1'], ['256'], [''], ['ff'], ['qwerty'], ['1.2.3.4']])('invalid ip address octet', octet => {
        expect(is(octet)).toBe(false);
    });
});

describe(getOctets, () => {
    test.each([
        ['0.0.0.0', ['0', '0', '0', '0']],
        ['255.255.255.255', ['255', '255', '255', '255']],
        ['1.2.3.4', ['1', '2', '3', '4']],
    ])('get octets tuple from ip address', (ip: string, octets: string[]) => {
        const tuple = getOctets(ip as IPv4Address);
        expect(tuple.length).toBe(octets.length);
        tuple.forEach((elem, index) => {
            expect(elem).toBe(octets[index]);
        });
    });
});
