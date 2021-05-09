import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {Name: "", Age: "", Hobbies: "", Email: "", allFieldFilled: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const {Hobbies, Name, Age, Email} = this.state;

    event.preventDefault();

    if (Hobbies && Name && Age && Email) {
      console.log("sent");
    }
  }

  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names
  handleChange(event) {
    this.setState({
      allFieldFilled: event.target.value,
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value
    });
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state
  render() {
    return (

<div data-aos="zoom-out-down">



      <form onSubmit={this.handleSubmit} className="form">
          <div className="heading">INTERACT</div>
        <div className="form-grid">

          <textarea
            name="Name"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.handleChange}
            className="input-box"
            />
          
          
          <textarea
            name="Hobbies"
            placeholder="Hobbies"
            value={this.state.Hobbies}
            onChange={this.handleChange}
            className="input-box"
            />


          <textarea
            name="Age"
            placeholder="Age"
            value={this.state.Age}
            onChange={this.handleChange}
            className="input-box"
            />

          <textarea
            name="Email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.handleChange}
            className="input-box"
            />



          <button className="btn" disabled={this.setState.allFieldFilled}>
            Meet !
          </button>
        </div>
      </form>


</div>
    );
  }
}

export default Form;
