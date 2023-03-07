

const keys = []
export function makeAccount(first, last, user, email, pass){
userName = new LoginKey(first, last, user, email, pass)
keys.push(userName)
}
export function LoginKey(first, last, user, email, pass){

    this.first = first;
    this.last =last;
    this.user = user;
    this.email=email;
    this.pass=pass;
    i = [first, last, user, email, pass]


    return i
}
export function getKeys(i, j){

}