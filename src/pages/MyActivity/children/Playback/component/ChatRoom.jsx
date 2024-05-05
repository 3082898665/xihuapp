import React, { useEffect } from 'react'
// import WebSocket from 'websocket';
import { Button, Flex, Input } from 'antd';
import style from './index.module.css'
export default function ChatRoom() {
    useEffect(() => {
        // const socket = new WebSocket('ws://192.168.2.109:53134/ws');
        // socket.on('open', () => {
        //     console.log('WebSocket连接已建立');
        // });
        // socket.on('message', (data) => {
        //     console.log('收到消息:', data);
        // });
        // // 其他事件处理...
        // return () => {
        //     socket.close();
        // };
        console.log("WebSocket" in window)
    }, []);
    const listss = [
        '喜欢喜欢直播',
        '为这个直播点赞',
        '赞'
    ]
    return (
        <div className={style.all}>
            <div className='listchat'>
                {
                    listss.map((item, index) => {
                        return (
                            <div key={index} className={style.people}>
                                观众: {item}
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.but}>
                <div className={style.but}>
                    <Input placeholder="进行聊天" style={{ width: '200px' }} />
                    <Button type="primary">发布</Button>
                </div>

            </div>
        </div>
    )
}
