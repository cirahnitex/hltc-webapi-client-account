var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Api from "hltc-webapi-client-shared-components/dist/util/Api";
import * as CachedUserCredential from "./CachedUserCredential";
import Logout from "./Logout";
import { dispatcher } from "../flux/dispatcher";
var Login = /** @class */ (function () {
    function Login(id, email) {
        this.email = email;
        this.id = id;
    }
    Login.perform = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var json, action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Api.request("/account/login", { email: email, password: password })];
                    case 1:
                        json = _a.sent();
                        action = new Login(parseInt(json.user.ID), json.user.email);
                        dispatcher.dispatch(action);
                        CachedUserCredential.set({ id: action.id, email: action.email, password: password });
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.getActiveUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cache, json, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CachedUserCredential.get()];
                    case 1:
                        cache = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Api.request("/account/get_active_user")];
                    case 3:
                        json = _a.sent();
                        if (json.user) {
                            dispatcher.dispatch(new Login(parseInt(json.user.ID), json.user.email));
                            return [2 /*return*/];
                        }
                        if (cache) {
                            try {
                                dispatcher.dispatch(Login.perform(cache.email, cache.password));
                                return [2 /*return*/];
                            }
                            catch (e) {
                                dispatcher.dispatch(new Logout());
                                return [2 /*return*/];
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (cache) {
                            dispatcher.dispatch(new Login(cache.id, cache.email));
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        dispatcher.dispatch(new Logout());
                        return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());
export default Login;
//# sourceMappingURL=Login.js.map