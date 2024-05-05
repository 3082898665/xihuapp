import React from 'react'
import style from './index.module.css'
import P1 from './p1.jpg'
import P2 from './p2.jpg'
import P3 from './p3.jpg'
export default function index() {
    return (
        <div className='all'>
            <div className={style.font}>
                西湖论剑十一年，十一个数字观看
            </div>
            <div className={style.imgp}>
                <img src={P1} alt="" className={style.picimg} />
            </div>
            <div className={style.imgp}>
                <img src={P2} alt="" className={style.picimg} />
            </div>
            <div className={style.imgp}>
                <img src={P3} alt="" className={style.picimg} />
            </div>
        </div>
    )
}
