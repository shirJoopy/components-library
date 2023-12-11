import React from 'react';
import { Card, Avatar} from '@progress/kendo-react-layout';
import { Icon } from '@progress/kendo-react-common';
import { Avatar as AvatarIcon } from 'antd';

interface Author {
    userId: number;
    avatarUrl: string;
    altText: string;
}

interface MessageType {
    title: string;
    content: string;
    date: Date;
    author?: Author;
}

const Message: React.FC<MessageType> = ({ title, content, date, author }) => {
    return (
        <Card style={{ width: '100%', marginBottom: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {author && (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column',justifyContent:'center',padding:12 }}>
                        <Avatar type="image">
                            <img src={author.avatarUrl} alt={author.altText} />
                        </Avatar>
                        <p>Author: {author.userId}</p>
                    </div>
                )}
                <span style={{marginTop: 12, marginLeft: 10, marginRight: 10 ,flex:1,flexDirection:'column',display:'flex'}}>
                    <span>{title}</span>
                    <p style={{padding:0,marginTop:4,marginBottom:4,flex:1}}>{content}<Icon size='large' name="home" style={{color:'red',fill:'blue'}}/></p>
                    
                </span>
               
                <AvatarIcon src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />

            </div>
            <p style={{margin:12}}>Date: {date.toDateString()}</p>
        </Card>
    );
};

export default Message;
