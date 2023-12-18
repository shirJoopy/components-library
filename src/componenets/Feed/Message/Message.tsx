import React from 'react';
import { Card, Avatar } from '@progress/kendo-react-layout';
import { Icon as KendoIcon } from '@progress/kendo-react-common';
import { Avatar as AvatarIcon } from 'antd';
import styled, { css } from 'styled-components';

interface CustomWindow extends Window {
    _userLanguage?: string;
}
declare let window: CustomWindow;


interface Author {
    userId: number;
    avatarUrl: string;
    altText: string;
}
export interface DBMessageType {
    MESSAGE_ID: number;
    SUBJECT: string;
    BODY: string;
    CREATION_DATE: Date;
    FILE_ID: number;
    SENDER_USER_ID: number;
    POSITION: number;
}

export interface MessageType {
    title: string;
    content: string;
    date: Date;
    author: Author;
    Icon: string;
}
type Direction = 'rtl' | 'ltr';

const StyledMessage = styled.div<MessageType & { index?: number }>`
    display:flex;
    flex-direction: column;
    padding: 8px;
    &:hover{
        background-color: #aecfdeFF; 
    }
    ${({ index = 0 }) =>
        index % 2 === 0 ?
        css`
            background-color: #aecfde70; /* Light color for even rows */
        ` : 
        css`
            background-color: #aecfde50; /* Light color for even rows */
        `}
    ${() => window._userLanguage === 'Hebrew' && css`
        /* RTL specific styles */
        direction: rtl;
        text-align: right; /* Adjust text alignment for RTL */
    `}
`;

const Spacer = styled.div<{ size?: number }>`
    margin  : ${({ size }) => (size ?? 5) + 'px'};

`;


const StyledMessageHeader = styled.div<MessageType>`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-bottom: 4px;
    .icon {
        position: absolute;
        ${() => window._userLanguage === 'Hebrew' ? 'left' : 'right'}: 0px; /* Adjust icon position */
        width: 20px;
        height: 20px;
    }
    .avatar{
        align-self: center;
        direction: ${() => window._userLanguage === 'Hebrew' ? 'ltr' : 'ltr'};
    }
    .props{
        display: flex;
        align-items: flex-start; 
        flex-direction: column;
        span{
            line-height: 1em;
            &.author{
                color:gray;
                font-style: italic;
            }
            &.title{
                font-weight: bold;
                font-size:1.2em;
                text-transform: capitalize;
            }
        }
    }
`;

const StyledMessageContent = styled.div<MessageType>`
    display: flex;
    flex-direction: column;
    flex: 1;
    border:thin solid #00000015;
    padding: 8px;
    border-radius: 10px;
    ${() => window._userLanguage === 'Hebrew' && css`
        /* RTL specific styles */
        text-align: right; /* Adjust text alignment for RTL */
    `}
    
`;

const Message: React.FC<MessageType & { index?: number }> = (message) => {
    const { title, content, date, author, Icon } = message; // Default to LTR if direction is not specified
    const dir = 'ltr';
    return (
        <Card style={{ width: '100%', marginBottom: '15px' }}>
            <StyledMessage {...message} >
                <StyledMessageHeader {...message} >
                    <Avatar type="image" className='avatar' style={{ margin: 0 }}>
                        <img src={author.avatarUrl} alt={author.altText} />
                    </Avatar>
                    <Spacer />
                    <div className="props">
                        <span className='author'>{author.userId}</span>
                        <span className="title">{title}</span>
                    </div>
                    <img className='icon' src={Icon} />
                </StyledMessageHeader>
                <StyledMessageContent {...message} >
                    <p style={{ padding: 0, flex: 1 }}>{content}<KendoIcon size='large' name="home" style={{ color: 'red', fill: 'blue' }} /></p>
                </StyledMessageContent>
                <p style={{ margin: 0, padding: 0 }}>Date: {date.toDateString()}</p>
            </StyledMessage>
        </Card>
    );
};

export default Message;
