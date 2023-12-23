// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { SelectWithIcon } from '../../CommonComponent/SelectWithIcon';
// import FavoriteIcons from '../../CommonComponent/FavoriteIcon';
// import useCommonHook from '../../CommonComponent/CommonHook';
// import logoImg from '../../../public/Images/header-logo-joopy@2x.png'


// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 20px;
//   width: 100%;
//     min-width: 1000px;
//     min-height: 100%;
//     height: auto!important;
//     height: 100%;
//     background: #efefef;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const ButtonWrapper = styled.div`
//   display: flex;
//   margin-top: 10px;
// `;

// const Button = styled.button`
//   display: inline-block;
//   font-weight: 400;
//   cursor: pointer;
//   text-align: center;
//   vertical-align: middle;
//   background-color: transparent;
//   padding: 0.375rem 0.75rem;
//   padding-left: 3.4rem;
//   padding-right: 3.4rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   background: #9f3c96;
//   border: 1px solid #9f3c96;
//   color: #fff;
//   fill: #9f3c96;
// `;

// const SelectWithIconWrapper = styled.div`
//   display: flex;
// `;

// const FavoriteButton = styled.button`
//   height: 37px;
//   border: 1px solid #eaeaea;
// `;
//  const Header = styled.div` 
//     height: auto;
//     border: 0 none;
//     position: relative;
//     background-color: #fff;
//     &::before {
//         content: "";
//         z-index: 1;
//         background-color: #fff;
//         display: block;
//         width: 100%;
//         height: 24px;
//         position: absolute;
//         left: 0;
//         bottom: 0;
//     }
//     &::after {
//         content: "";
//         background-color: transparent;
//         z-index: 0;
//         display: block;
//         width: 100%;
//         border-radius: 100%;
//         height: 12px;
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         box-shadow: 0 0 12px 0 rgba(0,0,0,.3);
//     }
// `;
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 20px;
// `;
// const ImgCont = styled.a`
// margin: 0 auto;
// width: 260px;
// display: block;
// opacity: .98;
// `;

// const LogoImg = styled.img`
// display: block;
//     max-width: 100%;
//     `;

//    const JoopyLP = styled.div`
//    padding: 96px 80px;
//    font-family: "Segoe UI","Segoe UI Web Regular","Segoe UI Symbol","Helvetica Neue","BBAlpha Sans","S60 Sans",Arial,sans-serif;
//    `;
//    const JoopyLPHeader = styled.div`
//    font-size: 38px;
//    font-weight: 300;
//    line-height: 50px;
//    color: #9f3c96;
//    margin: 0 0 24px;
//    text-align: center;

//    `;

//    const JoopyLPForm  = styled.div`
//         position: relative;
//         background-color: #fff;
//         width: 360px;
//         margin: 0 auto;
//         padding: 36px 72px 36px;
//         border-radius: 64px;
//         box-shadow: 0 1px 2px 1px rgba(0,0,0,.15), 0 2px 8px 0 rgba(0,0,0,.1);
//         &::before {
//             content: '';
//             z-index: 1;
//             position: absolute;
//             right: 72px;
//             bottom: -76px;
//             display: inline-block;
//             border-top: 76px solid rgba(0,0,0,.2);
//             border-left: 64px solid transparent;
//             border-right: 0 solid transparent;
//         }
//         &::after {
//             content: '';
//             z-index: 1;
//             position: absolute;
//             right: 74px;
//             bottom: -72px;
//             display: inline-block;
//             border-top: 72px solid #fff;
//             border-left: 60px solid transparent;
//             border-right: 0 solid transparent;
//           }
//     `;
//     const Footer = styled.div`
//     in-height: 20px;
//     background-color: #aecfde;
//     margin: -30px auto 0;
//     min-width: 1000px;
//     height: 30px;
//     position: relative;
//     // background: #f4f7f9;
// `;
// const FooterCont = styled.div`
// min-width: 960px;
//     padding: 0 10px;
//     margin: 0 auto;`;
// const FooterText = styled.div`

//     font: 10px/30px Arial,sans-serif;
//     text-align: center;
//     color: #696969;`;
// // const onSubmitTennant = (e) => {
// //     e.preventDefault();        
// //     var tenant = tenantRef.current.value;
// //     const values = tenant.split(/\s*\|\s*/);              
// //     const NewUserId = values[0];
// //     const UniqueId = values[1];      
// //     TenantHelper.FlipToSelectTenantActAs(Period, NewUserId, UniqueId);
// //     window.location.href = scriptLoader.getCorrectLinkValue('Account/Home.aspx');
// // }
// // const options = [
// //     { value: "option1", label: "Option 1" },
// //     { value: "option2", label: "Option 2" },
// //     { value: "option3", label: "Option 3" },
// // ];

// export const SelectTenantScreen: React.FC = () => {
//     const [isFavorite, setIsFavorite] = useState(false);
//     const tenantRef = React.createRef<HTMLElement>();

//     const handleFavoriteClick = () => {
//         setIsFavorite((prevIsFavorite) => !prevIsFavorite);
//     };
//     const withIconControlProps = {
//         // icon: IconNames.users.tenants,
//         placeholder: "SelectTenantLogin",
//         ref: tenantRef,
//         required: true,
//     }


//     // const loadTenants = async () => {
//     //     var tenantList = await TenantHelper.getSelectTenantList();
//     //     const parsedData = JSON.parse(tenantList.selectTenant);    
//     //     setTenants(
//     //         parsedData.map((item) => ({
//     //             value: item.USER_ID + "|" + item.UNIQUE_ID,
//     //             label: item.DISPLAY_NAME,
//     //         }))
//     //     );

