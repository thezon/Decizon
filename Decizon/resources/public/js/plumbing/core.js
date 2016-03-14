// Compiled by ClojureScript 0.0-3291 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
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
var G__31707 = arguments.length;
switch (G__31707) {
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
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__12399__auto__);

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

plumbing.core.update.cljs$lang$applyTo = (function (seq31700){
var G__31701 = cljs.core.first.call(null,seq31700);
var seq31700__$1 = cljs.core.next.call(null,seq31700);
var G__31702 = cljs.core.first.call(null,seq31700__$1);
var seq31700__$2 = cljs.core.next.call(null,seq31700__$1);
var G__31703 = cljs.core.first.call(null,seq31700__$2);
var seq31700__$3 = cljs.core.next.call(null,seq31700__$2);
var G__31704 = cljs.core.first.call(null,seq31700__$3);
var seq31700__$4 = cljs.core.next.call(null,seq31700__$3);
var G__31705 = cljs.core.first.call(null,seq31700__$4);
var seq31700__$5 = cljs.core.next.call(null,seq31700__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__31701,G__31702,G__31703,G__31704,G__31705,seq31700__$5);
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
var m_atom__21227__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__31717_31723 = cljs.core.seq.call(null,m);
var chunk__31718_31724 = null;
var count__31719_31725 = (0);
var i__31720_31726 = (0);
while(true){
if((i__31720_31726 < count__31719_31725)){
var vec__31721_31727 = cljs.core._nth.call(null,chunk__31718_31724,i__31720_31726);
var k_31728 = cljs.core.nth.call(null,vec__31721_31727,(0),null);
var v_31729 = cljs.core.nth.call(null,vec__31721_31727,(1),null);
var m31716_31730 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31716_31730,k_31728,f.call(null,v_31729)));

var G__31731 = seq__31717_31723;
var G__31732 = chunk__31718_31724;
var G__31733 = count__31719_31725;
var G__31734 = (i__31720_31726 + (1));
seq__31717_31723 = G__31731;
chunk__31718_31724 = G__31732;
count__31719_31725 = G__31733;
i__31720_31726 = G__31734;
continue;
} else {
var temp__4425__auto___31735 = cljs.core.seq.call(null,seq__31717_31723);
if(temp__4425__auto___31735){
var seq__31717_31736__$1 = temp__4425__auto___31735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31717_31736__$1)){
var c__12133__auto___31737 = cljs.core.chunk_first.call(null,seq__31717_31736__$1);
var G__31738 = cljs.core.chunk_rest.call(null,seq__31717_31736__$1);
var G__31739 = c__12133__auto___31737;
var G__31740 = cljs.core.count.call(null,c__12133__auto___31737);
var G__31741 = (0);
seq__31717_31723 = G__31738;
chunk__31718_31724 = G__31739;
count__31719_31725 = G__31740;
i__31720_31726 = G__31741;
continue;
} else {
var vec__31722_31742 = cljs.core.first.call(null,seq__31717_31736__$1);
var k_31743 = cljs.core.nth.call(null,vec__31722_31742,(0),null);
var v_31744 = cljs.core.nth.call(null,vec__31722_31742,(1),null);
var m31716_31745 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31716_31745,k_31743,f.call(null,v_31744)));

var G__31746 = cljs.core.next.call(null,seq__31717_31736__$1);
var G__31747 = null;
var G__31748 = (0);
var G__31749 = (0);
seq__31717_31723 = G__31746;
chunk__31718_31724 = G__31747;
count__31719_31725 = G__31748;
i__31720_31726 = G__31749;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21227__auto__));

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
var m_atom__21227__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__31758_31764 = cljs.core.seq.call(null,m);
var chunk__31759_31765 = null;
var count__31760_31766 = (0);
var i__31761_31767 = (0);
while(true){
if((i__31761_31767 < count__31760_31766)){
var vec__31762_31768 = cljs.core._nth.call(null,chunk__31759_31765,i__31761_31767);
var k_31769 = cljs.core.nth.call(null,vec__31762_31768,(0),null);
var v_31770 = cljs.core.nth.call(null,vec__31762_31768,(1),null);
var m31757_31771 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31757_31771,f.call(null,k_31769),v_31770));

