import React from 'react';
import EmailInput, {validateEmail} from "hltc-webapi-client-shared-components/dist/components/EmailInput";
import red from "@material-ui/core/colors/red";
import DebounceButton from "hltc-webapi-client-shared-components/dist/components/DebounceButton";
import {style} from "typestyle";
import TextField from "@material-ui/core/TextField/TextField";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography/Typography";
import indigo from "@material-ui/core/colors/indigo";
import {UserContext} from "../data/UserContext";

const registerStyles = {
    wrap: style({marginTop: 24,display:"flex",justifyContent:"center"}),
    container: style({display:"flex", flexDirection: "column", width: 400, maxWidth: '100%'}),
    formControl: style({marginTop: 8}),
    buttons: style({display: "flex", justifyContent:"flex-end"}),
    dialog: style({padding: 24}),
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

function LoginWidget() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [errorMsg, setErrorMsg] = React.useState<string>("");
    const {login} = React.useContext(UserContext);
    function whyCannotSubmit() {
        if(!validateEmail(email)) return "enter a valid email";
        if(password.length <= 0) return "enter your password";
        return null;
    }
    async function handleLogin() {
        if(whyCannotSubmit()) return;
        setErrorMsg("");
        try {
            await login(email, password);
        }
        catch(e) {
            switch(e.message) {
                case "INCORRECT_CREDENTIAL":
                    setErrorMsg("incorrect username or password.");
                    break;
                case "NOT_ACTIVATED":
                    setErrorMsg("your account is not verified yet. check your verification email.");
                    break;
                default:
                    setErrorMsg(e.message);
            }
        }
    }

    return (
        <div className={registerStyles.container}>
            <div className={registerStyles.center}>
                <Avatar className={registerStyles.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant="h4">sign in</Typography>
            </div>
            <EmailInput value={email} label="email"
                        onChange={e=>setEmail(e.target.value)}
            />
            <div style={{height:16}}/>
            <TextField value={password} type="password" label="password"
                       onChange={e=>setPassword(e.target.value)}
                       onKeyPress={e=>e.which === 13 && handleLogin()}
            />
            <Typography style={{color:red[500]}}>{errorMsg}&nbsp;</Typography>
            <div style={{height:16}}/>
            <div className={registerStyles.buttons}>
                <DebounceButton disabled={!!whyCannotSubmit()}
                                variant={"contained"} color="primary"
                                onClick={handleLogin}>
                    sign in
                </DebounceButton>
            </div>
            <div style={{height:16}}/>
            <Typography><a target="_blank" href="/webapi/gui/account/register.html">forget password</a></Typography>
            <Typography>don't have an account? <a target="_blank" href="/webapi/gui/account/register.html">sign up</a> now.</Typography>
        </div>
    );
}

export default LoginWidget;