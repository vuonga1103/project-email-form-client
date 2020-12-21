import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, message} = state;
    console.log(name, email, message)

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="text" name="message" onChange={handleChange}/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );

  

}

export default App;
