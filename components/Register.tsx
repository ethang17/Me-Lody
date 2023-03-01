import { RootTabScreenProps } from "../types"
import { View , Text} from "./Themed"
let keys= []


export function makeAccount(first:string, last:string, user:string, email:string, pass:string, confirmed:string){
    if(checkPass(pass, confirmed)){
        return(
            <View>
                <Text>Nah</Text>
            </View>
        )
    }else{

    }
}

export function checkPass(pass:string, confirm:string){
    let works = false
    if (pass==confirm){
        works = true
    }
    return works
}

export function LoginKey(this: any, first:string, last:string, user:string, email:string, pass:string){

    this.first = first;
    this.last =last;
    this.user = user;
    this.email=email;
    this.pass=pass;

}