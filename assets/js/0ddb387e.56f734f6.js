"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},i=void 0,p={unversionedId:"examples/data-provider/nhost",id:"version-3.xx.xx/examples/data-provider/nhost",title:"Nhost",description:"refine Nhost GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with refine project.",source:"@site/versioned_docs/version-3.xx.xx/examples/data-provider/nhost.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/nhost",permalink:"/docs/3.xx.xx/examples/data-provider/nhost",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/data-provider/nhost.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679484544,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},sidebar:"someSidebar",previous:{title:"Nestjsx Crud",permalink:"/docs/3.xx.xx/examples/data-provider/nestjsxCrud"},next:{title:"Strapi",permalink:"/docs/3.xx.xx/examples/data-provider/strapi"}},s={},d=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," ",(0,a.kt)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,a.kt)("strong",{parentName:"p"},"refine"),", you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with ",(0,a.kt)("strong",{parentName:"p"},"refine")," project."),(0,a.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,a.kt)("p",null," By default, the data provider assume that your ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,a.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,a.kt)("inlineCode",{parentName:"h4"},"idType")),(0,a.kt)("p",null," This will allow you to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n    idType: "Int",\n});\n')),(0,a.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,a.kt)("inlineCode",{parentName:"h4"},"idType")),(0,a.kt)("p",null," This will allow you to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n    users: "Int",\n    posts: "uuid",\n};\nconst myDataProvider = dataProvider(client, {\n    idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,a.kt)("p",null," :::note Demo Credentials\n",(0,a.kt)("strong",{parentName:"p"},"Username"),": ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev"),"\n",(0,a.kt)("strong",{parentName:"p"},"Password"),": demodemo\n:::"),(0,a.kt)(l,{path:"data-provider-nhost",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);