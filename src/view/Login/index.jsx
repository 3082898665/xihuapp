import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import WX from './wx.png'
import Header from './header.png'
import { login } from '../../../request/api'
import axios from 'axios'
export default function index() {
    const local = useLocation()
    const navigate = useNavigate()
    const [count, setcount] = useState('')
    const [password, setpass] = useState('')
    // 监听路由变化
    function go() {
        localStorage.removeItem('token')
        localStorage.setItem('sendtype', 1)
        const data = { email: count, password }
        login(data).then(res => {
            if (res.data.code == 1) {
                console.log(res)
                navigate('/myhome')
                localStorage.setItem('token', res.data.data)
            }
        })

    }
    return (
        <div className={style.all}>
            <div class={style.container}>
                <div class={style.heading}>Sign In</div>
                <div action="" class={style.form}>
                    <input required="" class={style.input} type="email" onChange={(e) => setcount(e.target.value)} name="email" id="email" placeholder="Email" />
                    <input required="" class={style.input} type="password" onChange={(e) => setpass(e.target.value)} name="password" id="password" placeholder="Password" />
                    <span class={style.forgotpassword}><a href="#">忘记密码 ?</a></span>
                    <input class={style.loginbutton} type="submit" onClick={go} value="Sign In" />

                </div>
                <div class={style.socialaccountcontainer}>
                    <span class={style.title}>Or Sign in with</span>
                    <div class={style.socialaccounts}>
                        <button class={style.socialbutton}>
                            <img src={WX} className={style.wx} />
                        </button>
                        <button class={style.socialbutton}>
                            <img src={Header} className={style.wx} title='dawdwa' />
                        </button>
                    </div>
                </div>
                <span class={style.agreement}><a href="#">没有账号？进行注册</a></span>
            </div>
        </div>

    )
}
