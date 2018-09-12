class User {
    id: number|null|undefined;
    email: string|null|undefined;
    constructor(id?:null|number, email?:null|string) {
        this.id = id;
        this.email = email;
    }

    /**
     * check if a user is administrator
     * @param user {User}
     * @returns {boolean}
     */
    static isAdmin(user:User) {
        return user.id === 1;
    }

    /**
     * check if a user is guest
     * @param user {User}
     * @returns {boolean}
     */
    static isGuest(user:User) {
        return user.id === null;
    }

    /**
     * return a guest user
     * @returns {User}
     * @constructor
     */
    static Guest() {
        return new User(null, null);
    }

    /**
     * check if a user info is unknown. i.e. still waiting for server response.
     * @param user {User}
     * @returns {boolean}
     */
    static isUnavailable(user:User) {
        return typeof(user.id)==='undefined';
    }

    static isLoggedIn(user:User) {
        return !!user.id;
    }
}

export default User;