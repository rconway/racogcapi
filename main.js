
var app = new Vue({
    el: '#app',
    data: {
        title: "OGC API Test Client",
        baseUrl: "http://localhost:3456/javaps/rest",
        fetchStatus: null,
        landingJson: null
    },
    computed: {
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
            .then(function(response) {
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
