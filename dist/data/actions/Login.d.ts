export default class Login {
    email: string;
    id: number;
    constructor(id: number, email: string);
    static perform(email: string, password: string): Promise<void>;
    static getActiveUser(): Promise<void>;
}
