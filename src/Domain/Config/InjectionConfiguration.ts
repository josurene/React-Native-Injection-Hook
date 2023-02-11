export interface InjectionConfiguration<T> {
    className: new (...args: any) => T,
}

export default interface InjectionMap {
    [injectionName: string]: InjectionConfiguration<any>;
}
