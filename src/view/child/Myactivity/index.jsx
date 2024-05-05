import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Space, Table, Tag, message, Badge, Popconfirm } from 'antd';
import { getacttall, deleteact } from '../../../../request/api'
export default function index() {
    const [datan, setdata] = useState([])
    useEffect(() => {
        getacttall().then(res => {
            console.log(res.data)
            let newdata = res.data.data
            setdata(newdata)
        })
    }, [])

    const data = [
        {
            key: '1',
            activityName: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            activityName: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            activityName: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const confirm = (id) => {
        console.log(id);
        deleteact({ activityId: id }).then(res => {
            console.log(res)
            getacttall().then(res => {
                console.log(res.data)
                let newdata = res.data.data
                setdata(newdata)
            })
        })
        message.success('活动删除成功');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('取消活动删除');
    };
    const columns = [
        {
            title: '活动名称',
            dataIndex: 'activityName',
            key: 'activityName',
            render: (text) => <div>{text}</div>,
        },
        {
            title: '活动类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '活动地点',
            dataIndex: 'place',
            key: 'place',
        },
        {
            title: '截至时间',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: '活动参与人数',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: '活动状态',
            dataIndex: 'state',
            key: 'address',
            render: (_, data) => <Badge status={'processing'} text={'进行中'} />,
            //success | processing | default | error | warning
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => navigate('/administer/detail')}>更改 {record.key}</a>
                    <Popconfirm
                        title="是否删除这个活动"
                        description="您确定要删除这个活动吗"
                        onConfirm={() => confirm(record.id)}
                        onCancel={cancel}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a>删除</a>
                    </Popconfirm>


                </Space>
            ),
        },
    ];


    const navigate = useNavigate()
    return (
        <div className={style.all}>
            <Table columns={columns} dataSource={datan} />
        </div>
    )
}
