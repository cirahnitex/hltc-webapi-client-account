import { ReduceStore } from "flux/utils";
import User from "../User";
declare class AccountStore extends ReduceStore<User, {}> {
    constructor();
    getInitialState(): User;
    reduce(state: User, action: any): User;
}
export declare const accountStore: AccountStore;
export {};
