import * as React from 'react';
import User from "../data/User";
import LoginWidget from "./LoginWidget";
import {style} from "typestyle";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {accountStore} from "../data/flux/store";
import {Container} from "flux/utils";
import Portal from "@material-ui/core/Portal/Portal";

const dialogPadding = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: "fixed",
    left: 0,
    top: 0
});

interface PropsFromStore {
    activeUser?: User;
}

type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>

// when multiple components is wrapped by withActiveUser,
// we need to ensure that exactly one of them triggers the login dialog
// rule: the first component that flips this flag triggers the login dialog.
let dialogShown:boolean = false;

export function withActiveUser<P>(Component:React.ComponentType<P & PropsFromStore>):React.ComponentType<Omit<P,"activeUser">> {
    return Container.create(class extends React.Component<Omit<P,"activeUser">, PropsFromStore>{
        static getStores() {return [accountStore]};
        static calculateState():PropsFromStore {
            return {activeUser: accountStore.getState()};
        }
        render() {
            const activeUser = this.state.activeUser;
            if(!activeUser) {
                return <div />;
            }
            else if(User.isLoggedIn(activeUser)) {
                dialogShown = false;
                return <Component activeUser={activeUser} {...this.props}/>;
            }
            else if(User.isGuest(activeUser)) {
                if(dialogShown) return <div />;
                dialogShown = true;
                return <Portal container={document.body}>
                    <div className={dialogPadding}>
                        <LoginWidget/>
                    </div>
                </Portal>;
            }
            return <div />;
        }
    });
}
