import * as React from 'react';
import User from "../data/User";
interface PropsFromStore {
    activeUser?: User;
}
declare type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
export declare function withActiveUser<P>(Component: React.ComponentType<P & PropsFromStore>): React.ComponentType<Omit<P, "activeUser">>;
export {};
