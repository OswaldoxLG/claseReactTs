import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
  globalMarging:{
    marginHorizontal: 10,
    marginTop: 30,
    borderRadius: 10

  },
  globalContainer:{
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "violet"
  },
  title:{
    fontFamily: "arial",
    fontSize: 28, 
    marginBottom: 15,  
    marginHorizontal: 15,
    marginTop: 10
  },
  input:{
    textDecorationColor:"black",
    borderRadius: 10, 
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    height: 25,
    width: 280,
    margin: 12,
    borderWidth: 5,
    borderColor: "pink"
  },
  avatar:{
    height: 200,
    width: 200,
    borderColor: "white",
    borderWidth: 5, 
    borderRadius: 100,
  },
  menuContainer:{
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuBtn:{
    marginVertical: 10,
  },
  texBtn:{
    fontSize: 20,
    color:"black",
    fontWeight: "bold"
  }
});