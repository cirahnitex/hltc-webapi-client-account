import * as React from 'react';
import EmailInput, {validateEmail} from "hltc-webapi-client-shared-components/dist/components/EmailInput";
import {Body1, Headline, Title} from "hltc-webapi-client-shared-components/dist/components/typographies";
import red from "@material-ui/core/colors/red";
import DebounceButton from "hltc-webapi-client-shared-components/dist/components/DebounceButton";
import {style} from "typestyle";
import TextField from "@material-ui/core/TextField/TextField";
import Login from "../data/actions/Login";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography/Typography";
import indigo from "@material-ui/core/colors/indigo";

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

interface Props{
    style?: React.CSSProperties
}
interface State {
    email:string,
    password:string,
    errorMsg: string
}
namespace Styles {
    export const title = style({margin:"8px 0 16px 0"});
}
class LoginWidget extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            errorMsg:"",
        }
    }
    whyCannotSubmit() {
        if(!validateEmail(this.state.email)) return "enter a valid email";
        if(this.state.password.length <= 0) return "enter your password";
        return null;
    }
    async handleLogin() {
        if(this.whyCannotSubmit()) return;
        this.setState({errorMsg:""});
        try {
            await Login.perform(this.state.email, this.state.password);
        }
        catch(e) {
            switch(e.message) {
                case "INCORRECT_CREDENTIAL":
                    this.setState({errorMsg:"incorrect username or password."});
                    break;
                case "NOT_ACTIVATED":
                    this.setState({errorMsg:"your account is not verified yet. check your verification email."});
                    break;
                default:
                    this.setState({errorMsg:e.message})
            }
        }
    }
    render() {
        return (
        <div className={registerStyles.container} {...this.props}>
            <div className={registerStyles.center}>
                <Avatar className={registerStyles.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant="headline">sign in</Typography>
            </div>
            <EmailInput value={this.state.email} label="email"
                        onChange={e=>this.setState({email:e.target.value})}
            />
            <div style={{height:16}}/>
            <TextField value={this.state.password} type="password" label="password"
                       onChange={e=>this.setState({password:e.target.value})}
                       onKeyPress={e=>e.which===13 && this.handleLogin()}
            />
            <Body1 style={{color:red[500]}}>{this.state.errorMsg}&nbsp;</Body1>
            <div style={{height:16}}/>
            <div className={registerStyles.buttons}>
                <DebounceButton disabled={!!this.whyCannotSubmit()}
                                raised color="primary"
                                onClick={()=>this.handleLogin()}>
                    sign in
                </DebounceButton>
            </div>
            <div style={{height:16}}/>
            <Body1><a target="_blank" href="/webapi/gui/account/register.html">forget password</a></Body1>
            <Body1>don't have an account? <a target="_blank" href="/webapi/gui/account/register.html">sign up</a> now.</Body1>
        </div>
        );
    }
}

export default LoginWidget;