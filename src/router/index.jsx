import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
// const Myhome = lazy(() => import('../pages/Myhome'))
// const Myact = lazy(() => import('../pages/MyActivity'))
// const Alllist = lazy(() => import('../pages/MyActivity/children/List/index'))
// const Content = lazy(() => import('../pages/MyActivity/children/Content/index'))
// const Playback = lazy(() => import('../pages/MyActivity/children/Playback/index'))
// const Host = lazy(() => import('../pages/MyActivity/children/substance/index'))
// const Substance = lazy(() => import('../pages/MyActivity/children/substance/index'))
// const Buyticket = lazy(() => import('../pages/Buyticket/index'))
// const SubContent = lazy(() => import('../pages/MyActivity/children/substance/child/content'))
// const Statistics = lazy(() => import('../pages/MyActivity/children/substance/child/statistics'))
// const SubChat = lazy(() => import('../pages/MyActivity/children/substance/child/chat'))
// const Guest = lazy(() => import('../pages/Guest/index'))
// const Exhibit = lazy(() => import('../pages/Exhibitor/index'))
// const ExDetail = lazy(() => import('../pages/Exhibitor/Detail/index'))
// const NewProduct = lazy(() => import('../pages/Newproduct/index'))
// const ProHome = lazy(() => import('../pages/Newproduct/child/Home'))
// const ProDetail = lazy(() => import('../pages/Newproduct/child/Product/index'))
// const Conimage = lazy(() => import('../pages/Guest/index'))
// const Picmain = lazy(() => import('../pages/Fineimage/index'))
// const Picmei = lazy(() => import('../pages/Fineimage/child/Meit/index'))
// const Picnews = lazy(() => import('../pages/Fineimage/child/New/index'))
// const Peoplec = lazy(() => import('../pages/peoplecenter/index'))
// const Administer = lazy(() => import('../view/admioner/index'))
// const AdHome = lazy(() => import('../view/child/Home'))
// const Adactivity = lazy(() => import('../view/child/Myactivity'))
// const AddActivity = lazy(() => import('../view/child/AddActivity'))
// const AddFir = lazy(() => import('../view/child/AddActivity/step/Fir'))
// const AddSec = lazy(() => import('../view/child/AddActivity/step/Sec'))
// const AddThird = lazy(() => import('../view/child/AddActivity/step/Third'))
// const Adxiu = lazy(() => import('../view/child/Myactivity/Detail/index'))
// const PMessage = lazy(() => import('../pages/peoplecenter/Child/Message'))
// const Mypet = lazy(() => import('../pages/peoplecenter/Child/Mypet'))
// const Aianswer = lazy(() => import('../pages/peoplecenter/Child/AIanswer'))
// const Mygroup = lazy(() => import('../pages/Fineimage/child/User'))
// const AdZb = lazy(() => import('../view/child/Zbo'))
// const Adpeo = lazy(() => import('../view/child/PeoCenter/index'))
// const PShop = lazy(() => import('../pages/peoplecenter/Child/Shop'))
// const Login = lazy(() => import('../view/Login'))
// const Register = lazy(() => import('../view/Register'))
// const Myproduct = lazy(() => import('../pages/peoplecenter/Child/MYproduct'))
// const History = lazy(() => import('../pages/peoplecenter/Child/History'))
// const Acthua = lazy(() => import('../pages/MyActivity/children/huacon'))
// const UserCon = lazy(() => import('../view/child/UserCon'))
import Myhome from '../pages/Myhome'
import Myact from '../pages/MyActivity'
import Alllist from '../pages/MyActivity/children/List/index'
import Content from '../pages/MyActivity/children/Content/index'
import Playback from '../pages/MyActivity/children/Playback/index'
import Host from '../pages/MyActivity/children/Hostcontent/index'
import Substance from '../pages/MyActivity/children/substance/index'
import Buyticket from '../pages/Buyticket/index'
import SubContent from '../pages/MyActivity/children/substance/child/content'
import Statistics from '../pages/MyActivity/children/substance/child/statistics'
import SubChat from '../pages/MyActivity/children/substance/child/chat'
import Guest from '../pages/Guest/index'
import Exhibit from '../pages/Exhibitor/index'
import ExDetail from '../pages/Exhibitor/Detail/index'
import NewProduct from '../pages/Newproduct/index'
import ProHome from '../pages/Newproduct/child/Home'
import ProDetail from '../pages/Newproduct/child/Product/index'
import Conimage from '../pages/Fineimage/index'
import Picmain from '../pages/Fineimage/child/Huax/index'
import Picmei from '../pages/Fineimage/child/Meit/index'
import Picnews from '../pages/Fineimage/child/New/index'
import Peoplec from '../pages/peoplecenter/index'
import Administer from '../view/admioner/index'
import AdHome from '../view/child/Home'
import Adactivity from '../view/child/Myactivity'
import AddActivity from '../view/child/AddActivity'
import AddFir from '../view/child/AddActivity/step/Fir'
import AddSec from '../view/child/AddActivity/step/Sec'
import AddThird from '../view/child/AddActivity/step/Third'
import Adxiu from '../view/child/Myactivity/Detail/index'
import PMessage from '../pages/peoplecenter/Child/Message'
import PShop from '../pages/peoplecenter/Child/Shop'
import Mypet from '../pages/peoplecenter/Child/Mypet'
import Aianswer from '../pages/peoplecenter/Child/AIanswer'
import Mygroup from '../pages/Fineimage/child/User'
import AdZb from '../view/child/Zbo'
import Adpeo from '../view/child/PeoCenter/index'
import UserCon from '../view/child/UserCon'
import Login from '../view/Login'
import Register from '../view/Register'
import Myproduct from '../pages/peoplecenter/Child/MYproduct'
import History from '../pages/peoplecenter/Child/History'
import Acthua from '../pages/MyActivity/children/huacon'
const routes = [
    {
        path: '/',
        element: <Navigate to='/login'></Navigate>
    }, {
        path: 'login',
        element: <Login />
    }, {
        path: '/register',
        element: <Register />
    }, {
        path: 'myact',
        element: <Myact />,
        children: [

            {
                path: 'allist/:size',
                element: <Alllist />
            }, {
                path: 'content/:userid',
                element: <Content />
            }, {
                path: 'host',
                element: <Host />
            }, {
                path: 'playback',
                element: <Playback />
            }, {
                path: 'substance/:id',
                element: <Substance />,
                children: [
                    {
                        path: 'content',
                        element: <SubContent />
                    }, {
                        path: 'statictics',
                        element: <Statistics />
                    }, {
                        path: 'subchat',
                        element: <SubChat />
                    }
                ]
            }, {
                path: 'hua',
                element: <Acthua />
            }
        ]
    }, {
        path: 'myhome',
        element: < Myhome />
    }, {
        path: 'ticket',
        element: <Buyticket />
    }, {
        path: 'guest',
        element: <Guest />
    }, {
        path: 'exhibitor',
        element: <Exhibit />
    }, {
        path: 'exdetail',
        element: <ExDetail />
    }, {
        path: 'newproduct',
        element: <NewProduct />,
        children: [
            {
                path: 'home',
                element: <ProHome />
            }, {
                path: 'detail',
                element: <ProDetail />
            }
        ]
    }, {
        path: 'finepic',
        element: <Conimage />,
        children: [
            {
                path: 'main',
                element: <Picmain />
            }, {
                path: 'meit',
                element: <Picmei />
            }, {
                path: 'news',
                element: <Picnews />
            }, {
                path: 'group',
                element: <Mygroup />
            }
        ]
    }, {
        path: 'centerpeo',
        element: <Peoplec />,
        children: [
            {
                path: 'message',
                element: <PMessage />
            }, {
                path: 'shop',
                element: <PShop />
            }, {
                path: 'pet',
                element: <Mypet />
            }, {
                path: 'answer',
                element: <Aianswer />
            }, {
                path: 'history',
                element: <History />
            }, {
                path: 'myproduct',
                element: <Myproduct />
            }
        ]
    }, {
        path: 'administer',
        element: <Administer />,
        children: [
            {
                path: 'home',
                element: <AdHome />
            },
            {
                path: 'detail',
                element: <Adxiu />
            }, {
                path: 'activity',
                element: <Adactivity />
            }, {
                path: 'addactivity',
                element: <AddActivity />,
                children: [{
                    path: 'first',
                    element: <AddFir />
                }
                    , {
                    path: 'second',
                    element: <AddSec />
                },
                {
                    path: 'third',
                    element: <AddThird />
                }
                ]
            }, {
                path: 'zbo',
                element: <AdZb />
            }, {
                path: 'peocenter',
                element: <Adpeo />
            }, {
                path: 'usercon',
                element: <UserCon />
            }
        ]
    }
]
export default routes