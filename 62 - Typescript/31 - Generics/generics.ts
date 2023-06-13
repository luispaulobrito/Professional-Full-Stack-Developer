function updateUser<T, V>(oldUser:T, newUser:V): T & V {
    return{ ...oldUser, ...newUser}
}

function makeAdmin<T>(user:T): T {
    return { ...user, admin: true}
}

let user1 = {name: 'Luis'}
let user2 = {age: 33, gender: 'M'}

console.log(updateUser(user1, user2));
console.log(makeAdmin(user1));



class Planet<Z> {
    private closestStar: Z;

    constructor(closestStar: Z) {
        this.closestStar = closestStar;        
    }
}

const earth = new Planet<string>('Sun');
const planetX = new Planet<{name: string, distance: number}>({name: 'Xorox', distance: 10})

interface UserData{
    size: number;
    data: string[]
}

const planetZ = new Planet<UserData>({data: ['Xorox', 'Xorax'], size: 10})