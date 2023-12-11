import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";
import "react-virtualized/styles.css";

const data = Array.from({ length: 200 }, (_, index) => index + 1);

const Feed: React.FC = () => {
  const rowRenderer = ({ index, key, style }: any) => (
    <div key={key} style={style}>
      {data[index]}
    </div>
  );

  return (
    <>
      <AutoSizer >
        {({ width }) => (
          <List
            ref="List"
            width={width}
            height={500}
            rowCount={data.length}
            rowHeight={50}             
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </>
  );
};

export default Feed;
