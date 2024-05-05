import React, { useState } from 'react'
import style from './answer.module.css'
import { Checkbox, Input } from 'antd';
import Ljie from '../../../assets/actpic/ljie.png'
import { LinkOutlined } from '@ant-design/icons';
import { sendhot } from '../../../../request/api'
import { Button, message, Space } from 'antd';
const { TextArea } = Input;
export default function Answer({ setshow }) {
    const [text, settext] = useState('')
    const [http, sethttp] = useState('')
    const [nick, setnick] = useState(true)
    const [showhttp, sethttps] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '快报发布成功',
        });
    };
    function changetext(e) {
        // console.log()
        settext(e.target.value)
    }
    function changehttp(e) {
        sethttp(e.target.value)
    }
    function showhttpfun() {
        sethttps(true)
    }
    function checkc(e) {
        setnick(!e.target.checked)
    }
    function sendan() {
        const data = { name: nick ? '用户123' : '匿名', content: text, link: http }
        localStorage.setItem('sendtype', 1)
        sendhot(data).then(res => {
            console.log(res)
            setshow(old => {
                return !old
            })
            success()
            sethttp('')
            setnick('')
            settext('')
        })
    }
    return (
        <div className={style.all}>
            {contextHolder}
            <div className={style.title}>我也要发一条快报</div>
            <TextArea rows={4} onChange={changetext} value={text} maxLength={50} placeholder="发表建设性评论" style={{ marginBottom: "20px" }} />
            <Input style={{ display: showhttp ? '' : 'none' }} rows={4} onChange={changehttp} value={http} placeholder="以https://开头" />
            <div className={style.but}>
                <div className={style.addlj} onClick={showhttpfun}>
                    <LinkOutlined />
                    添加链接
                </div>
                <div className={style.fake}>
                    <input type='checkbox' onChange={checkc} style={{ marginRight: '5px' }} />
                    匿名
                </div>
                <div className={style.sub} onClick={sendan}>
                    提交快报
                </div>
            </div>

        </div>
    )
}
