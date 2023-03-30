export interface User {
    name: string;
    age: number;
}
export declare const userModel: {
    getName: (user: User) => string;
    getAge: (user: User) => number;
};
