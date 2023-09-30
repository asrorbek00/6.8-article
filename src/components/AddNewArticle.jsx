import React from 'react'

const AddNewArticle = ({setShowForm}) => {
  return (
    <button onClick={() => setShowForm(true)} className='bg-green-500 rounded-md w-32 h-12 absolute left-[80%] top-6 sm:left-64'>AddNewArticle</button>
  )
}

export default AddNewArticle