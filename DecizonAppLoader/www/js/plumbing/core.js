// Compiled by ClojureScript 0.0-3211 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__23568 = arguments.length;
switch (G__23568) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11463__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq23561){
var G__23562 = cljs.core.first.call(null,seq23561);
var seq23561__$1 = cljs.core.next.call(null,seq23561);
var G__23563 = cljs.core.first.call(null,seq23561__$1);
var seq23561__$2 = cljs.core.next.call(null,seq23561__$1);
var G__23564 = cljs.core.first.call(null,seq23561__$2);
var seq23561__$3 = cljs.core.next.call(null,seq23561__$2);
var G__23565 = cljs.core.first.call(null,seq23561__$3);
var seq23561__$4 = cljs.core.next.call(null,seq23561__$3);
var G__23566 = cljs.core.first.call(null,seq23561__$4);
var seq23561__$5 = cljs.core.next.call(null,seq23561__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__23562,G__23563,G__23564,G__23565,G__23566,seq23561__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15799__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23578_23584 = cljs.core.seq.call(null,m);
var chunk__23579_23585 = null;
var count__23580_23586 = (0);
var i__23581_23587 = (0);
while(true){
if((i__23581_23587 < count__23580_23586)){
var vec__23582_23588 = cljs.core._nth.call(null,chunk__23579_23585,i__23581_23587);
var k_23589 = cljs.core.nth.call(null,vec__23582_23588,(0),null);
var v_23590 = cljs.core.nth.call(null,vec__23582_23588,(1),null);
var m23577_23591 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23577_23591,k_23589,f.call(null,v_23590)));

var G__23592 = seq__23578_23584;
var G__23593 = chunk__23579_23585;
var G__23594 = count__23580_23586;
var G__23595 = (i__23581_23587 + (1));
seq__23578_23584 = G__23592;
chunk__23579_23585 = G__23593;
count__23580_23586 = G__23594;
i__23581_23587 = G__23595;
continue;
} else {
var temp__4126__auto___23596 = cljs.core.seq.call(null,seq__23578_23584);
if(temp__4126__auto___23596){
var seq__23578_23597__$1 = temp__4126__auto___23596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23578_23597__$1)){
var c__11197__auto___23598 = cljs.core.chunk_first.call(null,seq__23578_23597__$1);
var G__23599 = cljs.core.chunk_rest.call(null,seq__23578_23597__$1);
var G__23600 = c__11197__auto___23598;
var G__23601 = cljs.core.count.call(null,c__11197__auto___23598);
var G__23602 = (0);
seq__23578_23584 = G__23599;
chunk__23579_23585 = G__23600;
count__23580_23586 = G__23601;
i__23581_23587 = G__23602;
continue;
} else {
var vec__23583_23603 = cljs.core.first.call(null,seq__23578_23597__$1);
var k_23604 = cljs.core.nth.call(null,vec__23583_23603,(0),null);
var v_23605 = cljs.core.nth.call(null,vec__23583_23603,(1),null);
var m23577_23606 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23577_23606,k_23604,f.call(null,v_23605)));

var G__23607 = cljs.core.next.call(null,seq__23578_23597__$1);
var G__23608 = null;
var G__23609 = (0);
var G__23610 = (0);
seq__23578_23584 = G__23607;
chunk__23579_23585 = G__23608;
count__23580_23586 = G__23609;
i__23581_23587 = G__23610;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15799__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15799__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23619_23625 = cljs.core.seq.call(null,m);
var chunk__23620_23626 = null;
var count__23621_23627 = (0);
var i__23622_23628 = (0);
while(true){
if((i__23622_23628 < count__23621_23627)){
var vec__23623_23629 = cljs.core._nth.call(null,chunk__23620_23626,i__23622_23628);
var k_23630 = cljs.core.nth.call(null,vec__23623_23629,(0),null);
var v_23631 = cljs.core.nth.call(null,vec__23623_23629,(1),null);
var m23618_23632 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23618_23632,f.call(null,k_23630),v_23631));

