import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'

const Edit = () => {
    const params = useParams()
  return (
    <div>
      <Header
      leftChild={<Button text={'뒤로가기'}/>}
      title={'일기 수정'}
      rightChild={<Button text={'삭제'} type={'NEGATIVE'}/>}/>
      <Editor/>
    </div>
  )
}

export default Edit