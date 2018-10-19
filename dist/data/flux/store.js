var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { dispatcher } from "./dispatcher";
import { ReduceStore } from "flux/utils";
import User from "../User";
import Login from "../actions/Login";
import Logout from "../actions/Logout";
var AccountStore = /** @class */ (function (_super) {
    __extends(AccountStore, _super);
    function AccountStore() {
        var _this = _super.call(this, dispatcher) || this;
        Login.getActiveUser();
        setTimeout(function () { return Login.getActiveUser(); }, 50); // react native has some delay when injecting necessary js. wait for it.
        return _this;
    }
    AccountStore.prototype.getInitialState = function () {
        return new User();
    };
    AccountStore.prototype.reduce = function (state, action) {
        if (action instanceof Login) {
            return new User(action.id, action.email);
        }
        if (action instanceof Logout) {
            return User.Guest();
        }
        return state;
    };
    return AccountStore;
}(ReduceStore));
export var accountStore = new AccountStore();
//# sourceMappingURL=store.js.map