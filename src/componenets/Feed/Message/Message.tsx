import { FC } from "react"

type MessageType = {
    title:string,
    content:string,
    date:Date,
    from:{
        userId:number
    }
}


const Message:FC<MessageType> = ({title,content}) => {

    return <div>
        <div className="avatar"></div>
        <span>{title}</span>
        <div>{content}</div>
    </div>
}