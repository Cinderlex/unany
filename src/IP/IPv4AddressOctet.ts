/**
 * IETF RFC 791 - https://datatracker.ietf.org/doc/html/rfc791
 */

import type {Opaque} from '../Opaque';
import type {IPv4Address} from './IPv4Address';

declare const IPv4AddressOctetSymbol: unique symbol;
export type IPv4AddressOctet = Opaque<string, typeof IPv4AddressOctetSymbol>;
export const REGEXP = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
export const SIZE = 256;

export const is = (input: string): input is IPv4AddressOctet => REGEXP.test(input);

type OctetTuple = readonly [IPv4AddressOctet, IPv4AddressOctet, IPv4AddressOctet, IPv4AddressOctet];
export const getOctets = (ip: IPv4Address): OctetTuple => ip.split('.') as unknown as OctetTuple;
