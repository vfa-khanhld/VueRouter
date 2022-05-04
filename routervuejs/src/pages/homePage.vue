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
//ref co co san trong thu vien cua VueJS, va no giup
// thg template nhan thay su thay doi cua script
import { ref, reactive, computed, watch } from "vue";
import useTransactions from "../uses/fetchTransactions";

export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup({ theme }, { emit }) {
    //so sanh su khac nhau giua ref va reactive,
    //reactive truy cap truc tiep, ref truy cap thonga qua value
    // const firstName = ref("Khanh");
    // //Du co khai bao ref la mot cai mang thi van phai truy cap value
    // const secondName = ref({
    //   middleName: "Duy",
    //   lastName: "Le",
    // });
    // const car = reactive({
    //   price: 1000,
    //   name: "Honda",
    // });
    const { fetchAll, transactions } = useTransactions();

    fetchAll();

    console.log(theme);
    console.log(emit);

    const searchText = ref("");

    const customers = reactive([
      "Something",
      "Ben",
      "Khanh",
      "Ben1",
      "Khanh1",
      "Something1",
    ]);
    //Viet computed trong composition API
    const customersFilled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    // function onChangeSomething() {
    //   // console.log("running here....");
    //   // console.log(secondName);
    //   // console.log(car);
    //   // car.price += 1000;
    //   // firstName.value = "Ben";
    // }

    return {
      searchText,
      // secondName,
      // firstName,
      // onChangeSomething,
      // car,
      customersFilled,
      fetchAll,
      transactions,
    };
    //Khi 1 thg ref dc return thi no dc unwrap va dc tra ra value
  },
};
</script>
