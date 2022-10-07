export interface ReadonlyInt32Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyInt32Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyInt32Array) => any, thisArg?: any): ReadonlyInt32Array;

    find(predicate: (value: number, index: number, obj: ReadonlyInt32Array) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyInt32Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyInt32Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyInt32Array) => number, thisArg?: any): ReadonlyInt32Array;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyInt32Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyInt32Array;

    some(predicate: (value: number, index: number, array: ReadonlyInt32Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyInt32Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyInt32Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyInt32ArrayConstructor {
    readonly prototype: ReadonlyInt32Array;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyInt32Array;
    new(length: number): ReadonlyInt32Array;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyInt32Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyInt32Array;

    of(...items: readonly number[]): ReadonlyInt32Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyInt32Array;
    from(arrayLike: ArrayLike<number>): ReadonlyInt32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyInt32Array;
}

export const ReadonlyInt32Array: ReadonlyInt32ArrayConstructor = Int32Array;