var G__31772 = seq__31758_31764;
var G__31773 = chunk__31759_31765;
var G__31774 = count__31760_31766;
var G__31775 = (i__31761_31767 + (1));
seq__31758_31764 = G__31772;
chunk__31759_31765 = G__31773;
count__31760_31766 = G__31774;
i__31761_31767 = G__31775;
continue;
} else {
var temp__4425__auto___31776 = cljs.core.seq.call(null,seq__31758_31764);
if(temp__4425__auto___31776){
var seq__31758_31777__$1 = temp__4425__auto___31776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31758_31777__$1)){
var c__12133__auto___31778 = cljs.core.chunk_first.call(null,seq__31758_31777__$1);
var G__31779 = cljs.core.chunk_rest.call(null,seq__31758_31777__$1);
var G__31780 = c__12133__auto___31778;
var G__31781 = cljs.core.count.call(null,c__12133__auto___31778);
var G__31782 = (0);
seq__31758_31764 = G__31779;
chunk__31759_31765 = G__31780;
count__31760_31766 = G__31781;
i__31761_31767 = G__31782;
continue;
} else {
var vec__31763_31783 = cljs.core.first.call(null,seq__31758_31777__$1);
var k_31784 = cljs.core.nth.call(null,vec__31763_31783,(0),null);
var v_31785 = cljs.core.nth.call(null,vec__31763_31783,(1),null);
var m31757_31786 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31757_31786,f.call(null,k_31784),v_31785));

var G__31787 = cljs.core.next.call(null,seq__31758_31777__$1);
var G__31788 = null;
var G__31789 = (0);
var G__31790 = (0);
seq__31758_31764 = G__31787;
chunk__31759_31765 = G__31788;
count__31760_31766 = G__31789;
i__31761_31767 = G__31790;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21227__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__21227__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__31797_31801 = cljs.core.seq.call(null,ks);
var chunk__31798_31802 = null;
var count__31799_31803 = (0);
var i__31800_31804 = (0);
while(true){
if((i__31800_31804 < count__31799_31803)){
var k_31805 = cljs.core._nth.call(null,chunk__31798_31802,i__31800_31804);
var m31796_31806 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31796_31806,k_31805,f.call(null,k_31805)));

var G__31807 = seq__31797_31801;
var G__31808 = chunk__31798_31802;
var G__31809 = count__31799_31803;
var G__31810 = (i__31800_31804 + (1));
seq__31797_31801 = G__31807;
chunk__31798_31802 = G__31808;
count__31799_31803 = G__31809;
i__31800_31804 = G__31810;
continue;
} else {
var temp__4425__auto___31811 = cljs.core.seq.call(null,seq__31797_31801);
if(temp__4425__auto___31811){
var seq__31797_31812__$1 = temp__4425__auto___31811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31797_31812__$1)){
var c__12133__auto___31813 = cljs.core.chunk_first.call(null,seq__31797_31812__$1);
var G__31814 = cljs.core.chunk_rest.call(null,seq__31797_31812__$1);
var G__31815 = c__12133__auto___31813;
var G__31816 = cljs.core.count.call(null,c__12133__auto___31813);
var G__31817 = (0);
seq__31797_31801 = G__31814;
chunk__31798_31802 = G__31815;
count__31799_31803 = G__31816;
i__31800_31804 = G__31817;
continue;
} else {
var k_31818 = cljs.core.first.call(null,seq__31797_31812__$1);
var m31796_31819 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31796_31819,k_31818,f.call(null,k_31818)));

var G__31820 = cljs.core.next.call(null,seq__31797_31812__$1);
var G__31821 = null;
var G__31822 = (0);
var G__31823 = (0);
seq__31797_31801 = G__31820;
chunk__31798_31802 = G__31821;
count__31799_31803 = G__31822;
i__31800_31804 = G__31823;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21227__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__21227__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__31830_31834 = cljs.core.seq.call(null,vs);
var chunk__31831_31835 = null;
var count__31832_31836 = (0);
var i__31833_31837 = (0);
while(true){
if((i__31833_31837 < count__31832_31836)){
var v_31838 = cljs.core._nth.call(null,chunk__31831_31835,i__31833_31837);
var m31829_31839 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31829_31839,f.call(null,v_31838),v_31838));

