import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '.';
import { useMemo, useState } from 'react';


const postFileToRepo = async (iconName: string, icon: string) => {
  const owner = 'shirJoopy';
  const repo = 'components-library';
  const filePath = `src/componenets/Icons/sources/${iconName}.svg`; // File path within the repository


  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  const requestBody = {
    message: 'Add new file', // Commit message
    content: btoa(icon), // Base64-encoded file content
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT', // Use PUT for updating existing files, POST for creating new ones
      headers: {
        Authorization: 'barear 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', // Replace with your token or use another authentication method
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      console.log('File posted successfully!');
    } else {
      console.log(response)
      throw new Error('Failed to post file');
    }
  } catch (error) {
    console.error(error);
    // Handle error
  }
};



const IconsList = ({ icons }: { icons: TT }) => {
  const [search, setSearch] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const filterdIcons = useMemo(() => {
    return Object.entries(icons).filter(([iconName]) => iconName.toLowerCase().includes(search.toLowerCase()));
  }, [icons, search])

  return <div style={{ flexDirection: 'column', display: 'flex', height: '90vh' }}>
    <div style={{ flex: 1 ,flexDirection:'row',flexWrap:'wrap',display:'flex',alignItems:'flex-start'}}>
      {filterdIcons.map(([iconName, Icon]) => <div key={iconName} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{margin:10,alignItems:'center',display:'flex',flexDirection:'column'}}>
        <img src={Icon} title={iconName} alt={iconName} style={{ width: 30, height: 30 }} />
        <div style={{ fontSize: 12 }}>
          {iconName}
        </div>
        </div>
      </div>
      )}
    </div>
    <input placeholder='search' style={{ alignSelf: 'center' }} type='text' onChange={(e) => setSearch(e.target.value)} />
    <span style={{ margin: 10 }} />
    {icon && <img src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(icon)}`} style={{ alignSelf: 'center', width: 30, height: 30 }} />}

    {/* <span style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <textarea placeholder='new icon' style={{ alignSelf: 'center' }} rows={10} cols={40} onChange={(e) => setIcon(e.target.value)} />

      {icon && <button onClick={() => {
        postFileToRepo('test', icon);
      }}>add</button>}
    </span> */}
  </div>
}


const meta: Meta = {
  title: 'Example/Icons', // Update the title as needed
  // Add parameters or layout settings if required
  component: IconsList,

} satisfies Meta<typeof IconsList>;;

type TT = typeof Icons.MessgeIcons;

export default meta;

type Story = StoryObj<typeof meta>;

export const MessgeIcons: Story = {
  args: {
    icons: { ...Icons.MessgeIcons }
    // Your arguments for the HomeIcons component or icon set
    // For example, if HomeIcons is a component that renders multiple icons,
    // pass appropriate props here.
  },
};
// Add more stories for other icons or components as needed

// Example usage:
// You'll fill in the args object with appropriate props to showcase each icon or component.
// This structure allows you to define separate stories for different icons or components.

// Ensure to import your components or icons and adjust the args accordingly.
