<template>
  <h1>Transaction Detail</h1>
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading... {{ $route.params.id }}</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
  },
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
    transactionFiltered() {
      return this.$store.getters.transactionFiltered;
    },
  },
};
</script>
