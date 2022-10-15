// Opaque types implementation is taken from https://ybogomolov.me/making-illegal-states-unrepresentable/
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Tag {
    declare const OpaqueTagSymbol: unique symbol;
    declare class OpaqueTag<S extends symbol> {
        private [OpaqueTagSymbol]: S;
    }
    export type OpaqueType<T, S extends symbol> = T & OpaqueTag<S>;
}

export type Opaque<T, S extends symbol> = Tag.OpaqueType<T, S>;
