import React from 'react'
import style from './index.module.css'
import List from './List'
export default function index() {
    return (
        <div className={style.all}>
            {
                [1].map((item, index) => {
                    return (
                        <List />
                    )

                })
            }

        </div>
    )
}
