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


const DB_MESSAGE = {
    "MESSAGE_ID": 1,
    "SUBJECT": "subject1",
    "BODY": "some text 1",
    "CREATION_DATE": "18/12/2023",
    "FILE_ID": 5,
    "SENDER_USER_ID": 3742,
    "POSITION": 1
};

export const Primary: Story = {
    args: {
        messages: [{
            title: 'test',
            content: 'another test',
            date: new Date(),
            Icon: MessgeIcons.AlertSvg,
            author: {
                userId: 123,
                altText: 'Jonnie',
                avatarUrl: 'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'
            }
        },
        {
            title: 'test',
            content: 'another test',
            date: new Date(),
            Icon: MessgeIcons.AlertSvg,
            author: {
                userId: 123,
                altText: 'Jonnie',
                avatarUrl: 'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'
            }
        },
        {
            title: 'test',
            content: 'another test',
            date: new Date(),
            Icon: MessgeIcons.AlertSvg,
            author: {
                userId: 123,
                altText: 'Jonnie',
                avatarUrl: 'https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg'
            }
        }]



    },
};
