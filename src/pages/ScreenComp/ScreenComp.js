import React from 'react'
import useScreen from '../../components/customHooks/ScreenWidthCal/useScreen'

const ScreenComp = () => {

  const screenSize = useScreen()


  return (
    <div>

<h1>We are in the Screen component</h1>
<h1>{screenSize} width calculated based on the devices.</h1>

    </div>
  )
}

export default ScreenComp