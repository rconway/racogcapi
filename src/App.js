import React from "react";
import ServiceSelector from "./components/ServiceSelector";
import TabbedPane from "./components/TabbedPane";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>OGC API Test Application</div>
        <ServiceSelector />
        <TabbedPane />
      </div>
    );
  }
}

export default App;
