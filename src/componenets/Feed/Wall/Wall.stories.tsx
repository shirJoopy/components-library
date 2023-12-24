import type { Meta, StoryObj } from '@storybook/react';

import Wall from './Wall';
import { MessgeIcons } from '../../Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Wall',
    component: Wall,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
} satisfies Meta<typeof Wall>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Author {
    userName:string;
    userId: number;
    userRole:string;
    avatarUrl: string;
}

export interface DBUser  {
    "USERNAME": string;
    "USER_ID": number;
    "CHANNEL_ID": number;
    "USER_ROLE": string;
    "DEP_ID": number;
    "DATA_VISIBLE": "Y" | "N";
    "SALARY_VISIBLE": "Y" | "N";
    "CHART_ID": number;
    "MGR_READ_ONLY": "Y" | "N";
    "TENANT_ID": number;
    "PERMISSION_ROLE_ID": number;
    "CAN_SEE_OTHER_EMPLOYEES": "Y" | "N";
}

export interface DBMessageType {
    MESSAGE_ID: number;
    SUBJECT: string;
    BODY: string;
    CREATION_DATE: string;
    FILE_ID: number;
    SENDER_USER_ID: number;
    POSITION: number;
}

export interface MessageType {
    title: string;
    content: string;
    date: string;
    author: Author;
    Icon: string;
    type:'alert'|'message'
}


const DB_RESULT : {Success:boolean, data:{messages:DBMessageType[],users:DBUser[]}} = {
    Success: true,
    data: {
        messages: [
            {
                "MESSAGE_ID": 1,
                "SUBJECT": "subject1",
                "BODY": "some text 1",
                "CREATION_DATE": "20/12/2023",
                "FILE_ID": 5,
                "SENDER_USER_ID": 3742,
                "POSITION": 1
            },
            {
                "MESSAGE_ID": 2,
                "SUBJECT": "subject2",
                "BODY": "&lt;p&gt;Test Public&amp;nbsp;&lt;/p&gt;&lt;p&gt;saasd&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;http://google.com&quot;&gt;google&lt;/a&gt;&lt;/p&gt;",
                "CREATION_DATE": "20/12/2023",
                "FILE_ID": 6,
                "SENDER_USER_ID": 3731,
                "POSITION": 2
            },
            {
                "MESSAGE_ID": 1,
                "SUBJECT": "subject3",
                "BODY": "some text 3",
                "CREATION_DATE": "20/12/2023",
                "FILE_ID": 7,
                "SENDER_USER_ID": 3731,
                "POSITION": 3
            }
        ],
        "users": [
            {
                "USERNAME": "GS441",
                "USER_ID": 3731,
                "CHANNEL_ID": 76766,
                "USER_ROLE": "SuperUser",
                "DEP_ID": 18645,
                "DATA_VISIBLE": "Y",
                "SALARY_VISIBLE": "Y",
                "CHART_ID": 0,
                "MGR_READ_ONLY": "N",
                "TENANT_ID": 1318,
                "PERMISSION_ROLE_ID": 1,
                "CAN_SEE_OTHER_EMPLOYEES": "Y"
            },
            {
                "USERNAME": "GS442",
                "USER_ID": 3742,
                "CHANNEL_ID": -9999,
                "USER_ROLE": "SuperUser",
                "DEP_ID": 18645,
                "DATA_VISIBLE": "Y",
                "SALARY_VISIBLE": "Y",
                "CHART_ID": 0,
                "MGR_READ_ONLY": "N",
                "TENANT_ID": 1318,
                "PERMISSION_ROLE_ID": 1,
                "CAN_SEE_OTHER_EMPLOYEES": "Y"
            }
        ]
    }
};

const parseUser :(user:DBUser)=>Author = (user) =>{
    return {
        userId:user.USER_ID,
        userName:user.USERNAME,
        userRole:user.USER_ROLE,
        avatarUrl:''
    } 
}

const userMap = DB_RESULT.data.users.reduce((acc,user)=>({...acc,[user.USER_ID]:parseUser(user)}),{} as {[id:number]:Author});



const parseMessage: (message: DBMessageType) => MessageType = (message: DBMessageType) => {

    return {
        type:'alert',
        title: message.SUBJECT,
        content: message.BODY,
        date: message.CREATION_DATE,
        Icon: '',
        author: userMap[message.SENDER_USER_ID]
    }
}

export const Primary: Story = {
    args: {
        messages: DB_RESULT.data.messages.map(parseMessage)


    },
};

