import React, { useState } from "react";

import style from './index.module.scss'
import Testpic from '../../../../assets/fir.png'
import Hot from '../../../../assets/Hot.png'
import Good from '../../../../assets/赞.png'
import Time from '../../../../assets/时间.png'
import Name from '../../../../assets/newname.png'
import Subscr from '../../../../assets/订阅.png'
import Chat from './component/ChatRoom'
import G from '../../assets/g.png'
import G1 from '../../assets/g1.png'
import F from '../../assets/f.png'
import Pics from './vid.png'
function Index() {
    const [videoCall, setVideoCall] = useState(false);
    const [isgood, setgood] = useState(false)
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };

    return (
        <div className={style.all} >

            <div className={style.main}>

                <div className={style.left}>
                    <div className={style.title}>
                        <div className={style.pic}>
                            <img src={Testpic} alt="" className={style.ataver} />
                        </div>
                        <div className={style.titlecon}>
                            <div className={style.head}>
                                <span className={style.titname}>
                                    西湖论剑安全大会
                                </span>
                                <span className={style.titsize}>
                                    直播回放.安全大会
                                </span>
                                <span className={style.iconf} onClick={() => setgood(true)}>
                                    <img src={!isgood ? G : G1} alt="" className={style.realp} />点赞
                                </span>
                                <span className={style.iconf}>
                                    <img src={F} alt="" className={style.realp} />分享
                                </span>

                                <span className={style.subscribe}>
                                    <span className={style.subnum}>399</span>
                                    <img src={Subscr} className={style.subs} />
                                    订阅
                                </span>
                            </div>
                            <div className={style.bott}>
                                <div className={style.iconfont} title="直播名字">
                                    <img src={Name} alt="" className={style.iconimg} />
                                    <span className={style.botfont}>直播回放</span>
                                </div>
                                <div className={style.iconfont} title="热度">
                                    <img src={Hot} alt="" className={style.iconimg} />
                                    <span className={style.botfont}>3888</span>
                                </div>
                                <div className={style.iconfont} title="点赞">
                                    <img src={Good} alt="" className={style.iconimg} />
                                    <span className={style.botfont}>200</span>
                                </div>
                                <div className={style.iconfont} title="开播时间">
                                    <img src={Time} alt="" className={style.iconimg} />
                                    <span className={style.botfont}>2024/3/12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={style.content}
                    >
                        <div style={{ width: '60vw', height: '60vh', backgroundColor: 'black' }}
                            onClick={() => setVideoCall(true)}
                        >
                            <img src={Pics} className={style.picimgs} alt="" />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.rtit}>
                        网友评论
                    </div>
                    <div>
                        <Chat />
                    </div>
                </div>
            </div>
            <div className={style.guest}>
                <div className={style.guestp}>

                </div>
                <div className={style.guest}>

                </div>
            </div>
        </div>

    )
}

export default Index;