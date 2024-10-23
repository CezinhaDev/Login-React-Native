import {StyleSheet} from 'react-native';

const mascara = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
   alignItems:'center',
  },
  titulo:{
    color:'red',
    fontSize:20,
    marginTop:10,
  },

  img:{
    position:'absolute',
    width:100,
    height:80,
    marginTop:40,
  },

  bnt1:{
    borderColor:'red',
    borderWidth:1,
    width:200,
    height:30,
    position:'absolute',
    borderRadius:10,
    marginTop:130,
    textAlign:'center',
  },

    bnt2:{
    borderColor:'red',
    borderWidth:1,
    width:200,
    height:30,
    position:'absolute',
    borderRadius:10,
    marginTop:170,
    textAlign:'center',
  },

  senha:{
    position:'absolute',
    color:'blue',
    marginTop:165,
    marginLeft:40,
  },

  buttonText:{
    backgroundColor:'red',
    width:150,
    textAlign:'center',
    paddingVertical:7,
    height:40,
    borderRadius:10,
    marginTop:210,
    borderWidth:1,
  },
  

  icon1:{
    position:'absolute',
    marginTop:289,
    marginRight:93,
  },

    icon2:{
    position:'absolute',
    marginTop:289,
  },

     icon3:{
    position:'absolute',
    marginTop:289,
    marginLeft:93
  },

  img:{
    width:80,
    height:80,
    position:'absolute',
    marginTop:45,
  },
});

export default mascara;
