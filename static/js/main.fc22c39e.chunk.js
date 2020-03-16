(this["webpackJsonphoney-do"]=this["webpackJsonphoney-do"]||[]).push([[0],{34:function(t,e,o){t.exports=o(62)},39:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(30),c=o.n(r),l=o(19),i=o(6),s=o(7),d=o(9),u=o(8),p=o(10),m=o(13),h=o(11);o(39);var f={backgroundColor:"#55a",fontFamily:"cursive",fontSize:"x-large",color:"#fff",textAlign:"center",padding:"10px",borderTopLeftRadius:"40px",borderTopRightRadius:"40px"},b={color:"#fff",textDecoration:"none",cursor:"pointer"},y=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"Honey-Do's"),a.a.createElement(m.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(m.b,{style:b,to:"/about"},"About"))},g=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#bbd",padding:"18px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x")))}}]),e}(n.Component),v={backgroundColor:"#aa5566",color:"#fff",border:"none",padding:"5px",cursor:"pointer",float:"right"},j=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(g,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(a.a.Component),E=o(33),O=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onChange=function(t){o.setState(Object(E.a)({},t.target.name,t.target.value))},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component);var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0"))},x=o(15),C=o.n(x),T=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return o.setState({todos:Object(l.a)(o.state.todos.filter((function(e){return e.id!==t})))})}))},o.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return o.setState({todos:[].concat(Object(l.a)(o.state.todos),[t.data])})}))},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App-header"},a.a.createElement("div",{className:"container"},a.a.createElement(y,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{addTodo:t.addTodo}),a.a.createElement(j,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k}))))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fc22c39e.chunk.js.map