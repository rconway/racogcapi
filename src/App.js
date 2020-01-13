import React from "react";
import ServiceSelector from "./components/ServiceSelector";
import TabbedPane from "./components/TabbedPane";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: null,
      landingUrl: null,
      siteLinks: {}
    };
  }

  setBaseUrl = baseUrl => {
    this.setState({ baseUrl: baseUrl, landingUrl: `${baseUrl}/` });
  };

  landingPage = () => (
    <LandingPage url={this.state.landingUrl} setSiteLinks={this.setSiteLinks} />
  );
  conformancePage = () => <div>Conformance Page</div>;
  apiPage = () => <div>API Page</div>;
  collectionsPage = () => <div>Collections Page</div>;

  setSiteLinks = links => {
    console.log("SITE LINKS=>", links);
  };

  render() {
    return (
      <div className={`container-fluid`}>
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
          <tab label="Landing" contents={this.landingPage} />
          <tab label="Conformance" contents={this.conformancePage} />
          <tab label="API" contents={this.apiPage} />
          <tab label="Collections" contents={this.collectionsPage} />
        </TabbedPane>
      </div>
    );
  }
}

export default App;
