/**
 * @format
 */
// import { REACT_APP_CLIENTID, REACT_APP_CLIENSECRET } from '@env';
import { AppRegistry } from "react-native/types";
import App from "./App";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import axios from "axios";
import SyncStorage from "@react-native-async-storage/async-storage";
import fullsports_api from "./src/environment/full-sports-api";
import { REACT_APP_CLIENTID } from 'react-native-dotenv';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react"
export default function indexApp() {
  return (
    <>
      <PaperProvider>
        <App />
      </PaperProvider>
    </>
  );
}

AppRegistry.registerComponent("Full Sports App", () => indexApp);
