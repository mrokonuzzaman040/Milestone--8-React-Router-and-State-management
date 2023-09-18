import './App.css'
// import NavBar from './Components/NavBar/NavBar'
import TestNav from './Components/TestNav/TestNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'

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
    </>
  )
}

export default App