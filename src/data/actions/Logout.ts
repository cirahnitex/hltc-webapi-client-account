import Api from "hltc-webapi-client-shared-components/dist/util/Api";
import {dispatcher} from "../flux/dispatcher";

export default class Logout {
    static async perform() {
        await Api.request("/account/logout");
        dispatcher.dispatch(new Logout());
    }
}
