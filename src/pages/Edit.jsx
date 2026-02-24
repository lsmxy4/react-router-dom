import React ,{useContext,useEffect,useState}from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { DiaryDispatchContext,DiaryStateContext } from '../App'

const Edit = () => {
    const {id} = useParams()
    const nav =useNavigate()
    const {onDelete,onUpDate} = useContext(DiaryDispatchContext)
    const data = useContext(DiaryStateContext)
    const [curDiaryItem,setCurDiaryItem] = useState(null)

    useEffect(() => {
      const currentItem = data.find(
        (item) => String(item.id) === String(id)
      )
      setCurDiaryItem(currentItem)
    },[id,nav,data])

    const onClickDelete =()=>{
      if(window.confirm('일기를 정말로 삭제할까요?')){
        onDelete(id)
        nav('/',{replace:true})
      }
    }

    const onSubmit =(input)=>{
      if(window.confirm('일기를 정말 수정할껀가요?')){
        onUpDate  (
          id,
          input.createdDate,
          input.emotionId,
          input.content
        )
        nav('/',{replace:true})
      }
    }

  return (
    <div>
      <Header
      leftChild={<Button
        text={'뒤로가기'}
        onClick={()=>nav(-1)}
        />}
      title={'일기 수정'}
      rightChild={<Button 
      text={'삭제'} 
      onClick={onClickDelete}
      type={'NEGATIVE'}/>}/>
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  )
}

export default Edit