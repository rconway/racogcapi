import React from "react";
import TabBar from "./TabBar";
import LandingPage from "./LandingPage";

class TabbedPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  // Tab definitions.
  // Each entry comprises a 2-D array as [<label>, <component-factory-function>].
  tabs = new Map([
    ["Landing", () => <LandingPage landingJson={this.props.landingJson} />],
    ["API", () => <div>API Page</div>],
    ["Collections", () => <div>Collections Page</div>]
  ]);
  tabLabelArray = Array.from(this.tabs.keys());
  tabContentsArray = Array.from(this.tabs.values());

  setSelectedTab = index => {
    this.setState({ selectedTab: index });
  };

  render() {
    return (
      <div>
        <div>TabbedPane - SELECTED={this.state.selectedTab}</div>
        <TabBar
          tabs={this.tabLabelArray}
          selectedTab={this.state.selectedTab}
          setSelectedTab={this.setSelectedTab}
        />
        {this.tabContentsArray[this.state.selectedTab]()}
      </div>
    );
  }
}

export default TabbedPane;
