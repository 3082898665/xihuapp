import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.scss'
import T1 from './assets/t1.png'
import T2 from './assets/t2.png'
import T3 from './assets/t3.png'
import T4 from './assets/t4.png'
import Myhome from './child/Home'
export default function index() {
    const lists = [T1, T2, T3, T4]
    const [picindex, setpic] = useState(0)
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        console.log(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {

        }
    }, [])
    return (
        <div className={style.all}>
            <div className={style.title}>
                <div className={style.logobox}>
                    大会成果
                </div>
                <div className={style.search}>
                    <div class={style.inputcontainer}>
                        <input type="text" name="text" className={style.input} placeholder="search..." />
                        <span className={style.icon}>
                            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                            </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                                </g><g id="SVGRepo_iconCarrier">
                                    <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </span>
                    </div>
                </div>
                <div className={style.showpic}>
                    <img src={lists[picindex]} className={style.logopic} />
                </div>

            </div >
            < div className={style.content} >
                <Myhome />
            </ div>
        </div >
    )
}
