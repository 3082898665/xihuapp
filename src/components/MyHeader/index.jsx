import React, { useState } from 'react'
import './myheader.css'
import { fadeIn, fadeInLeft, fadeInDown } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'
import { Divider } from 'antd';
import Act from '../../assets/activity.png'
import Open from '../../assets/openm.png'
import Close from '../../assets/closem.png'
import { useNavigate } from 'react-router-dom'
export default function index() {
    //动画
    const styles = StyleSheet.create({
        fadeInDown: {
            animationName: fadeInDown,
            animationDuration: '1s'
        }
    })
    const [navcss, setcss] = useState('navbar')
    const [dhc, setdhc] = useState('yes')
    const [ulc, setulc] = useState('yes')
    function changenav() {
        if (navcss == 'navbar') {
            setcss('navbaro')
            setdhc('nno')
            const timer = setInterval(() => {
                setulc('no')
                clearInterval(timer)
            }, 300);
        } else {
            setdhc('yes')

            const timer = setInterval(() => {
                setcss('navbar')
                setulc('yes')
                clearInterval(timer)
            }, 300);

        }
    }
    const navigate = useNavigate()
    function jump(path) {
        changenav()
        navigate(path)
    }
    return (
        <div className={navcss} >
            <img src={Act} className='actpic' /> <input type="checkbox" onClick={changenav} className={navcss == 'navbar' ? 'dhcon' : 'dhcono'} /><img src={navcss == 'navbar' ? Close : Open} className={navcss == 'navbar' ? 'gomenu' : 'gomenuo'}></img>
            {/* <span></span> <span></span> */}

            <ul className={ulc == 'yes' ? 'dh' : 'dho'}
            // style={{ display: navcss == 'navbar' ? 'none' : '' }}
            >
                {/* css(styles.fadeInDown) */}
                <li >
                    <div  >
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `} onClick={() => jump('/myact/allist/all')}>
                            大会活动详情
                        </div>

                    </div>

                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} onClick={() => jump('/myact/allist/:all')}>
                            活动信息
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} onClick={() => jump('/myact/allist/all')}>
                            参与详情
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} onClick={() => jump('/myact/allist/all/:bao')} >
                            活动报名
                        </div>

                    </div>
                </li>
                <li >
                    <div  >
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `} onClick={() => jump('/exhibitor')}>
                            展商展览详情
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} >
                            展商详情
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `}  >
                            展商产品
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `}  >
                            视频切片
                        </div>

                    </div>
                </li>
                <li >
                    <div  >
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `} onClick={() => jump('/newproduct/home')}>
                            成果展览信息
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} >
                            新星产品
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `}  >
                            创新成果
                        </div>

                    </div>

                </li>
                <li >
                    <div  >
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `} onClick={() => jump('/finepic/main')}>
                            信息交汇中心
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `} >
                            新闻花絮
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `}  >
                            精彩一刻
                        </div>

                    </div>
                    <div className='mback'>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mitem `}  >
                            趣味竞赛
                        </div>

                    </div>
                </li>
                <li >
                    <div onClick={() => jump('/centerpeo/message')}>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `} >
                            个人资讯中心
                        </div>

                    </div>
                    <div onClick={() => jump('/guest')}>
                        <div className={dhc == 'yes' ? 'blackb' : 'blackbo'}></div>
                        <div className={`mtitle `}>
                            嘉宾详细信息
                        </div>

                    </div>
                </li>
            </ul>

        </div>
    )
}
