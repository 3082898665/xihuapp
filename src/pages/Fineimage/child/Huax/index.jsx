import React from 'react'
import style from './index.module.scss'
import {
    CalendarOutlined,
    LinkOutlined,
    EnvironmentOutlined,
    FieldTimeOutlined,
    MessageOutlined
} from '@ant-design/icons';
import M1 from '../../assets/main1.jpg'
import M2 from '../../assets/main2.jpg'
import M3 from '../../assets/main3.jpg'
import R1 from '../../assets/r1.png'
import R2 from '../../assets/r2.jpg'
import R3 from '../../assets/r3.png'
import Test1 from '../../assets/test1.jpg'
import Test2 from '../../assets/test2.jpeg'
import Test3 from '../../assets/test3.jpg'
import Test4 from '../../assets/h1.png'
import Test5 from '../../assets/h2.png'
import Test6 from '../../assets/h3.png'
export default function index() {
    const rightl = [R1, R2, R3]
    const news = [
        {
            pic: Test1,
            content: 'APEC数字人才培育研讨会在广州举行----中新网广东新闻11月22日电 (记者 许青青)由国家工业信息安全发展研究中心主办，国家工信安全中心－广州大学数字经济创新发展研究院特别支持，广州大学承办的亚太经合组织(APEC)数字人才培育研讨会近日在广州举行。马来西亚、泰国、日本等APEC经济代表应邀参会。在主旨演讲环节，马来西亚通信和多媒体委员会人力资源战略总监Haryati Suradi介绍了马来西亚赋能人力技术，打造数字化未来的实践，日本野村综合研究所未来创发中心中国创新研究负责人、资深专家李智慧分享日本数字人才培养的做法与启示。'
        }, {
            pic: Test2,
            content: '联合国大会通过首个有关AI的决议草案---IT之家 3 月 22 日消息，据央视新闻消息，当地时间 3 月 21 日，联合国大会投票通过了第一个有关人工智能（AI）的决议草案，以确保这项新技术能够惠及所有国家、尊重人权并且是“安全、可靠和值得信赖的”技术。据了解，这项决议草案旨在消除发达国家和发展中国家之间的数字鸿沟，确保它们在人工智能讨论中处于同等地位，还旨在确保发展中国家拥有利用人工智能的技术和能力。决议草案承认了人工智能发展和使用的加速进程，并强调“迫切需要就安全、可靠和值得信赖的人工智能系统达成全球共识”。决议还承认“人工智能系统的治理是一个不断发展的领域”，需要进一步讨论可能的治理方法。'
        }, {
            pic: Test3,
            content: '旨在消除数字鸿沟--据媒体报道，联合国大会投票通过了第一个有关人工智能（AI）的决议草案，以确保这项新技术能够惠及所有国家、尊重人权并且是“安全、可靠和值得信赖的”技术。据了解，这项决议草案旨在消除发达国家和发展中国家之间的数字鸿沟，确保它们在人工智能讨论中处于同等地位，还旨在确保发展中国家拥有利用人工智能的技术和能力。决议草案承认了人工智能发展和使用的加速进程，并强调“迫切需要就安全、可靠和值得信赖的人工智能系统达成全球共识”。决议还承认“人工智能系统的治理是一个不断发展的领域”，需要进一步讨论可能的治理方法。'
        }
    ]
    const news1 = [
        {
            pic: Test4,
            content: '主持人演讲，说大会的主题以及感谢大会的支持伙伴，宣布大会开始'
        },
        {
            pic: Test5,
            content: '说明了建立人才评价体系的作用。说明了人才评价的方式和评价内容'
        },
        {
            pic: Test6,
            content: '举例了国外的网络安全的活动与组织，说明网络安全人员能力认证体系发展的重要性'
        }
    ]
    return (
        <div className={style.all}>
            <div className={style.upcoming}>
                <div className={style.title}>
                    近期热点事件
                </div>
                <div className={style.upthing}>
                    <div className={style.data}>
                        <div className={style.databox}>
                            <div className={style.number}>28</div>
                            <div className={style.month}>APRIL</div>
                        </div>

                    </div>
                    <div className={style.updatas}>
                        <div className={style.uptitle}>西湖论剑大会|West Lake sword Conference</div>
                        <div className={style.thing}>
                            <CalendarOutlined className={style.icon} />
                            2024 5月28号|Thursday, March 28, 2024
                        </div>
                        <div className={style.thing}>
                            <FieldTimeOutlined className={style.icon} />
                            7:00pm-10:00pm
                        </div>
                        <div className={style.thing}>
                            <EnvironmentOutlined className={style.icon} />
                            浙江省杭州市西湖区|Xihu District, Hangzhou City, Zhejiang Province
                        </div>
                        <div className={style.thing}>
                            <LinkOutlined className={style.icon} />
                            链接|LinkOutlined
                        </div>
                        <div className={style.thing}>
                            <MessageOutlined className={style.icon} />
                            此次大会主要介绍大会开幕式和接下来的活动
                        </div>
                    </div>

                </div>

            </div>
            <div className={style.news}>
                <div className={style.newstit}>
                    精彩花絮内容
                </div>
                <div className={style.conbox}>
                    <div className={style.conleft}>
                        {
                            news.map((item, index) => {
                                return (
                                    <div class={style.card} key={item}>
                                        <img src={item.pic} className={style.picimg} />
                                        <div class={style.cardcontent}>
                                            <p class={style.cardtitle}></p>
                                            <p class={style.carddescription}>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className={style.conright}>
                        {
                            news1.map((item, index) => {
                                return (
                                    <div key={item} class={style.card} style={{ height: '300px' }}>
                                        <img src={item.pic} className={style.picimg} />
                                        <div class={style.cardcontent}>
                                            <p class={style.cardtitle}></p>
                                            <p class={style.carddescription}>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
