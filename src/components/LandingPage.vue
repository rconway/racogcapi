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
    }
  },
  data() {
    return {
      fetchStatus: null,
      landingJson: null
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
    fetchLandingPage() {
      console.log("zzz CLICKED zzz");
      this.fetchStatus = "FETCHING";
      fetch(this.baseUrl + "/", {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json"
        }
      })
      .then(response => {
        this.fetchStatus = "RESPONSE";
        console.log(response);
        if (response.ok) {
          this.fetchStatus = "JSON";
          response
            .json()
            .then(data => {
              console.log(data);
              console.log(JSON.stringify(data, null, 2));
              this.landingJson = data;
              this.fetchStatus += " [done]";
              this.$emit("rx-landing-json", data);
            })
            .catch(error => {
              console.error(error);
              this.fetchStatus += " [error]";
            });
        } else {
          console.error("bad response from 'landing page' endpoint");
          this.fetchStatus += " [error]";
        }
      })
      .catch(error => {
        console.error(error);
        this.fetchStatus += " [error]";
      });
      console.log("ZZZ CLICKED ZZZ");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
