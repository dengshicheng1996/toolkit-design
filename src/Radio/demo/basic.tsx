import * as React from 'react'
import Radio from '../index'

export default () => {
  return (
    <>
     <Radio.Group renderHeader="p1: 配合 form, Group 使用">
      <Radio.Item value={1}>{1}</Radio.Item>
      <Radio.Item value={2} brief="第二行">
        {2}
      </Radio.Item>
      <Radio.Item value={3} disabled>
        {3}
      </Radio.Item>
      <Radio.Item value={4} disabled>
        {4}
      </Radio.Item>
    </Radio.Group>
    </>
  )
}
