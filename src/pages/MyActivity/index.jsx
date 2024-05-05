import React, { useEffect } from 'react'
import style from './index.module.css'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom'

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function index() {
    const { size } = useParams();
    console.log(size)
    const list = [
        {
            name: '全部',
            path: '1'
        }, {
            name: '直播',
            path: '2'
        }, {
            name: '大会广播',
            path: '3'
        }, {
            name: '训练营报名',
            path: '4'
        }, {
            name: '直播回放',
            path: 5
        }
    ]
    useEffect(() => {

    }, [])
    return (
        <div className={style.all}>

            <div className={style.tcdivid}>
                <div className={style.long}></div>
                <div className={style.shot}></div>
                <div className={style.long}></div>
                <div className={style.shot}></div>
                <div className={style.long}></div>
                <div className={style.shot}></div>
                <div className={style.long}></div>
                <div className={style.shot}></div>
                <div className={style.long}></div>

                <div className={style.long}></div>
                <div className={style.shot}></div>
                <div className={style.shot}></div>
                <div className={style.shot}></div>
                <div className={style.long}></div>
                <div className={style.shot}></div>


                <div className={style.long}></div>
                <div className={style.long}></div>
                <div className={style.shot}></div><div className={style.long}></div>
                <div className={style.shot}></div><div className={style.long}></div>
                <div className={style.shot}></div><div className={style.long}></div>
                <div className={style.shot}></div><div className={style.long}></div>
                <div className={style.shot}></div>
            </div>
            <div className={style.mainnav}>
                {list.map((item, index) => {
                    return (
                        <div className={style.chance} key={item.path}>
                            {item.name}
                        </div>
                    )
                })}
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                        marginTop: '7px',
                        position: 'relative',
                        left: '30%'
                    }}
                />
            </div>

            <div className={style.bdiv}>

            </div>
            <div className={style.bdiv}>

            </div>

            <div className={style.actcontent}>

                <Outlet />
            </div>
        </div>
    )
}