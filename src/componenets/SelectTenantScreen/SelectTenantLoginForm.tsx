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

// ... (imports and styled components remain the same)

const SelectTenantLoginForm: React.FC = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedValue, setSelectedValue] = useState(""); 
    const tenantRef = React.createRef<HTMLElement>();
  
    const withIconControlProps = {
      placeholder: "SelectTenantLogin",
      ref: tenantRef,
      required: true,
    }
  
    const [options, setOptions] = useState([
      { value: "1", label: "1", fav: "Y" },
      { value: "2", label: "2", fav: "N" },
      { value: "3", label: "3", fav: "N" },
    ]);
  
    // Initialize selectedValue and isFavorite when the component mounts
    useEffect(() => {
      setSelectedValue(options[0]?.value || ""); // Set to the value of the first option, adjust as needed
      setIsFavorite(options[0]?.fav === 'Y');
    }, [options]);
  
    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
      setTimeout(() => {
        updateOptionsel(); // Update the options array after a delay
      }, 1000);
    };
  
    useEffect(() => {
      const hasFavorite = options.find((option) => option.value === selectedValue && option.fav === 'Y');
      setIsFavorite(!!hasFavorite);
    }, [options, selectedValue]);
  
    const updateOptionsel = () => {
      const updatedOptions = options.map((option) => ({
        ...option,
        fav: option.value === selectedValue && isFavorite ? 'Y' : 'N',
      }));
  
      setOptions(updatedOptions);
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedValue(value);
    };
  
    return (
      <>
        <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
          <SelectWithIconWrapper>
            <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} handleChange={handleChange} />
            <FavoriteButton onClick={handleFavoriteClick}>
              <FavoriteIcons isContour={false} color={isFavorite ? '#ffcc00' : '#4c5865'} favorite={isFavorite} />
            </FavoriteButton>
          </SelectWithIconWrapper>
          <ButtonWrapper>
            <Button>Continue With Tenant</Button>
          </ButtonWrapper>
        </Form>
      </>
    );
  };
  
  export default SelectTenantLoginForm;
  


// const SelectTenantLoginForm: React.FC = () => {
//   const [isFavorite, setIsFavorite] = useState(false);
// //   const [favorite, setFavorite] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(""); 
//   const tenantRef = React.createRef<HTMLElement>();

  

//   const withIconControlProps = {
//     // icon: IconNames.users.tenants,
//     placeholder: "SelectTenantLogin",
//     ref: tenantRef,
//     required: true,
//   }


// //   const { options, selectedValue, onChange } = useCommonHook({
// //     selectedValue: 'Default', // Initial selected value
// //     onChange: handleChange, // Assuming you have a handleChange function
// //   });
// const [options, setOptions] = useState([
//     { value: "1", label: "1", fav: "Y" },
//     { value: "2", label: "2", fav: "N" },
//     { value: "3", label: "3", fav: "N" },
//   ]);
//   const handleFavoriteClick = () => {
//     setIsFavorite(true);
//     // updateOptionsel(); // Update the options array
//     setTimeout(() => {
//         updateOptionsel(); // Update the options array after a delay
//       }, 1000);
//   };
//   console.log("isFavorite",isFavorite)
//   React.useEffect(() => {
//    console.log("selectedValue",selectedValue,options)
//  options.map((option) => {
//    if (option.value === selectedValue) {
//      if(option.fav === 'Y'){
//     console.log('optionfavorite',isFavorite,option.fav);

//         // setFavorite(true);
//         setIsFavorite(true);
//      }
//    }
//  });

// }, [options,selectedValue]);


  
//   const updateOptionsel = () => {
//       // Update the options array based on the isFavorite value
//       const updatedOptions = options.map((option) => {
//         console.log("isFavorite2222222",isFavorite)

//           if (option.value === selectedValue) {
//               return { ...option, fav: isFavorite ? 'Y' : 'N' };
//             } 
//             return { ...option, fav: 'N' };
            
//         });
//           console.log("isFavorite",isFavorite)
        
//     setOptions(updatedOptions);
//   };
// // const updateOptions = (selectedValue: string) => {
// //     const updatedOptions = options.map((option) => ({
// //       ...option,
// //       fav: option.value === selectedValue && isFavorite ? 'Y' : 'N',
// //     }));
  
// //     setOptions(updatedOptions);
// //   };

//   console.log('Selected options changed:', options);

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   const { value } = event.target;
//   setSelectedValue && setSelectedValue(value); // Call the callback if available
//   console.log('Selected value changed:', value);
// };


//   return (
//     <>
//       {/* <Header /> */}
     
           
//             <Form action="#" className="signin-form" onSubmit={(e) => e.preventDefault()}>
//               <SelectWithIconWrapper>
//                 <SelectWithIcon {...withIconControlProps} options={options} ref={tenantRef} handleChange={handleChange} />
//                 <FavoriteButton onClick={handleFavoriteClick}>
//                   <FavoriteIcons isContour={false} color={isFavorite ? '#ffcc00' : '#4c5865'} favorite={isFavorite} />
//                 </FavoriteButton>
//               </SelectWithIconWrapper>
//               <ButtonWrapper>
//                 <Button>Continue With Tenant</Button>
//               </ButtonWrapper>
//             </Form>
        
      
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default SelectTenantLoginForm;


