import './App.css'
// import NavBar from './Components/NavBar/NavBar'
import TestNav from './Components/TestNav/TestNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {
  return (
    <>
      {/* <h1 className='text-7xl'>Vite + React</h1> */}
      {/* <NavBar></NavBar> */}
      <TestNav></TestNav>
      <PriceOptions></PriceOptions>
      <br />
      <h2>Line LineChart</h2>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App