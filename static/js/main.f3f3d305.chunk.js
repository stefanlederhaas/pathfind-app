(this["webpackJsonppathalgo-app"]=this["webpackJsonppathalgo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(3),s=n.n(i),a=n(9),o=n.n(a),r=(n(14),n(15),n(2)),c=n(1),d=n(4),l=n(5),u=n(7),h=n(6),f=(n(16),n(0)),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.rowOffset,n=e.type,i=e.posX,s=e.posY,a=e.onMouseDown,o=e.onMouseEnter,r=e.onMouseUp,c=t?"row-offset":"";return Object(f.jsx)("div",{id:"node-".concat(i,"-").concat(s),className:"node ".concat(c," ").concat(n),onMouseDown:function(){return a(i,s)},onMouseEnter:function(){return o(i,s)},onMouseUp:function(){return r()}})}}]),n}(i.Component),m=(n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"infobox",children:Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)("div",{className:"info-top",children:Object(f.jsxs)("div",{className:"infoFlex",children:[Object(f.jsx)("label",{id:"algo-text",children:"Algorithm:"}),Object(f.jsx)("label",{id:"labelAlgorithm",children:"--"})]})}),Object(f.jsxs)("div",{className:"info-center",children:[Object(f.jsxs)("div",{className:"info-left info-side",children:[Object(f.jsxs)("div",{className:"infoFlex",children:[Object(f.jsx)("label",{children:"Speed:"}),Object(f.jsx)("label",{id:"labelSpeed",children:"--"})]}),Object(f.jsxs)("div",{className:"infoFlex",children:[Object(f.jsx)("label",{children:"NodesVisited:"}),Object(f.jsx)("label",{id:"labelNodesVisited",children:"--"})]})]}),Object(f.jsxs)("div",{className:"info-right info-side",children:[Object(f.jsxs)("div",{className:"infoFlex",children:[Object(f.jsx)("label",{children:"Path-Length:"}),Object(f.jsx)("label",{id:"labelPathLength",children:"--"})]}),Object(f.jsxs)("div",{className:"infoFlex",children:[Object(f.jsx)("label",{children:"Path-Cost:"}),Object(f.jsx)("label",{id:"labelPathCost",children:"--"})]})]})]})]})})}}]),n}(i.Component));n(19);function p(e){var t,n=[],i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var s,a=t.value,o=Object(c.a)(a);try{for(o.s();!(s=o.n()).done;){var r=s.value;n.push(r)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){i.e(d)}finally{i.f()}return n}function j(e){e.sort((function(e,t){return e.distance-t.distance}))}function b(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var a=n.value,o="road"===a.type?1:4;a.distance>=e.distance+o&&(a.distance=e.distance+o,a.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}}function y(e,t){var n=[],i=e.posY,s=e.posX;return s>0&&n.push(t[i][s-1]),i>0&&n.push(t[i-1][s]),i<t.length-1&&n.push(t[i+1][s]),s<t[0].length-1&&n.push(t[i][s+1]),e.posY%2!==0?(i<t.length-1&&s<t[0].length-1&&n.push(t[i+1][s+1]),i>0&&s<t[0].length-1&&n.push(t[i-1][s+1])):(i<t.length-1&&s>0&&n.push(t[i+1][s-1]),i>0&&s>0&&n.push(t[i-1][s-1])),n.filter((function(e){return!("wall"===e.type)}))}function g(e){var t,n=e.slice(),i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var s,a=t.value,o=Object(c.a)(a);try{for(o.s();!(s=o.n()).done;){var d=s.value,l=Object(r.a)(Object(r.a)({},d),{},{distance:1/0,finishDistance:1/0,previousNode:null});n[d.posY][d.posX]=l}}catch(u){o.e(u)}finally{o.f()}}}catch(u){i.e(u)}finally{i.f()}return n}function N(e){for(var t=[],n=e,i=e.distance;null!==n;)t.unshift(n),n=n.previousNode;return document.getElementById("labelPathLength").innerHTML=t.length-1+"",document.getElementById("labelPathCost").innerHTML=i+"",t}function O(e,t,n){var i,s=y(e,t),a=Object(c.a)(s);try{for(a.s();!(i=a.n()).done;){var o=i.value;o.finishDistance===1/0&&x(o,n);var r="road"===o.type?1:4;o.distance>=e.distance+r&&(o.distance=e.distance+r,o.previousNode=e)}}catch(d){a.e(d)}finally{a.f()}}function x(e,t){var n=4*Math.round(Math.sqrt(Math.pow(e.posX-t.posX,2)+Math.pow(e.posY-t.posY,2),2));e.finishDistance=n}function B(e){e.sort((function(e,t){return e.distance+e.finishDistance-(t.finishDistance+t.distance)}))}function w(e){e.sort((function(e,t){return e.finishDistance-t.finishDistance}))}function k(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var a=n.value,o="road"===a.type?1:4;if(a.distance!==1/0&&a.isVisited)return console.log("return note from neighborsBi"),a;a.finishDistance>=e.finishDistance+o&&a.distance===1/0&&(a.finishDistance=e.finishDistance+o,a.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}return null}function I(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var a=n.value,o="road"===a.type?1:4;if(a.finishDistance!==1/0&&a.isVisitedBi)return console.log("return note from neighbors ."),console.log(a),a;a.distance>=e.distance+o&&a.finishDistance===1/0&&(a.distance=e.distance+o,a.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}return null}var M="wall",T="start",D="finish",L="road",S="",E="dijkstra",V="a-star",F="bi-dijkstra",A="bfs",H=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={grid:[],mouseIsPressed:!1,mouseAction:M,startNode:{y:2,x:3},finishNode:{y:7,x:8}},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.getStartGrid();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=this.state.mouseAction;if(n===M||n===L||n===S){var i=P(this.state.grid,e,t,n);this.setState({grid:i,mouseIsPressed:!0})}if(n===T||n===D){var s=this.getUpdateStartFinishGrid(e,t,n);this.setState({grid:s})}}},{key:"handleMouseEnter",value:function(e,t){var n=this.state.mouseAction;if(this.state.mouseIsPressed&&(n===M||n===L||n===S)){var i=P(this.state.grid,e,t,n);this.setState({grid:i})}}},{key:"handleMouseUp",value:function(){var e=document.getElementById("draw-selector").value;this.setState({mouseIsPressed:!1,mouseAction:e})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,i=function(i){if(i===e.length)return setTimeout((function(){n.addNodeVisited(e[i-1]),n.animateShortestPath(t)}),50*i),{v:void 0};i<e.length&&(setTimeout((function(){n.addNodeFocus(e[i])}),50*i),i>0&&setTimeout((function(){n.addNodeVisited(e[i-1])}),50*i))},s=0;s<=e.length;s++){var a=i(s);if("object"===typeof a)return a.v}}},{key:"animateDijkstraBidirectional",value:function(e,t,n){for(var i=this,s=0,a=0;s<e.length||a<t.length;)s<e.length&&(s<e.length&&(setTimeout((function(){i.addNodeFocus(e[s])}),50*s),s>0&&setTimeout((function(){i.addNodeVisited(e[s-1])}),50*s)),s++),a<t.length&&(a<t.length&&(setTimeout((function(){i.addNodeFocus(t[a])}),50*a),a>0&&setTimeout((function(){i.addNodeVisited(t[a-1])}),50*a)),a++);setTimeout((function(){i.animateShortestPath(n)}),50*(s+a))}},{key:"animateDijkstraBidirectional2",value:function(e,t,n){for(var i=this,s=function(t){t===e.length?setTimeout((function(){i.addNodeVisited(e[t-1])}),200*t):t<e.length&&(setTimeout((function(){i.addNodeFocus(e[t])}),200*t),t>0&&setTimeout((function(){i.addNodeVisited(e[t-1])}),200*t))},a=0;a<=e.length;a++)s(a);for(var o=function(e){e===t.length?(setTimeout((function(){i.addNodeVisitedBi(t[e-1])}),100+200*e),setTimeout((function(){i.animateShortestPath(n)}),200+200*e)):e<t.length&&(setTimeout((function(){i.addNodeFocusBi(t[e])}),100+200*e),e>0&&setTimeout((function(){i.addNodeVisitedBi(t[e-1])}),100+200*e))},r=0;r<=t.length;r++)o(r)}},{key:"addNodeFocus",value:function(e){if(C(e)){var t=e;document.getElementById("node-".concat(t.posX,"-").concat(t.posY)).classList.add("node-focus")}}},{key:"addNodeFocusBi",value:function(e){if(C(e)){var t=e;document.getElementById("node-".concat(t.posX,"-").concat(t.posY)).classList.add("node-focus-bi")}}},{key:"addNodeVisited",value:function(e){if(C(e)){var t=e,n=document.getElementById("node-".concat(t.posX,"-").concat(t.posY));n.classList.contains("node-focus")&&n.classList.remove("node-focus"),t.type===L&&n.classList.add("node-visited-road"),n.classList.add("node-visited")}}},{key:"addNodeVisitedBi",value:function(e){if(C(e)){var t=e,n=document.getElementById("node-".concat(t.posX,"-").concat(t.posY));n.classList.contains("node-focus-bi")&&n.classList.remove("node-focus-bi"),t.type===L&&n.classList.add("node-visited-road"),n.classList.add("node-visited-bi")}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){C(e[t])&&setTimeout((function(){var n=e[t],i=document.getElementById("node-".concat(n.posX,"-").concat(n.posY)),s=n.rowOffset?"row-offset":"";n.type===L?i.className="node node-shortest-path-road "+s:i.className="node node-shortest-path "+s}),100*t)},n=0;n<e.length;n++)t(n)}},{key:"startAlgo",value:function(){this.clear(!1);var e=document.getElementById("algo-selector").value;e===E?this.visualizeDijkstra():e===V?this.visualizeAStar():e===F?this.visualizeBiDijkstra():e===A&&this.visualizeBFS()}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=this.state.startNode,n=this.state.finishNode,i=function(e,t){document.getElementById("labelAlgorithm").innerHTML="Dijkstra";var n=window.performance.now(),i=[],s=g(e);s[t.y][t.x].distance=0;for(var a=p(s);a.length;){j(a);var o=a.shift();if("wall"!==o.type){if(o.distance===1/0){var r=window.performance.now()-n;return document.getElementById("labelSpeed").innerHTML=r.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=i.length-1+" Nodes",i}if(o.isVisited=!0,i.push(o),"finish"===o.type){var c=window.performance.now()-n;return document.getElementById("labelSpeed").innerHTML=c.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=i.length-1+" Nodes",i}b(o,s)}}}(e,t),s=N(e[n.y][n.x]);this.animateDijkstra(i,s)}},{key:"visualizeAStar",value:function(){var e=this.state.grid,t=this.state.startNode,n=this.state.finishNode,i=function(e,t,n){document.getElementById("labelAlgorithm").innerHTML="A*";var i=window.performance.now(),s=[],a=g(e),o=a[t.y][t.x],r=a[n.y][n.x];o.distance=0,x(o,r);for(var c=p(a);c.length;){B(c);var d=c.shift();if("wall"!==d.type){if(d.distance===1/0){var l=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=l.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=s.length-1+" Nodes",s}if(d.isVisited=!0,s.push(d),"finish"===d.type){var u=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=u.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=s.length-1+" Nodes",s}O(d,a,r)}}}(e,t,n),s=N(e[n.y][n.x]);this.animateDijkstra(i,s)}},{key:"visualizeBiDijkstra",value:function(){var e=function(e,t,n){document.getElementById("labelAlgorithm").innerHTML="Bidirectional-Dijkstra";var i=window.performance.now(),s=[],a=[],o=g(e),r=o.slice(),c=o[t.y][t.x];o[n.y][n.x],c.distance=0;var d=r[n.y][n.x];r[t.x][t.x],d.finishDistance=0;for(var l=p(o),u=l.slice();l.length||u.length;){j(l),w(u);var h=l.shift(),f=u.shift();if("wall"!==h.type&&h.distance!==1/0){h.isVisited=!0,s.push(h);var v=I(h,o);if(null!==v){var m=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=m.toFixed(2)+" ms",{visitedNodesInOrder:s,visitedNodesInOrderBi:a,closestNode:h,finishNode2:v}}}if("wall"!==f.type&&f.finishDistance!==1/0){f.isVisitedBi=!0,a.push(f);var b=k(f,o);h=b;var y=f;if(null!==b){var N=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=N.toFixed(2)+" ms",{visitedNodesInOrder:s,visitedNodesInOrderBi:a,closestNode:h,finishNode2:y}}}}return{visitedNodesInOrder:s,visitedNodesInOrderBi:a}}(this.state.grid,this.state.startNode,this.state.finishNode),t=e.visitedNodesInOrder,n=e.visitedNodesInOrderBi,i=e.closestNode,s=e.finishNode2;document.getElementById("labelNodesVisited").innerHTML=t.length-1+n.length-1+" Nodes";var a=null==i||null==s?[]:function(e,t){for(var n=[],i=e,s="road"===t.type?2:4,a=e.distance+t.finishDistance+s;null!==i;)n.unshift(i),i=i.previousNode;for(i=t;null!==i;)n.unshift(i),i=i.previousNode;return document.getElementById("labelPathLength").innerHTML=n.length-1+"",document.getElementById("labelPathCost").innerHTML=a+"",n}(i,s);this.animateDijkstraBidirectional2(t,n,a)}},{key:"visualizeBFS",value:function(){var e=this.state.grid,t=this.state.startNode,n=this.state.finishNode,i=function(e,t){document.getElementById("labelAlgorithm").innerHTML="Dijkstra",window.performance.now();var n=[],i=g(e)[t.y][t.x];i.distance=0;var s=0;for(n.push(i);s<n.length;){var a,o=y(n),r=Object(c.a)(o);try{var d=function(){var e=a.value;if(!n.some((function(t){return t.posX===e.posX&&t.posY===e.posY}))&&(n.push(e),e.previousNode=n[s],e.type="finish"))return{v:n}};for(r.s();!(a=r.n()).done;){var l=d();if("object"===typeof l)return l.v}}catch(u){r.e(u)}finally{r.f()}s++}return n}(e,t),s=N(e[n.y][n.x]);this.animateDijkstra(i,s)}},{key:"setAction",value:function(e){this.setState({mouseAction:e})}},{key:"clear",value:function(e){var t,n=this.state.grid,i=Object(c.a)(n);try{for(i.s();!(t=i.n()).done;){var s,a=t.value,o=Object(c.a)(a);try{for(o.s();!(s=o.n()).done;){var d=s.value,l=!e||d.type!==M&&d.type!==L?d.type:"",u=Object(r.a)(Object(r.a)({},d),{},{isVisited:!1,isVisitedBi:!1,type:l});n[d.posY][d.posX]=u;var h=document.getElementById("node-".concat(u.posX,"-").concat(u.posY)),f=d.rowOffset?"row-offset":"";h.className="node "+f+" "+d.type}}catch(v){o.e(v)}finally{o.f()}}}catch(v){i.e(v)}finally{i.f()}this.setState({grid:n}),Y()}},{key:"clearWallRoad",value:function(){var e,t=this.getStartGrid(),n=Object(c.a)(t);try{for(n.s();!(e=n.n()).done;){var i,s=e.value,a=Object(c.a)(s);try{for(a.s();!(i=a.n()).done;){var o=i.value,d=Object(r.a)(Object(r.a)({},o),{},{isVisited:!1,type:o.type===M?"":o.type});t[o.posY][o.posX]=d;var l=document.getElementById("node-".concat(d.posX,"-").concat(d.posY)),u=o.rowOffset?"row-offset":"";l.className="node "+u+" "+o.type}}catch(h){a.e(h)}finally{a.f()}}}catch(h){n.e(h)}finally{n.f()}this.setState({grid:t})}},{key:"changeDrawType",value:function(e){var t=e.value;this.setState({mouseAction:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,i=t.mouseIsPressed;return Object(f.jsxs)("div",{className:"noscroll",children:[Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)("div",{className:"box",children:Object(f.jsxs)("select",{id:"algo-selector",defaultValue:E,children:[Object(f.jsx)("option",{value:E,children:"Dijkstra"}),Object(f.jsx)("option",{value:V,children:"A*"}),Object(f.jsx)("option",{value:F,children:"Bi-Dijkstra"}),Object(f.jsx)("option",{value:A,children:"BFS"})]})}),Object(f.jsx)("div",{className:"box",children:Object(f.jsxs)("select",{id:"draw-selector",onChange:function(){return e.changeDrawType(e)},defaultValue:M,children:[Object(f.jsx)("option",{value:M,children:"Wall"}),Object(f.jsx)("option",{value:L,children:"Road"}),Object(f.jsx)("option",{value:S,children:"Delete"})]})}),Object(f.jsx)("button",{className:"white-btn",onClick:function(){return e.clear(!1)},children:"Clear Path"}),Object(f.jsx)("button",{className:"startButton",onClick:function(){return e.startAlgo()},children:"Start Search!"}),Object(f.jsx)("button",{className:"white-btn",onClick:function(){return e.clear(!0)},children:"Clear ALL"}),Object(f.jsx)("button",{id:"setStartBtn",className:"btn",onClick:function(){return e.setAction(T)},children:"SetStart"}),Object(f.jsx)("button",{id:"setFinishBtn",className:"btn",onClick:function(){return e.setAction(D)},children:"SetFinish"})]}),Object(f.jsx)(m,{}),Object(f.jsx)("div",{className:"grid",id:"griddiv",children:n.map((function(t,n){return Object(f.jsx)("div",{children:t.map((function(t,s){var a=t.posX,o=t.posY,r=t.type,c=t.distance;return Object(f.jsx)(v,{rowOffset:n%2!==0,type:r,posX:a,posY:o,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},mouseIsPressed:i,distance:c},s)}))},n)}))})]})}},{key:"createNode",value:function(e,t){return{posX:e,posY:t,type:e===this.state.startNode.x&&t===this.state.startNode.y?"start":e===this.state.finishNode.x&&t===this.state.finishNode.y?"finish":"",distance:1/0,isVisited:!1,isVisitedBi:!1,previousNode:null,finishDistance:1/0,rowOffset:t%2!==0}}},{key:"getStartGrid",value:function(){var e=[],t=document.getElementById("griddiv").getBoundingClientRect(),n=t.width,i=t.height,s=5,a=5;n<=600?(s=i/32,a=n/36):(a=n/52,s=i/40);for(var o=0;o<s;o++){for(var r=[],c=0;c<a;c++){var d=this.createNode(c,o);r.push(d)}e.push(r)}return e}},{key:"getUpdateStartFinishGrid",value:function(e,t,n){var i=this.state.grid,s=this.state.finishNode.x,a=this.state.finishNode.y;n===T&&(s=this.state.startNode.x,a=this.state.startNode.y);var o=i[a][s],c=Object(r.a)(Object(r.a)({},o),{},{type:""});i[a][s]=c;var d=i[t][e],l=Object(r.a)(Object(r.a)({},d),{},{type:n});return i[t][e]=l,n===T?(this.setState({startNode:{y:t,x:e}}),i):(this.setState({finishNode:{y:t,x:e}}),i)}}]),n}(i.Component),P=function(e,t,n,i){var s=e.slice(),a=s[n][t];if("start"===a.type||"finish"===a.type)return s;var o=Object(r.a)(Object(r.a)({},a),{},{type:i});return s[n][t]=o,s},C=function(e){return"start"!==e.type&&"finish"!==e.type},Y=function(){document.getElementById("labelAlgorithm").innerHTML=document.getElementById("algo-selector").value,document.getElementById("labelSpeed").innerHTML="--",document.getElementById("labelNodesVisited").innerHTML="--",document.getElementById("labelPathLength").innerHTML="--",document.getElementById("labelPathCost").innerHTML="--"};var X=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(H,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root")),z()}],[[20,1,2]]]);
//# sourceMappingURL=main.f3f3d305.chunk.js.map