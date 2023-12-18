import styled from "styled-components"
import Message, { DBMessageType, MessageType } from "../Message/Message"


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

export default ({messages}:WallProps)=>{

    return <StyledWall>{messages.map((message,index)=><Message {...message} index={index} />)}</StyledWall>
}