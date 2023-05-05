/**
 * @format
 */

import { AppRegistry } from "react-native/types";
import App from "./App";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

export default function indexApp() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Full Sports App", () => App);
