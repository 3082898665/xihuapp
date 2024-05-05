import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import Xihu from '../../assets/xihulogo.png'
import { AppstoreOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Detail from './Detail/index'
import Guest from './Detail/Guest'
import Test from './assets/test.png'
import Lb from './assets/lb.jpg'
import Lxy from './assets/lxy.png'
import Hyc from './assets/hyc.jpg'
import { getguest } from '../../../request/api'
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export default function index() {
    let data;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // 注意：月份是从0开始的，所以要加1  
    var yyyy = today.getFullYear();
    const [guest, setguest] = useState([])
    const people = [
        {
            name: '黄易超',
            job: '浙江省智慧城市促进会常务副秘书长',
            pic: Hyc
        },
        {
            name: '魏亮',
            job: '中国信息通信研究院副院长',
            pic: Test
        }, {
            name: '李冰',
            job: '原国家信息技术安全研究中心副主任',
            pic: Lb
        },
        {
            name: '李新友',
            job: '国家信息中心首席工程师',
            pic: Lxy
        }
    ]

    //导航

    const items = [
        getItem('全部出会日期', 'group'),
        getItem(`${mm}月 ${dd} 日`, 'sub2', <AppstoreOutlined />),
        getItem(`${mm}月 ${Number(dd) + 1} 日`, 'sub3', <DatabaseOutlined />),
        getItem(`${mm}月 ${Number(dd) + 2} 日`, 'sub4', <AppstoreOutlined />),
        getItem(`${mm}月 ${Number(dd) + 3} 日`, 'sub5', <DatabaseOutlined />),
        getItem(`${mm}月 ${Number(dd) + 4} 日`, 'sub6', <AppstoreOutlined />),
        getItem(`${mm}月 ${Number(dd) + 5} 日`, 'sub7', <DatabaseOutlined />)
    ];
    const onClick = (e) => {
        console.log('click ', e);
    };
    //选择某个嘉宾
    const [whoguest, setguests] = useState()
    function selectguest(item) {
        console.log(item)
        setguests(item)
    }
    //嘉宾信息
    const [time, settime] = useState('')
    useEffect(() => {
        localStorage.setItem('sendtype', 1)
        getguest({ time: time }).then(res => {
            let people = res.data.data
            console.log(people)
            setguest(people)
            setguests(people[0])
        })
    }, [])
    return (
        <div className={style.all}>
            <div className={style.title}>
                <img src={Xihu} className={style.xihu} />
                嘉宾信息

            </div>
            <div className={style.content}>
                <div className={style.left}>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        defaultSelectedKeys={['group']}
                        defaultOpenKeys={['group']}
                        mode="inline"
                        items={items}

                    />
                </div>
                <div className={style.contents}>
                    <div className={style.guest}>


                        {
                            guest ? <>
                                {guest.map((item, index) => {
                                    return (
                                        <div key={index} onClick={() => selectguest(item)}>
                                            <Guest people={item} key={index} />
                                        </div>
                                    )
                                })}
                            </> : <div>

                                <div div style={{ position: 'relative', left: '20vw', top: '10vh' }}>
                                    <div class="typewriter">
                                        <div class="slide"><i></i></div>
                                        <div class="paper"></div>
                                        <div class="keyboard"></div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className={style.detail}>
                    <div className={style.titles}>嘉宾信息</div>
                    {
                        whoguest && (<Detail people={whoguest} />)
                    }

                </div>
            </div>
        </div>
    )
}
