import * as React from 'react'
import ActionSheet from '../index';

export default () => {
  const handle = (maskClosable: boolean, showTitle = true) => () => {
    ActionSheet.show(
      {
        title: showTitle ? '12345' : undefined,
        items: ['第1个', '第2个', { value: '第3个', warn: true }],
        maskClosable: maskClosable,
      },
      res => console.log('callback', res),
    )
  }

  handle(true, true);
  return (
    <div>
     点击
    </div>
  )
}
