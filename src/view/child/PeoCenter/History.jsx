import React, { useEffect, useState } from 'react'

import style from './index.module.css'
export default function History() {
  const [history, sethis] = useState([]);
  useEffect(() => {

  }, [])

  return (
    <div className={style.hiscontain}>
      <div className={style.title}>
        操作记录
      </div>
      <table className={style.tab}>
        <tr className={style.tt}>
          <td>

          </td>
          <td>
            模型
          </td>
          <td>
            操作
          </td>
          <td>
            时间
          </td>
        </tr>
        {
          history.map((item, index) => {
            return (
              <tr className={style.tt} key={index}>
                <td>
                  {item.name1}
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.type}
                </td>
                <td>
                  {item.time}
                </td>
              </tr>
            )
          })
        }

      </table>
    </div>
  )
}
