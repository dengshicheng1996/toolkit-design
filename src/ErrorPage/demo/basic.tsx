import * as React from 'react'
import ErrorPage from '../index'

export default () => (
  <div>
    <ErrorPage
      src={
        'https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*utEARL8Wu0EAAAAAAAAAAABkARQnAQ'
      }
      text={'付款没成功'}
      subText={'请重新付款'}
    >
      <div >
        返回
      </div>
    </ErrorPage>
  </div>
)
