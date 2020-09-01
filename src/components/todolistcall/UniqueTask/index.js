import React from "react";

class UniqueTask extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default UniqueTask;