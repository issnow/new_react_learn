import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class child3 extends Component {
  static contextTypes = {
    age: PropTypes.number
  }
  render() {
    return (
      <div>
        chidl3: {this.context.age}
      </div>
    )
  }
}
