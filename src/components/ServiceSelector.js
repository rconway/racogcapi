import React from "react";

class ServiceSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: props.baseUrl ? props.baseUrl : ""
    };
  }

  updateBaseUrl = event => {
    this.setState({ baseUrl: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setBaseUrl(this.state.baseUrl);
  };

  render() {
    return (
      <div>
        ServiceSelector
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
