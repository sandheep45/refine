"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"swizzle",tutorial:{prev:"tutorial/understanding-dataprovider/index",next:"tutorial/understanding-dataprovider/create-dataprovider"}},o="2. Create a data provider with `swizzle`",d={unversionedId:"tutorial/understanding-dataprovider/swizzle",id:"tutorial/understanding-dataprovider/swizzle",title:"2. Create a data provider with `swizzle`",description:"What is swizzle?",source:"@site/docs/tutorial/2-understanding-dataprovider/1-swizzle.md",sourceDirName:"tutorial/2-understanding-dataprovider",slug:"/tutorial/understanding-dataprovider/swizzle",permalink:"/docs/tutorial/understanding-dataprovider/swizzle",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/2-understanding-dataprovider/1-swizzle.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683546356,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:1,frontMatter:{id:"swizzle",tutorial:{prev:"tutorial/understanding-dataprovider/index",next:"tutorial/understanding-dataprovider/create-dataprovider"}}},s={},l=[{value:"What is <code>swizzle</code>?",id:"what-is-swizzle",level:2},{value:"How do you use <code>swizzle</code> to create an data provider?",id:"how-do-you-use-swizzle-to-create-an-data-provider",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=p("Checklist"),u=p("ChecklistItem"),m={toc:l};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2-create-a-data-provider-with-swizzle"},"2. Create a data provider with ",(0,n.kt)("inlineCode",{parentName:"h1"},"swizzle")),(0,n.kt)("h2",{id:"what-is-swizzle"},"What is ",(0,n.kt)("inlineCode",{parentName:"h2"},"swizzle"),"?"),(0,n.kt)("p",null,"In some cases, ",(0,n.kt)("strong",{parentName:"p"},"refine's")," built-in data providers may not fully meet your API needs, and you may want to edit the existing data provider logic. If that is the case, you should use ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli#swizzle"},(0,n.kt)("inlineCode",{parentName:"a"},"swizzle"))," is a command in ",(0,n.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"refine-cli"))," that allows you to customize ",(0,n.kt)("strong",{parentName:"p"},"refine\u2019s")," supported components and data providers by letting you eject selected files from the ",(0,n.kt)("strong",{parentName:"p"},"refine")," packages and modify them depending on your needs."),(0,n.kt)("p",null,"This also allows you to use the ejected file code logic as a starting point for your modifications instead of starting from scratch."),(0,n.kt)("h2",{id:"how-do-you-use-swizzle-to-create-an-data-provider"},"How do you use ",(0,n.kt)("inlineCode",{parentName:"h2"},"swizzle")," to create an data provider?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle")," command in the project directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the data provider package of your choice from the list. We are using ",(0,n.kt)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," in this tutorial so we will choose that."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"? Which package do you want to swizzle?\n  Data Provider\n\u276f  @refinedev/simple-rest\n  UI Framework\n  @refinedev/antd\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"swizzle")," will copy the necessary files for this package to the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/rest-data-provider")," folder"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Successfully swizzled Data Provider\n\nFiles created:\n- src/rest-data-provider/index.ts\n- src/rest-data-provider/utils/axios.ts\n- src/rest-data-provider/utils/generateFilter.ts\n- src/rest-data-provider/utils/generateSort.ts\n- src/rest-data-provider/utils/mapOperator.ts\n- src/rest-data-provider/utils/index.ts\n\nWarning:\nYou will also need to add axios to your project dependencies.\n\nUsage\n\n  \u256d App.tsx \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n  \u2502                                                          \u2502\n  \u2502   import { dataProvider } from "./rest-data-provider";   \u2502\n  \u2502                                                          \u2502\n  \u2502   const App = () => {                                    \u2502\n  \u2502       return (                                           \u2502\n  \u2502           <Refine                                        \u2502\n  \u2502               dataProvider={dataProvider}                \u2502\n  \u2502               /* ... */                                  \u2502\n  \u2502           />                                             \u2502\n  \u2502       );                                                 \u2502\n  \u2502   }                                                      \u2502\n  \u2502                                                          \u2502\n  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To use the generated data provider, we need to import it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and give it as a ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," prop to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component."))),(0,n.kt)("p",null,"And with that, you are now able to modify and use the ejected data provider however you want. Amount of time saved using ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle")," instead of creating a data provider from scratch is quite substantial."),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(u,{id:"data-provider-swizzle",mdxType:"ChecklistItem"},"I have learned what `swizzle` is and how to use it.")))}f.isMDXComponent=!0}}]);