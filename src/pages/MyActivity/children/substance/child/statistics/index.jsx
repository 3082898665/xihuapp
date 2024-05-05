import React from 'react'
import style from './index.module.scss'
import { Progress, Select } from 'antd';
import Allxian from './echart/Allxian'
import Allzhu from './echart/Allzhu';
export default function index() {
    return (
        <div className={style.all}>
            <div className={style.con}>
                <div className={style.first}>
                    <div className={style.title}>
                        名额限定人数
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}> 60</span>  <span className={style.used}>已报名人数：30</span>
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
                        昨日浏览人数
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}>40
                            <span className={style.numbao}>昨日报名人数:10</span>
                        </span>

                        {
                            true && (

                                <div className={style.cir}>
                                    <Progress
                                        type="circle"
                                        status="active"
                                        percent={Number(25)}
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
                        总浏览人数
                    </div>
                    <div className={style.contain}>
                        <span className={style.num}>140
                            <span className={style.numbao}>昨日报名人数:10</span>
                        </span>

                        {
                            true && (

                                <div className={style.cir}>
                                    <Progress
                                        type="circle"
                                        status="active"
                                        percent={Number(9)}
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
        </div>
    )
}
