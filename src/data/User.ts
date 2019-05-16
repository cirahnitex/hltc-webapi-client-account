export class User {
    id: string;
    email: string;
    constructor(id:string, email:string) {
        this.id = id;
        this.email = email;
    }
}

export type NullableUser = User|undefined|null;

export function isAdmin(user:NullableUser) {
    return user != null && user.id === '1';
}

export function isGuest(user:NullableUser) {
    return user === null;
}

export function isUnavailable(user:NullableUser) {
    return user === undefined;
}