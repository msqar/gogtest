(this.webpackJsonpgogtest=this.webpackJsonpgogtest||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"ADD_TO_CART_EVENT",(function(){return N})),n.d(a,"REMOVED_FROM_CART_EVENT",(function(){return E})),n.d(a,"DROPDOWN_TOGGLE_EVENT",(function(){return T})),n.d(a,"OVERLAY_CLICKED_EVENT",(function(){return _}));var s=n(1),r=n(0),i=n.n(r),c=n(13),o=n.n(c),l=n(6),u=n(7),d=n(9),m=n(8),b=n(41),j=n(38),h=n(14),O=n.n(h),p=n(15),v=n(19),f=n.p+"static/media/cart_icon.61e8da9c.svg",C={events:{},dispatch:function(e,t){this.events[e]&&this.events[e].forEach((function(e){return e(t)}))},subscribe:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},g=[{id:1,thumbnail:"/images/game_thumbnail_2.png",title:"Oddworld: Stranger's Wrath",price:9.99,discount:"50%",status:1},{id:2,thumbnail:"/images/game_thumbnail_3.png",title:"Chaos on Deponia",price:14.99,discount:null,status:2},{id:3,thumbnail:"/images/game_thumbnail_5.png",title:"The Settlers 2: Gold Edition",price:9.99,discount:null,status:1},{id:4,thumbnail:"/images/game_thumbnail_4.png",title:"Neverwinter Nights",price:4.99,discount:"50%",status:1},{id:5,thumbnail:"/images/game_thumbnail_1.png",title:"Assassin's Creed: Director's Cut",price:24.99,discount:null,status:1}],x={getGames:function(){return new Promise((function(e,t){setTimeout((function(){e(g)}),300)}))},getGameById:function(e){return new Promise((function(t,n){t(g.filter((function(t){return t.id===e})))}))}},N="ADD_TO_CART_EVENT",E="REMOVED_FROM_CART_EVENT",T="DROPDOWN_TOGGLE_EVENT",_="OVERLAY_CLICKED_EVENT",R=n(37),A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleProductRemoval=function(){var t=e.props,n=t.item,a=t.onRemove;a&&a(n.id)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.item;return Object(s.jsxs)("div",{className:"CartItem",children:[Object(s.jsx)("div",{className:"CartItem-thumbnailContainer",children:Object(s.jsx)(R.a,{className:"CartItem-thumbnail",src:e.thumbnail})}),Object(s.jsxs)("div",{className:"CartItem-bodyWrap",children:[Object(s.jsxs)("div",{className:"CartItem-body",children:[Object(s.jsx)("span",{className:"CartItem-title",children:e.title}),Object(s.jsx)("button",{onClick:this.handleProductRemoval,className:"CartItem-removeButton Button--textOnly",children:"Remove"})]}),Object(s.jsx)("div",{className:"CartItem-priceContainer",children:Object(s.jsxs)("span",{className:"CartItem-priceTag",children:["$ ",e.price]})})]})]})}}]),n}(i.a.PureComponent),D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"BubbleEffect",children:Object(s.jsx)("div",{className:"BubbleEffect-circle"})})}}]),n}(i.a.PureComponent),y=n(11),V=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).toggleCartDropdown=function(){var e=s.state.isVisible;s.setState({isVisible:!e},(function(){C.dispatch(a.DROPDOWN_TOGGLE_EVENT,{isVisible:!e})}))},s.closeCartDropdown=function(){s.setState({isVisible:!1})},s.onClearCart=function(){var e=s.state.items.map((function(e){return e.id}));s.setState({items:[]},(function(){C.dispatch(a.REMOVED_FROM_CART_EVENT,Object(v.a)(e))}))},s.onProductAdded=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.productId,e.prev=1,e.next=4,x.getGameById(n);case 4:(a=e.sent).length&&((r=Object(v.a)(s.state.items)).push(a[0]),s.setState({items:r},(function(){s.runBubbleAnimation()}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn("(ERROR) Cart: There was an error while attempting to get the game by id",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s.onProductRemoved=function(e){var t=s.state.items,n=Object(y.cloneDeep)(t);n=n.filter((function(t){return t.id!==e})),s.setState({items:n},(function(){C.dispatch(a.REMOVED_FROM_CART_EVENT,[e])}))},s.state={isVisible:!1,runAnimation:!1,items:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){C.subscribe(a.ADD_TO_CART_EVENT,this.onProductAdded),C.subscribe(a.OVERLAY_CLICKED_EVENT,this.closeCartDropdown)}},{key:"calculateCartTotal",value:function(){return this.state.items.reduce((function(e,t){return e+t.price}),0).toFixed(2)}},{key:"runBubbleAnimation",value:function(){var e=this;this.setState({runAnimation:!0}),setTimeout((function(){e.setState({runAnimation:!1})}),500)}},{key:"renderCartProducts",value:function(){var e=this;return this.state.items.map((function(t,n){return Object(s.jsx)(A,{item:t,onRemove:e.onProductRemoved},n)}))}},{key:"renderCartContent",value:function(){var e=this.state.items;return 0===e.length?Object(s.jsxs)("div",{className:"Cart-dropdownBody is--empty",children:[Object(s.jsx)("img",{className:"Cart-dropdown-cartIcon",src:f,alt:"Cart_Icon"}),Object(s.jsx)("span",{className:"Cart-dropdown-emptyTitle",children:"Your Cart is Empty"}),Object(s.jsx)("div",{className:"Divider"}),Object(s.jsx)("span",{className:"Text--secondary Text--14",children:"Explore great games and offers"}),Object(s.jsx)("button",{className:"Button--secondary u-marginTl",children:"BROWSE BESTSELLERS"})]}):Object(s.jsxs)("div",{className:"Cart-dropdownBody",children:[Object(s.jsxs)("div",{className:"Cart-dropdownRow",children:[Object(s.jsxs)("span",{className:"Text--12 Text--bold Text--uppercase",children:[e.length," ",1===e.length?"item":"items "," in cart"]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{className:"Text--12 Text--bold u-marginRm js-totalPrice",children:["$ ",this.calculateCartTotal()]}),Object(s.jsx)("button",{className:"Button u-paddingHl",onClick:this.onClearCart,children:"CLEAR CART"})]})]}),Object(s.jsx)("div",{className:"Divider--fullWidth u-marginAn"}),Object(s.jsx)("div",{className:"Cart-products",children:this.renderCartProducts()})]})}},{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.items,a=e.runAnimation;return Object(s.jsxs)("div",{className:"Cart "+(t?"is--opened":""),children:[Object(s.jsxs)("button",{className:"Cart-button",onClick:this.toggleCartDropdown,children:[Object(s.jsx)("img",{className:"Cart-icon",alt:"Cart_Icon",src:f}),Object(s.jsx)("span",{className:"Cart-counter",children:n.length}),a&&Object(s.jsx)(D,{})]}),Object(s.jsx)("div",{className:"Cart-dropdown "+(t?"is--visible":""),children:this.renderCartContent()})]})}}]),n}(i.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(b.a,{className:"Header",fixed:"top",children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(b.a.Brand,{href:"/",children:Object(s.jsx)("img",{src:"/images/gog_logo.png",className:"Header-logo d-inline-block align-top",alt:"GOG"})}),Object(s.jsx)(V,{})]})})}}]),n}(i.a.PureComponent),k=n(39),P=n(40),B=n(42),I=Object.freeze({NOT_PURCHASED:1,OWNED:2,IN_CART:3}),S=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleAddToCart=function(t){var n=e.props.onAddToCart;n&&n(t)},e.renderPriceBadge=function(t){var n=t.status,a=t.price,r=t.id;switch(n){case I.NOT_PURCHASED:return Object(s.jsxs)("button",{className:"Button--small",onClick:function(){return e.handleAddToCart(r)},children:["$ ",a]});case I.IN_CART:return Object(s.jsx)("div",{className:"Badge--dark",children:"IN CART"});case I.OWNED:return Object(s.jsx)("div",{className:"Badge--disabled",children:"OWNED"});default:return null}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.info;return Object(s.jsxs)(B.a,{className:"GameCard",children:[Object(s.jsx)(B.a.Img,{className:"GameCard-thumbnail",variant:"top",src:e.thumbnail}),Object(s.jsx)(B.a.Body,{className:"GameCard-body",children:Object(s.jsx)(B.a.Title,{className:"GameCard-title",children:e.title})}),Object(s.jsxs)(B.a.Footer,{className:"GameCard-footer",children:[e.discount&&Object(s.jsxs)("div",{className:"Badge",children:["-",e.discount]}),this.renderPriceBadge(e)]})]})}}]),n}(i.a.PureComponent),G=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).onDropdownToggle=function(e){var t=e.isVisible;s.setState({isVisible:t})},s.onOverlayClick=function(){s.setState({isVisible:!1}),C.dispatch(a.OVERLAY_CLICKED_EVENT,{})},s.state={isVisible:!1},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){C.subscribe(a.DROPDOWN_TOGGLE_EVENT,this.onDropdownToggle)}},{key:"render",value:function(){var e=this.state.isVisible;return Object(s.jsx)("div",{className:"OverlayBackground "+(e?"is--visible":""),onClick:Object(y.throttle)(this.onOverlayClick,300)})}}]),n}(i.a.PureComponent),L=(n(32),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).fetchAllGames=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getGames();case 3:(t=e.sent).length&&s.setState({games:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn("(ERROR) HomeView: There was an error while attempting to get the games",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),s.onProductRemoved=function(e){var t=s.state.games,n=Object(y.cloneDeep)(t);n.forEach((function(t){e.includes(t.id)&&(t.status=I.NOT_PURCHASED)})),s.setState({games:n})},s.handleAddToCart=function(e){var t=s.state.games,n=Object(y.cloneDeep)(t);n.find((function(t){return t.id===e})).status=I.IN_CART,s.setState({games:n},(function(){C.dispatch(a.ADD_TO_CART_EVENT,{productId:e})}))},s.state={games:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){C.subscribe(a.REMOVED_FROM_CART_EVENT,this.onProductRemoved),this.fetchAllGames()}},{key:"renderGameCards",value:function(){var e=this;return this.state.games.map((function(t,n){return Object(s.jsx)(k.a,{className:"HomeView-col",xl:{cols:"5"},lg:{cols:"5"},md:"6",sm:"6",xs:"6",children:Object(s.jsx)(S,{onAddToCart:e.handleAddToCart,info:t})},n)}))}},{key:"render",value:function(){return Object(s.jsxs)(j.a,{fluid:"md",children:[Object(s.jsx)(G,{}),Object(s.jsx)("div",{className:"HomeView",children:Object(s.jsxs)("section",{className:"Section",children:[Object(s.jsx)("span",{className:"Section-title text-uppercase",children:"GAME OF THE WEEK"}),Object(s.jsxs)("div",{className:"Banner",children:[Object(s.jsx)("div",{className:"Banner-imageContainer",children:Object(s.jsx)(R.a,{className:"Banner-image",src:"images/game_bg_xl.png",alt:"highlight_game"})}),Object(s.jsx)("div",{className:"Section-gameResults",children:Object(s.jsx)(P.a,{className:"HomeView-row",children:this.renderGameCards()})})]})]})})]})}}]),n}(i.a.Component)),M=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(w,{}),Object(s.jsx)(L,{})]})}}]),n}(i.a.Component),F=(n(33),n(34),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))});o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),F()}},[[35,1,2]]]);
//# sourceMappingURL=main.2ebafe8d.chunk.js.map