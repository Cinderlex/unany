export interface ReadonlyBigUint64Array {
    readonly [index: number]: bigint;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: bigint, index: number, array: ReadonlyBigUint64Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: bigint, index: number, array: ReadonlyBigUint64Array) => any, thisArg?: any): ReadonlyBigUint64Array;

    find(predicate: (value: bigint, index: number, obj: ReadonlyBigUint64Array) => boolean, thisArg?: any): bigint | undefined;

    findIndex(predicate: (value: bigint, index: number, obj: ReadonlyBigUint64Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: bigint, index: number, array: ReadonlyBigUint64Array) => void, thisArg?: any): void;

    indexOf(searchElement: bigint, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: bigint, fromIndex?: number): number;

    map(callbackfn: (value: bigint, index: number, array: ReadonlyBigUint64Array) => bigint, thisArg?: any): ReadonlyBigUint64Array;

    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => bigint): bigint;
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => bigint, initialValue: bigint): bigint;
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => bigint): bigint;
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => bigint, initialValue: bigint): bigint;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: ReadonlyBigUint64Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyBigUint64Array;

    some(predicate: (value: bigint, index: number, array: ReadonlyBigUint64Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyBigUint64Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyBigUint64Array;

    at(index: number): bigint | undefined;

    [Symbol.iterator](): IterableIterator<bigint>;

    entries(): IterableIterator<[number, bigint]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<bigint>;
}

export interface ReadonlyBigUint64ArrayConstructor {
    readonly prototype: ReadonlyBigUint64Array;

    readonly BYTES_PER_ELEMENT: number;

    new(length?: number): ReadonlyBigUint64Array;
    new(array: Iterable<bigint>): ReadonlyBigUint64Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyBigUint64Array;

    of(...items: readonly bigint[]): ReadonlyBigUint64Array;

    from(arrayLike: ArrayLike<bigint>): ReadonlyBigUint64Array;
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): ReadonlyBigUint64Array;

}

export const ReadonlyBigUint64Array: ReadonlyBigUint64ArrayConstructor = BigUint64Array;
