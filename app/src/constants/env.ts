import Config from "react-native-config";

type Environment = {
  CHAT_URL: string | undefined;
  AUTH_URL: string | undefined;
};

const environment: Environment = {
  CHAT_URL: Config.CHAT_URL,
  AUTH_URL: Config.AUTH_URL,
};

export default environment;