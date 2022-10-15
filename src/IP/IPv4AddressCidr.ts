/**
 * IETF RFC 4632 - https://datatracker.ietf.org/doc/html/rfc4632
 */

import type {Opaque} from '../Opaque';
import type {IPv4Address} from './IPv4Address';
import type {IPv4SubnetMask} from './IPv4SubnetMask';
import {getBinaryString, getDecimal, BIT_LENGTH} from './IPv4Address';
import {getOctets} from './IPv4AddressOctet';

declare const IPv4AddressCidr: unique symbol;
export type IPv4AddressCidr = Opaque<string, typeof IPv4AddressCidr>;
/**
 * Whether CIDR notation can have non-zeroes in host identifier is to be clarified
 * Will stick to permissive version for now
 * Also notations like 10/24 or /16 are not allowed currently
 */
export const REGEXP =
    /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}\/(?:3[0-2]|[12]?\d)$/;

export const is = (input: string): input is IPv4AddressCidr => REGEXP.test(input);

export const hasIPv4Address = (cidr: IPv4AddressCidr, ip: IPv4Address): boolean => {
    const lowerBound = getDecimal(getNetworkIPv4Address(cidr) ?? getFirstAssignableIPv4Address(cidr));
    const upperBound = getDecimal(getBroadcastIPv4Address(cidr) ?? getLastAssignableIPv4Address(cidr));
    const ipDecimal = getDecimal(ip);
    return ipDecimal >= lowerBound && ipDecimal <= upperBound;
};

export const getBits = (cidr: IPv4AddressCidr): number => {
    const chunks = cidr.split('/') as unknown as readonly [string, string];
    return parseInt(chunks[1]);
};

export const getIPv4Address = (cidr: IPv4AddressCidr): IPv4Address => {
    const chunks = cidr.split('/') as unknown as readonly [string, string];
    return chunks[0] as IPv4Address;
};

export const getNetworkIPv4Address = (cidr: IPv4AddressCidr): IPv4Address | null => {
    const bits = getBits(cidr);
    if (bits === BIT_LENGTH || bits === BIT_LENGTH - 1) {
        return null;
    }
    const referenceIp = getBinaryString(getIPv4Address(cidr)).padStart(BIT_LENGTH, '0');
    const mask = getBinaryString(getIPv4SubnetMask(cidr)).padStart(BIT_LENGTH, '0');
    const binaryIp = referenceIp
        .split('')
        .map((char, index) => (char === '1' && mask[index] === '1' ? '1' : '0'))
        .join('');
    // TODO: extract to function
    const octets = [binaryIp.slice(0, 8), binaryIp.slice(8, 16), binaryIp.slice(16, 24), binaryIp.slice(24, 32)];
    return octets.map(octet => parseInt(octet, 2)).join('.') as IPv4Address;
};

export const getFirstAssignableIPv4Address = (cidr: IPv4AddressCidr): IPv4Address => {
    const referenceIp = getIPv4Address(cidr);
    const bits = getBits(cidr);
    if (bits === BIT_LENGTH) {
        return referenceIp;
    }
    if (bits === BIT_LENGTH - 1) {
        const [first, second, third, fourth] = getOctets(referenceIp);
        const lastOctetNumber = parseInt(fourth);
        return `${first}.${second}.${third}.${
            lastOctetNumber % 2 === 0 ? lastOctetNumber : lastOctetNumber - 1
        }` as IPv4Address;
    }
    const networkIp = getNetworkIPv4Address(cidr)!;
    const [first, second, third, fourth] = getOctets(networkIp);
    const lastOctetNumber = parseInt(fourth);
    return `${first}.${second}.${third}.${lastOctetNumber + 1}` as IPv4Address;
};

export const getLastAssignableIPv4Address = (cidr: IPv4AddressCidr): IPv4Address => {
    const referenceIp = getIPv4Address(cidr);
    const bits = getBits(cidr);
    if (bits === BIT_LENGTH) {
        return referenceIp;
    }
    if (bits === BIT_LENGTH - 1) {
        const [first, second, third, fourth] = getOctets(referenceIp);
        const lastOctetNumber = parseInt(fourth);
        return `${first}.${second}.${third}.${
            lastOctetNumber % 2 === 0 ? lastOctetNumber + 1 : lastOctetNumber
        }` as IPv4Address;
    }
    const networkIp = getBroadcastIPv4Address(cidr)!;
    const [first, second, third, fourth] = getOctets(networkIp);
    const lastOctetNumber = parseInt(fourth);
    return `${first}.${second}.${third}.${lastOctetNumber - 1}` as IPv4Address;
};

export const getBroadcastIPv4Address = (cidr: IPv4AddressCidr): IPv4Address | null => {
    const bits = getBits(cidr);
    if (bits === BIT_LENGTH || bits === BIT_LENGTH - 1) {
        return null;
    }
    const binaryBroadcastAddress = getBinaryString(getNetworkIPv4Address(cidr)!)
        .padStart(BIT_LENGTH, '0')
        .slice(0, bits)
        .padEnd(BIT_LENGTH, '1');
    // TODO: extract to function [2]
    const octets = [
        binaryBroadcastAddress.slice(0, 8),
        binaryBroadcastAddress.slice(8, 16),
        binaryBroadcastAddress.slice(16, 24),
        binaryBroadcastAddress.slice(24, 32),
    ];
    return octets.map(octet => parseInt(octet, 2)).join('.') as IPv4Address;
};

export const getIPv4AddressesAmount = (cidr: IPv4AddressCidr): number => {
    const lowerBound = getDecimal(getNetworkIPv4Address(cidr) ?? getFirstAssignableIPv4Address(cidr));
    const upperBound = getDecimal(getBroadcastIPv4Address(cidr) ?? getLastAssignableIPv4Address(cidr));
    return upperBound - lowerBound + 1;
};

export const getIPv4SubnetMask = (cidr: IPv4AddressCidr): IPv4SubnetMask => {
    const bits = getBits(cidr);
    const binaryMask = `${'1'.repeat(bits)}${'0'.repeat(BIT_LENGTH - bits)}`;
    const octets = [
        binaryMask.slice(0, 8),
        binaryMask.slice(8, 16),
        binaryMask.slice(16, 24),
        binaryMask.slice(24, 32),
    ];
    return octets.map(octet => parseInt(octet, 2)).join('.') as IPv4SubnetMask;
};
