import getters from "./gettersEconomicTransports";
import mutations from "./mutationsEconomicTransports";
import state from "./stateEconomicTransports";

export default {
    namespaced: true,
    state: {...state},
    mutations,
    getters
};
