<template>
  <h1>Transaction</h1>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
      >
        {{ transaction.name }}
      </router-link>
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div v-else>Loading Transaction...</div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions").then((respone) => {
      respone.json().then((data) => (this.transactions = data));
    });
  },
};
</script>
