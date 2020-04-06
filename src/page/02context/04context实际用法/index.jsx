import React, { Component } from 'react'
import { ToggleProvider,ToggleConsumer } from './baseContext';
import Son from './son'
export default class context extends Component {
  render() {
    return (
      <ToggleProvider>
        <Son></Son>
      </ToggleProvider>
    )
  }
}
