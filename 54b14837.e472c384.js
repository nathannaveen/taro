(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{1740:function(e,t,n){"use strict";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return l}))},1741:function(e,t,n){"use strict";function l(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return l}))},1742:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var l=n(0),r=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},O=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=u(n),j=l,s=O["".concat(c,".").concat(j)]||O[j]||d[j]||b;return n?r.a.createElement(s,a(a({ref:t},o),{},{components:n})):r.a.createElement(s,a({ref:t},o))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,c=new Array(b);c[0]=j;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},617:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var l=n(1740),r=n(1741),b=(n(0),n(1742)),c={title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},a={unversionedId:"apis/media/image/getImageInfo",id:"version-3.x/apis/media/image/getImageInfo",isDocsHomePage:!1,title:"Taro.getImageInfo(option)",description:"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002",source:"@site/versioned_docs/version-3.x/apis/media/image/getImageInfo.md",slug:"/apis/media/image/getImageInfo",permalink:"/taro/docs/apis/media/image/getImageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/image/getImageInfo.md",version:"3.x",sidebar_label:"getImageInfo",sidebar:"version-3.x/API",previous:{title:"Taro.previewImage(option)",permalink:"/taro/docs/apis/media/image/previewImage"},next:{title:"Taro.compressImage(option)",permalink:"/taro/docs/apis/media/image/compressImage"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"orientation",id:"orientation",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"src"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u3001\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3001\u5b58\u50a8\u6587\u4ef6\u8def\u5f84\u3001\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"height"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u56fe\u7247\u539f\u59cb\u9ad8\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"orientation"),Object(b.b)("td",null,Object(b.b)("code",null,'"up" | "up-mirrored" | "down" | "down-mirrored" | "left-mirrored" | "right" | "right-mirrored" | "left"')),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,'"up"')),Object(b.b)("td",null,Object(b.b)("a",{href:"https://sylvana.net/jpegcrop/exif_orientation.html"},"\u62cd\u7167\u65f6\u8bbe\u5907\u65b9\u5411"))),Object(b.b)("tr",null,Object(b.b)("td",null,"path"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u8def\u5f84")),Object(b.b)("tr",null,Object(b.b)("td",null,"type"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u56fe\u7247\u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"width"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u56fe\u7247\u539f\u59cb\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(b.b)("h3",{id:"orientation"},"orientation"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"up"),Object(b.b)("td",null,"\u9ed8\u8ba4\u65b9\u5411\uff08\u624b\u673a\u6a2a\u6301\u62cd\u7167\uff09\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 1\u3002\u6216\u65e0 orientation \u4fe1\u606f\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"up-mirrored"),Object(b.b)("td",null,"\u540c up\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 2")),Object(b.b)("tr",null,Object(b.b)("td",null,"down"),Object(b.b)("td",null,"\u65cb\u8f6c180\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 3")),Object(b.b)("tr",null,Object(b.b)("td",null,"down-mirrored"),Object(b.b)("td",null,"\u540c down\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 4")),Object(b.b)("tr",null,Object(b.b)("td",null,"left-mirrored"),Object(b.b)("td",null,"\u540c left\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 5")),Object(b.b)("tr",null,Object(b.b)("td",null,"right"),Object(b.b)("td",null,"\u987a\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 6")),Object(b.b)("tr",null,Object(b.b)("td",null,"right-mirrored"),Object(b.b)("td",null,"\u540c right\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 7")),Object(b.b)("tr",null,Object(b.b)("td",null,"left"),Object(b.b)("td",null,"\u9006\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 8")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getImageInfo({\n  src: 'images/a.jpg',\n  success: function (res) {\n    console.log(res.width)\n    console.log(res.height)\n  }\n})\nTaro.chooseImage({\n  success: function (res) {\n    Taro.getImageInfo({\n      src: res.tempFilePaths[0],\n      success: function (res) {\n        console.log(res.width)\n        console.log(res.height)\n      }\n    })\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.getImageInfo"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);