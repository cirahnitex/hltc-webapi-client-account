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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import * as React from 'react';
import EmailInput, { validateEmail } from "hltc-webapi-client-shared-components/dist/components/EmailInput";
import { Body1 } from "hltc-webapi-client-shared-components/dist/components/typographies";
import red from "@material-ui/core/colors/red";
import DebounceButton from "hltc-webapi-client-shared-components/dist/components/DebounceButton";
import { style } from "typestyle";
import TextField from "@material-ui/core/TextField/TextField";
import Login from "../data/actions/Login";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography/Typography";
import indigo from "@material-ui/core/colors/indigo";
var registerStyles = {
    wrap: style({ marginTop: 24, display: "flex", justifyContent: "center" }),
    container: style({ display: "flex", flexDirection: "column", width: 400, maxWidth: '100%' }),
    formControl: style({ marginTop: 8 }),
    buttons: style({ display: "flex", justifyContent: "flex-end" }),
    dialog: style({ padding: 24 }),
    avatar: style({
        margin: 8, backgroundColor: indigo[500]
    }),
    center: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 8
    })
};
var Styles;
(function (Styles) {
    Styles.title = style({ margin: "8px 0 16px 0" });
})(Styles || (Styles = {}));
var LoginWidget = /** @class */ (function (_super) {
    __extends(LoginWidget, _super);
    function LoginWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            email: "",
            password: "",
            errorMsg: "",
        };
        return _this;
    }
    LoginWidget.prototype.whyCannotSubmit = function () {
        if (!validateEmail(this.state.email))
            return "enter a valid email";
        if (this.state.password.length <= 0)
            return "enter your password";
        return null;
    };
    LoginWidget.prototype.handleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.whyCannotSubmit())
                            return [2 /*return*/];
                        this.setState({ errorMsg: "" });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Login.perform(this.state.email, this.state.password)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        switch (e_1.message) {
                            case "INCORRECT_CREDENTIAL":
                                this.setState({ errorMsg: "incorrect username or password." });
                                break;
                            case "NOT_ACTIVATED":
                                this.setState({ errorMsg: "your account is not verified yet. check your verification email." });
                                break;
                            default:
                                this.setState({ errorMsg: e_1.message });
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginWidget.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", __assign({ className: registerStyles.container }, this.props),
            React.createElement("div", { className: registerStyles.center },
                React.createElement(Avatar, { className: registerStyles.avatar },
                    React.createElement(LockIcon, null)),
                React.createElement(Typography, { variant: "headline" }, "sign in")),
            React.createElement(EmailInput, { value: this.state.email, label: "email", onChange: function (e) { return _this.setState({ email: e.target.value }); } }),
            React.createElement("div", { style: { height: 16 } }),
            React.createElement(TextField, { value: this.state.password, type: "password", label: "password", onChange: function (e) { return _this.setState({ password: e.target.value }); }, onKeyPress: function (e) { return e.which === 13 && _this.handleLogin(); } }),
            React.createElement(Body1, { style: { color: red[500] } },
                this.state.errorMsg,
                "\u00A0"),
            React.createElement("div", { style: { height: 16 } }),
            React.createElement("div", { className: registerStyles.buttons },
                React.createElement(DebounceButton, { disabled: !!this.whyCannotSubmit(), raised: true, color: "primary", onClick: function () { return _this.handleLogin(); } }, "sign in")),
            React.createElement("div", { style: { height: 16 } }),
            React.createElement(Body1, null,
                React.createElement("a", { target: "_blank", href: "/webapi/gui/account/register.html" }, "forget password")),
            React.createElement(Body1, null,
                "don't have an account? ",
                React.createElement("a", { target: "_blank", href: "/webapi/gui/account/register.html" }, "sign up"),
                " now.")));
    };
    return LoginWidget;
}(React.Component));
export default LoginWidget;
//# sourceMappingURL=LoginWidget.js.map