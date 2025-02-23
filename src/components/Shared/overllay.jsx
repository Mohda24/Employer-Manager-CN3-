import React from 'react'

function Overlay() {
    return (
        <div className={`w-full h-full absolute  z-20 top-0 right-0 backdrop-blur-lg bg-[rgba(0,0,0,0.7)] opacity-90`}/>
    )
}

export default Overlay