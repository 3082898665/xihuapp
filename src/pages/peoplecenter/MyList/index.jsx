import React from 'react'
import style from './index.module.scss'
import Pic from '../test.webp'
import { Badge } from 'antd';
import PICC from '../../../assets/xly.jpeg'
export default function index() {
    return (
        <div className={style.newbox}>
            <div className={style.pic}>
                <img src={PICC} />
            </div>
            <div className={style.text}>
                <div className={style.title}>
                    西湖论剑安全训练营数字要素
                </div>
                <div className={style.info}>2024/4/4订阅</div>
                <div className={style.info}>
                    状态：<Badge status={'processing'} /> &nbsp;&nbsp;进行中
                </div>
            </div>

        </div>
    )
}
