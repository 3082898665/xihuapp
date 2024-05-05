import React from 'react'
import style from './index.module.css'
import Look from '../../assets/looks.png'
export default function WATCH() {
    return (
        <div className={style.all}>
            <img src={Look} className={style.pic} alt="" />
        </div>
    )
}
