import React from 'react';
import VirtualizedList from './VirtualizedList';

const Feed: React.FC = () => {
  const myData: string[] = []

  return <VirtualizedList data={myData} />;
};

export default Feed;
