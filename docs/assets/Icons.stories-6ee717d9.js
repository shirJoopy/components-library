import{a as n,j as t}from"./jsx-runtime-bc5d6cf6.js";import{a as u}from"./alert-bc6e9378.js";import{r as a}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const f=Object.freeze(Object.defineProperty({__proto__:null,AlertSvg:u},Symbol.toStringTag,{value:"Module"})),g=({icons:r})=>{const[o,p]=a.useState(""),m=a.useMemo(()=>Object.entries(r).filter(([e])=>e.toLowerCase().includes(o.toLowerCase())),[r,o]);return n("div",{style:{flexDirection:"column",display:"flex",height:"90vh"},children:[t("div",{style:{flex:1},children:m.map(([e,d])=>n("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[t("img",{src:d,title:e,alt:e,style:{width:30,height:30}}),t("div",{style:{fontSize:12},children:e})]}))}),t("input",{placeholder:"search",style:{alignSelf:"center"},type:"text",onChange:e=>p(e.target.value)})]})},v={title:"Example/Icons",component:g},s={args:{icons:{...f}}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icons: {
      ...Icons.MessgeIcons
    }
    // Your arguments for the HomeIcons component or icon set
    // For example, if HomeIcons is a component that renders multiple icons,
    // pass appropriate props here.
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const S=["MessgeIcons"];export{s as MessgeIcons,S as __namedExportsOrder,v as default};
