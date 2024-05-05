import React, { useRef, useEffect, useState } from 'react'
import style from './index.module.css'

export default function index({ name, engname }) {

    return (
        <div className={style.all} >
            <div className={style.title}>
                <div className={style.tt}>
                    {name}
                </div>
                <div className={style.tb}>
                    {engname}
                </div>

            </div>
        </div>
    )
}
