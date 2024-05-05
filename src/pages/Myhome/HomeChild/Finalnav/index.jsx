import React from 'react'
import style from './index.module.css'
import Finalpic from '../../../../assets/finalpic.png'
import Finallogo from '../../../../assets/finallogo.png'
import GM from '../../../../assets/gm.png'
import XH from '../../../../assets/xh.png'
import Fontm from '../../../../assets/fontmain.png'
import { fadeInDown, flipInX, zoomInLeft, zoomInRight } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    return (
        <div className={style.all}>
            <div className={style.title}
            >
                西湖盛会活动系统
            </div>
            <div className={style.divid}></div>
            <div className={style.cont}>
                <div className={style.fa}>
                    <div className={style.itemtit}>大会活动详情</div>
                    <div className={style.item}>活动管理</div>
                    <div className={style.item}>活动信息</div>
                    <div className={style.item}>参与详情</div>
                    <div className={style.item}>活动报名</div>
                </div>
                <div className={style.fa}>
                    <div className={style.itemtit}>
                        展商展览详情</div>
                    <div className={style.item}>
                        展商详情</div>
                    <div className={style.item}>
                        展商产品</div>
                    <div className={style.item}>
                        视频见解</div>

                </div>
                <div className={style.fa}>
                    <div className={style.itemtit}>
                        成果展览信息</div>
                    <div className={style.item}>
                        新星产品</div>
                    <div className={style.item}>
                        创新成果</div>

                </div>
                <div className={style.fa}>
                    <div className={style.itemtit}>
                        信息交汇中心</div>
                    <div className={style.item}>
                        报道中心</div>
                    <div className={style.item}>
                        精美影像</div>

                </div>
                <div className={style.fa}>
                    <div className={style.itemtits}>
                        个人资讯中心</div>
                    <div className={style.itemtits}>
                        管理资讯中心</div>

                </div>

            </div>
            <div className={style.divc}></div>
            <div className={style.main}>
                <div className={style.left}>
                    <img src={Finalpic} className={style.logof}></img>
                    <div className={style.logofont}>服务条约/隐私条约</div>
                </div>
                <div className={style.middle}> <img src={Fontm} className={style.middlepic}></img></div>
                <div className={style.right}>
                    <img src={XH} className={style.picrS}></img>
                    <img src={GM} className={style.picrS}></img>
                    <img src={Finallogo} className={style.picr}></img>

                </div>
            </div>
        </div>
    )
}
