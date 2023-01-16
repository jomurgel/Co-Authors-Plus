!function(){var e,t={566:function(e,t,r){"use strict";var n=window.wp.element,o=window.wp.plugins,a=window.wp.editPost,s=window.wp.i18n,u=window.wp.apiFetch,l=r.n(u),c=window.wp.components,i=window.wp.hooks,p=window.wp.data,h=r(697),m=r.n(h),v=window.wp.primitives,d=(0,n.createElement)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(v.Path,{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})),f=(0,n.createElement)(v.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(v.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),g=(0,n.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(v.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}));const w=(e,t,r)=>{const n=t.map((e=>e.value)).indexOf(e.value),o=n+("up"===r?-1:1),a=t.map((e=>Object.assign({},e))),s=a[n],u=[...a.filter((e=>e.value?e.value!==s.value:e!==s))];return u.splice(o,0,s),u},E=e=>{let{displayName:t,userNicename:r,email:n}=e;return{label:`${t} | ${n}`,display:t,value:r}},_=e=>{let{selectedAuthors:t,updateAuthors:r}=e;const o=(e,n)=>{let o;switch(n){case"moveDown":o=w(e,t,"down");break;case"moveUp":o=w(e,t,"up");break;case"remove":a=e,o=t.filter((e=>e.value!==a.value))}var a;r(o)};return null!=t&&t.length?t.map(((e,r)=>{const a=e.display,u=e.value;return(0,n.createElement)("div",{key:u,className:"cap-author"},(0,n.createElement)(c.Flex,{align:"center"},(0,n.createElement)(c.FlexItem,null,(0,n.createElement)("span",null,a)),(0,n.createElement)(c.FlexItem,{justify:"flex-end"},(0,n.createElement)(c.Flex,null,(0,n.createElement)("div",{className:"cap-icon-button-stack"},(0,n.createElement)(c.Button,{icon:d,className:"cap-icon-button",label:(0,s.__)("Move Up","co-authors-plus"),disabled:0===r||1===t.length,onClick:()=>o(e,"moveUp")}),(0,n.createElement)(c.Button,{icon:f,className:"cap-icon-button",label:(0,s.__)("Move down","co-authors-plus"),disabled:r===t.length-1||1===t.length,onClick:()=>o(e,"moveDown")})),(0,n.createElement)(c.Button,{icon:g,iconSize:20,className:"cap-icon-button",label:(0,s.__)("Remove Author","co-authors-plus"),disabled:1===t.length,onClick:()=>o(e,"remove")})))))})):null};_.propTypes={selectedAuthors:m().arrayOf([m().shape({id:m().oneOfType([m().string,m().number]),userNiceName:m().string,login:m().string,email:m().string,displayName:m().string,avatar:m().string})]).isRequired,updateAuthors:m().func.isRequired};var y=_;const b={authors:[]},S={setAuthors(e){return{type:"SET_AUTHORS",authors:[...e]}},setAuthorsStore(e){return{type:"SET_AUTHORS_STORE",authors:[...e]}},apiRequest(e){return{type:"API_REQUEST",path:e,method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"}}};var O=(0,p.createReduxStore)("cap/authors",{reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHORS":return{...e,authors:[...e.authors,...t.authors]};case"SET_AUTHORS_STORE":return{...e,authors:[...t.authors]}}return e},actions:S,selectors:{getAuthors(e){const{authors:t}=e;return t},saveAuthors(e){const{authors:t}=e;return t}},controls:{API_REQUEST(e){return l()({path:e.path,method:e.method})}},resolvers:{*getAuthors(e){if(!e)return S.setAuthors([]);const t=`/coauthors/v1/authors/${e}`,r=(yield S.apiRequest(t)).map((e=>E(e)));return S.setAuthors(r)},*saveAuthors(e,t){const r=`/coauthors/v1/authors/${e}?new_authors=${t.map((e=>e.value)).join(",")}`;yield S.apiRequest(r,"POST")}}});(0,p.register)(O);var A=()=>{const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)([]),a=(0,p.useSelect)((e=>e("core/editor").getCurrentPostId())),u=(0,p.useSelect)((e=>{var t;return null===(t=e("cap/authors"))||void 0===t?void 0:t.saveAuthors}),[]),h=(0,p.useSelect)((e=>{var t;return null===(t=e("cap/authors"))||void 0===t?void 0:t.getAuthors(a)}),[a]),{setAuthorsStore:m}=(0,p.useDispatch)("cap/authors"),v=(0,i.applyFilters)("coAuthors.search.threshold",2),d=e=>{m(e),t(e)};return(0,n.useEffect)((()=>{h.length&&(t(h),m(h),u(a,h))}),[h]),(0,n.createElement)(n.Fragment,null,Boolean(e.length)?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(y,{selectedAuthors:e,updateAuthors:d})):(0,n.createElement)(c.Spinner,null),(0,n.createElement)(c.ComboboxControl,{className:"cap-combobox",label:(0,s.__)("Select An Author","co-authors-plus"),value:null,options:r,onChange:t=>{const n=((e,t,r)=>[...t,r.filter((t=>t.value===e))[0]])(t,e,r);d(n)},onFilterValueChange:async t=>{let r=0;if(t.length<v)return;const n=e.map((e=>e.value)).join(",");try{r=await l()({path:`/coauthors/v1/search/?q=${t}&existing_authors=${n}`,method:"GET"});const e=(a=r).length>0?a.map((e=>E(e))):[];o(e)}catch(e){r=0,console.log(e)}var a}}))};(0,o.registerPlugin)("plugin-coauthors-document-setting",{render:()=>(0,n.createElement)(a.PluginDocumentSettingPanel,{name:"coauthors-panel",title:"Authors",className:"coauthors"},(0,n.createElement)(A,null)),icon:"users"})},703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,s){if(s!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var s=1/0;for(i=0;i<e.length;i++){r=e[i][0],o=e[i][1],a=e[i][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<s&&(s=a));if(u){e.splice(i--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,o,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],u=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var i=l(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(i)},r=self.webpackChunkco_authors_plus_3_5_3=self.webpackChunkco_authors_plus_3_5_3||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(566)}));o=n.O(o)}();