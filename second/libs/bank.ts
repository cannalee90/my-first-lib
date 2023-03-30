export interface User {
    name: string
    age: number
}

export const userModel = {
    getName: (user: User) => user.name,
    getAge: (user: User) => user.age
}