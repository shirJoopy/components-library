import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Window } from '@progress/kendo-react-dialogs';
import { SelectTenantScreen } from '../SelectTenantScreen/SelectTenantScreen';
const SelectTenantLoginWin = () => {

    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    }
 
    return (
      <div>
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={toggleDialog}>Open Window</button>
        {visible &&
        <Window title={"Select Tenant Login"} onClose={toggleDialog} initialHeight={350}>
         <SelectTenantScreen/>
        </Window>}
      </div>
    );
}

export default SelectTenantLoginWin;