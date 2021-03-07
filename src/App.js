import { useEffect, useState } from 'react'
// import DogImage from './Dogs'
// import Todos from './Todos'
import TimeRegistration from './TimeRegistration'
import './App.css'

function App() {
    // const [time, setTime] = useState(0)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTime((prevTime) => prevTime + 1)
    //     }, 1000)

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // })

    return (
        <div className="App">
            {/* <h2>You have used {time} seconds on this website</h2>
            <Todos /> */}
            {/* <DogImage /> */}

            <TimeRegistration />
        </div>
    )
}

export default App
