import React from "react";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div>Landing Page...</div>
        <pre>{JSON.stringify(this.props.landingJson, null, 2)}</pre>
      </div>
    );
  }
}

export default LandingPage;
