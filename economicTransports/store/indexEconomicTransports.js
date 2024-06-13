import GenericTool from "../../../src/modules/tools/indexTools";
import composeModules from "../../../src/app-store/utils/composeModules";
import getters from "./gettersEconomicTransports";
import mutations from "./mutationsEconomicTransports";
import state from "./stateEconomicTransports";

export default composeModules([GenericTool, {
    namespaced: true,
    state: {...state},
    mutations,
    getters
}]);
