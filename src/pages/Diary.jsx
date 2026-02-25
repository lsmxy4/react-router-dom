  import React from 'react'
  import { useParams,useNavigate } from 'react-router-dom'
  import Header from '../components/Header'
  import Button from '../components/Button'
  import Viewer from '../components/Viewer'
  import { getStringedDate } from '../util/getStringedDate' 
  import useTitle from '../hooks/useTitle'

  const Diary = () => {
      const {id} = useParams()
      const nav =useNavigate()

       const curDiaryItem = useDiary()

       useTitle('감정일기장 Diary')

  if (!curDiaryItem) {
    return <div>로딩중...</div>
  }

  const { createdDate, emotionId, content } = curDiaryItem
  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header
        leftChild={<Button text="뒤로가기" onClick={() => nav(-1)} />}
        title={`${title}의 기록`}
        rightChild={
          <Button
            text="수정하기"
            onClick={() => nav(`/edit/${id}`)}
            type="POSITIVE"
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

  export default Diary