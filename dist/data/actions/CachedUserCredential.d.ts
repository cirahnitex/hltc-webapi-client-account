export interface CachedUserCredential {
    id: number;
    email: string;
    password: string;
}
export declare const set: (item: CachedUserCredential) => Promise<CachedUserCredential>, get: () => Promise<CachedUserCredential | null>;
