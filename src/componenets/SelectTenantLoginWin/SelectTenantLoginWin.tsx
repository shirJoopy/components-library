import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Window } from '@progress/kendo-react-dialogs';
import  SelectTenantLoginForm  from '../SelectTenantScreen/SelectTenantLoginForm';
import  LoginFormHeader  from './LoginFormHeader';
import LoginFormFoorter from './LoginFormFooter';
import incentivesLogo from "../../stories/assets/incentivesLogo.png"
const SelectTenantLoginWin = () => {

    const [visible, setVisible] = React.useState<boolean>(true);

    const toggleDialog = () => {
        setVisible(!visible);
    }

   let partnerLogo :{logoData:any,type:any,logoType:any}= {
        logoData: incentivesLogo,//"../../stories/assets/incentivesLogo.png",
        type:"url",// imgSrcType.url,
        logoType:"png"};
      
    return (
      <div>
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={toggleDialog}>Open Window</button>
        {visible &&
        <Window title={"Select Tenant Login"} onClose={toggleDialog} initialHeight={350}>
            <LoginFormHeader partnerLogo={partnerLogo}/>
         <SelectTenantLoginForm/>
         <LoginFormFoorter/>
        </Window>}
      </div>
    );
}

export default SelectTenantLoginWin;