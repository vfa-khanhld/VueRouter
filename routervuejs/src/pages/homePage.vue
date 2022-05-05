<template>
  <h1>HomePage</h1>
  <!-- <p>
    {{ `${secondName.lastName} ${secondName.middleName} ${firstName}` }}
  </p>
  <p>{{ car }}</p> -->
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
  <p>{{ transactions }}</p>
  <!-- <button @click="onChangeSomething">Change</button> -->
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.count = this.$store.state.count;
  },
};
</script>
