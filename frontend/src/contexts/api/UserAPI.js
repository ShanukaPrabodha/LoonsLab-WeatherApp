import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI {
 // User Login API
 static login(values) {
    return axios.post(`${BASE_URL}/api/user/login`, values, requestConfigJson);
  }

  // User Register
  static register(values) {
    return axios.post(`${BASE_URL}/api/user/register`, values, requestConfigJson);
  }

}

export default UserAPI;