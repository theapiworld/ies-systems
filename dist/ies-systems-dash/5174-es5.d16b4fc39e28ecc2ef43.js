!function(){function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(s)throw i}}}}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[5174],{5174:function(n,o,i){"use strict";i.r(o),i.d(o,{ion_route:function(){return p},ion_route_redirect:function(){return g},ion_router:function(){return I},ion_router_link:function(){return T}});var s,c,f=i(6304),l=i(3150),h=i(2377),v=i(7585),d=i(1269),p=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteDataChanged=(0,l.e)(this,"ionRouteDataChanged",7),this.url=""}return u(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var n=e?Object.keys(e):[],o=t?Object.keys(t):[];if(n.length===o.length){var a,i=r(n);try{for(i.s();!(a=i.n()).done;){var u=a.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(s){i.e(s)}finally{i.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),g=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteRedirectChanged=(0,l.e)(this,"ionRouteRedirectChanged",7)}return u(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),m=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},b=function(e){var t,r=[""];if(null!=e){var n=e.indexOf("?");n>-1&&(t=e.substr(n+1),e=e.substr(0,n)),0===(r=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0})).length&&(r=[""])}return{segments:r,queryString:t}},y=(c=(0,f.Z)(regeneratorRuntime.mark(function e(t,r,n,o){var a,i,u,s,c,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=f.length>4&&void 0!==f[4]&&f[4],i=f.length>5?f[5]:void 0,e.prev=2,u=R(t),!(o>=r.length)&&u){e.next=6;break}return e.abrupt("return",a);case 6:return e.next=8,new Promise(function(e){return(0,h.c)(u,e)});case 8:return s=r[o],e.next=11,u.setRouteId(s.id,s.params,n,i);case 11:return(c=e.sent).changed&&(n="root",a=!0),e.next=15,y(c.element,r,n,o+1,a,i);case 15:if(a=e.sent,e.t0=c.markVisible,!e.t0){e.next=20;break}return e.next=20,c.markVisible();case 20:return e.abrupt("return",a);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])})),function(e,t,r,n){return c.apply(this,arguments)}),w=(s=(0,f.Z)(regeneratorRuntime.mark(function e(t){var r,n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[],o=t;case 2:if(!(n=R(o))){e.next=11;break}return e.next=5,n.getRouteId();case 5:if(a=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=a.element,a.element=void 0,r.push(a);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:r,outlet:n});case 12:case"end":return e.stop()}},e)})),function(e){return s.apply(this,arguments)}),k=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",R=function(e){if(e){if(e.matches(k))return e;var t=e.querySelector(k);return null!=t?t:void 0}},x=function(e,t){return t.find(function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==e[n])return!1}return r.length===e.length}(e,t)})},C=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},S=function(e,t){for(var n,o=new j(e),a=!1,i=0;i<t.length;i++){var u=t[i].path;if(""===u[0])a=!0;else{var s,c=r(u);try{for(c.s();!(s=c.n()).done;){var f=s.value,l=o.next();if(":"===f[0]){if(""===l)return null;((n=n||[])[i]||(n[i]={}))[f.slice(1)]=l}else if(l!==f)return null}}catch(h){c.e(h)}finally{c.f()}a=!1}}return a&&a!==(""===o.next())?null:n?t.map(function(e,t){return{id:e.id,path:e.path,params:P(e.params,n[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},P=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},E=function(e,t){var n,o=null,a=0,i=r(t);try{for(i.s();!(n=i.n()).done;){var u=n.value,s=S(e,u);if(null!==s){var c=D(s);c>a&&(a=c,o=s)}}}catch(f){i.e(f)}finally{i.f()}return o},D=function(e){var t,n=1,o=1,a=r(e);try{for(a.s();!(t=a.n()).done;){var i,u=r(t.value.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;":"===s[0]?n+=Math.pow(1,o):""!==s&&(n+=Math.pow(2,o)),o++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){a.e(c)}finally{a.f()}return n},j=function(){function e(t){a(this,e),this.path=t.slice()}return u(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),L=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},O=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=L(e,"to");return{from:b(L(e,"from")).segments,to:null==t?void 0:b(t)}})},N=function(e){return Z(A(e))},A=function e(t){return Array.from(t.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(t){var r=L(t,"component");return{path:b(L(t,"url")).segments,id:r.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:e(t)}})},Z=function(e){var t,n=[],o=r(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;U([],n,a)}}catch(i){o.e(i)}finally{o.f()}return n},U=function e(t,n,o){if((t=t.slice()).push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length){var a,i=r(o.children);try{for(i.s();!(a=i.n()).done;){e(t,n,a.value)}}catch(u){i.e(u)}finally{i.f()}}else n.push(t)},I=function(){function e(t){a(this,e),(0,l.r)(this,t),this.ionRouteWillChange=(0,l.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,l.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return u(e,[{key:"componentWillLoad",value:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark(function t(){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 2:return t.next=4,e.runGuards(e.getPath());case 4:if(!0===(r=t.sent)){t.next=13;break}if("object"!=typeof r){t.next=11;break}return n=r.redirect,o=b(n),e.setPath(o.segments,"root",o.queryString),t.next=11,e.writeNavStateRoot(o.segments,"root");case 11:t.next=15;break;case 13:return t.next=15,e.onRoutesChanged();case 15:case"end":return t.stop()}},t)}))()}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark(function t(){var r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.historyDirection(),n=e.getPath(),t.next=4,e.runGuards(n);case 4:if(!0===(o=t.sent)){t.next=9;break}if("object"==typeof o){t.next=8;break}return t.abrupt("return",!1);case 8:n=b(o.redirect).segments;case 9:return t.abrupt("return",e.writeNavStateRoot(n,r));case 10:case"end":return t.stop()}},t)}))()}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.runGuards();case 2:return r=t.sent,t.abrupt("return",!0===r||"object"==typeof r&&r.redirect);case 4:case"end":return t.stop()}},t)}))()}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward",r=arguments.length>2?arguments[2]:void 0,n=this;return(0,f.Z)(regeneratorRuntime.mark(function o(){var a,i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),a=b(e),o.next=4,n.runGuards(a.segments);case 4:if(!0===(i=o.sent)){o.next=9;break}if("object"==typeof i){o.next=8;break}return o.abrupt("return",!1);case 8:a=b(i.redirect);case 9:return o.abrupt("return",(n.setPath(a.segments,t,a.queryString),n.writeNavStateRoot(a.segments,t,r)));case 10:case"end":return o.stop()}},o)}))()}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:(function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var n,o=r(e);try{var a=function(){var e=n.value,r=[];e.forEach(function(e){return r.push.apply(r,t(e.path))});var o=e.map(function(e){return e.id});console.debug("%c ".concat(m(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(o.s();!(n=o.n()).done;)a()}catch(i){o.e(i)}finally{o.f()}console.groupEnd()})(N(e.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,n=r(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.to&&console.debug("FROM: ","$c ".concat(m(o.from)),"font-weight: bold"," TO: ","$c ".concat(m(o.to.segments)),"font-weight: bold")}}catch(a){n.e(a)}finally{n.f()}console.groupEnd()}(O(e.el));case 1:case"end":return n.stop()}},n)}))()}},{key:"navChanged",value:function(e){var t=this;return(0,f.Z)(regeneratorRuntime.mark(function n(){var o,a,i,u,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.busy){n.next=2;break}return n.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return n.next=4,w(window.document.body);case 4:if(o=n.sent,a=o.ids,i=o.outlet,u=function(e,t){var n,o=null,a=0,i=e.map(function(e){return e.id}),u=r(t);try{for(u.s();!(n=u.n()).done;){var s=n.value,c=C(i,s);c>a&&(o=s,a=c)}}catch(f){u.e(f)}finally{u.f()}return o?o.map(function(t,r){return{id:t.id,path:t.path,params:P(t.params,e[r]&&e[r].params)}}):null}(a,N(t.el))){n.next=10;break}return n.abrupt("return",(console.warn("[ion-router] no matching URL for ",a.map(function(e){return e.id})),!1));case 10:if(!(s=function(e){var t,n=[],o=r(e);try{for(o.s();!(t=o.n()).done;){var a,i=t.value,u=r(i.path);try{for(u.s();!(a=u.n()).done;){var s=a.value;if(":"===s[0]){var c=i.params&&i.params[s.slice(1)];if(!c)return null;n.push(c)}else""!==s&&n.push(s)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){o.e(f)}finally{o.f()}return n}(u))){n.next=18;break}return t.setPath(s,e),n.next=15,t.safeWriteNavState(i,u,"root",s,null,a.length);case 15:n.t0=!0,n.next=19;break;case 18:n.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return n.abrupt("return",n.t0);case 20:case"end":return n.stop()}},n)}))()}},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&x(e,O(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var r=t.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?"forward":r<n?"back":"root"}},{key:"writeNavStateRoot",value:function(e,t,r){var n=this;return(0,f.Z)(regeneratorRuntime.mark(function o(){var a,i,u,s,c,f,l,h;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e){o.next=2;break}return o.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return a=O(n.el),i=x(e,a),u=null,i&&(s=i.to,c=s.segments,f=s.queryString,n.setPath(c,t,f),u=i.from,e=c),l=N(n.el),h=E(e,l),o.abrupt("return",h?n.safeWriteNavState(document.body,h,t,e,u,0,r):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return o.stop()}},o)}))()}},{key:"safeWriteNavState",value:function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return(0,f.Z)(regeneratorRuntime.mark(function s(){var c,f;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.lock();case 2:return c=s.sent,f=!1,s.prev=4,s.next=7,u.writeNavState(e,t,r,n,o,a,i);case 7:f=s.sent,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(4),console.error(s.t0);case 13:return s.abrupt("return",(c(),f));case 14:case"end":return s.stop()}},s,null,[[4,10]])}))()}},{key:"lock",value:function(){var e=this;return(0,f.Z)(regeneratorRuntime.mark(function t(){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.waitPromise,e.waitPromise=new Promise(function(e){return n=e}),t.t0=void 0!==r,!t.t0){t.next=6;break}return t.next=6,r;case 6:return t.abrupt("return",n);case 7:case"end":return t.stop()}},t)}))()}},{key:"runGuards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPath(),t=arguments.length>1?arguments[1]:void 0,r=this;return(0,f.Z)(regeneratorRuntime.mark(function n(){var o,a,i,u,s,c;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===t&&(t=b(r.previousPath).segments),e&&t){n.next=2;break}return n.abrupt("return",!0);case 2:if(o=N(r.el),a=E(t,o),i=a&&a[a.length-1].beforeLeave,n.t0=!i,n.t0){n.next=10;break}return n.next=9,i();case 9:n.t0=n.sent;case 10:if(!1!==(u=n.t0)&&"object"!=typeof u){n.next=13;break}return n.abrupt("return",u);case 13:return s=E(e,o),c=s&&s[s.length-1].beforeEnter,n.abrupt("return",!c||c());case 15:case"end":return n.stop()}},n)}))()}},{key:"writeNavState",value:function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return(0,f.Z)(regeneratorRuntime.mark(function s(){var c,f;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!u.busy){s.next=2;break}return s.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return u.busy=!0,(c=u.routeChangeEvent(n,o))&&u.ionRouteWillChange.emit(c),s.next=7,y(e,t,r,a,!1,i);case 7:return f=s.sent,s.abrupt("return",(u.busy=!1,c&&u.ionRouteDidChange.emit(c),f));case 9:case"end":return s.stop()}},s)}))()}},{key:"setPath",value:function(e,r,n){var o=this;this.state++,function(e,r,n,a,i,u,s){var c=function(e,t,r){var n=m(e);return t&&(n="#"+n),void 0!==r&&(n+="?"+r),n}([].concat(t(b(o.root).segments),t(a)),n,s);"forward"===i?e.pushState(u,"",c):e.replaceState(u,"",c)}(window.history,0,this.useHash,e,r,this.state,n)}},{key:"getPath",value:function(){var e,t,r,n,o=this;return e=window.location,t=this.useHash,r=b(o.root).segments,n=t?e.hash.slice(1):e.pathname,function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(r,b(n).segments)}},{key:"routeChangeEvent",value:function(e,t){var r=this.previousPath,n=m(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?m(t):null,to:n}}},{key:"el",get:function(){return(0,l.i)(this)}}]),e}(),T=function(){function t(e){var r=this;a(this,t),(0,l.r)(this,e),this.routerDirection="forward",this.onClick=function(e){(0,d.o)(r.href,e,r.routerDirection,r.routerAnimation)}}return u(t,[{key:"render",value:function(){var t,r=(0,v.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,l.h)(l.H,{onClick:this.onClick,class:(0,d.c)(this.color,(t={},e(t,r,!0),e(t,"ion-activatable",!0),t))},(0,l.h)("a",Object.assign({},n),(0,l.h)("slot",null)))}}]),t}();T.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();