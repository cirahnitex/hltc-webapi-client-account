import React from 'react';
import {NullableUser, User} from "./User";
import Api from "hltc-webapi-client-shared-components/dist/util/Api";
export interface UserContextPayload {
    user: NullableUser;
    login: (email:string, password:string)=>Promise<void>;
    logout: ()=>Promise<void>;
}
export const UserContext = React.createContext<UserContextPayload>({
    user:undefined,
    login: async ()=>{},
    logout: async ()=>{}
});

interface Props {
    children:React.ReactFragment
}

export function UserContextProviderComponent(props:Props) {
    const [user, setUser] = React.useState<NullableUser>();
    const payload:UserContextPayload = {
        user,
        login: async (email:string, password:string)=>{
            const res = await Api.request("/account/login", {email,password});
            const emailNode = res.querySelector("email");
            const idNode = res.querySelector("id");
            if(emailNode && emailNode.textContent && emailNode.textContent.length>0 && idNode && idNode.textContent && idNode.textContent.length>0) {
                setUser(new User(idNode.textContent, emailNode.textContent));
            }
        },
        logout: async ()=>{
            await Api.request("/account/logout");
            setUser(null);
        }
    };
    React.useEffect(()=>{
        (async()=>{
            const res = await Api.request("/account/get_active_user");
            const emailNode = res.querySelector("email");
            const idNode = res.querySelector("id");
            if(emailNode && emailNode.textContent && emailNode.textContent.length>0 && idNode && idNode.textContent && idNode.textContent.length>0) {
                setUser(new User(idNode.textContent, emailNode.textContent));
            }
            else {
                setUser(null);
            }
        })();
    }, [null]);
    return <UserContext.Provider value={payload}>
        {props.children}
    </UserContext.Provider>
}
