
var app = new Vue({
    el: '#app',
    data: {
        title: "OGC API Test Client",
        // baseUrl: "http://localhost:3456/javaps/rest",
        baseUrl: "http://geoprocessing.demo.52north.org:8080/javaps/rest",
        landingJson: null,
        currentTab: "landing-page",
        tabs: ["landing-page", "fredbob"]
    },
    methods: {
        rxLandingJson(value) {
            this.landingJson = value
            console.log("[rxLandingJson] => " + JSON.stringify(this.landingJson, null, 2))
        }
    }
})
