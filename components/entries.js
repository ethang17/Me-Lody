import { Text, View } from '../components/Themed';
import { useState } from 'react';

let songName = ''
let songArtist = ''
export function entry(){
    if(songName.length>0){
        return(
            <View>
                <Text>{songName} {songArtist}</Text>
            </View>
        )
    }else{
        return(
            <View>
                <Text>Here is where you will find your friends' posts for the day</Text>
            </View>
        )
    }
}   
export function setSongName(name){
    songName = name
}
export function setSongArtist(artist){
    songArtist = artist
}