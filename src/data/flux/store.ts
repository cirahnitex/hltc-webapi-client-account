import {dispatcher} from "./dispatcher";
import {ReduceStore} from "flux/utils";
import User from "../User";
import Login from "../actions/Login";
import Logout from "../actions/Logout";

class AccountStore extends ReduceStore<User,{}> {
    constructor() {
        super(dispatcher);
        Login.getActiveUser();
    }
    getInitialState() {
        return new User();
    }
    reduce(state:User, action:any):User {
        if(action instanceof Login) {
            return new User(action.id, action.email);
        }

        if(action instanceof Logout) {
            return User.Guest();
        }

        return state;
    }
}

export const accountStore  = new AccountStore();