import React from 'react';

interface PartnerLogo {
  type: 'url' | 'base64';
  logoData: string;
  logoType: string;
}

export interface LoginFormHeaderProps {
  partnerLogo: PartnerLogo | null;
}

export default function LoginFormHeader({ partnerLogo }: LoginFormHeaderProps) {
  let src: string | null = null;

  if (partnerLogo !== null) {
    if (partnerLogo.type === 'url') {
      src = partnerLogo.logoData;
    } else if (partnerLogo.type === 'base64') {
      src = `data:image/${partnerLogo.logoType};base64,${partnerLogo.logoData}`;
    }
  }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"30px"}}>
      {src && <img  src={src} alt="" />}
    </div>
  );
}
