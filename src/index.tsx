import React from "react";
import ReactDom from "react-dom";
import {ActiveUserContextProviderComponent} from "./data/ActiveUserContext";
import ActiveUserView from "./view/ActiveUserView";

ReactDom.render(<ActiveUserContextProviderComponent>
    <ActiveUserView/>
</ActiveUserContextProviderComponent>, document.querySelector('#root'));

