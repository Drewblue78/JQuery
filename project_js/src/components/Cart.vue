<template>
  <div>
    <input v-model="quantity" />
    <input v-model="product" />
    <button @click="addItem">Add</button>
    <div v-for="(p,i) in $root.cart" :key="i">
      <h1>{{p.p}}</h1>
      {{p.q}}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    quantity: 1,
    product: ""
  }),
  methods: {
    addItem() {
      this.$root.cart.push({
        q: this.quantity,
        p: this.product
      });
    }
  }
};
</script>

<style>
</style>
