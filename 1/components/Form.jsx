import React from "react";
import styles from "./Form.module.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      card: "",
      email: "",
    };

    this.firstNameRef = React.createRef();
  }

  state = {
    firstName: "",
    email: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateName = () => {
    // if (this.state.firstName.length < 5) {
    //   alert("You first name can't be less than 7 letters");
    // }
  };
  validateEmail = () => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      alert("Email is not valid");
    }
  };
  componentDidMount() {
    console.log(this.firstNameRef);
    this.firstNameRef.current.focus();
  }

  render() {
    const { firstName, email } = this.state;
    return (
      <div className={styles}>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
          ref={this.firstNameRef}
        />

        <input
          type="email   "
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
      </div>
    );
  }
}

export { Form };
