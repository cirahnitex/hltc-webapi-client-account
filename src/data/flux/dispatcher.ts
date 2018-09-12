import {Dispatcher} from "flux";

class DelayedDispatcher extends Dispatcher<any> {
    dispatch(action:any) {
        setTimeout(()=>super.dispatch(action),0);
    }
}

export const dispatcher = new DelayedDispatcher();