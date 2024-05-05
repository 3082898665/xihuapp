import React, { useEffect, useState } from 'react'
import style from './index.module.scss'

export default function Guest({ people }) {


    return (
        <div class={style.card}>
            <div class={style.upperpart}>
                <div class={style.upperpartface}>
                    <div>
                        <img src={people.picture} className={style.pic} />
                    </div>

                    <div>{people.name}</div>
                </div>
                <div class={style.upperpartback}>
                    <div className={style.upbaf}>
                        {people.content}
                    </div>　</div>
            </div>
            <div class={style.lowerpart}>
                <div class={style.lowerpartface}> {people.job}</div>
                <div class={style.lowerpartback}>点击观看最新直播回放</div>
            </div>
        </div>
    )
}
