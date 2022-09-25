import { useState } from 'react'
import  './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1344px] h-[100%] flex flex-row justify-between items-center self-center mx-40">  
      <span></span>
      <div className="flex flex-col w-[440px] gap-2">
        <div>
          <span className="font-medium text-[#21092F]">CARDHOLDER NAME</span>
          <input className="w-[100%] placeholder:italic placeholder:#8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF  rounded-lg mt-1" type="text" placeholder="e.g. Jane Appleseed"/>
        </div>
        <div>
          <span className="font-medium text-[#21092F]">CARD NUMBER</span>
          <input className="w-[100%] placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg mt-1" type="text" placeholder=" e.g. 1234 5678 9123 0000"/>
        </div>
        <div>
          <span className="font-medium text-[#21092F]">CARDHOLDER NAME</span>
          <input className="w-[100%] placeholder:italic placeholder:##8E8593 p-3 bg-white text-[#21092F] border border-#DEDDDF rounded-lg mt-1" type="text" placeholder="e.g. Jane Appleseed"/>
        </div>
        <button className="w-[100%] rounded-lg bg-[#21092F] text-[#DEDDDF] p-4 mt-10 ">Confirm</button>
      </div>
    </div>
  )
}

export default App
