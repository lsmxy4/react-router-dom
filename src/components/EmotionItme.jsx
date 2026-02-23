import React from 'react'
import './EmotionItme.css'
import {getEmotionImage} from '../util/getEmotionImage'

const EmotionItme = ({emotionId,emotionName,isSelected,onClick}) => {
  return (
    <div 
    onClick={onClick}
    className={`EmotionItem ${isSelected? `item_on_${emotionId}` : ''}`}>
        <img src={getEmotionImage(emotionId)} alt={emotionName}/>
        <div>
            {emotionName}
        </div>
    </div>
  )
}

export default EmotionItme