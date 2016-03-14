// Compiled by ClojureScript 0.0-3211 {}
goog.provide('client.decision_support');
goog.require('cljs.core');
goog.require('clojure.set');
client.decision_support.add_dec = (function client$decision_support$add_dec(session,dec_list_key,results_map){
var data_keys = (((new cljs.core.Keyword(null,"item-loc-1","item-loc-1",-1562714434).cljs$core$IFn$_invoke$arity$1(results_map) > new cljs.core.Keyword(null,"item-loc-2","item-loc-2",445906816).cljs$core$IFn$_invoke$arity$1(results_map)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-loc-1","item-loc-1",-1562714434),new cljs.core.Keyword(null,"item-loc-2","item-loc-2",445906816),new cljs.core.Keyword(null,"cat-loc","cat-loc",-1240227045),new cljs.core.Keyword(null,"result","result",1415092211)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-loc-2","item-loc-2",445906816),new cljs.core.Keyword(null,"item-loc-1","item-loc-1",-1562714434),new cljs.core.Keyword(null,"cat-loc","cat-loc",-1240227045),new cljs.core.Keyword(null,"result","result",1415092211)], null));
var results_vec = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__12128__auto__ = ((function (data_keys){
return (function client$decision_support$add_dec_$_iter__34410(s__34411){
return (new cljs.core.LazySeq(null,((function (data_keys){
return (function (){
var s__34411__$1 = s__34411;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34411__$1);
if(temp__4126__auto__){
var s__34411__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34411__$2)){
var c__12126__auto__ = cljs.core.chunk_first.call(null,s__34411__$2);
var size__12127__auto__ = cljs.core.count.call(null,c__12126__auto__);
var b__34413 = cljs.core.chunk_buffer.call(null,size__12127__auto__);
if((function (){var i__34412 = (0);
while(true){
if((i__34412 < size__12127__auto__)){
var values = cljs.core._nth.call(null,c__12126__auto__,i__34412);
cljs.core.chunk_append.call(null,b__34413,values.call(null,results_map));

var G__34414 = (i__34412 + (1));
i__34412 = G__34414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),client$decision_support$add_dec_$_iter__34410.call(null,cljs.core.chunk_rest.call(null,s__34411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),null);
}
} else {
var values = cljs.core.first.call(null,s__34411__$2);
return cljs.core.cons.call(null,values.call(null,results_map),client$decision_support$add_dec_$_iter__34410.call(null,cljs.core.rest.call(null,s__34411__$2)));
}
} else {
return null;
}
break;
}
});})(data_keys))
,null,null));
});})(data_keys))
;
return iter__12128__auto__.call(null,data_keys);
})());
return cljs.core.reset_BANG_.call(null,session,cljs.core.assoc.call(null,cljs.core.deref.call(null,session),dec_list_key,cljs.core.conj.call(null,new cljs.core.Keyword(null,"decision","decision",820953053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,session)),results_vec)));
});
client.decision_support.elements_not_set = (function client$decision_support$elements_not_set(item_size,cat_size,decision_list){
cljs.core.println.call(null,decision_list);

return clojure.set.difference.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__34415_SHARP_){
return ((cljs.core.first.call(null,p1__34415_SHARP_) >= cljs.core.second.call(null,p1__34415_SHARP_))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__34415_SHARP_),cljs.core.second.call(null,p1__34415_SHARP_))));
}),(function (){var iter__12128__auto__ = (function client$decision_support$elements_not_set_$_iter__34425(s__34426){
return (new cljs.core.LazySeq(null,(function (){
var s__34426__$1 = s__34426;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34426__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var item_index = cljs.core.first.call(null,xs__4624__auto__);
var iterys__12124__auto__ = ((function (s__34426__$1,item_index,xs__4624__auto__,temp__4126__auto__){
return (function client$decision_support$elements_not_set_$_iter__34425_$_iter__34427(s__34428){
return (new cljs.core.LazySeq(null,((function (s__34426__$1,item_index,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__34428__$1 = s__34428;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34428__$1);
if(temp__4126__auto____$1){
var xs__4624__auto____$1 = temp__4126__auto____$1;
var item_index_2 = cljs.core.first.call(null,xs__4624__auto____$1);
var iterys__12124__auto__ = ((function (s__34428__$1,s__34426__$1,item_index_2,xs__4624__auto____$1,temp__4126__auto____$1,item_index,xs__4624__auto__,temp__4126__auto__){
return (function client$decision_support$elements_not_set_$_iter__34425_$_iter__34427_$_iter__34429(s__34430){
return (new cljs.core.LazySeq(null,((function (s__34428__$1,s__34426__$1,item_index_2,xs__4624__auto____$1,temp__4126__auto____$1,item_index,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__34430__$1 = s__34430;
while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__34430__$1);
if(temp__4126__auto____$2){
var s__34430__$2 = temp__4126__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34430__$2)){
var c__12126__auto__ = cljs.core.chunk_first.call(null,s__34430__$2);
var size__12127__auto__ = cljs.core.count.call(null,c__12126__auto__);
var b__34432 = cljs.core.chunk_buffer.call(null,size__12127__auto__);
if((function (){var i__34431 = (0);
while(true){
if((i__34431 < size__12127__auto__)){
var cat_index = cljs.core._nth.call(null,c__12126__auto__,i__34431);
cljs.core.chunk_append.call(null,b__34432,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,item_index_2,cat_index], null));

var G__34433 = (i__34431 + (1));
i__34431 = G__34433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34432),client$decision_support$elements_not_set_$_iter__34425_$_iter__34427_$_iter__34429.call(null,cljs.core.chunk_rest.call(null,s__34430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34432),null);
}
} else {
var cat_index = cljs.core.first.call(null,s__34430__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,item_index_2,cat_index], null),client$decision_support$elements_not_set_$_iter__34425_$_iter__34427_$_iter__34429.call(null,cljs.core.rest.call(null,s__34430__$2)));
}
} else {
return null;
}
break;
}
});})(s__34428__$1,s__34426__$1,item_index_2,xs__4624__auto____$1,temp__4126__auto____$1,item_index,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__34428__$1,s__34426__$1,item_index_2,xs__4624__auto____$1,temp__4126__auto____$1,item_index,xs__4624__auto__,temp__4126__auto__))
;
var fs__12125__auto__ = cljs.core.seq.call(null,iterys__12124__auto__.call(null,cljs.core.range.call(null,cat_size)));
if(fs__12125__auto__){
return cljs.core.concat.call(null,fs__12125__auto__,client$decision_support$elements_not_set_$_iter__34425_$_iter__34427.call(null,cljs.core.rest.call(null,s__34428__$1)));
} else {
var G__34434 = cljs.core.rest.call(null,s__34428__$1);
s__34428__$1 = G__34434;
continue;
}
} else {
return null;
}
break;
}
});})(s__34426__$1,item_index,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__34426__$1,item_index,xs__4624__auto__,temp__4126__auto__))
;
var fs__12125__auto__ = cljs.core.seq.call(null,iterys__12124__auto__.call(null,cljs.core.range.call(null,item_size)));
if(fs__12125__auto__){
return cljs.core.concat.call(null,fs__12125__auto__,client$decision_support$elements_not_set_$_iter__34425.call(null,cljs.core.rest.call(null,s__34426__$1)));
} else {
var G__34435 = cljs.core.rest.call(null,s__34426__$1);
s__34426__$1 = G__34435;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12128__auto__.call(null,cljs.core.range.call(null,item_size));
})())),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34416_SHARP_){
return cljs.core.subvec.call(null,p1__34416_SHARP_,(0),(3));
}),decision_list)));
});
client.decision_support.get_dec_value = (function client$decision_support$get_dec_value(item_num_1,item_num_2,cat_num,decision_list){

var vec__34439 = (((item_num_1 < item_num_2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_num_2,item_num_1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_num_1,item_num_2], null));
var large_index = cljs.core.nth.call(null,vec__34439,(0),null);
var small_index = cljs.core.nth.call(null,vec__34439,(1),null);
return cljs.core.first.call(null,cljs.core.map.call(null,((function (vec__34439,large_index,small_index){
return (function (p1__34436_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__34436_SHARP_)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.last.call(null,p1__34436_SHARP_);
}
});})(vec__34439,large_index,small_index))
,small_index,cljs.core.filter.call(null,((function (vec__34439,large_index,small_index){
return (function (p1__34437_SHARP_){
return (cljs.core._EQ_.call(null,large_index,cljs.core.first.call(null,p1__34437_SHARP_))) && (cljs.core._EQ_.call(null,small_index,cljs.core.second.call(null,p1__34437_SHARP_))) && (cljs.core._EQ_.call(null,cat_num,cljs.core.nth.call(null,p1__34437_SHARP_,(2))));
});})(vec__34439,large_index,small_index))
,decision_list)));
});
client.decision_support.next_rand_compare = (function client$decision_support$next_rand_compare(dec_list,item_list,cat_list){

var vec__34441 = cljs.core.rand_nth.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,client.decision_support.elements_not_set.call(null,cljs.core.count.call(null,item_list),cljs.core.count.call(null,cat_list),dec_list)));
var it_n_1 = cljs.core.nth.call(null,vec__34441,(0),null);
var it_n_2 = cljs.core.nth.call(null,vec__34441,(1),null);
var cat_n = cljs.core.nth.call(null,vec__34441,(2),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item-loc-1","item-loc-1",-1562714434),it_n_1,new cljs.core.Keyword(null,"item-name-1","item-name-1",53342375),cljs.core.nth.call(null,item_list,it_n_1),new cljs.core.Keyword(null,"item-loc-2","item-loc-2",445906816),it_n_2,new cljs.core.Keyword(null,"item-name-2","item-name-2",-1835090034),cljs.core.nth.call(null,item_list,it_n_2),new cljs.core.Keyword(null,"cat-loc","cat-loc",-1240227045),cat_n,new cljs.core.Keyword(null,"cat-name","cat-name",-791588548),cljs.core.nth.call(null,cat_list,cat_n)], null);
});

//# sourceMappingURL=decision_support.js.map