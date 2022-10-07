export interface ReadonlyUint32Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyUint32Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyUint32Array) => any, thisArg?: any): ReadonlyUint32Array;

    find(predicate: (value: number, index: number, obj: ReadonlyUint32Array) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyUint32Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyUint32Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyUint32Array) => number, thisArg?: any): ReadonlyUint32Array;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint32Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyUint32Array;

    some(predicate: (value: number, index: number, array: ReadonlyUint32Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyUint32Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyUint32Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyUint32ArrayConstructor {
    readonly prototype: ReadonlyUint32Array;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyUint32Array;
    new(length: number): ReadonlyUint32Array;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyUint32Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyUint32Array;

    of(...items: readonly number[]): ReadonlyUint32Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyUint32Array;
    from(arrayLike: ArrayLike<number>): ReadonlyUint32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyUint32Array;
}

export const ReadonlyUint32Array: ReadonlyUint32ArrayConstructor = Uint32Array;
