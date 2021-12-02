(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={Title:"Statistics_Title__fMQ6G",List:"Statistics_List__1KCs5 Statistics_Title__fMQ6G",Item:"Statistics_Item__2JnNr Statistics_Title__fMQ6G",Label:"Statistics_Label__38Di9 Statistics_Title__fMQ6G",Amount:"Statistics_Amount__2SdUJ Statistics_Title__fMQ6G"}},,function(e,t,a){e.exports={Title:"Options_Title__2kZ7w",List:"Options_List__12ir0",Item:"Options_Item__OPL2E",Button:"Options_Button__3Rsz_",Good:"Options_Good__1oOJj Options_Button__3Rsz_",Neutral:"Options_Neutral__1GOba Options_Button__3Rsz_",Bad:"Options_Bad__11YDC Options_Button__3Rsz_"}},,,,,function(e,t,a){e.exports={Container:"Container_Container__3tQ9A"}},function(e,t,a){e.exports={Section:"Section_Section__LqS2d"}},function(e,t,a){e.exports={Title:"Notification_Title__3wvDN"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(5),i=a.n(c),o=(a(17),a(18),a(6)),l=a(7),r=a(12),d=a(11),b=a(8),u=a.n(b),j=a(0),_=function(e){var t=e.children;return Object(j.jsx)("div",{className:u.a.Container,children:t})},h=a(9),O=a.n(h),m=function(e){var t=e.children;return Object(j.jsx)("section",{className:O.a.Section,children:t})},p=a(3),x=a.n(p),N=function(e){var t=e.options,a=e.onLeaveNeutralFeedback,s=e.onLeaveBadFeedback,n=e.onLeaveGoodFeedback;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("b",{className:x.a.Title,children:t}),Object(j.jsxs)("ul",{className:x.a.List,children:[Object(j.jsx)("li",{className:x.a.Item,children:Object(j.jsx)("button",{className:x.a.Good,type:"button",onClick:n,children:"Good"})}),Object(j.jsx)("li",{className:x.a.Item,children:Object(j.jsx)("button",{className:x.a.Neutral,type:"button",onClick:a,children:"Neutral"})}),Object(j.jsx)("li",{className:x.a.Item,children:Object(j.jsx)("button",{className:x.a.Bad,type:"button",onClick:s,children:"Bad"})})]})]})},f=a(10),k=a.n(f),v=function(e){var t=e.message;return Object(j.jsx)("h2",{className:k.a.Title,children:t})},F=a(1),g=a.n(F),S=function(e){var t=e.good,a=e.neutral,s=e.bad,n=e.total,c=e.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:g.a.Title,children:"Statistics"}),Object(j.jsxs)("ul",{className:g.a.List,children:[Object(j.jsxs)("li",{className:g.a.Item,children:[Object(j.jsx)("p",{className:g.a.Label,children:"Good:"}),Object(j.jsx)("p",{className:g.a.Amount,children:t})]}),Object(j.jsxs)("li",{className:g.a.Item,children:[Object(j.jsx)("p",{className:g.a.Label,children:"Neutral:"}),Object(j.jsx)("p",{className:g.a.Amount,children:a})]}),Object(j.jsxs)("li",{className:g.a.Item,children:[Object(j.jsx)("p",{className:g.a.Label,children:"Bad:"}),Object(j.jsx)("p",{className:g.a.Amount,children:s})]}),Object(j.jsxs)("li",{className:g.a.Item,children:[Object(j.jsx)("p",{className:g.a.Label,children:"Total:"}),Object(j.jsx)("p",{className:g.a.Amount,children:n()})]}),Object(j.jsxs)("li",{className:g.a.Item,children:[Object(j.jsx)("p",{className:g.a.Label,children:"Positive Feedback:"}),Object(j.jsxs)("p",{className:g.a.Amount,children:[c(),"%"]})]})]})]})},L=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.handleGoodFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBadFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(_,{children:[Object(j.jsx)(m,{title:"Options",children:Object(j.jsx)(N,{className:"Options",options:"Please leave Feedback",onLeaveNeutralFeedback:this.handleNeutralFeedback,onLeaveBadFeedback:this.handleBadFeedback,onLeaveGoodFeedback:this.handleGoodFeedback})}),Object(j.jsx)(m,{title:"Statistics",children:0===this.countTotalFeedback()?Object(j.jsx)(v,{message:"There is no feedback"}):Object(j.jsx)(S,{className:"Statistics",good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),a}(n.a.Component);L.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var T=L;var B=function(){return Object(j.jsx)("main",{className:"App",children:Object(j.jsx)(T,{className:"Feedback"})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1e117e5a.chunk.js.map