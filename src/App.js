import React from "react";
import ServiceSelector from "./components/ServiceSelector";
import TabbedPane from "./components/TabbedPane";
import LandingPage from "./components/LandingPage";
import NewLandingPage from "./components/NewLandingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: null,
      landingUrl: null,
      site: {}
    };
  }

  setBaseUrl = baseUrl => {
    this.setState({ baseUrl: baseUrl, landingUrl: `${baseUrl}/` });
    // if (baseUrl !== this.state.site.baseUrl) {
    //   this.fetchLandingPage(baseUrl);
    // }
  };

  fetchLandingPage = async baseUrl => {
    console.log(">> fetching new landing page <<");
    const attemptedBaseUrl = baseUrl;
    try {
      const response = await fetch(attemptedBaseUrl + "/", {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("problem retrieving landing page");
      }

      const data = await response.json();
      this.setState({
        site: {
          baseUrl: attemptedBaseUrl,
          landingJson: data
        }
      });
    } catch (error) {
      console.log(error);
      this.setState({
        site: {}
      });
    }
  };

  landingPage = () => <LandingPage landingJson={this.state.site.landingJson} />;
  newLandingPage = () => <NewLandingPage url={this.state.landingUrl} />;
  conformancePage = () => <div>Conformance Page</div>;
  apiPage = () => <div>API Page</div>;
  collectionsPage = () => <div>Collections Page</div>;

  render() {
    return (
      <div>
        <div>OGC API Test Application</div>
        <ServiceSelector
          baseUrl={this.state.baseUrl}
          setBaseUrl={this.setBaseUrl}
        >
          <service
            name="Spacebel"
            url="http://databio.spacebel.be/eo-catalog"
          />
          <service
            name="52north"
            url="http://geoprocessing.demo.52north.org:8080/javaps/rest"
          />
        </ServiceSelector>
        <TabbedPane>
          {/* <tab label="Landing" contents={this.landingPage} /> */}
          <tab label="NewLanding" contents={this.newLandingPage} />
          <tab label="Conformance" contents={this.conformancePage} />
          <tab label="API" contents={this.apiPage} />
          <tab label="Collections" contents={this.collectionsPage} />
        </TabbedPane>
      </div>
    );
  }
}

export default App;
