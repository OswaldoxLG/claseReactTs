import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
  globalMarging:{
    marginHorizontal: 20,
  },
  globalContainer:{
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "violet"
  },
  title:{
    fontSize: 30, 
    marginBottom: 10  
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
  }
});