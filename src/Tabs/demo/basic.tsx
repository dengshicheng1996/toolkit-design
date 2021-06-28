import * as React from 'react'
import Tabs from '../index'

const { Item } = Tabs

const handleChange = (index: number) => {
  console.log(index)
}

const tabItemStyle = {
  height: 100,
}

export default () => {

  const len = [{}, {}, {}, {}]
  return (
    <div>
      <Tabs
        onChange={handleChange}
        type={'basis'}
        animateTransitions={true}
      >
        {len.map((v, i) => {
          return (
            <Item
              key={i}
              tab={{
                title: '选项卡',
                desc: '描述文案',
                badge: '6'
              }}
            >
              <div style={tabItemStyle}>选项卡{i + 1}</div>
            </Item>
          )
        })}
      </Tabs>
    </div>
  )
}
