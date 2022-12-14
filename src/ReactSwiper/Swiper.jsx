import React from 'react';
import {houses, clientTestimony, agents} from '../Data/Data'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Swiper = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery text__white ">
      <div className="flex__center">
        
       <div>
         <h1 className="headtext__cormorant">Expert Agents</h1>
        <p className="">Meeet Expert Agents around the world.</p>
       </div>
        
      </div>
      <div className="app__gallery-images flex__center">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {agents.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image.profilePic} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      <div className=" flex__center">
        <button type="button" className="custom__button ">View More</button>
      </div>
    </div>
  )
}

export default Swiper