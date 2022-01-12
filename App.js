import React, {useState} from 'react' 
import {View, Text,StyleSheet, Image, FlatList } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


const App = ()=>{

  const [items, setItems ]= useState([
    {id:1, text:'Milk'},
    {id:2, text:'Eggs'},
    {id:3, text:'Juice'},
    {id:4, text:'Banana'}
  ])

  const deleteItem=(id)=>{
    setItems(prevItems => {
      return prevItems.filter(item=> item.id != id)
    })
  }

  const addItem =(text)=>{
    setItems(prevItems=>{
      return [{id:4,text},...prevItems]
    });
  }
  
  
  return (
    <View style={styles.container}>
      <Header title={'shoppingList'} />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item})=><ListItem item={item} deleteItem={deleteItem} />  } />

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    // paddingTop: 60
    
},



})

export default App
