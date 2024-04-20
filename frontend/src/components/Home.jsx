import React,{useEffect, useState} from 'react'
import "./style.css"

const Home = () => {
  const [code,setCode] = useState("")
  const [stdIn,setStdIn] = useState(0)

  const options = [
      {value: '', text: 'Language'},
      {value: 'python3', text: 'python3'},
    ];
  
  const [selected, setSelected] = useState(options[0].value);

  const [server_response, setServerResponse] = useState()

  const handleChange = event => {
      setSelected(event.target.value);
  };
  

  useEffect(()=>{
    const textarea = document.querySelector('textarea')
    const lineNumbers = document.querySelector('.line-numbers')

    textarea.addEventListener('keyup', event => {
        const numberOfLines = event.target.value.split('\n').length

        lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('')
    })

    textarea.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end)
        event.preventDefault()
        }
    })
},[])

const handleSubmit = async(e) => {
    e.preventDefault()

    const data = {
      code: code,
      input: stdIn,
      langage: selected
    }

    const apiEndpoint = "http://localhost:5000/api/data" //later create it in the backend

    await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setServerResponse(data)
    })
    .catch((error) => {
      console.log("Error sending data through API", error)
    })

}

  

  return (
    <div className="bg-[#2c2929] w-full min-h-screen p-10 flex flex-col justify-center items-center">
      
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mb-5">
       PYTHON IDE
      </h1>
      <div className="w-full flex flex-col items-center justify-center sm:flex-row md:w-[90%]">
        <div className="w-full bg-[#1e1e1e] h-full text-white rounded-md shadow-sm shadow-slate-600 p-4 sm:w-[60%] ">
            <form  className="relative w-full " onSubmit={handleSubmit}>
                    <select value={selected} onChange={handleChange} className="bg-slate-700">
                        {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                        ))}
                    </select><br />
                    <div className="editor">
                        <div className="line-numbers">
                            <span></span>
                        </div>
                        <textarea name="code" onChange={(e) => setCode(e.target.value)}></textarea>
                    </div>
                    <br />
                    <label>Your input </label>
                    <div className="w-full flex justify-between">
                      <input type="number" name="input" className="text-slate-900" onChange={(e) => setStdIn(e.target.value)}/>
                      <button type="submit" className={`
                          px-4 py-2 rounded-full 
                          flex items-center gap-2 
                          text-white
                          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                          
                          transition-all
                  
                          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                          hover:text-white
                      
                      `}>Submit</button>
                    </div>
                    
                    
                    
            </form>
        </div>

      <div className="w-full bg-[#1e1e1e]  text-white rounded-md p-5 shadow-sm shadow-black min-h-[72vh] sm:w-[40%]">
        {/* Display the API response data */}
        <span className="">Response</span>
        <div className="min-w-20 bg-[#177f426f] min-h-20 p-2 mt-5">
          {server_response && (
            <div className=''>
              <h2> Server Response</h2>
              <pre>{JSON.stringify(server_response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home