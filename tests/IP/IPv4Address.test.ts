import {
    getBinaryString,
    getDecimal,
    getHexadecimalString,
    getReadonlyUint8Array,
    IPv4Address,
    is,
} from '../../src/IP/IPv4Address';

describe(is, () => {
    test.each([['0.0.0.0'], ['255.255.255.255'], ['3.20.100.78']])('valid ip address', ip => {
        expect(is(ip)).toBe(true);
    });
    test.each([['1.1.1'], ['255.0.0.255.1'], ['256.0.0.1'], ['123.123.0123.123'], [''], ['ff.ff.ff.ff'], ['qwerty']])(
        'invalid ip address',
        ip => {
            expect(is(ip)).toBe(false);
        }
    );
});

describe(getDecimal, () => {
    test.each([
        ['0.0.0.0', 0],
        ['0.0.0.1', 1],
        ['1.2.3.4', 4 + 3 * 256 + 2 * 256 ** 2 + 256 ** 3],
        ['255.255.255.255', 256 ** 4 - 1],
    ])('decimal value of ip address', (ip: string, decimal: number) => {
        expect(getDecimal(ip as IPv4Address)).toBe(decimal);
    });
});

describe(getHexadecimalString, () => {
    test.each([
        ['0.0.0.0', '0'],
        ['0.0.0.1', '1'],
        ['1.2.3.4', '1020304'],
        ['255.255.255.255', 'ffffffff'],
    ])('ip address as hexadecimal string', (ip: string, hexadecimal: string) => {
        expect(getHexadecimalString(ip as IPv4Address)).toBe(hexadecimal);
    });
});

describe(getBinaryString, () => {
    test.each([
        ['0.0.0.0', '0'],
        ['0.0.0.1', '1'],
        ['1.2.3.4', '1000000100000001100000100'],
        ['255.255.255.255', '11111111111111111111111111111111'],
    ])('ip address as binary (text) string', (ip: string, binary: string) => {
        expect(getBinaryString(ip as IPv4Address)).toBe(binary);
    });
});

describe(getReadonlyUint8Array, () => {
    test.each([
        ['0.0.0.0', [0, 0, 0, 0]],
        ['0.0.0.1', [0, 0, 0, 1]],
        ['1.2.3.4', [1, 2, 3, 4]],
        ['255.255.255.255', [255, 255, 255, 255]],
    ])('ip address as binary (text) string', (ip: string, numberArray: number[]) => {
        const arrayResult = getReadonlyUint8Array(ip as IPv4Address);
        expect(arrayResult.length).toBe(numberArray.length);
        arrayResult.forEach((elem, index) => {
            expect(elem).toBe(numberArray[index]);
        });
    });
});
