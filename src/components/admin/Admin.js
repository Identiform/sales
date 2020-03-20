import React, { Component } from 'react'
import { connect } from 'react-redux'

import Async from '../Async'
const Title = Async(() => import('../template/Title'))
const Lead = Async(() => import('../template/Lead'))
const Container = Async(() => import('../template/Container'))

class Admin extends Component {
  render() {
    return (
      <Container>
        <Title title="Admin Area" />
        <Lead text="This area is admins'." />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
    web3: state.web3
  }
}

export default connect(mapStateToProps)(Admin)
