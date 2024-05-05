import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import { Input } from 'antd';
import { CloudDownloadOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, TimePicker, InputNumber } from 'antd';
import { subscribe, publish } from 'pubsub-js'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Mark from './mark'
import Files from './selectfile'
export default function index() {
    const [size, setsize] = useState()
    const [reall, setreall] = useState(false)
    const inputRef = useRef();
    const [address, setaddress] = useState("")
    const [actname, setactname] = useState("")
    const [selectedFile, setSelectedFile] = useState("");             //活动封面
    const [pricelist, setprice] = useState([{ name: '', price: '' }])          //活动价格表
    const [name, setname] = useState('')                    //活动的价格名字
    const [realprice, setrealprice] = useState('')       //活动的价格
    const [date, setdate] = useState('')               //活动天数
    const [time, settime] = useState('')              //活动时分
    const [context, setcontext] = useState("")        //活动内容
    const [people, setpeople] = useState(1)           //报名人数
    const [addresspic, setaddpic] = useState([])
    useEffect(() => {
        subscribe('howsize', (_, data) => {
            console.log(data.size.data)
            setsize(data.size.data)

        })

        subscribe('three', (_, data) => {
            publish('detail', {
                data: {
                    name: actname,
                    address,
                    mainpic: selectedFile,
                    pricelist,
                    date,
                    time,
                    context,
                    people,
                    addresspic
                }
            })
        })
    }, [addresspic, people, context])

    const onChangeContext = (value) => {
        console.log(`onChangeContext`);
        console.log(value);
        setcontext(value)
    };
    function changerprice(e) {
        setrealprice(e.target.value)
    }
    function changename(e) {
        console.log(111)
        setname(e.target.value)
    }
    function changeprice(index) {
        setprice((pre) => {
            const newarry = pre.slice()
            newarry[index] = { name: name, price: realprice }
            return newarry;
        })
    }
    const onChangpeople = (value) => {
        setpeople(value)
        console.log('changed', value);
    };
    function addprice() {
        setprice((pre) => {
            return [...pre, { name: '', price: '' }]
        })
    }
    function outprice() {
        setprice((pre) => {
            const newarry = pre.slice(0, -1)
            return newarry;
        })
    }
    const changeHandler = (event) => {
        // 获取文件输入框的值
        console.log(event.target.files[0])
        console.log(event.target)
        setSelectedFile(event.target.files[0]);
        // setIsFilePicked(true);
    };
    const chooseFile = () => {
        // 触发文件选择窗口
        inputRef.current.click();
    };

    //活动时间选取
    const onChangedate = (date, dateString) => {
        console.log(date, dateString);
        setdate((pre) => [...pre, dateString])
    };
    const onChangetime = (time, timeString) => {
        console.log(time, timeString);
        settime((pre) => [...pre, timeString])
    };
    return (
        <div className={style.all}>
            <div className={style.img}>
                活动封面选择:
                <input
                    type="file"
                    ref={inputRef}
                    onChange={changeHandler}
                    // onClick={clearInput}
                    accept="image/*"
                    style={{ display: "none" }}
                />
                <Button type="" icon={<CloudDownloadOutlined />} onClick={chooseFile}>
                    上传图片
                </Button>
                {
                    selectedFile && (<span style={{ marginLeft: '20px' }}>{selectedFile.name}</span>)

                }
            </div>
            <div className={style.title}>
                活动名称：<Input placeholder="输入活动名称" onChange={(e) => { setactname(e.target.value) }} style={{ width: '300px' }} />
            </div>

            <div className={style.title}>
                活动地址：<Input placeholder="输入活动地址" onChange={(e) => { setaddress(e.target.value) }} style={{ width: '300px' }} />
            </div>
            <div className={style.title} style={{ display: size == 2 || size == 3 ? '' : 'none' }}>
                最多人数：<InputNumber min={1} max={100} defaultValue={1} onChange={onChangpeople} changeOnWheel />
            </div>

            <div className={style.title}>
                活动开始时间:<DatePicker style={{ margin: '0 20px' }} onChange={onChangedate} needConfirm /><TimePicker onChange={onChangetime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                &nbsp;&nbsp; {date.length > 0 && (<span>{date[0]}</span>)}&nbsp;&nbsp;
                {time.length > 0 && (<span>{time[0]}</span>)}
            </div>
            <div className={style.title}>
                活动结束时间:<DatePicker style={{ margin: '0 20px' }} onChange={onChangedate} needConfirm /><TimePicker onChange={onChangetime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                &nbsp;&nbsp; {date.length > 1 && (<span>{date[1]}</span>)}&nbsp;&nbsp;
                {time.length > 1 && (<span>{time[1]}</span>)}
            </div>
            <div className={style.pxun} style={{ display: size == 3 ? '' : 'none' }}>
                <div className={style.ltit}>培训价格设定：</div>
                <div className={style.rcon}>
                    {
                        pricelist.map((item, index) => {
                            return (
                                <div className={style.price} key={index}>
                                    < Input placeholder="输入培训阶段课程" onChange={changename} style={{ width: '300px', marginRight: '20px' }} />
                                    <Input prefix="￥" suffix="RMB" style={{ width: '150px' }} onBlur={() => changeprice(index)} onChange={changerprice} />
                                </div>
                            )

                        })
                    }
                    <div className={style.controllprice}>
                        <div className={style.addact} > <PlusOutlined onClick={addprice} style={{ position: 'relative', top: '-1px' }} /></div>
                        <div className={style.addact} onClick={outprice}> <MinusOutlined style={{ position: 'relative', top: '-1px' }} /></div>
                    </div>

                </div>
            </div>
            <div className={style.edit}>

                内容编写：
                <br />
                <Mark onChangeContext={onChangeContext} value={context} />
            </div>
            <div className={style.place} style={{ display: size == 2 ? '' : 'none' }}>
                <div style={{ width: '20%' }}>
                    打卡场景图片上传:
                </div>
                <Files setfiles={setaddpic} />
            </div>
        </div>
    )
}
