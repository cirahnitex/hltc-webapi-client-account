declare class User {
    id: number | null | undefined;
    email: string | null | undefined;
    constructor(id?: null | number, email?: null | string);
    /**
     * check if a user is administrator
     * @param user {User}
     * @returns {boolean}
     */
    static isAdmin(user: User): boolean;
    /**
     * check if a user is guest
     * @param user {User}
     * @returns {boolean}
     */
    static isGuest(user: User): boolean;
    /**
     * return a guest user
     * @returns {User}
     * @constructor
     */
    static Guest(): User;
    /**
     * check if a user info is unknown. i.e. still waiting for server response.
     * @param user {User}
     * @returns {boolean}
     */
    static isUnavailable(user: User): boolean;
    static isLoggedIn(user: User): boolean;
}
export default User;
