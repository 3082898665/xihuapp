import React from 'react'
import style from './index.module.scss'
import Test from '../../../assets/fir.png'
import RD from '../../../assets/热度.png'
import Part from '../../../assets/参与人数.png'
import Size from '../../../assets/类型.png'
import Goods from '../../../assets/赞.png'
import { useNavigate, useLocation } from 'react-router-dom'

export default function index({ name, pic, content, size, during, time }) {

    const navigate = useNavigate()
    function look() {
        if (size == '大会直播') {
            navigate('/myact/content/1')
        } else if (size == '训练营报名') {
            navigate('/myact/substance/1/content')
        } else if (size == '直播回放') {
            navigate('/myact/playback')
        } else if (size == '大会广播') {
            navigate('/myact/hua')
        } else if (size == '大会直播') {
            navigate('/myact/content/1')
        }

    }
    return (
        <div className={style.alls}>
            <div className={style.newbox} onClick={look}>
                <div className={style.pic}>
                    <img src={pic} className={style.realpic}></img>
                </div>
                <div className={style.text}>
                    <div className={style.title}
                    >
                        {name}
                    </div>
                    <div className={style.info}>
                        <span className={style.infocontent}>{content}</span>

                    </div>
                    <div className={style.info}>
                        <span className={style.data}>{during}</span>
                        <span className={style.data}><img src={RD} className={style.rd}></img> 776</span>
                        <span className={style.data}><img src={Part} alt="" className={style.rd} /> 665</span>
                        <span className={style.data}><img src={Goods} alt="" className={style.rd} /> 200</span>

                    </div>
                </div>
            </div>
            <div>
                <div class={style.card}>
                    <div class={style.icon}>
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
                        </svg>
                    </div>
                    <strong>
                        {size}
                    </strong>
                    <div class={style.cardbody}>
                        {during}-{time}

                        <hr />
                        +20积分
                    </div>
                    <span>
                        <div>参加会议嘉宾：
                            <br />
                            范渊, 方滨兴, 郝志强, 柯皓仁, 刘世锦, 沈昌祥, 谭晓生, 邬贺铨, 左晓栋
                        </div>
                        <div className={style.people}>

                        </div>
                    </span>
                </div>
            </div>
        </div>

    )
}
