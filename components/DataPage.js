import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../styles';

function DataPage({route, navigation}){
    const {info}=route.params

    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold'}}>Typ av brott:</Text>
                <Text>{info.title_type}</Text>
                <Text style={{fontWeight: 'bold'}}>Plats: </Text>
                <Text>{info.title_location}</Text>
                <Text style={{fontWeight: 'bold'}}>Beskrivning: </Text>
                <Text style={{fontStyle: 'italic'}}>{info.description}</Text>
                <Text style={{fontWeight: 'bold'}}>När: </Text>
                <Text>{info.date_human}</Text>
               
                <Button style={{alignItems: 'center'}} title="Tillbaka till län" onPress={()=> navigation.navigate('Main')} />
            </View>
        </View>
    )
}
export default DataPage;