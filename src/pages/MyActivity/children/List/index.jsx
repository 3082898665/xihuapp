import React, { useEffect, useState } from 'react'
import MyList from '../../ActivityLists/index'
import style from './index.module.css'
import { Carousel } from 'antd';
import T1 from './assets/t1.webp'
import T2 from './assets/t2.jpg'
import T3 from './assets/t3.png'
import Allact from '../../../../assets/actpic/allact.png'
import Header from '../../../../assets/header.jpg'
import Countnew from '../../ActivityLists/Counternew'
import Answery from '../../ActivityLists/Answer'
import Hotanswer from '../../ActivityLists/Hotact'
import Hotpic from '../../../../assets/actpic/hotpic.png'
import Cat from '../../../../assets/cat.gif'
import Openeye from '../../../../assets/actpic/openeye.png'
import Closeeye from '../../../../assets/actpic/closeeye.png'
import Newinfo from '../../../../assets/newinfo.gif'
import Alllists from '../../../../assets/actpic/alllists.gif'
import Test1 from './assets/t1.jpeg'
import Test2 from './assets/t2.jpeg'
import { getacttall, getfast } from '../../../../../request/api'
import { getlivelist } from '../../../../../until/api'
import axios from 'axios';
export default function index() {
    const piclist = [
        {
            name: '订阅',
            path: '/src/assets/actpic/我的订阅.png'
        }, {
            name: '活动参加',
            path: '/src/assets/actpic/已参加活动.png'
        }, {
            name: '活动报名',
            path: '/src/assets/actpic/报名活动.png'
        }
    ]
    const testlist = [
        {

            pic: Test1,
            name: 'AI算力产业大会--（广东深圳）',
            content: '中国已经成为全球电子信息产业最重要的研发基地、生产基地和消费高地，深圳已经形成世界级的电子信息产业集群。如何抓住推进“Ai算力与数据存储、发展进程中的机遇，加快建设粤港澳大湾区和支持深圳建设中国特色社会主义先行示范区，2024年4月9日-11日在深圳将举办第十二届中国电子信息博览会，其中设:信息技术创新论坛、数据要素论坛、数据存储论坛、人工智能计算论坛、数据中心论坛等。作为国内首屈一指的电子信息产业博览会，2024将集中展示新一代信息技术、大数据、存储、数据中心、AI计算、隐私计算等产业最新发展成就、促进产业核心技术突破、引领信息技术产业的供给侧改革，推进行业发展',
            size: '大会详情',
            sn: 0
        },
    ]
    const [picclass, setpic] = useState(Closeeye)
    function hovers() {
        setpic(Openeye)
    }
    const [livelist, setlive] = useState([])
    const talklist = [
        '西湖论剑数字安全大会是一个汇聚智慧、共享知识的盛会，它让我感受到了数字安全行业的凝聚力和向心力，也让我对这个行业充满了信心和期待。',
        '通过参加西湖论剑数字安全大会，我深刻感受到了数字安全领域的快速发展和变革，也对自己未来的职业发展有了更明确的规划。',
        '西湖论剑数字安全大会不仅是一个交流学习的平台，更是一个展示数字安全最新技术和应用的窗口，让我看到了行业的最新动态。',
        '西湖论剑数字安全大会的组织非常到位，会场布置得既专业又舒适，工作人员的服务态度也非常好，让整个活动更加顺利。',
        '大会的互动环节设计得非常好，不仅有机会与专家面对面交流，还能结识到来自全国各地的同行，大家共同探讨数字安全的未来发展趋势。',
        '这次大会的议题设置非常全面，从网络安全到数据隐私，从云计算到物联网安全，几乎涵盖了数字安全的所有方面，让我受益匪浅。',
        '西湖论剑数字安全大会真是让人眼界大开，不仅汇聚了众多行业内的顶尖专家，还探讨了当前数字安全领域的最前沿话题，非常具有前瞻性。',
        ' 西湖论剑的演讲嘉宾都是业内的佼佼者，他们的分享既有深度又有广度，让我对数字安全有了更深刻的理解。'
    ]
    const [talks, settalk] = useState([])
    const [actlist, setlist] = useState()
    const [showfast, setfastw] = useState(false)
    useEffect(() => {
        getfast().then(res => {
            console.log(res.data)
            settalk(res.data.data)
        })
    }, [showfast])
    useEffect(() => {
        getlivelist().then(res => {
            console.log(res.data.data)
            setlive(res.data.data)
        })

        localStorage.setItem('sendtype', 2)
        getacttall().then(res => {
            let list = res.data.data
            for (let i = 0; i < list.length; i++) {
                if (list[i].type == '大会直播回放') {
                    list[i].sn = 2
                }
                else if (list[i].type == '训练营报名') {
                    list[i].sn = 0
                }
                else if (list[i].type == '大会直播') {
                    list[i].sn = 1
                }
                list = list.filter(item => item.type != '线下大会')
                setlist(list)

            }
        })
    }, [])
    return (
        <div className={style.actcontent}>
            <div className={style.actleft}>
                <div className={style.newinfo}>
                    <div className={style.nitit}>
                        <div className={style.boxnew}> 最新资讯

                            <img src={Newinfo} className={style.newinfos} />
                        </div>


                    </div>
                    <div className={style.scorllfont}>
                        <div className={style.allscroll} style={{ '--t': '30s' }}>

                            <div>超级用户唐权发表了一条快报，大家快来查看</div>
                        </div>

                    </div>
                </div>

                <div className={style.actlpic}>
                    <Carousel autoplay>
                        <div>
                            <img src={T1} className={style.lbp}></img>
                        </div>
                        <div>
                            <img src={T2} className={style.lbp}></img>
                        </div>
                        <div>
                            <img src={T3} className={style.lbp}></img>
                        </div>
                        <div>
                            <img src={T3} className={style.lbp}></img>
                        </div>
                    </Carousel>

                </div>
                <div className={style.acttitle}>
                    <img src={Allact} style={{ width: '130px' }}></img>
                    {/* <img src={Alllists} style={{ width: '80px' }} /> */}
                </div>
                <div className={style.titdiv}></div>
                <div className={style.actlists}>
                    {actlist ? <>
                        {
                            actlist.map((item, index) => {
                                return (
                                    <>
                                        <MyList key={index} name={item.activityName} content={item.content} pic={item.cover} during={item.start} time={item.end} size={item.type} />
                                        <div className={style.listdiv}></div>
                                    </>

                                )
                            })
                        }
                        {
                            livelist.map((item, index) => {
                                return (
                                    <>
                                        <MyList key={index} name={item.liveName} content={item.description} pic={item.liveCover} during={item.startTime} time={item.endTime} size={item.status == 1 ? '大会直播' : '直播回放'} />
                                        <div className={style.listdiv}></div>
                                    </>

                                )
                            })
                        }
                    </> :
                        <div div style={{ position: 'relative', left: '20vw', top: '10vh' }}>
                            <div class="typewriter">
                                <div class="slide"><i></i></div>
                                <div class="paper"></div>
                                <div class="keyboard"></div>
                            </div>
                        </div>


                    }

                </div>
            </div>
            <div className={style.actright}>
                <div className={style.counter}>
                    <div className={style.atv}>
                        <img src={Header} className={style.headerpic}></img>
                    </div>
                    <div className={style.detail}>
                        <div className={style.acc}>3082898665@qq.com</div>
                        <div className={style.piclogo}>
                            {
                                piclist.map((item, index) => {
                                    return (
                                        <div key={item.name} className={style.atcpic}>
                                            <div className={style.pics}>
                                                <img src={item.path} className={style.picsp}></img>
                                            </div>
                                            <div className={style.fonts}>
                                                <span className={style.fontcon}>{item.name}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.lonng}>
                    <img src={picclass} className={style.loogpic} />
                </div>
                <div className={style.news} onMouseEnter={hovers}>
                    <div className={style.newtitle}>
                        <div className={style.newimg}>
                            <div className={style.newfont}>交流速报</div>
                            <div className={style.catbox}>
                                <img src={Cat} className={style.cat}></img>
                            </div>
                        </div>
                    </div>
                    <div className={style.newcon}>

                        {
                            talks && (
                                <>
                                    {
                                        talks.map((item, index) => {
                                            return (
                                                <div key={index} className={style.newlists}>
                                                    <Countnew content={item} />
                                                </div>
                                            )
                                        })
                                    }</>
                            )
                        }


                        <Answery setshow={setfastw} />

                    </div>

                </div>
                <div className={style.hotact}>
                    <div className={style.hottit}>
                        <img className={style.hotpic} src={Hotpic}></img>
                        <div className={style.borbot}>
                            <div className={style.long}></div>
                            <div className={style.shot}></div>
                            <div className={style.long}></div>
                            <div className={style.shot}></div>
                            <div className={style.long}></div>
                            <div className={style.shot}></div>
                            <div className={style.long}></div>
                            <div className={style.shot}></div>
                        </div>
                    </div>
                    {
                        testlist.map((item, index) => {
                            return (
                                <div className={style.newlists} key={index}>
                                    <Hotanswer name={item.name} pic={item.pic} content={item.content} size={item.size} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
