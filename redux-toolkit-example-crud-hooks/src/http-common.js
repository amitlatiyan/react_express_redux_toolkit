import axios from "axios";
    // Learning 3: we create http-common.js axio config
    // this will be called by our service learning 4.

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});