var User = /** @class */ (function () {
    function User(id, email) {
        this.id = id;
        this.email = email;
    }
    /**
     * check if a user is administrator
     * @param user {User}
     * @returns {boolean}
     */
    User.isAdmin = function (user) {
        return user.id === 1;
    };
    /**
     * check if a user is guest
     * @param user {User}
     * @returns {boolean}
     */
    User.isGuest = function (user) {
        return user.id === null;
    };
    /**
     * return a guest user
     * @returns {User}
     * @constructor
     */
    User.Guest = function () {
        return new User(null, null);
    };
    /**
     * check if a user info is unknown. i.e. still waiting for server response.
     * @param user {User}
     * @returns {boolean}
     */
    User.isUnavailable = function (user) {
        return typeof (user.id) === 'undefined';
    };
    User.isLoggedIn = function (user) {
        return !!user.id;
    };
    return User;
}());
export default User;
//# sourceMappingURL=User.js.map