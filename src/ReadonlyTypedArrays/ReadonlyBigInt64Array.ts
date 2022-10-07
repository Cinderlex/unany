export interface ReadonlyBigInt64Array {
    readonly [index: number]: bigint;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: bigint, index: number, array: ReadonlyBigInt64Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: bigint, index: number, array: ReadonlyBigInt64Array) => any, thisArg?: any): ReadonlyBigInt64Array;

    find(predicate: (value: bigint, index: number, obj: ReadonlyBigInt64Array) => boolean, thisArg?: any): bigint | undefined;

    findIndex(predicate: (value: bigint, index: number, obj: ReadonlyBigInt64Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: bigint, index: number, array: ReadonlyBigInt64Array) => void, thisArg?: any): void;

    indexOf(searchElement: bigint, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: bigint, fromIndex?: number): number;

    map(callbackfn: (value: bigint, index: number, array: ReadonlyBigInt64Array) => bigint, thisArg?: any): ReadonlyBigInt64Array;

    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => bigint): bigint;
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => bigint, initialValue: bigint): bigint;
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => bigint): bigint;
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => bigint, initialValue: bigint): bigint;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: ReadonlyBigInt64Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyBigInt64Array;

    some(predicate: (value: bigint, index: number, array: ReadonlyBigInt64Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyBigInt64Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyBigInt64Array;

    at(index: number): bigint | undefined;

    [Symbol.iterator](): IterableIterator<bigint>;

    entries(): IterableIterator<[number, bigint]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<bigint>;
}

export interface ReadonlyBigInt64ArrayConstructor {
    readonly prototype: ReadonlyBigInt64Array;

    readonly BYTES_PER_ELEMENT: number;

    new(length?: number): ReadonlyBigInt64Array;
    new(array: Iterable<bigint>): ReadonlyBigInt64Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyBigInt64Array;

    of(...items: readonly bigint[]): ReadonlyBigInt64Array;

    from(arrayLike: ArrayLike<bigint>): ReadonlyBigInt64Array;
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): ReadonlyBigInt64Array;

}

export const ReadonlyBigInt64Array: ReadonlyBigInt64ArrayConstructor = BigInt64Array;
