import React from 'react'
import { useState } from 'react'
import './Editor.css'
import Button from './Button'
import EmotionItme from './EmotionItme'
import { useNavigate } from 'react-router-dom'

const emotionList = [
    {emotionId:1,emotionName:'완전 좋음'},
    {emotionId:2,emotionName:'좋음'},
    {emotionId:3,emotionName:'보통'},
    {emotionId:4,emotionName:'나쁨'},
    {emotionId:5,emotionName:'완전 나쁨'},
]


const Editor = ({onSumit}) => {
    const nav = useNavigate()
    
    const [input,setInput] = useState({
        createdDate : new Date(),
        emotionId:3,
        content:''
    })

    const onChangeInput = (e) =>{
        let name = e.target.name
        let value = e.target.value

        if(name === 'createDate'){
            value = new Date(value)
        }

        setInput({
            ...input,
            [name]:value
        })
    }

    const onSumitButtonClick =()=>{
        onSumit(input)
    }

    return (
    <div className='Editor'>
        <section className='date-section'>
            <h4>오늘의 날자</h4>
            <input type="date" name='createdDate'
            onChange={onChangeInput}/>
        </section>
            <h4>오늘의 감정</h4>
        <section className='emotion-section'>

            {emotionList.map((item)=>(
                <EmotionItme key={item.emotionId}
                {...item}
                onClick ={()=>{
                    onChangeInput({
                        target:{
                            name:'emotionId',
                            value:item.emotionId
                        }
                    })
                }}
                isSelected = {item.emotionId == input.emotionId}/>
            ))}
        </section>
        <section className='content-section'>
            <h4>오늘의 일기</h4>
            <textarea placeholder='오늘은 어떻나요?'
            name='content'
            onChange={onChangeInput}
            value={input.content}></textarea>
        </section>
        <section className="button-section">
            <Button text = {'취소하기'}
            onClick={()=>nav(-1)}/>
            <Button text = {'작성하기'} type = {'POITIVE'}
            onClick={onSumitButtonClick}/>
        </section>
    </div>
  )
}

export default Editor