import React from "react";
// import styles from './selectTenantLogInWin.scss'
//import { GetLoginLabel, Labels } from "@/Layouts/LoginLayout/labels";
import { SelectWithIcon } from "../../CommonComponent/SelectWithIcon";
//import { IconNames } from "@components/Icons/FLATICON/FlatIconSprite";
//import { LoginButton } from "@/Layouts/LoginLayout/components/LoginButton";
//import { LoginFormRow } from "@/Layouts/LoginLayout/components/LoginFormRow";
import FavoriteIcons from '../../CommonComponent/FavoriteIcon';

export const SelectTenantScreen = ({ }) => {
    const [tenants, setTenants] = React.useState([]);
    const tenantRef = React.createRef();
    const [checkboxVal, setCheckboxVal] = React.useState(null);

    const withIconControlProps = {
        // icon: IconNames.users.tenants,
        placeholder: "SelectTenantLogin",
        ref: tenantRef,
        required: true,
    }
    // const loadTenants = async () => {
    //     var tenantList = await TenantHelper.getSelectTenantList();
    //     const parsedData = JSON.parse(tenantList.selectTenant);    
    //     setTenants(
    //         parsedData.map((item) => ({
    //             value: item.USER_ID + "|" + item.UNIQUE_ID,
    //             label: item.DISPLAY_NAME,
    //         }))
    //     );

    // }
    // React.useEffect(() => {
    //     loadTenants();

    // }, []);

    // React.useEffect(() => {
    //     const savedValue = getCookie('ShowSelectTenantLogin');
    //     if (savedValue !== undefined) {
    //         setCheckboxVal(savedValue === 'true');
    //     }
    // }, []);
    // // Function to handle checkbox change
    // const handleCheckboxChange = (event) => {
    //     const newValue = event.target.checked;
    //     setCheckboxVal(newValue);
    //     // Save the checkbox state to the cookie
    //     setCookie('ShowSelectTenantLogin', newValue, 365); // Cookie expires in 7 days
    // };
    // // Function to get cookie value by name
    // const getCookie = (name) => {
    //     const cookies = document.cookie.split(';');
    //     for (let i = 0; i < cookies.length; i++) {
    //         const cookie = cookies[i].trim();
    //         if (cookie.startsWith(`${name}=`)) {
    //             return cookie.substring(name.length + 1);
    //         }
    //     }
    //     return undefined;
    // };
    // // Function to set cookie value
    // const setCookie = (name, value, days) => {
    //     const expirationDate = new Date();
    //     expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration to one year from now
    //     const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    //     document.cookie = cookieValue;
    // };

    // const onSubmitTennant = (e) => {
    //     e.preventDefault();        
    //     var tenant = tenantRef.current.value;
    //     const values = tenant.split(/\s*\|\s*/);              
    //     const NewUserId = values[0];
    //     const UniqueId = values[1];      
    //     TenantHelper.FlipToSelectTenantActAs(Period, NewUserId, UniqueId);
    //     window.location.href = scriptLoader.getCorrectLinkValue('Account/Home.aspx');
    // }
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];


    return (
        <>
            <div className="row justify-content-center fs20">
                Select Tenant Login
            </div>
            <form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <div style={{ display: "flex" }}>
                        <SelectWithIcon {...withIconControlProps} options={options} />
                        <span className="joopy-btn">
                            <button style={{height:'36px'}}>
                            <FavoriteIcons //tooltip={Labels.Toolbar.favoriteReports}
                                isContour={false}
                                color="#ffcc00"
                            //onClick={() => { loadFavorites() }}
                            />
                            </button>
                        </span>
                    </div>

                </div>
                <div>
                    {/* <button variant="action" isRounded={true} onClick={onSubmitTennant}>"continueWithTenant"</button> */}
                    <button style={{
                        display: "inline-block",
                        fontWeight: 400,
                        cursor: "pointer",
                        textAlign: "center",
                        verticalAlign: "middle",
                        backgroundColor: "transparent",
                        padding: "0.375rem 0.75rem",
                        paddingLeft: "2.8rem ",
                        paddingRight: "2.82rem ",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        borderRadius: "0.25rem",
                        background: "#9f3c96",
                        border: "1px solid #9f3c96",
                        color: " #fff",
                        fill: "#9f3c96",
                        marginTop:"10px",
                    }}>
                        Continue With Tenant
                    </button>
                </div>
                {/* <div style={{ display: "flex" }} className="d-flex">
                    <input className="checkbox" type="checkbox" id='saveUserCheckbox' checked={checkboxVal} onChange={handleCheckboxChange} />
                    <span style={{ marginTop: "3px" }} className="checkbox-text">Save Default User</span>
                </div> */}
            </form>

        </>)
}