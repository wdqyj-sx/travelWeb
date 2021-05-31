import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import {Layout, Typography, Input, Menu, Button, Dropdown} from "antd";
import {GlobalOutlined} from "@ant-design/icons";
import {Link, withRouter, RouteComponentProps} from "react-router-dom"
import store from "../../redux/language/store"
import {LanguageRedux} from "../../redux/language/languageRedux"
import { withTranslation,WithTranslation } from "react-i18next"

interface state extends LanguageRedux {
}

class HeaderComponnet extends React.Component<RouteComponentProps&WithTranslation
    , state> {
    constructor(props) {
        super(props);
        const storeState = store.getState()

        this.state = {
            language: storeState.language,
            languageList: storeState.languageList
        }
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
        const storeState = store.getState();

       this.setState({
           language: storeState.language,
           languageList: storeState.languageList
       })

    }
    menuClickHandle = (e) => {
       if(e.key === "new") {
           store.dispatch({
               type:"new_language",
               payload:{name:"新语言",key:"new"}
           })
       }
       else {
           //创建行为
           const action = {
               type: "change_language",
               payload: e.key
           }
           //分发行为
           store.dispatch(action);
       }

    }


    render() {
        const {t} = this.props
        return (
            <div className={styles["app-header"]}>
                {/* top-header */}
                <div className={styles["top-header"]}>
                    <div className={styles.inner}>
                        <Typography.Text>让旅游更幸福</Typography.Text>
                        <Dropdown.Button
                            style={{marginLeft: 15}}
                            overlay={
                                <Menu onClick={this.menuClickHandle}>
                                    {
                                        this.state.languageList.map(l => {
                                            return <Menu.Item key={l.code}>{l.name}</Menu.Item>
                                        })
                                    }
                                    <Menu.Item key={"new"}> 新语言 </Menu.Item>
                                </Menu>
                            }
                            icon={<GlobalOutlined/>}
                        >
                            {
                                this.state.language === "zh"?"中文":"English"
                            }
                        </Dropdown.Button>
                        <Button.Group className={styles["button-group"]}>
                            <Link to={"/register"}> <Button>注册</Button></Link>
                            <Link to={"/signIn"}><Button>登陆</Button>
                            </Link>
                        </Button.Group>
                    </div>
                </div>
                <Layout.Header className={styles["main-header"]}>
                    <img src={logo} alt="logo" className={styles["App-logo"]}/>
                    <Typography.Title level={3} className={styles.title}>
                        React旅游网
                    </Typography.Title>
                    <Input.Search
                        placeholder={"请输入旅游目的地、主题、或关键字"}
                        className={styles["search-input"]}
                    />
                </Layout.Header>
                <Menu mode={"horizontal"} className={styles["main-menu"]}>
                    <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
                    <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
                    <Menu.Item key="3"> {t("header.group")} </Menu.Item>
                    <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                    <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                    <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                    <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                    <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                    <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                    <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                    <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                    <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                    <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                    <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                    <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                    <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
                </Menu>
            </div>
        );
    }


};

export const Header = withTranslation()(withRouter(HeaderComponnet));