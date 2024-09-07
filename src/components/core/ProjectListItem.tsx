// custom componenettir

import { Text , View , StyleSheet} from "react-native"

type ProjectListItem ={
  project:number;
}

export default function ProjectListItem({project}:ProjectListItem){
 
    return(
        <View style={styles.box} >
         <Text style={styles.text}>{project}</Text> 
       </View>
    );
}





const styles = StyleSheet.create({

    box:{
      backgroundColor:'#F9EDE3',
      // width:100,
      // height:100,
      flex:1,
      aspectRatio:1,
  
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#9B4521',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius:20,
    },
    text:{
      color:'#9B4521',
      fontSize:70,
    }
  });
  