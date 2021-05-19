import React from "react"
import {Menu} from "antd"
import {sideMenuList} from "./mockup"
import {GifOutlined} from "@ant-design/icons"
import styles from "./SideMenu.module.css";

export const SideMenu: React.FC = () => {
    return (
        <Menu
            mode="vertical"
            className={styles['side-menu']}
        >
            {
                sideMenuList.map((m, index) => {
                  return  <Menu.SubMenu
                        key={`side-menu-${index}`}
                        title={
                            <span>
                                <GifOutlined/>
                                {m.title}
                            </span>
                        }
                    >
                        {
                            m.subMenu.map((sm, sindex) => {
                             return   <Menu.SubMenu
                                    key={`sub-menu-${sindex}`}
                                    title={
                                        <span>
<GifOutlined/>
                                            {sm.title}
    </span>
                                    }
                                >
                                    {
                                        sm.subMenu.map((sms, smsindex) => {

                                        return    <Menu.Item
                                                key={`sms-menu-${smsindex}`}

                                            >

                                            <span>
<GifOutlined/>
                                                {
                                                    sms
                                                }
                                                    </span>

                                            </Menu.Item>
                                        })
                                    }
                                </Menu.SubMenu>
                            })
                        }
                    </Menu.SubMenu>
                })
            }
        </Menu>
    )
}