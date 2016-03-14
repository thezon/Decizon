// Compiled by ClojureScript 0.0-3291 {}
goog.provide('client.decision_support');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('client.session_mang');
goog.require('client.tools');
client.decision_support.add_dec = (function client$decision_support$add_dec(results_map){
var verified_results_map = (((new cljs.core.Keyword(null,"item-one","item-one",925867048).cljs$core$IFn$_invoke$arity$1(results_map) > new cljs.core.Keyword(null,"item-two","item-two",234540201).cljs$core$IFn$_invoke$arity$1(results_map)))?results_map:cljs.core.assoc.call(null,results_map,new cljs.core.Keyword(null,"item-one","item-one",925867048),new cljs.core.Keyword(null,"item-two","item-two",234540201).cljs$core$IFn$_invoke$arity$1(results_map),new cljs.core.Keyword(null,"item-two","item-two",234540201),new cljs.core.Keyword(null,"item-one","item-one",925867048).cljs$core$IFn$_invoke$arity$1(results_map)));
return client.session_mang.add_decision_result.call(null,verified_results_map);
});
client.decision_support.elements_not_set = (function client$decision_support$elements_not_set(item_size,cat_size,decision_list){
cljs.core.println.call(null,cljs.core.map.call(null,(function (p1__20531_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-one","item-one",925867048).cljs$core$IFn$_invoke$arity$1(p1__20531_SHARP_),new cljs.core.Keyword(null,"item-two","item-two",234540201).cljs$core$IFn$_invoke$arity$1(p1__20531_SHARP_),new cljs.core.Keyword(null,"catagory","catagory",1351046609).cljs$core$IFn$_invoke$arity$1(p1__20531_SHARP_)],null));
}),decision_list));

return clojure.set.difference.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p1__20532_SHARP_){
return ((cljs.core.first.call(null,p1__20532_SHARP_) >= cljs.core.second.call(null,p1__20532_SHARP_))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__20532_SHARP_),cljs.core.second.call(null,p1__20532_SHARP_))));
}),(function (){var iter__12095__auto__ = (function client$decision_support$elements_not_set_$_iter__20542(s__20543){
return (new cljs.core.LazySeq(null,(function (){
var s__20543__$1 = s__20543;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20543__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var item_index = cljs.core.first.call(null,xs__4977__auto__);
var iterys__12091__auto__ = ((function (s__20543__$1,item_index,xs__4977__auto__,temp__4425__auto__){
return (function client$decision_support$elements_not_set_$_iter__20542_$_iter__20544(s__20545){
return (new cljs.core.LazySeq(null,((function (s__20543__$1,item_index,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__20545__$1 = s__20545;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20545__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var item_index_2 = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__12091__auto__ = ((function (s__20545__$1,s__20543__$1,item_index_2,xs__4977__auto____$1,temp__4425__auto____$1,item_index,xs__4977__auto__,temp__4425__auto__){
return (function client$decision_support$elements_not_set_$_iter__20542_$_iter__20544_$_iter__20546(s__20547){
return (new cljs.core.LazySeq(null,((function (s__20545__$1,s__20543__$1,item_index_2,xs__4977__auto____$1,temp__4425__auto____$1,item_index,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__20547__$1 = s__20547;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__20547__$1);
if(temp__4425__auto____$2){
var s__20547__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20547__$2)){
var c__12093__auto__ = cljs.core.chunk_first.call(null,s__20547__$2);
var size__12094__auto__ = cljs.core.count.call(null,c__12093__auto__);
var b__20549 = cljs.core.chunk_buffer.call(null,size__12094__auto__);
if((function (){var i__20548 = (0);
while(true){
if((i__20548 < size__12094__auto__)){
var cat_index = cljs.core._nth.call(null,c__12093__auto__,i__20548);
cljs.core.chunk_append.call(null,b__20549,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,item_index_2,cat_index], null));

var G__20550 = (i__20548 + (1));
i__20548 = G__20550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20549),client$decision_support$elements_not_set_$_iter__20542_$_iter__20544_$_iter__20546.call(null,cljs.core.chunk_rest.call(null,s__20547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20549),null);
}
} else {
var cat_index = cljs.core.first.call(null,s__20547__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_index,item_index_2,cat_index], null),client$decision_support$elements_not_set_$_iter__20542_$_iter__20544_$_iter__20546.call(null,cljs.core.rest.call(null,s__20547__$2)));
}
} else {
return null;
}
break;
}
});})(s__20545__$1,s__20543__$1,item_index_2,xs__4977__auto____$1,temp__4425__auto____$1,item_index,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__20545__$1,s__20543__$1,item_index_2,xs__4977__auto____$1,temp__4425__auto____$1,item_index,xs__4977__auto__,temp__4425__auto__))
;
var fs__12092__auto__ = cljs.core.seq.call(null,iterys__12091__auto__.call(null,cljs.core.range.call(null,cat_size)));
if(fs__12092__auto__){
return cljs.core.concat.call(null,fs__12092__auto__,client$decision_support$elements_not_set_$_iter__20542_$_iter__20544.call(null,cljs.core.rest.call(null,s__20545__$1)));
} else {
var G__20551 = cljs.core.rest.call(null,s__20545__$1);
s__20545__$1 = G__20551;
continue;
}
} else {
return null;
}
break;
}
});})(s__20543__$1,item_index,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__20543__$1,item_index,xs__4977__auto__,temp__4425__auto__))
;
var fs__12092__auto__ = cljs.core.seq.call(null,iterys__12091__auto__.call(null,cljs.core.range.call(null,item_size)));
if(fs__12092__auto__){
return cljs.core.concat.call(null,fs__12092__auto__,client$decision_support$elements_not_set_$_iter__20542.call(null,cljs.core.rest.call(null,s__20543__$1)));
} else {
var G__20552 = cljs.core.rest.call(null,s__20543__$1);
s__20543__$1 = G__20552;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12095__auto__.call(null,cljs.core.range.call(null,item_size));
})())),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__20533_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"item-one","item-one",925867048).cljs$core$IFn$_invoke$arity$1(p1__20533_SHARP_),new cljs.core.Keyword(null,"item-two","item-two",234540201).cljs$core$IFn$_invoke$arity$1(p1__20533_SHARP_),new cljs.core.Keyword(null,"catagory","catagory",1351046609).cljs$core$IFn$_invoke$arity$1(p1__20533_SHARP_)],null));
}),decision_list)));
});
client.decision_support.next_rand_compare = (function client$decision_support$next_rand_compare(dec_list,item_list,cat_list){

var vec__20554 = cljs.core.rand_nth.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,client.decision_support.elements_not_set.call(null,cljs.core.count.call(null,item_list),cljs.core.count.call(null,cat_list),dec_list)));
var it_n_1 = cljs.core.nth.call(null,vec__20554,(0),null);
var it_n_2 = cljs.core.nth.call(null,vec__20554,(1),null);
var cat_n = cljs.core.nth.call(null,vec__20554,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item-name-one","item-name-one",-1203232170),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item_list,it_n_1)),new cljs.core.Keyword(null,"item-name-two","item-name-two",674206167),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,item_list,it_n_2)),new cljs.core.Keyword(null,"category-name","category-name",-1615496579),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cat_list,cat_n))], null),(new client.tools.decision_result(it_n_1,it_n_2,cat_n,null,null,null,null))], null);
});

//# sourceMappingURL=decision_support.js.map