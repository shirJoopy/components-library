import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectWithIcon } from '../../CommonComponent/SelectWithIcon';
import FavoriteIcons from '../../CommonComponent/FavoriteIcon';
import useCommonHook from '../../CommonComponent/CommonHook';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component


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

const SelectTenantLoginForm: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedValue, setSelectedValue] = useState(""); 
  const tenantRef = React.createRef<HTMLElement>();

  

  const withIconControlProps = {
    // icon: IconNames.users.tenants,
    placeholder: "SelectTenantLogin",
    ref: tenantRef,
    required: true,
  }


//   const { options, selectedValue, onChange } = useCommonHook({
//     selectedValue: 'Default', // Initial selected value
//     onChange: handleChange, // Assuming you have a handleChange function
//   });
const [options, setOptions] = useState([
    { value: "1", label: "1", fav: "Y" },
    { value: "2", label: "2", fav: "N" },
    { value: "3", label: "3", fav: "N" },
  ]);
  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    updateOptionsel(); // Update the options array
  };
 


//   console.log("fav",isFavorite)

const updateOptionsel = () => {
    // Update the options array based on the isFavorite value
    const updatedOptions = options.map((option) => {
      if (option.value === selectedValue) {
        return { ...option, fav: isFavorite ? 'Y' : 'N' };
      } else {
        return { ...option, fav: 'N' };
    }
    return option;

    });
  
    setOptions(updatedOptions);
  };
// const updateOptions = (selectedValue: string) => {
//     const updatedOptions = options.map((option) => ({
//       ...option,
//       fav: option.value === selectedValue && isFavorite ? 'Y' : 'N',
//     }));
  
//     setOptions(updatedOptions);
//   };

  console.log('Selected options changed:', options);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const { value } = event.target;
  setSelectedValue && setSelectedValue(value); // Call the callback if available
  console.log('Selected value changed:', value);
};


  return (
    <>
      {/* <Header /> */}
     
           
            <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
              <SelectWithIconWrapper>
                <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} handleChange={handleChange} />
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


