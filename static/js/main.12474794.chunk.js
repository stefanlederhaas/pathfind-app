(this["webpackJsonppathalgo-app"]=this["webpackJsonppathalgo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(3),s=n.n(i),o=n(9),a=n.n(o),r=(n(14),n(15),n(2)),c=n(1),d=n(4),l=n(5),u=n(7),f=n(6),h=(n(16),n(0)),v=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.rowOffset,n=e.type,i=e.posX,s=e.posY,o=e.onMouseDown,a=e.onMouseEnter,r=e.onMouseUp,c=t?"row-offset":"";return Object(h.jsx)("div",{id:"node-".concat(i,"-").concat(s),className:"node ".concat(c," ").concat(n),onMouseDown:function(){return o(i,s)},onMouseEnter:function(){return a(i,s)},onMouseUp:function(){return r()}})}}]),n}(i.Component),m=(n(18),function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"infobox",children:Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("div",{className:"info-top",children:Object(h.jsxs)("div",{className:"infoFlex",children:[Object(h.jsx)("label",{id:"algo-text",children:"Algorithm:"}),Object(h.jsx)("label",{id:"labelAlgorithm",children:"--"})]})}),Object(h.jsxs)("div",{className:"info-center",children:[Object(h.jsxs)("div",{className:"info-left info-side",children:[Object(h.jsxs)("div",{className:"infoFlex",children:[Object(h.jsx)("label",{children:"Speed:"}),Object(h.jsx)("label",{id:"labelSpeed",children:"--"})]}),Object(h.jsxs)("div",{className:"infoFlex",children:[Object(h.jsx)("label",{children:"NodesVisited:"}),Object(h.jsx)("label",{id:"labelNodesVisited",children:"--"})]})]}),Object(h.jsxs)("div",{className:"info-right info-side",children:[Object(h.jsxs)("div",{className:"infoFlex",children:[Object(h.jsx)("label",{children:"Path-Length:"}),Object(h.jsx)("label",{id:"labelPathLength",children:"--"})]}),Object(h.jsxs)("div",{className:"infoFlex",children:[Object(h.jsx)("label",{children:"Path-Cost:"}),Object(h.jsx)("label",{id:"labelPathCost",children:"--"})]})]})]})]})})}}]),n}(i.Component));n(19);function p(e){var t,n=[],i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var s,o=t.value,a=Object(c.a)(o);try{for(a.s();!(s=a.n()).done;){var r=s.value;n.push(r)}}catch(d){a.e(d)}finally{a.f()}}}catch(d){i.e(d)}finally{i.f()}return n}function j(e){e.sort((function(e,t){return e.distance-t.distance}))}function b(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var o=n.value,a="road"===o.type?1:4;o.distance>=e.distance+a&&(o.distance=e.distance+a,o.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}}function y(e,t){var n=[],i=e.posY,s=e.posX;return s>0&&n.push(t[i][s-1]),i>0&&n.push(t[i-1][s]),i<t.length-1&&n.push(t[i+1][s]),s<t[0].length-1&&n.push(t[i][s+1]),e.posY%2!==0?(i<t.length-1&&s<t[0].length-1&&n.push(t[i+1][s+1]),i>0&&s<t[0].length-1&&n.push(t[i-1][s+1])):(i<t.length-1&&s>0&&n.push(t[i+1][s-1]),i>0&&s>0&&n.push(t[i-1][s-1])),n.filter((function(e){return!("wall"===e.type)}))}function g(e){var t,n=e.slice(),i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var s,o=t.value,a=Object(c.a)(o);try{for(a.s();!(s=a.n()).done;){var d=s.value,l=Object(r.a)(Object(r.a)({},d),{},{distance:1/0,finishDistance:1/0,previousNode:null});n[d.posY][d.posX]=l}}catch(u){a.e(u)}finally{a.f()}}}catch(u){i.e(u)}finally{i.f()}return n}function N(e){for(var t=[],n=e,i=e.distance;null!==n;)t.unshift(n),n=n.previousNode;return document.getElementById("labelPathLength").innerHTML=t.length-1+"",document.getElementById("labelPathCost").innerHTML=i+"",t}function O(e,t,n){var i,s=y(e,t),o=Object(c.a)(s);try{for(o.s();!(i=o.n()).done;){var a=i.value;a.finishDistance===1/0&&x(a,n);var r="road"===a.type?1:4;a.distance>=e.distance+r&&(a.distance=e.distance+r,a.previousNode=e)}}catch(d){o.e(d)}finally{o.f()}}function x(e,t){var n=4*Math.round(Math.sqrt(Math.pow(e.posX-t.posX,2)+Math.pow(e.posY-t.posY,2),2));e.finishDistance=n}function B(e){e.sort((function(e,t){return e.distance+e.finishDistance-(t.finishDistance+t.distance)}))}function w(e){e.sort((function(e,t){return e.finishDistance-t.finishDistance}))}function k(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var o=n.value,a="road"===o.type?1:4;if(o.distance!==1/0&&o.isVisited)return console.log("return note from neighborsBi"),o;o.finishDistance>=e.finishDistance+a&&o.distance===1/0&&(o.finishDistance=e.finishDistance+a,o.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}return null}function I(e,t){var n,i=y(e,t),s=Object(c.a)(i);try{for(s.s();!(n=s.n()).done;){var o=n.value,a="road"===o.type?1:4;if(o.finishDistance!==1/0&&o.isVisitedBi)return console.log("return note from neighbors ."),console.log(o),o;o.distance>=e.distance+a&&o.finishDistance===1/0&&(o.distance=e.distance+a,o.previousNode=e)}}catch(r){s.e(r)}finally{s.f()}return null}var D="wall",M="start",T="finish",S="road",L="",E="dijkstra",V="a-star",F="bi-dijkstra",A=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={grid:[],mouseIsPressed:!1,mouseAction:D,startNode:{y:2,x:3},finishNode:{y:7,x:8}},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.getStartGrid();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){var n=this.state.mouseAction;if(n===D||n===S||n===L){var i=P(this.state.grid,e,t,n);this.setState({grid:i,mouseIsPressed:!0})}if(n===M||n===T){var s=this.getUpdateStartFinishGrid(e,t,n);this.setState({grid:s})}}},{key:"handleMouseEnter",value:function(e,t){var n=this.state.mouseAction;if(this.state.mouseIsPressed&&(n===D||n===S||n===L)){var i=P(this.state.grid,e,t,n);this.setState({grid:i})}}},{key:"handleMouseUp",value:function(){var e=document.getElementById("draw-selector").value;this.setState({mouseIsPressed:!1,mouseAction:e})}},{key:"animateDijkstra",value:function(e,t){for(var n=this,i=function(i){if(i===e.length)return n.addNodeVisited(e[i-1]),setTimeout((function(){n.animateShortestPath(t)}),50*i),{v:void 0};i<e.length&&(setTimeout((function(){n.addNodeFocus(e[i])}),50*i),i>0&&setTimeout((function(){n.addNodeVisited(e[i-1])}),50*i))},s=0;s<=e.length;s++){var o=i(s);if("object"===typeof o)return o.v}}},{key:"animateDijkstraBidirectional",value:function(e,t,n){for(var i=this,s=0,o=0;s<e.length||o<t.length;)s<e.length&&(s<e.length&&(setTimeout((function(){i.addNodeFocus(e[s])}),50*s),s>0&&setTimeout((function(){i.addNodeVisited(e[s-1])}),50*s)),s++),o<t.length&&(o<t.length&&(setTimeout((function(){i.addNodeFocus(t[o])}),50*o),o>0&&setTimeout((function(){i.addNodeVisited(t[o-1])}),50*o)),o++);setTimeout((function(){i.animateShortestPath(n)}),50*(s+o))}},{key:"animateDijkstraBidirectional2",value:function(e,t,n){for(var i=this,s=function(t){t===e.length?setTimeout((function(){i.addNodeVisited(e[t-1])}),200*t):t<e.length&&(setTimeout((function(){i.addNodeFocus(e[t])}),200*t),t>0&&setTimeout((function(){i.addNodeVisited(e[t-1])}),200*t))},o=0;o<=e.length;o++)s(o);for(var a=function(e){e===t.length?(setTimeout((function(){i.addNodeVisitedBi(t[e-1])}),100+200*e),setTimeout((function(){i.animateShortestPath(n)}),200*e)):e<t.length&&(setTimeout((function(){i.addNodeFocus(t[e])}),100+200*e),e>0&&setTimeout((function(){i.addNodeVisitedBi(t[e-1])}),100+200*e))},r=0;r<=t.length;r++)a(r)}},{key:"addNodeFocus",value:function(e){if(C(e)){var t=e;document.getElementById("node-".concat(t.posX,"-").concat(t.posY)).classList.add("node-focus")}}},{key:"addNodeFocusBi",value:function(e){if(C(e)){var t=e;document.getElementById("node-".concat(t.posX,"-").concat(t.posY)).classList.add("node-focus-bi")}}},{key:"addNodeVisited",value:function(e){if(C(e)){var t=e,n=document.getElementById("node-".concat(t.posX,"-").concat(t.posY));n.classList.contains("node-focus")&&n.classList.remove("node-focus"),t.type===S&&n.classList.add("node-visited-road"),n.classList.add("node-visited")}}},{key:"addNodeVisitedBi",value:function(e){if(C(e)){var t=e,n=document.getElementById("node-".concat(t.posX,"-").concat(t.posY));n.classList.contains("node-focus-bi")&&n.classList.remove("node-focus-bi"),t.type===S&&n.classList.add("node-visited-road"),n.classList.add("node-visited-bi")}}},{key:"animateShortestPath",value:function(e){for(var t=function(t){C(e[t])&&setTimeout((function(){var n=e[t],i=document.getElementById("node-".concat(n.posX,"-").concat(n.posY)),s=n.rowOffset?"row-offset":"";n.type===S?i.className="node node-shortest-path-road "+s:i.className="node node-shortest-path "+s}),50*t)},n=0;n<e.length;n++)t(n)}},{key:"startAlgo",value:function(){this.clear(!1);var e=document.getElementById("algo-selector").value;e===E&&this.visualizeDijkstra(),e===V&&this.visualizeAStar(),e===F&&this.visualizeBiDijkstra()}},{key:"visualizeDijkstra",value:function(){var e=this.state.grid,t=this.state.startNode,n=this.state.finishNode,i=function(e,t){document.getElementById("labelAlgorithm").innerHTML="Dijkstra";var n=window.performance.now(),i=[],s=g(e);s[t.y][t.x].distance=0;for(var o=p(s);o.length;){j(o);var a=o.shift();if("wall"!==a.type){if(a.distance===1/0){var r=window.performance.now()-n;return document.getElementById("labelSpeed").innerHTML=r.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=i.length-1+" Nodes",i}if(a.isVisited=!0,i.push(a),"finish"===a.type){var c=window.performance.now()-n;return document.getElementById("labelSpeed").innerHTML=c.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=i.length-1+" Nodes",i}b(a,s)}}}(e,t),s=N(e[n.y][n.x]);this.animateDijkstra(i,s)}},{key:"visualizeAStar",value:function(){var e=this.state.grid,t=this.state.startNode,n=this.state.finishNode,i=function(e,t,n){document.getElementById("labelAlgorithm").innerHTML="A*";var i=window.performance.now(),s=[],o=g(e),a=o[t.y][t.x],r=o[n.y][n.x];a.distance=0,x(a,r);for(var c=p(o);c.length;){B(c);var d=c.shift();if("wall"!==d.type){if(d.distance===1/0){var l=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=l.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=s.length-1+" Nodes",s}if(d.isVisited=!0,s.push(d),"finish"===d.type){var u=window.performance.now()-i;return document.getElementById("labelSpeed").innerHTML=u.toFixed(2)+" ms",document.getElementById("labelNodesVisited").innerHTML=s.length-1+" Nodes",s}O(d,o,r)}}}(e,t,n),s=N(e[n.y][n.x]);this.animateDijkstra(i,s)}},{key:"visualizeBiDijkstra",value:function(){var e=function(e,t,n){document.getElementById("labelAlgorithm").innerHTML="Bidirectional-Dijkstra";var i=[],s=[],o=g(e),a=o.slice(),r=o[t.y][t.x];o[n.y][n.x],r.distance=0;var c=a[n.y][n.x];a[t.x][t.x],c.finishDistance=0;for(var d=p(o),l=d.slice();d.length||l.length;){j(d),w(l);var u=d.shift(),f=l.shift();if(u.distance===1/0)console.log("no route");else if("wall"!==u.type){u.isVisited=!0,i.push(u);var h=I(u,o);if(null!==h)return{visitedNodesInOrder:i,visitedNodesInOrderBi:s,closestNode:u,finishNode2:h}}if(f.finishDistance===1/0)console.log("no route");else if("wall"!==f.type){f.isVisitedBi=!0,s.push(f);var v=k(f,o);if(u=v,null!==v)return{visitedNodesInOrder:i,visitedNodesInOrderBi:s,closestNode:u,finishNode2:f}}}console.log("Not returned-2"),console.log("Bi:"),console.log(s),console.log("Normal: "),console.log(i)}(this.state.grid,this.state.startNode,this.state.finishNode),t=e.visitedNodesInOrder,n=e.visitedNodesInOrderBi,i=e.closestNode,s=e.finishNode2;console.log("returned Values:."),console.log(t),console.log(n),console.log(i),console.log(s);var o=function(e,t){for(var n=[],i=e;null!==i;)n.unshift(i),i=i.previousNode;for(i=t;null!==i;)n.unshift(i),i=i.previousNode;return n}(i,s);this.animateDijkstraBidirectional2(t,n,o)}},{key:"setAction",value:function(e){this.setState({mouseAction:e})}},{key:"clear",value:function(e){var t,n=this.state.grid,i=Object(c.a)(n);try{for(i.s();!(t=i.n()).done;){var s,o=t.value,a=Object(c.a)(o);try{for(a.s();!(s=a.n()).done;){var d=s.value,l=!e||d.type!==D&&d.type!==S?d.type:"",u=Object(r.a)(Object(r.a)({},d),{},{isVisited:!1,isVisitedBi:!1,type:l});n[d.posY][d.posX]=u;var f=document.getElementById("node-".concat(u.posX,"-").concat(u.posY)),h=d.rowOffset?"row-offset":"";f.className="node "+h+" "+d.type}}catch(v){a.e(v)}finally{a.f()}}}catch(v){i.e(v)}finally{i.f()}this.setState({grid:n}),H()}},{key:"clearWallRoad",value:function(){var e,t=this.getStartGrid(),n=Object(c.a)(t);try{for(n.s();!(e=n.n()).done;){var i,s=e.value,o=Object(c.a)(s);try{for(o.s();!(i=o.n()).done;){var a=i.value,d=Object(r.a)(Object(r.a)({},a),{},{isVisited:!1,type:a.type===D?"":a.type});t[a.posY][a.posX]=d;var l=document.getElementById("node-".concat(d.posX,"-").concat(d.posY)),u=a.rowOffset?"row-offset":"";l.className="node "+u+" "+a.type}}catch(f){o.e(f)}finally{o.f()}}}catch(f){n.e(f)}finally{n.f()}this.setState({grid:t})}},{key:"changeDrawType",value:function(e){var t=e.value;this.setState({mouseAction:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.grid,i=t.mouseIsPressed;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("div",{className:"box",children:Object(h.jsxs)("select",{id:"algo-selector",defaultValue:E,children:[Object(h.jsx)("option",{value:E,children:"Dijkstra"}),Object(h.jsx)("option",{value:V,children:"A*"}),Object(h.jsx)("option",{value:F,children:"Bi-Dijkstra"})]})}),Object(h.jsx)("div",{className:"box",children:Object(h.jsxs)("select",{id:"draw-selector",onChange:function(){return e.changeDrawType(e)},defaultValue:D,children:[Object(h.jsx)("option",{value:D,children:"Wall"}),Object(h.jsx)("option",{value:S,children:"Road"}),Object(h.jsx)("option",{value:L,children:"Delete"})]})}),Object(h.jsx)("button",{className:"white-btn",onClick:function(){return e.clear(!1)},children:"Clear Path"}),Object(h.jsx)("button",{className:"startButton",onClick:function(){return e.startAlgo()},children:"Start Search!"}),Object(h.jsx)("button",{className:"white-btn",onClick:function(){return e.clear(!0)},children:"Clear ALL"}),Object(h.jsx)("button",{id:"setStartBtn",className:"btn",onClick:function(){return e.setAction(M)},children:"SetStart"}),Object(h.jsx)("button",{id:"setFinishBtn",className:"btn",onClick:function(){return e.setAction(T)},children:"SetFinish"})]}),Object(h.jsx)(m,{}),Object(h.jsx)("div",{className:"grid",id:"griddiv",children:n.map((function(t,n){return Object(h.jsx)("div",{children:t.map((function(t,s){var o=t.posX,a=t.posY,r=t.type,c=t.distance;return Object(h.jsx)(v,{rowOffset:n%2!==0,type:r,posX:o,posY:a,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},mouseIsPressed:i,distance:c},s)}))},n)}))})]})}},{key:"createNode",value:function(e,t){return{posX:e,posY:t,type:e===this.state.startNode.x&&t===this.state.startNode.y?"start":e===this.state.finishNode.x&&t===this.state.finishNode.y?"finish":"",distance:1/0,isVisited:!1,isVisitedBi:!1,previousNode:null,finishDistance:1/0,rowOffset:t%2!==0}}},{key:"getStartGrid",value:function(){var e=[],t=document.getElementById("griddiv").getBoundingClientRect(),n=t.width,i=t.height,s=5,o=5;n<=600?(s=i/32,o=n/36):(o=n/52,s=i/40);for(var a=0;a<s;a++){for(var r=[],c=0;c<o;c++){var d=this.createNode(c,a);r.push(d)}e.push(r)}return e}},{key:"getUpdateStartFinishGrid",value:function(e,t,n){var i=this.state.grid,s=this.state.finishNode.x,o=this.state.finishNode.y;n===M&&(s=this.state.startNode.x,o=this.state.startNode.y);var a=i[o][s],c=Object(r.a)(Object(r.a)({},a),{},{type:""});i[o][s]=c;var d=i[t][e],l=Object(r.a)(Object(r.a)({},d),{},{type:n});return i[t][e]=l,n===M?(this.setState({startNode:{y:t,x:e}}),i):(this.setState({finishNode:{y:t,x:e}}),i)}}]),n}(i.Component),P=function(e,t,n,i){var s=e.slice(),o=s[n][t];if("start"===o.type||"finish"===o.type)return s;var a=Object(r.a)(Object(r.a)({},o),{},{type:i});return s[n][t]=a,s},C=function(e){return"start"!==e.type&&"finish"!==e.type},H=function(){document.getElementById("labelAlgorithm").innerHTML=document.getElementById("algo-selector").value,document.getElementById("labelSpeed").innerHTML="--",document.getElementById("labelNodesVisited").innerHTML="--",document.getElementById("labelPathLength").innerHTML="--",document.getElementById("labelPathCost").innerHTML="--"};var Y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(A,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),o(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),X()}],[[20,1,2]]]);
//# sourceMappingURL=main.12474794.chunk.js.map