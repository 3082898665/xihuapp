import { LineChartOutlined, MacCommandOutlined, PullRequestOutlined, DownloadOutlined, SettingOutlined, AppstoreOutlined, ReadOutlined, UserSwitchOutlined, HeatMapOutlined, RadarChartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import { publish, subscribe } from 'pubsub-js';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('数据总览', '/administer/home', <AppstoreOutlined />),
  {
    type: 'divider',
  },

  // getItem('数据标注', '6'),
  getItem('用户管理', '/administer/usercon', <PullRequestOutlined />),
  getItem('活动管理', '/administer/activity', <ReadOutlined />),
  getItem('活动添加', '/administer/addactivity/first', <UserSwitchOutlined />),
  getItem('进行直播', '/administer/zbo', <HeatMapOutlined />),
  getItem('个人中心', '/administer/peocenter', <MacCommandOutlined />),

  //aymodel
];
// const navigate=useNavigate();
export default function Polit() {
  const location = useLocation()
  const [path, setPath] = useState('')
  useEffect(() => {
    if (location.pathname != null) {
      setPath(location.pathname)
    }
    subscribe('onechild', (_, data) => {
      setPath(data.data)
    })
  }, [location.pathname])
  const navigate = useNavigate()


  let tit = ''
  const onClick = (e) => {
    if (e.key === '/administer/home') {
      tit = '数据总览'
    } else if (e.key === '/administer/activity') {
      tit = '活动管理'
    } else if (e.key === '/administer/addactivity/first') {
      tit = '活动添加'
    } else if (e.key === '/administer/zbo') {
      tit = '进行直播'

    } else if (e.key === '/administer/peocenter') {
      tit = '个人中心'
      // 
    } else if (e.key === '/administer/usercon') {
      tit = '用户管理'
      // /administer/usercon
    }
    publish('changetit', { data: tit })
    setPath(e.key)
    if (e.key !== '/contain/train/stepone')
      navigate(e.key)
  };
  return <>
    <Menu
      onClick={onClick}
      style={{
        height: '100%'
      }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={[]}
      selectedKeys={[path]}
      mode="inline"
      items={items}
    >

    </Menu>
  </>
}

