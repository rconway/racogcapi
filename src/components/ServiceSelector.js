import React from "react";

class ServiceSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: props.baseUrl ? props.baseUrl : ""
    };

    this.knownServicesRendered = React.Children.map(
      this.props.children,
      child => {
        if (child.type === "service") {
          const { name, url } = child.props;
          return (
            <div key={name}>
              <span>{name} => </span>
              <button onClick={() => this.setBaseUrl(url)}>{url}</button>
            </div>
          );
        }
      }
    );
  }

  updateBaseUrl = event => {
    this.setState({ baseUrl: event.target.value });
  };

  setBaseUrl = baseUrl => {
    this.setState({ baseUrl: baseUrl });
    this.props.setBaseUrl(baseUrl);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setBaseUrl(this.state.baseUrl);
  };

  render() {
    return (
      <div>
        ServiceSelector
        {this.knownServicesRendered}
        <form onSubmit={this.handleSubmit}>
          <label>
            Base URL:{" "}
            <input
              type="text"
              size="100"
              value={this.state.baseUrl}
              onChange={this.updateBaseUrl}
            />
          </label>
          <button>SELECT</button>
        </form>
      </div>
    );
  }
}

export default ServiceSelector;
