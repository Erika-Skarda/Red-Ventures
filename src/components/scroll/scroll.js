
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './index.scss';

export default function ScrollArrow() {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div style={{alignContent: 'center', margin: '0 10rem'}}>
        <button 
          className="scrollTop" 
          onClick={scrollTop} 
          style={{height: 40, display: showScroll ? 'flex' : 'none'}}
        >
        <img 
          src={require("../../assets/images/icons/arrow-up.svg")}
          alt="Arrow up Icon"
          style={{padding: '2px'}}
        />
        back to the top
        </button>
    </div>
  );
}

