"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"csv-import",title:"CSV Import"},i=void 0,p={unversionedId:"advanced-tutorials/import-export/csv-import",id:"advanced-tutorials/import-export/csv-import",title:"CSV Import",description:"You can easily import CSV files for any resource by using refine's customizable useImport hook, optionally with ` component. useImport hook returns the necessary props for ` component.",source:"@site/docs/advanced-tutorials/import-export/csv-import.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-import",permalink:"/docs/advanced-tutorials/import-export/csv-import",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/import-export/csv-import.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1685081689,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"csv-import",title:"CSV Import"},sidebar:"someSidebar",previous:{title:"CSV Export",permalink:"/docs/advanced-tutorials/import-export/csv-export"},next:{title:"Live / Realtime",permalink:"/docs/advanced-tutorials/real-time"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],l=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can easily import CSV files for any resource by using ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s customizable ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook, optionally with ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," component. ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook returns the necessary props for ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," component."),(0,a.kt)("p",null,"Internally, ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the CSV file contents."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," with properties returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport"),". When the button gets triggered, it creates the imported resources using ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#create"},(0,a.kt)("inlineCode",{parentName:"a"},"create"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#createmany"},(0,a.kt)("inlineCode",{parentName:"a"},"createMany"))," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},"dataProvider")," methods under the hood."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { List, useImport, ImportButton } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    const importProps = useImport<IPostFile>();\n\n    return (\n        <List\n            headerProps={{\n                extra: <ImportButton {...importProps} />,\n            }}\n        >\n            ...\n        </List>\n    );\n};\n\ninterface IPostFile {\n    id: number;\n    title: string;\n    content: string;\n    userId: number;\n    categoryId: number;\n    status: "published" | "draft" | "rejected";\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n    user: { id: number };\n}\n')),(0,a.kt)("p",null,"As an example, let's say we have a CSV file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,a.kt)("p",null,"We need to map the CSV data to the API's data. In our case, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," in CSV. For the API, we need to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," objects. To do this, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { List, useImport, ImportButton } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    const importProps = useImport<IPostFile>({\n        // highlight-start\n        mapData: (item) => {\n            return {\n                title: item.title,\n                content: item.content,\n                status: item.status,\n                category: {\n                    id: item.categoryId,\n                },\n                user: {\n                    id: item.userId,\n                },\n            };\n        },\n        // highlight-end\n    });\n\n    return (\n        <List\n            headerProps={{\n                extra: <ImportButton {...importProps} />,\n            }}\n        >\n            ...\n        </List>\n    );\n};\n\ninterface IPostFile {\n    id: number;\n    title: string;\n    content: string;\n    userId: number;\n    categoryId: number;\n    status: "published" | "draft" | "rejected";\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n    user: { id: number };\n}\n')),(0,a.kt)("p",null,"And it's done. When you click on the button and provide a CSV file of the headers ",(0,a.kt)("inlineCode",{parentName:"p"},'"title"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"content"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"status"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"categoryId"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"userId"'),", it should be mapped and imported. Mapped data is the request payload. Either as part of an array or by itself as part of every request. In our example, it fires ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request/requests like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="POST https://api.fake-rest.refine.dev/posts"',title:'"POST','https://api.fake-rest.refine.dev/posts"':!0},'{\n    "title": "dummy title 1",\n    "content": "dummy content 1",\n    "status": "rejected",\n    "category": {\n        "id": "3"\n    },\n    "user": {\n        "id": "8"\n    }\n}\n')),(0,a.kt)("p",null,"Depending on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useImport/#batchsize"},(0,a.kt)("inlineCode",{parentName:"a"},"batchSize"))," option, posts can get sent one by one or as batches. By default, all records are sent in one ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#createmany"},(0,a.kt)("inlineCode",{parentName:"a"},"createMany"))," call."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(l,{path:"import-export-antd",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);