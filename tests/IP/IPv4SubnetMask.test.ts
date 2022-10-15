import {is} from '../../src/IP/IPv4SubnetMask';

describe(is, () => {
    test.each([['255.255.255.255'], ['0.0.0.0'], ['128.0.0.0'], ['255.255.255.0']])('valid ipv4 subnet mask', mask => {
        expect(is(mask)).toBe(true);
    });
    test.each([
        ['254.255.255.255'],
        ['0.0.0.1'],
        ['255.255.0'],
        ['255.255.255.255.0'],
        ['ff.ff.ff.ff'],
        [''],
        ['qwerty'],
    ])('invalid ipv4 subnet mask', mask => {
        expect(is(mask)).toBe(false);
    });
});
