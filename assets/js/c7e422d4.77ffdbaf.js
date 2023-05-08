"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"useTitle",title:"useTitle"},a=void 0,s={unversionedId:"api-reference/core/hooks/refine/useTitle",id:"version-3.xx.xx/api-reference/core/hooks/refine/useTitle",title:"useTitle",description:"useTitle returns a component that calls the ` passed to the `. In this way, it becomes easier for us to access this component in various parts of the application.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/refine/useTitle.md",sourceDirName:"api-reference/core/hooks/refine",slug:"/api-reference/core/hooks/refine/useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/refine/useTitle.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683546356,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"useTitle",title:"useTitle"},sidebar:"someSidebar",previous:{title:"useNotification",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"},next:{title:"useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useTitle")," returns a component that calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Title>")," passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),". In this way, it becomes easier for us to access this component in various parts of the application."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Normally refine provides a default title. If we want to build a custom title instead of default one that comes with ",(0,o.kt)("strong",{parentName:"p"},"refine"),", we need to overwrite it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-start\n            Title={({ collapsed }) => (\n                <div>\n                    {collapsed && <img src="./logo" alt="Logo" />}\n                    <span>Custom Title</span>\n                </div>\n            )}\n// highlight-end\n        />\n    );\n};\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This ",(0,o.kt)("inlineCode",{parentName:"p"},"<Title>")," we created is used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider>")," that refine provides by default.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"useTitle")," will provides us to access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Title>")," component from various parts of the application, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/customSider"',title:'"src/components/customSider"'},'// highlight-next-line\nimport { useTitle } from "@pankod/refine-core";\nimport { AntdLayout } from "@pankod/refine-antd";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = React.useState(false);\n// highlight-next-line\n    const Title = useTitle();\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            breakpoint="md"\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n        >\n// highlight-next-line\n            <Title collapsed={collapsed} />\n            ...\n        </AntdLayout.Sider>\n    );\n};\n')))}d.isMDXComponent=!0}}]);