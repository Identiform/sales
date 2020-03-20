import React from 'react'
import { connect } from 'react-redux'

import Async from '../Async'
const Title = Async(() => import('../template/Title'))
const Ls = Async(() => import('../template/Ls'))

const Address = (props) => (
  <div>
    <Title title='Your Address' />
    <Ls data={[{ id: 0, data: props.account }]} />
  </div>
)

function mapStateToProps(state) {
  return {
    web3: state.web3,
    account: state.account
  }
}

export default connect(mapStateToProps)(Address)
