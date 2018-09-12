export default class Register {
    email: string;
    constructor(email: string);
    static perform(email: string, password: string): Promise<void>;
}
