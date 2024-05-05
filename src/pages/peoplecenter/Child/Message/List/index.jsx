import React, { useState } from 'react'
import style from '../index.module.css'
import {
    DeleteOutlined,
    ExportOutlined
} from '@ant-design/icons';
import { Badge, Button, Modal } from 'antd';
export default function index() {
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <>
            <Modal
                title="西湖活动中心"
                style={{
                    top: 20,
                }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <div>您已经成功订阅西湖论剑安全训练营</div>
            </Modal>
            <div className={style.listall} onClick={() => setModal1Open(true)}>
                <div className={style.main}>
                    <div className={style.title}>西湖论剑活动中心    <span className={style.state}>| <Badge status={'processing'} /> &nbsp;&nbsp;未查看  </span></div>
                    <div className={style.content}>您已经成功订阅西湖论剑安全训练营,活动开启时我们会即使通知您。请注意查看</div>
                    <div className={style.time}>
                        2024/4/13  &nbsp;&nbsp; 活动中心
                    </div>
                </div>
                <div className={style.control}>
                    <div className={style.icon} title='我知道了'>
                        <ExportOutlined />
                    </div>
                    <div className={style.icon} title='删除' style={{ color: 'rgb(247, 86, 98)' }}>
                        <DeleteOutlined />
                    </div>

                </div>

            </div>
        </>

    )
}
