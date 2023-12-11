import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";
import "react-virtualized/styles.css";
import styled from "styled-components";
import "react-virtualized/styles.css";

const data = Array.from({ length: 500 }, (_, index) => `Item ${index + 1}`);

const RowContainer = styled.div`
  margin-bottom: 10px; /* Adjust this value based on your desired spacing */
`;

const Message = styled.div`
  // padding: 10px;
  word-wrap: break-word;
`;

const Tittle = styled.h1`
  font-size: 1em;
  color: #029cfd;
  margin-bottom: 0px;
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

  const calculateRowHeight = ({ index }: any) => {
    const content = staticData[index].message;
    const lineHeight = 20; // Adjust this value based on your font size and line height
    const lines = Math.ceil(content.length / 40); // Assuming an average of 40 characters per line
    const contentHeight = lines * lineHeight + 20; // Additional padding
    return contentHeight;
  };

  const rowRenderer = ({ index, key, style }: any) => (
    <RowContainer key={key} style={{ ...style, height: calculateRowHeight({ index }) }}>
      <Tittle>Hello welcome................</Tittle>
      <Message >
      {staticData[index].message}
      {staticData[index].message}
      </Message>
    </RowContainer>
  );
  return (
    <>
      <AutoSizer>
        {({ width }) => (
          <List
            ref="List"
            width={width}
            height={500}
            rowCount={staticData.length}
            rowHeight={calculateRowHeight}
            rowRenderer={rowRenderer}
          />
       
        )}
      </AutoSizer>
    </>
  );
};

export default Feed;