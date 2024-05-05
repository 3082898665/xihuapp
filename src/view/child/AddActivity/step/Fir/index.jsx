import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Select, Space } from 'antd';
import { subscribe, publish } from 'pubsub-js'
export default function index() {
    const [sizes, setsize] = useState('1')
    let num = 1
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setsize(value)
        num = value
    };
    const option = [
        {
            value: '1',
            label: '大会广播',
        },
        {
            value: '2',
            label: '线下大会',
        },
        {
            value: '3',
            label: '训练营报名',
        }, {
            value: '4',
            label: '大会直播回放'
        }
    ]
    useEffect(() => {
        subscribe('firstgo', (_, data) => {
            publish('isgo', { data: sizes })
        })
    }, [sizes])
    return (
        <div className={style.all}>
            <div className={style.tit}>
                活动类型选择
            </div>
            <div className={style.content}>
                <div className={style.sizesel}>
                    活动类型选择:<Select
                        defaultValue="1"
                        style={{
                            width: 120,
                            marginLeft: '20px'
                        }}
                        onChange={handleChange}
                        options={option}
                    />
                </div>
            </div>

        </div>
    )
}
