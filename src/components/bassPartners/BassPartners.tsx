import React from "react";
import styles from "./BassPartners.module.css"
import { Divider,Col,Row,Typography } from "antd";
import image1 from "../../assets/images/facebook-807588_640.png";
import image2 from "../../assets/images/follow-826033_640.png";
import image3 from "../../assets/images/icon-720944_640.png";
import image4 from "../../assets/images/microsoft-80658_640.png"

const companies = [
    { src: image1, title: "Microsoft"},
    { src: image2, title: "Youtube"},
    { src: image3, title: "Ins"},
    { src: image4, title: "Facebook"}
]
export const BassPartners:React.FC = () =>{
    return (
        <div className={styles.content}>
            <Divider orientation={"left"}>
                <Typography.Title level={3}>企业合作</Typography.Title>
            </Divider>
        <Row>
            {
                companies.map((m,i)=>{
                  return  <Col span={6} key={`bassPart-${i}`}>
                        <img src={m.src} alt={m.title} style={
                            {
                                width:'80%',
                                margin:'auto',
                                display:'block'
                            }
                        }></img>
                    </Col>
                })
            }
        </Row>
        </div>
    )
}