import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import Main from '../../assets/main1.jpg'
import Dz from './good.png'
import { CloudUploadOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';
import User from './Userimage'
import { sendvid, getrank } from '../../../../../request/api'
export default function index() {
    const ref = useRef();
    const [selectedFile, setSelectedFile] = useState();
    const [name, setname] = useState('')
    const [ranklist, setrank] = useState([])
    const changeHandler = (event) => {
        // 获取文件输入框的值
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    };
    const chooseFile = () => {
        // 触发文件选择窗口
        ref.current.click();
    };
    const [messageApi, contextHolder] = message.useMessage();
    const [isload, setload] = useState(false)
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '上传成功',
        });
    };
    function sendopic() {
        const data = { name: name, picture: selectedFile }
        sendvid(data).then(res => {
            console.log(res)
            setload(!isload)
            success()
        })
    }
    useEffect(() => {
        getrank().then(res => {
            console.log(res.data)
            setrank(res.data.data)
        })
    }, [])
    return (
        <div className={style.all}>
            {contextHolder}
            <div className={style.left}>
                <div className={style.rank}>
                    <div className={style.rtit}>影像排行榜
                        {/* <span className={style.rlist}></span> */}
                    </div>
                    {
                        ranklist.slice(0, 3).map((item, index) => {
                            return (
                                <div className={style.picbox}>
                                    <div className={style.picboxs}>
                                        <img src={item.picture} alt="" />
                                    </div>
                                    <div className={style.newbox}>
                                        {/* <div className={style.infoboxs}>作者：liqxiang</div> */}
                                        <div className={style.infobox}>
                                            {item.name}
                                            <br />
                                            <img src={Dz} alt="" className={style.good} />
                                            {item.num} &nbsp;

                                            {item.time}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.myinfo}>
                    <div className={style.heads}> 我的作品：2个 我的获赞：2</div>
                    <div className={style.sc}>
                        <div className={style.contit}>作品上传</div>
                        <div style={{ marginTop: '10px' }}>
                            作品名:<Input onChange={(e) => setname(e.target.value)} style={{ width: '200px', marginLeft: '10px' }} />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            图片选择：
                            <input type="file"
                                style={{ display: 'none' }}
                                ref={ref}
                                onChange={changeHandler}
                                // onClick={clearInput}
                                accept="image/*"
                            />
                            <Button onClick={chooseFile} type="default" icon={<CloudUploadOutlined />} size='small'>
                                图片上传
                            </Button>
                        </div>
                        <Button type="default" style={{ marginTop: '10px', marginLeft: '40px' }} onClick={sendopic} > 点击上传</Button>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.title}>
                    用户交流大赛

                </div>
                <div>
                    <User loading={isload} />
                </div>
            </div>
        </div>
    )
}
