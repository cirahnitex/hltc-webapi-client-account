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
import * as React from 'react';
import User from "../data/User";
import LoginWidget from "./LoginWidget";
import { style } from "typestyle";
import { accountStore } from "../data/flux/store";
import { Container } from "flux/utils";
import Portal from "@material-ui/core/Portal/Portal";
var dialogPadding = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: "fixed",
    left: 0,
    top: 0
});
// when multiple components is wrapped by withActiveUser,
// we need to ensure that exactly one of them triggers the login dialog
// rule: the first component that flips this flag triggers the login dialog.
var dialogShown = false;
export function withActiveUser(Component) {
    return Container.create(/** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.getStores = function () { return [accountStore]; };
        ;
        class_1.calculateState = function () {
            return { activeUser: accountStore.getState() };
        };
        class_1.prototype.render = function () {
            var activeUser = this.state.activeUser;
            if (!activeUser) {
                return React.createElement("div", null);
            }
            else if (User.isLoggedIn(activeUser)) {
                dialogShown = false;
                return React.createElement(Component, __assign({ activeUser: activeUser }, this.props));
            }
            else if (User.isGuest(activeUser)) {
                if (dialogShown)
                    return React.createElement("div", null);
                dialogShown = true;
                return React.createElement(Portal, { container: document.body },
                    React.createElement("div", { className: dialogPadding },
                        React.createElement(LoginWidget, null)));
            }
            return React.createElement("div", null);
        };
        return class_1;
    }(React.Component)));
}
//# sourceMappingURL=withActiveUser.js.map