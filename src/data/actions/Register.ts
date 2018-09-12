import Api from "hltc-webapi-client-shared-components/dist/util/Api";
import {dispatcher} from "../flux/dispatcher";

export default class Register {
    email:string;

    constructor(email: string) {
        this.email = email;
    }

    static async perform(email:string, password:string) {
        await Api.request("/account/register",{email,password});
        dispatcher.dispatch(new Register(email));
    }
}