import Vuex from "vuex";
import {shallowMount, createLocalVue, config} from "@vue/test-utils";
import {expect} from "chai";
import EconomicTransportsComponent from "../../../components/EconomicTransports.vue";
import EconomicTransports from "../../../store/indexEconomicTransports";

import sinon from "sinon";

const localVue = createLocalVue();

localVue.use(Vuex);

config.mocks.$t = key => key;

describe("addons/economicTransports/components/EconomicTransports.vue", () => {

    const mockMapGetters = {
            map: () => sinon.stub()
        },
        mockMapActions = {
        },
        mockMapMutations = {
        },
        mockConfigJson = {
            Portalconfig: {
                menu: {
                    tools: {
                        children: {
                            EconomicTransports:
                                {
                                    "name": "translate#additional:modules.EconomicTransports.title",
                                    "icon": "bi-arrow-left-right"
                                }
                        }
                    }
                }
            }
        };

    let store,
        wrapper;

    beforeEach(() => {
        store = new Vuex.Store({
            namespaced: true,
            modules: {
                Tools: {
                    namespaced: true,
                    modules:
                        {
                            EconomicTransports
                        }
                },
                Map: {
                    namespaced: true,
                    getters: mockMapGetters,
                    mutations: mockMapMutations,
                    actions: mockMapActions
                }
            },
            state: {
                configJson: mockConfigJson
            }
        });
        wrapper = shallowMount(EconomicTransportsComponent, {
            store,
            localVue,
            data () {
                return {
                    wfsApi: "wfsApi",
                    olApi: "wfsApi"
                };
            }
        });
        store.commit("Tools/EconomicTransports/setActive", true);
    });

    sinon.stub(EconomicTransportsComponent, "mounted");

    it("wrapper should exist", () => {
        expect(wrapper.exists()).to.be.true;
    });

    it("renders EconomicTransports", () => {
        expect(wrapper.find("#EconomicTransports").exists()).to.be.true;
    });
});
