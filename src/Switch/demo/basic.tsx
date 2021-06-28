import * as React from 'react'
import Switch from '../index'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

export default () => {
  const events = {
    onChange: (v: any) => console.log('onChange', v),
  }
  return (
    <>
      <Switch {...events} />
      <Switch defaultChecked value="a1" />
    </>
  )
}
