import{S as N,o as k,i as L,s as c,j as q,g as w,U as u,k as o,l as R,m as B,n as C,p as F,q as H,t as K,v as T,w as M,E as U,H as Y,x as z,y as Z,z as I,A as D,B as O,C as S,D as G}from"./Co7_LgsS.js";function g(s,b=null,E){if(typeof s!="object"||s===null||N in s)return s;const v=F(s);if(v!==k&&v!==L)return s;var a=new Map,l=H(s),_=c(0);l&&a.set("length",c(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&C();var r=a.get(e);return r===void 0?(r=c(t.value),a.set(e,r)):o(r,g(t.value,y)),!0},deleteProperty(f,e){var t=a.get(e);if(t===void 0)e in f&&a.set(e,c(u));else{if(l&&typeof e=="string"){var r=a.get("length"),n=Number(e);Number.isInteger(n)&&n<r.v&&o(r,n)}o(t,u),j(_)}return!0},get(f,e,t){var d;if(e===N)return s;var r=a.get(e),n=e in f;if(r===void 0&&(!n||(d=R(f,e))!=null&&d.writable)&&(r=c(g(n?f[e]:u,y)),a.set(e,r)),r!==void 0){var i=w(r);return i===u?void 0:i}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=w(r))}else if(t===void 0){var n=a.get(e),i=n==null?void 0:n.v;if(n!==void 0&&i!==u)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return t},has(f,e){var i;if(e===N)return!0;var t=a.get(e),r=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||B!==null&&(!r||(i=R(f,e))!=null&&i.writable)){t===void 0&&(t=c(r?g(f[e],y):u),a.set(e,t));var n=w(t);if(n===u)return!1}return r},set(f,e,t,r){var A;var n=a.get(e),i=e in f;if(l&&e==="length")for(var d=t;d<n.v;d+=1){var h=a.get(d+"");h!==void 0?o(h,u):d in f&&(h=c(u),a.set(d+"",h))}n===void 0?(!i||(A=R(f,e))!=null&&A.writable)&&(n=c(void 0),o(n,g(t,y)),a.set(e,n)):(i=n.v!==u,o(n,g(t,y)));var m=Reflect.getOwnPropertyDescriptor(f,e);if(m!=null&&m.set&&m.set.call(r,t),!i){if(l&&typeof e=="string"){var P=a.get("length"),x=Number(e);Number.isInteger(x)&&x>=P.v&&o(P,x+1)}j(_)}return!0},ownKeys(f){w(_);var e=Reflect.ownKeys(f).filter(n=>{var i=a.get(n);return i===void 0||i.v!==u});for(var[t,r]of a)r.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){q()}})}function j(s,b=1){o(s,s.v+b)}function Q(s,b,E=!1){T&&M();var v=s,a=null,l=null,_=u,y=E?U:0,f=!1;const e=(r,n=!0)=>{f=!0,t(n,r)},t=(r,n)=>{if(_===(_=r))return;let i=!1;if(T){const d=v.data===Y;!!_===d&&(v=z(),Z(v),I(!1),i=!0)}_?(a?D(a):n&&(a=O(()=>n(v))),l&&S(l,()=>{l=null})):(l?D(l):n&&(l=O(()=>n(v))),a&&S(a,()=>{a=null})),i&&I(!0)};K(()=>{f=!1,b(e),f||t(null,null)},y),T&&(v=G)}export{Q as i,g as p};
