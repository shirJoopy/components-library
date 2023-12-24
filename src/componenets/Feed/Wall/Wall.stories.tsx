import type { Meta, StoryObj } from '@storybook/react';

import Wall, { DBUserType, TopicType, UserType } from './Wall';
import { MessgeIcons } from '../../Icons';
import { DBMessageType, MessageType } from '../Message/Message';
import { TabStrip } from '@progress/kendo-react-layout';
import { ReactNode } from 'react';






export const parseUser: (user: DBUserType) => (UserType & { DB: DBUserType }) = (props) => ({
    DB: props,
    id: props.USER_ID,
    username: props.USERNAME,
    channel_id: props.CHANNEL_ID,
    canSeeOtherEmployees: props.CAN_SEE_OTHER_EMPLOYEES === 'Y',
    role: props.USER_ROLE,
    roleId: props.PERMISSION_ROLE_ID,
    departmentId: props.DEP_ID,
    mgrReadOnly: props.MGR_READ_ONLY === "Y",
    chartId: props.CHART_ID,
    salaryVisible: props.SALARY_VISIBLE === 'Y',
    dataVisible: props.DATA_VISIBLE === 'Y',
}
)


export const parseUsers: (users: DBUserType[]) => (UserType & { DB: DBUserType })[] = (users) => (
    users.map(parseUser)
)

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




const DB_RESULT: { Success: boolean, data: { messages: DBMessageType[], users: DBUserType[] } } = {
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

const userMap = DB_RESULT.data.users.reduce((acc, user) => ({ ...acc, [user.USER_ID]: parseUser(user) }), {} as { [id: number]: UserType });



const parseMessage: (message: DBMessageType) => MessageType = (message: DBMessageType) => {

    return {
        type: 'alert',
        title: message.SUBJECT,
        content: message.BODY,
        date: message.CREATION_DATE,
        Icon: '',
        author: userMap[message.SENDER_USER_ID]
    }
}

export const Primary: Story = {
    args: {
        feed: [{
            messages: DB_RESULT.data.messages.map(parseMessage),
            users: Object.values(userMap),
            pkId: 0,
            id: 0,
            title: 'test'
        },{
            messages: DB_RESULT.data.messages.map(parseMessage),
            users: Object.values(userMap),
            pkId: 0,
            id: 0,
            title: 'test1'
        }]
    },
};

