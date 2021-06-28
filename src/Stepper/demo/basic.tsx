import * as React from 'react'
import Stepper from '../index'

export default () => {
  return (
    <>
     <Stepper max={10} min={1} />
     <Stepper />
    </>
  )
}
