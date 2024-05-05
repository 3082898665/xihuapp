import React from 'react'
import style from './index.module.css'
import MyPet from './4.png'
import { Button, message } from "antd";
import { subscribe, publish } from 'pubsub-js'
export default function index() {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        publish('wei', { data: 'yesyes' })
        messageApi.open({
            type: 'success',
            content: '喂养成功',
        });
    };
    return (
        <div className={style.all}>
            {contextHolder}
            <div className={style.left}>

                <div className={style.loong}>
                    <div class={style.card}>
                        <div class={style.cardload}>
                            <img src={MyPet} alt="" className={style.pic} />
                        </div>
                        <div class={style.cardloadextremetitle}>
                            龙龙
                        </div>
                        <div class={style.cardloadextremedescripion}>
                            能力：

                            有几率吐出1折卷
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.rpet}>
                    <img src={MyPet} className={style.rpic} alt="" />
                </div>
                <div className={style.petinfo}>
                    <div className={style.title}>声明:灵宠等级的升级会吐出更加大金额的奖励.不同的灵报所带来的奖励。每喂养灵宠一次，就有机会获得灵宠奖励</div>
                    <div style={{ marginTop: '10px' }}>
                        <div className={style.infode}>名字：龙龙</div>
                        <div className={style.infode}>等级：1&nbsp;&nbsp; <span style={{ fontSize: '13px' }}>(满级2级)</span></div>
                        <div className={style.infode}>已喂养积分：330 &nbsp;&nbsp; <span style={{ fontSize: '13px' }}>(下一等级需要330)</span></div>
                        <div style={{ height: '40vh' }}></div>
                        <div><Button onClick={success} style={{ margin: '10px' }}>喂养</Button><Button>上场</Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
