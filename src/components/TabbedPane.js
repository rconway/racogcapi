import React from "react";
import TabBar from "./TabBar";

class TabbedPane extends React.Component {
  tabs = {
    labels: ["Fred", "Bob", "Larry"],
    contents: [<div>Fred</div>, <div>Bob</div>, <div>Larry</div>]
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
        {this.tabs.contents[this.state.selectedTab]}
      </div>
    );
  }
}

export default TabbedPane;
