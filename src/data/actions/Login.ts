import Api from "hltc-webapi-client-shared-components/dist/util/Api";
import * as CachedUserCredential from "./CachedUserCredential";
import Logout from "./Logout";
import {dispatcher} from "../flux/dispatcher";

export default class Login {
    email: string;
    id: number;

    constructor(id: number, email: string) {
        this.email = email;
        this.id = id;
    }

    static async perform(email:string, password:string) {
        const json = await Api.request("/account/login",{email,password});
        const action = new Login(parseInt(json.user.ID),json.user.email);
        dispatcher.dispatch(action);
        CachedUserCredential.set({id:action.id, email:action.email, password});
    }

    static async getActiveUser() {
        const cache = await CachedUserCredential.get();
        try {
            const json = await Api.request("/account/get_active_user");
            if(json.user) {
                dispatcher.dispatch( new Login(parseInt(json.user.ID), json.user.email));
                return;
            }
            if(cache) {
                try {
                    dispatcher.dispatch(Login.perform(cache.email, cache.password));
                    return;
                }
                catch(e) {
                    dispatcher.dispatch(new Logout());
                    return;
                }
            }
        }
        catch(e) {
            if(cache) {
                dispatcher.dispatch(new Login(cache.id, cache.email));
                return;
            }
        }
        dispatcher.dispatch(new Logout());
    }
}