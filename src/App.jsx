import { useState } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from './router'
import './App.css'
import Myheader from './components/MyHeader/index'
function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes)
  const location = useLocation();

  console.log(location.pathname); // 这将打印出当前路由的路径 
  const lists = location.pathname.split('/')
  console.log(lists)
  return (
    <div >
      {
        lists[1] !== 'login' && <>
          {
            lists[1] !== 'administer' && (<Myheader />)
          }
        </>
      }

      {element}
    </div>
  )
}

export default App
