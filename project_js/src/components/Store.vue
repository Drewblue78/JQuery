<template>
  <div class="container">
    <div class="row row-cols-3">
      <div class="col" v-for="(p,i) in products" :key="i">
        <div class="card" style="width: 18rem;">
          <img :src="`assets/${p.replace(' ','')}.png`" class="card-img-top" :alt="p" />
          <div class="card-body">
            <p class="card-text">{{p}}</p>
            <a @click="addItem(p)" class="btn btn-primary">Order</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: ["Ironman", "Captain Marvel", "Hulk"]
  }),
  methods: {
    addItem(p) {
      this.$root.cart.push({
        q: 1,
        p
      });
    }
  }
};
</script>

<style>
</style>
