"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(67294),o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"custom-form-validation",title:"Custom Form Validation"},u=void 0,c={unversionedId:"advanced-tutorials/forms/custom-form-validation",id:"version-3.xx.xx/advanced-tutorials/forms/custom-form-validation",title:"Custom Form Validation",description:"In refine, we can use the form validation that comes with Ant Design with the rules property of the Form.Item component.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/forms/custom-form-validation.md",sourceDirName:"advanced-tutorials/forms",slug:"/advanced-tutorials/forms/custom-form-validation",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/custom-form-validation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/forms/custom-form-validation.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1696257865,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"custom-form-validation",title:"Custom Form Validation"},sidebar:"someSidebar",previous:{title:"Supabase",permalink:"/docs/3.xx.xx/advanced-tutorials/data-provider/supabase"},next:{title:"Save and Continue",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/save-and-continue"}},p={},m=[{value:"Example",id:"example",level:3}],f={toc:m};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"refine"),", we can use the form validation that comes with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ant Design")," with the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Rule"},"rules")," property of the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},"Form.Item")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Form>\n    <Form.Item\n        label="Title"\n        name="title"\n        // highlight-start\n        rules={[\n            {\n                required: true,\n            },\n            {\n                min: 5,\n            },\n        ]}\n        // highlight-end\n    >\n        <Input />\n    </Form.Item>\n    ...\n</Form>\n')),(0,o.kt)("p",null,"In addition to pre-defined rules, we can also prepare ",(0,o.kt)("strong",{parentName:"p"},"custom rules")," with the validator function."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Now let's prepare a rule that checks if the titles of the posts are unique. We have an endpoint like the below. We will do the uniqueness check here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts-unique-check?title=Example"',title:'"https://api.fake-rest.refine.dev/posts-unique-check?title'},'{\n    "isAvailable": true\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\n// highlight-start\nimport { useApiUrl, useCustom, HttpError } from "@pankod/refine-core";\nimport { useForm, Form, Create, Input } from "@pankod/refine-antd";\n//highlight-end\n\nexport const PostCreate = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    // highlight-start\n    const [title, setTitle] = useState("");\n\n    const apiUrl = useApiUrl();\n    const url = `${apiUrl}/posts-unique-check`;\n    const { refetch } = useCustom<\n        PostUniqueCheckResponse,\n        HttpError,\n        PostUniqueCheckRequestQuery\n    >({\n        url,\n        method: "get",\n        config: {\n            query: {\n                title,\n            },\n        },\n        queryOptions: {\n            enabled: false,\n        },\n    });\n    // highlight-end\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    // highlight-start\n                    rules={[\n                        {\n                            required: true,\n                        },\n                        {\n                            validator: async (_, value) => {\n                                if (!value) return;\n                                const { data } = await refetch();\n                                if (data && data.data.isAvailable) {\n                                    return Promise.resolve();\n                                }\n                                return Promise.reject(\n                                    new Error("\'title\' must be unique"),\n                                );\n                            },\n                        },\n                    ]}\n                    // highlight-end\n                >\n                    // highlight-next-line\n                    <Input onChange={(event) => setTitle(event.target.value)} />\n                </Form.Item>\n                ...\n            </Form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    title: string;\n}\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\ninterface PostUniqueCheckRequestQuery {\n    title: string;\n}\n')),(0,o.kt)(r.Fragment,null,(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/examples/form/custom-form-validation.gif",alt:"custom form validation"}),(0,o.kt)("br",null)),(0,o.kt)("admonition",{title:"important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Value must be kept in the state."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Input onChange={(event) => setTitle(event.target.value)} />\n"))))}d.isMDXComponent=!0}}]);