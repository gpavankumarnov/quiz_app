import React, {useEffect, useState} from 'react'

const useScreen = () => {

    const [screenSize, setScreenSize] = useState();


    useEffect(() => {
        console.log("calling custom hook")
checkScreenSize();
window.addEventListener("resize", checkScreenSize)

return () => {
    console.log("removing event")
    window.removeEventListener("resize", checkScreenSize)
}
    },[])

    const checkScreenSize = () => {
        if(window.innerWidth > 992) {
            setScreenSize("large")
        }
        if(window.innerWidth < 992 && window.innerWidth > 600 ) {
            setScreenSize("medium")
        }
        if(window.innerWidth < 600) {
            setScreenSize("small")
        }
    }

    return screenSize
}

export default useScreen