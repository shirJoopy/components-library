"use strict";(self.webpackChunkjoopy_library=self.webpackChunkjoopy_library||[]).push([[674],{"./src/componenets/Feed/Wall/Wall.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Wall_stories});var _templateObject,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Message=__webpack_require__("./src/componenets/Feed/Message/Message.tsx"),react=__webpack_require__("./node_modules/react/index.js"),TabStrip=__webpack_require__("./node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStrip.js"),TabStripTab=__webpack_require__("./node_modules/@progress/kendo-react-layout/dist/es/tabstrip/TabStripTab.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let StyledWall=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    \n    flex-direction: column;\n    display: flex;\n    flex: 1;\n    min-width: 300px;\n    height: 100%;\n    width: 100%;    \n"]))),Wall=_ref=>{let{feed}=_ref,[selected,setSelected]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(TabStrip.k,{dir:"Hebrew"===window._userLanguage?"rtl":"ltr",selected:selected,onSelect:e=>{setSelected(e.selected)},style:{maxHeight:"90vh"},children:feed.map(_ref2=>{let{title,messages}=_ref2;return(0,jsx_runtime.jsx)(TabStripTab.D,{title:title,children:(0,jsx_runtime.jsx)(StyledWall,{children:messages.map((message,index)=>(0,jsx_runtime.jsx)(Message.Z,{...message,index:index},index))})})})})};try{Wall.displayName="Wall",Wall.__docgenInfo={description:"",displayName:"Wall",props:{feed:{defaultValue:null,description:"",name:"feed",required:!0,type:{name:"TopicType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/componenets/Feed/Wall/Wall.tsx#Wall"]={docgenInfo:Wall.__docgenInfo,name:"Wall",path:"src/componenets/Feed/Wall/Wall.tsx#Wall"})}catch(__react_docgen_typescript_loader_error){}let parseUser=props=>({DB:props,id:props.USER_ID,username:props.USERNAME,channel_id:props.CHANNEL_ID,canSeeOtherEmployees:"Y"===props.CAN_SEE_OTHER_EMPLOYEES,role:props.USER_ROLE,roleId:props.PERMISSION_ROLE_ID,departmentId:props.DEP_ID,mgrReadOnly:"Y"===props.MGR_READ_ONLY,chartId:props.CHART_ID,salaryVisible:"Y"===props.SALARY_VISIBLE,dataVisible:"Y"===props.DATA_VISIBLE}),Wall_stories={title:"Components/Wall",component:Wall,parameters:{layout:"centered"},argTypes:{}},DB_RESULT={data:{messages:[{MESSAGE_ID:1,SUBJECT:"subject1",BODY:"some text 1",CREATION_DATE:"20/12/2023",FILE_ID:5,SENDER_USER_ID:3742,POSITION:1},{MESSAGE_ID:2,SUBJECT:"subject2",BODY:"&lt;p&gt;Test Public&amp;nbsp;&lt;/p&gt;&lt;p&gt;saasd&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;http://google.com&quot;&gt;google&lt;/a&gt;&lt;/p&gt;",CREATION_DATE:"20/12/2023",FILE_ID:6,SENDER_USER_ID:3731,POSITION:2},{MESSAGE_ID:1,SUBJECT:"subject3",BODY:"some text 3",CREATION_DATE:"20/12/2023",FILE_ID:7,SENDER_USER_ID:3731,POSITION:3}],users:[{USERNAME:"GS441",USER_ID:3731,CHANNEL_ID:76766,USER_ROLE:"SuperUser",DEP_ID:18645,DATA_VISIBLE:"Y",SALARY_VISIBLE:"Y",CHART_ID:0,MGR_READ_ONLY:"N",TENANT_ID:1318,PERMISSION_ROLE_ID:1,CAN_SEE_OTHER_EMPLOYEES:"Y"},{USERNAME:"GS442",USER_ID:3742,CHANNEL_ID:-9999,USER_ROLE:"SuperUser",DEP_ID:18645,DATA_VISIBLE:"Y",SALARY_VISIBLE:"Y",CHART_ID:0,MGR_READ_ONLY:"N",TENANT_ID:1318,PERMISSION_ROLE_ID:1,CAN_SEE_OTHER_EMPLOYEES:"Y"}]}},userMap=DB_RESULT.data.users.reduce((acc,user)=>({...acc,[user.USER_ID]:parseUser(user)}),{}),parseMessage=message=>({type:"alert",title:message.SUBJECT,content:message.BODY,date:message.CREATION_DATE,Icon:"",author:userMap[message.SENDER_USER_ID]}),Primary={args:{feed:[{messages:DB_RESULT.data.messages.map(parseMessage),users:Object.values(userMap),pkId:0,id:0,title:"test"},{messages:DB_RESULT.data.messages.map(parseMessage),users:Object.values(userMap),pkId:0,id:0,title:"test1"}]}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs,source:{originalSource:"{\n  args: {\n    feed: [{\n      messages: DB_RESULT.data.messages.map(parseMessage),\n      users: Object.values(userMap),\n      pkId: 0,\n      id: 0,\n      title: 'test'\n    }, {\n      messages: DB_RESULT.data.messages.map(parseMessage),\n      users: Object.values(userMap),\n      pkId: 0,\n      id: 0,\n      title: 'test1'\n    }]\n  }\n}",...null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2?void 0:null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source}}};let __namedExportsOrder=["Primary"]},"./src/componenets/Feed/Message/Message.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");__webpack_require__("./node_modules/react/index.js");var _progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@progress/kendo-react-layout/dist/es/card/Card.js"),_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@progress/kendo-react-layout/dist/es/card/Avatar.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/componenets/Icons/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function decodeHtmlEntities(html){let textarea=document.createElement("textarea");return textarea.innerHTML=html,textarea.value}let StyledMessage=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(_templateObject||(_templateObject=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display:flex;\n    flex-direction: column;\n    padding: 8px;\n    &:hover{\n        background-color: #aecfdeFF; \n    }\n    ","\n    ","\n"])),_ref=>{let{index=0}=_ref;return index%2==0?(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(_templateObject2||(_templateObject2=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n            background-color: #aecfde70; /* Light color for even rows */\n        "]))):(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(_templateObject3||(_templateObject3=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n            background-color: #aecfde50; /* Light color for even rows */\n        "])))},()=>"Hebrew"===window._userLanguage&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(_templateObject4||(_templateObject4=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n        /* RTL specific styles */\n        direction: rtl;\n        text-align: right; /* Adjust text alignment for RTL */\n    "])))),Spacer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(_templateObject5||(_templateObject5=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    margin  : ",";\n\n"])),_ref2=>{let{size}=_ref2;return(null!=size?size:5)+"px"}),StyledMessageHeader=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(_templateObject6||(_templateObject6=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    padding-bottom: 4px;\n    .icon {\n        position: absolute;\n        ",": 0px; /* Adjust icon position */\n        width: 20px;\n        height: 20px;\n    }\n    .avatar{\n        align-self: center;\n        direction: ",";\n    }\n    .props{\n        display: flex;\n        align-items: flex-start; \n        flex-direction: column;\n        span{\n            line-height: 1em;\n            &.author{\n                color:gray;\n                font-style: italic;\n            }\n            &.title{\n                font-weight: bold;\n                font-size:1.2em;\n                text-transform: capitalize;\n            }\n        }\n    }\n"])),()=>"Hebrew"===window._userLanguage?"left":"right",()=>(window._userLanguage,"ltr")),Icons={alert:_Icons__WEBPACK_IMPORTED_MODULE_1__.M.AlertSvg,message:_Icons__WEBPACK_IMPORTED_MODULE_1__.M.PrivateSvg},StyledMessageContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(_templateObject7||(_templateObject7=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    border:thin solid #00000015;\n    padding: 8px;\n    border-radius: 10px;\n    ","\n    \n"])),()=>"Hebrew"===window._userLanguage&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(_templateObject8||(_templateObject8=(0,C_Users_shir_l_source_Workspaces_joopy_library_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n        /* RTL specific styles */\n        text-align: right; /* Adjust text alignment for RTL */\n    "])))),Message=message=>{let{title,content,date,author,type}=message;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_5__.Z,{style:{width:"100%",marginBottom:"15px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledMessage,{...message,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledMessageHeader,{...message,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_progress_kendo_react_layout__WEBPACK_IMPORTED_MODULE_6__.q,{type:"image",className:"avatar",style:{margin:0}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Spacer,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"props",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:"author",children:[author.username," - ",author.role]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"title",children:title})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"icon",src:Icons[type]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledMessageContent,{...message,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{style:{padding:0,flex:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{dangerouslySetInnerHTML:{__html:decodeHtmlEntities(content)}})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{style:{margin:0,padding:0},children:["Date: ",date]})]})})},__WEBPACK_DEFAULT_EXPORT__=Message;try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"alert"'},{value:'"message"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"UserType"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/componenets/Feed/Message/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/componenets/Feed/Message/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./src/componenets/Icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>messagesIcons_namespaceObject});var messagesIcons_namespaceObject={};__webpack_require__.r(messagesIcons_namespaceObject),__webpack_require__.d(messagesIcons_namespaceObject,{AlertSvg:()=>sources_alert,PrivateSvg:()=>sources_private}),__webpack_require__("./node_modules/react/index.js");let sources_alert=__webpack_require__.p+"static/media/alert.ab7c52cf7276b7c1605c4a691befe542.svg",sources_private=__webpack_require__.p+"static/media/private.2cfb4b7f3cb08fd346f8ad4c55df4d12.svg"}}]);