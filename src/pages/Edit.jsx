import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const params = useParams()
        console.log(params)
  return (
    
    <div>{params.id}번째 Edit 페이지</div>
  )
}

export default Edit