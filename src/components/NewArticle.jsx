import React from 'react'
import AddNewArticle from './AddNewArticle'


const NewArticle = ({articles, deleteArticle }) => {
  return (<>
    <ul>
   <div className=' shadow-2xl w-96  px-8 py-4 mt-9  '>
    {articles.map((article) =>{
        return  (<li key={article.id}>
            <div className='flex flex-col '>
           <h1 className='text-3xl font-semibold text-cyan-400 '> <span className='text-3xl font-bold text-blue-700'>Title:</span>{article.title}</h1>
           <div className=''>
           <h1 className='text-3xl font-semibold text-black'><span className='text-3xl font-bold text-blue-700'>Author:</span>{article.author}</h1>
           </div>

           <h3 className='text-red-800' ><span className='text-2xl text-black font-light'>Date:</span>{article.date}</h3>
           </div>
           <button onClick={() =>deleteArticle(article.id)}>delete</button>
           <br />
           <br />
           <hr />
           </li>
           )
        
    })}
   </div>
   </ul>
   <AddNewArticle/>
   </>
  )
}

export default NewArticle

