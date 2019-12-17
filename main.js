
var app = new Vue({
    el: '#app',
    data: {
        title: "OGC API Test Client",
        // baseUrl: "http://localhost:3456/javaps/rest",
        baseUrl: "http://geoprocessing.demo.52north.org:8080/javaps/rest",
        tabs: ["Landing", "Processes", "Fredbob"],
        currentTab: "Landing",
        siteData: {
            landingJson: null,
            processesUrl: null
        }
    },
    methods: {
        baseUrlChange() {
            // this.siteData = null
        },
        rxLandingJson(value) {
            this.siteData.landingJson = value
            console.log("[rxLandingJson] => " + JSON.stringify(this.siteData.landingJson, null, 2))
        }
    }
})
