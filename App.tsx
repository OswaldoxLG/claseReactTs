import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//import { UseEffectScreen } from "./src/screens/UseEffectScreen"; 
//import { FormScreen } from "./src/screens/FormScreen";
import MiPrimerComponente from "./src/screens/MiPrimerComponente";

interface Props {
  nombre: string,
}

const User: Props = {
  nombre: "Karen"
}

const App = ({nombre}:Props) => {

  return(
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <MiPrimerComponente
        nombre="Karen"
      />
      <MiPrimerComponente
        nombre={User.nombre}
      />

      <MiPrimerComponente
        {...User}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
