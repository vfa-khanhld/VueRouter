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
  <div class="" v-else-if="error">{{ error }}</div>
  <div v-else>Loading Transaction...</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions").then((respone) => {
  //     respone.json().then((data) => (this.transactions = data));
  //   });
  // },
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTransaction");

    const transactions = computed(() => store.state.transactions);

    const error = computed(() => store.state.error);

    return { transactions, error };
  },
};
</script>
