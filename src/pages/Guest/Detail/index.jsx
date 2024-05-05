import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { downppt } from '../../../../request/api'
export default function index({ people }) {
    const info = {
        name: '魏亮',
        list: [
            '5月7日 13:30 - 17:10     信创软件供应链安全论坛',
            '5月8日 13:30 - 18:00     MSS安全托管运营服务论坛',
            '5月8日 13:30 - 18:00     MSS安全托管运营服务论坛'
        ]
    }
    let zbl = [
        [
            '4月7日 13:30 - 17:10     信创软件供应链安全论坛',
            '4月8日 13:30 - 18:00     MSS安全托管运营服务论坛',
            '4月8日 13:30 - 18:00     网络安全运营服务论坛'
        ],
        [
            '2月7日 13:30 - 17:10     信创软件供应链安全论坛',
            '2月10日 15:30 - 18:00     MSS安全托管运营服务论坛',
            '3月20日 11:30 - 12:00     MSS安全托管运营服务论坛'
        ]
    ]
    const [num, setnum] = useState()
    useEffect(() => {
        var randomNumber = Math.floor(Math.random() * 10);
        const s = randomNumber % 2
        setnum(num)
        console.log(s);
    }, [])

    function cliwown() {
        console.log(people.id)
        downppt({ id: people.id }).then(res => {
            const blob = res.data
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob); // 创建指向Blob对象的URL  
            a.download = filename; // 设置下载文件名  
            a.style.display = 'none'; // 隐藏a标签  
            document.body.appendChild(a); // 将a标签添加到DOM中  
            a.click(); // 模拟点击以触发下载  
            document.body.removeChild(a); // 下载完成后从DOM中移除a标签  
            URL.revokeObjectURL(a.href); // 释放之前创建的URL对象 
        })
    }
    return (
        <div className={style.dall}>
            <div className={style.dname}>
                名字：{people.name}
            </div>
            <div className={style.zb}>
                直播场次：
                <div className={style.zblists}>


                    {
                        info.list.map((item, index) => {
                            return (
                                <div className={style.zblist} key={item}>
                                    <div className={style.slot}></div>
                                    <div className={style.realzb}>{item}</div>
                                </div>
                            )
                        })
                    }




                </div>
            </div>
            <div className={style.but}>
                <div class={style.scene} onClick={cliwown}>
                    <div class={style.cube}>
                        <span class={`${style.side} ${style.top}`}>
                            <div style={{ position: 'relative', top: '-10px' }}>  <a style={{ color: 'white' }} href={`https://backend.local:10010/picture/downloadPPt?id=${people.id}`} download>资料下载</a></div>
                        </span>
                        <span class={`${style.side} ${style.front}`}>
                            <div style={{ position: 'relative', top: '-10px' }}>
                                <a style={{ color: 'white' }} href={`https://backend.local:10010/picture/downloadPPt?id=${people.id}`} download>资料下载</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
