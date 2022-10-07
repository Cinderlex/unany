export interface ReadonlyUint8ClampedArray {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyUint8ClampedArray) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyUint8ClampedArray) => any, thisArg?: any): ReadonlyUint8ClampedArray;

    find(predicate: (value: number, index: number, obj: ReadonlyUint8ClampedArray) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyUint8ClampedArray) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyUint8ClampedArray) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyUint8ClampedArray) => number, thisArg?: any): ReadonlyUint8ClampedArray;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyUint8ClampedArray) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyUint8ClampedArray;

    some(predicate: (value: number, index: number, array: ReadonlyUint8ClampedArray) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyUint8ClampedArray;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyUint8ClampedArray;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyUint8ClampedArrayConstructor {
    readonly prototype: ReadonlyUint8ClampedArray;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyUint8ClampedArray;
    new(length: number): ReadonlyUint8ClampedArray;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyUint8ClampedArray;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyUint8ClampedArray;

    of(...items: readonly number[]): ReadonlyUint8ClampedArray;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyUint8ClampedArray;
    from(arrayLike: ArrayLike<number>): ReadonlyUint8ClampedArray;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyUint8ClampedArray;
}

export const ReadonlyUint8ClampedArray: ReadonlyUint8ClampedArrayConstructor = Uint8ClampedArray;
