_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),c=n&&n.pathname||"/",d=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):o||a}}),[c,e.href,e.as]),f=d.href,p=d.as,b=e.children,h=e.replace,m=e.shallow,v=e.scroll,j=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var g=a.Children.only(b),x=g&&"object"===typeof g&&g.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),O=r(y,2),N=O[0],w=O[1],_=a.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,a.useEffect)((function(){var e=w&&t&&(0,s.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,c=l[f+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,f,p,{locale:r})}),[p,f,w,j,t,n]);var E={ref:_,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:i,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,p,h,m,v,j)},onMouseEnter:function(e){(0,s.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof j?j:n&&n.locale,M=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,L,n&&n.locales,n&&n.domainLocales);E.href=M||(0,s.addBasePath)((0,s.addLocale)(p,L,n&&n.defaultLocale))}return a.default.cloneElement(g,E)};t.default=d},uXJ4:function(e,t,n){},vEBi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recipes/[id]",function(){return n("wuWz")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),d=u[0],f=u[1],p=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),o.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){if(!s&&!d){var e=(0,a.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[d]),[p,d]};var c=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var o=new Map},wuWz:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return o}));var r=n("nKUr"),c=n("q1tI"),a=n("YFqc"),s=n.n(a),o=(n("uXJ4"),!0);t.default=function(e){var t=e.recipe,n=Object(c.useState)(""),a=n[0],o=n[1];if(null===t)return Object(r.jsx)("div",{children:" Loading "});return Object(r.jsxs)("div",{className:"text-gray-700",children:[Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("h1",{className:"text-center py-2 bg-gray-300 text-3xl",children:"\u30ec\u30b7\u30d4\u691c\u7d22\uff01"})}),Object(r.jsx)("div",{className:"p-2",children:Object(r.jsxs)("div",{className:"bg-white flex items-center rounded-md border border-gray-200",children:[Object(r.jsx)("input",{className:"w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none",type:"text",name:"searchText",value:a,onChange:function(e){o(e.target.value)},placeholder:"\u30ec\u30b7\u30d4\u306e\u691c\u7d22"}),Object(r.jsx)("div",{className:"p-2",children:Object(r.jsx)(s.a,{href:"/search/keyword="+a,children:Object(r.jsx)("button",{className:"bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center",children:Object(r.jsx)("img",{src:"/search.png"})})})})]})}),Object(r.jsx)("img",{src:t.image_url,className:"width-full"}),Object(r.jsx)("div",{className:"m-2 text-xl font-black",children:t.title}),Object(r.jsxs)("div",{className:"text-gray-600 text-xs",children:[Object(r.jsx)("span",{className:"p-3",children:t.author.user_name}),Object(r.jsx)("span",{className:"p-3",children:t.published_at})]}),Object(r.jsx)("div",{className:"m-3 text-sm",children:t.description}),Object(r.jsx)("div",{className:"mt-2 py-1 pl-4 font-semibold bg-gray-300",children:"\u6750\u6599"}),t.ingredients.map((function(e,t){return Object(r.jsxs)("div",{className:"relative border-t-2 border-gray-300 h-14",children:[Object(r.jsx)("span",{className:"m-3.5 font-semibold absolute left-0",children:e.name}),Object(r.jsx)("span",{className:"m-3.5 font-semibold absolute right-0",children:e.quantity})]},t)})),Object(r.jsx)("div",{className:"mt-2 py-1 pl-4 font-semibold bg-gray-300",children:"\u624b\u9806"}),t.steps.map((function(e,t){return Object(r.jsx)("div",{className:"border-t-2 border-gray-300",children:Object(r.jsx)("p",{className:"p-4 font-semibold",children:t+1+". "+e})},t)}))]})}}},[["vEBi",0,2,1]]]);