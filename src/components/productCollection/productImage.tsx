import React from "react"
import {Image, Typography} from "antd"

interface PropsType {
    id: string | number,
    size: "large" | "small",
    title: string,
    price: string | number,
    imageSrc: string
}

export const ProductImage: React.FC<PropsType> = ({id, size, title, imageSrc, price}) => {
    return (
        <>
            {
                size === "large" ? <Image src={imageSrc} height={285} width={490}/> :
                    <Image src={imageSrc} height={120} width={240}/>
            }
            <div>
                <Typography.Text type="secondary">
                    {title.substr(0, 25)}
                </Typography.Text>
                <Typography.Text type={"danger"}>
                    ￥{price}起
                </Typography.Text>
            </div>
        </>
    )
}