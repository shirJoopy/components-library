import React from 'react';
import { Card, Avatar } from '@progress/kendo-react-layout';
import styled, { css } from 'styled-components';
import { MessgeIcons } from '../../Icons';
import { UserType } from '../Wall/Wall';

interface CustomWindow extends Window {
    _userLanguage?: string;
}
declare let window: CustomWindow;


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
    type:'alert'|'message';
    title: string;
    content: string;
    date: string;
    author: UserType;
    Icon: string;
}
type Direction = 'rtl' | 'ltr';

function decodeHtmlEntities(html:string) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
  }

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

const Icons = {
    alert:MessgeIcons.AlertSvg,
    message:MessgeIcons.PrivateSvg
}

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
    const { title, content, date, author, type } = message; // Default to LTR if direction is not specified
    
    return (
        <Card style={{ width: '100%', marginBottom: '15px' }}>
            <StyledMessage {...message} >
                <StyledMessageHeader {...message} >
                    <Avatar type="image" className='avatar' style={{ margin: 0 }} >
                        {/* <img src={author.avatarUrl} alt={author.userName} /> */}
                    </Avatar>
                    <Spacer />
                    <div className="props">
                        <span className='author'>{author.username} - {author.role}</span>
                        <span className="title">{title}</span>
                    </div>
                    <img className='icon' src={Icons[type]} />
                </StyledMessageHeader>
                <StyledMessageContent {...message} >
                    <p style={{ padding: 0, flex: 1 }}><div dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(content) }} /></p>
                </StyledMessageContent>
                <p style={{ margin: 0, padding: 0 }}>Date: {date}</p>
            </StyledMessage>
        </Card>
    );
};

export default Message;
