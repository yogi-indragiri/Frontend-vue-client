import axios from "axios";

import store from "./store";
import router from "./router";

const API_URL = process.env.API_URL || "http://backendlogin.pro";


// `baseURL` is prepended to URLs passed to axios
axios.defaults.baseURL = API_URL;

// POST with JSON content type
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

// `xsrfCookieName` is the name of the cookie
// to use as a value for xsrf token.
// Default is 'XSRF-TOKEN'
axios.defaults.xsrfCookieName = "CSRF-TOKEN";

// `xsrfHeaderName` is the name of the http header
// that carries the xsrf token value.
// Default is 'X-XSRF-TOKEN'
axios.defaults.xsrfHeaderName = "X-CSRF-Token";

// axios.defaults.headers.common['Authorization'] = store.state.token;

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

// `withCredentials` indicates whether or not cross-site
// Access-Control requests should be made using credentials.
axios.defaults.withCredentials = true;

export default {
  createSession(username, password) {
    return axios.post("/api/login", { username, password });
  },
  deleteSession( token ) {
    return axios.post("/api/logout", { token });
  },
  createUser(mobileNumber, firstName, lastName, dateBirth, gender, email, password, cPassword) {
    return axios.post("/api/register", { mobileNumber, firstName, lastName , dateBirth, gender, email, password , cPassword });
  },
  getUser() {
      return axios.get("/api/v1/me");
  }
};

// Intercept all 401 Unauthorized responses before
// they are handled by `then` or `catch`


axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (!error.response) {
      // network error
      alert(`Unable to access API: ${error.message}`);
    } else if (error.response.status == 401) {
      console.error("Unauthorized! Signing out...");
      store.dispatch("signOut").then(() => {
        router.replace("login");
      });
    }
    return Promise.reject(error);
  }
);
