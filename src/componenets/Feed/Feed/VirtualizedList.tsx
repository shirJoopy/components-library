import React from 'react';
import { List, ListRowRenderer } from 'react-virtualized';
import 'react-virtualized/styles.css';

interface VirtualizedListProps {
  data: string[]; // Replace 'string' with the type of your data items
}

const VirtualizedList: React.FC<VirtualizedListProps> = ({ data }) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      {data[index]}
    </div>
  );

  return (
    <List
      width={300}
      height={400}
      rowCount={data.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
    />
  );
};

export default VirtualizedList;
