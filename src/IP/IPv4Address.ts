/**
 * IETF RFC 791 - https://datatracker.ietf.org/doc/html/rfc791
 *
 * Currently missing:
 * - edge cases like 127.1 or 127.65530 - https://en.wikipedia.org/wiki/IPv4#Address_representations
 * - "special-use addresses" - https://en.wikipedia.org/wiki/IPv4#Special-use_addresses
 * - network classes (probably obsolete cause of CIDR)
 */

import type {Opaque} from '../Opaque';
import {getOctets, SIZE} from './IPv4AddressOctet';
import {ReadonlyUint8Array} from '../ReadonlyTypedArrays';

declare const IPv4AddressSymbol: unique symbol;
export type IPv4Address = Opaque<string, typeof IPv4AddressSymbol>;
export const REGEXP = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
export const BIT_LENGTH = 32;

export const is = (input: string): input is IPv4Address => REGEXP.test(input);

export const getDecimal = (ip: IPv4Address): number => {
    const octets = getOctets(ip);
    return (
        parseInt(octets[3]) +
        parseInt(octets[2]) * SIZE +
        parseInt(octets[1]) * SIZE ** 2 +
        parseInt(octets[0]) * SIZE ** 3
    );
};

export const getHexadecimalString = (ip: IPv4Address): string => {
    return getDecimal(ip).toString(16);
};

export const getBinaryString = (ip: IPv4Address): string => {
    return getDecimal(ip).toString(2);
};

export const getReadonlyUint8Array = (ip: IPv4Address): ReadonlyUint8Array => {
    return ReadonlyUint8Array.from(getOctets(ip).map(octet => parseInt(octet)));
};
