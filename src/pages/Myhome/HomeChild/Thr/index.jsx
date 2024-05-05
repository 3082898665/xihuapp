import React, { useState } from 'react'
import style from './index.module.css'
import { fadeInDown, fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import './newset.css'
export default function index() {
    const styles1 = StyleSheet.create({
        fadeInUp: {
            animationName: fadeInUp,
            animationDuration: '1s'
        }
    })
    const [detail, setdetail] = useState([
        {
            title: '格致论道',
            title1: '让“圈外人”关注网络安全，让“冷”科普做到“热”传播',
            content: '5月5日 18:30 “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展。',
            but: '了解详情',
            pic: '/src/assets/actpic/know.webp'
        },
        {
            title: '西湖论剑十周年回顾',
            title1: '十年磨一剑',
            content: '     022年第十届西湖论剑·网络安全大会，十年磨一剑，向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片。',
            but: '了解详情',
            pic: '/src/assets/actpic/str.webp'
        },
        {
            title: '西湖论剑安全特训营',
            title1: '数字安全人才助推器',
            content: '5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”。以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”。',
            but: '了解详情',
            pic: '/src/assets/actpic/safe.webp'
        },
        {
            title: '新品发布 ',
            title1: '最新科研结果',
            content: '新成果是我们不断探索、不断挑战自我的产物。它证明了我们的实力，也展示了我们的潜力。我们期待与大家一起分享这份喜悦，共同见证这个历史性的时刻。',
            but: '了解详情',
            pic: '/src/assets/actpic/new.webp'
        }
    ])
    return (
        <>

            <div className={`${style.scroll} `}>
                <div class={style.contentbox}>
                    {
                        detail.map((item, index) => {
                            return (
                                <div key={item.title}>
                                    <img src={item.pic} className={style.conpic}></img>
                                    <div className={style.confont}>
                                        <div className={style.contit}>
                                            {item.title}
                                        </div>
                                        <div className={style.contit2}>
                                            {item.title1}
                                        </div>
                                        <div className={style.concont}>
                                            {item.content}
                                        </div>

                                        <div aria-hidden="" class="marquee">了解详情</div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}
