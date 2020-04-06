import React, { Component } from 'react'
export const ToggleContext = React.createContext({
  toggle: true,
  handleToggle(){}
})
export class ToggleProvider extends Component {
  handleToggle=()=>{
    console.log(1)
    this.setState({
      toggle: !this.state.toggle
    })
  }
  state = {
    toggle: true,
    handleToggle: this.handleToggle
  }
  
  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}
export const ToggleConsumer = ToggleContext.Consumer