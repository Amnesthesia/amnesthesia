(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n(7),a=n.n(r),o=n(12),i=n.n(o),l=n(162),c=n.n(l),m=n(0),s=n.n(m),p=n(163),u=n.n(p),d=n(168),g=n(161),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.posts,n=e.tagName,r=t?t.length:0,a=r+" post"+(1===r?"":"s")+' tagged with "'+n+'"';return s.a.createElement(d.e,null,s.a.createElement(u.a,{title:"Tags | "+g.a.siteTitle}),s.a.createElement(d.d,null,s.a.createElement(i.a,{to:"/"},g.a.siteTitle),s.a.createElement(d.i,null,"Tag – ",n),s.a.createElement(d.j,{sectionTitle:!0,light:!0},a," (See ",s.a.createElement(i.a,{to:"/tags"},"all tags"),")")),s.a.createElement(d.l,null,s.a.createElement(d.c,null,t?t.map(function(e,t){return s.a.createElement(d.a,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:c()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})}):null)))},t}(s.a.PureComponent)},160:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},161:function(e,t,n){"use strict";t.a={author:"Victor Rudolfsson",defaultBg:"/assets/bg/5.jpg",favicon:"src/favicon.png",ogLanguage:"en_US",pathPrefix:"/",siteBanner:"/assets/banner.jpg",siteDescription:"A creative outlet and one-man development studio",siteLanguage:"en",siteLogo:"/assets/logo.png",siteLogoLight:"/assets/logo-light.png",siteTitle:"Danger Technologies",siteTitleAlt:"Danger Technologies",siteUrl:"http://dangertechnologies.com",themeColor:"rgb(220, 183, 55)",backgroundColor:"rgb(61, 57, 55)",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:4}},166:function(e){e.exports={data:{site:{buildTime:"03.02.2019"}}}},167:function(e,t,n){},168:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(36),i=n(162),l=n.n(i),c=n(0),m=n.n(c),s=n(159),p=(n(170),n(169)),u=n.n(p),d=s.c.div.withConfig({displayName:"Subline",componentId:"sc-1fq61g8-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=s.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1xf6n7b-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),f=s.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1xf6n7b-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),h=s.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1xf6n7b-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=s.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1xf6n7b-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,c=e.category,s=t.charAt(0);return m.a.createElement(g,null,m.a.createElement(f,null,m.a.createElement(h,null,s),m.a.createElement(o.Link,{to:"/posts/"+a},t)),m.a.createElement(d,null,n," — ",i," Min Read — In",m.a.createElement(o.Link,{to:"/categories/"+l()(c)}," ",c)),m.a.createElement(b,null,r))},t}(m.a.PureComponent),x=(n(164),n(165)),E=n.n(x),v=s.c.button.withConfig({displayName:"Button",componentId:"n5un7m-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),w=n(161),k=n(160),_=s.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-16h21r1-0"})(["position:relative;background:url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;background-position-y:70%;::after{background:transparent url(/assets/mask.svg) no-repeat bottom center;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return e.banner},k.a.tablet,k.a.phone),N=s.c.div.withConfig({displayName:"Header__Content",componentId:"sc-16h21r1-1"})(["position:relative;z-index:999;align-items:center;justify-content:center;display:flex;flex-direction:column;a{color:white;&:hover{opacity:0.85;color:white;}}"]),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return m.a.createElement(_,{banner:this.props.banner||w.a.defaultBg},m.a.createElement(N,null,this.props.children))},t}(m.a.PureComponent),P=n(171),T=n.n(P),I=n(166),z=n(172),L=n.n(z),S={colors:{primary:"rgb(61, 57, 55)",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}};n(167);function A(){var e=T()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return A=function(){return e},e}var j=Object(s.b)(A(),S.colors.bg,S.colors.primary,S.colors.bg,S.colors.grey.default,k.a.phone,S.colors.grey.dark,S.transitions.normal,S.colors.primary,S.colors.grey.dark,S.colors.primary,S.colors.grey.dark),B=s.c.footer.withConfig({displayName:"Layout__Footer",componentId:"fj79u6-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),F=s.c.span.withConfig({displayName:"Layout__Copyleft",componentId:"fj79u6-1"})(["display:inline-block;transform:rotate(180deg);"]),O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(o.StaticQuery,{query:"1536950682",render:function(t){return m.a.createElement(s.a,{theme:S},m.a.createElement(m.a.Fragment,null,m.a.createElement(j,null),e,m.a.createElement(B,null,m.a.createElement(F,null,"©")," ",L()(t.site.buildTime,".")[2]," by Victor Rudolfsson. All rights reversed. ",m.a.createElement("br",null),m.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:I})},t}(m.a.PureComponent),D=s.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1ap8vxn-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),W=s.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1ap8vxn-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),R=s.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1ap8vxn-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),U=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return m.a.createElement(D,null,t&&m.a.createElement(W,null,m.a.createElement("span",null,"Previous"),m.a.createElement(o.Link,{to:"/posts/"+l()(t.frontmatter.title)},t.frontmatter.title)),n&&m.a.createElement(R,null,m.a.createElement("span",null,"Next"),m.a.createElement(o.Link,{to:"/posts/"+l()(n.frontmatter.title)},n.frontmatter.title)))},t}(m.a.PureComponent),q=s.c.div.withConfig({displayName:"SectionTitle",componentId:"fijs9v-0"})(["font-size:",";text-transform:",";text-align:center;font-family:monospace;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),M=n(163),G=n.n(M),H=function(e){var t,n,r,a,o=e.postNode,i=e.postPath,l=e.postSEO,c="/"===w.a.pathPrefix?"":w.a.pathPrefix;l?(t=o.frontmatter.title,n=o.excerpt,r=w.a.siteBanner,a=w.a.siteUrl+c+i):(t=w.a.siteTitle,n=w.a.siteDescription,r=w.a.siteBanner);r=w.a.siteUrl+c+r;var s=w.a.siteUrl+w.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:w.a.siteTitleAlt?w.a.siteTitleAlt:""}];return l&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:w.a.siteTitleAlt?w.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:w.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:w.a.author},publisher:{"@type":"Organization",name:w.a.author,logo:{"@type":"ImageObject",url:w.a.siteUrl+c+w.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),m.a.createElement(G.a,null,m.a.createElement("html",{lang:w.a.siteLanguage}),m.a.createElement("title",null,w.a.siteTitle),m.a.createElement("meta",{name:"description",content:n}),m.a.createElement("meta",{name:"image",content:r}),m.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),m.a.createElement("meta",{property:"og:locale",content:w.a.ogLanguage}),m.a.createElement("meta",{property:"og:site_name",content:w.a.ogSiteName?w.a.ogSiteName:""}),m.a.createElement("meta",{property:"og:url",content:l?a:s}),l?m.a.createElement("meta",{property:"og:type",content:"article"}):null,m.a.createElement("meta",{property:"og:title",content:t}),m.a.createElement("meta",{property:"og:description",content:n}),m.a.createElement("meta",{property:"og:image",content:r}),m.a.createElement("meta",{property:"fb:app_id",content:w.a.siteFBAppID?w.a.siteFBAppID:""}),m.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),m.a.createElement("meta",{name:"twitter:creator",content:w.a.userTwitter?w.a.userTwitter:""}),m.a.createElement("meta",{name:"twitter:title",content:t}),m.a.createElement("meta",{name:"twitter:url",content:w.a.siteUrl}),m.a.createElement("meta",{name:"twitter:description",content:n}),m.a.createElement("meta",{name:"twitter:image",content:r}))},J=s.c.div.withConfig({displayName:"Wrapper",componentId:"iqsuww-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},k.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},k.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),V=s.c.div.withConfig({displayName:"Content",componentId:"sc-1po8e0q-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},k.a.tablet,k.a.phone),Q=s.c.h3.withConfig({displayName:"Title",componentId:"vc7jve-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),K=(n(76),n(173),n(174),s.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-1f561kb-0"})(["text-align:center;margin:2rem;}"])),Y=s.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-1f561kb-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],k.a.phone,S.colors.grey.light,E()(.2,S.colors.primary),S.colors.white,E()(.2,S.colors.primary),k.a.tablet),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),c="/"+r+"/"+(t+1).toString();return n>1?m.a.createElement(K,null,m.a.createElement(Y,null,!a&&m.a.createElement(o.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return m.a.createElement(o.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&m.a.createElement(o.Link,{className:"next page-numbers",to:c,rel:"next"},"Next →"))):null},t}(m.a.PureComponent);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return v}),n.d(t,"d",function(){return C}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return U}),n.d(t,"i",function(){return q}),n.d(t,"h",function(){return H}),n.d(t,"j",function(){return d}),n.d(t,"l",function(){return J}),n.d(t,"c",function(){return V}),n.d(t,"k",function(){return Q}),n.d(t,"f",function(){return X})}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-b2b73b1f8ba139bc9696.js.map