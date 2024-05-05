import React from 'react'
import style from './index.module.scss'
import Pic from '../test.webp'
import { Space, Table, Tag, Badge } from 'antd';
export default function index() {
    return (
        <div className={style.newbox}>

            <div className={style.text}>
                <div className={style.title}>
                    西湖论剑十一年十一个数字观看
                </div>
                <div className={style.info}>时间:2024/4/4  &nbsp;&nbsp;人数:33</div>
                <div className={style.info}>
                    状态：<Badge status={'processing'} /> &nbsp;&nbsp;即将开始
                </div>
            </div>

        </div>
    )
}
