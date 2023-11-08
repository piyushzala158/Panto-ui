import React from 'react'
import next from "../../assets/images/Next.svg"

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={next} className={className} onClick={onClick} style={{...style}} alt='next'/>
  )
}

export default NextArrow