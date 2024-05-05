import React from 'react'
import style from './index.module.css'
import Loong from '../Pet/4.png'
import RedLonng from '../Pet/5.jpg'
import Green from '../Pet/green.jpg'
export default function index() {
    const piclist = [{
        name: '龙龙',
        pic: Loong,
        nli: '喂养时会奖励7折卷',
        jif: '200'
    }, {
        name: '阮阮',
        pic: RedLonng,
        nli: '喂养时会奖励5卷',
        jif: '400'
    }, {
        name: '缕缕',
        pic: Green,
        nli: '喂养时会奖励9卷',
        jif: '100'
    }]
    return (
        <div className={style.all}>
            {
                piclist.map((item, index) => {
                    return (
                        <div class={style.card}>
                            <div class={style.carddetails}>
                                <p class={style.texttitle}>
                                    <img src={item.pic} alt="" className={style.picimg} />
                                </p>
                                <div className={style.fontw}>姓名:{item.name}</div>
                                <p class={style.textbody}>能力：{item.nli}</p>
                            </div>
                            <button class={style.cardbutton}>{item.jif}积分购买</button>
                        </div>
                    )
                })
            }

        </div>
    )
}
