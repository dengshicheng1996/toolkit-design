import * as React from 'react'
import HorizontalScrollbar from '../index'
import './demo.less'

export default () => (
  <div className="demo">
    <HorizontalScrollbar>
      <div className="scroll-container">
        {Array(20)
          .fill('')
          .map((i, index) => (
            <div key={index} className="scroll-item">
              {index}
            </div>
          ))}
      </div>
    </HorizontalScrollbar>
  </div>
)
