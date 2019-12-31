import React from "react";

class TabBar extends React.Component {
  render() {
    const tabButtons = this.props.tabs.map((tab, index) => {
      return (
        <button
          key={index}
          onClick={() => this.props.setSelectedTab(index)}
        >{`${tab} (${index})`}</button>
      );
    });
    return <div>{tabButtons}</div>;
  }
}

export default TabBar;
