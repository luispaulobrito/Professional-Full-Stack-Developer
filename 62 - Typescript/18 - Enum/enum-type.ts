enum Role{
    ROLE_USER = 'USER',
    ROLE_ADMIN = 'ADMIN',
    ROLE_SYSADMIN = 'SYSADMIN'
}

enum AppState{
    LOADING_STATE,
    LOADED_STATE,
    READY_STATE,
}

let user: {name: string, role: Role}
user = {name: 'Luis', role: Role.ROLE_ADMIN}

console.log(user);
