"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51933],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(i),u=n,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return i?a.createElement(h,o(o({ref:t},m),{},{components:i})):a.createElement(h,o({ref:t},m))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},46793:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=i(87462),n=(i(67294),i(3905));const r={title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/web3-with-refine",source:"@site/blog/2021-12-13-web3-refine.md",title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"web3",permalink:"/blog/tags/web-3"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:1.53,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"},nextItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},relatedPosts:[{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.02,date:"2023-06-01T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.625,date:"2022-09-11T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:22.615,date:"2022-11-17T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.255,date:"2022-02-22T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",description:"We will see how easy it is to develop a functional Admin panel with the perfect harmony of Refine and Ant Design.",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.61,date:"2022-02-21T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.085,date:"2022-03-29T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[{value:"What is Web3?",id:"what-is-web3",level:2},{value:"What is dApps(Dapps)?",id:"what-is-dappsdapps",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],m={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this article, we will talk about what is web3 and a simple ethereum wallet login application with ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("h2",{id:"what-is-web3"},"What is Web3?"),(0,n.kt)("p",null,"Web 3.0 eliminates intermediates. There\u2019s no centralized database that stores the application state."),(0,n.kt)("p",null,"In web3, developers don't usually build and deploy applications that run on a single server or that store their data in a single database.\nInstead of, Web3 applications run on blockchains, decentralized networks of many peer to peer nodes"),(0,n.kt)("p",null,"Features provided by Web3:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifiable"),(0,n.kt)("li",{parentName:"ul"},"Self-governing"),(0,n.kt)("li",{parentName:"ul"},"Permissionless"),(0,n.kt)("li",{parentName:"ul"},"Stateful"),(0,n.kt)("li",{parentName:"ul"},"Trustless"),(0,n.kt)("li",{parentName:"ul"},"Native built-in payments"),(0,n.kt)("li",{parentName:"ul"},"Anonymity")),(0,n.kt)("h2",{id:"what-is-dappsdapps"},"What is dApps(Dapps)?"),(0,n.kt)("p",null,'Dapps is short for "Decentralized Applications" and refers to any application that is decentralized in nature, built on a blockchain, and may use tokens for transactions.'),(0,n.kt)("p",null,"Dapps is just like any other software application you use. It could be a website or an app on your phone. What makes a Dapp different than a traditional app is that it's built on a decentralized network, like Ethereum."),(0,n.kt)("p",null,"Many applications on the logic of dApp have been developed and continue to be developed."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/dapps/"},"Here you can browse some dapps")),(0,n.kt)("p",null,"We have developed a simple app where you can login with ethereum and send ethereum over the network using Metamask Wallet and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,"This application allows you to login with your web3 wallet and you can also send ethereum over the ethereum network."),(0,n.kt)("p",null,"This example is simple intro to dApps development  built with web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-13-web3-refine/login.gif",alt:"login"}),(0,n.kt)("br",null),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-12-13-web3-refine/overview.gif",alt:"overview"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can develop many fast and functional dApps using web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-web3"},"View Source")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/web3/ethereum-signin/"},"View Guide")),(0,n.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/signin-with-ethereum-umho3?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"signin-with-ethereum",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}d.isMDXComponent=!0}}]);