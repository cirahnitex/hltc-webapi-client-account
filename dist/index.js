import * as React from "react";
import * as ReactDom from "react-dom";
import { withActiveUser } from "./view/withActiveUser";
var App = function (props) {
    return React.createElement("div", null,
        "welcome, ",
        props.activeUser.email);
};
var Wrapped = withActiveUser(App);
ReactDom.render(React.createElement(Wrapped, null), document.querySelector('#root'));
//# sourceMappingURL=index.js.map