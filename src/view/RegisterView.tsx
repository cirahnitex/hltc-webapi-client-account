import * as React from "react";
import {default as EmailInput, validateEmail} from "hltc-webapi-client-shared-components/dist/components/EmailInput";
import {register} from "../data/actions/register";
import {style} from "typestyle";
import indigo from "@material-ui/core/colors/indigo";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import red from "@material-ui/core/colors/red";
import WhyDisableButton from "hltc-webapi-client-shared-components/dist/components/WhyDisableButton";
import {Typography} from "@material-ui/core";
const styles = {
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

interface Props {

}

interface State {
    email: string;
    password: string;
    confirmedPassword: string;
    errorMsg: string;
    signedUp: boolean;
}

export default class RegisterView extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmedPassword: "",
            errorMsg:"",
            signedUp: false,
        }
    }
    whyCannotSubmit() {
        const state = this.state;
        if(!validateEmail(state.email)) {
            return "fill in a valid email";
        }
        if(state.password.length<=0) {
            return "fill in your password"
        }
        if(state.password !== state.confirmedPassword) {
            return "confirm the same password"
        }
        return null;
    }
    async handleSignUp() {
        this.setState({errorMsg:""});
        try {
            await register(this.state.email, this.state.password);
            this.setState({signedUp:true});
        }
        catch(e) {
            switch(e.message) {
                case 'EMAIL_EXISTS':
                    this.setState({errorMsg:'Your email has been occupied'});
                    break;
                default:
                    this.setState({errorMsg:e.message});
            }
        }
    }
    renderBeforeSignUp() {
        return (
            <div className={styles.wrap}><div className={styles.container}>
                <Typography variant={"headline"} gutterBottom>create account</Typography>
                <br />
                <EmailInput
                    label="email"
                    value={this.state.email}
                    onChange={e=>this.setState({email:e.target.value})}
                />
                <br />
                <TextField
                    label="password"
                    type="password"
                    value={this.state.password}
                    onChange={e=>this.setState({password:e.target.value})}
                />
                <br />
                <FormControl>
                    <InputLabel>confirm password</InputLabel>
                    <Input
                        type="password"
                        value={this.state.confirmedPassword}
                        onChange={e=>this.setState({confirmedPassword:e.target.value})}
                    />
                    <FormHelperText style={{color:red[500]}}>
                        {this.state.password === this.state.confirmedPassword?"":"confirm the same password"}
                    </FormHelperText>
                </FormControl>
                <Typography style={{color:red[500]}}>{this.state.errorMsg}&nbsp;</Typography>
                <div className={styles.buttons}>
                    <WhyDisableButton
                        disableReason={this.whyCannotSubmit()}
                        variant={"contained"} color="primary"
                        onClick={()=>this.handleSignUp()}>
                        SIGN UP
                    </WhyDisableButton>
                </div>
            </div></div>
        )
    }
    renderAfterSignUp() {
        return (
            <div className={styles.wrap}><div className={styles.container}>
                <Typography variant={"headline"}>almost done</Typography>
                <br />
                <Typography>we have sent a verification email to <strong>{this.state.email}</strong></Typography>
            </div></div>
        );
    }
    render() {
        return this.state.signedUp?this.renderAfterSignUp():this.renderBeforeSignUp();
    }
}