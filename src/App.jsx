import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [data, setData] = useState();

  const apikey = 'wXIKlBUK7QMj6T%2Fp09v1C5veyWw1X9K4iI%2BDSdGPPI9sD7P0V0%2Boqc0lEop6CwQ5ysW3YUamFnZXOGoZFKwbRQ%3D%3D';
  const url = `http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${apikey}&returnType=json&numOfRows=10&pageNo=1&year=2023`

  const fetchData = () =>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data);
    })
  }
//시작할 때만 실행됨
  useEffect(() =>{
    fetchData();
  }, [])
  return (
      <BrowserRouter>
      <Navbar/>
      {/* <button onClick={fetchData}>call</button> */}
        <Routes>
          <Route path='/' element={<Home data={data}/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
