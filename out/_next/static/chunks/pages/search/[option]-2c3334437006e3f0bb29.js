_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"20a2":function(e,t,n){e.exports=n("nOHt")},"2ZIO":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[option]",function(){return n("8QOr")}])},"8QOr":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("o0o1"),a=n.n(c),s=n("HaE+"),i=n("q1tI"),o=n("20a2"),u=n("YFqc"),l=n.n(u),f=n("EOcM"),p=(n("uXJ4"),n("mdJ4"));t.default=function(){var e=Object(o.useRouter)(),t=Object(i.useState)(null),n=t[0],c=t[1],u=Object(i.useState)(""),d=u[0],h=u[1];if(Object(i.useEffect)((function(){Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)(e.query.option);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})))()}),[e.query.option]),null===n)return Object(r.jsx)("div",{children:" Loading "});return Object(r.jsxs)("div",{className:"App text-gray-700",children:[Object(r.jsx)(l.a,{href:"/",children:Object(r.jsx)("h1",{className:"text-center py-2 bg-gray-300 text-3xl",children:"\u30ec\u30b7\u30d4\u691c\u7d22\uff01"})}),Object(r.jsx)("div",{className:"p-2",children:Object(r.jsxs)("div",{className:"bg-white flex items-center rounded-md border border-gray-200",children:[Object(r.jsx)("input",{className:"w-full py-1 px-3 text-gray-700 font-semibold leading-tight focus:outline-none",type:"text",name:"searchText",value:d,onChange:function(e){h(e.target.value)},placeholder:"\u30ec\u30b7\u30d4\u306e\u691c\u7d22"}),Object(r.jsx)("div",{className:"p-2",children:Object(r.jsx)(l.a,{href:"/search/keyword="+d,children:Object(r.jsx)("button",{className:"bg-gray-200 text-white rounded-full border border-gray-300 p-2 hover:bg-blue-300 focus:outline-none w-8 h-8 flex items-center justify-center",children:Object(r.jsx)("img",{src:"/search.png"})})})})]})}),Object(r.jsx)(p.a,{recipes:n.recipes}),Object(r.jsxs)("div",{className:"h-24 relative",children:[function(){if(n.links.prev)return Object(r.jsx)(l.a,{href:"/"+n.links.prev.split("?")[1],children:Object(r.jsx)("div",{className:"my-7 mx-3 font-semibold absolute left-0",children:"\u524d\u306e\u30da\u30fc\u30b8"})})}(),function(){if(n.links.next)return Object(r.jsx)(l.a,{href:"/"+n.links.next.split("?")[1],children:Object(r.jsx)("div",{className:"my-7 mx-3 font-semibold absolute right-0",children:"\u6b21\u306e\u30da\u30fc\u30b8"})})}()]})]})}},EOcM:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n("o0o1"),c=n.n(r),a=n("HaE+");function s(e){return i.apply(this,arguments)}function i(){return(i=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://internship-recipe-api.ckpd.co/recipes",t&&(n="https://internship-recipe-api.ckpd.co/recipes?"+t),e.next=4,fetch(n,{headers:{"X-Api-Key":"remark-fish-magician"}});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,console.log(a),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://internship-recipe-api.ckpd.co/search?"+t,e.next=3,fetch(n,{headers:{"X-Api-Key":"remark-fish-magician"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,console.log(a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,c,a,s){try{var i=e[a](s),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var s=e.apply(t,n);function i(e){r(s,c,a,i,o,"next",e)}function o(e){r(s,c,a,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return c}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var a=c(n("q1tI")),s=n("elyg"),i=n("nOHt"),o=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,s.resolveHref)(c,e.as):i||a}}),[c,e.href,e.as]),p=f.href,d=f.as,h=e.children,b=e.replace,v=e.shallow,j=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=a.Children.only(h),y=x&&"object"===typeof x&&x.ref,O=(0,o.useIntersection)({rootMargin:"200px"}),g=r(O,2),w=g[0],N=g[1],k=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,a.useEffect)((function(){var e=N&&t&&(0,s.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,c=u[p+"%"+d+(r?"%"+r:"")];e&&!c&&l(n,p,d,{locale:r})}),[d,p,N,m,t,n]);var E={ref:k,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:a,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,p,d,b,v,j,m)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var _="undefined"!==typeof m?m:n&&n.locale,L=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(d,_,n&&n.locales,n&&n.domainLocales);E.href=L||(0,s.addBasePath)((0,s.addLocale)(d,_,n&&n.defaultLocale))}return a.default.cloneElement(x,E)};t.default=f},mdJ4:function(e,t,n){"use strict";var r=n("nKUr"),c=n("YFqc"),a=n.n(c);n("uXJ4");t.a=function(e){return Object(r.jsx)("div",{className:"App text-gray-700",children:e.recipes.map((function(e,t){return Object(r.jsx)(a.a,{href:"/recipes/"+e.id,children:Object(r.jsxs)("div",{className:"border border-b-2 border-bg-300 h-28 flex justify-center",children:[Object(r.jsx)("img",{src:e.image_url,className:"w-1/3 h-3/5 mx-2 my-5"}),Object(r.jsxs)("div",{className:"w-2/3",children:[Object(r.jsx)("h1",{className:"text-center p-1 font-bold text-sm",children:e.title}),Object(r.jsx)("h1",{className:"text-center p-1 text-xs",children:e.description})]})]})},t)}))})}},uXJ4:function(e,t,n){},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,o=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){s.delete(e),a.unobserve(e),0===s.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var c=n("q1tI"),a=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[["2ZIO",0,2,1]]]);