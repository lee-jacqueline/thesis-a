import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Header, Segment, Message, Icon } from 'semantic-ui-react'
import { Button, Checkbox, Form, Radio, Select, TextArea } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <center><div className="App-background">
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
        <Form>
          <FormOne />
          <FormTwo />
          <FormThree />
          <FormFour />
          <FormFive />
          <Button type='submit'>Submit</Button>
        </Form>
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

class FormOne extends Component {
  state = {}

  genderChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment.Group className="Segments">
        <Segment>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Completion Date' placeholder='Date' />
            <Form.Field control={Input} label='Study ID' placeholder='Study ID' />
            <Form.Field control={Input} label='Date of Presentation/Hospitalisation' placeholder='Date' />
          </Form.Group>
          <Form.Field control={Input} label='Admitting Team' placeholder='Team' />
        </Segment>
      </Segment.Group>
    )
  }
}

class FormTwo extends Component {
  state = {}

  admissionChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Segment.Group className="Segments">
        <Segment>
          <Gender />
          <Form.Field control={Input} label='Date of Birth' placeholder='Date'/>
          <Form.Field control={Checkbox} label='Age >80' />
          <p className="Subtitles">Choose one</p>
          <Form.Field control={Radio} label='Eligible for admission via emergency Department or at least 1 night in the ED' value='1' checked={value === '1'} onChange={this.admissionChange} />
          <Form.Field control={Radio} label='Nursing home resident /or in supported accomodation'  value='2' checked={value === '2'} onChange={this.admissionChange} />
          <Form.Group>
            <Form.Field control={Input} label='ROCKWOOD Scale:' placeholder='' width={8}/>
            <Rockwood />
            <Form.Field control={Input} label='Actual CFS score:' placeholder='' width={3}/>
          </Form.Group>
        </Segment>
      </Segment.Group>
    )
  }
}

class Gender extends Component {
  state = {}
  genderChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <Form.Group inline>
        <label>Sex</label>
        <Form.Field control={Radio} label='Male' value='1' checked={value === '1'} onChange={this.genderChange} />
        <Form.Field control={Radio} label='Female' value='2' checked={value === '2'} onChange={this.genderChange} />
      </Form.Group>
    )
  }
}

class FormThree extends Component {
  state = {}

  render() {
    const { value } = this.state
    return (
      <Segment.Group className="Segments">
        <Segment>

            <strong><label>Evidence of Cognitive Impairment</label></strong>
            <Form.Field control={Checkbox} label='Dementia' />
            <Form.Field control={Checkbox} label='Long term mental disorder' />
            <Form.Field control={Checkbox} label='Behavioural Alterations' />
            <Form.Field control={Checkbox} label='Mental disability from stroke' />
            <Proteinuria />
            <strong><label>Abnormal ECG (atrial fibrillation, ventricular tachycardia, other abnormal rhythm or >5 ectopics/min, changes to Q or ST waves)</label></strong>
            <Form.Group inline>
              <Form.Field control={Checkbox} label='Acute abnormality' />
              <Form.Field control={Checkbox} label='Chronic abnormality' />
              <Form.Field control={Checkbox} label='Both chronic and acute' />
            </Form.Group>
            <Form.Field control={Input} label='Type of abnormality (optional)' placeholder=''/>
            <Form.Group inline>
              <Form.Field control={Checkbox} label='No abnormality' />
              <Form.Field control={Checkbox} label='Don&#39;t Know' />
            </Form.Group>
        </Segment>
      </Segment.Group>
    )
  }
}

class FormFour extends Component {
  state = {}

  render() {
    const { value } = this.state
    return (
      <Segment.Group className="Segments">
        <Segment>
          <PrevHosp />
          <Hospitalisation />
        </Segment>
      </Segment.Group>
    )
  }
}

class FormFive extends Component {
  state = {}
  render() {
    const { value } = this.state
    return (
      <Segment.Group className="Segments">
        <Segment>
          <Form.Field control={Checkbox} label='Fall in the past 3 months' />
          <Form.Field control={Checkbox} label='Polypharmacy (6 or more medications) before admission' />
        </Segment>
      </Segment.Group>
    )
  }
}

class Rockwood extends Component {
  state = {}
  rwChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <Form.Group inline>
        <label>Rockwood >= 5</label>
        <Form.Field control={Radio} label='Yes' value='1' checked={value === '1'} onChange={this.rwChange} />
        <Form.Field control={Radio} label='No'  value='2' checked={value === '2'} onChange={this.rwChange} />
      </Form.Group>
    )
  }
}

class Proteinuria extends Component {
  state = {}
  proteinChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <Form.Group inline>
        <label>Proteinuria on a spot urine sample: (++ or &#62;30mg albumin/g creatinine)</label>
        <Form.Field control={Radio} label='Yes' value='1' checked={value === '1'} onChange={this.proteinChange} />
        <Form.Field control={Radio} label='No'  value='2' checked={value === '2'} onChange={this.proteinChange} />
        <Form.Field control={Radio} label='Don&#39;t Know'  value='3' checked={value === '3'} onChange={this.proteinChange} />
      </Form.Group>
    )
  }
}

class PrevHosp extends Component {
  state = {}
  prevHospChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <div>
        <label>Previous Hospitalisation for at least one night in past year</label>
        <Form.Group inline>
          <Form.Field control={Radio} label='Yes' value='1' checked={value === '1'} onChange={this.prevHospChange} />
          <Form.Field control={Input} label='Total number of hospitalisation in the past year' placeholder=''/>
        </Form.Group>
        <Form.Group inline>
          <Form.Field control={Radio} label='No'  value='2' checked={value === '2'} onChange={this.prevHospChange} />
          <Form.Field control={Radio} label='Not Documented'  value='3' checked={value === '3'} onChange={this.prevHospChange} />
        </Form.Group>
      </div>
    )
  }
}

class Hospitalisation extends Component {
  state = {}
  icuChange = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <div>
        <label>ICU admission at previous hospitalisation in the past year</label>
        <Form.Group inline>
          <Form.Field control={Radio} label='Yes' value='1' checked={value === '1'} onChange={this.icuChange} />
          <Form.Field control={Input} label='Total number of hospitalisation in the past year' placeholder=''/>
        </Form.Group>
        <Form.Group inline>
          <Form.Field control={Radio} label='No ICU admission at all'  value='2' checked={value === '2'} onChange={this.icuChange} />
          <Form.Field control={Radio} label='Unknown'  value='3' checked={value === '3'} onChange={this.icuChange} />
        </Form.Group>
      </div>
    )
  }
}
// const InputExampleInput = () => (
//   <Input placeholder='Search...' />
// )
//
// export default InputExampleInput

export default App;
