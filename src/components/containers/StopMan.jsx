import React, { Component } from 'react'
import FetchForm from '../displays/FetchForm'
import { getResponse } from '../../services/Api'
import Display from '../displays/Display'
import HistoryList from '../displays/HistoryList'
export default class StopMan extends Component {
  state = {
    url: '',
    body: '',
    method: 'GET',
    result: '',
    history: []
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log('whee')
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {method, body, url, history} = this.state

    const result = await getResponse(method, body, url)
    history.push({
      url,
      method,
      timeCreated: new Date().getTime()
    })
    this.setState({result, history})
  }
  render() {
    return (
      <div>
        <FetchForm {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}></FetchForm>
        <Display result={this.state.result} />
        <HistoryList historyList={this.state.history}/>
      </div>
    )
  }
}
