import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");
  return (
    <div className='w-full h-screen duration-200'

      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap  justify-center inset-x-0 bottom-12'>
        <div className='flex felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded '>

          <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-full bg-green-600">Green</button>

          <button onClick={()=>setColor("Black")} className="outline-none px-4 rounded-full bg-black text-white ">Black</button >
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full bg-red-600">Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full bg-blue-600">Blue</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full bg-yellow-600">Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 rounded-full bg-purple-600">Purple</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 rounded-full bg-orange-600">Orange</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 rounded-full bg-pink-600">Pink</button>


        </div>
      </div>
    </div>
  )
}

export default App
