export interface ReadonlyFloat32Array {
    readonly [index: number]: number;

    readonly length: number;

    readonly BYTES_PER_ELEMENT: number;

    readonly buffer: ArrayBufferLike;

    readonly byteLength: number;

    readonly byteOffset: number;

    every(predicate: (value: number, index: number, array: ReadonlyFloat32Array) => unknown, thisArg?: any): boolean;

    filter(predicate: (value: number, index: number, array: ReadonlyFloat32Array) => any, thisArg?: any): ReadonlyFloat32Array;

    find(predicate: (value: number, index: number, obj: ReadonlyFloat32Array) => boolean, thisArg?: any): number | undefined;

    findIndex(predicate: (value: number, index: number, obj: ReadonlyFloat32Array) => boolean, thisArg?: any): number;

    forEach(callbackfn: (value: number, index: number, array: ReadonlyFloat32Array) => void, thisArg?: any): void;

    indexOf(searchElement: number, fromIndex?: number): number;

    join(separator?: string): string;

    lastIndexOf(searchElement: number, fromIndex?: number): number;

    map(callbackfn: (value: number, index: number, array: ReadonlyFloat32Array) => number, thisArg?: any): ReadonlyFloat32Array;

    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => U, initialValue: U): U;

    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: ReadonlyFloat32Array) => U, initialValue: U): U;

    slice(start?: number, end?: number): ReadonlyFloat32Array;

    some(predicate: (value: number, index: number, array: ReadonlyFloat32Array) => unknown, thisArg?: any): boolean;

    subarray(begin?: number, end?: number): ReadonlyFloat32Array;

    toLocaleString(): string;

    toString(): string;

    valueOf(): ReadonlyFloat32Array;

    at(index: number): number | undefined;

    [Symbol.iterator](): IterableIterator<number>;

    entries(): IterableIterator<[number, number]>;

    keys(): IterableIterator<number>;

    values(): IterableIterator<number>;
}

export interface ReadonlyFloat32ArrayConstructor {
    readonly prototype: ReadonlyFloat32Array;

    readonly BYTES_PER_ELEMENT: number;

    new(elements: Iterable<number>): ReadonlyFloat32Array;
    new(length: number): ReadonlyFloat32Array;
    new(array: ArrayLike<number> | ArrayBufferLike): ReadonlyFloat32Array;
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): ReadonlyFloat32Array;

    of(...items: readonly number[]): ReadonlyFloat32Array;

    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): ReadonlyFloat32Array;
    from(arrayLike: ArrayLike<number>): ReadonlyFloat32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): ReadonlyFloat32Array;
}

export const ReadonlyFloat32Array: ReadonlyFloat32ArrayConstructor = Float32Array;
