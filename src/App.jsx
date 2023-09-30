import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import NewArticle from './components/NewArticle'
import AddNewArticle from './components/AddNewArticle'

function getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem("articles"))  || []
}
const App = () => {
  const[articles , setArticles] = useState(getDataFromLocalStorage())
  const [showForm , setShowForm] = useState(true)
  

  const addArticle = (article) =>{
       setArticles((prev) =>{
        return[...prev , article]
       })
       
      }
      useEffect(() =>{
        localStorage.setItem('articles' , JSON.stringify(articles))
      },[articles])

      const deleteArticle = (id)=>{
        setArticles((prev) =>{
          return prev.filter((article) => {
            return article.id !== id
          })
        })
      }
      

  return (
    <div>
      {showForm && <Form addArticle={addArticle} setShowForm={setShowForm}/>}
      {!showForm && <div> <NewArticle articles={articles} deleteArticle={deleteArticle}/> <AddNewArticle setShowForm={setShowForm}/></div>}
      {!showForm && articles.length === 0 && <div><h1 className=' text-8xl font-extrabold fo text-center sm:text-3xl'>No Articles :)</h1><AddNewArticle setShowForm={setShowForm}/></div> }

    </div>
  )
}

export default App