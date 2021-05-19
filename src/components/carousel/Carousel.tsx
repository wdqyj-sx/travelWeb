import React from "react";
import {Carousel as AntCarousel ,Image} from "antd";

import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
import styles from "./Carousel.module.css";

export const Carousel:React.FC = () => {
    return (
        <AntCarousel autoplay className={styles.silde}>
            <Image src={carouselImage1}></Image>
            <Image src={carouselImage2}></Image>
            <Image src={carouselImage3}></Image>
        </AntCarousel>
    )
}
