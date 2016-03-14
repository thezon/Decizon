// Compiled by ClojureScript 0.0-3291 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___28725 = schema.utils.use_fn_validation;
var output_schema28718_28726 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema28719_28727 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker28720_28728 = schema.core.checker.call(null,input_schema28719_28727);
var output_checker28721_28729 = schema.core.checker.call(null,output_schema28718_28726);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 * Returns: (s/=> s/Any)
 * 
 * Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729){
return (function om_bootstrap$mixins$event_listener(G__28722,G__28723,G__28724){
var validate__16151__auto__ = ufv___28725.get_cell();
if(cljs.core.truth_(validate__16151__auto__)){
var args__16152__auto___28730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28722,G__28723,G__28724], null);
var temp__4425__auto___28731 = input_checker28720_28728.call(null,args__16152__auto___28730);
if(cljs.core.truth_(temp__4425__auto___28731)){
var error__16153__auto___28732 = temp__4425__auto___28731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__16153__auto___28732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28719_28727,new cljs.core.Keyword(null,"value","value",305978217),args__16152__auto___28730,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28732], null));
} else {
}
} else {
}

var o__16154__auto__ = (function (){var target = G__28722;
var event_type = G__28723;
var callback = G__28724;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729))
} else {
return ((function (validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729){
return (function (){
return null;
});
;})(validate__16151__auto__,ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729))

}
}
break;
}
})();
if(cljs.core.truth_(validate__16151__auto__)){
var temp__4425__auto___28733 = output_checker28721_28729.call(null,o__16154__auto__);
if(cljs.core.truth_(temp__4425__auto___28733)){
var error__16153__auto___28734 = temp__4425__auto___28733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__16153__auto___28734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28718_28726,new cljs.core.Keyword(null,"value","value",305978217),o__16154__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16153__auto___28734], null));
} else {
}
} else {
}

return o__16154__auto__;
});})(ufv___28725,output_schema28718_28726,input_schema28719_28727,input_checker28720_28728,output_checker28721_28729))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema28718_28726,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28719_28727], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this28736 = this;
return ((function (this28736){
return (function (owner){
return owner.listeners = [];
});})(this28736))
.call(null,this28736);
}), "componentWillUnmount": (function (){
var this28737 = this;
return ((function (this28737){
return (function (owner){
return owner.listeners.map(((function (this28737){
return (function (p1__28735_SHARP_){
return p1__28735_SHARP_.call(null);
});})(this28737))
);
});})(this28737))
.call(null,this28737);
}), "set_listener": (function (target28739,event_type28740,callback28741){
var this28738 = this;
return ((function (this28738){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this28738))
.call(null,this28738,target28739,event_type28740,callback28741);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this28743 = this;
return ((function (this28743){
return (function (owner){
return owner.timeouts = [];
});})(this28743))
.call(null,this28743);
}), "componentWillUnmount": (function (){
var this28744 = this;
return ((function (this28744){
return (function (owner){
return owner.timeouts.map(((function (this28744){
return (function (p1__28742_SHARP_){
return clearTimeout(p1__28742_SHARP_);
});})(this28744))
);
});})(this28744))
.call(null,this28744);
}), "set_timeout": (function (f28746,timeout28747){
var this28745 = this;
return ((function (this28745){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this28745))
.call(null,this28745,f28746,timeout28747);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 * nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__28748 = node__$1.parentNode;
node__$1 = G__28748;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 * `:open?` state to false if the user clicks outside the owning
 * component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 * registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4425__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4425__auto__)){
var listeners = temp__4425__auto__;
cljs.core.map.call(null,((function (listeners,temp__4425__auto__){
return (function (p1__28749_SHARP_){
return p1__28749_SHARP_.call(null);
});})(listeners,temp__4425__auto__))
,listeners);

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 * clicks outside the component's owning dom element OR hits the escape
 * key, the state will jump back to false.
 * 
 * Down the road this may need to register a callback when the state
 * changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this28750 = this;
return ((function (this28750){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this28750))
.call(null,this28750);
}), "componentWillUnmount": (function (){
var this28751 = this;
return ((function (this28751){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this28751))
.call(null,this28751);
}), "isDropdownOpen": (function (){
var this28752 = this;
return ((function (this28752){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this28752))
.call(null,this28752);
}), "setDropdownState": (function (open_QMARK_28754){
var this28753 = this;
return ((function (this28753){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this28753))
.call(null,this28753,open_QMARK_28754);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this28755 = this;
return ((function (this28755){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false], null);
});})(this28755))
.call(null,this28755);
}), "isPanelCollapsed": (function (){
var this28756 = this;
return ((function (this28756){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
});})(this28756))
.call(null,this28756);
}), "toggleCollapsed": (function (){
var this28757 = this;
return ((function (this28757){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this28757))
.call(null,this28757);
})};

//# sourceMappingURL=mixins.js.map