import React, { useState, useEffect } from 'react'
import style from './index.module.css'
import Pback from '../../assets/peoplecenter.jpg'
import Head from '../../assets/header.jpg'
import { Button, Modal, Input } from 'antd';
import { EditOutlined, FormOutlined } from '@ant-design/icons';
import Pet from './pet/pet1.gif'
import MyList from './MyList/index'
import Hotlist from './Hotlist'
import MyNav from './Navigates'
import { Outlet } from 'react-router-dom'
import { publish, subscribe } from 'pubsub-js'
export default function index() {
    const [isVisible, setIsVisible] = useState(false);
    const [modal1Open, setModal1Open] = useState(false);
    const [issub, setsub] = useState(true)
    function changesub() {
        setsub(!issub)
    }
    const [modal1Openpass, setModal1Openpass] = useState(false);
    const plist = [{
        title: '西湖论剑',
        time: '2024/8/8',

    }]
    useEffect(() => {
        subscribe('wei', (_, data) => {
            console.log(data.data)
        })
    }, [])
    return (
        <div className={style.all}>
            <div className={style.title}>
                <img src={Pback} className={style.pic} />
            </div>
            <div className={style.main}>
                <div className={style.header}>
                    <div className={style.headpic}>
                        <img src={Head} className={style.host} />
                    </div>
                    <div className={style.peoinfo}>
                        <div className={style.name}>聪明小刘


                        </div>
                        <div className={style.lxi}>
                            <span>性别:女 </span>
                            <span>手机号：18593466145 </span>
                            <span>邮箱：3082898665@qq.com </span></div>
                        <div className={style.act}>
                            <div className={style.actvity}>订阅活动:20</div>
                            <div className={style.actvity}>参加活动:30</div>

                        </div>
                        <div className={style.jif}>
                            已有积分：230
                        </div>
                    </div>
                    <div>
                        <div className={style.control}>
                            <div className={style.coninfo} onClick={() => setModal1Open(true)}> <EditOutlined />更改基本信息</div>
                            <div className={style.coninfo} onClick={() => setModal1Openpass(true)}><FormOutlined />更改密码</div>

                        </div>
                        <di className={style.videobox}>
                            <img src={Pet} className={style.video} />
                        </di>
                    </div>

                </div>
                <Modal
                    title="基本信息更改"
                    style={{
                        top: 20,
                    }}
                    open={modal1Open}
                    onOk={() => setModal1Open(false)}
                    onCancel={() => setModal1Open(false)}
                >
                    <div className={style.change}>
                        <div className={style.changel}>昵称:</div>
                        <div className={style.changer}><Input placeholder="请输入" /></div>
                    </div>
                    <div className={style.change}>
                        <div className={style.changel}>性别:</div>
                        <div className={style.changer}><Input placeholder="请输入" /></div>
                    </div>
                    <div className={style.change}>
                        <div className={style.changel}>电话:</div>
                        <div className={style.changer}><Input placeholder="请输入" /></div>
                    </div>
                    <div className={style.change}>
                        <div className={style.changel}>邮箱:</div>
                        <div className={style.changer}><Input placeholder="请输入" /></div>
                    </div>
                </Modal>
                <Modal
                    title="用户密码更改"
                    style={{
                        top: 20,
                    }}
                    open={modal1Openpass}
                    onOk={() => setModal1Openpass(false)}
                    onCancel={() => setModal1Openpass(false)}
                >
                    <div className={style.change}>
                        <div className={style.changel}>原来密码:</div>
                        <div className={style.changer}><Input placeholder="请输入" /></div>
                    </div>
                    <div className={style.change}>
                        <div className={style.changel}>更改密码:</div>
                        <div className={style.changer}><Input type='password' placeholder="请输入" /></div>
                    </div>
                </Modal>
            </div>
            <div className={style.detail}>
                <div className={style.dleft}>
                    <div className={style.dlt}>
                        <div className={style.colo}></div>
                        <div className={style.dtitle} onClick={changesub}>
                            {issub ? '订阅活动/报名活动' : '报名活动/订阅活动'}
                        </div>
                        <div className={style.mlist}>
                            {
                                [1].map((item, index) => {
                                    return (
                                        <MyList />
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div className={style.dlb}>
                        <div className={style.hcolor}></div>
                        <div className={style.hotact}>热门事件</div>
                        <div className={style.mlist}>
                            <Hotlist />
                        </div>
                    </div>
                </div>
                <div className={style.dright}>
                    <div className={style.maintit}>
                        <MyNav />
                    </div>
                    <div className={style.drcon}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}
