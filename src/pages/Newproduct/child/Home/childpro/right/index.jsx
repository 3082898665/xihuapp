import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import Test from '../../../../assets/p5.jpg'
import { Button, Modal } from 'antd';
export default function index({ content, days, name, peoplenum, picture, starttime }) {
    const [modal1Open, setModal1Open] = useState(false);
    return (
        <div className={style.all}>
            <div onClick={() => setModal1Open(true)}>
                <div className={style.top}>
                    <div className={style.pic}>
                        <img src={picture} className={style.picimg} />
                    </div>
                    <div className={style.cacu}>
                        <div style={{ height: '70px' }}>
                            <div className={style.wn}>{peoplenum}</div>
                            <div className={style.wf}>Watch</div>
                        </div>
                        <div style={{ height: '40px' }}>
                            <div className={style.wn}>{days}</div>
                            <div className={style.wf}>Day</div>
                        </div>
                    </div>

                </div>
                <div className={style.detail}>
                    <div className={style.detailt}>
                        <div className={style.xih}>WEST LAKE GALA</div>
                        <div style={{ width: '40%' }}></div>
                        <div className={style.xih}> WEBSIT</div>
                    </div>
                    <div className={style.detailb}>
                        <div className={style.dbt}>{name}</div>
                        <div className={style.dbb}>{content}</div>
                    </div>
                </div>
            </div>
            <Modal
                title="产品介绍"
                style={{
                    top: 20,
                }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <div className={style.proname}>{name}</div>
                <div className={style.procon}>{content}</div>
            </Modal>
        </div>
    )
}
