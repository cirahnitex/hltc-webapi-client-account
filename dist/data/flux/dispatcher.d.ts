import { Dispatcher } from "flux";
declare class DelayedDispatcher extends Dispatcher<any> {
    dispatch(action: any): void;
}
export declare const dispatcher: DelayedDispatcher;
export {};
