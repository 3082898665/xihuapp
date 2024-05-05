import React, { useState } from 'react'
import style from './news.module.scss'
import Ab from '../../../assets/actpic/ljie.png'
import Word from '../../../assets/actpic/wordbox.png'
import Cathead from '../../../assets/actpic/cathead.gif'
import { LinkOutlined } from '@ant-design/icons';
export default function Counternew({ content }) {
    const [showall, setall] = useState(false)
    function showalls() {
        if (showall) {
            setall(false)
        } else[
            setall(true)
        ]

    }
    return (
        <div className={style.all}>
            <div className={style.pic}>
                <img src={Word} className={style.wordbox} />
                <div className={style.catword}>
                    我是{content.name}，参加了这个活动
                </div>
                <img src={Cathead} className={style.cathead} />

                {/* <img className={style.picimg} src={Jtou}></img> */}
            </div>
            <div className={style.content}>
                <div className={style.text} onClick={showalls} style={{ 'WebkitLineClamp': showall ? '100' : '2' }}>
                    {content.content}
                    <LinkOutlined title='跳转' />
                </div>
            </div>
        </div>
    )
}
