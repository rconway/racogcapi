import React from "react";
import TabBar from "./TabBar";

class TabbedPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };

    this.tabLabelArray = [];
    this.tabContentsArray = [];
    React.Children.forEach(this.props.children, child => {
      this.tabLabelArray.push(child.props.label);
      this.tabContentsArray.push(child.props.contents);
    });
    console.log(this.tabLabelArray);
    console.log(this.tabContentsArray);
  }

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
