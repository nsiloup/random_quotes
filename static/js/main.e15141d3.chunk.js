(this["webpackJsonprandom-quotes"]=this["webpackJsonprandom-quotes"]||[]).push([[0],{56:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r.n(o),a=r(5),n=r.n(a),s=r(6),u=r(7),l=r(11),h=r(10),i=r(9),d=r(8),b=function(e){return Math.floor(Math.floor(Math.random()*e))},j=r(1),f=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var o;return Object(s.a)(this,r),(o=t.call(this,e)).handleClick=o.handleClick.bind(Object(d.a)(o)),o}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"handleClick",value:function(){this.props.changeItems(this.props.quotesArr,this.props.colorArr)}},{key:"render",value:function(){var e=b(this.props.quotesArr.length),t=this.props.quotesArr[e],r=t.quote,o=t.author,c=this.props.color;return Object(j.jsxs)("div",{id:"quote-box",className:"quote-boxe",children:[Object(j.jsxs)("div",{className:"content",style:{backgroundColor:c},children:[Object(j.jsx)("div",{id:"text",className:"quote",children:'"'.concat(r,'"')}),Object(j.jsx)("div",{id:"author",className:"author",children:"--- ".concat(o," ---")})]}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsxs)("button",{id:"new-quote",onClick:this.handleClick,className:"new-quote",children:[Object(j.jsx)("i",{className:"fas fa-forward"})," New Qote"]}),Object(j.jsx)("div",{className:"tweet",children:Object(j.jsxs)("a",{id:"tweet-quote",href:"".concat("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+r+o),target:"_blank",children:[Object(j.jsx)("i",{className:"fab fa-twitter"}),"tweet this quote"]})})]})]})}}]),r}(c.a.Component),p=r(24),m=r.n(p),q="CHANGE_ASKED",O="FETCH_SUCCEEDED",v="FETCH_FAILED";c.a.Component;var g=Object(i.b)((function(e){return{quote:e.fetchReducer.quote,author:e.fetchReducer.author,quotesArr:e.fetchReducer.quotesArr,message:e.fetchReducer.message,error:e.fetchReducer.error,colorArr:e.fetchReducer.colorArr,color:e.fetchReducer.color}}),(function(e){return{fetchItems:function(){e((function(e){return m.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){e({type:O,payload:t.data.quotes})})).catch((function(t){e({type:v,payload:t})}))}))},changeItems:function(t,r){e({type:q,payload:{quoteArray:t,colArray:r}})}}}))(f);r(56);var A=function(){return Object(j.jsx)("div",{className:"App app-cont",children:Object(j.jsx)(g,{})})},y=r(4),x=r(25),w=r(3),k=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#77B1A9","#73A857"],C={quotesArr:[{quote:"j'obtiens toujours tout ce que je desire",author:"Pers\xe9v\xe9rance NSILOU"}],message:"",error:"",colorArr:[],color:k[b(k.length)]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var r=t.payload,o=r.length,c=r[b(o)],a=k,n=a[b(a.length)];return Object(w.a)(Object(w.a)({},e),{},{quotesArr:r,colorArr:a,message:"Fetch Succeded",quote:c.quote,author:c.author,color:n});case v:var s=t.payload;return Object(w.a)(Object(w.a)({},e),{},{message:"Sorry, we encountered a problem, please check your API, lol !!!",error:s});case q:var u=t.payload.quoteArray,l=u.length,h=u[b(l)],i=t.payload.colArray,d=i[b(i.length)];return Object(w.a)(Object(w.a)({},e),{},{quotesArr:u,quote:h.quote,author:h.author,colorArr:i,color:d});default:return e}},E={quote:"",author:"",styles:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t===q?Object(w.a)(Object(w.a)({},e),t.payload):e}(),I=Object(y.b)({fetchReducer:N,changeReducer:R}),D=Object(y.c)(I,Object(y.a)(x.a));n.a.render(Object(j.jsx)(i.a,{store:D,children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.e15141d3.chunk.js.map