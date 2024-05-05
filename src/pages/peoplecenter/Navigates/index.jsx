import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, DiscordOutlined, RedditOutlined, ClusterOutlined, SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

import { Menu } from 'antd';
const items = [
    {
        label: '我的消息',
        key: '/centerpeo/message',
        icon: <MailOutlined />,
    },
    {
        label: '积分商城',
        key: '/centerpeo/shop',
        icon: <AppstoreOutlined />,

    },

    {
        label: '我的灵宠',
        key: '/centerpeo/pet',
        icon: <DiscordOutlined />,

    },
    {
        label: '灵宝问答',
        key: '/centerpeo/answer',
        icon: <RedditOutlined />,

    },
    {
        label: '我的藏品',
        key: '/centerpeo/myproduct',
        icon: <SmileOutlined />,

    },
    {
        label: '历史记录',
        key: '/centerpeo/history',
        icon: <ClusterOutlined />,

    },
    ,

];
export default function index() {
    const [current, setCurrent] = useState('/centerpeo/message');
    const navigate = useNavigate()
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