var G__23633 = seq__23619_23625;
var G__23634 = chunk__23620_23626;
var G__23635 = count__23621_23627;
var G__23636 = (i__23622_23628 + (1));
seq__23619_23625 = G__23633;
chunk__23620_23626 = G__23634;
count__23621_23627 = G__23635;
i__23622_23628 = G__23636;
continue;
} else {
var temp__4126__auto___23637 = cljs.core.seq.call(null,seq__23619_23625);
if(temp__4126__auto___23637){
var seq__23619_23638__$1 = temp__4126__auto___23637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23619_23638__$1)){
var c__11197__auto___23639 = cljs.core.chunk_first.call(null,seq__23619_23638__$1);
var G__23640 = cljs.core.chunk_rest.call(null,seq__23619_23638__$1);
var G__23641 = c__11197__auto___23639;
var G__23642 = cljs.core.count.call(null,c__11197__auto___23639);
var G__23643 = (0);
seq__23619_23625 = G__23640;
chunk__23620_23626 = G__23641;
count__23621_23627 = G__23642;
i__23622_23628 = G__23643;
continue;
} else {
var vec__23624_23644 = cljs.core.first.call(null,seq__23619_23638__$1);
var k_23645 = cljs.core.nth.call(null,vec__23624_23644,(0),null);
var v_23646 = cljs.core.nth.call(null,vec__23624_23644,(1),null);
var m23618_23647 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23618_23647,f.call(null,k_23645),v_23646));

var G__23648 = cljs.core.next.call(null,seq__23619_23638__$1);
var G__23649 = null;
var G__23650 = (0);
var G__23651 = (0);
seq__23619_23625 = G__23648;
chunk__23620_23626 = G__23649;
count__23621_23627 = G__23650;
i__23622_23628 = G__23651;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15799__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__15799__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23658_23662 = cljs.core.seq.call(null,ks);
var chunk__23659_23663 = null;
var count__23660_23664 = (0);
var i__23661_23665 = (0);
while(true){
if((i__23661_23665 < count__23660_23664)){
var k_23666 = cljs.core._nth.call(null,chunk__23659_23663,i__23661_23665);
var m23657_23667 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23657_23667,k_23666,f.call(null,k_23666)));

var G__23668 = seq__23658_23662;
var G__23669 = chunk__23659_23663;
var G__23670 = count__23660_23664;
var G__23671 = (i__23661_23665 + (1));
seq__23658_23662 = G__23668;
chunk__23659_23663 = G__23669;
count__23660_23664 = G__23670;
i__23661_23665 = G__23671;
continue;
} else {
var temp__4126__auto___23672 = cljs.core.seq.call(null,seq__23658_23662);
if(temp__4126__auto___23672){
var seq__23658_23673__$1 = temp__4126__auto___23672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23658_23673__$1)){
var c__11197__auto___23674 = cljs.core.chunk_first.call(null,seq__23658_23673__$1);
var G__23675 = cljs.core.chunk_rest.call(null,seq__23658_23673__$1);
var G__23676 = c__11197__auto___23674;
var G__23677 = cljs.core.count.call(null,c__11197__auto___23674);
var G__23678 = (0);
seq__23658_23662 = G__23675;
chunk__23659_23663 = G__23676;
count__23660_23664 = G__23677;
i__23661_23665 = G__23678;
continue;
} else {
var k_23679 = cljs.core.first.call(null,seq__23658_23673__$1);
var m23657_23680 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23657_23680,k_23679,f.call(null,k_23679)));

var G__23681 = cljs.core.next.call(null,seq__23658_23673__$1);
var G__23682 = null;
var G__23683 = (0);
var G__23684 = (0);
seq__23658_23662 = G__23681;
chunk__23659_23663 = G__23682;
count__23660_23664 = G__23683;
i__23661_23665 = G__23684;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15799__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__15799__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23691_23695 = cljs.core.seq.call(null,vs);
var chunk__23692_23696 = null;
var count__23693_23697 = (0);
var i__23694_23698 = (0);
while(true){
if((i__23694_23698 < count__23693_23697)){
var v_23699 = cljs.core._nth.call(null,chunk__23692_23696,i__23694_23698);
var m23690_23700 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23690_23700,f.call(null,v_23699),v_23699));

var G__23701 = seq__23691_23695;
var G__23702 = chunk__23692_23696;
var G__23703 = count__23693_23697;
var G__23704 = (i__23694_23698 + (1));
seq__23691_23695 = G__23701;
chunk__23692_23696 = G__23702;
count__23693_23697 = G__23703;
i__23694_23698 = G__23704;
continue;
} else {
var temp__4126__auto___23705 = cljs.core.seq.call(null,seq__23691_23695);
if(temp__4126__auto___23705){
var seq__23691_23706__$1 = temp__4126__auto___23705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23691_23706__$1)){
var c__11197__auto___23707 = cljs.core.chunk_first.call(null,seq__23691_23706__$1);
var G__23708 = cljs.core.chunk_rest.call(null,seq__23691_23706__$1);
var G__23709 = c__11197__auto___23707;
var G__23710 = cljs.core.count.call(null,c__11197__auto___23707);
var G__23711 = (0);
seq__23691_23695 = G__23708;
chunk__23692_23696 = G__23709;
count__23693_23697 = G__23710;
i__23694_23698 = G__23711;
continue;
} else {
var v_23712 = cljs.core.first.call(null,seq__23691_23706__$1);
var m23690_23713 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23690_23713,f.call(null,v_23712),v_23712));

