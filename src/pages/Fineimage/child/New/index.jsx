import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import Test from '../../assets/main1.jpg'
import { getnews } from '../../../../../request/api'
import axios from 'axios'
export default function index() {
    const [newslist, setnews] = useState()
    useEffect(() => {
        axios.get('https://backend.local:10010/picture/getNews').then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div className={style.all}>
            {
                [1, 2, 3, 4].map((item, index) => {
                    return (
                        <div className={style.alls} key={index}>
                            <div className={style.newbox} >
                                <div className={style.pic}>
                                    <img src={Test} className={style.realpic}></img>
                                </div>
                                <div className={style.text}>
                                    <div className={style.title}
                                    >
                                        西湖论剑安全特训营·网络攻防蓝队实战技法进阶班
                                    </div>
                                    <div className={style.info}>
                                        <span className={style.infocontent}>本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。 培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌我好像看见掌我好像看见掌我好像看见</span>

                                    </div>
                                    <div className={style.info}>
                                        <span className={style.data}>2024/09/08</span>
                                        {/* <span className={style.data}><img src={RD} className={style.rd}></img> 776</span>
                                <span className={style.data}><img src={Part} alt="" className={style.rd} /> 665</span>
                                <span className={style.data}><img src={Size} alt="" className={style.rd} /> 讲座</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
