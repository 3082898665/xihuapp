import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { publish, subscribe } from 'pubsub-js'
import MarkdownPreview from '../Sec/MardDownPreview'
import { test, addpic } from '../../../../../../request/api'
export default function index() {
    const navigate = useNavigate()
    const [info, setinfo] = useState()
    const [size, setsize] = useState()
    const [srchead, sethead] = useState()
    useEffect(() => {
        subscribe('sendajax', (_, data) => {
            console.log(info)

            if (info) {
                let prtype = []
                let prm = []
                let formdatacover = new FormData()
                let formlist = new FormData()
                formdatacover.append('cover', info.mainpic)
                console.log(formdatacover.get('cover'))
                for (let i = 0; i < info.addresspic.length; i++) {
                    formlist.append('picture', info.addresspic[i]);
                    console.log(formlist.get('picture'))
                }
                for (let i = 0; i < info.pricelist; i++) {
                    prtype = [...prtype, info.pricelist[i].name]
                    prm = [...prm, info.pricelist[i].price]
                }
                const datt = {
                    activityName: info.name,
                    content: info.context,
                    start: info.date[0] + ' ' + info.time[0],
                    end: info.date[1] + ' ' + info.time[1],
                    place: info.address,
                    number: info.people,
                    type: size,
                    priceType: prtype,
                    price: prm,
                }
                localStorage.setItem('sendtype', 2)
                test(datt).then(res => {
                    console.log(res.data)
                    const id = res.data.data
                    const picdata = { activityId: id, cover: info.mainpic, file: info.addresspic }
                    localStorage.setItem('sendtype', 1)
                    addpic(picdata).then(res => {
                        console.log(11)

                        navigate('/administer/activity')
                    })
                })

            }
        })
        subscribe('getinfo', (_, data) => {
            console.log(data)
            setinfo(data.data)
            if (data.data.size == 1) {
                setsize('大会广播')
            }
            else if (data.data.size == 2) {
                setsize('线下大会')
            } else if (data.data.size == 3) {
                setsize('训练营报名')
            } else if (data.data.size == 4) {
                setsize('大会直播回放')
            }
            const windowURL = window.URL || window.webkitURL;
            const src = windowURL.createObjectURL(data.data.mainpic);
            sethead(src)
        })
    }, [info])

    return (
        <div className={style.all}>
            {
                info && (
                    <>
                        <div className={style.info}>
                            <div className={style.title}>活动封面:</div>
                            <div className={style.detail}>
                                <img src={srchead} alt="" style={{ width: '200px' }} /></div>
                        </div>
                        <div className={style.info}>
                            <div className={style.title}>活动类型:</div>
                            <div className={style.detail}>{size}</div>
                        </div>
                        <div className={style.info} style={{ display: size == 2 || size == 3 ? '' : 'none' }}>
                            <div className={style.title}>活动人数:</div>
                            <div className={style.detail}>{info.people}</div>
                        </div>
                        <div className={style.info}>
                            <div className={style.title}>活动名称:</div>
                            <div className={style.detail}>{info.name}</div>
                        </div>
                        <div className={style.info}>
                            <div className={style.title}>活动时间:</div>
                            <div className={style.detail}>{info.date[0]} {info.time[0]} - {info.date[1]} {info.time[1]}</div>
                        </div>
                        <div className={style.info}>
                            <div className={style.title}>活动内容:</div>
                            <div className={style.detail}>
                                <MarkdownPreview content={info.context} />
                            </div>
                        </div>
                        <div className={style.info} style={{ display: info.size == 3 ? '' : 'none' }}>
                            <div className={style.title}>活动价格:</div>
                            <div className={style.detail}>
                                <div className={style.pricelist}>
                                    {
                                        info.pricelist.length > 1 ? <>
                                            {
                                                info.pricelist.map((item, index) => {
                                                    return (
                                                        <div className={style.prices} key={item}>
                                                            收费名称: {item.name}     费用:{item.price}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </> : <></>

                                    }

                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}