var G__23714 = cljs.core.next.call(null,seq__23691_23706__$1);
var G__23715 = null;
var G__23716 = (0);
var G__23717 = (0);
seq__23691_23695 = G__23714;
chunk__23692_23696 = G__23715;
count__23693_23697 = G__23716;
i__23694_23698 = G__23717;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15799__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__23718){
var vec__23720 = p__23718;
var k = cljs.core.nth.call(null,vec__23720,(0),null);
var ks = cljs.core.nthnext.call(null,vec__23720,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__10400__auto__ = ks;
if(cljs.core.truth_(and__10400__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__15799__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23729_23735 = cljs.core.seq.call(null,x);
var chunk__23730_23736 = null;
var count__23731_23737 = (0);
var i__23732_23738 = (0);
while(true){
if((i__23732_23738 < count__23731_23737)){
var vec__23733_23739 = cljs.core._nth.call(null,chunk__23730_23736,i__23732_23738);
var k_23740 = cljs.core.nth.call(null,vec__23733_23739,(0),null);
var v_23741 = cljs.core.nth.call(null,vec__23733_23739,(1),null);
var m23728_23742 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23728_23742,((typeof k_23740 === 'string')?cljs.core.keyword.call(null,k_23740):k_23740),plumbing$core$keywordize_map.call(null,v_23741)));

var G__23743 = seq__23729_23735;
var G__23744 = chunk__23730_23736;
var G__23745 = count__23731_23737;
var G__23746 = (i__23732_23738 + (1));
seq__23729_23735 = G__23743;
chunk__23730_23736 = G__23744;
count__23731_23737 = G__23745;
i__23732_23738 = G__23746;
continue;
} else {
var temp__4126__auto___23747 = cljs.core.seq.call(null,seq__23729_23735);
if(temp__4126__auto___23747){
var seq__23729_23748__$1 = temp__4126__auto___23747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23729_23748__$1)){
var c__11197__auto___23749 = cljs.core.chunk_first.call(null,seq__23729_23748__$1);
var G__23750 = cljs.core.chunk_rest.call(null,seq__23729_23748__$1);
var G__23751 = c__11197__auto___23749;
var G__23752 = cljs.core.count.call(null,c__11197__auto___23749);
var G__23753 = (0);
seq__23729_23735 = G__23750;
chunk__23730_23736 = G__23751;
count__23731_23737 = G__23752;
i__23732_23738 = G__23753;
continue;
} else {
var vec__23734_23754 = cljs.core.first.call(null,seq__23729_23748__$1);
var k_23755 = cljs.core.nth.call(null,vec__23734_23754,(0),null);
var v_23756 = cljs.core.nth.call(null,vec__23734_23754,(1),null);
var m23728_23757 = cljs.core.deref.call(null,m_atom__15799__auto__);
cljs.core.reset_BANG_.call(null,m_atom__15799__auto__,cljs.core.assoc_BANG_.call(null,m23728_23757,((typeof k_23755 === 'string')?cljs.core.keyword.call(null,k_23755):k_23755),plumbing$core$keywordize_map.call(null,v_23756)));

var G__23758 = cljs.core.next.call(null,seq__23729_23748__$1);
var G__23759 = null;
var G__23760 = (0);
var G__23761 = (0);
seq__23729_23735 = G__23758;
chunk__23730_23736 = G__23759;
count__23731_23737 = G__23760;
i__23732_23738 = G__23761;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__15799__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__15880__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__15880__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__23762 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23763 = cljs.core.next.call(null,ks);
m = G__23762;
ks = G__23763;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__11452__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11452__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__10412__auto__ = m;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__11166__auto__ = (function plumbing$core$iter__23766(s__23767){
return (new cljs.core.LazySeq(null,(function (){
var s__23767__$1 = s__23767;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23767__$1);
if(temp__4126__auto__){
var s__23767__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23767__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23767__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23769 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23768 = (0);
while(true){
if((i__23768 < size__11165__auto__)){
var vec__23772 = cljs.core._nth.call(null,c__11164__auto__,i__23768);
var k = cljs.core.nth.call(null,vec__23772,(0),null);
var v = cljs.core.nth.call(null,vec__23772,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23774 = (i__23768 + (1));
i__23768 = G__23774;
continue;
} else {
var G__23775 = (i__23768 + (1));
i__23768 = G__23775;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23769),plumbing$core$iter__23766.call(null,cljs.core.chunk_rest.call(null,s__23767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23769),null);
}
} else {
var vec__23773 = cljs.core.first.call(null,s__23767__$2);
var k = cljs.core.nth.call(null,vec__23773,(0),null);
var v = cljs.core.nth.call(null,vec__23773,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__23766.call(null,cljs.core.rest.call(null,s__23767__$2)));
} else {
var G__23776 = cljs.core.rest.call(null,s__23767__$2);
s__23767__$1 = G__23776;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11166__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq23764){
var G__23765 = cljs.core.first.call(null,seq23764);
var seq23764__$1 = cljs.core.next.call(null,seq23764);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__23765,seq23764__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__11452__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11452__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq23777){
var G__23778 = cljs.core.first.call(null,seq23777);
var seq23777__$1 = cljs.core.next.call(null,seq23777);
var G__23779 = cljs.core.first.call(null,seq23777__$1);
var seq23777__$2 = cljs.core.next.call(null,seq23777__$1);
var G__23780 = cljs.core.first.call(null,seq23777__$2);
var seq23777__$3 = cljs.core.next.call(null,seq23777__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__23778,G__23779,G__23780,seq23777__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__23782 = arguments.length;
switch (G__23782) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__11166__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__23788(s__23789){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__23789__$1 = s__23789;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23789__$1);
if(temp__4126__auto__){
var s__23789__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23789__$2)){
var c__11164__auto__ = cljs.core.chunk_first.call(null,s__23789__$2);
var size__11165__auto__ = cljs.core.count.call(null,c__11164__auto__);
var b__23791 = cljs.core.chunk_buffer.call(null,size__11165__auto__);
if((function (){var i__23790 = (0);
while(true){
if((i__23790 < size__11165__auto__)){
var x = cljs.core._nth.call(null,c__11164__auto__,i__23790);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__23791,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__23792 = (i__23790 + (1));
i__23790 = G__23792;
continue;
} else {
var G__23793 = (i__23790 + (1));
i__23790 = G__23793;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23791),plumbing$core$distinct_by_$_iter__23788.call(null,cljs.core.chunk_rest.call(null,s__23789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23791),null);
}
} else {
var x = cljs.core.first.call(null,s__23789__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__23788.call(null,cljs.core.rest.call(null,s__23789__$2)));
} else {
var G__23794 = cljs.core.rest.call(null,s__23789__$2);
s__23789__$1 = G__23794;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__11166__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__11452__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__11452__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq23795){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23795));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__23800 = arguments.length;
switch (G__23800) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11463__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__23802 = plumbing.core.conj_when.call(null,coll,x);
var G__23803 = cljs.core.first.call(null,xs);
var G__23804 = cljs.core.next.call(null,xs);
coll = G__23802;
x = G__23803;
xs = G__23804;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq23796){
var G__23797 = cljs.core.first.call(null,seq23796);
var seq23796__$1 = cljs.core.next.call(null,seq23796);
var G__23798 = cljs.core.first.call(null,seq23796__$1);
var seq23796__$2 = cljs.core.next.call(null,seq23796__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__23797,G__23798,seq23796__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__23810 = arguments.length;
switch (G__23810) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11463__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__23805_SHARP_){
return cljs.core.apply.call(null,f,p1__23805_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq23806){
var G__23807 = cljs.core.first.call(null,seq23806);
var seq23806__$1 = cljs.core.next.call(null,seq23806);
var G__23808 = cljs.core.first.call(null,seq23806__$1);
var seq23806__$2 = cljs.core.next.call(null,seq23806__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23807,G__23808,seq23806__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__23816 = arguments.length;
switch (G__23816) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11463__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq23812){
var G__23813 = cljs.core.first.call(null,seq23812);
var seq23812__$1 = cljs.core.next.call(null,seq23812);
var G__23814 = cljs.core.first.call(null,seq23812__$1);
var seq23812__$2 = cljs.core.next.call(null,seq23812__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23813,G__23814,seq23812__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map