import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // baseUrl: "http://localhost:3456/javaps/rest",
    baseUrl: "http://geoprocessing.demo.52north.org:8080/javaps/rest",
    currentTab: "Landing",
    siteData: {
      landingJson: null,
      processesUrl: null
    }
  },
  mutations: {
    SET_CURRENT_TAB(state, tab) {
      state.currentTab = tab
    },
    SET_LANDING_JSON(state, json) {
      state.landingJson = json
    },
    CLEAR_SITE_DATA(state) {
      state.siteData = {}
    }
  },
  actions: {
  },
  modules: {
  }
})
