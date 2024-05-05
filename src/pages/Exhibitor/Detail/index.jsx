import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import Logo from '../assets/logo.png'
import Videot from '../assets/video/Lingyuan.mp4'
import TEXTB from '../assets/t1.jpg'
import Test from './assets/test.png'
import Sum1 from './assets/sum1.jpg'
import Sum2 from './assets/sum2.jpg'
import { fadeInLeft, fadeInUp, slideInDown, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
export default function index() {
    const [color, setcolor] = useState('')
    const [colorb, setcolorb] = useState('')
    const [changecss, setcss] = useState(['850px', '450px', '50vh', '20%']);
    const [winh, setwinh] = useState()
    const styles = StyleSheet.create({
        fadeInUp: {
            animationName: fadeInUp,
            animationDuration: '1s'
        },
        fadeInLeft: {
            animationName: fadeInLeft,
            animationDuration: '1s'
        },
        fadeIn: {
            nimationName: fadeIn,
            animationDuration: '1s'
        }
    })
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setwinh(currentScrollY)
        console.log(currentScrollY)
    }
    useEffect(() => {
        console.log(111)
        setcss(['100vw', '130vh', '0', '0'])

        // 绑定滚动事件
        window.addEventListener('scroll', handleScroll);

        // 组件卸载时移除事件监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [])
    function test() {
        setcolor('black')
    }
    const productlist = [
        {
            name: '“天阔”系列终端',
            time: '2023-04-07 中科可控终端事业群'
        }, {
            name: '“海光x86架构高端通用处理器',
            time: '2023-05-07 中科可控终端事业群'
        },
        {
            name: 'W3330H0工作站',
            time: '2023-04-07 中科可控终端事业群'
        },
        {
            name: 'M3530H4A 一体机',
            time: '2023-04-07 中科可控终端事业群'
        }
    ]
    function jumpnew() {
        window.scrollTo(0, 650);
    }
    function jumpnew1() {
        window.scrollTo(0, 1000);
    }
    return (
        <div className={style.all}
            onMouseEnter={test}
        >
            <div className={style.title} style={{ backgroundColor: color, transition: 'all 1s' }}>
                <div className={style.main}>
                    <img src={Logo} alt="" className={style.logo} />
                </div>
                <div style={{ width: '50%' }}></div>
                <div className={style.tdetail} onClick={jumpnew}>展商新闻</div>
                <div className={style.tdetail} onClick={jumpnew1}>展商信息</div>
                <div className={style.tdetail}>展商风采</div>

                <div className={style.tdetail} >展商产品</div>
            </div>
            <div className={style.content} >
                <div className={style.vidbox}>
                    <video className={style.video} controls style={{ width: changecss[0], height: changecss[1], top: changecss[2], left: changecss[3] }}>
                        <source src={Videot} type="video/mp4" />
                    </video>
                </div>

                <div className={style.exhibitor}>
                    <div className={style.exl}>
                        <div className={style.jinfo}>
                            -EXHIBITOR
                        </div>
                        <div className={style.exname}>
                            中科可控信息产业有限公司
                        </div>
                        <div className={style.logos}>
                            <img src={Test} className={style.pic} />
                        </div>
                        <div className={style.post}>
                            <button className={style.button}>
                                <span>海报下载</span>
                            </button>
                        </div>
                    </div>

                    <div className={style.exr}>
                        <div className={style.jinfo}>
                            - 展商产品 Product
                        </div>
                        {
                            productlist.map((item, index) => {
                                return (
                                    <div key={index} className={`${style.probox} ${css(styles.fadeInUp)}`} style={{ display: winh > 215 ? '' : 'none ' }}>

                                        <div className={style.rcont}>
                                            <div className={style.rlc}>
                                                {item.name}
                                            </div>
                                            <div className={style.rrc}>
                                                {item.time}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className={style.news}>
                    <div className={style.newstit}>
                        新闻资讯
                    </div>
                    {
                        [1, 2, 3].map((item, index) => {
                            return (
                                <div className={style.newcon} key={index}>
                                    <div className={style.allfont}>
                                        <div className={style.jinfo}>
                                            - 新闻
                                        </div>
                                        {
                                            winh < 570 + (index * 611) && (
                                                <div style={{ height: '350px' }}></div>
                                            )
                                        }
                                        <div className={`${style.afw} ${css(styles.fadeInLeft)}`} style={{ display: winh > 570 + (index * 611) ? '' : 'none' }} >
                                            广州首个数据安全峰会 2022云山论剑成功举办-----7月8日，“2022·云山论剑”广州数据安全峰会在广州市白云区举行。邀请到中国工程院院士方滨兴、沈昌祥等数据领域顶尖专家学者及知名企业代表
                                        </div>

                                    </div>
                                    {
                                        winh < 990 + (index * 611) && (
                                            <div style={{ height: '134px' }}></div>
                                        )
                                    }
                                    <div className={`${style.doublepic} ${css(styles.fadeInUp)}`} style={{ display: winh > 990 + (index * 611) ? '' : 'none' }}>
                                        <div >
                                            <img src={Sum1} className={style.botpic} />
                                        </div>
                                        <div style={{ width: '39%' }}></div>
                                        <div className={style.botfont}>
                                            此次发布的Suma“天阔”系列终端包含旗舰级工作站、轻量级工作站、云终端、桌面一体机等丰富产品，可实现从日常办公到3D制图、模拟仿真、工业制造、科学计算等领域的全场景覆盖。

                                            其中，旗舰级工作站让人眼前一亮。中科可控终端事业群副总裁杨磊将此次旗舰级工作站的特点概况为：“强劲性能、高效专业、机塔互换、卓越散热”。
                                        </div>
                                        <div>
                                            <img src={Sum2} className={style.botpic} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}
