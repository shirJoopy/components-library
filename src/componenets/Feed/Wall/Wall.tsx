import styled from "styled-components"
import Message, { DBMessageType, MessageType } from "../Message/Message"
import { FC, useState } from "react"

import {
    TabStrip,
    TabStripSelectEventArguments,
    TabStripTab,
} from "@progress/kendo-react-layout";





export type TopicType = {
    pkId: number;
    id: number;
    title: string;
    messages: MessageType[];
    users: UserType[];
};




export type DBUserType = {
    "USERNAME": string;
    "USER_ID": number;
    "CHANNEL_ID": number;
    "USER_ROLE": string;
    "DEP_ID": number;
    "DATA_VISIBLE": "Y" | "N";
    "SALARY_VISIBLE": "Y" | "N";
    "CHART_ID": number;
    "MGR_READ_ONLY": "N" | "Y";
    "TENANT_ID": number;
    "PERMISSION_ROLE_ID": number;
    "CAN_SEE_OTHER_EMPLOYEES": "Y" | "N";
}

export type UserType = {
    id: number,
    username: string,
    channel_id: number,
    role: string,
    departmentId: number,
    dataVisible: boolean,
    salaryVisible: boolean,
    chartId: number,
    mgrReadOnly: boolean,
    roleId: number,
    canSeeOtherEmployees: boolean

}



const StyledWall = styled.div`
    
    flex-direction: column;
    display: flex;
    flex: 1;
    min-width: 300px;
    height: 100%;
    width: 100%;    
`


type WallProps = { feed: TopicType[] }


const Wall: FC<WallProps> = ({ feed }) => {

    const [selected, setSelected] = useState<number | undefined>(0);
    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    //@ts-ignore
    return <TabStrip dir={window._userLanguage === 'Hebrew' ? 'rtl' : 'ltr'} selected={selected} onSelect={handleSelect} style={{maxHeight:'90vh'}}>
        {feed.map(({ title, messages }) => <TabStripTab title={title}>
            <StyledWall>{messages.map((message, index) => <Message key={index} {...message} index={index} />)}</StyledWall>
        </TabStripTab>)}
    </TabStrip>

}

export default Wall;