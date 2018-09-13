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
import * as React from "react";
import { default as EmailInput, validateEmail } from "hltc-webapi-client-shared-components/dist/components/EmailInput";
import Register from "../data/actions/Register";
import { style } from "typestyle";
import indigo from "@material-ui/core/colors/indigo";
import { Body1, Headline } from "hltc-webapi-client-shared-components";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import red from "@material-ui/core/colors/red";
import WhyDisableButton from "hltc-webapi-client-shared-components/dist/components/WhyDisableButton";
var styles = {
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
var RegisterView = /** @class */ (function (_super) {
    __extends(RegisterView, _super);
    function RegisterView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            email: "",
            password: "",
            confirmedPassword: "",
            errorMsg: "",
            signedUp: false,
        };
        return _this;
    }
    RegisterView.prototype.whyCannotSubmit = function () {
        var state = this.state;
        if (!validateEmail(state.email)) {
            return "fill in a valid email";
        }
        if (state.password.length <= 0) {
            return "fill in your password";
        }
        if (state.password !== state.confirmedPassword) {
            return "confirm the same password";
        }
        return null;
    };
    RegisterView.prototype.handleSignUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ errorMsg: "" });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Register.perform(this.state.email, this.state.password)];
                    case 2:
                        _a.sent();
                        this.setState({ signedUp: true });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        switch (e_1.message) {
                            case 'EMAIL_EXISTS':
                                this.setState({ errorMsg: 'Your email has been occupied' });
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
    RegisterView.prototype.renderBeforeSignUp = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.wrap },
            React.createElement("div", { className: styles.container },
                React.createElement(Headline, { gutterBottom: true }, "create account"),
                React.createElement("br", null),
                React.createElement(EmailInput, { label: "email", value: this.state.email, onChange: function (e) { return _this.setState({ email: e.target.value }); } }),
                React.createElement("br", null),
                React.createElement(TextField, { label: "password", type: "password", value: this.state.password, onChange: function (e) { return _this.setState({ password: e.target.value }); } }),
                React.createElement("br", null),
                React.createElement(FormControl, null,
                    React.createElement(InputLabel, null, "confirm password"),
                    React.createElement(Input, { type: "password", value: this.state.confirmedPassword, onChange: function (e) { return _this.setState({ confirmedPassword: e.target.value }); } }),
                    React.createElement(FormHelperText, { style: { color: red[500] } }, this.state.password === this.state.confirmedPassword ? "" : "confirm the same password")),
                React.createElement(Body1, { style: { color: red[500] } },
                    this.state.errorMsg,
                    "\u00A0"),
                React.createElement("div", { className: styles.buttons },
                    React.createElement(WhyDisableButton, { disableReason: this.whyCannotSubmit(), raised: true, color: "primary", onClick: function () { return _this.handleSignUp(); } }, "SIGN UP")))));
    };
    RegisterView.prototype.renderAfterSignUp = function () {
        return (React.createElement("div", { className: styles.wrap },
            React.createElement("div", { className: styles.container },
                React.createElement(Headline, null, "almost done"),
                React.createElement("br", null),
                React.createElement(Body1, null,
                    "we have sent a verification email to ",
                    React.createElement("strong", null, this.state.email)))));
    };
    RegisterView.prototype.render = function () {
        return this.state.signedUp ? this.renderAfterSignUp() : this.renderBeforeSignUp();
    };
    return RegisterView;
}(React.Component));
export default RegisterView;
//# sourceMappingURL=RegisterView.js.map