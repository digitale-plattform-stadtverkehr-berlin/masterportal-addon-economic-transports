import EconomicTransports from "./components/EconomicTransports.vue";
import EconomicTransportsStore from "./store/indexEconomicTransports";
import deLocale from "./locales/de/additional.json";

export default {
    component: EconomicTransports,
    store: EconomicTransportsStore,
    locales: {
        de: deLocale
    }
};
