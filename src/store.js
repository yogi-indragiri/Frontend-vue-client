import Vue from 'vue'
import Vuex from 'vuex'

import api from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token: localStorage.getItem('user-token') || '',
      user: ''
  },
  mutations: {
      setUser(state, user) {
          state.user = user;
      },
      setToken(state, token) {
          state.token = token;
          // localStorage.setItem("user", JSON.stringify(user));
      },

  },
  actions: {
      signIn({ commit }, { username, password }) {
          // The Promise used for router redirect in Signin.vue
          return new Promise((resolve, reject) => {
              api
                  .createSession(username, password)
                  .then(response => {
                      const token = response.data.token
                      localStorage.setItem('user-token', token) // store the token in localstorage
                      commit("setToken", token);
                      // this.dispatch("getTackleBoxItems");
                      resolve();
                  })
                  .catch(error => {
                      // if the request fails, clear user
                      // commit("clearUser");
                      // alert(JSON.stringify(error.response.data.error))
                      reject(error.response.data.error);
                  });
          });
      },
      signUp({ commit }, { mobileNumber, firstName, lastName, dateBirth, gender, email, password, cPassword }) {
          // The Promise used for router redirect in Signup.vue
          return new Promise((resolve, reject) => {
              api
                  .createUser(mobileNumber, firstName,lastName, dateBirth, gender, email, password, cPassword  )
                  .then(response => {
                      commit("setUser", response.data);
                      // this.dispatch("getTackleBoxItems");
                      resolve();
                  })
                  .catch(error => {
                      // commit("clearUser");
                      reject(error.response.data.errors);
                  });
          });
      },
      getUser({ commit }) {
          if (this.getters.isAuthenticated) {
              api.getUser().then(response => {
                  commit("setUser", response.data);
              });
          }
      },

      signOut({ commit }) {
          // The Promise used for router redirect in Header.vue
          return new Promise(resolve => {
              api.deleteSession().then(() => {
                  // commit("clearUser");
                  resolve();
              });
          });
      }

  }
})
