import * as React from "react";
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
    constructor(props: Props);
    whyCannotSubmit(): "fill in a valid email" | "fill in your password" | "confirm the same password" | null;
    handleSignUp(): Promise<void>;
    renderBeforeSignUp(): JSX.Element;
    renderAfterSignUp(): JSX.Element;
    render(): JSX.Element;
}
export {};
