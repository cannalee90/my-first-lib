interface User {
    name: string;
    age: number;
}
declare const userModel: {
    getName: (user: User) => string;
    getAge: (user: User) => number;
};

export { User, userModel };
