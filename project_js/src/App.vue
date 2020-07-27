<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img alt="Marvel" src="./assets/Marvel.png" />
      <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand href="#">Action Figures</b-navbar-brand>
          <b-nav-item @click="$root.page='home'">Home</b-nav-item>
          <b-nav-item @click="$root.page='store'">Store</b-nav-item>
          <b-nav-item @click="$root.page='cart'">Cart</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-container>
            <Login />
          </b-container>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />

    <br />
    <Home v-if="$root.page=='home'" />
    <Store v-else-if="$root.page=='store'" />
    <Cart v-else-if="$root.page=='cart'" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Store from "./components/Store.vue";
import Login from "./components/Login.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    Login,
    Home,
    Store,
    Cart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
