import React from 'react'
import {View, Text, Button} from 'react-native'

function DataPage({route, navigation}){
    const {book}=route.params

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

        <Text>Data Page</Text>
         <Text>{book.Shelf.Name}</Text>
         <Text>{book.ISBN}</Text>
         {book.Authors.map(function(author){
             return <Text key = {author.Id} >Author:&nbsp;{author.LastName} </Text>
         })}
        <Button title="Till Main Page" onPress={()=> navigation.navigate('Main')} />

        </View>
    )
}
export default DataPage;