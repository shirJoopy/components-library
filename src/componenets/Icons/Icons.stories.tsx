import type { Meta, StoryObj } from '@storybook/react';
import * as Icons from '.';
import { useMemo, useState } from 'react';


const IconsList = ({ icons }: { icons: TT }) => {
  const [search, setSearch] = useState<string>("");
  const filterdIcons = useMemo(() => {
    return Object.entries(icons).filter(([iconName]) => iconName.toLowerCase().includes(search.toLowerCase()));
  }, [icons, search])

  return <div style={{ flexDirection:'column',display:'flex' ,height:'90vh'}}>
    <div style={{flex:1}}>
      {filterdIcons.map(([iconName, Icon]) => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src={Icon} title={iconName} alt={iconName} style={{ width: 30, height: 30 }} />
        <div style={{ fontSize: 12 }}>
          {iconName}
        </div>
      </div>
      )}
    </div>
    <input placeholder='search' style={{alignSelf:'center'}} type='text' onChange={(e) => setSearch(e.target.value)} />
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
