
import { React, useState } from "react"
import {v4 as uuidv4}  from "uuid"


const Form = ({addArticle,setShowForm}) => {

    const [title , setTitle] = useState('')
    const [author , setAuthor] = useState('')
    const [date , setDate] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        addArticle({
            id:uuidv4(),
            title,
            author,
            date
        });

        setTitle(''),
        setAuthor(''),
        setDate(''),
        setShowForm(false)

    }

  return (
    <ul>
        <div className=" sm:left-5 sm:w-64 w-96 shadow-2xl rounded-xl absolute top-56 left-[36%] h-64">
        <form className="flex flex-col text-center gap-5" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className="text-3xl">Title:</label>
                <div><input required className="sm:w-40"  onChange={(e) => setTitle(e.target.value)} value={title}   type="text" id="title" placeholder="title"/></div>
            </div>
            <div>
                <label htmlFor="author" className="text-3xl">Author</label>
                <div>
                <input value={author} className="sm:w-40" required  onChange={(e) => setAuthor(e.target.value)} type="text" id="author" placeholder="author" />
                </div>
            </div>
            <div className=" flex flex-row gap-5 px-2 mt-4">
                <label htmlFor="date" className="text-2xl">Date:</label>
                <input value={date} required  onChange={(e) => setDate(e.target.value)} type="date" id="date" placeholder="date" className="w-36 sm:w-20"/>
                
                <button type="submit" className="w-24 rounded-md bg-lime-400 text-indigo-800">Submit</button>
            </div>
            
        </form>
        </div>
    </ul>
  )
}

export default Form