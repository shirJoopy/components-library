import styled from "styled-components"
import Message, { DBMessageType, MessageType } from "../Message/Message"
import { FC } from "react"


const StyledWall = styled.div`
    
    flex-direction: column;
    display: flex;
    flex: 1;
    min-width: 300px;
    height: 100%;
    width: 100%;
`


type WallProps = {
    messages:MessageType[]
}


const Wall :FC<WallProps>= ({messages})=>{
    return <StyledWall>{messages.map((message,index)=><Message {...message} index={index} />)}</StyledWall>
}

export default Wall;