
import {generateSimpleGetters} from "../../../src/shared/js/utils/generators";
import economicTransportsState from "./stateEconomicTransports";

const getters = {
    ...generateSimpleGetters(economicTransportsState)
};

export default getters;
