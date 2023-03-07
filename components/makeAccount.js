


const keys = []
export function makeAccount(first, last, user, email, pass){
    let userName = new LoginKey(first, last, user, email, pass)
    keys.push(userName)
    getKeys(0)
}
export function LoginKey(first, last, user, email, pass){

    this.first = first;
    this.last =last;
    this.user = user;
    this.email=email;
    this.pass=pass;
    return [user, first, last, email, pass]
}
export function getKeys(i){
    let currentUser = []
    for(let j = 0; keys[i].length; j++ ){
        currentUser[j] = keys[i][j]
    }

    console.log(currentUser)
    console.log("   ", currentUser[0])
    return keys
}

function printAll(){
    for (let i = 0; i<keys.length; i++){
        for(let j=0; j<keys[i].length; j++){
            console.log(keys[i][j])
        }
    }
}