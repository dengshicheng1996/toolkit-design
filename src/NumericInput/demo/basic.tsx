import * as React from 'react'
import NumericInput from '../index'

const App = () => {
  // const inputRef = React.useRef<any>(null)
  const inputRef = React.createRef<any>()

  const onEvent = (type: string) => (v: string) => console.log(type, v)

  return (
    <>
      <NumericInput
              ref={inputRef}
              // ref={el => (inputRef.current = el)}
              customKey="X"
              confirm
              autoFocus
              onChange={onEvent('change')}
              onFocus={onEvent('focus')}
              onBlur={onEvent('blur')}
              placeholder="请输入身份证号码"
              onConfirm={onEvent('confirm')}
              clear
            />
    </>
  )
}

export default App
