import User from "../User";
import Login from "../actions/Login";
import Logout from "../actions/Logout";
export function userReducer(user, action) {
    if (action instanceof Login) {
        return new User(action.id, action.email);
    }
    else if (action instanceof Logout) {
        return User.Guest();
    }
    return user;
}
//# sourceMappingURL=userReducer.js.map