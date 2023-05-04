import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Navigation from '../navigation';
import { Alert } from 'react-native/Libraries/Alert/Alert';
import { Post } from './PostScreen';
import { addPost } from './TabOneScreen';

let source:string = '../assets/images/whitePlus.png'
let added : boolean = false
export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  if( added == false){
    addBasic()
    added = true
  }



  return (
    <View style={styles.container}>

        <Text style={styles.title}>Friends</Text>

      <View style={styles.separator}/>
      {friends}
      <Text style={styles.title}>People You May Know</Text>  
      <View style={styles.separator}/>      
      {mayKnow}
      
    </View>
  );
}


class FriendTile{
  name:string
  joinDate:string
  picture:string
  friend : boolean
  post: Post
  posted : boolean
  constructor(name:string, joinDate: string,post : Post,  picture: string = '', friend: boolean = false, posted: boolean = false){
    this.name = name
    this.joinDate = joinDate
    this.picture = picture
    this.friend = friend
    this.post = post
    this.posted = posted
    if(friend == true){
      friends.push(this.card())
    }
    else{
      mayKnow.push(this.card())
    }



  }

  card(){
    const refresh = () => window.location.reload()
    return(

      <View style = {styles.friendTileBase}>
      <View style = {styles.friendTileBorder}/>
        <View style = {styles.friendTileContent}>
          <View style = {styles.friendTileText}>
            <Text style = {styles.friendTileName}>     {this.name}</Text>
            <Text style = {styles.friendTileDate}>      Joined: {this.joinDate}</Text>
          </View> 
          <Image source={{uri: "https://wallpapers.com/images/high/blank-default-pfp-wue0zko1dfxs9z2c.webp"}} style = {styles.friendTileImage}/>
          <TouchableOpacity style = {styles.addFriend} onPress={() => {
            friends.push(this.card())
            if(this.posted == false){
              addPost(this.post.card())
              this.posted = true
            }
            
            }}>          
            <Image source={require(source)} style={styles.plus}/>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
let mayKnow: JSX.Element[] = [] 
let friends: JSX.Element[] = []




function addBasic(){
  let EthanPost = new Post("Mr. Telephone Man", "New Edition", "https://upload.wikimedia.org/wikipedia/en/8/83/NE_MTM.jpeg", "Ethan")
  let JoePost = new Post("golden hour",'JVKE', "https://i1.sndcdn.com/artworks-oEqf1CL9PnD5-0-t500x500.jpg", "Joe")
  let friend1 = new FriendTile("Ethan", "1/2/23", EthanPost)
  let friend2 = new FriendTile("Joe", "1/2/23",JoePost,  undefined)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(204, 197, 244)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(41, 41, 95)',
    marginTop: 100
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    alignSelf: 'center',
    backgroundColor:"rgb(41, 41, 95 )"
},
  friendTileBase:{
    width: "80%",
    height: 100,
    borderColor:"rgb(41, 41, 95 )",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#111",
    flexDirection: 'column',

  },
  friendTileBorder:{
    width: "100%",
    backgroundColor: "rgb(41, 41, 95 )",
    borderTopEndRadius: 20,
    borderTopStartRadius: 180,
    flex: .2
  },
  friendTileContent:{
    width:"100%",
    flex:.8,
    flexDirection: 'row',
    borderRadius:90,
    backgroundColor: "#111",
  },
  friendTileName:{
    fontWeight: 'bold',
    fontSize: 15,
    color: "white",
    marginVertical: 10,

  },
  friendTileDate:{
    fontWeight: 'bold',
    fontSize: 10,
    color: "white",

  },
  friendTileImage:{
    width: "20%",
    aspectRatio: 1,
    alignSelf: 'center',
    borderRadius:90,
    marginRight: "5%",
  },
  friendTileText:{
  width: "60%",
  borderRadius: 90,
  backgroundColor: "#111",
  },
  addFriend:{
    alignSelf: 'center',
    width: 40,
    height: 50,
  },
  plus:{
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '30%'
  }
  
});
