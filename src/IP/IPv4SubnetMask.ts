import type {Opaque} from '../Opaque';
import {getBinaryString, BIT_LENGTH, IPv4Address, is as isIPv4Address} from './IPv4Address';

declare const IPv4SubnetMaskSymbol: unique symbol;
export type IPv4SubnetMask = Opaque<IPv4Address, typeof IPv4SubnetMaskSymbol>;

export const is = (input: string): input is IPv4SubnetMask => {
    if (!isIPv4Address(input)) {
        return false;
    }
    const binary = getBinaryString(input);
    return (/^1*0*$/.test(binary) && binary.length === BIT_LENGTH) || binary === '0';
};