var G__31840 = seq__31830_31834;
var G__31841 = chunk__31831_31835;
var G__31842 = count__31832_31836;
var G__31843 = (i__31833_31837 + (1));
seq__31830_31834 = G__31840;
chunk__31831_31835 = G__31841;
count__31832_31836 = G__31842;
i__31833_31837 = G__31843;
continue;
} else {
var temp__4425__auto___31844 = cljs.core.seq.call(null,seq__31830_31834);
if(temp__4425__auto___31844){
var seq__31830_31845__$1 = temp__4425__auto___31844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31830_31845__$1)){
var c__12133__auto___31846 = cljs.core.chunk_first.call(null,seq__31830_31845__$1);
var G__31847 = cljs.core.chunk_rest.call(null,seq__31830_31845__$1);
var G__31848 = c__12133__auto___31846;
var G__31849 = cljs.core.count.call(null,c__12133__auto___31846);
var G__31850 = (0);
seq__31830_31834 = G__31847;
chunk__31831_31835 = G__31848;
count__31832_31836 = G__31849;
i__31833_31837 = G__31850;
continue;
} else {
var v_31851 = cljs.core.first.call(null,seq__31830_31845__$1);
var m31829_31852 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31829_31852,f.call(null,v_31851),v_31851));

var G__31853 = cljs.core.next.call(null,seq__31830_31845__$1);
var G__31854 = null;
var G__31855 = (0);
var G__31856 = (0);
seq__31830_31834 = G__31853;
chunk__31831_31835 = G__31854;
count__31832_31836 = G__31855;
i__31833_31837 = G__31856;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21227__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__31857){
var vec__31859 = p__31857;
var k = cljs.core.nth.call(null,vec__31859,(0),null);
var ks = cljs.core.nthnext.call(null,vec__31859,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__11336__auto__ = ks;
if(cljs.core.truth_(and__11336__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__11336__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
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
var m_atom__21227__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__31868_31874 = cljs.core.seq.call(null,x);
var chunk__31869_31875 = null;
var count__31870_31876 = (0);
var i__31871_31877 = (0);
while(true){
if((i__31871_31877 < count__31870_31876)){
var vec__31872_31878 = cljs.core._nth.call(null,chunk__31869_31875,i__31871_31877);
var k_31879 = cljs.core.nth.call(null,vec__31872_31878,(0),null);
var v_31880 = cljs.core.nth.call(null,vec__31872_31878,(1),null);
var m31867_31881 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31867_31881,((typeof k_31879 === 'string')?cljs.core.keyword.call(null,k_31879):k_31879),plumbing$core$keywordize_map.call(null,v_31880)));

var G__31882 = seq__31868_31874;
var G__31883 = chunk__31869_31875;
var G__31884 = count__31870_31876;
var G__31885 = (i__31871_31877 + (1));
seq__31868_31874 = G__31882;
chunk__31869_31875 = G__31883;
count__31870_31876 = G__31884;
i__31871_31877 = G__31885;
continue;
} else {
var temp__4425__auto___31886 = cljs.core.seq.call(null,seq__31868_31874);
if(temp__4425__auto___31886){
var seq__31868_31887__$1 = temp__4425__auto___31886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31868_31887__$1)){
var c__12133__auto___31888 = cljs.core.chunk_first.call(null,seq__31868_31887__$1);
var G__31889 = cljs.core.chunk_rest.call(null,seq__31868_31887__$1);
var G__31890 = c__12133__auto___31888;
var G__31891 = cljs.core.count.call(null,c__12133__auto___31888);
var G__31892 = (0);
seq__31868_31874 = G__31889;
chunk__31869_31875 = G__31890;
count__31870_31876 = G__31891;
i__31871_31877 = G__31892;
continue;
} else {
var vec__31873_31893 = cljs.core.first.call(null,seq__31868_31887__$1);
var k_31894 = cljs.core.nth.call(null,vec__31873_31893,(0),null);
var v_31895 = cljs.core.nth.call(null,vec__31873_31893,(1),null);
var m31867_31896 = cljs.core.deref.call(null,m_atom__21227__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21227__auto__,cljs.core.assoc_BANG_.call(null,m31867_31896,((typeof k_31894 === 'string')?cljs.core.keyword.call(null,k_31894):k_31894),plumbing$core$keywordize_map.call(null,v_31895)));

var G__31897 = cljs.core.next.call(null,seq__31868_31887__$1);
var G__31898 = null;
var G__31899 = (0);
var G__31900 = (0);
seq__31868_31874 = G__31897;
chunk__31869_31875 = G__31898;
count__31870_31876 = G__31899;
i__31871_31877 = G__31900;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21227__auto__));
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
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21308__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21308__auto__);
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
var G__31901 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__31902 = cljs.core.next.call(null,ks);
m = G__31901;
ks = G__31902;
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
var argseq__12388__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12388__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__11348__auto__ = m;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__12102__auto__ = (function plumbing$core$iter__31905(s__31906){
return (new cljs.core.LazySeq(null,(function (){
var s__31906__$1 = s__31906;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31906__$1);
if(temp__4425__auto__){
var s__31906__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31906__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31906__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31908 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31907 = (0);
while(true){
if((i__31907 < size__12101__auto__)){
var vec__31911 = cljs.core._nth.call(null,c__12100__auto__,i__31907);
var k = cljs.core.nth.call(null,vec__31911,(0),null);
var v = cljs.core.nth.call(null,vec__31911,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__31908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31913 = (i__31907 + (1));
i__31907 = G__31913;
continue;
} else {
var G__31914 = (i__31907 + (1));
i__31907 = G__31914;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31908),plumbing$core$iter__31905.call(null,cljs.core.chunk_rest.call(null,s__31906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31908),null);
}
} else {
var vec__31912 = cljs.core.first.call(null,s__31906__$2);
var k = cljs.core.nth.call(null,vec__31912,(0),null);
var v = cljs.core.nth.call(null,vec__31912,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__31905.call(null,cljs.core.rest.call(null,s__31906__$2)));
} else {
var G__31915 = cljs.core.rest.call(null,s__31906__$2);
s__31906__$1 = G__31915;
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
return iter__12102__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq31903){
var G__31904 = cljs.core.first.call(null,seq31903);
var seq31903__$1 = cljs.core.next.call(null,seq31903);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__31904,seq31903__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__12388__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12388__auto__);
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

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq31916){
var G__31917 = cljs.core.first.call(null,seq31916);
var seq31916__$1 = cljs.core.next.call(null,seq31916);
var G__31918 = cljs.core.first.call(null,seq31916__$1);
var seq31916__$2 = cljs.core.next.call(null,seq31916__$1);
var G__31919 = cljs.core.first.call(null,seq31916__$2);
var seq31916__$3 = cljs.core.next.call(null,seq31916__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__31917,G__31918,G__31919,seq31916__$3);
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
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
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
var G__31921 = arguments.length;
switch (G__31921) {
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
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
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
var iter__12102__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__31927(s__31928){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__31928__$1 = s__31928;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31928__$1);
if(temp__4425__auto__){
var s__31928__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31928__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__31928__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__31930 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__31929 = (0);
while(true){
if((i__31929 < size__12101__auto__)){
var x = cljs.core._nth.call(null,c__12100__auto__,i__31929);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__31930,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__31931 = (i__31929 + (1));
i__31929 = G__31931;
continue;
} else {
var G__31932 = (i__31929 + (1));
i__31929 = G__31932;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31930),plumbing$core$distinct_by_$_iter__31927.call(null,cljs.core.chunk_rest.call(null,s__31928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31930),null);
}
} else {
var x = cljs.core.first.call(null,s__31928__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__31927.call(null,cljs.core.rest.call(null,s__31928__$2)));
} else {
var G__31933 = cljs.core.rest.call(null,s__31928__$2);
s__31928__$1 = G__31933;
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
return iter__12102__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__12388__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__12388__auto__);
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

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq31934){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31934));
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
var G__31939 = arguments.length;
switch (G__31939) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12399__auto__);

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
var G__31941 = plumbing.core.conj_when.call(null,coll,x);
var G__31942 = cljs.core.first.call(null,xs);
var G__31943 = cljs.core.next.call(null,xs);
coll = G__31941;
x = G__31942;
xs = G__31943;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq31935){
var G__31936 = cljs.core.first.call(null,seq31935);
var seq31935__$1 = cljs.core.next.call(null,seq31935);
var G__31937 = cljs.core.first.call(null,seq31935__$1);
var seq31935__$2 = cljs.core.next.call(null,seq31935__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__31936,G__31937,seq31935__$2);
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
var G__31949 = arguments.length;
switch (G__31949) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12399__auto__);

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
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__31944_SHARP_){
return cljs.core.apply.call(null,f,p1__31944_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq31945){
var G__31946 = cljs.core.first.call(null,seq31945);
var seq31945__$1 = cljs.core.next.call(null,seq31945);
var G__31947 = cljs.core.first.call(null,seq31945__$1);
var seq31945__$2 = cljs.core.next.call(null,seq31945__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31946,G__31947,seq31945__$2);
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
var G__31955 = arguments.length;
switch (G__31955) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__12399__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12399__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq31951){
var G__31952 = cljs.core.first.call(null,seq31951);
var seq31951__$1 = cljs.core.next.call(null,seq31951);
var G__31953 = cljs.core.first.call(null,seq31951__$1);
var seq31951__$2 = cljs.core.next.call(null,seq31951__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__31952,G__31953,seq31951__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map