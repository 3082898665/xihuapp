import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
// import style from './test.css'
import { Carousel } from 'antd';
import T2 from '../../assets/p2.jpg'
import T3 from '../../assets/p3.jpg'
import T4 from '../../assets/p4.jpg'
import T5 from '../../assets/p5.jpg'
import T6 from '../../assets/p6.jpg'
import Leftcard from './childpro/left'
import Rightcard from './childpro/right'
import {
    DownOutlined
} from '@ant-design/icons';
import { getproduct } from '../../../../../request/api'
export default function index() {
    const [isVisible, setIsVisible] = useState(false);
    const [leftlist, setlist] = useState([])
    const [rightlist, setrlist] = useState([])
    const listenToScroll = () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const heightToShowAt = 200; // 滚动到200px时显示元素
        console.log(winScroll)
        if (winScroll > heightToShowAt) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        // window.addEventListener('scroll', listenToScroll);
        localStorage.setItem('sendtype', 3)
        getproduct().then(res => {
            const newdata = res.data.data
            setlist(newdata.rachievement1)
            setrlist(newdata.rachievement2)
        })

    }, []);
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[currentDate.getMonth()];
    var day = currentDate.getDate();
    const piclist = [T2, T3, T4, T5, T6]
    return (
        <div className={style.all}>
            <div className={style.xc}>
                <div style={{ display: 'flex' }}>


                    <div className={style.lfont}>
                        <div className={style.sharebox}>
                            <div className={style.data}>
                                <div className={style.dnum}>
                                    {day}
                                </div>
                                <span className={style.mnum}>
                                    {month}
                                </span>
                                <br />
                                <span className={style.dayinfo}>
                                    XI hu Conference
                                </span>

                            </div>
                            <div className={style.share}>

                                <button className={style.button}>
                                    <span>Share</span>
                                    <div className={style.container}>
                                        <svg t="1711076698793" className="icon" style={{ marginTop: '20px' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2857" width="20" height="20"><path d="M692.699238 336.887706c11.619123 0 23.117414 0.831898 34.517504 2.108006C696.19497 194.549965 541.769728 87.227597 365.488742 87.227597 168.405197 87.227597 6.977229 221.535539 6.977229 392.107418c0 98.493235 53.707366 179.306803 143.459123 242.033357l-35.857101 107.840102 125.329408-62.837146c44.84311 8.861798 80.827085 18.002022 125.578138 18.002022 11.250688 0 22.40215-0.561766 33.469645-1.428582-7.001702-23.95351-11.06647-49.054208-11.06647-75.120947C387.891917 463.976243 522.3936 336.887706 692.699238 336.887706zM497.405542 232.406118c30.611456 0 55.425536 24.815206 55.425536 55.427379s-24.814182 55.426355-55.425536 55.426355c-30.613504 0-55.427584-24.815206-55.427584-55.426355S466.794086 232.406118 497.405542 232.406118zM246.567526 344.377344c-30.611456 0-55.427584-24.815206-55.427584-55.426355 0-30.611149 24.81623-55.426355 55.427584-55.426355 30.613504 0 55.428608 24.815206 55.428608 55.426355C301.996134 319.561114 277.18103 344.377344 246.567526 344.377344zM1017.379942 617.455821c0-143.330406-143.423283-260.165325-304.515686-260.165325-170.58089 0-304.924979 116.834918-304.924979 260.165325 0 143.57801 134.34409 260.158157 304.924979 260.158157 35.697459 0 71.712154-9.0112 107.569254-17.99895l98.340659 53.861683-26.969293-89.592525C963.769856 769.897677 1017.379942 698.309222 1017.379942 617.455821zM619.184947 577.275699c-21.799322 0-39.469466-17.673523-39.469466-39.471002 0-21.799526 17.671168-39.468954 39.469466-39.468954s39.469466 17.670451 39.469466 39.468954C658.656563 559.6032 640.983347 577.275699 619.184947 577.275699zM816.270541 579.514675c-21.80137 0-39.47049-17.672499-39.47049-39.468954 0-21.80055 17.670144-39.468954 39.47049-39.468954 21.798298 0 39.469466 17.669427 39.469466 39.468954C855.741133 561.842176 838.068941 579.514675 816.270541 579.514675z" fill="#2c2c2c" p-id="2858"></path></svg>
                                        <svg t="1711076786213" className="icon" style={{ marginTop: '20px' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3930" width="20" height="20"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="3931" fill="#2c2c2c"></path></svg>
                                        <svg t="1711076818308" className="icon" style={{ marginTop: '20px' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5016" width="20" height="20"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="5017" fill="#2c2c2c"></path></svg>

                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className={style.divid}>

                        </div>
                        <div className={style.myinfo}>
                            <div className={style.infotit}>
                                website
                            </div>
                            <div className={style.infoname}>
                                New Achievement of West Lake Dala
                            </div>
                            <div className={style.infodetail}>
                                引领创新潮流，我们荣幸推出全新产品——集科技与美观于一身，颠覆传统，为您带来前所未有的体验。这款产品，不仅代表了我们技术的飞跃，更预示着行业的新篇章。
                            </div>
                        </div>
                        <div className={style.divid}>

                        </div>
                    </div>
                    <div className={style.rpic} >
                        <Carousel autoplay dotPosition='left'>
                            {
                                piclist.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item} className={style.capic} />
                                        </div>
                                    )
                                })
                            }

                        </Carousel>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={style.showhost}>
                        <div className={style.spon}>Sponsor</div>
                        <div className={style.west}> The West lake Swords</div>
                    </div>
                    <div className={style.pronum}>
                        <div className={style.numtop}>The new results are brief:</div>
                        <div className={style.numbot}>
                            <div className={style.numbl}>
                                <div className={style.numreal}>NUMBER:</div>
                                <div className={style.number}>10</div>
                            </div>
                            <div className={style.numbr}>
                                <div className={style.numreal}>USER:</div>
                                <div className={style.number}>100</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.lookbut}>

                    </div>
                </div>
            </div>
            <div className={style.newduct} onClick={() => { console.log(window.screenY) }}>
                <div className={style.whiteblock}>
                    <DownOutlined className={style.down} />
                </div>
                <div className={style.lun}>
                    <div className={style.lunleft}>
                        {
                            leftlist.map((item, index) => {
                                return (
                                    <div className={style.unlcon} key={index}><Leftcard content={item.content} days={item.days} name={item.name} picture={item.picture} peoplenum={item.peopleNum} starttime={item.startTime} /></div>
                                )
                            })
                        }

                    </div>
                    <div className={style.lundata}>
                        <div className={style.dataleft}>
                            {
                                [19, 17, 15, 13, 11].map((item, index) => {
                                    return (
                                        <div key={index} className={style.terig} style={{ height: '600px' }}>
                                            <span className={style.spdata}>
                                                <div>{item}</div>
                                                <div className={style.datam}>MATCH</div>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={style.dataright}>
                            <div className={style.terig} >
                                <span className={style.spdata} style={{ top: '73%' }}>
                                    <div>21</div>
                                    <div className={style.datam}>MATCH</div>
                                </span>
                            </div>
                            {
                                [19, 17, 15, 13, 11].map((item, index) => {
                                    return (
                                        <div key={index} className={style.terig} style={{ height: '650px' }}>
                                            <span className={style.spdata}>
                                                <div>{item}</div>
                                                <div className={style.datam}>MATCH</div>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.lunright}>
                        {
                            rightlist.length > 0 && (
                                <div className={style.unlcon} style={{ position: 'relative', marginTop: '12vh' }}><Rightcard content={rightlist[0].content} days={rightlist[0].days} name={rightlist[0].name} picture={rightlist[0].picture} peoplenum={rightlist[0].peopleNum} starttime={rightlist[0].startTime} /></div>
                            )
                        }

                        {
                            rightlist.slice(1).map((item, index) => {
                                return (
                                    <div className={style.unlcon} key={index}><Rightcard content={item.content} days={item.days} name={item.name} picture={item.picture} peoplenum={item.peopleNum} starttime={item.startTime} /></div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
