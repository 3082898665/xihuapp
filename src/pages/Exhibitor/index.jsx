import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import T1 from './assets/t1.jpg'
import T2 from './assets/t2.png'
import T3 from './assets/t3.jpg'
import T4 from './assets/t4.png'
import T5 from './assets/t5.webp'
import T6 from './assets/t6.webp'
import T7 from './assets/t7.jpg'
import Logo from './assets/logo.png'
import V1 from './assets/video/DevSecOps.mp4'
import V2 from './assets/video/Lingyuan.mp4'
import V3 from './assets/video/mm.mp4'
import V4 from './assets/video/wuzhou.mp4'
import { useNavigate } from 'react-router-dom'
export default function index() {
    const navigate = useNavigate()
    const imglists = [T1, T2, T3, T4, T5, T6, T7]
    const [ismouse, setismouse] = useState(0)
    const slider = useRef(null)
    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "260px",
        slidesToShow: 1,
        speed: 1000,
        slickGoTo: 3
    };
    const [selectpic, setselpic] = useState(0)
    const piclists = [
        {
            pic: T1,
            vid: V1,
            name: 'DevSecOps'
        }, {
            pic: T2,
            vid: V2,
            name: 'Ling Yun'
        }, {
            pic: T3,
            vid: V3,
            name: 'Suma'
        }, {
            pic: T4,
            vid: V4,
            name: 'Primas'
        }, {
            pic: T1,
            vid: V1,
            name: 'DevSecOps'
        }, {
            pic: T2,
            vid: V2,
            name: 'Ling Yun'
        }, {
            pic: T4,
            vid: V4,
            name: 'Primas'
        }
    ]
    function anim() {
        if (ismouse == 0) {
            slider.current.slickGoTo(6)
            setismouse(1)
        }

    }
    function jump() {
        navigate('/exdetail')
    }
    return (
        <div className={style.all}

        >
            <div className={style.back} style={{ backgroundImage: `url(${imglists[selectpic]} )` }} >

            </div>
            <div className={style.title}>
                <div className={style.main}>
                    <img src={Logo} alt="" className={style.logo} />
                </div>
                <div style={{ width: '50%' }}></div>
                {/* <div className={style.tdetail}>展商风采</div>
                <div className={style.tdetail}>展商新闻</div>
                <div className={style.tdetail}>展商信息</div>
                <div className={style.tdetail} onClick={anim}>展商产品</div> */}
            </div>

            <div onMouseEnter={anim} className="slider-container" style={{ marginTop: '30px', height: '80vh', overflow: 'hidden' }}>
                {/* <CursorifyProvider
                    cursor={<Cursort />}
                    opacity={.8}
                    delay={2}
                    defaultCursorVisible={false}
                    breakpoint={1297}
                > */}
                <Slider {...settings}
                    afterChange={(curr) => { setselpic(curr) }}
                    ref={slider}
                >
                    {
                        piclists.map((item, index) => {
                            return (
                                <div key={item.pic} >


                                    <img src={item.pic} alt="" className={style.pic} style={{ opacity: selectpic == index ? '1' : '.4', display: selectpic == index ? 'none' : '' }} />
                                    {
                                        selectpic == index && (
                                            <video onClick={jump} src={item.vid} className={style.video} style={{ display: selectpic == index ? '' : 'none' }} autoPlay loop>
                                                <source src={item.vid} type="video/mp4" />
                                                <a href="./testlogo/flower.mp4">MP4</a>
                                                video.
                                            </video>
                                        )
                                    }

                                    <div className={style.picfont}>
                                        <div className={style.fontt}>{item.name}</div>
                                        <div className={style.fontb}>没你想不到，只有我们做不到</div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Slider>
                {/* </CursorifyProvider> */}
            </div>

        </div>
    )
}
