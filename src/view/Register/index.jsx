import React from 'react'
import style from './index.module.css'
export default function index() {
    return (
        <div className={style.all}>
            <div class={style.form}>
                <p class={style.title}>Register </p>
                <p class={style.message}>Signup now and get full access to our app. </p>
                <div class={style.flex}>
                    <label>
                        <input required="" placeholder="" type="text" class={style.input} />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" class={style.input} />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="email" class={style.input} />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" class={style.input} />
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" class={style.input} />
                    <span>Confirm password</span>
                </label>
                <button class={style.submit}>Submit</button>
                <p class={style.signin}>Already have an acount ? <a href="#">Signin</a> </p>
            </div>

        </div>
    )
}
