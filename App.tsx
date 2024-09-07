import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProjectListItem from './src/components/core/ProjectListItem';

const days = [...Array(10)].map((val, index) => index); //teker teker günleri yazmamak için oluştruldu

export default function App() {
  return (
    <View style={styles.container}>
    

    <FlatList 
    contentContainerStyle={styles.content}
    columnWrapperStyle={styles.column}
    numColumns={2} //kutuları yan yana konulması sağlandı
    data={days}
    renderItem={({item}) => <ProjectListItem project={item} /> } 
  
    //render ıtem itemleri nasıl renden edileceğini sağlıyor projectlist itemdan fonksion aldı fonksiyon olmalı
    />

      {/* {days.map(day =>(
         <View style={styles.box} key={day}>
         <Text style={styles.text}>{day}</Text>
       </View>
      ))}
     */}
 
    
      



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

  
  },
  content:{
    backgroundColor:'#fff',
    gap:10,
    padding:10, //kenardan boşluk verildi
  },

  column:{
    gap:10, //yatayda boşluk verildi
  },


});
