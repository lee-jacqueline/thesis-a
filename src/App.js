import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Header, Segment, Message } from 'semantic-ui-react'
import { Button, Checkbox, Form, Radio, Select, TextArea } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <center><div>
        <HeaderCristal />
        <TitleBar />
      </div></center>
    );
  }
}

class TitleBar extends Component {
  render() {
    return (
      <div className="App">
        <MessageNotice />
        <SegmentOne />
      </div>
    );
  }
}

const HeaderCristal = () => (
  <Segment clearing>
    <Header as='h1' floated='left'>
      CrisTAL
    </Header>
  </Segment>
)

const MessageNotice = () => (
  <Message floating className="Segments">
    <Message.Header>
      CrisTAL Screening survey
    </Message.Header>
    <p>
      Tick all boxes that apply. Answer all questions you can to obtain a CriSTAL score. This system will not be able to calculate a score if you don&#39;t complete the demographic section at the end.
    </p>
  </Message>
)

const SegmentOne = () => (
  <Segment.Group className="Segments">
    <Segment>
      <FormOne />
    </Segment>
  </Segment.Group>
)

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class FormOne extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
          <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

// const InputExampleInput = () => (
//   <Input placeholder='Search...' />
// )
//
// export default InputExampleInput

export default App;
