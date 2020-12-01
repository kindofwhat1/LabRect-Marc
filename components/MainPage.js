import React, {useState} from 'react'
import {useFocusEffect} from "@react-navigation/native"
import {View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import styles from '../styles'


function MainPage({navigation}){
    const [isLoading, setLoading]=useState(true)
    const [info, setInfo]=useState([])

    //call the function when the mainpage screen comes into focusand clean up (stop) when it is unfocused
    useFocusEffect(
        //call this function(fetching) just one time
        React.useCallback(()=>{
            if (isLoading == true)
            {
                fetch('https://brottsplatskartan.se/api/events')
                .then(response=>response.json())
                .then(data=>{
                    setLoading(false)
                    setInfo(data.data)
                    console.log(data.data.areas[2])
                })
                .catch(error => {
                    console.log(error);
                });
            }

            }, [])

    )

    return(

<View style= {styles.background}>
    <View style= {styles.container}>
        <View style={styles.container}>
            {isLoading == true && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Väntar på att data laddas.....</Text>
            <ActivityIndicator size="large" color="#ff1493" /></View>}

            <FlatList
                data={info} 
                renderItem={({item}) => 
                <TouchableOpacity onPress={() => navigation.navigate('Data', {info: item})}> 
                    <View style={styles.listTextStyle}>
                          
                          <Text>{item.title_type}, {item.title_location}</Text>
                          
                    </View>
                </TouchableOpacity>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    </View>
</View>
    )
}
export default  MainPage;