import axios from "axios";

axios.defaults.baseURL =
  "https://moments-app-drf-api-737cfc0f8420.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
