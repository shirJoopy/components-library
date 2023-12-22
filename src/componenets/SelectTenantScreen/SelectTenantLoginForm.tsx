import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectWithIcon } from '../../CommonComponent/SelectWithIcon';
import FavoriteIcons from '../../CommonComponent/FavoriteIcon';
import useCommonHook from '../../CommonComponent/CommonHook';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

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

const SelectTenantLoginForm: React.FC = () => {
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
     
            <JoopyLPHeader className="row justify-content-center fs20">Select Tenant Login</JoopyLPHeader>
            <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
              <SelectWithIconWrapper>
                <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} />
                <FavoriteButton onClick={handleFavoriteClick}>
                  <FavoriteIcons isContour={false} color={isFavorite ? '#ffcc00' : '#4c5865'} />
                </FavoriteButton>
              </SelectWithIconWrapper>
              <ButtonWrapper>
                <Button>Continue With Tenant</Button>
              </ButtonWrapper>
            </Form>
        
      
      {/* <Footer /> */}
    </>
  );
};

export default SelectTenantLoginForm;


