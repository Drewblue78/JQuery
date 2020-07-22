import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

const firebaseConfig = {
  apiKey: "AIzaSyBw_DO1RZhGMfCMnzOcYeE8CIeKPfz9Znk",
  authDomain: "project-jq.firebaseapp.com",
  databaseURL: "https://project-jq.firebaseio.com",
  projectId: "project-jq",
  storageBucket: "project-jq.appspot.com",
  messagingSenderId: "324443457992",
  appId: "1:324443457992:web:24d4c030f2a453bdbe98fd",
  measurementId: "G-T9Z2L9CNS6"
};

firebase.initializeApp(firebaseConfig)

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

window.app = new Vue({
  render: (h) => h(App),
  data: {
    loggedIn: false,
    firebase
  }
}).$mount('#app');
