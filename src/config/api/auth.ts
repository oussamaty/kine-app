import axios from "axios";

const authAPI = axios.create({
  timeout: 10000,
});

export default authAPI;