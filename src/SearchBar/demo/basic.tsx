import * as React from 'react'
import SearchBar from '../index'

export default () => {
  const inputRef = React.createRef<any>()

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <SearchBar
        autoFocus
        ref={inputRef}
        placeholder="Search"
        maxLength={8}
        onSubmit={v => {
         
        }}
      />

      {/* <Button type="primary" onPress={focus}>
        点击聚焦
      </Button> */}

      <SearchBar
        placeholder="Show Cancel Button"
        showCancelButton
        borderColor="green"
        maxLength={24}
      />
    </div>
  )
}
