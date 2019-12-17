<template>
  <div id="app">
    <p>{{ title }}</p>

    <p>
      <label>
        Base URL:
        <input type="text" v-model="baseUrl" @input="baseUrlChange()" size="100" />
      </label>
    </p>

    <button
      v-for="tab in tabs"
      :key="tab"
      @click="currentTab = tab"
      :class="['tab-button', { active: currentTab === tab }]"
    >{{ tab }}</button>

    <landing-page
      :base-url="baseUrl"
      @rx-landing-json="rxLandingJson"
      v-show="currentTab === 'Landing'"
      class="tab"
    ></landing-page>

    <div v-show="currentTab === 'Processes'" class="tab">This is the Processes tab</div>

    <div v-show="currentTab === 'Fredbob'" class="tab">This is the FREDBOB tab</div>
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "app",
  components: {
    LandingPage
  },
  data() {
    return {
      title: "OGC API Test Client",
      // baseUrl: "http://localhost:3456/javaps/rest",
      baseUrl: "http://geoprocessing.demo.52north.org:8080/javaps/rest",
      tabs: ["Landing", "Processes", "Fredbob"],
      currentTab: "Landing",
      siteData: {
        landingJson: null,
        processesUrl: null
      }
    };
  },
  methods: {
    baseUrlChange() {
      // this.siteData = null
    },
    rxLandingJson(value) {
      this.siteData.landingJson = value;
      console.log(
        "[rxLandingJson] => " +
          JSON.stringify(this.siteData.landingJson, null, 2)
      );
    }
  }
};
</script>

<style>
</style>
