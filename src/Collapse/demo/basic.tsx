import * as React from 'react'
import Collapse from '../index'

export default () => (
  <div>
    <Collapse onChange={key => console.log('key', key)} defaultActiveKey="0">
      <Collapse.Panel header="Title 1">
      </Collapse.Panel>
      <Collapse.Panel header="Title 2">
        this is panel content2 or other
      </Collapse.Panel>
      <Collapse.Panel header="Title 3">
        text text text text text text text text text text text text text text
        text
      </Collapse.Panel>
    </Collapse>
  </div>
)
