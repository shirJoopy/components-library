import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";
import CellMeasurer, { CellMeasurerCache } from "react-virtualized/dist/commonjs/CellMeasurer"
import "react-virtualized/styles.css";
import styled from "styled-components";
import "react-virtualized/styles.css";

// const data = Array.from({ length: 500 }, (_, index) => `Item ${index + 1}`);

const RowContainer = styled.div`
  margin-bottom: 10px; 
  border : 2px solid ;
  padding:10px;
`;

const Message = styled.div`
  // padding: 10px;
  word-wrap: break-word;
`;

const Title = styled.h1`
  font-size: 1em;
  color: #029cfd;
  margin-bottom: 0px;
  margin-top: 0px;
`;


const staticData = [
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },




];

const Feed: React.FC = () => {
  
  const cache = new CellMeasurerCache({
    defaultHeight: 50, // Default height for rows
    fixedWidth: true, // Assuming a fixed-width list, change to false if width is dynamic
  });

  const rowRenderer = ({ index, key,parent, style }: any) => (
    <CellMeasurer cache={cache} key={key} parent={parent} columnIndex={0} rowIndex={index}>
      {({ measure }) => (
        <div onLoad={measure} style={style}>
          <RowContainer>
            <Title>Hello welcome................</Title>
            <Message>
              {staticData[index].message}
              {staticData[index].message}
              {staticData[index].message}
            </Message>
          </RowContainer>
        </div>
      )}
    </CellMeasurer>
  );
  return (
    <>
      <AutoSizer>
         {({ width,height}) => (
        <List
          ref="List" 
          width={width}
          height={500}
          rowCount={staticData.length}
          rowHeight={cache.rowHeight}
          rowRenderer={rowRenderer}
        />
      )}
      </AutoSizer>
    </>
  );
};

export default Feed;