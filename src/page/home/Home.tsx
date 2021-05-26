import React from "react"
import {Header, Footer, SideMenu, Carousel, ProductCollection,BassPartners} from "../../components";
import {Row, Col, Typography} from "antd";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import {productList1, productList2, productList3} from "./mockups";
import { withTranslation,WithTranslation } from "react-i18next"
import styles from "./Home.module.css"

export class HomeComponent extends React.Component<WithTranslation> {
    render() {
        const { t } = this.props;
        return (
          <>
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
                            {t("home_page.hot_recommended")}
                        </Typography.Title>}
                        sideImage={sideImage}
                        products={productList1}
                    >

                    </ProductCollection>
                    <ProductCollection
                        title={<Typography.Title level={3} type="danger">
                            {t("home_page.new_arrival")}
                        </Typography.Title>}
                        sideImage={sideImage2}
                        products={productList2}
                    >

                    </ProductCollection>
                    <ProductCollection
                        title={<Typography.Title level={3} type="success">
                            {t("home_page.domestic_travel")}
                        </Typography.Title>}
                        sideImage={sideImage3}
                        products={productList3}
                    >

                    </ProductCollection>


                    <BassPartners />
                </div>
                <Footer/>
            </>
        )
    }
}

export const Home =withTranslation()(HomeComponent)