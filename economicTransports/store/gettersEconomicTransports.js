
import {generateSimpleGetters} from ".../../../src/app-store/utils/generators";
import economicTransportsState from "./stateEconomicTransports";

const getters = {
    ...generateSimpleGetters(economicTransportsState)
};

export default getters;
