(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={List:"Statistics_List__1KCs5",Item:"Statistics_Item__2JnNr",Label:"Statistics_Label__38Di9",Amount:"Statistics_Amount__2SdUJ"}},function(t,e,n){t.exports={List:"FeedbackOptions_List__1Zuud",Item:"FeedbackOptions_Item__3llhY",Btn:"FeedbackOptions_Btn__PpDZ7"}},,function(t,e,n){t.exports={Section:"Section_Section__LqS2d",Title:"Section_Title__1oXjm"}},,,,,function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},function(t,e,n){t.exports={Title:"Notification_Title__3wvDN"}},,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),o=(n(19),n(20),n(12)),r=n(7),l=n(8),u=n(9),b=n(14),d=n(13),j=n(10),h=n.n(j),p=n(0),O=function(t){var e=t.children;return Object(p.jsx)("div",{className:h.a.Container,children:e})},f=n(5),_=n.n(f),m=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("section",{className:_.a.Section,children:[Object(p.jsx)("h2",{className:_.a.Title,children:e}),n]})},x=n(3),k=n.n(x),v=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(p.jsx)("ul",{className:k.a.List,children:e.map((function(t,e){return Object(p.jsx)("li",{className:k.a.Item,children:Object(p.jsx)("button",{className:k.a.Btn,type:"button",onClick:function(){return n(t)},children:t})},e)}))})},N=n(11),F=n.n(N),S=function(t){var e=t.message;return Object(p.jsx)("h2",{className:F.a.Title,children:e})},g=n(2),L=n.n(g),T=function(t){var e=t.options;return Object(p.jsx)("ul",{className:L.a.List,children:e.map((function(t,e){return Object(p.jsxs)("li",{className:L.a.Item,children:[Object(p.jsxs)("p",{className:L.a.Label,children:[t[0],":"]}),Object(p.jsx)("p",{className:L.a.Amount,children:t[1]})]},e)}))})},P=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:t.props.good,neutral:t.props.neutral,bad:t.props.bad},t.handleFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}))},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t.getStatisticsOptions=function(){return[].concat(Object(o.a)(Object.entries(t.state)),[["total",t.countTotalFeedback()],["positive feedback",t.countPositiveFeedbackPercentage()+"%"]])},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(O,{children:[Object(p.jsx)(m,{title:"Please leave Feedback",children:Object(p.jsx)(v,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback})}),0===this.countTotalFeedback()||isNaN(this.countPositiveFeedbackPercentage())?Object(p.jsx)(S,{message:"There is no feedback"}):Object(p.jsx)(m,{title:"Statistics",children:Object(p.jsx)(T,{options:this.getStatisticsOptions()})})]})}}]),n}(c.Component);P.defaultProps={good:0,neutral:0,bad:0};var C=P;var I=function(){return Object(p.jsx)("main",{className:"App",children:Object(p.jsx)(C,{className:"Feedback"})})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.6f2251c9.chunk.js.map