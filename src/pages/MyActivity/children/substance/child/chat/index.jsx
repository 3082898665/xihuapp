import React, { useState } from 'react'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import style from './index.module.scss'
import Header from '../../../../../../assets/header.jpg'
import Header1 from './header1.jpg'
import Header2 from './header2.jpg'
import Header3 from './header3.jpg'
import { Input, Button } from 'antd';
import { MehOutlined, PictureOutlined } from '@ant-design/icons';
export default function index() {
    const [isvisible, setvis] = useState(false)
    const [emoji, setemoji] = useState('')
    const [lists, setlists] = useState([
        {
            header: Header3,
            word: '这个活动我觉得非常号好',
            time: '2024/3/14'
        },
        {
            header: Header1,
            word: '这个活动让我学到了很多网络安全知识',
            time: '2024/3/14'
        }, {
            header: Header2,
            word: '活动既支持线上又支持线下，简直不要太方便',
            time: '2024/3/14'
        }
    ])
    function chat() {
        setlists([...lists, {
            header: Header,
            word: emoji,
            time: '2024/3/14'
        }])
        setemoji('')
    }
    return (
        <div className={style.all}>
            <div
                className={style.chatlist}>
                {
                    lists.map((item, index) => {
                        return (
                            <div className={style.allcon}>
                                <div className={style.conpic}>
                                    <img src={item.header} className={style.pichead} />
                                </div>
                                <div className={style.confont}>
                                    <div className={style.time}>
                                        {item.time}
                                    </div>
                                    <div className={style.maincon}>{item.word}</div>
                                    <div></div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.plun}>
                <div className={style.bq}>
                    {
                        isvisible && <Picker
                            data={data}
                            previewPosition='none'
                            onEmojiSelect={(e) => {
                                console.log(e)
                                setemoji((pre) => {
                                    const news = pre + e.native
                                    return news
                                })
                                setvis(!isvisible)
                            }}

                        />
                    }

                </div>
                <Input placeholder="发表言论"
                    onChange={(e) => {
                        setemoji(e.target.value)

                    }}
                    value={emoji} className={style.int} />
                <Button type="primary" style={{ marginLeft: '20px' }} onClick={chat}>发表言论</Button>
                <br />
                <MehOutlined onClick={() => { setvis(!isvisible) }} style={{ marginRight: '10px' }} /><PictureOutlined />
            </div>
        </div>
    )
}
{/* */ }