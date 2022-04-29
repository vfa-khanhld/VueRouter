<template>
  <nav class="nav">
    <router-link class="router-link" :to="{ name: 'overview-route' }"
      >Overview</router-link
    >
    <router-link class="router-link" :to="{ name: 'transaction-route' }"
      >Transaction</router-link
    >
    <router-link class="router-link" to="/">Budgets</router-link>
    <router-link class="router-link" to="/">Reports</router-link>
    <router-link class="router-link" to="/">Settings</router-link>
  </nav>
</template>

<style lang="css" scoped>
.router-link {
  margin: 0 8px;
  text-decoration: none;
  color: Black;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
}
.router-link:hover {
  color: rgb(73, 73, 198);
}
</style>
