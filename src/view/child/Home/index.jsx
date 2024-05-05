import React from 'react'
import style from './index.module.scss'
import { Progress, Select } from 'antd';
import Allxian from './echart/Allxian'
import Allzhu from './echart/Allzhu';
import Fsize from './echart/Fsize'
import N1 from './gold.png'
import N2 from './sec.png'
import N3 from './oldt.png'
export default function index() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const options = [
        {
            value: '0',
            label: '全部活动',
        },
        {
            value: '1',
            label: '大会训练营',
        },
        {
            value: '2',
            label: '大会直播',
        },
        {
            value: '3',
            label: '直播回放',
        }, {

            value: '4',
            label: '全部活动',

        }
    ]
    const rank = [{
        name: '西湖论剑十一年十一个数字观看',
        creator1: '90'
    },
    {
        name: '西湖大会现场主持',
        creator1: '90'
    },
    {
        name: '十一周年精华特刊',
        creator1: '90'
    },]
    return (
        <div className={style.all}>
            <div className={style.con}>
                <div className={style.first}>
                    <div className={style.title}>
                        用户总人数
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}> 6000</span>  <span className={style.used}>昨日新填用户人数：200</span>
                        <div style={{ margin: '1rem', marginTop: '-0px' }}>
                            <Progress
                                percent={Math.floor(20 * 100 / 60)}
                                status="active"
                                strokeColor={{
                                    from: '#FFFFFF',
                                    to: '#2980B9',
                                }} />
                        </div>

                    </div>
                </div>
                <div className={style.first}>
                    <div className={style.title}>
                        展商数量
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}>40
                            <span className={style.numbao}>下载展商海报数:30</span>
                        </span>

                        {
                            true && (

                                <div className={style.cir}>
                                    <Progress
                                        type="circle"
                                        status="active"
                                        percent={Number(90)}
                                        size={83}
                                        strokeColor={{
                                            '0%': '#FFFFFF',
                                            '100%': '#2980B9',

                                        }}
                                    />

                                </div>
                            )
                        }

                    </div>
                </div>
                <div className={style.first}>
                    <div className={style.title}>
                        大会活动数量
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}>20
                            <span className={style.numbao}>用户参加的活动数:15</span>
                        </span>

                        {
                            true && (

                                <div className={style.cir}>
                                    <Progress
                                        type="circle"
                                        status="active"
                                        percent={Number(70)}
                                        size={83}
                                        strokeColor={{
                                            '0%': '#FFFFFF',
                                            '100%': '#2980B9',

                                        }}
                                    />

                                </div>
                            )
                        }

                    </div>
                </div>
                <div className={style.xian} style={{ marginTop: '10px' }}>
                    <Allxian maxs={[]} />
                </div>
                <div className={style.xian1}>
                    <Allzhu />
                </div>
            </div>
            <div className={style.conr}>
                <div className={style.rt}>
                    <div className={style.title}>
                        类型选择：
                        <Select
                            defaultValue="0"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={options}
                        />

                    </div>
                    <Fsize />
                </div>
                <div className={style.rb}>
                    <div className={style.rank} >
                        <div className={style.title}>
                            活动参与度排名
                        </div>
                        <div className={style.rpart}>
                            <img src={N1} alt='null' className={style.pic}></img>
                            <div className={style.sname}>{rank[0].name}</div>
                            <div className={style.sname}>{rank[0].creator1}</div>
                        </div>
                        <div className={style.rpart}>
                            <img src={N2} alt='null' className={style.pic}></img>
                            <div className={style.sname}>{rank[1].name}</div>
                            <div className={style.sname}>{rank[1].creator1}</div>
                        </div>
                        <div className={style.rpart}>
                            <img src={N3} alt='null' className={style.pic}></img>
                            <div className={style.sname}>{rank[2].name}</div>
                            <div className={style.sname}>{rank[2].creator1}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
