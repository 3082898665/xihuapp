import React, { useState } from "react";
import { VideoRoom } from './component/VideoRoom';
import style from './index.module.scss'
import Backz from '../../assets/t2.jpeg'
import Hot from '../../../../assets/Hot.png'
import Good from '../../../../assets/赞.png'
import Time from '../../../../assets/时间.png'
import Name from '../../../../assets/newname.png'
import Subscr from '../../../../assets/订阅.png'
import Chat from './component/ChatRoom'
import G from '../../assets/g.png'
import G1 from '../../assets/g1.png'
import F from '../../assets/f.png'
function Index() {
    const [videoCall, setVideoCall] = useState(true);
    const [isgood, setgood] = useState(false)
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    const [issub, setsub] = useState(false)
    return (
        <div className={style.all} >
            <div className={style.main}>

                <div className={style.left}>
                    <div className={style.title}>
                        <div className={style.pic}>
                            <img src={Backz} alt="" className={style.ataver} />
                        </div>
                        <div className={style.titlecon}>
                            <div className={style.head}>
                                <span className={style.titname}>
                                    西湖论剑安全大会
                                </span>
                                <span className={style.titsize}>
                                    直播.安全大会
                                </span>
                                <span className={style.iconf} onClick={() => { setgood(true); console.log(111) }}>
                                    <img src={!isgood ? G : G1} alt="" className={style.realp} />点赞
                                </span>
                                <span className={style.iconf}>
                                    <img src={F} alt="" className={style.realp} />分享
                                </span>

                                <span className={style.subscribe} onClick={() => setsub(true)}>
                                    <span className={style.subnum}></span>
                                    <img src={Subscr} className={style.subs} />
                                    {issub ? '已订阅' : '订阅'}
                                </span>
                            </div>
                            <div className={style.bott}>
                                <div className={style.iconfont} title="直播名字">
                                    <img src={Name} alt="" className={style.iconimg} />
                                    <span className={style.botfont}>大会直播</span>
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
                                    <span className={style.botfont}>2024/4/13</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {videoCall ? (
                        <div
                            className={style.content}
                        >

                            <VideoRoom />
                        </div>
                    ) : (
                        <div
                            className={style.content}
                        >
                            <div style={{ width: '60vw', height: '60vh', backgroundColor: 'black' }}
                                onClick={() => setVideoCall(true)}
                            >

                            </div>
                        </div>
                    )
                    }
                </div>
                <div className={style.right}>
                    <div className={style.rtit}>
                        互动评论
                    </div>
                    <div>
                        <Chat />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Index;