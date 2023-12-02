import React, { useState } from 'react'
import Image from '../utilities/Image'
import BannerImg from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    let [dotActive, setdotActive] = useState(0)


    const settings = {
        dots: true,
        beforeChange: (prev, next)=>{
            setdotActive(next)
        },
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "15px",
                display: "inline-block",
                width: "0"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive 
                ?
                {
                    width: "30px",
                    borderRight: "3px solid black",
                    color: "#262626",
                    
                }
                :{
                    color: "transparent",
                    width: "30px",
                    borderRight: "3px solid #fff",
                    
                }
              }
            >
              0{ i + 1}
            </div>
          )
      };

  return (
    <section>
        <Slider {...settings}>
            
                <Link className='' to="#">
                    <div className='h-[600px] w-full bg-red-500'>
                        <Image className="w-full h-full object-cover leading-[0]" source={BannerImg} alt="img"/>
                    </div> 
                </Link>
                <Link className='' to="#">
                    <div className='h-[600px] w-full bg-black'>
                        <Image className="w-full h-full object-cover leading-[0]" source={BannerImg} alt="img"/>
                    </div>   
                </Link>
                <Link className='' to="#">
                    <div  className='h-[600px] w-full bg-[blue]'    >
                        <Image className="w-full h-full object-cover leading-[0]" source={BannerImg} alt="img"/>
                    </div>  
                </Link>
            
        </Slider>
    </section>
  )
}

export default Banner