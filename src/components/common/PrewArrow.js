import React from 'react'
import prev from "../../assets/images/Prev.svg"
const PrewArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={prev} className={className} onClick={onClick} style={{...style}} alt='prev'/>
    );
}

export default PrewArrow