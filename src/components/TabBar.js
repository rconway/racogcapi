import React from "react";

class TabBar extends React.Component {
  render() {
    const tabButtons = this.props.tabs.map((tab, index) => {
      let className =
        this.props.selectedTab === index ? "btn btn-info" : "btn btn-secondary";
      return (
        <button
          type="button"
          className={className}
          key={index}
          onClick={() => this.props.setSelectedTab(index)}
        >{`${tab} (${index})`}</button>
      );
    });
    return <div>{tabButtons}</div>;
  }
}

export default TabBar;
