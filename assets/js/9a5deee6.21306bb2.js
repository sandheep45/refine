"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"azure-ad",title:"Azure AD Login"},c="Azure Active Directory B2C (AAD B2C)",u={unversionedId:"advanced-tutorials/auth/azure-ad",id:"version-3.xx.xx/advanced-tutorials/auth/azure-ad",title:"Azure AD Login",description:"Azure Active Directory B2C provides business-to-customer identity as a service. Your customers use their preferred social, enterprise, or local account identities to get single sign-on access to your applications and APIs.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/auth/azure-ad.md",sourceDirName:"advanced-tutorials/auth",slug:"/advanced-tutorials/auth/azure-ad",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/azure-ad",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/auth/azure-ad.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1693605299,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"azure-ad",title:"Azure AD Login"},sidebar:"someSidebar",previous:{title:"Auth0 Login",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/auth0"},next:{title:"Custom Layout",permalink:"/docs/3.xx.xx/advanced-tutorials/custom-layout"}},l={},p=[{value:"Installation",id:"installation",level:3},{value:"Configure the MsalProvider component",id:"configure-the-msalprovider-component",level:2},{value:"Override login page",id:"override-login-page",level:2},{value:"Auth Provider",id:"auth-provider",level:2}],d={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azure-active-directory-b2c-aad-b2c"},"Azure Active Directory B2C (AAD B2C)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview"},"Azure Active Directory B2C")," provides business-to-customer identity as a service. Your customers use their preferred social, enterprise, or local account identities to get single sign-on access to your applications and APIs."),(0,r.kt)("p",null,"The Microsoft Authentication Library (MSAL) enables developers to acquire security tokens from the Microsoft identity platform to authenticate users and access secured web APIs. It can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs, or your own web API. MSAL supports many different application architectures and platforms including .NET, JavaScript, Java, Python, Android, and iOS."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We use Azure AD B2C in our example but authentication with Azure AD should be very similar.")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"We will be using the javascript version of msal library and a helper for react. You can find more about the msal library here: ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/msal-overview"},"docs")),(0,r.kt)("p",null,"To install the required dependencies, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @azure/msal-browser @azure/msal-react\n")),(0,r.kt)("p",null,"Detailed documentation for using msal with react can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/single-page-app-quickstart?pivots=devlang-react"},"docs")),(0,r.kt)("h2",{id:"configure-the-msalprovider-component"},"Configure the MsalProvider component"),(0,r.kt)("p",null,"We've create config file in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config.ts")," folder. This file contains the configuration for the msal library. You can find more information about the configuration options here: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications"},"docs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/config.ts"',title:'"src/config.ts"'},'import { Configuration, LogLevel } from "@azure/msal-browser";\n\nexport const msalConfig: Configuration = {\n    auth: {\n        clientId: "YOUR_CLIENT_ID", //`${process.env.REACT_APP_AZURE_AAD_CLIENT_ID}`,\n        authority: "YOUR_AUTHORITY", //`https://${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.b2clogin.com/${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.onmicrosoft.com/${process.env.REACT_APP_AZURE_AAD_POLICY_NAME}`,\n        knownAuthorities: ["YOUR_KNOWN_AUTHORITIES"], //[`${process.env.REACT_APP_AZURE_AAD_TENANT_NAME}.b2clogin.com`],\n        redirectUri: "http://localhost:3000/", // Replace appropriately\n        postLogoutRedirectUri: window.location.origin,\n    },\n    cache: {\n        cacheLocation: "sessionStorage", // This configures where your cache will be stored\n        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge\n    },\n};\n\n// Add scopes here for ID token to be used at Microsoft identity platform endpoints.\nexport const loginRequest = {\n    scopes: ["User.Read"]\n};\n\nexport const tokenRequest = {\n    scopes: [...] // Replace ... with your custom scopes\n};\n\n\n// Add the endpoints here for Microsoft Graph API services you\'d like to use.\nexport const graphConfig = {\n    graphMeEndpoint: "ENTER_THE_GRAPH_ENDPOINT_HERE/v1.0/me"\n};\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend to use environment variables for the configuration parameters.")),(0,r.kt)("p",null,"Wrap your root component with an ",(0,r.kt)("inlineCode",{parentName:"p"},"MsalProvider")," that you can import from the SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\n\nimport {\n    EventType,\n    PublicClientApplication,\n    AccountInfo,\n    EventPayload,\n    SilentRequest,\n} from "@azure/msal-browser";\nimport { MsalProvider } from "@azure/msal-react";\n\nimport App, { TOKEN_KEY } from "./App";\nimport { msalConfig, tokenRequest } from "./config";\n\nconst msalInstance = new PublicClientApplication(msalConfig);\n\nmsalInstance.addEventCallback(async (event) => {\n    if (event.eventType === EventType.LOGIN_SUCCESS) {\n        const payload: EventPayload = event.payload;\n        msalInstance.setActiveAccount(payload as AccountInfo);\n\n        let account = msalInstance.getActiveAccount();\n\n        const request: SilentRequest = {\n            ...tokenRequest,\n            account: account!,\n        };\n        try {\n            // Silently acquires an access token which is then attached to a request for API access\n            const response = await msalInstance.acquireTokenSilent(request);\n            console.log("Fetching access token: success");\n            console.log("Scopes", response.scopes);\n            console.log("Token Type", response.tokenType);\n\n            localStorage.setItem(TOKEN_KEY, response.accessToken);\n        } catch (e) {\n            msalInstance.acquireTokenPopup(request).then((response) => {\n                localStorage.setItem(TOKEN_KEY, response.accessToken);\n            });\n        }\n    }\n});\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement,\n);\nroot.render(\n    <React.StrictMode>\n        <MsalProvider instance={msalInstance}>\n            <App />\n        </MsalProvider>\n    </React.StrictMode>,\n);\n')),(0,r.kt)("h2",{id:"override-login-page"},"Override login page"),(0,r.kt)("p",null,"First, we need to override the refine login page. In this way, we will redirect it to the Azure AD login page. We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"login.tsx")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/login.tsx"',title:'"src/login.tsx"'},'import React from "react";\nimport { useLogin } from "@pankod/refine-core";\nimport { AntdLayout, Button } from "@pankod/refine-antd";\n\nconst LoginPage = () => {\n    const SignInButton = () => {\n        const { mutate: login } = useLogin();\n\n        return (\n            <Button\n                type="primary"\n                size="large"\n                block\n                onClick={() => login()}\n            >\n                Sign in\n            </Button>\n        );\n    };\n\n    return (\n        <AntdLayout\n            style={{\n                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,\n                backgroundSize: "cover",\n            }}\n        >\n            <div style={{ height: "100vh", display: "flex" }}>\n                <div style={{ maxWidth: "200px", margin: "auto" }}>\n                    <div style={{ marginBottom: "28px" }}>\n                        <img src="./refine.svg" alt="Refine" />\n                    </div>\n                    <SignInButton />\n                </div>\n            </div>\n        </AntdLayout>\n    );\n\n};\n\nexport default LoginPage;\n')),(0,r.kt)("h2",{id:"auth-provider"},"Auth Provider"),(0,r.kt)("p",null,"In refine, authentication and authorization processes are performed with the auth provider. Let's write a provider for Azure AD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { useIsAuthenticated, useMsal } from "@azure/msal-react";\nimport { AccountInfo, SilentRequest } from "@azure/msal-browser";\nimport axios, { AxiosRequestConfig } from "axios";\n\nimport LoginPage from "./login";\nimport { tokenRequest } from "./config";\n\nexport const TOKEN_KEY = "refine-auth";\n\nexport const axiosInstance = axios.create();\n\naxiosInstance.interceptors.request.use(\n    // Here we can perform any function we\'d like on the request\n    (request: AxiosRequestConfig) => {\n        // Retrieve the token from local storage\n        const token = localStorage.getItem(TOKEN_KEY);\n\n        // Check if the header property exists\n        if (request.headers) {\n            // Set the Authorization header if it exists\n            request.headers["Authorization"] = `Bearer ${token}`;\n        } else {\n            // Create the headers property if it does not exist\n            request.headers = {\n                Authorization: `Bearer ${token}`,\n            };\n        }\n        return request;\n    },\n);\n\nconst App: React.FC = () => {\n    const API_URL = "https://api.fake-rest.refine.dev";\n\n    const isAuthenticated = useIsAuthenticated();\n    const { instance, inProgress, accounts } = useMsal();\n\n    if (inProgress === "login" || inProgress === "handleRedirect") {\n        return <div>Loading...</div>;\n    }\n\n    const account: AccountInfo = accounts[0];\n\n    const request: SilentRequest = {\n        ...tokenRequest,\n        account,\n    };\n\n    const authProvider: AuthProvider = {\n        login: async () => {\n            instance.loginRedirect(); // Pick the strategy you prefer i.e. redirect or popup\n            return Promise.resolve(false);\n        },\n        register: async () => Promise.resolve(),\n        resetPassword: async () => Promise.resolve(),\n        updatePassword: async () => Promise.resolve(),\n        logout: async () => Promise.resolve(),\n        checkAuth: async () => {\n            try {\n                if (account) {\n                    const token = await instance.acquireTokenSilent(request);\n                    localStorage.setItem(TOKEN_KEY, token.accessToken);\n                    return Promise.resolve();\n                } else {\n                    return Promise.reject();\n                }\n            } catch (e) {\n                return Promise.reject();\n            }\n        },\n        checkError: async () => Promise.resolve(),\n        getPermissions: async () => Promise.resolve(),\n        getUserIdentity: async (): Promise<AccountInfo> => {\n            if (account === null || account === undefined) {\n                return Promise.reject();\n            }\n            return Promise.resolve(account);\n        },\n    };\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL, axiosInstance)}\n            authProvider={authProvider}\n            LoginPage={LoginPage}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "posts",\n                }\n            ]}\n        />\n    );\n};\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);