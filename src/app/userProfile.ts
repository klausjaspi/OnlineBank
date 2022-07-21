export interface userProfile {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    appUserRole: string;
    locked: boolean;
    confirmed: boolean;
}