/* eslint-disable prettier/prettier */
import { ref } from "vue";

export default function() {
    const transactions = ref([]);
    const error = ref(null);

    console.log(transactions);
    const fetchAll = async() => {
        try {
            const response = await fetch("http://localhost:3000/transactions");
            if (!response.ok) throw new Error("Some thing went wrong.");
            transactions.value = await response.json();
        } catch (err) {
            error.value = err;
            console.log(err);
        }
    };
    return { transactions, error, fetchAll };
}