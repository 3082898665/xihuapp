import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { Button, DatePicker, TimePicker, Select, Input } from 'antd';
import Host from './Hostcontent'
import dayjs from 'dayjs';
import { goab } from '../../../../until/api'
import { getguest } from '../../../..//request/api'
import axios from 'axios';
export default function index() {
    const [name, setname] = useState('')
    const [content, setcon] = useState('')
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [glist, setglist] = useState([])
    useEffect(() => {

        localStorage.setItem('sendtype', 1)
        const dataa = { time: '' }
        getguest(dataa).then(res => {
            console.log(res.data)
            const li = res.data.data
            let middle = []
            for (let i = 0; i < res.data.data.length; i++) {
                middle = [...middle, { value: li[i].name, label: li[i].name }]
            }
            console.log(middle)
            setglist(middle)
        })
    }, [])
    const handleProvinceChange = (value) => {
        console.log(value)
    };
    const [start, setstart] = useState(true)
    const onChangedate = (date, dateString) => {
        console.log(date, dateString);
        setdate((pre) => [...pre, dateString])
    };
    const onChangetime = (time, timeString) => {
        console.log(time, timeString);
        settime((pre) => [...pre, timeString])
    };
    function gosend() {
        setstart(true)
        let guestls = []
        for (let i = 0; i < glist.length; i++) {
            guestls.push(glist[i].value)
        }
        const datar = { liveName: name, guest: guestls, startTime: date[0] + ' ' + time[0], endtime: date[1] + ' ' + time[1], description: content }
        goab(datar).then(res => {
            console.log(res.data)
            localStorage.setItem('liveid', res.data.data)
        })
    }
    return (
        <div className={style.all}>
            <div className={style.title}>
                {start ? '直播' : '直播信息填写'}
            </div>
            <div style={{ display: !start ? '' : 'none' }}>
                <div className={style.infobox}>
                    直播名称：<Input onChange={(e) => setname(e.target.value)} style={{ width: '200px', marginLeft: '20px' }} />
                </div>
                <div className={style.infobox}>
                    活动嘉宾： <Select
                        mode="multiple"
                        defaultValue={['会议主持人']}
                        placeholder="Outlined"
                        onChange={handleProvinceChange}
                        style={{
                            flex: 1,
                        }}
                        options={glist}
                    />
                </div>
                <div className={style.infobox}>
                    直播开始时间:<DatePicker style={{ margin: '0 20px' }} onChange={onChangedate} needConfirm /><TimePicker onChange={onChangetime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    &nbsp;&nbsp; {date.length > 0 && (<span>{date[0]}</span>)}&nbsp;&nbsp;
                    {time.length > 0 && (<span>{time[0]}</span>)}
                </div>
                <div className={style.infobox}>
                    直播结束时间:<DatePicker style={{ margin: '0 20px' }} onChange={onChangedate} needConfirm /><TimePicker onChange={onChangetime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                    &nbsp;&nbsp; {date.length > 1 && (<span>{date[1]}</span>)}&nbsp;&nbsp;
                    {time.length > 1 && (<span>{time[1]}</span>)}
                </div>
                <div className={style.infobox}>
                    直播内容：<Input onChange={(e) => setcon(e.target.value)} style={{ width: '200px', marginLeft: '20px' }} />
                </div>
                <div>
                    <Button onClick={gosend}>下一步</Button>
                </div>
            </div>
            <div className={style.content} style={{ display: start ? '' : 'none' }}>
                <Host />
            </div>
        </div>
    )
}
