(this["webpackJsonpcrud-bulma"]=this["webpackJsonpcrud-bulma"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(10),r=t.n(l),i=(t(16),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),d=t(7),f=(t(9),t(6)),E=(t(17),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).uniqueId=function(){return"id-"+Math.random().toString(36).substr(2,16)},e.modalTaskForm=function(a){a?e.setState({modalTaskForm_Toggle:"is-active",modalTaskForm:a}):e.setState({modalTaskForm_Toggle:"",modalTaskForm:a})},e.submitTask=function(a){a.preventDefault();var t=e.state,n=t.tasks,s=t.tittle,l=t.detail,r=t.time,i=t.act,o=t.index;if(0===i){var c={tittle:s,detail:l,time:r,id:e.uniqueId()};n.push(c)}else n[o].tittle=s,n[o].detail=l,n[o].time=r;e.setState({tasks:n,modalTaskForm_Toggle:"",modalTaskForm:!1,tittle:"",detail:"",time:"",fav:!1,act:0})},e.inputChange=function(a){var t=a.target,n=t.name,s=t.value;e.setState(Object(f.a)({},n,s))},e.fRemove=function(a){var t=e.state.tasks;t.splice(a,1),e.setState({tasks:t,tittle:"",detail:"",time:"",fav:!1})},e.fEdit=function(a){var t=e.state.tasks[a];e.setState({tittle:t.tittle,detail:t.detail,time:t.time,modalTaskForm_Toggle:"is-active",modalTaskForm:!0,act:1,index:a})},e.viewDateTime=function(e){e=e.split("T");var a=new Date(e[0]).toLocaleDateString(["en-US"],{weekday:"long",year:"numeric",month:"long",day:"numeric"});return"".concat(a," @").concat(e[1])},e.taskDone=function(a){var t=e.state,n=t.doneTasks,s=t.tasks;n.push(s[a]),s.splice(a,1),e.setState({doneTasks:n,tasks:s})},e.removeDone=function(a){var t=e.state.doneTasks;t.splice(a,1),e.setState({doneTasks:t})},e.unDone=function(a){var t=e.state,n=t.doneTasks;t.tasks.push(n[a]),e.removeDone(a)},e.state={tasks:[],doneTasks:[],modalTaskForm:!1,modalTaskForm_Toggle:"",tittle:"",detail:"",time:"",fav:!1,act:0,index:0,renderTasks:1,navActive:"tasks"},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"logout",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this,a=this.state,t=a.modalTaskForm,n=a.modalTaskForm_Toggle,l=a.tasks,r=a.tittle,i=a.detail,o=a.time,c=a.doneTasks,m=a.renderTasks,u=a.navActive;return s.a.createElement("div",{className:"App",style:{paddingTop:20}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns",style:{position:"fixed"}},s.a.createElement("div",{className:"column is-12"},s.a.createElement("div",{className:"field has-addons"},s.a.createElement("p",{className:"control"},s.a.createElement("a",{className:"button is-link is-rounded",onClick:function(){return e.modalTaskForm(!t)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-plus"})),s.a.createElement("span",null,"New"))),s.a.createElement("p",{className:"control"},s.a.createElement("a",{className:"button is-link ".concat("tasks"===u?"is-outlined":""),onClick:function(){e.setState({renderTasks:1,navActive:"tasks"})}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-tasks"})),s.a.createElement("span",null,"Tasks ( ",l.length," )"))),s.a.createElement("p",{className:"control"},s.a.createElement("a",{className:"button is-link ".concat("done"===u?"is-outlined":""),onClick:function(){e.setState({renderTasks:2,navActive:"done"})}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-check"})),s.a.createElement("span",null,"Done ( ",c.length," )")))))),s.a.createElement("div",{class:"field "},s.a.createElement("p",{class:"control"},s.a.createElement("button",{class:"button is-warning hey",type:"button",onClick:this.logout.bind(this)},"Logout"))),s.a.createElement("div",{style:{paddingTop:60}},1===m&&l.map((function(a,t){return s.a.createElement("div",{className:"columns",key:t},s.a.createElement("div",{className:"column is-12"},s.a.createElement("article",{className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,a.tittle),s.a.createElement("br",null),s.a.createElement("small",null,e.viewDateTime(a.time)),s.a.createElement("br",null),a.detail)),s.a.createElement("nav",{className:"level is-mobile"},s.a.createElement("div",{className:"level-left"},s.a.createElement("a",{className:"level-item",onClick:function(){return e.taskDone(t)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-lg fa-check"}))),s.a.createElement("a",{className:"level-item",onClick:function(){return e.fEdit(t)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-lg fa-pencil-alt"})))))),s.a.createElement("div",{className:"media-right"},s.a.createElement("button",{className:"delete",onClick:function(){return e.fRemove(t)}})))))})),2===m&&c.map((function(a,t){return s.a.createElement("div",{className:"columns",key:t},s.a.createElement("div",{className:"column is-12"},s.a.createElement("article",{className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,a.tittle),s.a.createElement("br",null),s.a.createElement("small",null,e.viewDateTime(a.time)),s.a.createElement("br",null),a.detail)),s.a.createElement("nav",{className:"level is-mobile"},s.a.createElement("div",{className:"level-left"},s.a.createElement("a",{className:"level-item",onClick:function(){return e.unDone(t)}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-lg fa-undo"})))))),s.a.createElement("div",{className:"media-right"},s.a.createElement("button",{className:"delete",onClick:function(){return e.removeDone(t)}})))))})))),s.a.createElement("div",{className:"modal ".concat(n)},s.a.createElement("div",{className:"modal-background",onClick:function(){return e.modalTaskForm(!t)}}),s.a.createElement("div",{className:"modal-content"},s.a.createElement("form",{ref:"myForm",className:"myForm"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("label",{className:"label",style:{color:"#fff"}},"Tittle"),s.a.createElement("input",{className:"input is-info",type:"text",name:"tittle",value:r,onChange:function(a){return e.inputChange(a)}}))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("label",{className:"label",style:{color:"#fff"}},"Detail"),s.a.createElement("textarea",{className:"textarea is-info",type:"text",placeholder:"Info textarea",name:"detail",value:i,onChange:function(a){return e.inputChange(a)}}))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("label",{className:"label",style:{color:"#fff"}},"Time"),s.a.createElement("input",{className:"input is-info",type:"datetime-local",name:"time",value:o,onChange:function(a){return e.inputChange(a)}}))),s.a.createElement("button",{className:"button is-info",onClick:function(a){return e.submitTask(a)}},"Save"))),s.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:function(){return e.modalTaskForm(!t)}})))}}]),a}(n.Component)),v=(t(18),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).initErrorState={usernameError:"",pwdError:""},t.defaultErrorValues={usernameError:"",pwdError:""},t.state={userName:"",pwd:"",errors:t.defaultErrorValues,isUserLoggedIn:!1,userNotExist:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"login",value:function(){var e=this.refs.username.value,a=this.refs.pwd.value;console.log("UserName is ",e),console.log("Password ",a),this.isUserValid(e,a),this.isValidString(e)?this.defaultErrorValues.usernameError="":(console.log("Error Userid .... "),this.defaultErrorValues.usernameError="User Name is Empty"),this.isValidString(a)?this.defaultErrorValues.pwdError="":this.defaultErrorValues.pwdError="Password Name is Empty",!this.isValidString(e)&&this.isValidString(a),this.defaultErrorValues=this.initErrorState,console.log("Errors are ",this.defaultErrorValues)}},{key:"isUserValid",value:function(e,a){var t=JSON.parse(localStorage.getItem("users")),n=t.findIndex((function(a){return a.userName===e}));console.log(t[n]),-1===n?(this.defaultErrorValues.userNotExist=alert("User not registered with us..!"),this.setState(Object(d.a)({},this.state,{userNotExist:!0}))):n>-1&&t[n].password===a&&(this.defaultErrorValues.userNotExist="",this.setState(Object(d.a)({},this.state,{isUserLoggedIn:!0})))}},{key:"isValidString",value:function(e){return!(!e&&0===e.trim().length)}},{key:"render",value:function(){return this.state.isUserLoggedIn?s.a.createElement(E,null):s.a.createElement("div",{classs:"container is-fluid"},s.a.createElement("section",{class:"hero is-primary"},s.a.createElement("div",{class:"hero-body"},s.a.createElement("div",{class:"has-text-centered"},s.a.createElement("div",null,s.a.createElement("h1",{class:"title tag is-danger is-large"},"Login Page")),s.a.createElement("br",null),s.a.createElement("div",{class:"field"},s.a.createElement("p",{class:"control has-icons-left"},s.a.createElement("input",{class:"input is-success",type:"text",ref:"username",placeholder:"Username"}))),s.a.createElement("div",{className:"error"},this.state.errors.usernameError),s.a.createElement("div",{class:"field"},s.a.createElement("p",{class:"control has-icons-left"},s.a.createElement("input",{class:"input input is-success",ref:"pwd",type:"password",placeholder:"Password"}),s.a.createElement("span",{class:"icon is-small is-left"},s.a.createElement("i",{class:"fas fa-lock"})))),s.a.createElement("div",{className:"error"},this.state.errors.pwdError),s.a.createElement("div",null,this.defaultErrorValues.userNotExist),s.a.createElement("div",{class:"field"},s.a.createElement("p",{class:"control"},s.a.createElement("button",{class:"button is-warning",type:"button",onClick:this.login.bind(this)},"Login")))))))}}]),a}(s.a.Component)),g=(t(19),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).clearUsers(),t.loadUsers(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"clearUsers",value:function(){localStorage.clear()}},{key:"loadUsers",value:function(){localStorage.setItem("users",JSON.stringify([{userName:"devu",password:"lll"},{userName:"arbaz",password:"lll"},{userName:"karan",password:"lll"}]))}},{key:"render",value:function(){return s.a.createElement(v,null)}}]),a}(n.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(s.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");p?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):h(e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.ad24a73e.chunk.js.map