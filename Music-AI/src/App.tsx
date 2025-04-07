import './App.css';

function App() {
 

  return (
    <>
      <div className="bg-purple-950 p-2 min-h-screen flex justify-center items-center">
        <div className="max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-md shadow-md">
          <h1 className=" text-center text-white text-2xl">Todos for the day</h1>
          <div className=" flex gap-2 justify-center my-8">
            <input 
              type="text" 
              placeholder='Add Todo' 
              className='flex-[3] border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md'
            />
            <button className='flex-[1] bg-purple-800 cursor-pointer rounded-2xl text-sm'>Add Todo</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
