import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Space, Table, Tag, Badge } from 'antd';
import { getuser } from '../../../../request/api'
export default function index() {
    const [datas, setdata] = useState([])
    useEffect(() => {
        getuser().then(res => {
            console.log(res.data)
            setdata(res.data.data)
        })
    }, [])
    const columns = [
        {
            title: '用户名称',
            dataIndex: 'nickName',
            key: 'nickName',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '用户邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '用户号码',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: '用户积分',
            dataIndex: 'points',
            key: 'points',
        },
        {
            title: '注册时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => navigate('/administer/detail')}>更改 {record.name}</a>
                    <a>删除</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const navigate = useNavigate()
    return (
        <div className={style.all}>
            <Table columns={columns} dataSource={datas} />
        </div>
    )
}
