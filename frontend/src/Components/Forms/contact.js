import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile'

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Envoyer"
    };   
  } 

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();  
    this.setState({ status: "Envoyé" });  
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Envoyé");
        this.setState({ name: "", email: "", message: "", status: "Envoyer" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }


  render(){
    let buttonText = this.state.status;
    return (  
        <div id="contactContainer">  
        <Form onSubmit={this.handleSubmit.bind(this)} method="POST" id="formContact">
            <Form.Group>
            <Form.Label htmlFor="name">Nom:</Form.Label>
            <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
            />
            </Form.Group>
            <Form.Group>
            <Form.Label htmlFor="email">Email:</Form.Label>
            <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                required
            />
            </Form.Group>
            <Form.Group>
            <Form.Label htmlFor="message">Message:</Form.Label>
            <textarea
                id="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                required
            />
            </Form.Group>
            <button type="submit">{buttonText}</button>
        </Form>
        </div>  
    )}
}

export default ContactForm;