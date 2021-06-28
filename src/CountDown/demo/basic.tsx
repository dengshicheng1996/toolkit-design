import * as React from 'react'
import CountDown from '../index'

export default () => {
  const [down, setDown] = React.useState(false)
  return (
    <>
      间隔 1s
      {!down && (
        <CountDown
          t={5 * 1001}
          render={({ t }) => {
            return (
              <div >
                {Math.floor(t / 1000)} S
              </div>
            )
          }}
          onComplete={() => {
            setDown(true)
          }}
        />
      )}
      {down && (
        <div
          onClick={() => {
            setDown(false)
          }}
        >
          刷新
        </div>
      )}
      <br />
      间隔 2s
      <CountDown
        t={5 * 1001}
        renderDuration={2000}
        render={({ t }) => {
          return (
            <div>
              {Math.floor(t / 1000)} S
            </div>
          )
        }}
      />
    </>
  )
}
