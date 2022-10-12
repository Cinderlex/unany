export interface ReadonlyInt16Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyInt16Array) => unknown, thisArg?: any): boolean;

    filter(
        predicate: (value: number, index: number, array: ReadonlyInt16Array) => any,
        thisArg?: any
    ): ReadonlyInt16Array;

    find(
        predicate: (value: number, index: number, obj: ReadonlyInt16Array) => boolean,
        thisArg?: any
    ): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyInt16Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyInt16Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(
        callbackfn: (value: number, index: number, array: ReadonlyInt16Array) => number,
        thisArg?: any
    ): ReadonlyInt16Array;

    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt16Array
        ) => number
    ): number;
    reduce(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt16Array
        ) => number,
        initialValue: number
    ): number;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt16Array) => U,
        initialValue: U
    ): U;

    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt16Array
        ) => number
    ): number;
    reduceRight(
        callbackfn: (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
            array: ReadonlyInt16Array
        ) => number,
        initialValue: number
    ): number;
    reduceRight<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt16Array) => U,
        initialValue: U
    ): U;

    slice(start?: number, end?: number): ReadonlyInt16Array;

    some(predicate: (value: number, index: number, array: ReadonlyInt16Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyInt16Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyInt16Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyInt16ArrayConstructor {
    readonly prototype: ReadonlyInt16Array;

    readonly BYTES_PER_ELEMENT: number;

    new (elements: Iterable<number>): ReadonlyInt16Array;
    new (length: number): ReadonlyInt16Array;
    new (array: ArrayLike<number> | ArrayBufferLike): ReadonlyInt16Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyInt16Array;

    of(...items: readonly number[]): ReadonlyInt16Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyInt16Array;
    from(arrayLike: ArrayLike<number>): ReadonlyInt16Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyInt16Array;
}

export const ReadonlyInt16Array: ReadonlyInt16ArrayConstructor = Int16Array;
