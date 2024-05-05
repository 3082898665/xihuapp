import React, { useState } from 'react'
import style from './index.module.scss'
import Logo from './assets/logo.png'
import Back from './assets/back.jpg'
import { Outlet, useNavigate } from 'react-router-dom'
export default function index() {
    const navigate = useNavigate()
    console.log(1111);
    const navi = [{ name: '大会花絮', path: 'main' },
    {
        name: '大会媒体',
        path: 'meit'
    },
    { name: '', path: '' }, { name: '新闻资讯', path: 'news' }, { name: '影像交流展', path: 'group' }]
    const [select, setselect] = useState(0)
    function change(n, path) {
        navigate(path)
        setselect(n)
    }
    function jump(e) {

    }
    return (
        <div className={style.all}>
            <div className={style.title}>
                {
                    navi.map((item, index) => {
                        return (

                            <div onClick={() => change(index, item.path)} className={style.navigate} key={index} style={{ marginRight: index == 2 ? '140px' : '40px', color: index == select ? ' #767373' : 'black' }}>
                                {
                                    index == 2 ? <>
                                        <img src={Logo} className={style.image} />
                                    </> : <>
                                        {item.name}
                                    </>
                                }

                            </div>
                        )
                    })
                }
            </div>
            <div className={style.back}>
                <img src={Back} className={style.imgpic} />

            </div>

            <div className={style.content}>
                <Outlet />

            </div>
        </div>
    )
}
