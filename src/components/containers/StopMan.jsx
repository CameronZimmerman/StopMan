import React, { Component } from 'react'
import FetchForm from '../displays/FetchForm'
export default class StopMan extends Component {
  state = {
    url: '',
    body: '',
    method: 'GET',
    result: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log('whee')
  }

  handleSubmit = (e) => {
    console.log('yay' + e.target)
  }
  render() {
    return (
      <div>
        <FetchForm {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}></FetchForm>
      </div>
    )
  }
}
