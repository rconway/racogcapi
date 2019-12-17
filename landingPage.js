Vue.component("landing-page", {
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <p v-show="!validBaseUrl">Enter Base URL for landing page</p>
      <button v-show="validBaseUrl" @click="fetchLandingPage">FETCH Landing Page</button>
      <p v-if="fetchStatus">{{ fetchStatus }}</p>
      <pre v-if="landingJson">{{ landingJsonString }}</pre>
    </div>
  `,
  data() {
    return {
      fetchStatus: null,
      landingJson: null
    }
  },
  computed: {
    validBaseUrl() {
      try {
        new URL(this.baseUrl)
        console.log("baseUrl => valid")
        return true
      }
      catch(e) {
        console.log("baseUrl => BAD")
        return false
      }
    },
    landingJsonString() {
      return JSON.stringify(this.landingJson, null, 2)
    }
  },
  methods: {
    fetchLandingPage() {
      self = this
      console.log("zzz CLICKED zzz")
      self.fetchStatus = "FETCHING"
      fetch(self.baseUrl + "/", {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json",
        }
      })
        // fetch(self.baseUrl + "/")
        .then(function (response) {
          self.fetchStatus = "RESPONSE"
          console.log(response)
          if (response.ok) {
            self.fetchStatus = "JSON"
            response.json()
              .then(data => {
                console.log(data)
                console.log(JSON.stringify(data, null, 2))
                self.landingJson = data
                self.fetchStatus += " [done]"
                self.$emit("rx-landing-json", data)
              })
              .catch(error => {
                console.error(error)
                self.fetchStatus += " [error]"
              })
          }
          else {
            console.error("bad response from 'landing page' endpoint")
            self.fetchStatus += " [error]"
          }
        })
        .catch(error => {
          console.error(error)
          self.fetchStatus += " [error]"
        })
      console.log("ZZZ CLICKED ZZZ")
    }
  }
})