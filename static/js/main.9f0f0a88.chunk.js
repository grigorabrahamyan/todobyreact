(this["webpackJsonpfirst-lesson-react"]=this["webpackJsonpfirst-lesson-react"]||[]).push([[0],{42:function(e,t,n){e.exports=n(55)},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),c=n.n(s),o=(n(47),n(18)),l=n(13),r=n(11),u=n(15),p=n(16),h=n(10),m=n(19),d=(n(48),n(2)),y=n(84),O=n(85),f=n(80),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=Object(d.a)(e,["onClick"]);return i.a.createElement("header",null,i.a.createElement(f.a,{variant:"h3",style:{textAlign:"center",opacity:"0.7"}},"ToDo List"),i.a.createElement(f.a,{variant:"h6",style:{textAlign:"center",opacity:"0.7"}},"My first project by React and Material-UI"),i.a.createElement("div",{style:{display:"flex",marginTop:"50px"}},i.a.createElement(y.a,Object.assign({value:this.props.value,type:"text"},n,{placeholder:"ADD your task...",style:{flex:"0.9",autoComplete:"off"}})),i.a.createElement(O.a,{color:"secondary",onClick:t,style:{flex:"0.1"}},"Add...")))}}]),t}(i.a.Component),g=n(35),v=n.n(g),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).deleteButtonOnClick=n.deleteButtonOnClick.bind(Object(h.a)(n)),n.changeType=n.changeType.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"deleteButtonOnClick",value:function(){this.props.deleteButtonOnClick(this.props.name)}},{key:"changeType",value:function(){this.props.onClick(this.props.name)}},{key:"render",value:function(){var e={textDecoration:this.props.item[parseFloat(this.props.name)].type?null:"line-through",flex:"0.9"};return i.a.createElement("div",{style:{display:"flex",margin:"10px 0"}},i.a.createElement("div",{onClick:this.changeType,style:e},i.a.createElement(f.a,{component:"span"},this.props.oneItem.message)),i.a.createElement(O.a,{onClick:this.deleteButtonOnClick,name:this.props.name,style:{flex:"0.1"},color:"secondary"},i.a.createElement(v.a,null)))}}]),t}(i.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.state.items.map((function(t,n){return i.a.createElement(j,{oneItem:t,name:"00".concat(n),key:"00".concat(n),deleteButtonOnClick:e.props.deleteOneItem,onClick:e.props.changeType,item:e.props.state.items})})))}}]),t}(i.a.Component),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleInput=n.handleInput.bind(Object(h.a)(n)),n.addState=n.addState.bind(Object(h.a)(n)),n.deleteOneItem=n.deleteOneItem.bind(Object(h.a)(n)),n.handleChangeType=n.handleChangeType.bind(Object(h.a)(n)),n.state={items:[],message:""},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleInput",value:function(e){this.setState({message:e.target.value})}},{key:"addState",value:function(){if(""===this.state.message)return null;this.setState((function(e){return{items:[].concat(Object(o.a)(e.items),[{message:e.message,type:!0}]),message:""}}))}},{key:"deleteOneItem",value:function(e){this.setState((function(t){return t.items.splice(parseFloat(e),1),t.items}))}},{key:"handleChangeType",value:function(e){this.setState((function(t){return t.items[parseFloat(e)].type=!t.items[parseFloat(e)].type,t}))}},{key:"render",value:function(){console.log(this.state);return i.a.createElement("div",{style:{width:"700px",margin:"20px auto"}},i.a.createElement(b,{onChange:this.handleInput,onClick:this.addState,value:this.state.message}),i.a.createElement(k,{state:this.state,deleteOneItem:this.deleteOneItem,changeType:this.handleChangeType}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9f0f0a88.chunk.js.map