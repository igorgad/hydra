(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(251)),o={id:"extending_configs",title:"Extending Configs"},c={unversionedId:"patterns/extending_configs",id:"patterns/extending_configs",isDocsHomePage:!1,title:"Extending Configs",description:"Example application",source:"@site/docs/patterns/extending_configs.md",slug:"/patterns/extending_configs",permalink:"/docs/next/patterns/extending_configs",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/extending_configs.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1609993742,sidebar:"docs",previous:{title:"Structured Configs example",permalink:"/docs/next/patterns/instantiate_objects/structured_config"},next:{title:"Configuring Experiments",permalink:"/docs/next/patterns/configuring_experiments"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/patterns/extending_configs"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20applications-informational",alt:"Example application"})))),Object(i.b)("p",null,"A common pattern is to extend an existing config, overriding and/or adding new config values to it.\nThe extension is done by including the base configuration, and then overriding the chosen values in the current config."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This page assumes that you are familiar with the contents of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/defaults_list"}),"The Defaults List"),"."))),Object(i.b)("h4",{id:"extending-a-config-from-the-same-config-group"},"Extending a config from the same config group:"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql \n\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0}),"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\nport: 3307\nencoding: utf8\n"))),Object(i.b)("div",{className:"col col--4"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/base_mysql.yaml"',title:'"db/base_mysql.yaml"'}),"host: localhost\nport: 3306\nuser: ???\npassword: ???\n\n\n\n")))),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0}),"db:\n  host: localhost   # from db/base_mysql\n  port: 3307        # overriden by db/mysql.yaml \n  user: omry        # populated by db/mysql.yaml\n  password: secret  # populated by db/mysql.yaml\n  encoding: utf8    # added by db/mysql.yaml\n")),Object(i.b)("h4",{id:"extending-a-config-from-another-config-group"},"Extending a config from another config group:"),Object(i.b)("p",null,"To extend a config from a different config group, include it using an absolute path (/), and override\nthe package to ",Object(i.b)("em",{parentName:"p"},"_","here","_"),". (",Object(i.b)("em",{parentName:"p"},"_","here","_")," is described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/advanced/overriding_packages#default-list-package-keywords"}),"Packages"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0}),"defaults:\n  - /db_schema/base_mysql@_here_\n")),Object(i.b)("p",null,"It is otherwise identical to extending a config within the same config group."))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);