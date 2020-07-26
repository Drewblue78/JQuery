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
      </b-collapse>
    </b-navbar>
    <div class="card" style="width: 18rem;">
      <img src="./assets/Ironman.png" class="card-img-top" alt="Ironman" />
      <div class="card-body">
        <p class="card-text">Ironman</p>
        <a href="Ironman" class="btn btn-primary">Order</a>
      </div>
    </div>
  </div>
</template>
