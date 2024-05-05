import React, { useState } from 'react'
import style from './index.module.css'
import Test from './test.webp'
import { Modal } from 'antd';
import T1 from '../assets/m1.jpg'
import T2 from '../assets/m2.jpg'
export default function index() {
    const [modal1Open, setModal1Open] = useState(false);
    const goods = [
        {
            pic: T1,
            name: '大会周边智能保温杯350ml',
            jif: '388'
        }, {
            pic: T2,
            name: '活动周边玻璃喝水杯子1000ml',
            jif: '288'
        }
    ]
    return (
        <div className={style.all}>
            {
                goods.map((item, index) => {
                    return (
                        <div class={style.sectionoursolution} key={item}>
                            <div class={style.row}>
                                <div >
                                    <div class={style.oursolutioncategory}>
                                        <div class={style.solutioncardsbox}>
                                            <div class={style.solutioncard}>
                                                <div class={style.hovercolorbubble}></div>
                                                <div class={style.sotopicon}>
                                                    <img src={item.pic} className={style.picimg} />
                                                </div>

                                                <div class={style.soludescription}>
                                                    <div className={style.mname}>{item.name}</div>
                                                    <div className={style.jif}>积分：{item.jif}
                                                        <br />
                                                        <span style={{ color: 'rgb(247, 86, 98)' }}>
                                                            {/* |(使用1折卡) 302 */}
                                                        </span> </div>
                                                    <div>
                                                        <button class={style.readmorebtn} type="button" onClick={() => setModal1Open(true)}>换购</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Modal
                title="积分换购"
                style={{
                    top: 20,
                }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <div>
                    你将购买xxx门票点击确认进行购买
                </div>
            </Modal>
        </div>
    )
}
