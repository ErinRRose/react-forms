import React from 'react';


class Form extends React.Component {

  // handleChange = (event) => {
  //   console.log(event.target)
  // }
  render() {
    return (
      <div>
      <form>
        
        <input type="text" name="firstName" onChange={(event) => this.props.handleChange(event)} value={this.props.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.lastName} />
      </form>
      </div>
    );
  }
}

export default Form;