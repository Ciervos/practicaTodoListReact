import React from "react";

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  }

  handleClick() {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      this.props.propDePrueba();
    }
  }

  render() {
    return (
      <>
        <input onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={()=> this.handleClick()}>Agregar</button>
      </>
    );
  }
}

export default AddTask;