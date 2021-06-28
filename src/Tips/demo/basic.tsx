import * as React from 'react'
import Tips from '../index';
import Button  from '../../Button';
import { AlipayCircleFill } from '@ant-design/mobile-icons'
import './demo.less'

export default () => {
  const [show, setShow] = React.useState(true)

  const addProps = {
    offset: 'top',
  }
  return (
    <div className="demo-tips">
      <h3>{show ? '隐藏' : '显示'}</h3>
      <Button
        type="ghost"
        capsuleSize="sm"
        onPress={() => {
          setShow(!show)
        }}
      >
        点我{show ? '隐藏' : '显示'}
      </Button>

      <Tips
        className="default"
        show={show}
        showClose
        onClosePress={() => {
          setShow(false)
        }}
        content="箭头有8个方向。字数字数字数"
      />
      <h3>带按钮、关闭</h3>
      <Tips
        className="default"
        opText="操作按钮"
        showClose
        show
        content="箭头有8个方向。字数字数字数两行"
      />
      <Tips
        className="default defaul-icon"
        opText="操作按钮"
        showClose
        show
        icon={
          <img src="https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*x1LaT6Pn5MwAAAAAAAAAAABkARQnAQ" />
        }
        content="箭头有8个方向。字数字数字数两行"
      />
      <h3>左侧带图标</h3>
      <Tips
        className="default-icon"
        onButtonPress={() => {
          console.log('click')
        }}
        onClosePress={() => {
          console.log('close')
        }}
        icon={AlipayCircleFill}
        opText="click me"
        showClose
        show
        content="箭头有8个方向。字数字数字数"
      />

      <h3>箭头</h3>
    </div>
  )
}
