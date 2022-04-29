/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/homePage";
import Transaction from "./pages/transactionPage"
import TransactionDetail from "./pages/transactionDetailPage"
import NotFound from "./pages/404Page"

const routes = [{
        path: "/",
        name: "overview-route",
        component: Home,

    }, {
        path: "/transactions",
        name: "transaction-route",
        component: Transaction,
    }, {
        path: "/transactions/:id",
        name: "transaction-details-route",
        component: TransactionDetail,
    },
    {
        path: "/ts",
        redirect: "/transactions",
    },
    {
        path: "/:pathWatch(.*)*",
        component: NotFound,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;