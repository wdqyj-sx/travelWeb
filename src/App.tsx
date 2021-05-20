import React from 'react';
import styles from "./App.module.css";
import {Header, Footer, SideMenu, Carousel, ProductCollection} from "./components";
import {Row, Col, Typography, Divider, Image} from "antd";
import sideImage from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';
import facebook from "./assets/images/facebook-807588_640.png";
import follow from "./assets/images/follow-826033_640.png";
import icon from "./assets/images/icon-720944_640.png";
import microsoft from "./assets/images/microsoft-80658_640.png"
import {productList1, productList2, productList3} from "./mockups";

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles['page-content']}>
                <Row style={{marginTop: 20}}>
                    <Col span={6}>
                        <SideMenu/>

                    </Col>
                    <Col span={18}>
                        <Carousel/>
                    </Col>
                </Row>
                <ProductCollection
                    title={<Typography.Title level={3} type="warning">
                        爆款推荐
                    </Typography.Title>}
                    sideImage={sideImage}
                    products={productList1}
                >

                </ProductCollection>
                <ProductCollection
                    title={<Typography.Title level={3} type="danger">
                        新品上市
                    </Typography.Title>}
                    sideImage={sideImage2}
                    products={productList2}
                >

                </ProductCollection>
                <ProductCollection
                    title={<Typography.Title level={3} type="success">
                        国内游推荐
                    </Typography.Title>}
                    sideImage={sideImage3}
                    products={productList3}
                >

                </ProductCollection>
                <Divider orientation={"left"}>
                    <Typography.Text type={"warning" } >合作企业</Typography.Text>
                </Divider>
                <Row>
                    <Col span={6}>
                        <Image src={facebook} alt={""}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={icon} alt={""}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={follow} alt={""}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={microsoft} alt={""}></Image>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
