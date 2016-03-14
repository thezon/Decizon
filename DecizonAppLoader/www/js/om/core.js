// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj24103 = {};
return obj24103;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.display_name[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.display_name["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj24105 = {};
return obj24105;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.init_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.init_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj24107 = {};
return obj24107;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.should_update[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.should_update["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj24109 = {};
return obj24109;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.will_mount[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.will_mount["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj24111 = {};
return obj24111;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.did_mount[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.did_mount["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj24113 = {};
return obj24113;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.will_unmount[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.will_unmount["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj24115 = {};
return obj24115;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.will_update[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.will_update["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj24117 = {};
return obj24117;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.did_update[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.did_update["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj24119 = {};
return obj24119;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.will_receive_props[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.will_receive_props["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj24121 = {};
return obj24121;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.render[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.render["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj24123 = {};
return obj24123;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.render_props[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.render_props["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj24125 = {};
return obj24125;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core.render_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core.render_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj24127 = {};
return obj24127;
})();


om.core.IOmSwap = (function (){var obj24129 = {};
return obj24129;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj24131 = {};
return obj24131;
})();

om.core._get_state = (function om$core$_get_state(){
var G__24133 = arguments.length;
switch (G__24133) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj24136 = {};
return obj24136;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__24138 = arguments.length;
switch (G__24138) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_render_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_render_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_render_state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_render_state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj24141 = {};
return obj24141;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__24143 = arguments.length;
switch (G__24143) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj24146 = {};
return obj24146;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_queue[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_queue["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj24148 = {};
return obj24148;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__10400__auto__ = x;
if(and__10400__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__10400__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__11048__auto__ = (((x == null))?null:x);
return (function (){var or__10412__auto__ = (om.core._value[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._value["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj24150 = {};
return obj24150;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__10400__auto__ = cursor;
if(and__10400__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__10400__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__11048__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10412__auto__ = (om.core._path[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._path["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__10400__auto__ = cursor;
if(and__10400__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__10400__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__11048__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10412__auto__ = (om.core._state[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._state["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj24152 = {};
return obj24152;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__24154 = arguments.length;
switch (G__24154) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__10400__auto__ = value;
if(and__10400__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__10400__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__11048__auto__ = (((value == null))?null:value);
return (function (){var or__10412__auto__ = (om.core._to_cursor[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._to_cursor["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__10400__auto__ = value;
if(and__10400__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__10400__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__11048__auto__ = (((value == null))?null:value);
return (function (){var or__10412__auto__ = (om.core._to_cursor[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._to_cursor["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj24157 = {};
return obj24157;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__10400__auto__ = cursor;
if(and__10400__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__10400__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__11048__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10412__auto__ = (om.core._derive[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._derive["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj24159 = {};
return obj24159;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__10400__auto__ = cursor;
if(and__10400__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__10400__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__11048__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10412__auto__ = (om.core._transact_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj24161 = {};
return obj24161;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__10400__auto__ = x;
if(and__10400__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__11048__auto__ = (((x == null))?null:x);
return (function (){var or__10412__auto__ = (om.core._listen_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__10400__auto__ = x;
if(and__10400__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__11048__auto__ = (((x == null))?null:x);
return (function (){var or__10412__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__10400__auto__ = x;
if(and__10400__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__11048__auto__ = (((x == null))?null:x);
return (function (){var or__10412__auto__ = (om.core._notify_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj24163 = {};
return obj24163;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_property[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_property["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj24165 = {};
return obj24165;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__10400__auto__ = cursor;
if(and__10400__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__10400__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__11048__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10412__auto__ = (om.core._root_key[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._root_key["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj24167 = {};
return obj24167;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._adapt[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._adapt["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj24169 = {};
return obj24169;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__10400__auto__ = this$;
if(and__10400__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__10400__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__11048__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10412__auto__ = (om.core._get_deps[goog.typeOf(x__11048__auto__)]);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (om.core._get_deps["_"]);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__24171 = state;
if(G__24171){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24171.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__24171.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__24171);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__24171);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__24173 = x;
if(G__24173){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24173.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__24173.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24173);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24173);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__24175 = arguments.length;
switch (G__24175) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__24176 = (x.props["__om_cursor"]);
var G__24176__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__24176,korks__$1):G__24176);
return G__24176__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__24179 = arguments.length;
switch (G__24179) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__24182 = arguments.length;
switch (G__24182) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__24185 = state;
(G__24185["__om_prev_state"] = (state["__om_state"]));

(G__24185["__om_state"] = pending_state);

(G__24185["__om_pending_state"] = null);

return G__24185;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__24187 = arguments.length;
switch (G__24187) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__10412__auto__ = props;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__10412__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24190 = c;
if(G__24190){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24190.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__24190.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24190);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24190);
}
})()){
var state_24211 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__10412__auto__ = (state_24211["__om_prev_state"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (state_24211["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__24191 = c;
if(G__24191){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24191.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__24191.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24191);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24191);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__24192 = cljs.core.seq.call(null,refs);
var chunk__24193 = null;
var count__24194 = (0);
var i__24195 = (0);
while(true){
if((i__24195 < count__24194)){
var ref = cljs.core._nth.call(null,chunk__24193,i__24195);
om.core.unobserve.call(null,this$,ref);

var G__24212 = seq__24192;
var G__24213 = chunk__24193;
var G__24214 = count__24194;
var G__24215 = (i__24195 + (1));
seq__24192 = G__24212;
chunk__24193 = G__24213;
count__24194 = G__24214;
i__24195 = G__24215;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__24192);
if(temp__4126__auto____$1){
var seq__24192__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24192__$1)){
var c__11197__auto__ = cljs.core.chunk_first.call(null,seq__24192__$1);
var G__24216 = cljs.core.chunk_rest.call(null,seq__24192__$1);
var G__24217 = c__11197__auto__;
var G__24218 = cljs.core.count.call(null,c__11197__auto__);
var G__24219 = (0);
seq__24192 = G__24216;
chunk__24193 = G__24217;
count__24194 = G__24218;
i__24195 = G__24219;
continue;
} else {
var ref = cljs.core.first.call(null,seq__24192__$1);
om.core.unobserve.call(null,this$,ref);

var G__24220 = cljs.core.next.call(null,seq__24192__$1);
var G__24221 = null;
var G__24222 = (0);
var G__24223 = (0);
seq__24192 = G__24220;
chunk__24193 = G__24221;
count__24194 = G__24222;
i__24195 = G__24223;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24196 = c;
if(G__24196){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24196.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__24196.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__24196);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__24196);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__24197 = c;
if(G__24197){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24197.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__24197.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__24197);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__24197);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__10400__auto__){
return cljs.core.some.call(null,((function (and__10400__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__24189_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__24189_SHARP_);
});})(and__10400__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__10400__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_24198 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_24199 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_24200 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_24201 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_24202 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__24203 = c;
if(G__24203){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24203.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__24203.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24203);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24203);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__24204 = c;
if(G__24204){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24204.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__24204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24204);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__24205 = c;
if(G__24205){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24205.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__24205.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24205);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24205);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_24202;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_24201;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_24200;

om.core._STAR_state_STAR_ = _STAR_state_STAR_24199;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_24198;
}}),(function (next_props,next_state){
var this$ = this;
var c_24224 = om.core.children.call(null,this$);
if((function (){var G__24206 = c_24224;
if(G__24206){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24206.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__24206.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24206);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24206);
}
})()){
var state_24225 = this$.state;
om.core.will_update.call(null,c_24224,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__10412__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__24207 = c;
if(G__24207){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24207.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__24207.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24207);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24207);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__10412__auto__ = id;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__24208 = c;
if(G__24208){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24208.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__24208.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__24208);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__24208);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24209 = c;
if(G__24209){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24209.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__24209.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__24209);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__24209);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_24226 = om.core.children.call(null,this$);
if((function (){var G__24210 = c_24226;
if(G__24210){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24210.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__24210.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24210);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24210);
}
})()){
om.core.will_mount.call(null,c_24226);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x24228 = obj;
x24228.om$core$IGetState$ = true;

x24228.om$core$IGetState$_get_state$arity$1 = ((function (x24228){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__10412__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (state["__om_state"]);
}
});})(x24228))
;

x24228.om$core$IGetState$_get_state$arity$2 = ((function (x24228){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x24228))
;

x24228.om$core$IGetRenderState$ = true;

x24228.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x24228){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x24228))
;

x24228.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x24228){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x24228))
;

x24228.om$core$ISetState$ = true;

x24228.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x24228){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__10400__auto__ = !((app_state == null));
if(and__10400__auto__){
return render;
} else {
return and__10400__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x24228))
;

x24228.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x24228){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__10400__auto__ = !((app_state == null));
if(and__10400__auto__){
return render;
} else {
return and__10400__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x24228))
;

return x24228;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__10412__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__10412__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__24229 = c;
if(G__24229){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24229.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__24229.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24229);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__24229);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_24238 = om.core.children.call(null,this$);
if((function (){var G__24230 = c_24238;
if(G__24230){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24230.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__24230.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24230);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__24230);
}
})()){
om.core.will_mount.call(null,c_24238);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__24231 = c;
if(G__24231){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24231.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__24231.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24231);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__24231);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__24232 = cljs.core.seq.call(null,refs);
var chunk__24233 = null;
var count__24234 = (0);
var i__24235 = (0);
while(true){
if((i__24235 < count__24234)){
var ref = cljs.core._nth.call(null,chunk__24233,i__24235);
om.core.unobserve.call(null,this$,ref);

var G__24239 = seq__24232;
var G__24240 = chunk__24233;
var G__24241 = count__24234;
var G__24242 = (i__24235 + (1));
seq__24232 = G__24239;
chunk__24233 = G__24240;
count__24234 = G__24241;
i__24235 = G__24242;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__24232);
if(temp__4126__auto____$1){
var seq__24232__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24232__$1)){
var c__11197__auto__ = cljs.core.chunk_first.call(null,seq__24232__$1);
var G__24243 = cljs.core.chunk_rest.call(null,seq__24232__$1);
var G__24244 = c__11197__auto__;
var G__24245 = cljs.core.count.call(null,c__11197__auto__);
var G__24246 = (0);
seq__24232 = G__24243;
chunk__24233 = G__24244;
count__24234 = G__24245;
i__24235 = G__24246;
continue;
} else {
var ref = cljs.core.first.call(null,seq__24232__$1);
om.core.unobserve.call(null,this$,ref);

var G__24247 = cljs.core.next.call(null,seq__24232__$1);
var G__24248 = null;
var G__24249 = (0);
var G__24250 = (0);
seq__24232 = G__24247;
chunk__24233 = G__24248;
count__24234 = G__24249;
i__24235 = G__24250;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_24251 = this$.props;
var c_24252 = om.core.children.call(null,this$);
if((function (){var G__24236 = c_24252;
if(G__24236){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24236.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__24236.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24236);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__24236);
}
})()){
var state_24253 = this$.state;
om.core.will_update.call(null,c_24252,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__24237 = c;
if(G__24237){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24237.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__24237.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24237);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__24237);
}
})()){
var state_24254 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__10412__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x24256 = cljs.core.clj__GT_js.call(null,methods$);
x24256.om$core$IGetState$ = true;

x24256.om$core$IGetState$_get_state$arity$1 = ((function (x24256){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__10412__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x24256))
;

x24256.om$core$IGetState$_get_state$arity$2 = ((function (x24256){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x24256))
;

x24256.om$core$IGetRenderState$ = true;

x24256.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x24256){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x24256))
;

x24256.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x24256){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x24256))
;

x24256.om$core$ISetState$ = true;

x24256.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x24256){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__10400__auto__ = !((gstate == null));
if(and__10400__auto__){
return render;
} else {
return and__10400__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x24256))
;

x24256.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x24256){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x24256))
;

return x24256;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__24258 = x;
if(G__24258){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24258.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__24258.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24258);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__24258);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__24260){
var vec__24261 = p__24260;
var k = cljs.core.nth.call(null,vec__24261,(0),null);
var v = cljs.core.nth.call(null,vec__24261,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__24262 = null;
var G__24262__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__24262__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__24262 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24262__2.call(this,self__,k);
case 3:
return G__24262__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24262.cljs$core$IFn$_invoke$arity$2 = G__24262__2;
G__24262.cljs$core$IFn$_invoke$arity$3 = G__24262__3;
return G__24262;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args24259){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24259)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__24264 = null;
var G__24264__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__24264__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__24264 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24264__2.call(this,self__,k);
case 3:
return G__24264__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24264.cljs$core$IFn$_invoke$arity$2 = G__24264__2;
G__24264.cljs$core$IFn$_invoke$arity$3 = G__24264__3;
return G__24264;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args24263){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24263)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x24266 = cljs.core.clone.call(null,val);
x24266.cljs$core$IEquiv$ = true;

x24266.cljs$core$IEquiv$_equiv$arity$2 = ((function (x24266){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x24266))
;

x24266.om$core$ITransact$ = true;

x24266.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x24266){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x24266))
;

x24266.om$core$ICursor$ = true;

x24266.om$core$ICursor$_path$arity$1 = ((function (x24266){
return (function (_){
var ___$1 = this;
return path;
});})(x24266))
;

x24266.om$core$ICursor$_state$arity$1 = ((function (x24266){
return (function (_){
var ___$1 = this;
return state;
});})(x24266))
;

x24266.cljs$core$IDeref$ = true;

x24266.cljs$core$IDeref$_deref$arity$1 = ((function (x24266){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x24266))
;

return x24266;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__24268 = arguments.length;
switch (G__24268) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__24269 = val;
if(G__24269){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24269.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__24269.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__24269);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__24269);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__24270 = val;
if(G__24270){
var bit__11086__auto__ = (G__24270.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__11086__auto__) || (G__24270.cljs$core$ICloneable$)){
return true;
} else {
if((!G__24270.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__24270);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__24270);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__24273 = atom;
if(G__24273){
var bit__11086__auto__ = (G__24273.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__11086__auto__) || (G__24273.cljs$core$IDeref$)){
return true;
} else {
if((!G__24273.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__24273);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__24273);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x24275 = cljs.core.clone.call(null,x);
x24275.om$core$ITransact$ = true;

x24275.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x24275){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x24275))
;

x24275.om$core$ICursorDerive$ = true;

x24275.om$core$ICursorDerive$_derive$arity$4 = ((function (x24275){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x24275))
;

x24275.om$core$IAdapt$ = true;

x24275.om$core$IAdapt$_adapt$arity$2 = ((function (x24275){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x24275))
;

x24275.cljs$core$ICloneable$ = true;

x24275.cljs$core$ICloneable$_clone$arity$1 = ((function (x24275){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x24275))
;

return x24275;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__24282 = cursor;
if(G__24282){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24282.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__24282.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__24282);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__24282);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x24283 = cljs.core.clone.call(null,cursor);
x24283.om$core$ITransact$ = true;

x24283.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x24283,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x24283,path,storage))
;

x24283.om$core$IOmRef$ = true;

x24283.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x24283,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x24283,path,storage))
;

x24283.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x24283,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x24283,path,storage))
;

x24283.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x24283,path,storage){
return (function (_){
var ___$1 = this;
var seq__24284 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__24285 = null;
var count__24286 = (0);
var i__24287 = (0);
while(true){
if((i__24287 < count__24286)){
var c = cljs.core._nth.call(null,chunk__24285,i__24287);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__24288 = seq__24284;
var G__24289 = chunk__24285;
var G__24290 = count__24286;
var G__24291 = (i__24287 + (1));
seq__24284 = G__24288;
chunk__24285 = G__24289;
count__24286 = G__24290;
i__24287 = G__24291;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24284);
if(temp__4126__auto__){
var seq__24284__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24284__$1)){
var c__11197__auto__ = cljs.core.chunk_first.call(null,seq__24284__$1);
var G__24292 = cljs.core.chunk_rest.call(null,seq__24284__$1);
var G__24293 = c__11197__auto__;
var G__24294 = cljs.core.count.call(null,c__11197__auto__);
var G__24295 = (0);
seq__24284 = G__24292;
chunk__24285 = G__24293;
count__24286 = G__24294;
i__24287 = G__24295;
continue;
} else {
var c = cljs.core.first.call(null,seq__24284__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__24296 = cljs.core.next.call(null,seq__24284__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24284 = G__24296;
chunk__24285 = G__24297;
count__24286 = G__24298;
i__24287 = G__24299;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24283,path,storage))
;

x24283.om$core$IOmRef$_get_deps$arity$1 = ((function (x24283,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x24283,path,storage))
;

x24283.om$core$ICursorDerive$ = true;

x24283.om$core$ICursorDerive$_derive$arity$4 = ((function (x24283,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x24283,path,storage))
;

return x24283;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__10412__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__10412__auto__ = state.om$render$T;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__24301 = arguments.length;
switch (G__24301) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__24302_24307 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__24303_24308 = null;
var count__24304_24309 = (0);
var i__24305_24310 = (0);
while(true){
if((i__24305_24310 < count__24304_24309)){
var f_24311 = cljs.core._nth.call(null,chunk__24303_24308,i__24305_24310);
f_24311.call(null);

var G__24312 = seq__24302_24307;
var G__24313 = chunk__24303_24308;
var G__24314 = count__24304_24309;
var G__24315 = (i__24305_24310 + (1));
seq__24302_24307 = G__24312;
chunk__24303_24308 = G__24313;
count__24304_24309 = G__24314;
i__24305_24310 = G__24315;
continue;
} else {
var temp__4126__auto___24316 = cljs.core.seq.call(null,seq__24302_24307);
if(temp__4126__auto___24316){
var seq__24302_24317__$1 = temp__4126__auto___24316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24302_24317__$1)){
var c__11197__auto___24318 = cljs.core.chunk_first.call(null,seq__24302_24317__$1);
var G__24319 = cljs.core.chunk_rest.call(null,seq__24302_24317__$1);
var G__24320 = c__11197__auto___24318;
var G__24321 = cljs.core.count.call(null,c__11197__auto___24318);
var G__24322 = (0);
seq__24302_24307 = G__24319;
chunk__24303_24308 = G__24320;
count__24304_24309 = G__24321;
i__24305_24310 = G__24322;
continue;
} else {
var f_24323 = cljs.core.first.call(null,seq__24302_24317__$1);
f_24323.call(null);

var G__24324 = cljs.core.next.call(null,seq__24302_24317__$1);
var G__24325 = null;
var G__24326 = (0);
var G__24327 = (0);
seq__24302_24307 = G__24324;
chunk__24303_24308 = G__24325;
count__24304_24309 = G__24326;
i__24305_24310 = G__24327;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__10412__auto__ = (function (){var G__24334 = x;
if(G__24334){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24334.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__24334.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24334);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__24334);
}
})();
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = (function (){var G__24336 = x;
if(G__24336){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto____$1 = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return G__24336.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__24336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__24336);
}
})();
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
var G__24337 = x;
if(G__24337){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto____$2 = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto____$2)){
return or__10412__auto____$2;
} else {
return G__24337.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__24337.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24337);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__24337);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__24339 = arguments.length;
switch (G__24339) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__10412__auto__ = descriptor;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__24342 = arguments.length;
switch (G__24342) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__24345 = arguments.length;
switch (G__24345) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__24346 = m;
var map__24346__$1 = ((cljs.core.seq_QMARK_.call(null,map__24346))?cljs.core.apply.call(null,cljs.core.hash_map,map__24346):map__24346);
var opts = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__24346__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__10412__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__24346,map__24346__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__24346,map__24346__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__24346,map__24346__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__24346,map__24346__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__10412__auto__ = rkey;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__24349 = arguments.length;
switch (G__24349) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__24352 = arguments.length;
switch (G__24352) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__24362 = state;
if(G__24362){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24362.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__24362.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__24362);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__24362);
}
})()){
} else {
var properties_24370 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_24371 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_24372 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x24363_24373 = state;
x24363_24373.om$core$IRenderQueue$ = true;

x24363_24373.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_24372);
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_24372),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_24372,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_24372,cljs.core.empty);
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$INotify$ = true;

x24363_24373.om$core$INotify$_listen_BANG_$arity$3 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_24371,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_24371,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$INotify$_notify_BANG_$arity$3 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__24364_24374 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_24371));
var chunk__24365_24375 = null;
var count__24366_24376 = (0);
var i__24367_24377 = (0);
while(true){
if((i__24367_24377 < count__24366_24376)){
var vec__24368_24378 = cljs.core._nth.call(null,chunk__24365_24375,i__24367_24377);
var __24379 = cljs.core.nth.call(null,vec__24368_24378,(0),null);
var f_24380 = cljs.core.nth.call(null,vec__24368_24378,(1),null);
f_24380.call(null,tx_data,root_cursor);

var G__24381 = seq__24364_24374;
var G__24382 = chunk__24365_24375;
var G__24383 = count__24366_24376;
var G__24384 = (i__24367_24377 + (1));
seq__24364_24374 = G__24381;
chunk__24365_24375 = G__24382;
count__24366_24376 = G__24383;
i__24367_24377 = G__24384;
continue;
} else {
var temp__4126__auto___24385 = cljs.core.seq.call(null,seq__24364_24374);
if(temp__4126__auto___24385){
var seq__24364_24386__$1 = temp__4126__auto___24385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24364_24386__$1)){
var c__11197__auto___24387 = cljs.core.chunk_first.call(null,seq__24364_24386__$1);
var G__24388 = cljs.core.chunk_rest.call(null,seq__24364_24386__$1);
var G__24389 = c__11197__auto___24387;
var G__24390 = cljs.core.count.call(null,c__11197__auto___24387);
var G__24391 = (0);
seq__24364_24374 = G__24388;
chunk__24365_24375 = G__24389;
count__24366_24376 = G__24390;
i__24367_24377 = G__24391;
continue;
} else {
var vec__24369_24392 = cljs.core.first.call(null,seq__24364_24386__$1);
var __24393 = cljs.core.nth.call(null,vec__24369_24392,(0),null);
var f_24394 = cljs.core.nth.call(null,vec__24369_24392,(1),null);
f_24394.call(null,tx_data,root_cursor);

var G__24395 = cljs.core.next.call(null,seq__24364_24386__$1);
var G__24396 = null;
var G__24397 = (0);
var G__24398 = (0);
seq__24364_24374 = G__24395;
chunk__24365_24375 = G__24396;
count__24366_24376 = G__24397;
i__24367_24377 = G__24398;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRootProperties$ = true;

x24363_24373.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_24370,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_24370,cljs.core.dissoc,id,k);
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_24370,cljs.core.dissoc,id);
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

x24363_24373.om$core$IRootProperties$_get_property$arity$3 = ((function (x24363_24373,properties_24370,listeners_24371,render_queue_24372){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_24370),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x24363_24373,properties_24370,listeners_24371,render_queue_24372))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x24400 = cljs.core.clone.call(null,cursor);
x24400.om$core$IRootKey$ = true;

x24400.om$core$IRootKey$_root_key$arity$1 = ((function (x24400){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x24400))
;

x24400.om$core$IAdapt$ = true;

x24400.om$core$IAdapt$_adapt$arity$2 = ((function (x24400){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x24400))
;

x24400.cljs$core$ICloneable$ = true;

x24400.cljs$core$ICloneable$_clone$arity$1 = ((function (x24400){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x24400))
;

return x24400;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__24401){
var map__24464 = p__24401;
var map__24464__$1 = ((cljs.core.seq_QMARK_.call(null,map__24464))?cljs.core.apply.call(null,cljs.core.hash_map,map__24464):map__24464);
var options = map__24464__$1;
var raf = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__24464__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__24526 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__24526,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__24526,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__24465 = value;
if(G__24465){
var bit__11086__auto__ = (G__24465.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__11086__auto__) || (G__24465.cljs$core$IAtom$)){
return true;
} else {
if((!G__24465.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__24465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__24465);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__10412__auto__ = adapt;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_24527 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_24496 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_24497 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_24498 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_24499 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_24499;

om.core._STAR_state_STAR_ = _STAR_state_STAR_24498;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_24497;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_24496;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_24527);
} else {
}
}

var queue_24528 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_24528)){
} else {
var seq__24500_24529 = cljs.core.seq.call(null,queue_24528);
var chunk__24501_24530 = null;
var count__24502_24531 = (0);
var i__24503_24532 = (0);
while(true){
if((i__24503_24532 < count__24502_24531)){
var c_24533 = cljs.core._nth.call(null,chunk__24501_24530,i__24503_24532);
if(cljs.core.truth_(c_24533.isMounted())){
var temp__4126__auto___24534 = (c_24533.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___24534)){
var next_props_24535 = temp__4126__auto___24534;
(c_24533.props["__om_cursor"] = next_props_24535);

(c_24533.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__10412__auto__ = !((function (){var G__24505 = om.core.children.call(null,c_24533);
if(G__24505){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24505.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__24505.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__24505);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__24505);
}
})());
if(or__10412__auto__){
return or__10412__auto__;
} else {
return c_24533.shouldComponentUpdate(c_24533.props,c_24533.state);
}
})())){
c_24533.forceUpdate();
} else {
}
} else {
}

var G__24536 = seq__24500_24529;
var G__24537 = chunk__24501_24530;
var G__24538 = count__24502_24531;
var G__24539 = (i__24503_24532 + (1));
seq__24500_24529 = G__24536;
chunk__24501_24530 = G__24537;
count__24502_24531 = G__24538;
i__24503_24532 = G__24539;
continue;
} else {
var temp__4126__auto___24540 = cljs.core.seq.call(null,seq__24500_24529);
if(temp__4126__auto___24540){
var seq__24500_24541__$1 = temp__4126__auto___24540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24500_24541__$1)){
var c__11197__auto___24542 = cljs.core.chunk_first.call(null,seq__24500_24541__$1);
var G__24543 = cljs.core.chunk_rest.call(null,seq__24500_24541__$1);
var G__24544 = c__11197__auto___24542;
var G__24545 = cljs.core.count.call(null,c__11197__auto___24542);
var G__24546 = (0);
seq__24500_24529 = G__24543;
chunk__24501_24530 = G__24544;
count__24502_24531 = G__24545;
i__24503_24532 = G__24546;
continue;
} else {
var c_24547 = cljs.core.first.call(null,seq__24500_24541__$1);
if(cljs.core.truth_(c_24547.isMounted())){
var temp__4126__auto___24548__$1 = (c_24547.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___24548__$1)){
var next_props_24549 = temp__4126__auto___24548__$1;
(c_24547.props["__om_cursor"] = next_props_24549);

(c_24547.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__10412__auto__ = !((function (){var G__24507 = om.core.children.call(null,c_24547);
if(G__24507){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24507.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__24507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__24507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__24507);
}
})());
if(or__10412__auto__){
return or__10412__auto__;
} else {
return c_24547.shouldComponentUpdate(c_24547.props,c_24547.state);
}
})())){
c_24547.forceUpdate();
} else {
}
} else {
}

var G__24550 = cljs.core.next.call(null,seq__24500_24541__$1);
var G__24551 = null;
var G__24552 = (0);
var G__24553 = (0);
seq__24500_24529 = G__24550;
chunk__24501_24530 = G__24551;
count__24502_24531 = G__24552;
i__24503_24532 = G__24553;
continue;
}
} else {
}
}
break;
}
}

var _refs_24554 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_24554)){
} else {
var seq__24508_24555 = cljs.core.seq.call(null,_refs_24554);
var chunk__24509_24556 = null;
var count__24510_24557 = (0);
var i__24511_24558 = (0);
while(true){
if((i__24511_24558 < count__24510_24557)){
var vec__24512_24559 = cljs.core._nth.call(null,chunk__24509_24556,i__24511_24558);
var path_24560__$1 = cljs.core.nth.call(null,vec__24512_24559,(0),null);
var cs_24561 = cljs.core.nth.call(null,vec__24512_24559,(1),null);
var cs_24562__$1 = cljs.core.deref.call(null,cs_24561);
var seq__24513_24563 = cljs.core.seq.call(null,cs_24562__$1);
var chunk__24514_24564 = null;
var count__24515_24565 = (0);
var i__24516_24566 = (0);
while(true){
if((i__24516_24566 < count__24515_24565)){
var vec__24517_24567 = cljs.core._nth.call(null,chunk__24514_24564,i__24516_24566);
var id_24568 = cljs.core.nth.call(null,vec__24517_24567,(0),null);
var c_24569 = cljs.core.nth.call(null,vec__24517_24567,(1),null);
if(cljs.core.truth_(c_24569.shouldComponentUpdate(c_24569.props,c_24569.state))){
c_24569.forceUpdate();
} else {
}

var G__24570 = seq__24513_24563;
var G__24571 = chunk__24514_24564;
var G__24572 = count__24515_24565;
var G__24573 = (i__24516_24566 + (1));
seq__24513_24563 = G__24570;
chunk__24514_24564 = G__24571;
count__24515_24565 = G__24572;
i__24516_24566 = G__24573;
continue;
} else {
var temp__4126__auto___24574 = cljs.core.seq.call(null,seq__24513_24563);
if(temp__4126__auto___24574){
var seq__24513_24575__$1 = temp__4126__auto___24574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24513_24575__$1)){
var c__11197__auto___24576 = cljs.core.chunk_first.call(null,seq__24513_24575__$1);
var G__24577 = cljs.core.chunk_rest.call(null,seq__24513_24575__$1);
var G__24578 = c__11197__auto___24576;
var G__24579 = cljs.core.count.call(null,c__11197__auto___24576);
var G__24580 = (0);
seq__24513_24563 = G__24577;
chunk__24514_24564 = G__24578;
count__24515_24565 = G__24579;
i__24516_24566 = G__24580;
continue;
} else {
var vec__24518_24581 = cljs.core.first.call(null,seq__24513_24575__$1);
var id_24582 = cljs.core.nth.call(null,vec__24518_24581,(0),null);
var c_24583 = cljs.core.nth.call(null,vec__24518_24581,(1),null);
if(cljs.core.truth_(c_24583.shouldComponentUpdate(c_24583.props,c_24583.state))){
c_24583.forceUpdate();
} else {
}

var G__24584 = cljs.core.next.call(null,seq__24513_24575__$1);
var G__24585 = null;
var G__24586 = (0);
var G__24587 = (0);
seq__24513_24563 = G__24584;
chunk__24514_24564 = G__24585;
count__24515_24565 = G__24586;
i__24516_24566 = G__24587;
continue;
}
} else {
}
}
break;
}

var G__24588 = seq__24508_24555;
var G__24589 = chunk__24509_24556;
var G__24590 = count__24510_24557;
var G__24591 = (i__24511_24558 + (1));
seq__24508_24555 = G__24588;
chunk__24509_24556 = G__24589;
count__24510_24557 = G__24590;
i__24511_24558 = G__24591;
continue;
} else {
var temp__4126__auto___24592 = cljs.core.seq.call(null,seq__24508_24555);
if(temp__4126__auto___24592){
var seq__24508_24593__$1 = temp__4126__auto___24592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24508_24593__$1)){
var c__11197__auto___24594 = cljs.core.chunk_first.call(null,seq__24508_24593__$1);
var G__24595 = cljs.core.chunk_rest.call(null,seq__24508_24593__$1);
var G__24596 = c__11197__auto___24594;
var G__24597 = cljs.core.count.call(null,c__11197__auto___24594);
var G__24598 = (0);
seq__24508_24555 = G__24595;
chunk__24509_24556 = G__24596;
count__24510_24557 = G__24597;
i__24511_24558 = G__24598;
continue;
} else {
var vec__24519_24599 = cljs.core.first.call(null,seq__24508_24593__$1);
var path_24600__$1 = cljs.core.nth.call(null,vec__24519_24599,(0),null);
var cs_24601 = cljs.core.nth.call(null,vec__24519_24599,(1),null);
var cs_24602__$1 = cljs.core.deref.call(null,cs_24601);
var seq__24520_24603 = cljs.core.seq.call(null,cs_24602__$1);
var chunk__24521_24604 = null;
var count__24522_24605 = (0);
var i__24523_24606 = (0);
while(true){
if((i__24523_24606 < count__24522_24605)){
var vec__24524_24607 = cljs.core._nth.call(null,chunk__24521_24604,i__24523_24606);
var id_24608 = cljs.core.nth.call(null,vec__24524_24607,(0),null);
var c_24609 = cljs.core.nth.call(null,vec__24524_24607,(1),null);
if(cljs.core.truth_(c_24609.shouldComponentUpdate(c_24609.props,c_24609.state))){
c_24609.forceUpdate();
} else {
}

var G__24610 = seq__24520_24603;
var G__24611 = chunk__24521_24604;
var G__24612 = count__24522_24605;
var G__24613 = (i__24523_24606 + (1));
seq__24520_24603 = G__24610;
chunk__24521_24604 = G__24611;
count__24522_24605 = G__24612;
i__24523_24606 = G__24613;
continue;
} else {
var temp__4126__auto___24614__$1 = cljs.core.seq.call(null,seq__24520_24603);
if(temp__4126__auto___24614__$1){
var seq__24520_24615__$1 = temp__4126__auto___24614__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24520_24615__$1)){
var c__11197__auto___24616 = cljs.core.chunk_first.call(null,seq__24520_24615__$1);
var G__24617 = cljs.core.chunk_rest.call(null,seq__24520_24615__$1);
var G__24618 = c__11197__auto___24616;
var G__24619 = cljs.core.count.call(null,c__11197__auto___24616);
var G__24620 = (0);
seq__24520_24603 = G__24617;
chunk__24521_24604 = G__24618;
count__24522_24605 = G__24619;
i__24523_24606 = G__24620;
continue;
} else {
var vec__24525_24621 = cljs.core.first.call(null,seq__24520_24615__$1);
var id_24622 = cljs.core.nth.call(null,vec__24525_24621,(0),null);
var c_24623 = cljs.core.nth.call(null,vec__24525_24621,(1),null);
if(cljs.core.truth_(c_24623.shouldComponentUpdate(c_24623.props,c_24623.state))){
c_24623.forceUpdate();
} else {
}

var G__24624 = cljs.core.next.call(null,seq__24520_24615__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24520_24603 = G__24624;
chunk__24521_24604 = G__24625;
count__24522_24605 = G__24626;
i__24523_24606 = G__24627;
continue;
}
} else {
}
}
break;
}

var G__24628 = cljs.core.next.call(null,seq__24508_24593__$1);
var G__24629 = null;
var G__24630 = (0);
var G__24631 = (0);
seq__24508_24555 = G__24628;
chunk__24509_24556 = G__24629;
count__24510_24557 = G__24630;
i__24511_24558 = G__24631;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__24464,map__24464__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__24633 = x;
if(G__24633){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24633.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__24633.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__24633);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__24633);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__24635 = arguments.length;
switch (G__24635) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__24638 = arguments.length;
switch (G__24638) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__24641 = cursor;
if(G__24641){
var bit__11086__auto__ = null;
if(cljs.core.truth_((function (){var or__10412__auto__ = bit__11086__auto__;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return G__24641.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__24641.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__24641);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__24641);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__24643 = arguments.length;
switch (G__24643) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__24646 = arguments.length;
switch (G__24646) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__24649 = arguments.length;
switch (G__24649) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__24652 = arguments.length;
switch (G__24652) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__24655 = arguments.length;
switch (G__24655) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__24658 = arguments.length;
switch (G__24658) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map