import React, {useState} from 'react'
import {useFocusEffect} from "@react-navigation/native"
import {View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from '../styles'


function MainPage({navigation}){
    const [isLoading, setLoading]=useState(true)
    const [books, setBooks]=useState([])

    //call the function when the mainpage screen comes into focusand clean up (stop) when it is unfocused
    useFocusEffect(
        //call this function(fetching) just one time
        React.useCallback(()=>{
            if (isLoading == true)
            {
                fetch('http://193.10.202.70/BookAPI/API/BooksSimple')
                .then(response=>response.json())
                .then(data=>{
                    //console.log(data)
                    setLoading(false)
                    setBooks(data)
                })
                .catch(error => {
                    console.log(error);
                });
            }

            }, [])

    )

    return(

            <View style={styles.container}>
        {isLoading==true && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Fetching info...Please wait</Text>
    <ActivityIndicator size="large" color="#00ff00"/></View> }
        
            <FlatList data={books} 
        renderItem={({item})=> 
        <TouchableOpacity onPress={()=>navigation.navigate('Data', {book:item})}>
        <Text style = {styles.listTextStyle}>{item.Title}</Text>
        </TouchableOpacity>
            
        }

        keyExtractor={item =>item.Id.toString()} />
        </View>     
    )
}
export default  MainPage;