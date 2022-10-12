export interface ReadonlyInt8Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyInt8Array) => unknown, thisArg?: any): boolean;

    filter(
        predicate: (value: number, index: number, array: ReadonlyInt8Array) => any,
        thisArg?: any
    ): ReadonlyInt8Array;

    find(
        predicate: (value: number, index: number, obj: ReadonlyInt8Array) => boolean,
        thisArg?: any
    ): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyInt8Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyInt8Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(
        callbackfn: (value: number, index: number, array: ReadonlyInt8Array) => number,
        thisArg?: any
    ): ReadonlyInt8Array;

    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt8Array
        ) => number
    ): number;
    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt8Array
        ) => number,
        initialValue: number
    ): number;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt8Array) => U,
        initialValue: U
    ): U;

    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt8Array
        ) => number
    ): number;
    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt8Array
        ) => number,
        initialValue: number
    ): number;
    reduceRight<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt8Array) => U,
        initialValue: U
    ): U;

    slice(start?: number, end?: number): ReadonlyInt8Array;

    some(predicate: (value: number, index: number, array: ReadonlyInt8Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyInt8Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyInt8Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyInt8ArrayConstructor {
    readonly prototype: ReadonlyInt8Array;

    readonly BYTES_PER_ELEMENT: number;

    new (elements: Iterable<number>): ReadonlyInt8Array;
    new (length: number): ReadonlyInt8Array;
    new (array: ArrayLike<number> | ArrayBufferLike): ReadonlyInt8Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyInt8Array;

    of(...items: readonly number[]): ReadonlyInt8Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyInt8Array;
    from(arrayLike: ArrayLike<number>): ReadonlyInt8Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyInt8Array;
}

export const ReadonlyInt8Array: ReadonlyInt8ArrayConstructor = Int8Array;
