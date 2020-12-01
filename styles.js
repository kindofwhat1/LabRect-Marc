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
  title: {
    fontSize: 32,
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

detailsTextStyle: {
  fontSize: 24,
  //fontWeight: 'bold',
},
contentStyle:{
    flex: 1, //Fyll ut utrymmet
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24
},

imageStyle: {
  width: 250, 
  height: 250,
  marginTop: 50,
},

footerTextStyle: {
    fontSize: 12,
    fontStyle: 'italic',
    justifyContent: 'flex-end',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
}, 
footerButtonViewStyle: {
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  flexGrow: 1,
}, 
footerButton: {
  width: 100
}

});
export default styles;