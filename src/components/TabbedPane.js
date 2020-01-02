import React from "react";
import TabBar from "./TabBar";
import LandingPage from "./LandingPage";

class TabbedPane extends React.Component {
  tabs = {
    labels: ["Landing", "API", "Collections"],
    contents: [
      () => <LandingPage landingJson={this.props.landingJson} />,
      () => <div>API Page</div>,
      () => <div>Collections Page</div>
    ]
  };
  state = {
    selectedTab: 0
  };

  setSelectedTab = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    return (
      <div>
        <div>TabbedPane - SELECTED={this.state.selectedTab}</div>
        <TabBar
          tabs={this.tabs.labels}
          selectedTab={this.state.selectedTab}
          setSelectedTab={this.setSelectedTab}
        />
        {this.tabs.contents[this.state.selectedTab]()}
      </div>
    );
  }
}

export default TabbedPane;
