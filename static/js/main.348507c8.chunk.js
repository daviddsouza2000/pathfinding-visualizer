(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i),s=e(9),o=e.n(s),c=(e(14),e(15),e(2)),u=e(5),a=(e(16),e(0));function l(t){var n=t.col,e=t.isFinish,i=t.isStart,r=t.isWall,s=(t.isVisited,t.onMouseDown),o=t.onMouseEnter,c=t.onMouseUp,u=t.row,l=e?"node-finish":i?"node-start":r?"node-wall":"";return Object(a.jsx)("div",{id:"node-".concat(u,"-").concat(n),className:"node ".concat(l),onMouseDown:function(){return s(u,n)},onMouseEnter:function(){return o(u,n)},onMouseUp:function(){return c()}})}var f=e(3);function d(t,n,e){var i=[];n.distance=0;for(var r=function(t){var n,e=[],i=Object(f.a)(t);try{for(i.s();!(n=i.n()).done;){var r,s=n.value,o=Object(f.a)(s);try{for(o.s();!(r=o.n()).done;){var c=r.value;e.push(c)}}catch(u){o.e(u)}finally{o.f()}}}catch(u){i.e(u)}finally{i.f()}return e}(t);r.length;){h(r);var s=r.shift();if(!s.isWall){if(s.distance===1/0)return i;if(s.isVisited=!0,i.push(s),s===e)return i;v(s,t)}}}function h(t){t.sort((function(t,n){return t.distance-n.distance}))}function v(t,n){var e,i=function(t,n){var e=[],i=t.col,r=t.row;r>0&&e.push(n[r-1][i]);r<n.length-1&&e.push(n[r+1][i]);i>0&&e.push(n[r][i-1]);i<n[0].length-1&&e.push(n[r][i+1]);return e.filter((function(t){return!t.isVisited}))}(t,n),r=Object(f.a)(i);try{for(r.s();!(e=r.n()).done;){var s=e.value;s.distance=t.distance+1,s.previousNode=t}}catch(o){r.e(o)}finally{r.f()}}var j=e(7);function p(t,n){var e=[],i=t.col,r=t.row;return r>0&&e.push(n[r-1][i]),r<n.length-1&&e.push(n[r+1][i]),i>0&&e.push(n[r][i-1]),i<n[0].length-1&&e.push(n[r][i+1]),e.filter((function(t){return!t.isVisited}))}function b(t,n){var e=[],i=t.col,r=t.row;return r>0&&e.push(n[r-1][i]),r<n.length-1&&e.push(n[r+1][i]),i>0&&e.push(n[r][i-1]),i<n[0].length-1&&e.push(n[r][i+1]),e.filter((function(t){return!t.isVisited}))}function O(t,n,e,i){var r=[],s=n.col,o=n.row;return o>0&&r.push(t[o-1][s]),o<t.length-1&&r.push(t[o+1][s]),s>0&&r.push(t[o][s-1]),s<t[0].length-1&&r.push(t[o][s+1]),r.filter((function(t){return!t.isWall}))}function g(t,n){return Math.abs(t.col-n.col)+Math.abs(t.row-n.row)}e(18);var m=8,w=15,V=10,x=35;function N(){var t=Object(i.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],s=Object(i.useState)(!1),o=Object(u.a)(s,2),c=o[0],h=o[1],v=Object(i.useState)(!0),N=Object(u.a)(v,2),S=N[0],C=N[1],k=Object(i.useState)(!1),E=Object(u.a)(k,2),B=E[0],D=E[1],A=Object(i.useState)(!1),I=Object(u.a)(A,2),T=I[0],L=I[1];Object(i.useEffect)((function(){var t=y();r(t)}),[]);var P=function(t,n){for(var e=function(e){if(e===t.length)return setTimeout((function(){z(n)}),10*e),{v:void 0};setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).classList.add("node-visited")}),10*e)},i=0;i<=t.length;i++){var r=e(i);if("object"===typeof r)return r.v}},z=function(t){for(var n=function(n){setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.row,"-").concat(e.col)).classList.add("node-shortest-path")}),50*n)},e=0;e<t.length;e++)n(e)},U=function(){if(S){C(!1);var t=e[m][w],n=e[V][x],i=function(t,n,e){var i=[],r=[];for(r.push(n);r.length;){var s=r.shift();if(!s.isWall&&!s.isVisited){if(i.push(s),s.isVisited=!0,s===e)return i;var o,c=p(s,t),u=Object(f.a)(c);try{for(u.s();!(o=u.n()).done;)o.value.previousNode=s}catch(a){u.e(a)}finally{u.f()}r.push.apply(r,Object(j.a)(c))}}}(e,t,n),r=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(n);P(i,r)}},J=function(){if(S){C(!1);var t=e[m][w],n=e[V][x],i=function(t,n,e){var i=[],r=[];for(r.push(n);r.length;){var s=r.pop();if(!s.isWall&&!s.isVisited){if(i.push(s),s.isVisited=!0,s===e)return i;var o,c=b(s,t),u=Object(f.a)(c);try{for(u.s();!(o=u.n()).done;)o.value.previousNode=s}catch(a){u.e(a)}finally{u.f()}r.push.apply(r,Object(j.a)(c))}}}(e,t,n),r=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(n);P(i,r)}},q=function(){if(S){C(!1);var t=e[m][w],n=e[V][x],i=function(t,n,e){var i=[],r=[],s=[];for(n.fValue=g(n,e),r.push(n);r.length;){console.log(i);var o=r.shift();if(!o.isVisited){if(i.push(o),o.isVisited=!0,o===e)return i;var c,u=O(t,o),a=Object(f.a)(u);try{for(a.s();!(c=a.n()).done;){var l=c.value;if(!r.includes(l)&&!r.includes(l)){r.push(l);var d=g(n,l)+g(l,e);l.fValue?d<l.fValue&&(l.fValue=d,l.previousNode=o):(l.fValue=d,l.previousNode=o)}}}catch(h){a.e(h)}finally{a.f()}s.push(o),r.sort((function(t,n){return t.fValue-n.fValue}))}}}(e,t,n),r=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(n);P(i,r)}};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsxs)("button",{className:"dropbtn",children:["Visualize Pathfinding Algorithm",Object(a.jsx)("i",{className:"fa fa-caret-down"})]}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("button",{onClick:function(){return function(){if(S){C(!1);var t=e[m][w],n=e[V][x],i=d(e,t,n),r=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(n);P(i,r)}}()},children:"Dijkstra's Algorithm"}),Object(a.jsx)("button",{onClick:function(){return U()},children:"Breadth First Search"}),Object(a.jsx)("button",{onClick:function(){return J()},children:"Depth First Search"}),Object(a.jsx)("button",{onClick:function(){return q()},children:"A* Algorithm"})]})]}),Object(a.jsx)("button",{className:"clearButton",onClick:function(){window.location.reload()},children:"Clear"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"grid",children:e.map((function(t,n){return Object(a.jsx)("div",{children:t.map((function(t,n){var i=t.row,s=t.col,o=t.isFinish,u=t.isStart,f=t.isWall,d=t.isVisited;return Object(a.jsx)(l,{col:s,isFinish:o,isStart:u,isWall:f,isVisited:d,mouseIsPressed:c,onMouseDown:function(t,n){return function(t,n){if(S){if(t===m&&n===w)D(!0);else if(t===V&&n===x)L(!0);else{var i=F(e,t,n);r(i)}h(!0)}}(t,n)},onMouseEnter:function(t,n){return function(t,n){if(S&&c)if(B){var i=M(e,t,n);r(i)}else if(T){var s=W(e,t,n);r(s)}else{var o=F(e,t,n);r(o)}}(t,n)},onMouseUp:function(){return D(!1),L(!1),void h(!1)},row:i},n)}))},n)}))})]})}var y=function(){for(var t=[],n=0;n<20;n++){for(var e=[],i=0;i<50;i++)e.push(S(i,n));t.push(e)}return t},S=function(t,n){return{col:t,row:n,isStart:n===m&&t===w,isFinish:n===V&&t===x,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},F=function(t,n,e){var i=t.slice(),r=i[n][e],s=Object(c.a)(Object(c.a)({},r),{},{isWall:!r.isWall});return i[n][e]=s,i},M=function(t,n,e){var i=t.slice(),r=i[m][w],s=Object(c.a)(Object(c.a)({},r),{},{isStart:!1});i[m][w]=s,w=e;var o=i[m=n][w],u=Object(c.a)(Object(c.a)({},o),{},{isStart:!0,isWall:!1});return i[m][w]=u,i},W=function(t,n,e){var i=t.slice(),r=i[V][x],s=Object(c.a)(Object(c.a)({},r),{},{isFinish:!1});i[V][x]=s,x=e;var o=i[V=n][x],u=Object(c.a)(Object(c.a)({},o),{},{isFinish:!0,isWall:!1});return i[V][x]=u,i};var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},k=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(n){var e=n.getCLS,i=n.getFID,r=n.getFCP,s=n.getLCP,o=n.getTTFB;e(t),i(t),r(t),s(t),o(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.348507c8.chunk.js.map