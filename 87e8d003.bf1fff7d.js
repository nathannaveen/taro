(window.webpackJsonp=window.webpackJsonp||[]).push([[901],{1740:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1741:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}a.d(t,"a",(function(){return n}))},1742:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),p=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=p(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=O(e,["components","mdxType","originalType","parentName"]),j=p(a),m=n,o=j["".concat(l,".").concat(m)]||j[m]||d[m]||r;return a?b.a.createElement(o,c(c({ref:t},i),{},{components:a})):b.a.createElement(o,c({ref:t},i))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var O in t)hasOwnProperty.call(t,O)&&(c[O]=t[O]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},966:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a(1740),b=a(1741),r=(a(0),a(1742)),l={title:"Reconciler"},c={unversionedId:"platform-plugin-reconciler",id:"platform-plugin-reconciler",isDocsHomePage:!1,title:"Reconciler",description:"Taro \u7684\u8fd0\u884c\u65f6\u5305\u62ec DOM\u3001BOM\u3001React \u517c\u5bb9\u5c42\u3001Vue \u517c\u5bb9\u5c42\u7b49\u5185\u5bb9\uff0c\u800c\u4e0d\u540c\u7684\u7aef\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u90fd\u6709\u53ef\u80fd\u9700\u8981\u5bf9 Taro \u8fd0\u884c\u65f6\u8fdb\u884c\u4fb5\u5165\u5b9a\u5236\u3002",source:"@site/docs/platform-plugin-reconciler.md",slug:"/platform-plugin-reconciler",permalink:"/taro/docs/next/platform-plugin-reconciler",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/platform-plugin-reconciler.md",version:"current",sidebar:"docs",previous:{title:"\u6a21\u677f",permalink:"/taro/docs/next/platform-plugin-template"},next:{title:"\u4ece\u65e7\u7248\u672c\u8fc1\u79fb\u5230 Taro Next",permalink:"/taro/docs/next/migration"}},O=[{value:"hostConfig \u914d\u7f6e",id:"hostconfig-\u914d\u7f6e",children:[{value:"appendChild (parent, child)",id:"appendchild-parent-child",children:[]},{value:"removeChild (parent, child, oldChild)",id:"removechild-parent-child-oldchild",children:[]},{value:"insertBefore (parent, child, refChild)",id:"insertbefore-parent-child-refchild",children:[]},{value:"removeAttribute (element, qualifiedName)",id:"removeattribute-element-qualifiedname",children:[]},{value:"setAttribute (element, qualifiedName, value)",id:"setattribute-element-qualifiedname-value",children:[]},{value:"prepareUpdateData (data, page)",id:"prepareupdatedata-data-page",children:[]},{value:"appendInitialPage (data, page)",id:"appendinitialpage-data-page",children:[]},{value:"getLifecyle (instance, lifecyle)",id:"getlifecyle-instance-lifecyle",children:[]},{value:"onTaroElementCreate (tagName, nodeType)",id:"ontaroelementcreate-tagname-nodetype",children:[]},{value:"getPathIndex (indexOfNode)",id:"getpathindex-indexofnode",children:[]},{value:"getEventCenter(Events)",id:"geteventcenterevents",children:[]},{value:"initNativeApi (taro)",id:"initnativeapi-taro",children:[]}]}],i={rightToc:O};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Taro \u7684\u8fd0\u884c\u65f6\u5305\u62ec DOM\u3001BOM\u3001React \u517c\u5bb9\u5c42\u3001Vue \u517c\u5bb9\u5c42\u7b49\u5185\u5bb9\uff0c\u800c\u4e0d\u540c\u7684\u7aef\u5e73\u53f0\u6216\u5f00\u53d1\u6846\u67b6\u90fd\u6709\u53ef\u80fd\u9700\u8981\u5bf9 Taro \u8fd0\u884c\u65f6\u8fdb\u884c\u4fb5\u5165\u5b9a\u5236\u3002"),Object(r.b)("p",null,"\u4e3a\u4e86\u89e3\u8026\uff0c\u6211\u4eec\u53c2\u8003\u4e86 ",Object(r.b)("strong",{parentName:"p"},"React Reconciler")," \u7684\u6982\u5ff5\uff0c\u5916\u90e8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"hostConfig")," \u914d\u7f6e\u5bf9\u8c61\uff0c\u5bf9\u8fd0\u884c\u65f6\u8fdb\u884c\u5b9a\u5236\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u9047\u5230 hostConfig \u7684\u914d\u7f6e\u9879\u4e0d\u6ee1\u8db3\u9700\u6c42\uff0c\u9700\u8981\u8fdb\u884c\u6269\u5c55\u65f6\uff0c\u53ef\u4ee5\u7ed9 Taro \u63d0\u4ea4 PR\uff5e")),Object(r.b)("h2",{id:"hostconfig-\u914d\u7f6e"},"hostConfig \u914d\u7f6e"),Object(r.b)("h3",{id:"appendchild-parent-child"},"appendChild (parent, child)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"appendChild")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"parent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"child"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8981\u7ed9\u7236\u8282\u70b9\u8ffd\u52a0\u7684\u8282\u70b9")))),Object(r.b)("h3",{id:"removechild-parent-child-oldchild"},"removeChild (parent, child, oldChild)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"replaceChild")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"parent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"child"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7528\u6765\u66ff\u6362 oldChild \u7684\u65b0\u8282\u70b9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"oldChild"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u88ab\u66ff\u6362\u6389\u7684\u539f\u59cb\u8282\u70b9")))),Object(r.b)("h3",{id:"insertbefore-parent-child-refchild"},"insertBefore (parent, child, refChild)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMNode")," \u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"insertBefore")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"parent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7236\u8282\u70b9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"child"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7528\u4e8e\u63d2\u5165\u7684\u8282\u70b9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"refChild"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMNode / TextElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c06\u8981\u63d2\u5728\u8fd9\u4e2a\u8282\u70b9\u4e4b\u524d")))),Object(r.b)("h3",{id:"removeattribute-element-qualifiedname"},"removeAttribute (element, qualifiedName)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMElement")," \u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"removeAttribute")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u64cd\u4f5c\u5143\u7d20")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qualifiedName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u6307\u5b9a\u8981\u4ece\u5143\u7d20\u4e2d\u79fb\u9664\u7684\u5c5e\u6027\u7684\u540d\u79f0")))),Object(r.b)("h3",{id:"setattribute-element-qualifiedname-value"},"setAttribute (element, qualifiedName, value)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMElement")," \u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"setAttribute")," \u65b9\u6cd5\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOMElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u64cd\u4f5c\u5143\u7d20")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"qualifiedName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8868\u793a\u5c5e\u6027\u540d\u79f0\u7684\u5b57\u7b26\u4e32")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u7684\u503c/\u65b0\u503c")))),Object(r.b)("h3",{id:"prepareupdatedata-data-page"},"prepareUpdateData (data, page)"),Object(r.b)("p",null,"\u6bcf\u6b21 Taro DOM \u6811\u66f4\u65b0\uff0c\u8c03\u7528\u5c0f\u7a0b\u5e8f ",Object(r.b)("inlineCode",{parentName:"p"},"setData")," \u524d\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DataTree"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c06\u8981 setData \u7684 Taro DOM \u6811\u6570\u636e\u7ed3\u6784")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"page"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TaroRootElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u9875\u9762\u6839\u5143\u7d20")))),Object(r.b)("h3",{id:"appendinitialpage-data-page"},"appendInitialPage (data, page)"),Object(r.b)("p",null,"Taro DOM \u6811\u521d\u59cb\u5316\uff0c\u7b2c\u4e00\u6b21\u8c03\u7528\u5c0f\u7a0b\u5e8f ",Object(r.b)("inlineCode",{parentName:"p"},"setData")," \u524d\u89e6\u53d1\u3002\u5728\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"prepareUpdateData")," \u540e\u7acb\u523b\u6267\u884c\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DataTree"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c06\u8981 setData \u7684 Taro DOM \u6811\u6570\u636e\u7ed3\u6784")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"page"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TaroRootElement"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u9875\u9762\u6839\u5143\u7d20")))),Object(r.b)("h3",{id:"getlifecyle-instance-lifecyle"},"getLifecyle (instance, lifecyle)"),Object(r.b)("p",null,"\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u88ab\u89e6\u53d1\u65f6\u8c03\u7528\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"instance"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Instance"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7528\u6237\u7f16\u5199\u7684\u9875\u9762\u5b9e\u4f8b")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"lifecyle"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5c0f\u7a0b\u5e8f\u9875\u9762\u88ab\u89e6\u53d1\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u540d\u79f0")))),Object(r.b)("p",null,"\u9700\u8981\u8fd4\u56de ",Object(r.b)("strong",{parentName:"p"},"function")," \u6216 ",Object(r.b)("strong",{parentName:"p"},"function[]"),"\uff0c\u8868\u793a\u5c06\u8981\u6267\u884c\u7684\u51fd\u6570\u3002"),Object(r.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\n// \u76f4\u63a5\u53d6\u7528\u6237\u7f16\u5199\u7684\u9875\u9762\u5b9e\u4f8b\u4e2d\uff0c\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\ngetLifecyle (instance, lifecyle) {\n  return instance[lifecyle]\n}\n\n// \u5728 React \u4e2d\uff0c\n// \u5c0f\u7a0b\u5e8f\u89e6\u53d1 onShow\uff0c\u8c03\u7528\u7528\u6237\u7f16\u5199\u7684 componentDidShow\n// \u5c0f\u7a0b\u5e8f\u89e6\u53d1 onHide\uff0c\u8c03\u7528\u7528\u6237\u7f16\u5199\u7684 componentDidHide\ngetLifecyle (instance, lifecycle) {\n  if (lifecycle === 'onShow') {\n    lifecycle = 'componentDidShow'\n  } else if (lifecycle === 'onHide') {\n    lifecycle = 'componentDidHide'\n  }\n  return instance[lifecycle]\n}\n")),Object(r.b)("h3",{id:"ontaroelementcreate-tagname-nodetype"},"onTaroElementCreate (tagName, nodeType)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMElement")," \u6784\u9020\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tagName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u521b\u5efa\u7684\u5143\u7d20\u7684\u6807\u7b7e\u540d")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"nodeType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NodeType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u521b\u5efa\u7684\u5143\u7d20\u7684\u8282\u70b9\u7c7b\u578b")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"nodeType"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ELEMENT_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ATTRIBUTE_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"TEXT_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"4"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CDATA_SECTION_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ENTITY_REFERENCE_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"6"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"COMMENT_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PROCESSING_INSTRUCTION_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"9"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DOCUMENT_NODE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",{id:"getpathindex-indexofnode"},"getPathIndex (indexOfNode)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOMNode")," \u83b7\u53d6 ",Object(r.b)("inlineCode",{parentName:"p"},"path")," \u5c5e\u6027\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"indexOfNode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u8282\u70b9\u5728\u7236\u8282\u70b9 children \u5217\u8868\u4e2d\u7684\u4e0b\u6807")))),Object(r.b)("p",null,"\u9700\u8981\u8fd4\u56de\u4e00\u4e2a ",Object(r.b)("strong",{parentName:"p"},"string")," \u503c\uff0c\u4ee3\u8868\u5c0f\u7a0b\u5e8f\u6309\u8def\u5f84 ",Object(r.b)("inlineCode",{parentName:"p"},"setData")," \u65f6\u7684\u6570\u7ec4\u4e0b\u6807\u3002"),Object(r.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\ngetPathIndex (indexOfNode) {\n  return `[${indexOfNode}]`\n}\n\n// \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e0d\u9700\u8981 [] \u5305\u88f9\ngetPathIndex (indexOfNode) {\n  return indexOfNode\n}\n")),Object(r.b)("h3",{id:"geteventcenterevents"},"getEventCenter(Events)"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Taro.eventCenter")," \u521d\u59cb\u5316\u503c\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Events"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Taro \u4e8b\u4ef6\u4e2d\u5fc3\u7684\u6784\u9020\u51fd\u6570")))),Object(r.b)("p",null,"\u9700\u8981\u8fd4\u56de Taro \u4e8b\u4ef6\u4e2d\u5fc3\u7684\u5b9e\u4f8b\uff0c\u5176\u5c06\u4f1a\u88ab\u8d4b\u503c\u7ed9 ",Object(r.b)("inlineCode",{parentName:"p"},"Taro.eventCenter"),"\u3002"),Object(r.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// \u9ed8\u8ba4\u503c\uff1a\ngetEventCenter (Events) {\n  return new Events()\n}\n\n// \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\n// \u4f18\u5148\u4ece\u5c0f\u7a0b\u5e8f\u5168\u5c40\u5bf9\u8c61 my \u4e2d\u53d6\u51fa\u521b\u5efa\u8fc7\u7684\u4e8b\u4ef6\u4e2d\u5fc3\u5b9e\u4f8b\uff0c\u907f\u514d\u5206\u5305\u65f6\u51fa\u73b0\u95ee\u9898\u3002\ngetEventCenter (Events) {\n  if (!my.taroEventCenter) {\n    my.taroEventCenter = new Events()\n  }\n  return my.taroEventCenter\n}\n")),Object(r.b)("h3",{id:"initnativeapi-taro"},"initNativeApi (taro)"),Object(r.b)("p",null,"\u5f15\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u5305\u65f6\u89e6\u53d1\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"taro"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Taro \u5bf9\u8c61")))),Object(r.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"initNativeApi (taro) {\n  // \u4e3a Taro \u5bf9\u8c61\u589e\u52a0 getApp \u65b9\u6cd5\n  taro.getApp = getApp\n}\n")))}p.isMDXComponent=!0}}]);