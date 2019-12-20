<template>
  <div>
    <p v-show="!validBaseUrl">Enter Base URL for landing page</p>
    <button v-show="validBaseUrl" @click="fetchLandingPage">FETCH Landing Page</button>
    <p v-if="fetchStatus">{{ fetchStatus }}</p>
    <pre v-if="landingJson">{{ landingJsonString }}</pre>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    baseUrl: {
      type: String,
      required: true
    },
    landingJson: {
      // type: Object,
      required: true
    }
  },
  data() {
    return {
      fetchStatus: null
    };
  },
  computed: {
    validBaseUrl() {
      try {
        new URL(this.baseUrl);
        console.log("baseUrl => valid");
        return true;
      } catch (e) {
        console.log("baseUrl => BAD");
        return false;
      }
    },
    landingJsonString() {
      return JSON.stringify(this.landingJson, null, 2);
    }
  },
  methods: {
    async fetchLandingPage() {
      console.log("zzz CLICKED zzz");
      this.$emit("set-landing-json", null);

      try {
        this.fetchStatus = "FETCHING";
        let baseUrlFetched = this.baseUrl
        let response = await fetch(baseUrlFetched + "/", {
          method: "GET",
          mode: "cors",
          headers: {
            accept: "application/json"
          }
        })
        this.fetchStatus = "RESPONSE";
        console.log("response => " + response);

        if (response.ok) {
          this.fetchStatus = "JSON";
          let data = await response.json()
          console.log("data => " + data);
          console.log("dataJson => " + JSON.stringify(data, null, 2));
          this.fetchStatus += " [done]";
          this.$emit("set-landing-json", baseUrlFetched, data);
        }
        else {
          console.error("bad response from 'landing page' endpoint");
          this.fetchStatus += " [error]";
        }
      }
      catch(error) {
        console.error("got an error => " + error);
        this.fetchStatus += " [error]";
      }

      console.log("ZZZ CLICKED ZZZ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
