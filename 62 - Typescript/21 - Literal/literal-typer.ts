let userType: 'USER' | 'ADMIN';

userType = 'ADMIN';

function saveUser(userId:number, type: 'USER'|'ADMIN') : void {
    if (type === 'USER') {
        console.log(`Saving new user: \n ${userId} ${type}`);
    } else {
        console.log(`Saving new admin: \n ${userId} ${type}`);
    }
}

saveUser(32, 'ADMIN');
saveUser(2, 'USER');