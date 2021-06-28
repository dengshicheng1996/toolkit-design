import * as React from 'react'
import Loading from '../index'

export default () => {
  return (
    <div>
      <div>
        <Loading show={true}>
          区域加载
        </Loading>
        <Loading
          show={true}
          text={'请稍候'}
          delay={3000}
          
        >
          延时3s加载
        </Loading>
        <div className="example3">
          <Loading
            show={true}
            text={'请稍候'}
            delay={3000}
          />
        </div>
      </div>
    </div>
  )
}
