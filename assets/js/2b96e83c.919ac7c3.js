"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?r.createElement(d,s(s({ref:t},m),{},{components:a})):r.createElement(d,s({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",slug:"uri-vs-url",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-01-uri-vs-url/social.png",hide_table_of_contents:!1},s=void 0,i={permalink:"/blog/uri-vs-url",source:"@site/blog/2023-02-01-uri-vs-url.md",title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:7.79,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",slug:"uri-vs-url",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-01-uri-vs-url/social.png",hide_table_of_contents:!1},prevItem:{title:"Comparing the best headless CMS solutions",permalink:"/blog/best-headless-cms"},nextItem:{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",permalink:"/blog/react-hook-form-vs-formik"},relatedPosts:[{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.29,date:"2022-10-17T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"},{title:"What is Vite? & Vite vs Webpack",permalink:"/blog/what-is-vite-vs-webpack",formattedDate:"May 15, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:8.085,date:"2023-05-15T00:00:00.000Z"}],authorPosts:[{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.625,date:"2022-12-14T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.98,date:"2022-11-24T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"URI",id:"uri",level:2},{value:"Components of URI",id:"components-of-uri",level:2},{value:"Functions and Architecture of URI",id:"functions-and-architecture-of-uri",level:2},{value:"Examples of URI",id:"examples-of-uri",level:2},{value:"Syntax Of URI",id:"syntax-of-uri",level:2},{value:"Use Case of URI",id:"use-case-of-uri",level:2},{value:"Examples of URLs",id:"examples-of-urls",level:2},{value:"Benefits of URI over URL",id:"benefits-of-uri-over-url",level:2}],m=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,'Finding a specific resource on the web can be difficult without a unique method or identifier. As a result, a man named Tim Berners-Lee coined the term "URI" to aid in identifying the location of a web resource quickly. With the introduction of URI, you can now find the location of any resource on the web regardless of where you are browsing from.'),(0,n.kt)("p",null,"In this article, you will learn about the concept of a URI, its components, its architecture, and how it differs from a URL. "),(0,n.kt)("h2",{id:"uri"},"URI"),(0,n.kt)("p",null,'URI is an abbreviation for "Uniform Resource Identifier," which refers to a unique identifier composed of a string of characters that points to any resource on the internet via procedures such as name, location, or both.'),(0,n.kt)("p",null,"URLs and URNs are the two types of URIs. URLs (Uniform Resource Locators) are web addresses commonly known as website addresses. They specify the location of a resource on the Internet and instruct a web browser on how to retrieve it. "),(0,n.kt)("p",null,'For example, the URI "',(0,n.kt)("a",{parentName:"p",href:"https://www.example.com%22"},'https://www.example.com"')," specifies the location of a website and instructs a web browser to retrieve it using the HTTPS protocol."),(0,n.kt)("p",null,"Web protocols such as HTTP and HTTPS use URIs to communicate with multiple resources on the internet. The architecture of URIs is a string of characters that represents the address of a web resource, which is usually a combination of the resource's name and address."),(0,n.kt)("p",null,"In essence, a URI can identify any type of resource, including web pages, images, videos, and other types of files. They are an essential component of how the Internet works and are used in various contexts, including web addresses, links, and other types of references to online resources."),(0,n.kt)("h2",{id:"components-of-uri"},"Components of URI"),(0,n.kt)("p",null,"The URI architecture is made up of components. Each of these components serves a specific purpose, which includes the following: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Protocol"),": A protocol type must be specified before a URI can access a resource. Some of the existing protocols are as follows:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"http://")),': This is the most widely used protocol on the Internet. It is an abbreviation for "HyperText Transfer Protocol," which is used to access resources on the internet via the HTTP protocol.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"https://")),": This is similar to http://, but it encrypts the data being transferred using a secure connection (SSL/TLS)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"mailto:")),": This protocol generates a link that launches the default email client and sends a new email message to the specified email address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"file://")),": This protocol is used to access files on the local computer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"ftp://")),':This protocol, which stands for "File Transfer Protocol," transfers files across a network.'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Domain name"),": This is the unique name that identifies the website on the Internet.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Port number"),": This optional component specifies the port number used to access the resource.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Path"),": This specifies the location of the resource on the server.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Query string"),": This optional component specifies additional information to be sent to the server when requesting the resource."),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h2",{id:"functions-and-architecture-of-uri"},"Functions and Architecture of URI"),(0,n.kt)("p",null,"A URI's architecture comprise several components, including the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scheme"),': The scheme, also known as the protocol, specifies the type of resource being identified and how it should be accessed. For example, "http" and "https" are common schemes for webpages, whereas "ftp" is used for file transfers.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authority"),': The authority, also known as the host, contains information about the host that serves the resource, such as the domain name or IP address. For example, in the URI "',(0,n.kt)("a",{parentName:"li",href:"http://www.example.com"},(0,n.kt)("em",{parentName:"a"},"http://www.example.com")),'," the authority is "',(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"http://www.example.com"},"www.example.com")),'".')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Path"),": The path, also known as the location, identifies the resource's location within the authority. The path is \"",(0,n.kt)("em",{parentName:"li"},"/path/to/resource"),'" in the URI "',(0,n.kt)("a",{parentName:"li",href:"http://www.example.com/path/to/resource"},"http://www.example.com/path/to/resource"),'".')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Query"),": The ",(0,n.kt)("em",{parentName:"li"},"query"),", denoted by a '",(0,n.kt)("strong",{parentName:"li"},"?'"),' character, contains additional information passed to the resource. For example, the query is "',(0,n.kt)("em",{parentName:"li"},"q=example"),'" in the URI "',(0,n.kt)("a",{parentName:"li",href:"http://www.example.com/search?q=example"},(0,n.kt)("em",{parentName:"a"},"http://www.example.com/search?q=example")),'".')),(0,n.kt)("hr",null),(0,n.kt)(m,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples-of-uri"},"Examples of URI"),(0,n.kt)("p",null,"Look at more examples of URIs with their representations as follows:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI")," - ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://www.debby.com:8080/path/to/resource?parameter=value"},"https://www.debby.com:8080/path/to/resource?parameter=value")),"\n",(0,n.kt)("strong",{parentName:"p"},"Scheme"),": ",(0,n.kt)("em",{parentName:"p"},"https"),"\n",(0,n.kt)("strong",{parentName:"p"},"Authority"),": ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"http://www.debby.com:8080"},"www.debby.com:8080")),"\n",(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("em",{parentName:"p"},"/path/to/resource"),"\n",(0,n.kt)("strong",{parentName:"p"},"Query"),": ",(0,n.kt)("em",{parentName:"p"},"parameter=value")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI")," - ",(0,n.kt)("em",{parentName:"p"},"ftp://ftp.debby.com/path/to/file.txt"),"\n",(0,n.kt)("strong",{parentName:"p"},"Scheme"),": ",(0,n.kt)("em",{parentName:"p"},"ftp"),"\n",(0,n.kt)("strong",{parentName:"p"},"Authority"),": ",(0,n.kt)("em",{parentName:"p"},"ftp.debby.com"),"\n",(0,n.kt)("strong",{parentName:"p"},"Path"),": ",(0,n.kt)("em",{parentName:"p"},"/path/to/file.txt"),"\n",(0,n.kt)("strong",{parentName:"p"},"Query"),": ",(0,n.kt)("em",{parentName:"p"},"None")),(0,n.kt)("h2",{id:"syntax-of-uri"},"Syntax Of URI"),(0,n.kt)("p",null,"To better understand the components of URI, you need to understand the syntax. The syntax of a URI usually follows the order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Scheme"),': The first part of the URI is the scheme (or protocol), followed by a colon (:). For instance, "http:" or "ftp:".'),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Authority"),': The next part of the URI is the authority, which can contain information about the host that serves the resource, such as the domain name or IP address. "',(0,n.kt)("a",{parentName:"li",href:"http://www.example.com%22"},'www.example.com"'),' or "192.168.1.1" are two examples.'),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Path"),': The path represents the location of the resource within the authority and is denoted by a forward slash (/). "/path/to/resource," for example.'),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Query"),': The query is represented by a question mark (?) and contains additional information passed to the resource. For example, "?parameter=value".')),(0,n.kt)("p",null,"The different parts of a URI can be combined to form a complete URI as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<scheme>://<authority><path>?<query>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples:"),"\n",(0,n.kt)("a",{parentName:"p",href:"http://www.debby.com/path/to/resource"},"http://www.debby.com/path/to/resource"),"\nftp://ftp.debby.com/path/to/file.txt\nmailto:",(0,n.kt)("a",{parentName:"p",href:"mailto:user@debby.com"},"user@debby.com"),"\nTel:+1234567890"),(0,n.kt)("p",null,"It's important to note that not all URIs will have all components, and some may have additional components that are specific to the scheme."),(0,n.kt)("h2",{id:"use-case-of-uri"},"Use Case of URI"),(0,n.kt)("p",null,"URIs play a critical role in the functioning of the Internet because they provide a standard method for computers to locate and access resources. URIs are used in many applications and protocols to identify and locate resources on the Internet. Here are a few examples of common URI applications:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Webpages"),': One of the most common use cases of URIs is identifying Internet pages. URIs that start with "',(0,n.kt)("em",{parentName:"li"},"http"),'" or "',(0,n.kt)("em",{parentName:"li"},"https"),'" is used to access webpages and other website resources.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"File transfers"),': URIs that start with "ftp" are used to transfer files between computers.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Email"),': URIs beginning with "mailto" are used to generate links that can be used to compose an email message.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Telephone calls"),': URIs that start with "tel" generate links that can be clicked to make a phone call.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Media streaming"),": URIs identify media files that can be streamed over the Internet, such as audio or video.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database access"),": URIs identify database resources and provide a way for programs to access them.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Identifying resources in a distributed system"),": URIs are used to identify resources distributed across multiple servers or devices, such as files in a distributed file system or services running on a distributed computing platform.")),(0,n.kt)("h1",{id:"url"},"URL"),(0,n.kt)("p",null,"A URL (Uniform Resource Locator) is a type of URI (Uniform Resource Identifier) used to identify a resource's location on the Internet. A URL is a string of characters that specifies how to access a resource on the Internet, typically a webpage or other file."),(0,n.kt)("p",null,'A URL comprises several components, including the scheme, domain name, path, and query. The scheme, also known as the protocol, specifies the type of resource and how it should be accessed. "http" and "https" are common schemes for webpages, "ftp" for file transfers, and "file" for files on a local computer.'),(0,n.kt)("p",null,"The domain name is the hostname or IP address of the server that hosts the resource. The path specifies the location of the resource on the server, and the query is used to provide additional information to the server."),(0,n.kt)("h2",{id:"examples-of-urls"},"Examples of URLs"),(0,n.kt)("p",null,"A good example of a URL describing its syntax is as follows:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"',(0,n.kt)("a",{parentName:"em",href:"http://www.example.com/path/to/resource?parameter=value#fragment%22"},'http://www.example.com/path/to/resource?parameter=value#fragment"'),"."),"\n",(0,n.kt)("strong",{parentName:"p"},"Scheme"),': "http"\n',(0,n.kt)("strong",{parentName:"p"},"Authority"),': "',(0,n.kt)("a",{parentName:"p",href:"http://www.example.com%22"},'www.example.com"'),"\n",(0,n.kt)("strong",{parentName:"p"},"Path"),': "/path/to/resource"\n',(0,n.kt)("strong",{parentName:"p"},"Query"),': "parameter=value"\n',(0,n.kt)("strong",{parentName:"p"},"Fragment"),': "fragment"'),(0,n.kt)("p",null,"Other examples of a URl include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.example.com/path/to/resource"},"http://www.example.com/path/to/resource")," "),(0,n.kt)("li",{parentName:"ul"},"ftp://ftp.example.com/path/to/file.txt"),(0,n.kt)("li",{parentName:"ul"},"file:///path/to/local/file.txt")),(0,n.kt)("p",null,"In essence, a URL is a type of URI that allows you to find and access resources on the Internet. Web browsers, servers, and other software use it to retrieve and manage Internet resources."),(0,n.kt)("h2",{id:"benefits-of-uri-over-url"},"Benefits of URI over URL"),(0,n.kt)("p",null,"URIs (Uniform Resource Identifiers) are a broader classification of identifiers than URLs (Uniform Resource Locators). They have several advantages over URLs including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interoperability"),": URIs are more interoperable than URLs because they can be used across different systems and protocols. On the other hand, URLs are Internet-specific and are only used by web browsers and other Internet-based applications.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Namespace independence"),": URLs are specific to the Internet and use a specific naming scheme, such as the domain name system, whereas URIs are not tied to a specific naming scheme or namespace (DNS). This means that URIs can identify resources in any namespace, whereas URLs can only identify resources in the Internet namespace.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Abstraction"),": URIs are more abstract than URLs in that they identify a resource without specifying how to access it, whereas URLs do. This provides more flexibility in how the resource can be accessed.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flexibility"),": URIs are more flexible than URLs because they can be used to identify any resource, whereas URLs are explicitly used to identify the location of a resource on the Internet.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Persistence"),": URIs are meant to be persistent, which means they should not change over time. However, URLs can change if the resource they refer to moves or the server's name or address changes.")),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h1",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In summary, URIs are more versatile and flexible than URLs, and they are designed to be more persistent and interoperable. URIs are more general-purpose identifiers that can identify any type of resource, whereas URLs are limited to identifying a resource's location on the Internet."))}h.isMDXComponent=!0}}]);