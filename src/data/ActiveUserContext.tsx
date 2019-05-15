import React from 'react';
import {UserContext, UserContextProviderComponent, UserContextPayload} from "./UserContext";
import Portal from "@material-ui/core/Portal";
import LoginWidget from "../view/LoginWidget";
import {style} from "typestyle";
import {User, isGuest, isUnavailable} from "./User";

export type ActiveUserContextPayload = UserContextPayload & {user: User};

export const ActiveUserContext = UserContext as React.Context<ActiveUserContextPayload>;

const dialogPadding = style({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: "fixed",
    left: 0,
    top: 0
});

interface Props {
    children: React.ReactFragment;
}

export function ActiveUserContextProviderComponent({children}:Props) {
    return <UserContextProviderComponent>
        <UserContext.Consumer>
            {({user})=>{
                if(isUnavailable(user)) return <div />;
                if(isGuest(user)) return <Portal container={document.body}>
                    <div className={dialogPadding}>
                        <LoginWidget/>
                    </div>
                </Portal>;
                return children;
            }}
        </UserContext.Consumer>
    </UserContextProviderComponent>
}