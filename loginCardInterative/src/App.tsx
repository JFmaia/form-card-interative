import { useState } from 'react'
import  './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-row justify-around w-[100%] h-[100%] items-center">  
        <span></span>
        <div className="flex flex-col w-[440px] gap-2">
          <div>
            <span className="font-medium">CARDHOLDER NAME</span>
            <input className="w-[100%] placeholder:text-slate-300 p-2 bg-white border border-slate-200 rounded-md mt-1" type="text" placeholder="e.g. Jane Appleseed"/>
          </div>
          <div>
            <span className="font-medium">CARD NAME</span>
            <input className="w-[100%] placeholder:text-slate-300 p-2 bg-white border border-slate-200 rounded-md mt-1" type="text" placeholder=" e.g. 1234 5678 9123 0000"/>
          </div>
          <div>
            <span className="font-medium">CARDHOLDER NAME</span>
            <input className="w-[100%] placeholder:text-slate-300 p-3 bg-white border border-slate-200 rounded-md mt-1" type="text" placeholder="e.g. Jane Appleseed"/>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default App
