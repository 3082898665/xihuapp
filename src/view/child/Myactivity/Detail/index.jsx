
import React, { useState } from 'react'
import style from './index.module.css'
import dayjs from 'dayjs';
import { Button, DatePicker, TimePicker, Input } from 'antd';
import Mark from './mark.jsx'

export default function index() {
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [context, setcontext] = useState("")
    //初始化日期
    const dateFormat = 'YYYY/MM/DD';

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
            <div className={style.title}>
                活动名称：<Input unselectable='' value={'西湖论剑夏令营'} style={{ width: '300px' }} />
            </div>
            <div className={style.title}>
                活动开始时间:
                <DatePicker style={{ margin: '0 20px' }} defaultValue={dayjs('2015/01/01', dateFormat)} onChange={onChangedate} needConfirm />
                <TimePicker onChange={onChangetime} defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
                &nbsp;&nbsp; {date.length > 0 && (<span>{date[0]}</span>)}&nbsp;&nbsp;
                {time.length > 0 && (<span>{time[0]}</span>)}
            </div>
            <div className={style.title}>
                活动结束时间:<DatePicker style={{ margin: '0 20px' }} defaultValue={dayjs('2015/01/01', dateFormat)} onChange={onChangedate} needConfirm /><TimePicker onChange={onChangetime} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
                &nbsp;&nbsp; {date.length > 1 && (<span>{date[1]}</span>)}&nbsp;&nbsp;
                {time.length > 1 && (<span>{time[1]}</span>)}
            </div>
            <div className={style.content}>
                <div className={style.ctit}>内容更改:</div>
                <Mark onChangeContext={setcontext} value={context} />
            </div>
            <Button>确定更改</Button>&nbsp;&nbsp;&nbsp;
            <Button>取消更改</Button>
        </div>
    )
}
