import React from 'react'
import SideBar from '../Components/SideBar'
import ContactArea from '../Components/ContactArea'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
    <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-2 col-xl-2 col-sm-1 px-sm-2 px-0  bg-black bg-gradient">
                    <SideBar/>
                </div>
                <div className="col-md-6 col-sm-11 col-xl-7 py-3">
                    <Outlet/>
                </div>
                <div className="col-md-4 col-xl-3 py-3 bg-black bg-gradient">
                    <ContactArea/>
                </div>
            </div>
        </div>
    </>
    )
}

export default HomeLayout