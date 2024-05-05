import React, { useState } from 'react'
import style from './index.module.css'
import {
    SyncOutlined
} from '@ant-design/icons';
import Aiper from './aiper.png'
import Smile from './smile.png'
import Clear from './clear.png'
import { aianswer } from '../../../../../request/api'
export default function index() {
    const [talklist, setlist] = useState([
    ])
    const [userword, setuserword] = useState()

    function cleartalk() {
        setlist([])
    }
    function changew(event) {

        console.log(event.target.value)
        setuserword(event.target.value)
    }
    async function send(event) {
        if (event.keyCode == 13) {
            console.log(1111)
            setlist(old => {
                return [...old, { ma: null, user: userword }]
            })
            localStorage.setItem('sendtype', 1)
            aianswer({ talk: userword }).then(res => {
                setlist(old => {
                    const oldarr = old.filter(item => item.ma != null)
                    console.log(oldarr)
                    return [...oldarr, { ma: res.data.data, user: userword }]
                })
                console.log(res)

                setuserword('')
            })
        }
    }
    return (
        <div className={style.all}>
            <div className={style.main}>
                <div className={style.conversationl}>
                    <img className={style.aipic} src={Aiper}></img>
                    <div className={style.sendcom}>

                        下午好！
                        有开心或烦恼的事，欢迎和我分享。如果需要我的建议，也可以随时和我说哦。
                        <img src={Smile} className={style.smile}></img>


                    </div>
                </div>
                {talklist.map((item, index) => {
                    return (
                        <div key={index}>

                            <div className={style.conversation}>
                                <div className={style.senduser}>
                                    {item.user}
                                </div>
                            </div>
                            <div className={style.conversationl}>
                                <img className={style.aipic} src={Aiper}></img>
                                <div className={style.sendcom}>

                                    {!item.ma ?
                                        <SyncOutlined spin /> :
                                        <> {item.ma} <img src={Smile} className={style.smile}></img>
                                        </>


                                    }

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={style.footer}>
                <div className={style.lf} onClick={cleartalk}>
                    <img className={style.clearpic} alt='clear' src={Clear}></img>
                    <span className={style.clfont}>清理聊天</span>
                </div>
                <input className={style.inp} onChange={changew} value={userword} onKeyDown={send}></input>
            </div>
        </div>
    )
}
