import SyncStorage from "@react-native-async-storage/async-storage";

export async function getTonken(setToken: (val) => void) {
  const token = await SyncStorage.getItem("access_token");
  return setToken(token);
}
