"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return t?r.createElement(u,a(a({ref:n},c),{},{components:t})):r.createElement(u,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(67294),i=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"inferencer",title:"Inferencer"},p=void 0,c={unversionedId:"api-reference/mantine/components/inferencer",id:"version-3.xx.xx/api-reference/mantine/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports MantineListInferencer, MantineShowInferencer, MantineEditInferencer, MantineCreateInferencer and MantineInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/inferencer.md",sourceDirName:"api-reference/mantine/components",slug:"/api-reference/mantine/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/mantine/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1697033236,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/mantine/components/mantine-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/mantine/components/basic-views/create"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],f=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},u=f("Tabs"),h=f("TabItem"),g=f("CodeSandboxExample"),v={toc:d};function k(e){var{components:n}=e,t=l(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},v,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can automatically generate views for your resources using ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,i.kt)("inlineCode",{parentName:"p"},"MantineListInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MantineShowInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MantineEditInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MantineCreateInferencer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MantineInferencer")," (which combines all in one place) components."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Mantine components can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine"),". You can directly use the components in ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,i.kt)(u,{defaultValue:"resources",values:[{label:(0,i.kt)(r.Fragment,null,"In",(0,i.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"resources",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Layout,\n    MantineProvider,\n    LightTheme,\n    Global,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-start\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                        create: MantineInferencer,\n                        edit: MantineInferencer,\n                        // highlight-end\n                    },\n                ]}\n            />\n        </MantineProvider>\n    );\n};\n'))),(0,i.kt)(h,{value:"custom",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <MantineInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <MantineInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <MantineInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <MantineInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,i.kt)("h2",{id:"views"},"Views"),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"List")),(0,i.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," component and from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    MantineProvider,\n    LightTheme,\n    Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-next-line\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                        create: MantineInferencer,\n                        edit: MantineInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        // highlight-next-line\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                    {\n                        name: "tags",\n                        // highlight-next-line\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                ]}\n            />\n        </MantineProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"show"},(0,i.kt)("inlineCode",{parentName:"h3"},"Show")),(0,i.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    MantineProvider,\n    LightTheme,\n    Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MantineInferencer,\n                        // highlight-next-line\n                        show: MantineInferencer,\n                        create: MantineInferencer,\n                        edit: MantineInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MantineInferencer,\n                        // highlight-next-line\n                        show: MantineInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MantineInferencer,\n                        // highlight-next-line\n                        show: MantineInferencer,\n                    },\n                ]}\n            />\n        </MantineProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h3"},"Create")),(0,i.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," component and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    MantineProvider,\n    LightTheme,\n    Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                        // highlight-next-line\n                        create: MantineInferencer,\n                        edit: MantineInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                ]}\n            />\n        </MantineProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"edit"},(0,i.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,i.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," component and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    MantineProvider,\n    LightTheme,\n    Global,\n} from "@pankod/refine-mantine";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                        create: MantineInferencer,\n                        // highlight-next-line\n                        edit: MantineInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: MantineInferencer,\n                        show: MantineInferencer,\n                    },\n                ]}\n            />\n        </MantineProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine")," components."),(0,i.kt)(g,{path:"inferencer-mantine",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);