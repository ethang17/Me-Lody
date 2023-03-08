
import { setSignedIn } from "../screens/TabOneScreen"

export const keys = []
let currentUser = ''
let currentUserKey = ''
export function makeAccount(first, last, user, email, pass){
    let userName = new LoginKey(first, last, user, email, pass)
    keys.push(userName)
    printAll()

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
    let num = i
    for(let j = 0; keys[0].length; j++ ){
        currentUser[j] = keys[0][j]
        console.log(currentUser[j])
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
export function checkUser(name){
    for (let i = 0; i<keys.length; i++){
        if (name == keys[i][0]){
            let num = parseInt(i)
            return [true, num]
        }

    }
    return [false, 3]
}
export function checkLogin(user, pass){
    let userResult = []
    userResult = checkUser(user)
    let works = userResult[1]

    if(userResult[0]){
        if(pass == keys[works][4]){
            setSignedIn(true)
            currentUser = user
            return "YUH"
        }
    }

}
export function getCurrentUser(){
    return currentUser
}
export function getCurrentEmail(){
    return keys[currentUserKey][3]
}
export function getCurrentFirsrt(){
    return keys[currentUserKey][1]
}