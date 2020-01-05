import React from "react";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPage: {}
    };
    if (this.props.url) {
      this.fetchLandingPage(this.props.url);
    }
  }

  componentDidUpdate() {
    console.log(">>> componentDidUpdate <<<");
    if (this.props.url && this.props.url !== this.state.landingPage.url) {
      this.fetchLandingPage(this.props.url);
    }
  }

  fetchLandingPage = async landingUrl => {
    console.log(">> fetching NEW landing page <<");
    // const attemptedLandingUrl = landingUrl;
    try {
      const response = await fetch(landingUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          accept: "application/json"
        }
      });

      if (!response.ok) {
        throw Error("problem retrieving NEW landing page");
      }

      const data = await response.json();
      this.setState({
        landingPage: {
          url: landingUrl,
          data: data
        }
      });
    } catch (error) {
      this.setState({
        landingPage: {
          url: landingUrl,
          data: {
            error: error.message
          }
        }
      });
    }
  };

  interpretLandingJson = () => {
    let { data } = this.state.landingPage;
    if (data && data.links) {
      return data.links.map((link, index) => {
        return (
          <li key={index}>
            <span>{`[link]: ${link.rel} - ${link.type} - `}</span>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.href}
            </a>
            <span> => </span>
            <button onClick={() => this.fetchLink(link)}>FETCH</button>
          </li>
        );
      });
    }
  };

  fetchLink = link => {
    console.log(
      `fetching link: ${link.rel} - ${link.href} - ${link.type} - ${link.title}`
    );
  };

  render() {
    console.log(">>> render <<<");
    return (
      <div>
        <div>{`>> New Landing Page <<`}</div>
        <div>{`props.url => ${this.props.url}`}</div>
        <div>{`state.landingPage.url => ${this.state.landingPage.url}`}</div>
        <div>LINKS...</div>
        <ul>{this.interpretLandingJson()}</ul>
        <div>RAW...</div>
        <pre>{JSON.stringify(this.state.landingPage.data, null, 2)}</pre>
      </div>
    );
  }
}

export default LandingPage;
