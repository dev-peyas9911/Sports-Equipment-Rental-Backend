export interface RegisterUserPayload {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string
}

export interface ILoginUser {
    email: string;
    password: string;
}