(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n(7),a=n.n(r),o=n(36),i=n(0),l=n(164),c=n.n(l),m=n(169),s=n(162),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.createElement(m.e,null,i.createElement(m.l,null,i.createElement(c.a,{title:"404 not found | "+s.a.siteTitle}),i.createElement(m.d,null,i.createElement(o.Link,{to:"/"},s.a.siteTitle)),i.createElement(m.c,null,i.createElement("h1",null,"NOT FOUND"),i.createElement("p",null,"Hello darkness my old friemb..... I've come to talk with you again ...."))))},t}(i.Component)},161:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={phone:"(max-width: "+"600px"+")",tablet:"(max-width: "+"1200px"+")"}},162:function(e,t,n){"use strict";t.a={author:"Victor Rudolfsson",defaultBg:"/assets/bg/5.jpg",favicon:"src/favicon.png",ogLanguage:"en_US",pathPrefix:"/",siteBanner:"/assets/banner.jpg",siteDescription:"A creative outlet and one-man development studio",siteLanguage:"en",siteLogo:"/assets/logo.png",siteLogoLight:"/assets/logo-light.png",siteTitle:"Danger Technologies",siteTitleAlt:"Danger Technologies",siteUrl:"https://dangertechnologies.com",themeColor:"rgb(220, 183, 55)",backgroundColor:"rgb(61, 57, 55)",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:4}},167:function(e){e.exports={data:{site:{buildTime:"08.02.2019"}}}},168:function(e,t,n){},169:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(36),i=n(163),l=n.n(i),c=n(0),m=n.n(c),s=n(160),p=(n(170),s.c.div.withConfig({displayName:"Subline",componentId:"sc-1fq61g8-0"})(["font-size:",";background-color:#222222;padding-left:10px;padding-right:10px;color:",";",";a{color:white;font-weight:bold;}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.white},function(e){return e.sectionTitle&&"text-align: center"})),u=s.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1xf6n7b-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),d=s.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1xf6n7b-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;font-family:Trueno;"]),g=s.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1xf6n7b-2"})(["position:absolute;font-size:7rem;font-family:Trueno;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),f=s.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1xf6n7b-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,c=e.category,s=t.charAt(0);return m.a.createElement(u,null,m.a.createElement(d,null,m.a.createElement(g,null,s),m.a.createElement(o.Link,{to:"/posts/"+a},t)),m.a.createElement(p,null,n," — ",i," Min Read — In",m.a.createElement(o.Link,{to:"/categories/"+l()(c)}," ",c)),m.a.createElement(f,null,r))},t}(m.a.PureComponent),b=(n(165),n(166)),y=n.n(b),x=s.c.button.withConfig({displayName:"Button",componentId:"n5un7m-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return y()(.3,e.theme.colors.primary)}),v=n(162),E=n(161),w=s.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-16h21r1-0"})(["position:relative;background:url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;background-position-y:70%;::after{background:transparent url(/assets/mask.svg) no-repeat bottom center;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return e.banner},E.a.tablet,E.a.phone),k=s.c.div.withConfig({displayName:"Header__Content",componentId:"sc-16h21r1-1"})(["position:relative;z-index:999;align-items:center;justify-content:center;display:flex;flex-direction:column;a{color:white;&:hover{opacity:0.85;color:white;}}"]),_=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return m.a.createElement(w,{banner:this.props.banner||v.a.defaultBg},m.a.createElement(k,null,this.props.children))},t}(m.a.PureComponent),N=n(171),C=n.n(N),P=n(167),I=n(172),T=n.n(I),L={colors:{bg:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"},primary:"rgb(61, 57, 55)",white:"#fff"},fontSize:{big:"2.9rem",small:"0.9rem"},transitions:{normal:"0.5s"}};n(168);function z(){var e=C()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return z=function(){return e},e}var A=Object(s.b)(z(),L.colors.bg,L.colors.primary,L.colors.bg,L.colors.grey.default,E.a.phone,L.colors.grey.dark,L.transitions.normal,L.colors.primary,L.colors.grey.dark,L.colors.primary,L.colors.grey.dark),S=s.c.footer.withConfig({displayName:"Layout__Footer",componentId:"fj79u6-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),j=s.c.span.withConfig({displayName:"Layout__Copyleft",componentId:"fj79u6-1"})(["display:inline-block;transform:rotate(180deg);"]),O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(o.StaticQuery,{query:"1536950682",render:function(t){return m.a.createElement(s.a,{theme:L},m.a.createElement(m.a.Fragment,null,m.a.createElement(A,null),e,m.a.createElement(S,null,m.a.createElement(j,null,"©")," ",T()(t.site.buildTime,".")[2]," by Victor Rudolfsson. All rights reversed. ",m.a.createElement("br",null),m.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:P})},t}(m.a.PureComponent),B=s.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1ap8vxn-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),F=s.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1ap8vxn-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),D=s.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1ap8vxn-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),W=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return m.a.createElement(B,null,t&&m.a.createElement(F,null,m.a.createElement("span",null,"Previous"),m.a.createElement(o.Link,{to:"/posts/"+l()(t.frontmatter.title)},t.frontmatter.title)),n&&m.a.createElement(D,null,m.a.createElement("span",null,"Next"),m.a.createElement(o.Link,{to:"/posts/"+l()(n.frontmatter.title)},n.frontmatter.title)))},t}(m.a.PureComponent),U=s.c.div.withConfig({displayName:"SectionTitle",componentId:"fijs9v-0"})(["font-size:",";text-transform:",";text-align:center;font-family:Trueno;color:",";color:#ffffff;padding-left:25px;padding-right:25px;background-color:#222222;position:relative;margin-top:2rem;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),q=n(164),R=n.n(q),M=function(e){var t,n,r,a,o=e.postNode,i=e.postPath,l=e.postSEO,c="/"===v.a.pathPrefix?"":v.a.pathPrefix;l?(t=o.frontmatter.title,n=o.excerpt,r=v.a.siteBanner,a=v.a.siteUrl+c+i):(t=v.a.siteTitle,n=v.a.siteDescription,r=v.a.siteBanner);r=v.a.siteUrl+c+r;var s=v.a.siteUrl+v.a.pathPrefix,p=[{"@context":"http://schema.org","@id":s,"@type":"WebSite",alternateName:v.a.siteTitleAlt?v.a.siteTitleAlt:"",name:t,url:s}];return l&&(p=[{"@context":"http://schema.org","@id":a,"@type":"BlogPosting",alternateName:v.a.siteTitleAlt?v.a.siteTitleAlt:"",author:{"@type":"Person",name:v.a.author},dateModified:o.frontmatter.date,datePublished:o.frontmatter.date,description:v.a.siteDescription,headline:t,image:{"@type":"ImageObject",url:r},isPartOf:s,mainEntityOfPage:{"@id":s,"@type":"WebSite"},name:t,publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:v.a.siteUrl+c+v.a.siteLogo},name:v.a.author},url:a}]),m.a.createElement(R.a,null,m.a.createElement("html",{lang:v.a.siteLanguage}),m.a.createElement("title",null,v.a.siteTitle),m.a.createElement("meta",{name:"description",content:n}),m.a.createElement("meta",{name:"image",content:r}),m.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),m.a.createElement("meta",{property:"og:locale",content:v.a.ogLanguage}),m.a.createElement("meta",{property:"og:url",content:l?a:s}),l?m.a.createElement("meta",{property:"og:type",content:"article"}):null,m.a.createElement("meta",{property:"og:title",content:t}),m.a.createElement("meta",{property:"og:description",content:n}),m.a.createElement("meta",{property:"og:image",content:r}),m.a.createElement("meta",{property:"fb:app_id",content:v.a.siteFBAppID?v.a.siteFBAppID:""}),m.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),m.a.createElement("meta",{name:"twitter:title",content:t}),m.a.createElement("meta",{name:"twitter:url",content:v.a.siteUrl}),m.a.createElement("meta",{name:"twitter:description",content:n}),m.a.createElement("meta",{name:"twitter:image",content:r}))},H=s.c.div.withConfig({displayName:"Wrapper",componentId:"iqsuww-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},E.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},E.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),G=s.c.div.withConfig({displayName:"Content",componentId:"sc-1po8e0q-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},E.a.tablet,E.a.phone),J=s.c.h3.withConfig({displayName:"Title",componentId:"vc7jve-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),V=(n(76),n(173),n(174),s.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-1f561kb-0"})(["text-align:center;margin:2rem;}"])),Q=s.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-1f561kb-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],E.a.phone,L.colors.grey.light,y()(.2,L.colors.primary),L.colors.white,y()(.2,L.colors.primary),E.a.tablet),K=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),c="/"+r+"/"+(t+1).toString();return n>1?m.a.createElement(V,null,m.a.createElement(Q,null,!a&&m.a.createElement(o.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return m.a.createElement(o.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&m.a.createElement(o.Link,{className:"next page-numbers",to:c,rel:"next"},"Next →"))):null},t}(m.a.PureComponent);n.d(t,"a",function(){return h}),n.d(t,"b",function(){return x}),n.d(t,"d",function(){return _}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return W}),n.d(t,"i",function(){return U}),n.d(t,"h",function(){return M}),n.d(t,"j",function(){return p}),n.d(t,"l",function(){return H}),n.d(t,"c",function(){return G}),n.d(t,"k",function(){return J}),n.d(t,"f",function(){return K})}}]);
//# sourceMappingURL=component---src-pages-404-tsx-c34dbdfecc04c6545945.js.map