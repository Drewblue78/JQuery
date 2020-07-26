<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img alt="Marvel" src="./assets/Marvel.png" />
      <b-navbar-brand href="#"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand href="#">Action Figures</b-navbar-brand>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Store</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <img alt="BMarvel" src="./assets/BigMarvel.png" />
    <b-container>
      <Login />
    </b-container>
    <br />
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Ironman.png" class="card-img-top" alt="Ironman" />
            <div class="card-body">
              <p class="card-text">Ironman</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/CaptainMarvel.png" class="card-img-top" alt="Captian Marvel" />
            <div class="card-body">
              <p class="card-text">Captain Marvel</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Hulk.png" class="card-img-top" alt="Hulk" />
            <div class="card-body">
              <p class="card-text">Hulk</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Rocket.png" class="card-img-top" alt="Rocket" />
            <div class="card-body">
              <p class="card-text">Rocket Racoon</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Spiderman.png" class="card-img-top" alt="Spiderman" />
            <div class="card-body">
              <p class="card-text">Spiderman</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Thanos.png" class="card-img-top" alt="Thanos" />
            <div class="card-body">
              <p class="card-text">Thanos</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Thor.png" class="card-img-top" alt="Thor" />
            <div class="card-body">
              <p class="card-text">Thor</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Venom.png" class="card-img-top" alt="Venom" />
            <div class="card-body">
              <p class="card-text">Venom</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="./assets/Wolverine.png" class="card-img-top" alt="Wolverine" />
            <div class="card-body">
              <p class="card-text">Wolverine</p>
              <a href="Store" class="btn btn-primary">Order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-container>
      <Store />
    </b-container>
  </div>
</template>

<script>
import store from "./components/Store.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login
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
