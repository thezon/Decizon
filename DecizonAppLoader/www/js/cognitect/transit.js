// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18995_18999 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18996_19000 = null;
var count__18997_19001 = (0);
var i__18998_19002 = (0);
while(true){
if((i__18998_19002 < count__18997_19001)){
var k_19003 = cljs.core._nth.call(null,chunk__18996_19000,i__18998_19002);
var v_19004 = (b[k_19003]);
(a[k_19003] = v_19004);

var G__19005 = seq__18995_18999;
var G__19006 = chunk__18996_19000;
var G__19007 = count__18997_19001;
var G__19008 = (i__18998_19002 + (1));
seq__18995_18999 = G__19005;
chunk__18996_19000 = G__19006;
count__18997_19001 = G__19007;
i__18998_19002 = G__19008;
continue;
} else {
var temp__4126__auto___19009 = cljs.core.seq.call(null,seq__18995_18999);
if(temp__4126__auto___19009){
var seq__18995_19010__$1 = temp__4126__auto___19009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18995_19010__$1)){
var c__11197__auto___19011 = cljs.core.chunk_first.call(null,seq__18995_19010__$1);
var G__19012 = cljs.core.chunk_rest.call(null,seq__18995_19010__$1);
var G__19013 = c__11197__auto___19011;
var G__19014 = cljs.core.count.call(null,c__11197__auto___19011);
var G__19015 = (0);
seq__18995_18999 = G__19012;
chunk__18996_19000 = G__19013;
count__18997_19001 = G__19014;
i__18998_19002 = G__19015;
continue;
} else {
var k_19016 = cljs.core.first.call(null,seq__18995_19010__$1);
var v_19017 = (b[k_19016]);
(a[k_19016] = v_19017);

var G__19018 = cljs.core.next.call(null,seq__18995_19010__$1);
var G__19019 = null;
var G__19020 = (0);
var G__19021 = (0);
seq__18995_18999 = G__19018;
chunk__18996_19000 = G__19019;
count__18997_19001 = G__19020;
i__18998_19002 = G__19021;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__19023 = arguments.length;
switch (G__19023) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19025 = (i + (2));
var G__19026 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19025;
ret = G__19026;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19027_19031 = cljs.core.seq.call(null,v);
var chunk__19028_19032 = null;
var count__19029_19033 = (0);
var i__19030_19034 = (0);
while(true){
if((i__19030_19034 < count__19029_19033)){
var x_19035 = cljs.core._nth.call(null,chunk__19028_19032,i__19030_19034);
ret.push(x_19035);

var G__19036 = seq__19027_19031;
var G__19037 = chunk__19028_19032;
var G__19038 = count__19029_19033;
var G__19039 = (i__19030_19034 + (1));
seq__19027_19031 = G__19036;
chunk__19028_19032 = G__19037;
count__19029_19033 = G__19038;
i__19030_19034 = G__19039;
continue;
} else {
var temp__4126__auto___19040 = cljs.core.seq.call(null,seq__19027_19031);
if(temp__4126__auto___19040){
var seq__19027_19041__$1 = temp__4126__auto___19040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19027_19041__$1)){
var c__11197__auto___19042 = cljs.core.chunk_first.call(null,seq__19027_19041__$1);
var G__19043 = cljs.core.chunk_rest.call(null,seq__19027_19041__$1);
var G__19044 = c__11197__auto___19042;
var G__19045 = cljs.core.count.call(null,c__11197__auto___19042);
var G__19046 = (0);
seq__19027_19031 = G__19043;
chunk__19028_19032 = G__19044;
count__19029_19033 = G__19045;
i__19030_19034 = G__19046;
continue;
} else {
var x_19047 = cljs.core.first.call(null,seq__19027_19041__$1);
ret.push(x_19047);

var G__19048 = cljs.core.next.call(null,seq__19027_19041__$1);
var G__19049 = null;
var G__19050 = (0);
var G__19051 = (0);
seq__19027_19031 = G__19048;
chunk__19028_19032 = G__19049;
count__19029_19033 = G__19050;
i__19030_19034 = G__19051;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19052_19056 = cljs.core.seq.call(null,v);
var chunk__19053_19057 = null;
var count__19054_19058 = (0);
var i__19055_19059 = (0);
while(true){
if((i__19055_19059 < count__19054_19058)){
var x_19060 = cljs.core._nth.call(null,chunk__19053_19057,i__19055_19059);
ret.push(x_19060);

var G__19061 = seq__19052_19056;
var G__19062 = chunk__19053_19057;
var G__19063 = count__19054_19058;
var G__19064 = (i__19055_19059 + (1));
seq__19052_19056 = G__19061;
chunk__19053_19057 = G__19062;
count__19054_19058 = G__19063;
i__19055_19059 = G__19064;
continue;
} else {
var temp__4126__auto___19065 = cljs.core.seq.call(null,seq__19052_19056);
if(temp__4126__auto___19065){
var seq__19052_19066__$1 = temp__4126__auto___19065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19052_19066__$1)){
var c__11197__auto___19067 = cljs.core.chunk_first.call(null,seq__19052_19066__$1);
var G__19068 = cljs.core.chunk_rest.call(null,seq__19052_19066__$1);
var G__19069 = c__11197__auto___19067;
var G__19070 = cljs.core.count.call(null,c__11197__auto___19067);
var G__19071 = (0);
seq__19052_19056 = G__19068;
chunk__19053_19057 = G__19069;
count__19054_19058 = G__19070;
i__19055_19059 = G__19071;
continue;
} else {
var x_19072 = cljs.core.first.call(null,seq__19052_19066__$1);
ret.push(x_19072);

var G__19073 = cljs.core.next.call(null,seq__19052_19066__$1);
var G__19074 = null;
var G__19075 = (0);
var G__19076 = (0);
seq__19052_19056 = G__19073;
chunk__19053_19057 = G__19074;
count__19054_19058 = G__19075;
i__19055_19059 = G__19076;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19077_19081 = cljs.core.seq.call(null,v);
var chunk__19078_19082 = null;
var count__19079_19083 = (0);
var i__19080_19084 = (0);
while(true){
if((i__19080_19084 < count__19079_19083)){
var x_19085 = cljs.core._nth.call(null,chunk__19078_19082,i__19080_19084);
ret.push(x_19085);

var G__19086 = seq__19077_19081;
var G__19087 = chunk__19078_19082;
var G__19088 = count__19079_19083;
var G__19089 = (i__19080_19084 + (1));
seq__19077_19081 = G__19086;
chunk__19078_19082 = G__19087;
count__19079_19083 = G__19088;
i__19080_19084 = G__19089;
continue;
} else {
var temp__4126__auto___19090 = cljs.core.seq.call(null,seq__19077_19081);
if(temp__4126__auto___19090){
var seq__19077_19091__$1 = temp__4126__auto___19090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19077_19091__$1)){
var c__11197__auto___19092 = cljs.core.chunk_first.call(null,seq__19077_19091__$1);
var G__19093 = cljs.core.chunk_rest.call(null,seq__19077_19091__$1);
var G__19094 = c__11197__auto___19092;
var G__19095 = cljs.core.count.call(null,c__11197__auto___19092);
var G__19096 = (0);
seq__19077_19081 = G__19093;
chunk__19078_19082 = G__19094;
count__19079_19083 = G__19095;
i__19080_19084 = G__19096;
continue;
} else {
var x_19097 = cljs.core.first.call(null,seq__19077_19091__$1);
ret.push(x_19097);

var G__19098 = cljs.core.next.call(null,seq__19077_19091__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__19077_19081 = G__19098;
chunk__19078_19082 = G__19099;
count__19079_19083 = G__19100;
i__19080_19084 = G__19101;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__19103 = arguments.length;
switch (G__19103) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19105 = cljs.core.clone.call(null,handlers);
x19105.forEach = ((function (x19105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19106 = cljs.core.seq.call(null,coll);
var chunk__19107 = null;
var count__19108 = (0);
var i__19109 = (0);
while(true){
if((i__19109 < count__19108)){
var vec__19110 = cljs.core._nth.call(null,chunk__19107,i__19109);
var k = cljs.core.nth.call(null,vec__19110,(0),null);
var v = cljs.core.nth.call(null,vec__19110,(1),null);
f.call(null,v,k);

var G__19113 = seq__19106;
var G__19114 = chunk__19107;
var G__19115 = count__19108;
var G__19116 = (i__19109 + (1));
seq__19106 = G__19113;
chunk__19107 = G__19114;
count__19108 = G__19115;
i__19109 = G__19116;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19106);
if(temp__4126__auto__){
var seq__19106__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19106__$1)){
var c__11197__auto__ = cljs.core.chunk_first.call(null,seq__19106__$1);
var G__19117 = cljs.core.chunk_rest.call(null,seq__19106__$1);
var G__19118 = c__11197__auto__;
var G__19119 = cljs.core.count.call(null,c__11197__auto__);
var G__19120 = (0);
seq__19106 = G__19117;
chunk__19107 = G__19118;
count__19108 = G__19119;
i__19109 = G__19120;
continue;
} else {
var vec__19111 = cljs.core.first.call(null,seq__19106__$1);
var k = cljs.core.nth.call(null,vec__19111,(0),null);
var v = cljs.core.nth.call(null,vec__19111,(1),null);
f.call(null,v,k);

var G__19121 = cljs.core.next.call(null,seq__19106__$1);
var G__19122 = null;
var G__19123 = (0);
var G__19124 = (0);
seq__19106 = G__19121;
chunk__19107 = G__19122;
count__19108 = G__19123;
i__19109 = G__19124;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19105,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19105;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19104 = obj;
G__19104.push(kfn.call(null,k),vfn.call(null,v));

return G__19104;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__19126 = arguments.length;
switch (G__19126) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t19127 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t19127 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta19128){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta19128 = meta19128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t19127.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t19127.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t19127.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t19127.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t19127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19129){
var self__ = this;
var _19129__$1 = this;
return self__.meta19128;
});

cognitect.transit.t19127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19129,meta19128__$1){
var self__ = this;
var _19129__$1 = this;
return (new cognitect.transit.t19127(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta19128__$1));
});

cognitect.transit.t19127.cljs$lang$type = true;

cognitect.transit.t19127.cljs$lang$ctorStr = "cognitect.transit/t19127";

cognitect.transit.t19127.cljs$lang$ctorPrWriter = (function (this__10991__auto__,writer__10992__auto__,opt__10993__auto__){
return cljs.core._write.call(null,writer__10992__auto__,"cognitect.transit/t19127");
});

cognitect.transit.__GT_t19127 = (function cognitect$transit$__GT_t19127(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta19128){
return (new cognitect.transit.t19127(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta19128));
});

}

return (new cognitect.transit.t19127(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map