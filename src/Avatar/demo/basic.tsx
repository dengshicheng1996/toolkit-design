import * as React from 'react'
import Avatar from '../index'

export default () => {

  const addProps = {
    name: '小蚂蚁',
    description: '一二一一二一',
  }

  return (
    <div>
      <Avatar {...addProps} />
    </div>
  )
}
