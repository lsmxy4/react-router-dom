import React from 'react'
import './Viewer.css'
import { emotionList } from '../util/constants'
import { getEmotionImage } from '../util/getEmotionImage'

const Viewer = ({emotionId,content}) => {

    const emotionItme = emotionList.find(
        (item) => String(item.emotionId) == String(emotionId) 
    )

  return (
    <div className='Viewer'>
        <section className="viewer-img-section">
            <h4>오늘의 감정</h4>
            <div className={`emotion-img-wrapper img-${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt="icon" />
            </div>
            <div>
                {emotionItme.emotionName}
            </div>
        </section>
        <section className="content-section">
            <h4>오늘릐 일기</h4>
            <div className="content-wrapper">
                {content}
            </div>
        </section>
    </div>
  )
}

export default Viewer