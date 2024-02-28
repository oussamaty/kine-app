import axios from "axios";
import { AUTHAPIURL } from "react-native-dotenv";

const authAPI = axios.create({
  baseURL: AUTHAPIURL,
  timeout: 10000,
});

export default authAPI;