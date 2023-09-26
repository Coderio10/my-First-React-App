import React from 'react'
import "./css/index.css"


export default function bookComponent(props) {
    
    const tags = props.tags.map(item => {
        return (
            <p className='tag-el'>{item}</p>
        )
    })

    return (
        <div className='bookEle' key={props.key}>
            <img src={props.imgUrl} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>Author: {props.Author}</h3>
            <a href={props.imgUrl} target="_blank" >display?</a>
            <span className='tag-sec' >
                {tags}
            </span>
        </div>
    )
}