export interface ReadonlyUint16Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyUint16Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyUint16Array) => any, thisArg?: any): ReadonlyUint16Array;

    find(predicate: (value: number, index: number, obj: ReadonlyUint16Array) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyUint16Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyUint16Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyUint16Array) => number, thisArg?: any): ReadonlyUint16Array;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint16Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyUint16Array;

    some(predicate: (value: number, index: number, array: ReadonlyUint16Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyUint16Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyUint16Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyUint16ArrayConstructor {
    readonly prototype: ReadonlyUint16Array;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyUint16Array;
    new(length: number): ReadonlyUint16Array;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyUint16Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyUint16Array;

    of(...items: readonly number[]): ReadonlyUint16Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyUint16Array;
    from(arrayLike: ArrayLike<number>): ReadonlyUint16Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyUint16Array;
}

export const ReadonlyUint16Array: ReadonlyUint16ArrayConstructor = Uint16Array;
