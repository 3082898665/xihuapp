import React, { useState } from 'react'
import style from './hot.module.scss'
import City from '../../../assets/city.png'
export default function Counternew({ pic, name, content, size }) {

    return (
        <div className={style.all}>
            <div className={style.pic}>
                <img className={style.img} src={City}></img>
            </div>
            <div className={style.content}>
                <div className={style.title}>西湖论剑安全特训营</div>
                <div className={style.con}>学习网络安全的绝佳地点</div>
                <div className={style.detail}>已有200人参加</div>
            </div>

        </div>
    )
}
