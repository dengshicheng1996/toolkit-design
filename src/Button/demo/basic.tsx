import * as React from 'react'
import Button from '../index'

export default () => {

  return (
    <>
      <div
        style={{ padding: '0 0.24rem' }}
        onClick={() => {
          console.log('should log when button press call')
        }}
      >
        <Button data-y="111">
          default
        </Button>
        <br />
        <Button type="primary">
          primary
        </Button>
        <br />
        <Button type="ghost">
          ghost
        </Button>
        <br />
        <Button type="warn">
          warn
        </Button>
        <br />
        <Button type="warn-ghost">
          warn-ghost
        </Button>
        <br />
        <Button type="light" loadingText="发送中">
          light
        </Button>
      </div>
    </>
  )
}
