import * as React from 'react';
interface Props {
    style?: React.CSSProperties;
}
interface State {
    email: string;
    password: string;
    errorMsg: string;
}
declare class LoginWidget extends React.Component<Props, State> {
    constructor(props: Props);
    whyCannotSubmit(): "enter a valid email" | "enter your password" | null;
    handleLogin(): Promise<void>;
    render(): JSX.Element;
}
export default LoginWidget;
