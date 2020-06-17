import React ,{useState} from 'react'

const HookCounter = () => {

    const [name, setname] = useState({first:"",last:""})

    return (
        <form>
           <input type="text" onChange={e => setname({...name, first:e.target.value}) } value={ name.first }/>
           <input type="text" onChange={e => setname({...name,last:e.target.value}) } value={ name.last }/>
           <h1> Your first name is - {name.first} </h1>
           <h1> Your first name is - {name.last} </h1>
           {JSON.stringify(name)}
        </form>
    )
}

export default HookCounter
