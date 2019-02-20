import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu stackable>
          <Menu.Item name='features' > Features </Menu.Item>
          <Menu.Item name='testimonials' > Testimonials </Menu.Item>
          <Menu.Item name='sign-in'> Sign-in </Menu.Item>
        </Menu>
      </div>
    )
  }
}
