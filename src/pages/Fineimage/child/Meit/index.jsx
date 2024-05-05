import React, { useState } from 'react'
import style from './index.module.scss'
import M1 from '../../assets/main1.jpg'
import M2 from '../../assets/main2.jpg'
import M3 from '../../assets/main3.jpg'
import R1 from '../../assets/r1.png'
import R2 from '../../assets/r2.jpg'
import R3 from '../../assets/r3.png'
import T1 from '../../assets/1.jpg'
import T2 from '../../assets/2.jpg'
import T3 from '../../assets/3.jpg'
import T4 from '../../assets/4.jpg'
import T5 from '../../assets/5.jpg'
import T6 from '../../assets/6.jpg'
import T7 from '../../assets/7.jpg'
import T8 from '../../assets/8.jpg'
import T9 from '../../assets/9.jpg'
import T10 from '../../assets/10.jpg'
import Masonry from 'react-masonry-css'
import Video from '../../assets/video.png'
const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};
export default function index() {
    const images = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, M1, M2, M3, R1, R2, R3]
    const [ispic, setpic] = useState(true)
    function change() {
        setpic(!ispic)
    }
    return (
        <div className={style.all}>
            <div className={style.title}>
                <div className={style.blo} onClick={change} style={{ backgroundColor: ispic ? 'black' : '', color: ispic ? 'white' : '' }}>图片</div>
                <div className={style.blo} onClick={change} style={{ backgroundColor: !ispic ? 'black' : '', color: !ispic ? 'white' : '' }}>视频</div>
            </div>
            <div style={{ display: ispic ? '' : 'none' }}>
                <div className={style.pictitle}>
                    大会精彩图片欣赏
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={style.mymasonrygrid}
                    columnClassName={style.mymasonrygridcolumn}>
                    {images.map((image, index) => (
                        <div key={index} className={style.picbox}>
                            <img src={image} className={style.conpic} title='下载' />

                        </div>
                    ))}
                </Masonry>
            </div>
            <div style={{ display: !ispic ? '' : 'none' }}>
                <div className={style.pictitle}>
                    大会精彩视频欣赏
                </div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={style.mymasonrygrid}
                    columnClassName={style.mymasonrygridcolumn}>
                    {images.map((image, index) => (
                        <div key={index} className={style.picbox}>
                            <img src={image} className={style.conpic} title='下载' />
                            <div className={style.info}>
                                <img src={Video} className={style.icf} />
                                <div className={style.down}>下载</div>
                                <div className={style.look}>查看</div>
                                <div style={{ width: '38%' }}></div>
                                <div style={{ color: 'rgb(193,193,193', fontSize: '14px' }}>2024/4/2</div>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    )
}
