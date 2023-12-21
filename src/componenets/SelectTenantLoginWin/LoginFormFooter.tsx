import joo from "../../stories/assets/joo.png"
import React from 'react';


export default function LoginFormFoorter() {
    return (
        <div className="loginFormFooter" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"69px"}}>
            <img className="productLogo" src={joo} alt=""height={40} width={80} />
            <a //href='/registration/terms-conditions.aspx' 
            target={'_blank'}><span className="termsOfUse" style={{cursor:"pointer",color:"#4b4b4b",fontSize:"16px",fontWeight:500,textDecoration:"underline"}}>termsOfUse</span></a>
        </div>
    );
}

