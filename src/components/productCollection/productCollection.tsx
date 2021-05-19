import React from "react"
import {Col, Row, Divider, Typography} from "antd"
import styles from "./productCollection.module.css"
import {ProductImage} from "./productImage";
interface PropsType {
    title: JSX.Element,
    sideImage: string,
    products: any[]
}

export const ProductCollection: React.FC<PropsType> = ({title, sideImage, products}) => {
    return (
        <div>
            <Divider orientation="left">{title}</Divider>
            <Row>
                <Col span={4}>
                    <img src={sideImage} alt=""/>
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={12}>
                            <ProductImage
                                id={products[0].id}
                                size={"large"}
                                title={products[0].title}
                                imageSrc={products[0].touristRoutePictures[0].url}
                                price={products[0].price}
                            >

                            </ProductImage>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={12}>
                                    <ProductImage id={products[1].id} size={"small"} title={products[1].title} price={products[0].price} imageSrc={products[0].touristRoutePictures.url} />
                                </Col>
                                <Col span={12}></Col>
                            </Row>
                            <Row>
                                <Col span={12}></Col>
                                <Col span={12}></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}