import React from "react";

class LandingPage extends React.Component {
  interpretLandingJson = () => {
    if (this.props.landingJson && this.props.landingJson.links) {
      return this.props.landingJson.links.map((link, index) => {
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
    return (
      <div>
        <div>Landing Page...</div>
        <ul>{this.interpretLandingJson()}</ul>
        <pre>{JSON.stringify(this.props.landingJson, null, 2)}</pre>
      </div>
    );
  }
}

export default LandingPage;
