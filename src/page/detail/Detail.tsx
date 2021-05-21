import React from "react"
import {RouteComponentProps} from "react-router-dom"
interface MatchParams {
    ItouristRouted: string;
}

export const Detail:React.FC<RouteComponentProps<MatchParams>> = (props) => {

    return (
        <h1>详情页,{props.match.params.ItouristRouted}</h1>
    )
}