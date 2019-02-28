/**
 * Type of T without K, where k is a property of T; e.g. inverse of Pick.
 *
 * @author Martin Hochel <https://github.com/Hotell/rex-tils>
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Type of A without B.
 *
 * @author Martin Hochel <https://github.com/Hotell/rex-tils>
 */
export type Diff<T, K> = Pick<T, Exclude<keyof T, keyof K>>;

/**
 * use this type definition instead of `Function` type constructor
 *
 * @author Martin Hochel <https://github.com/Hotell/rex-tils>
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * simple alias to save you keystrokes when defining JS typed object maps
 *
 * @author Martin Hochel <https://github.com/Hotell/rex-tils>
 */
export type StringMap<T> = { [key: string]: T };
