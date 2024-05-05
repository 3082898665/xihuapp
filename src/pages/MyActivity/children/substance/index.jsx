import React, { useState } from 'react'
import style from './index.module.scss'
import { useNavigate, Outlet } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import G from '../../assets/g.png'
import G1 from '../../assets/g1.png'
import S from '../../assets/s.png'
import S1 from '../../assets/s1.png'
import F from '../../assets/f.png'
import { Button, message, Space } from 'antd';
const items = [
    {
        label: '活动内容',
        key: 'content',
        icon: <MailOutlined />,
    },
    {
        label: '活动概览',
        key: 'statictics',
        icon: <AppstoreOutlined />,
    },
    {
        label: '用户研讨',
        key: 'subchat',
        icon: <AppstoreOutlined />,
    },
];


export default function index() {

    const [isgood, setgood] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '已复制成功，去粘贴给好友吧',
        });
    };

    const navigate = useNavigate()
    function buy() {
        navigate('/ticket')
    }

    const [current, setCurrent] = useState('content');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`${e.key}`)
    };
    return (
        <div className={style.all}>
            {contextHolder}
            <div className={style.left}>
                <div className={style.title}>
                    西湖论剑安全训练营数据要素
                </div>
                <div className={style.content}>
                    <div className={style.detail}>
                        <span className={style.info}>
                            课程主题：
                        </span>
                        进化
                    </div>
                    <div className={style.detail}>
                        <span className={style.info}>
                            培训对象：
                        </span>
                        *本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。
                        *培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略，掌握基本的漏洞分析、利用和防御技能，能够进行简单的应急响应和取证分析。
                    </div>
                    <div className={style.detail}>
                        <span className={style.info}>
                            购票须知
                        </span>
                        1.报名方式：点击下方【立即报名】；

                        2.报名须知：凭活动行【电子票】验票签到入场；

                        3.买线下课程，送线上培训课程（半年有效期哦）；

                        4.如果购票有疑问，请联系主办方：13810244613（微信同号）</div>
                </div>
                <div className={style.detail} style={{ marginBottom: '10%' }}>
                    <span className={style.info}>
                        关于主办方：
                    </span>
                    西湖论剑数字训练营
                </div>
                <button class={style.btn17} onClick={buy}>
                    <span class={style.textcontainer}>
                        <span class={style.text}>立刻报名</span>
                    </span>
                </button>
                <div className={style.three}>
                    <div className={style.picbox}>
                        <img src={G} alt="" style={{ display: isgood ? 'none' : '' }} onClick={() => setgood(true)} className={style.gpic} />
                        <img src={G1} alt="" style={{ display: !isgood ? 'none' : '' }} className={style.gpic} />
                        点赞
                    </div>
                    <div className={style.picbox}>
                        <img src={S} alt="" className={style.gpic} />
                        收藏
                    </div>
                    <div className={style.picbox} onClick={success}>
                        <img src={F} alt="" className={style.gpic} />
                        分享
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.nav}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div>
                <div className={style.child}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
