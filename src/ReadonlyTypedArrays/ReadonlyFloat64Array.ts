export interface ReadonlyFloat64Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyFloat64Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyFloat64Array) => any, thisArg?: any): ReadonlyFloat64Array;

    find(predicate: (value: number, index: number, obj: ReadonlyFloat64Array) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyFloat64Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyFloat64Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyFloat64Array) => number, thisArg?: any): ReadonlyFloat64Array;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyFloat64Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyFloat64Array;

    some(predicate: (value: number, index: number, array: ReadonlyFloat64Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyFloat64Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyFloat64Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyFloat64ArrayConstructor {
    readonly prototype: ReadonlyFloat64Array;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyFloat64Array;
    new(length: number): ReadonlyFloat64Array;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyFloat64Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyFloat64Array;

    of(...items: readonly number[]): ReadonlyFloat64Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyFloat64Array;
    from(arrayLike: ArrayLike<number>): ReadonlyFloat64Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyFloat64Array;
}

export const ReadonlyFloat64Array: ReadonlyFloat64ArrayConstructor = Float64Array;
