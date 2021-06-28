import * as React from 'react'
import Tag from '../index'
import { AddOutline } from '@ant-design/mobile-icons'
import './demo.less'

export default () => {

  const addProps: any = {
    type: 'filling' as any,
    size: 'sm',
    component: AddOutline
  }

  return (
    <div className="demo-tag">
      <Tag {...addProps}>蓝色</Tag>
      <Tag theme="tangerine" {...addProps}>
        橘红
      </Tag>
      <Tag theme="orange" {...addProps}>
        橘黄
      </Tag>
      <Tag theme="green" {...addProps}>
        绿色
      </Tag>
    </div>
  )
}
