import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../styles';

function DataPage({route, navigation}){
    const {info}=route.params

    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.detailsTitle}>Typ av brott:</Text>
                <Text>{info.title_type}</Text>
                <Text style={styles.detailsTitle}>Plats: </Text>
                <Text>{info.title_location}</Text>
                <Text style={styles.detailsTitle}>Beskrivning: </Text>
                <Text style={{fontStyle: 'italic'}}>{info.description}</Text>
                <Text style={styles.detailsTitle}>När: </Text>
                <Text>{info.date_human}</Text>
                <Button  color='black' title="Tillbaka till händelser" onPress={()=> navigation.navigate('Main')} />
            </View>
        </View>

        
        
    )
}
export default DataPage;