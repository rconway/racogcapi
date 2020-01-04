import React from "react";

class NewLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPage: {}
    };
    if (this.props.url) {
      this.fetchLandingPage(this.props.url);
    }
  }

  fetchLandingPage = async landingUrl => {
    console.log(">> fetching NEW landing page <<");
    const attemptedLandingUrl = landingUrl;
    try {
      const response = await fetch(attemptedLandingUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("problem retrieving NEW landing page");
      }

      const data = await response.json();
      this.setState({
        landingPage: {
          url: attemptedLandingUrl,
          data: data
        }
      });
    } catch (error) {
      console.log(error);
      this.setState({
        landingPage: {}
      });
    }
  };

  componentDidUpdate() {
    console.log(">>> componentDidUpdate <<<");
    if (this.props.url !== this.state.landingPage.url) {
      this.fetchLandingPage(this.props.url);
    }
  }

  render() {
    console.log(">>> render <<<");
    return (
      <div>
        <div>{`>> New Landing Page <<`}</div>
        <div>{`props.url => ${this.props.url}`}</div>
        <div>{`state.landingPage.url => ${this.state.landingPage.url}`}</div>
        <div>DATA...</div>
        <pre>{JSON.stringify(this.state.landingPage.data, null, 2)}</pre>
      </div>
    );
  }
}

export default NewLandingPage;
