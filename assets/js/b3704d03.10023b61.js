"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/social.jpg",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/next-js-environment-variables",source:"@site/blog/2022-09-07-next-env.md",title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:6.485,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/social.jpg",hide_table_of_contents:!1},prevItem:{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store"},nextItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},relatedPosts:[{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"May 29, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:12.065,date:"2023-05-29T00:00:00.000Z"},{title:"How to use Next.js API Routes?",description:"We will deep dive into Next.js API Routes with Dynamic Routes.",permalink:"/blog/next-js-api-routes",formattedDate:"October 5, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.815,date:"2022-10-05T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.86,date:"2022-02-14T00:00:00.000Z"}],authorPosts:[{title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.92,date:"2022-08-23T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",description:"A guide for navigation between pages using Next.js Link",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.19,date:"2022-09-04T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.24,date:"2023-01-03T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What are Environment Variables?",id:"what-are-environment-variables",level:2},{value:"How to use environment variables in Next.js",id:"how-to-use-environment-variables-in-nextjs",level:2},{value:"Using environment variables in the browser",id:"using-environment-variables-in-the-browser",level:2},{value:"Types of Environment Variables in Next.js",id:"types-of-environment-variables-in-nextjs",level:2},{value:"Default environment variables",id:"default-environment-variables",level:4},{value:"Development environment variables",id:"development-environment-variables",level:4},{value:"Production environment variables",id:"production-environment-variables",level:4},{value:"Environment variable load order",id:"environment-variable-load-order",level:4},{value:"Test Environment Variables",id:"test-environment-variables",level:2},{value:"Conclusion",id:"conclusion",level:2}],d=(u="BannerRandom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const v={toc:m};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Next.js is a React framework that provides many out-of-the-box solutions for building single-page web applications. Under the hood, it handles a lot of tooling and configuration intuitively, making the process of developing applications a breeze."),(0,a.kt)("p",null,"One of the configurations Next.js handles by default are ",(0,a.kt)("strong",{parentName:"p"},"environment variables"),". Built-in support for environment variables got a lot easier in Next.js versions 9.4 and later. This means using environment variables in your applications has become seamless and straightforward."),(0,a.kt)("p",null,"Don't worry if environment variables sound unfamiliar to you. We will take a closer look at them in this article, and explain how they can be used in your Next.js applications."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-are-environment-variables"},"What are Environment Variables?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-environment-variables-in-the-browser"},"Using environment variables in the browser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-environment-variables"},"Default environment variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#development-environment-variables"},"Development environment variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#production-environment-variables"},"Production environment variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#environment-variable-load-order"},"Environment variable load order")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#test-environment-variables"},"Test Environment Variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h2",{id:"what-are-environment-variables"},"What are Environment Variables?"),(0,a.kt)("p",null,"An environment variable is a key-value pair (key=value) in which a value (or data) is assigned to a key (variable). "),(0,a.kt)("p",null,"Environment variables are used in software development for many use cases; for providing configurations for different application running environments (e.g. development and production environments); for keeping sensitive application data out of application code from malicious users; "),(0,a.kt)("p",null,"The following are valid examples of environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"API_KEY='c4W39R56&gyh_ujij89$'\nAPI_KEY=c4W39R56&gyh_ujij89$\nACCESS_TOKEN='A54EzZoU7o33SByHk1qr'\n")),(0,a.kt)("h2",{id:"how-to-use-environment-variables-in-nextjs"},"How to use environment variables in Next.js"),(0,a.kt)("p",null,"Basically, environment variables are added into Next.js apps through a ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," file. This will then load every variable into the Node.js process. ",(0,a.kt)("strong",{parentName:"p"},"Environment variables in Next.js")," are only available for use on the server. This means we can only use them in any of Next.js data fetching methods (getServerSideProps, getStaticProps, and getStaticPaths) or API routes."),(0,a.kt)("p",null,"For example, given a ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"API_URL='https://dev.to/api/api/articles/{id}/unpublish'\nAPI_KEY='your_secret_api_key_here'\n")),(0,a.kt)("p",null,"Next.js will automatically load the variables as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.API_URL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.API_KEY"),"\nwhich we can then use as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/index.js"',title:'"pages/index.js"'},"export async function getServerSideProps() {\n    const response = await axios({\n        method: 'put',\n        url: process.env.API_URL,\n        header: {  \n              Authorization: process.env.API_KEY\n        },\n        data: {\n            id: 12\n        }\n    });\n}\n")),(0,a.kt)("p",null,"NOTE: You should always put the ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," file in your project root directory to avoid Next.js running into errors."),(0,a.kt)("p",null,"We can also reference other variables in the same ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," file using a dollar (",(0,a.kt)("inlineCode",{parentName:"p"},"$"),") sign. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="env.local"',title:'"env.local"'},"ADMIN_NAME='John'\nADMIN_ID=1234\nPROTECTED_URL='https://api.example.com?admin=$ADMIN_NAME&id=$ADMIN_ID'\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"process.env.PROTECTED_URL")," will now evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com?admin=John&id=1234"),"."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"using-environment-variables-in-the-browser"},"Using environment variables in the browser"),(0,a.kt)("p",null,"Like we mentioned earlier, Next.js env is only available for use on the server by default. However, Next.js provides us a solution to expose the variables to the browser. By adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," prefix to a variable defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," Next.js will automatically make it accessible for use in the browser and anywhere else in our application."),(0,a.kt)("p",null,"For example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# env.local\nNEXT_PUBLIC_GOOGLE_ANALYTICS_ID='your_google_analytics_id_here'\n")),(0,a.kt)("p",null,"Now we can use it in our code like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pages/_app.js"',title:'"pages/_app.js"'},"... \nreturn (\n    <>\n        <Script strategy=\"lazyOnload\" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />\n        <Script strategy=\"lazyOnload\">\n            {`\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {\n                page_path: window.location.pathname,\n                });\n            `}\n        <\/Script>\n        ...\n     </>\n)\n")),(0,a.kt)("p",null,"Here's what is going on above."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," we defined a ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," variable which holds the value for our Google analytics ID. The prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_")," lets us use the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID")," in client side code (",(0,a.kt)("inlineCode",{parentName:"p"},"/pages/_app.js"),"). Note that _app.js runs on both the client and server."),(0,a.kt)("p",null,"We added two ",(0,a.kt)("inlineCode",{parentName:"p"},"<Script/>")," components from Next.js to add Javascript code to configure google analytics. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<Script/>")," component optimizes external scripts that are loaded in a Next.js application by using strategies to improve browser and user experience."),(0,a.kt)("p",null,"In the previous code, we added ",(0,a.kt)("inlineCode",{parentName:"p"},"lazyOnload")," strategy to both scripts; this is to tell the browser we want the analytics to be generated when all other resources have been fetched and the browser is idle."),(0,a.kt)("h2",{id:"types-of-environment-variables-in-nextjs"},"Types of Environment Variables in Next.js"),(0,a.kt)("p",null,"A single ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," file is usually all you need for your environment variables but at times you may want to specify different configurations for different application environments. Next.js allows us to take charge of how we want to configure the variables. There are basically three application environments we'll talk about in this article. These are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Development environment (initiated with ",(0,a.kt)("inlineCode",{parentName:"li"},"next dev"),")"),(0,a.kt)("li",{parentName:"ol"},"Production environment (initiated with ",(0,a.kt)("inlineCode",{parentName:"li"},"next start"),")"),(0,a.kt)("li",{parentName:"ol"},"Test environment ")),(0,a.kt)("h4",{id:"default-environment-variables"},"Default environment variables"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file can be used to specify a default configuration for all three application environments. Note that if the same variables are declared in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),", it'll override the defaults. ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," files must be added to ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," since they are where sensitive application data are stored."),(0,a.kt)("h4",{id:"development-environment-variables"},"Development environment variables"),(0,a.kt)("p",null,"You can specify development environment variables in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development")," file. This file should be kept in your project directory."),(0,a.kt)("h4",{id:"production-environment-variables"},"Production environment variables"),(0,a.kt)("p",null,"Use a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," file for ",(0,a.kt)("strong",{parentName:"p"},"environment variables")," that are particular to production. This file should also be kept in your project directory."),(0,a.kt)("p",null,"For example, to add environment variables to your live deployments (if you use ",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com"},"Vercel")," to deploy your application), you can add environment variables to a project by going to ",(0,a.kt)("em",{parentName:"p"},"Settings")," on your dashboard and clicking on ",(0,a.kt)("em",{parentName:"p"},"Environment Variables"),". The UI should look like below:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-07-next-env/deploy.png",alt:"deploy"}),(0,a.kt)("h4",{id:"environment-variable-load-order"},"Environment variable load order"),(0,a.kt)("p",null,"Next.js will always search for an environment variable in five places in your application code in the following order until it's found:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"process.env")," (start)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV).local")," (where ",(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,a.kt)("inlineCode",{parentName:"li"},"development"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"production")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"test"),")"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".env.local")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".env.$(NODE_ENV)")," (where ",(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," can be any of ",(0,a.kt)("inlineCode",{parentName:"li"},"development"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"production")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"test"),")"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".env"),"  (end)")),(0,a.kt)("p",null,"So for example if you define a variable in ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development.local")," and then redefine it in ",(0,a.kt)("inlineCode",{parentName:"p"},"env.development"),", the value in ",(0,a.kt)("inlineCode",{parentName:"p"},"env.development.local")," will be used. "),(0,a.kt)("hr",null),(0,a.kt)(d,{mdxType:"BannerRandom"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"test-environment-variables"},"Test Environment Variables"),(0,a.kt)("p",null,"We can also use a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test")," to specify environment variables for testing purposes. In order to use default test environment variables, you must set ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," to test. Here's an example showing how you can do this in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'  ...\n"scripts": {\n    "dev": "next dev",\n    "start": "next start",\n    "test": "NODE_ENV=test mocha spec"\n}\n  ...\n')),(0,a.kt)("p",null,"Other tools like jest will configure the settings for you by automatically setting the environment to ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,a.kt)("p",null,"Note that Next.js will configure your ",(0,a.kt)("strong",{parentName:"p"},"environment variables")," differently when you're in a test environment. Variables from ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development")," won't be loaded in order for test executions to use the same default configuration. You must include the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test")," file in your project directory to prevent it from being overridden by ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article we learned about what environment variables are and how to use them in Next.js. We also implement how to define Next.js env's for different application running environments.  "),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"banner-container"},(0,a.kt)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your form code all over your application!"),(0,a.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,a.kt)("p",null,"Try ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," to rapidly build your next ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,a.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,a.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,a.kt)("strong",{parentName:"p"},"Ant Design, Material UI and Mantine UI"),"."),(0,a.kt)("p",null,"It can ",(0,a.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")))}h.isMDXComponent=!0}}]);