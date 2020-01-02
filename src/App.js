import React from "react";
import ServiceSelector from "./components/ServiceSelector";
import TabbedPane from "./components/TabbedPane";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "http://geoprocessing.demo.52north.org:8080/javaps/rest",
      baseUrlFetched: null,
      landingJson: null
    };
  }

  setBaseUrl = baseUrl => {
    this.setState({ baseUrl: baseUrl });
    if (baseUrl !== this.state.baseUrlFetched) {
      this.fetchLandingPage(baseUrl);
    }
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
        baseUrlFetched: attemptedBaseUrl,
        landingJson: data
      });
    } catch (error) {
      console.log(error);
      this.setState({
        baseUrlFetched: null,
        landingJson: null
      });
    }
  };

  render() {
    return (
      <div>
        <div>OGC API Test Application</div>
        <ServiceSelector
          baseUrl={this.state.baseUrl}
          setBaseUrl={this.setBaseUrl}
        />
        <TabbedPane landingJson={this.state.landingJson} />
      </div>
    );
  }
}

export default App;