//     //   const options = [
//     //     { value: 'option1', label: 'Option 1' },
//     //     { value: 'option2', label: 'Option 2' },
//     //     { value: 'option3', label: 'Option 3' },
//     //   ];
//     const handleChange = (value: string) => {
//         console.log('Selected value changed:', value);
//     };
//     const { options, selectedValue, onChange } = useCommonHook({
//         selectedValue: 'Default', // Initial selected value
//         onChange: handleChange, // Assuming you have a handleChange function
//     });

//     return (
//         <>
//             <Header className="header login">
//                 <Container className="container">
//                     <h1 className="login-logo" style={{padding: '40px 0 28px ',margin:0}}>
//                         <ImgCont href="http://www.joopy.com" target="_blank" title="Joopy">
//                             <LogoImg src={logoImg} alt="Joopy"></LogoImg>
//                         </ImgCont>
//                     </h1>
//                 </Container>
//             </Header>
//             <Wrapper>
//                <JoopyLP>
//                 <JoopyLPForm>
//                 <JoopyLPHeader className="row justify-content-center fs20">Select Tenant Login</JoopyLPHeader>
//                 <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
//                     <SelectWithIconWrapper>
//                         <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} />
//                         <FavoriteButton onClick={handleFavoriteClick}>
//                             <FavoriteIcons isContour={false} color={isFavorite ? '#ffcc00' : '#4c5865'} />
//                         </FavoriteButton>
//                     </SelectWithIconWrapper>
//                     <ButtonWrapper>
//                         <Button>Continue With Tenant</Button>
//                     </ButtonWrapper>
//                 </Form>
//                 </JoopyLPForm>
//                 </JoopyLP>
//             </Wrapper>
//             <Footer className="footer">
//         <FooterCont className="container">
//             <FooterText className="footer_text_block">
//             <p className="copyrights" title="All rights reserved to Incentives-Solutions - a leading provider of compensation management systems, incentive compensation management software, and performance management consulting">All rights reserved to Incentives-Solutions - a leading provider of compensation management systems, incentive compensation management software, and performance management consulting
//             {"   "} <span  style={{display: 'inline-block'}} className="app_version" title="(Version 9.69)">   (Version 9.69)</span>
//             </p>
//             </FooterText>
//         </FooterCont>
//     </Footer>
//         </>
//     );
// };


import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectWithIcon } from '../../CommonComponent/SelectWithIcon';
import FavoriteIcons from '../../CommonComponent/FavoriteIcon';
import useCommonHook from '../../CommonComponent/CommonHook';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import SelectTenantLoginForm from './SelectTenantLoginForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 100%;
  min-width: 1000px;
  min-height: 100%;
  height: auto!important;
  height: 100%;
  background: #efefef;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  padding-left: 3.4rem;
  padding-right: 3.4rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background: #9f3c96;
  border: 1px solid #9f3c96;
  color: #fff;
  fill: #9f3c96;
`;

const SelectWithIconWrapper = styled.div`
  display: flex;
`;

const FavoriteButton = styled.button`
  height: 37px;
  border: 1px solid #eaeaea;
`;

const JoopyLPContent = styled.div`
    min-height: 600px;
    padding: 0 0 5px;
    // min-height: 510px;
    position: relative;
`;
const JoopyLP = styled.div`
  padding: 96px 80px;
  font-family: "Segoe UI","Segoe UI Web Regular","Segoe UI Symbol","Helvetica Neue","BBAlpha Sans","S60 Sans",Arial,sans-serif;
`;

const JoopyLPHeader = styled.div`
  font-size: 38px;
  font-weight: 300;
  line-height: 50px;
  color: #9f3c96;
  margin: 0 0 24px;
  text-align: center;
`;

const JoopyLPForm = styled.div`
  position: relative;
  background-color: #fff;
  width: 360px;
  margin: 0 auto;
  padding: 36px 72px 36px;
  border-radius: 64px;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.15), 0 2px 8px 0 rgba(0,0,0,.1);
  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    right: 72px;
    bottom: -76px;
    display: inline-block;
    border-top: 76px solid rgba(0,0,0,.2);
    border-left: 64px solid transparent;
    border-right: 0 solid transparent;
  }
  &::after {
    content: '';
    z-index: 1;
    position: absolute;
    right: 74px;
    bottom: -72px;
    display: inline-block;
    border-top: 72px solid #fff;
    border-left: 60px solid transparent;
    border-right: 0 solid transparent;
  }
`;

const SelectTenantScreen: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const tenantRef = React.createRef<HTMLElement>();

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const withIconControlProps = {
    // icon: IconNames.users.tenants,
    placeholder: "SelectTenantLogin",
    ref: tenantRef,
    required: true,
  }

  const handleChange = (value: string) => {
    console.log('Selected value changed:', value);
  };

  const { options, selectedValue, onChange } = useCommonHook({
    selectedValue: 'Default', // Initial selected value
    onChange: handleChange, // Assuming you have a handleChange function
  });

  return (
    <>
      {/* <Header /> */}
      <Wrapper>
        <JoopyLPContent>
        <JoopyLP>
          <JoopyLPForm>
            <JoopyLPHeader className="row justify-content-center fs20">Select Tenant Login</JoopyLPHeader>
            {/* <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
              <SelectWithIconWrapper>
                <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} />
                <FavoriteButton onClick={handleFavoriteClick}>
                  <FavoriteIcons isContour={false} color={isFavorite ? '#ffcc00' : '#4c5865'} />
                </FavoriteButton>
              </SelectWithIconWrapper>
              <ButtonWrapper>
                <Button>Continue With Tenant</Button>
              </ButtonWrapper>
            </Form> */}
            <SelectTenantLoginForm/>
          </JoopyLPForm>
        </JoopyLP>
        </JoopyLPContent>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default SelectTenantScreen;


