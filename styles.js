import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#7fffd4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  
  background: {
    backgroundColor: '#f3efeb',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,    
  },
  container: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
  },

listTextStyle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
    backgroundColor: '#7fffd4',
    padding: 15, 
},

detailsTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  //fontWeight: 'bold',
},

imageStyle: {
  width: 250, 
  height: 250,
  marginTop: 50,
},



});
export default styles;