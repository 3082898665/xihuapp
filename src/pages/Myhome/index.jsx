import React, { useRef, useEffect, useState } from 'react'
import MyHeader from '../../components/MyHeader'
import { fadeInDown, fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import style from './index.module.scss'
import { Carousel, Button, message, Layout } from 'antd';
import First from '../../assets/1.svg'
import Second from '../../assets/4.svg'
import Thr from '../../assets/3.svg'
import Main from '../../assets/Newmain.svg'
import FontM from '../../assets/fontmain.png'
import MyFir from './HomeChild/Fhch'
import Sec from './HomeChild/Secc'
import Thrs from './HomeChild/Thr'
import Mlist from '../Myhome/HomeChild/Secc/SEClist/First'
import MlistR from '../Myhome/HomeChild/Secc/SEClist/sec'
import City from '../../assets/city.png'
import Host from '../../assets/host.png'
import ZB from '../../assets/zb.png'
import Four from '../Myhome/HomeChild/Four'
import Myproduct from '../Myhome/HomeChild/product'
import Mylogo from '../Myhome/HomeChild/Logo'
import Finalwo from '../Myhome/HomeChild/Finalnav'
const { Header, Footer, Sider, Content } = Layout;
export default function index() {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: '登录成功',
        });
    };
    console.log(City)
    const styles = StyleSheet.create({
        fadeInDown: {
            animationName: fadeInDown,
            animationDuration: '1s'
        }
    })
    const styles1 = StyleSheet.create({
        fadeInUp: {
            animationName: fadeInUp,
            animationDuration: '1s'
        }
    })

    const [showComponent, setShowComponent] = useState(false);
    const [showComponent1, setShowComponent1] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    const [act, setact] = useState(false);
    const [showppic, setpic] = useState(false)
    const [logo, setlogo] = useState(false)
    // 滚动事件处理函数
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // 假设我们希望在滚动到500px高度时显示组件
        if (currentScrollY > 300 && currentScrollY < 850) {
            setShowComponent(true);
            console.log(currentScrollY)
        }
        else if (currentScrollY >= 800 && currentScrollY < 1460) {
            console.log(currentScrollY)
            setShowComponent1(true);
        } else if (currentScrollY >= 1460 && currentScrollY < 1860) {
            setShowComponent2(true)
            console.log(currentScrollY)
        } else if (currentScrollY >= 1860 && currentScrollY < 2149) {
            setShowComponent3(true)
            console.log(currentScrollY)
        } else if (currentScrollY >= 2557 && currentScrollY < 3197) {
            setact(true)
            console.log(currentScrollY)
        } else if (currentScrollY >= 3197 && currentScrollY < 3798) {
            setpic(true)
            console.log(currentScrollY)
        } else if (currentScrollY >= 3798) {
            setlogo(true)
            console.log(currentScrollY)
        }
        else {
            console.log(currentScrollY)
        }
    };

    useEffect(() => {
        success()
        // 绑定滚动事件
        window.addEventListener('scroll', handleScroll);

        // 组件卸载时移除事件监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <Layout className={style.botall} >
            {/* <MyHeader /> */}
            {contextHolder}
            <Carousel effect="fade" autoplay>
                <div >
                    <img src={FontM} className={`${style.fontm} ${css(styles.fadeInDown)}`} />
                    <img src={Main} style={{ width: '100vw' }} />
                    <Button type="primary" className={`${style.butm} ${css(styles1.fadeInUp)}`}> 了解大会详情</Button>
                </div>
                <div >
                    <img src={Second} style={{ width: '100vw' }} />
                </div>
                <div >
                    <img src={Thr} style={{ width: '100vw' }} />
                </div>
                <div >
                    <img src={First} style={{ width: '100vw' }} />
                </div>

            </Carousel>

            <MyFir />
            <Sec name='大会新闻' engname='CONFERENCE NEWS' />
            {
                showComponent && (
                    <div>
                        <Mlist picture={City} title='议题更前沿' content=' 大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作.'
                            but=' 查看详情'
                        />
                    </div>



                )
            }
            {
                showComponent1 && (
                    <div style={{ marginTop: '63vh', overflowY: 'hidden' }}>
                        <MlistR picture={Host} title='格物论道' content=' 让“圈外人”关注网络安全，让“冷”科普做到“热”传播。'
                            but=' 了解详情'
                        />
                    </div>

                )
            }
            {
                !showComponent1 && (
                    <div style={{ marginTop: '63vh', overflowY: 'hidden' }} >
                        <div style={{}}></div>
                    </div>

                )
            }
            {
                showComponent2 && (
                    <div style={{ marginTop: '63vh', overflowY: 'hidden' }} >
                        <Mlist picture={ZB} title='线上更精彩' content=' “掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。'
                            but=' 查看详情'
                        />
                    </div>

                )
            }
            {
                !showComponent2 && (
                    <div style={{ marginTop: '63vh', overflowY: 'hidden' }} >
                        <div style={{}}></div>
                    </div>

                )
            }
            <div style={{ height: '800px' }}></div>
            <div className={style.back1}>

            </div>
            <div className={style.back2}>

            </div>
            <div className={style.back3}>

            </div>
            {
                showComponent3 && (
                    <>
                        <div style={{ position: 'relative', top: '-300px' }} className={css(styles1.fadeInUp)}>
                            <Sec name='精彩活动' engname='WONDERFUL ACTIVITIES' />
                        </div>
                        <Thrs />
                    </>
                )
            }
            {!showComponent3 && (
                <div style={{ height: '45vw', width: '99vw' }}></div>
            )}
            {
                act == true ? (<div style={{ position: 'relative', top: '-89vw' }}>
                    <Four />
                </div>) : (<div style={{ position: 'relative', top: '-89vw' }}>
                </div>)
            }
            <div className={style.backleft}></div>
            {
                showppic == true ? <Myproduct></Myproduct> : <div style={{ height: '760px', width: '99vw' }}></div>
            }

            {
                logo == true ? <Mylogo /> : <div style={{ height: '355px', width: '99vw' }}></div>
            }

            {
                logo == true ? <Finalwo /> : <div style={{ height: '90vh', width: '99vw' }}></div>
            }

        </Layout >
    )
}
