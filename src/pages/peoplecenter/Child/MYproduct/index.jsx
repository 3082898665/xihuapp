import React from 'react'
import style from './index.module.css'
import Pic from './test.png'
import T1 from '../assets/m1.jpg'
import T2 from '../assets/m2.jpg'
export default function index() {
    return (
        <div className={style.all}>
            <div className={style.left}>
                <div className={style.title}>未使用</div>
                <div className={style.conbox}>
                    <div className={style.pic}>
                        <img src={T1} alt="" className={style.img} />
                    </div>
                    <div className={style.info}>
                        <div className={style.it}>大会周边智能保温杯350ml</div>
                        <div className={style.im}>大会周边智能保温杯350ml</div>
                        <div className={style.ib}>购买日期：2024/4/7</div>
                    </div>
                </div>

            </div>

            <div className={style.right}>
                <div className={style.title}>已使用或过期</div>
                <div className={style.conbox}>
                    <div className={style.pic}>
                        <img src={Pic} alt="" className={style.img} />
                    </div>
                    <div className={style.info}>
                        <div className={style.it}>2024年长度大会赛事门票</div>
                        <div className={style.im}>2024年长度大会赛事门票</div>
                        <div className={style.ib}>过期日期：2024/4/7</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
