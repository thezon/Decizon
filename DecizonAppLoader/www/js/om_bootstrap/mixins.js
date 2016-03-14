// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('cljs.core.async');
var ufv___20586 = schema.utils.use_fn_validation;
var output_schema20579_20587 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema20580_20588 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker20581_20589 = schema.core.checker.call(null,input_schema20580_20588);
var output_checker20582_20590 = schema.core.checker.call(null,output_schema20579_20587);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 * Returns: (s/=> s/Any)
 * 
 * Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590){
return (function om_bootstrap$mixins$event_listener(G__20583,G__20584,G__20585){
var validate__11904__auto__ = ufv___20586.get_cell();
if(cljs.core.truth_(validate__11904__auto__)){
var args__11905__auto___20591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20583,G__20584,G__20585], null);
var temp__4126__auto___20592 = input_checker20581_20589.call(null,args__11905__auto___20591);
if(cljs.core.truth_(temp__4126__auto___20592)){
var error__11906__auto___20593 = temp__4126__auto___20592;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11906__auto___20593)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20593,new cljs.core.Keyword(null,"value","value",305978217),args__11905__auto___20591,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20580_20588,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__11907__auto__ = (function (){var target = G__20583;
var event_type = G__20584;
var callback = G__20585;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590))
} else {
return ((function (validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590){
return (function (){
return null;
});
;})(validate__11904__auto__,ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590))

}
}
break;
}
})();
if(cljs.core.truth_(validate__11904__auto__)){
var temp__4126__auto___20594 = output_checker20582_20590.call(null,o__11907__auto__);
if(cljs.core.truth_(temp__4126__auto___20594)){
var error__11906__auto___20595 = temp__4126__auto___20594;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__11906__auto___20595)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__11906__auto___20595,new cljs.core.Keyword(null,"value","value",305978217),o__11907__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20579_20587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__11907__auto__;
});})(ufv___20586,output_schema20579_20587,input_schema20580_20588,input_checker20581_20589,output_checker20582_20590))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema20579_20587,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20580_20588], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target20600,event_type20601,callback20602){
var this20599 = this;
return ((function (this20599){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this20599))
.call(null,this20599,target20600,event_type20601,callback20602);
}), "componentWillUnmount": (function (){
var this20598 = this;
return ((function (this20598){
return (function (owner){
return owner.listeners.map(((function (this20598){
return (function (p1__20596_SHARP_){
return p1__20596_SHARP_.call(null);
});})(this20598))
);
});})(this20598))
.call(null,this20598);
}), "componentWillMount": (function (){
var this20597 = this;
return ((function (this20597){
return (function (owner){
return owner.listeners = [];
});})(this20597))
.call(null,this20597);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f20607,timeout20608){
var this20606 = this;
return ((function (this20606){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this20606))
.call(null,this20606,f20607,timeout20608);
}), "componentWillUnmount": (function (){
var this20605 = this;
return ((function (this20605){
return (function (owner){
return owner.timeouts.map(((function (this20605){
return (function (p1__20603_SHARP_){
return clearTimeout(p1__20603_SHARP_);
});})(this20605))
);
});})(this20605))
.call(null,this20605);
}), "componentWillMount": (function (){
var this20604 = this;
return ((function (this20604){
return (function (owner){
return owner.timeouts = [];
});})(this20604))
.call(null,this20604);
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
var G__20609 = node__$1.parentNode;
node__$1 = G__20609;
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
var temp__4126__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4126__auto__)){
var listeners = temp__4126__auto__;
cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__20610_SHARP_){
return p1__20610_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
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
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_20615){
var this20614 = this;
return ((function (this20614){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this20614))
.call(null,this20614,open_QMARK_20615);
}), "isDropdownOpen": (function (){
var this20613 = this;
return ((function (this20613){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this20613))
.call(null,this20613);
}), "componentWillUnmount": (function (){
var this20612 = this;
return ((function (this20612){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this20612))
.call(null,this20612);
}), "getInitialState": (function (){
var this20611 = this;
return ((function (this20611){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this20611))
.call(null,this20611);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"toggleCollapsed": (function (){
var this20618 = this;
return ((function (this20618){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this20618))
.call(null,this20618);
}), "isPanelCollapsed": (function (){
var this20617 = this;
return ((function (this20617){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
});})(this20617))
.call(null,this20617);
}), "getInitialState": (function (){
var this20616 = this;
return ((function (this20616){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false], null);
});})(this20616))
.call(null,this20616);
})};

//# sourceMappingURL=mixins.js.map