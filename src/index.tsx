import * as React from "react";
import * as ReactDom from "react-dom";
import {withActiveUser} from "./view/withActiveUser";
import User from "./data/User";

const App = (props:{activeUser:User})=>{
    return <div>welcome, {props.activeUser.email}</div>
};

const Wrapped = withActiveUser(App);

ReactDom.render(<Wrapped />, document.querySelector('#root'));

