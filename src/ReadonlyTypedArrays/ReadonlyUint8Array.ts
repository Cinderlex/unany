export interface ReadonlyUint8Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyUint8Array) => unknown, thisArg?: any): boolean;

    filter(
        predicate: (value: number, index: number, array: ReadonlyUint8Array) => any,
        thisArg?: any
    ): ReadonlyUint8Array;

    find(
        predicate: (value: number, index: number, obj: ReadonlyUint8Array) => boolean,
        thisArg?: any
    ): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyUint8Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyUint8Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(
        callbackfn: (value: number, index: number, array: ReadonlyUint8Array) => number,
        thisArg?: any
    ): ReadonlyUint8Array;

    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyUint8Array
        ) => number
    ): number;
    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyUint8Array
        ) => number,
        initialValue: number
    ): number;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint8Array) => U,
        initialValue: U
    ): U;

    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyUint8Array
        ) => number
    ): number;
    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyUint8Array
        ) => number,
        initialValue: number
    ): number;
    reduceRight<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint8Array) => U,
        initialValue: U
    ): U;

    slice(start?: number, end?: number): ReadonlyUint8Array;

    some(predicate: (value: number, index: number, array: ReadonlyUint8Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyUint8Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyUint8Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyUint8ArrayConstructor {
    readonly prototype: ReadonlyUint8Array;

    readonly BYTES_PER_ELEMENT: number;

    new (elements: Iterable<number>): ReadonlyUint8Array;
    new (length: number): ReadonlyUint8Array;
    new (array: ArrayLike<number> | ArrayBufferLike): ReadonlyUint8Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyUint8Array;

    of(...items: readonly number[]): ReadonlyUint8Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyUint8Array;
    from(arrayLike: ArrayLike<number>): ReadonlyUint8Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyUint8Array;
}

export const ReadonlyUint8Array: ReadonlyUint8ArrayConstructor = Uint8Array;
