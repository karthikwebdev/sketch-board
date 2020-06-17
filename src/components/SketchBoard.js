import React, { useState } from 'react'
import {SketchField, Tools} from 'react-sketch';

function SketchBoard() {

    const [tool, settool] = useState(Tools.pencil)
    const [eraser, seteraser] = useState(false)
    const [lineWidth, setlineWidth] = useState(3)


    const handleClick = (e) => {
        console.log(e.target.value)
        settool(e.target.value)
        seteraser(false)
    } 

    const activateEraser = (e) => {
        settool(e.target.value)
        seteraser(true)
    }

    const handleChange = (e) => {
        setlineWidth(e.target.value)
    }

    return (
        <>
        <button value={Tools.Rectangle} onClick={handleClick} > Rectangle </button>
        <button value={Tools.Circle} onClick={handleClick} > Circle </button>
        <button value={Tools.Line} onClick={handleClick} style={{marginRight:"50px"}} > line </button>
        <button value={Tools.pencil} onClick={activateEraser}>Eraser</button>

        <button value={Tools.Pan} onClick={handleClick} > Move Board </button>
        <button value={Tools.Select} onClick={handleClick} > select </button>
        <div style={{marginTop:"10px"}}>
            <label>Change pen size</label>
            <input value={lineWidth} type='range' min='1' max='7' onChange={handleChange} />
        </div>

        <SketchField width='100vw' 
                         height='60vh' 
                         tool={tool} 
                         lineColor={eraser? 'white' : 'black'}
                         style={{border:"2px solid black",marginTop:"30px"}}
                         lineWidth={lineWidth}
                         />
        </>


    )
}

export default SketchBoard
