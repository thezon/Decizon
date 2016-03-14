// Compiled by ClojureScript 0.0-3291 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.shim');
goog.require('datascript.btset');
datascript.core.Exception = Error;

datascript.core.IllegalArgumentException = Error;

datascript.core.UnsupportedOperationException = Error;
datascript.core.tx0 = (536870912);
datascript.core.default_schema = null;
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.core.cljs_env_QMARK_ = (function datascript$core$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});





/**
* @constructor
*/
datascript.core.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164480;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__11348__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return d__$1.__hash = datascript.core.hash_datom.call(null,d__$1);
}
});

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__11336__auto__ = (o instanceof datascript.core.Datom);
if(and__11336__auto__){
return datascript.core.equiv_datom.call(null,d__$1,o);
} else {
return and__11336__auto__;
}
});

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.core.seq_datom.call(null,d__$1);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.core.val_at_datom.call(null,d__$1,k,null);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.core.val_at_datom.call(null,d__$1,k,nf);
});

datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.core.assoc_datom.call(null,k);
});

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.core.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null);
});

datascript.core.Datom.cljs$lang$type = true;

datascript.core.Datom.cljs$lang$ctorStr = "datascript.core/Datom";

datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"datascript.core/Datom");
});

datascript.core.__GT_Datom = (function datascript$core$__GT_Datom(e,a,v,tx,added){
return (new datascript.core.Datom(e,a,v,tx,added));
});

datascript.core.datom = (function datascript$core$datom(){
var G__34335 = arguments.length;
switch (G__34335) {
case 3:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.core.Datom(e,a,v,datascript.core.tx0,true));
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.core.Datom(e,a,v,tx,true));
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.core.Datom(e,a,v,tx,added));
});

datascript.core.datom.cljs$lang$maxFixedArity = 5;
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return (x instanceof datascript.core.Datom);
});
datascript.core.hash_datom = (function datascript$core$hash_datom(d){
return cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datascript.core.equiv_datom = (function datascript$core$equiv_datom(d,o){
return (cljs.core._EQ_.call(null,d.e,o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v));
});
datascript.core.seq_datom = (function datascript$core$seq_datom(d){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d.added),d.tx),d.v),d.a),d.e);
});
datascript.core.val_at_datom = (function datascript$core$val_at_datom(d,k,not_found){
var G__34338 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__34338)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__34338)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__34338)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"v",G__34338)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__34338)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__34338)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__34338)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,"added",G__34338)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"tx",G__34338)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__34338)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.core.assoc_datom = (function datascript$core$assoc_datom(d,k,v){
var G__34340 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__34340) {
case "e":
return (new datascript.core.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.core.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.core.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.core.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.core.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.core.IllegalArgumentException([cljs.core.str("invalid key for #datascript/Datom: "),cljs.core.str(k)].join('')));

}
});
datascript.core.datom_from_reader = (function datascript$core$datom_from_reader(vec){
return cljs.core.apply.call(null,datascript.core.datom,vec);
});
datascript.core.cmp = (function datascript$core$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__11336__auto__ = o1;
if(cljs.core.truth_(and__11336__auto__)){
return o2;
} else {
return and__11336__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.core.cmp_num = (function datascript$core$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__11336__auto__ = n1;
if(cljs.core.truth_(and__11336__auto__)){
return n2;
} else {
return and__11336__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.core.cmp_val = (function datascript$core$cmp_val(o1,o2){
if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2))){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
} else {
return (0);
}
});
datascript.core.cmp_datoms_eavt = (function datascript$core$cmp_datoms_eavt(d1,d2){
var c__12980__auto__ = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function datascript$core$cmp_datoms_aevt(d1,d2){
var c__12980__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});
datascript.core.cmp_datoms_avet = (function datascript$core$cmp_datoms_avet(d1,d2){
var c__12980__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});
datascript.core.cmp_attr_quick = (function datascript$core$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.core.cmp_val_quick = (function datascript$core$cmp_val_quick(o1,o2){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
});
datascript.core.cmp_datoms_eavt_quick = (function datascript$core$cmp_datoms_eavt_quick(d1,d2){
var c__12980__auto__ = (d1.e - d2.e);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});
datascript.core.cmp_datoms_aevt_quick = (function datascript$core$cmp_datoms_aevt_quick(d1,d2){
var c__12980__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = (d1.e - d2.e);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});
datascript.core.cmp_datoms_avet_quick = (function datascript$core$cmp_datoms_avet_quick(d1,d2){
var c__12980__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__12980__auto__)){
var c__12980__auto____$1 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__12980__auto____$1)){
var c__12980__auto____$2 = (d1.e - d2.e);
if(((0) === c__12980__auto____$2)){
var c__12980__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__12980__auto____$3)){
return (0);
} else {
return c__12980__auto____$3;
}
} else {
return c__12980__auto____$2;
}
} else {
return c__12980__auto____$1;
}
} else {
return c__12980__auto__;
}
});

datascript.core.ISearch = (function (){var obj34344 = {};
return obj34344;
})();

datascript.core._search = (function datascript$core$_search(data,pattern){
if((function (){var and__11336__auto__ = data;
if(and__11336__auto__){
return data.datascript$core$ISearch$_search$arity$2;
} else {
return and__11336__auto__;
}
})()){
return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else {
var x__11984__auto__ = (((data == null))?null:data);
return (function (){var or__11348__auto__ = (datascript.core._search[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._search["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});


datascript.core.IIndexAccess = (function (){var obj34346 = {};
return obj34346;
})();

datascript.core._datoms = (function datascript$core$_datoms(db,index,components){
if((function (){var and__11336__auto__ = db;
if(and__11336__auto__){
return db.datascript$core$IIndexAccess$_datoms$arity$3;
} else {
return and__11336__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__11984__auto__ = (((db == null))?null:db);
return (function (){var or__11348__auto__ = (datascript.core._datoms[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._datoms["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._seek_datoms = (function datascript$core$_seek_datoms(db,index,components){
if((function (){var and__11336__auto__ = db;
if(and__11336__auto__){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3;
} else {
return and__11336__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__11984__auto__ = (((db == null))?null:db);
return (function (){var or__11348__auto__ = (datascript.core._seek_datoms[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._seek_datoms["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._index_range = (function datascript$core$_index_range(db,attr,start,end){
if((function (){var and__11336__auto__ = db;
if(and__11336__auto__){
return db.datascript$core$IIndexAccess$_index_range$arity$4;
} else {
return and__11336__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__11984__auto__ = (((db == null))?null:db);
return (function (){var or__11348__auto__ = (datascript.core._index_range[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._index_range["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
})().call(null,db,attr,start,end);
}
});


datascript.core.IDB = (function (){var obj34348 = {};
return obj34348;
})();

datascript.core._schema = (function datascript$core$_schema(db){
if((function (){var and__11336__auto__ = db;
if(and__11336__auto__){
return db.datascript$core$IDB$_schema$arity$1;
} else {
return and__11336__auto__;
}
})()){
return db.datascript$core$IDB$_schema$arity$1(db);
} else {
var x__11984__auto__ = (((db == null))?null:db);
return (function (){var or__11348__auto__ = (datascript.core._schema[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._schema["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
})().call(null,db);
}
});

datascript.core._attrs_by = (function datascript$core$_attrs_by(db,property){
if((function (){var and__11336__auto__ = db;
if(and__11336__auto__){
return db.datascript$core$IDB$_attrs_by$arity$2;
} else {
return and__11336__auto__;
}
})()){
return db.datascript$core$IDB$_attrs_by$arity$2(db,property);
} else {
var x__11984__auto__ = (((db == null))?null:db);
return (function (){var or__11348__auto__ = (datascript.core._attrs_by[goog.typeOf(x__11984__auto__)]);
if(or__11348__auto__){
return or__11348__auto__;
} else {
var or__11348__auto____$1 = (datascript.core._attrs_by["_"]);
if(or__11348__auto____$1){
return or__11348__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
})().call(null,db,property);
}
});









/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} rschema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34351,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34353 = (((k34351 instanceof cljs.core.Keyword))?k34351.fqn:null);
switch (G__34353) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34351,else__11946__auto__);

}
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.core.DB{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34350){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34354 = cljs.core.keyword_identical_QMARK_;
var expr__34355 = k__11951__auto__;
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34355))){
return (new datascript.core.DB(G__34350,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__34355))){
return (new datascript.core.DB(self__.schema,G__34350,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__34355))){
return (new datascript.core.DB(self__.schema,self__.eavt,G__34350,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__34355))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__34350,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__34355))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__34350,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__34355))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__34350,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34354.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__34355))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__34350,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34350),null));
}
}
}
}
}
}
}
});

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34350){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__34350,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.core.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null)], null);
});

datascript.core.DB.cljs$lang$type = true;

datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});

datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.core/DB");
});

datascript.core.__GT_DB = (function datascript$core$__GT_DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,rschema){
return (new datascript.core.DB(schema__$1,eavt,aevt,avet,max_eid,max_tx,rschema,null,null,null));
});

datascript.core.map__GT_DB = (function datascript$core$map__GT_DB(G__34352){
return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__34352),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__34352),null,cljs.core.dissoc.call(null,G__34352,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)),null));
});


datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.core.pr_db.call(null,db__$1,w,opts);
});

datascript.core.DB.prototype.cljs$core$ICounted$ = true;

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.cljs$core$IReversible$ = true;

datascript.core.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.cljs$core$IHash$ = true;

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.hash_db.call(null,db__$1);
});

datascript.core.DB.prototype.cljs$core$IEquiv$ = true;

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.core.equiv_db.call(null,db__$1,other);
});

datascript.core.DB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.core.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.empty_db.call(null,db__$1.schema);
});

datascript.core.DB.prototype.cljs$core$ISeqable$ = true;

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.DB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.core.components__GT_pattern.call(null,db__$1,index,cs));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.core.components__GT_pattern.call(null,db__$1,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
datascript.core.validate_attr.call(null,attr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),start),attr),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null)));

return datascript.btset.slice.call(null,db__$1.avet,datascript.core.resolve_datom.call(null,db__$1,null,attr,start,null),datascript.core.resolve_datom.call(null,db__$1,null,attr,end,null));
});

datascript.core.DB.prototype.datascript$core$IDB$ = true;

datascript.core.DB.prototype.datascript$core$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.core.DB.prototype.datascript$core$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.core.DB.prototype.datascript$core$ISearch$ = true;

datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__34357 = pattern;
var e = cljs.core.nth.call(null,vec__34357,(0),null);
var a = cljs.core.nth.call(null,vec__34357,(1),null);
var v = cljs.core.nth.call(null,vec__34357,(2),null);
var tx = cljs.core.nth.call(null,vec__34357,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,v,null,null))));
} else {
return datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__34357,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
var and__11336__auto__ = (function (){var G__34365 = x;
if(G__34365){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__34365.datascript$core$ISearch$;
}
})())){
return true;
} else {
if((!G__34365.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__34365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__34365);
}
})();
if(and__11336__auto__){
var and__11336__auto____$1 = (function (){var G__34367 = x;
if(G__34367){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__34367.datascript$core$IIndexAccess$;
}
})())){
return true;
} else {
if((!G__34367.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IIndexAccess,G__34367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IIndexAccess,G__34367);
}
})();
if(and__11336__auto____$1){
var G__34368 = x;
if(G__34368){
var bit__12022__auto__ = null;
if(cljs.core.truth_((function (){var or__11348__auto__ = bit__12022__auto__;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return G__34368.datascript$core$IDB$;
}
})())){
return true;
} else {
if((!G__34368.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__34368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__34368);
}
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
});

/**
* @constructor
* @param {*} unfiltered_db
* @param {*} pred
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34373,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34375 = (((k34373 instanceof cljs.core.Keyword))?k34373.fqn:null);
switch (G__34375) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34373,else__11946__auto__);

}
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.core.FilteredDB{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.core.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34372){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34376 = cljs.core.keyword_identical_QMARK_;
var expr__34377 = k__11951__auto__;
if(cljs.core.truth_(pred__34376.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__34377))){
return (new datascript.core.FilteredDB(G__34372,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34376.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__34377))){
return (new datascript.core.FilteredDB(self__.unfiltered_db,G__34372,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34372),null));
}
}
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34372){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,G__34372,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.core.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null);
});

datascript.core.FilteredDB.cljs$lang$type = true;

datascript.core.FilteredDB.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/FilteredDB");
});

datascript.core.FilteredDB.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.core/FilteredDB");
});

datascript.core.__GT_FilteredDB = (function datascript$core$__GT_FilteredDB(unfiltered_db,pred){
return (new datascript.core.FilteredDB(unfiltered_db,pred,null,null,null));
});

datascript.core.map__GT_FilteredDB = (function datascript$core$map__GT_FilteredDB(G__34374){
return (new datascript.core.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__34374),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__34374),null,cljs.core.dissoc.call(null,G__34374,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397)),null));
});


datascript.core.FilteredDB.prototype.cljs$core$ILookup$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.core.pr_db.call(null,db__$1,w,opts);
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datascript.core._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.hash_fdb.call(null,db__$1);
});

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.core.equiv_db.call(null,db__$1,other);
});

datascript.core.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.core._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.core._schema.call(null,db__$1.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.core._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datascript.core.FilteredDB.prototype.datascript$core$ISearch$ = true;

datascript.core.FilteredDB.prototype.datascript$core$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._search.call(null,db__$1.unfiltered_db,pattern));
});
datascript.core.attr__GT_properties = (function datascript$core$attr__GT_properties(k,v){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null);
} else {
return null;
}
}
}
}
}
});
datascript.core.multimap = (function datascript$core$multimap(e,m){
return cljs.core.reduce.call(null,(function (acc,p__34382){
var vec__34383 = p__34382;
var k = cljs.core.nth.call(null,vec__34383,(0),null);
var v = cljs.core.nth.call(null,vec__34383,(1),null);
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.core.rschema = (function datascript$core$rschema(schema__$1){
return datascript.core.multimap.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__12102__auto__ = (function datascript$core$rschema_$_iter__34398(s__34399){
return (new cljs.core.LazySeq(null,(function (){
var s__34399__$1 = s__34399;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34399__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__34409 = cljs.core.first.call(null,xs__4977__auto__);
var a = cljs.core.nth.call(null,vec__34409,(0),null);
var kv = cljs.core.nth.call(null,vec__34409,(1),null);
var iterys__12098__auto__ = ((function (s__34399__$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function datascript$core$rschema_$_iter__34398_$_iter__34400(s__34401){
return (new cljs.core.LazySeq(null,((function (s__34399__$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34401__$1 = s__34401;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34401__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var vec__34411 = cljs.core.first.call(null,xs__4977__auto____$1);
var k = cljs.core.nth.call(null,vec__34411,(0),null);
var v = cljs.core.nth.call(null,vec__34411,(1),null);
var iterys__12098__auto__ = ((function (s__34401__$1,s__34399__$1,vec__34411,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function datascript$core$rschema_$_iter__34398_$_iter__34400_$_iter__34402(s__34403){
return (new cljs.core.LazySeq(null,((function (s__34401__$1,s__34399__$1,vec__34411,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34403__$1 = s__34403;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__34403__$1);
if(temp__4425__auto____$2){
var s__34403__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34403__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__34403__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__34405 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__34404 = (0);
while(true){
if((i__34404 < size__12101__auto__)){
var prop = cljs.core._nth.call(null,c__12100__auto__,i__34404);
cljs.core.chunk_append.call(null,b__34405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__34412 = (i__34404 + (1));
i__34404 = G__34412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),datascript$core$rschema_$_iter__34398_$_iter__34400_$_iter__34402.call(null,cljs.core.chunk_rest.call(null,s__34403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),null);
}
} else {
var prop = cljs.core.first.call(null,s__34403__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$core$rschema_$_iter__34398_$_iter__34400_$_iter__34402.call(null,cljs.core.rest.call(null,s__34403__$2)));
}
} else {
return null;
}
break;
}
});})(s__34401__$1,s__34399__$1,vec__34411,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34401__$1,s__34399__$1,vec__34411,k,v,xs__4977__auto____$1,temp__4425__auto____$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__))
;
var fs__12099__auto__ = cljs.core.seq.call(null,iterys__12098__auto__.call(null,datascript.core.attr__GT_properties.call(null,k,v)));
if(fs__12099__auto__){
return cljs.core.concat.call(null,fs__12099__auto__,datascript$core$rschema_$_iter__34398_$_iter__34400.call(null,cljs.core.rest.call(null,s__34401__$1)));
} else {
var G__34413 = cljs.core.rest.call(null,s__34401__$1);
s__34401__$1 = G__34413;
continue;
}
} else {
return null;
}
break;
}
});})(s__34399__$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34399__$1,vec__34409,a,kv,xs__4977__auto__,temp__4425__auto__))
;
var fs__12099__auto__ = cljs.core.seq.call(null,iterys__12098__auto__.call(null,kv));
if(fs__12099__auto__){
return cljs.core.concat.call(null,fs__12099__auto__,datascript$core$rschema_$_iter__34398.call(null,cljs.core.rest.call(null,s__34399__$1)));
} else {
var G__34414 = cljs.core.rest.call(null,s__34399__$1);
s__34399__$1 = G__34414;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12102__auto__.call(null,schema__$1);
})());
});
datascript.core.validate_schema_key = (function datascript$core$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap.fromArray([a,new cljs.core.PersistentArrayMap.fromArray([k,v], true, false)], true, false))),cljs.core.str(", expected one of "),cljs.core.str(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.core.validate_schema = (function datascript$core$validate_schema(schema__$1){
var seq__34421_34427 = cljs.core.seq.call(null,schema__$1);
var chunk__34422_34428 = null;
var count__34423_34429 = (0);
var i__34424_34430 = (0);
while(true){
if((i__34424_34430 < count__34423_34429)){
var vec__34425_34431 = cljs.core._nth.call(null,chunk__34422_34428,i__34424_34430);
var a_34432 = cljs.core.nth.call(null,vec__34425_34431,(0),null);
var kv_34433 = cljs.core.nth.call(null,vec__34425_34431,(1),null);
var comp_QMARK__34434 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_34433,false);
datascript.core.validate_schema_key.call(null,a_34432,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_34433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__11336__auto__ = comp_QMARK__34434;
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_34433),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__11336__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_34432),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_34432,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.core.validate_schema_key.call(null,a_34432,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_34433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.core.validate_schema_key.call(null,a_34432,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_34433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.core.validate_schema_key.call(null,a_34432,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_34433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__34435 = seq__34421_34427;
var G__34436 = chunk__34422_34428;
var G__34437 = count__34423_34429;
var G__34438 = (i__34424_34430 + (1));
seq__34421_34427 = G__34435;
chunk__34422_34428 = G__34436;
count__34423_34429 = G__34437;
i__34424_34430 = G__34438;
continue;
} else {
var temp__4425__auto___34439 = cljs.core.seq.call(null,seq__34421_34427);
if(temp__4425__auto___34439){
var seq__34421_34440__$1 = temp__4425__auto___34439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34421_34440__$1)){
var c__12133__auto___34441 = cljs.core.chunk_first.call(null,seq__34421_34440__$1);
var G__34442 = cljs.core.chunk_rest.call(null,seq__34421_34440__$1);
var G__34443 = c__12133__auto___34441;
var G__34444 = cljs.core.count.call(null,c__12133__auto___34441);
var G__34445 = (0);
seq__34421_34427 = G__34442;
chunk__34422_34428 = G__34443;
count__34423_34429 = G__34444;
i__34424_34430 = G__34445;
continue;
} else {
var vec__34426_34446 = cljs.core.first.call(null,seq__34421_34440__$1);
var a_34447 = cljs.core.nth.call(null,vec__34426_34446,(0),null);
var kv_34448 = cljs.core.nth.call(null,vec__34426_34446,(1),null);
var comp_QMARK__34449 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_34448,false);
datascript.core.validate_schema_key.call(null,a_34447,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_34448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__11336__auto__ = comp_QMARK__34449;
if(cljs.core.truth_(and__11336__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_34448),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__11336__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_34447),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_34447,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.core.validate_schema_key.call(null,a_34447,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_34448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.core.validate_schema_key.call(null,a_34447,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_34448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.core.validate_schema_key.call(null,a_34447,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_34448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__34450 = cljs.core.next.call(null,seq__34421_34440__$1);
var G__34451 = null;
var G__34452 = (0);
var G__34453 = (0);
seq__34421_34427 = G__34450;
chunk__34422_34428 = G__34451;
count__34423_34429 = G__34452;
i__34424_34430 = G__34453;
continue;
}
} else {
}
}
break;
}

return schema__$1;
});
datascript.core.empty_db = (function datascript$core$empty_db(){
var G__34455 = arguments.length;
switch (G__34455) {
case 0:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.empty_db.call(null,datascript.core.default_schema);
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema__$1){
if(((schema__$1 == null)) || (cljs.core.map_QMARK_.call(null,schema__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)))))].join('')));
}

return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),datascript.core.validate_schema.call(null,schema__$1),new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.core.tx0,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.core.rschema.call(null,schema__$1)], null));
});

datascript.core.empty_db.cljs$lang$maxFixedArity = 1;
datascript.core.init_db = (function datascript$core$init_db(){
var G__34458 = arguments.length;
switch (G__34458) {
case 1:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.init_db.call(null,datoms,datascript.core.default_schema);
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema__$1){
if(cljs.core.empty_QMARK_.call(null,datoms)){
return datascript.core.empty_db.call(null,schema__$1);
} else {
var _ = datascript.core.validate_schema.call(null,schema__$1);
var ds_arr = datascript.shim.into_array.call(null,datoms);
var eavt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_eavt_quick),datascript.core.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_aevt_quick),datascript.core.cmp_datoms_aevt);
var avet = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_avet_quick),datascript.core.cmp_datoms_avet);
var max_eid = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core._rseq.call(null,eavt)));
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (_,ds_arr,eavt,aevt,avet,max_eid){
return (function (d){
return d.tx;
});})(_,ds_arr,eavt,aevt,avet,max_eid))
),cljs.core.max,datascript.core.tx0,eavt);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.core.rschema.call(null,schema__$1)], null));
}
});

datascript.core.init_db.cljs$lang$maxFixedArity = 2;
datascript.core.equiv_db_index = (function datascript$core$equiv_db_index(x,y){
var and__11336__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));
if(and__11336__auto__){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__34460 = cljs.core.next.call(null,xs);
var G__34461 = cljs.core.next.call(null,ys);
xs = G__34460;
ys = G__34461;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__11336__auto__;
}
});
datascript.core.hash_db = (function datascript$core$hash_db(db){
var or__11348__auto__ = db.__hash;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.core.hash_fdb = (function datascript$core$hash_fdb(db){
var or__11348__auto__ = db.__hash;
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.core.equiv_db = (function datascript$core$equiv_db(db,other){
var and__11336__auto__ = ((other instanceof datascript.core.DB)) || ((other instanceof datascript.core.FilteredDB));
if(and__11336__auto__){
var and__11336__auto____$1 = cljs.core._EQ_.call(null,datascript.core._schema.call(null,db),datascript.core._schema.call(null,other));
if(and__11336__auto____$1){
return datascript.core.equiv_db_index.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.core._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
});
datascript.core.pr_db = (function datascript$core$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.core._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.core.db_from_reader = (function datascript$core$db_from_reader(p__34462){
var map__34466 = p__34462;
var map__34466__$1 = ((cljs.core.seq_QMARK_.call(null,map__34466))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);
var schema__$1 = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.core.init_db.call(null,cljs.core.map.call(null,((function (map__34466,map__34466__$1,schema__$1,datoms){
return (function (p__34467){
var vec__34468 = p__34467;
var e = cljs.core.nth.call(null,vec__34468,(0),null);
var a = cljs.core.nth.call(null,vec__34468,(1),null);
var v = cljs.core.nth.call(null,vec__34468,(2),null);
var tx = cljs.core.nth.call(null,vec__34468,(3),null);
return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__34466,map__34466__$1,schema__$1,datoms))
,datoms),schema__$1);
});


datascript.core.resolve_datom = (function datascript$core$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
datascript.core.validate_attr.call(null,a,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,t),v),a),e),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null)));
} else {
}

return (new datascript.core.Datom(datascript.core.entid_some.call(null,db,e),a,(cljs.core.truth_((function (){var and__11336__auto__ = cljs.core.some_QMARK_.call(null,v);
if(and__11336__auto__){
return datascript.core.ref_QMARK_.call(null,db,a);
} else {
return and__11336__auto__;
}
})())?datascript.core.entid_strict.call(null,db,v):v),datascript.core.entid_some.call(null,db,t),null));
});
datascript.core.components__GT_pattern = (function datascript$core$components__GT_pattern(db,index,p__34469){
var vec__34472 = p__34469;
var c0 = cljs.core.nth.call(null,vec__34472,(0),null);
var c1 = cljs.core.nth.call(null,vec__34472,(1),null);
var c2 = cljs.core.nth.call(null,vec__34472,(2),null);
var c3 = cljs.core.nth.call(null,vec__34472,(3),null);
var G__34473 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__34473) {
case "eavt":
return datascript.core.resolve_datom.call(null,db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.core.resolve_datom.call(null,db,c1,c0,c2,c3);

break;
case "avet":
return datascript.core.resolve_datom.call(null,db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} tx_meta
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11943__auto__,k__11944__auto__){
var self__ = this;
var this__11943__auto____$1 = this;
return cljs.core._lookup.call(null,this__11943__auto____$1,k__11944__auto__,null);
});

datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11945__auto__,k34476,else__11946__auto__){
var self__ = this;
var this__11945__auto____$1 = this;
var G__34478 = (((k34476 instanceof cljs.core.Keyword))?k34476.fqn:null);
switch (G__34478) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34476,else__11946__auto__);

}
});

datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11957__auto__,writer__11958__auto__,opts__11959__auto__){
var self__ = this;
var this__11957__auto____$1 = this;
var pr_pair__11960__auto__ = ((function (this__11957__auto____$1){
return (function (keyval__11961__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,cljs.core.pr_writer,""," ","",opts__11959__auto__,keyval__11961__auto__);
});})(this__11957__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11958__auto__,pr_pair__11960__auto__,"#datascript.core.TxReport{",", ","}",opts__11959__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11941__auto__){
var self__ = this;
var this__11941__auto____$1 = this;
return self__.__meta;
});

datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11937__auto__){
var self__ = this;
var this__11937__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11947__auto__){
var self__ = this;
var this__11947__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11938__auto__){
var self__ = this;
var this__11938__auto____$1 = this;
var h__11764__auto__ = self__.__hash;
if(!((h__11764__auto__ == null))){
return h__11764__auto__;
} else {
var h__11764__auto____$1 = cljs.core.hash_imap.call(null,this__11938__auto____$1);
self__.__hash = h__11764__auto____$1;

return h__11764__auto____$1;
}
});

datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11939__auto__,other__11940__auto__){
var self__ = this;
var this__11939__auto____$1 = this;
if(cljs.core.truth_((function (){var and__11336__auto__ = other__11940__auto__;
if(cljs.core.truth_(and__11336__auto__)){
var and__11336__auto____$1 = (this__11939__auto____$1.constructor === other__11940__auto__.constructor);
if(and__11336__auto____$1){
return cljs.core.equiv_map.call(null,this__11939__auto____$1,other__11940__auto__);
} else {
return and__11336__auto____$1;
}
} else {
return and__11336__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11952__auto__,k__11953__auto__){
var self__ = this;
var this__11952__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__11953__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11952__auto____$1),self__.__meta),k__11953__auto__);
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11953__auto__)),null));
}
});

datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11950__auto__,k__11951__auto__,G__34475){
var self__ = this;
var this__11950__auto____$1 = this;
var pred__34479 = cljs.core.keyword_identical_QMARK_;
var expr__34480 = k__11951__auto__;
if(cljs.core.truth_(pred__34479.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__34480))){
return (new datascript.core.TxReport(G__34475,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34479.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__34480))){
return (new datascript.core.TxReport(self__.db_before,G__34475,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34479.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__34480))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__34475,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34479.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__34480))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__34475,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34479.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__34480))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__34475,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11951__auto__,G__34475),null));
}
}
}
}
}
});

datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11955__auto__){
var self__ = this;
var this__11955__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11942__auto__,G__34475){
var self__ = this;
var this__11942__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__34475,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11948__auto__,entry__11949__auto__){
var self__ = this;
var this__11948__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11949__auto__)){
return cljs.core._assoc.call(null,this__11948__auto____$1,cljs.core._nth.call(null,entry__11949__auto__,(0)),cljs.core._nth.call(null,entry__11949__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11948__auto____$1,entry__11949__auto__);
}
});

datascript.core.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datascript.core.TxReport.cljs$lang$type = true;

datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__11977__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});

datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__11977__auto__,writer__11978__auto__){
return cljs.core._write.call(null,writer__11978__auto__,"datascript.core/TxReport");
});

datascript.core.__GT_TxReport = (function datascript$core$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.core.map__GT_TxReport = (function datascript$core$map__GT_TxReport(G__34477){
return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__34477),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__34477),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__34477),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__34477),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__34477),null,cljs.core.dissoc.call(null,G__34477,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datascript.core.is_attr_QMARK_ = (function datascript$core$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datascript.core._attrs_by.call(null,db,property),attr);
});
datascript.core.multival_QMARK_ = (function datascript$core$multival_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function datascript$core$ref_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.component_QMARK_ = (function datascript$core$component_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.core.entid = (function datascript$core$entid(db,eid){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"db?","db?",1715863724,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref should contain 2 elements: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if(!(datascript.core.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,eid),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref attribute should be marked as :db.unique/identity: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected number or lookup ref for entity id, got "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
});
datascript.core.entid_strict = (function datascript$core$entid_strict(db,eid){
var or__11348__auto__ = datascript.core.entid.call(null,db,eid);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Nothing found for entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.core.entid_some = (function datascript$core$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.core.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datascript.core.validate_datom = (function datascript$core$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__11336__auto__ = datom.added;
if(cljs.core.truth_(and__11336__auto__)){
return datascript.core.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__11336__auto__;
}
})())){
var temp__4425__auto__ = cljs.core.not_empty.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__4425__auto__)){
var found = temp__4425__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot add "),cljs.core.str(cljs.core.pr_str.call(null,datom)),cljs.core.str(" because of unique constraint: "),cljs.core.str(cljs.core.pr_str.call(null,found))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.core.validate_eid = (function datascript$core$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.core.validate_attr = (function datascript$core$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity attribute "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.core.validate_val = (function datascript$core$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot store nil as a value at "),cljs.core.str(cljs.core.pr_str.call(null,at))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.core.current_tx = (function datascript$core$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function datascript$core$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function datascript$core$advance_max_eid(db,eid){
var G__34484 = db;
var G__34484__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.call(null,G__34484,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__34484);
return G__34484__$1;
});
datascript.core.allocate_eid = (function datascript$core$allocate_eid(){
var G__34486 = arguments.length;
switch (G__34486) {
case 2:
return datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});

datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});

datascript.core.allocate_eid.cljs$lang$maxFixedArity = 3;
datascript.core.tx_id_QMARK_ = (function datascript$core$tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.core.with_datom = (function datascript$core$with_datom(db,datom){
datascript.core.validate_datom.call(null,db,datom);

if(cljs.core.truth_(datom.added)){
return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_avet_quick),datom.e);
} else {
var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_avet_quick);
}
});
datascript.core.transact_report = (function datascript$core$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref_QMARK_ = (function datascript$core$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.core.reverse_ref = (function datascript$core$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.core.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),[cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__34489 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__34489,(0),null);
var ns = cljs.core.nth.call(null,vec__34489,(1),null);
var name = cljs.core.nth.call(null,vec__34489,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/_"),cljs.core.str(name)].join('');
} else {
return [cljs.core.str("_"),cljs.core.str(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.core.resolve_upsert = (function datascript$core$resolve_upsert(db,entity){
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.core._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if(cljs.core.truth_(temp__4423__auto__)){
var idents = temp__4423__auto__;
return cljs.core.reduce_kv.call(null,((function (idents,temp__4423__auto__){
return (function (ent,a,v){
var temp__4423__auto____$1 = cljs.core.first.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
if(cljs.core.truth_(temp__4423__auto____$1)){
var datom = temp__4423__auto____$1;
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent);
var new_eid = datom.e;
if((old_eid == null)){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,ent,a),new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
} else {
if(cljs.core._EQ_.call(null,old_eid,new_eid)){
return cljs.core.dissoc.call(null,ent,a);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot resolve upsert for "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),old_eid,a,v], true, false))),cljs.core.str(" conflicts with existing "),cljs.core.str(cljs.core.pr_str.call(null,datom))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));

}
}
} else {
return ent;
}
});})(idents,temp__4423__auto__))
,entity,cljs.core.select_keys.call(null,entity,idents));
} else {
return entity;
}
});
datascript.core.maybe_wrap_multival = (function datascript$core$maybe_wrap_multival(db,a,vs){
if(!((datascript.core.reverse_ref_QMARK_.call(null,a)) || (datascript.core.multival_QMARK_.call(null,db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not.call(null,(function (){var or__11348__auto__ = datascript.shim.array_QMARK_.call(null,vs);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return (cljs.core.coll_QMARK_.call(null,vs)) && (!(cljs.core.map_QMARK_.call(null,vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datascript.core.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.core.explode = (function datascript$core$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__12102__auto__ = ((function (eid){
return (function datascript$core$explode_$_iter__34498(s__34499){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__34499__$1 = s__34499;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34499__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__34505 = cljs.core.first.call(null,xs__4977__auto__);
var a = cljs.core.nth.call(null,vec__34505,(0),null);
var vs = cljs.core.nth.call(null,vec__34505,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.core.validate_attr.call(null,a,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false));
var reverse_QMARK_ = datascript.core.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datascript.core.reverse_ref.call(null,a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.core.ref_QMARK_.call(null,db,straight_a))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute "),cljs.core.str(cljs.core.pr_str.call(null,a)),cljs.core.str(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false)], null))})():null);
var iterys__12098__auto__ = ((function (s__34499__$1,_,reverse_QMARK_,straight_a,___$1,vec__34505,a,vs,xs__4977__auto__,temp__4425__auto__,eid){
return (function datascript$core$explode_$_iter__34498_$_iter__34500(s__34501){
return (new cljs.core.LazySeq(null,((function (s__34499__$1,_,reverse_QMARK_,straight_a,___$1,vec__34505,a,vs,xs__4977__auto__,temp__4425__auto__,eid){
return (function (){
var s__34501__$1 = s__34501;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34501__$1);
if(temp__4425__auto____$1){
var s__34501__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34501__$2)){
var c__12100__auto__ = cljs.core.chunk_first.call(null,s__34501__$2);
var size__12101__auto__ = cljs.core.count.call(null,c__12100__auto__);
var b__34503 = cljs.core.chunk_buffer.call(null,size__12101__auto__);
if((function (){var i__34502 = (0);
while(true){
if((i__34502 < size__12101__auto__)){
var v = cljs.core._nth.call(null,c__12100__auto__,i__34502);
cljs.core.chunk_append.call(null,b__34503,(((datascript.core.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.core.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__34506 = (i__34502 + (1));
i__34502 = G__34506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34503),datascript$core$explode_$_iter__34498_$_iter__34500.call(null,cljs.core.chunk_rest.call(null,s__34501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34503),null);
}
} else {
var v = cljs.core.first.call(null,s__34501__$2);
return cljs.core.cons.call(null,(((datascript.core.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.core.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$core$explode_$_iter__34498_$_iter__34500.call(null,cljs.core.rest.call(null,s__34501__$2)));
}
} else {
return null;
}
break;
}
});})(s__34499__$1,_,reverse_QMARK_,straight_a,___$1,vec__34505,a,vs,xs__4977__auto__,temp__4425__auto__,eid))
,null,null));
});})(s__34499__$1,_,reverse_QMARK_,straight_a,___$1,vec__34505,a,vs,xs__4977__auto__,temp__4425__auto__,eid))
;
var fs__12099__auto__ = cljs.core.seq.call(null,iterys__12098__auto__.call(null,datascript.core.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__12099__auto__){
return cljs.core.concat.call(null,fs__12099__auto__,datascript$core$explode_$_iter__34498.call(null,cljs.core.rest.call(null,s__34499__$1)));
} else {
var G__34507 = cljs.core.rest.call(null,s__34499__$1);
s__34499__$1 = G__34507;
continue;
}
} else {
var G__34508 = cljs.core.rest.call(null,s__34499__$1);
s__34499__$1 = G__34508;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__12102__auto__.call(null,entity);
});
datascript.core.transact_add = (function datascript$core$transact_add(report,p__34509){
var vec__34511 = p__34509;
var _ = cljs.core.nth.call(null,vec__34511,(0),null);
var e = cljs.core.nth.call(null,vec__34511,(1),null);
var a = cljs.core.nth.call(null,vec__34511,(2),null);
var v = cljs.core.nth.call(null,vec__34511,(3),null);
var ent = vec__34511;
datascript.core.validate_attr.call(null,a,ent);

datascript.core.validate_val.call(null,v,ent);

var tx = datascript.core.current_tx.call(null,report);
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var v__$1 = ((datascript.core.ref_QMARK_.call(null,db,a))?datascript.core.entid_strict.call(null,db,v):v);
var datom = (new datascript.core.Datom(e__$1,a,v__$1,tx,true));
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.core.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__4423__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var old_datom = temp__4423__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e__$1,a,old_datom.v,tx,false))),datom);
}
} else {
return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function datascript$core$transact_retract_datom(report,d){
var tx = datascript.core.current_tx.call(null,report);
return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.retract_components = (function datascript$core$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (d){
return datascript.core.component_QMARK_.call(null,db,d.a);
})),cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.core.transact_tx_data = (function datascript$core$transact_tx_data(report,es){
while(true){
if(((es == null)) || (cljs.core.sequential_QMARK_.call(null,es))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad transaction data "),cljs.core.str(cljs.core.pr_str.call(null,es)),cljs.core.str(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),es], null));
}

var vec__34516 = es;
var entity = cljs.core.nth.call(null,vec__34516,(0),null);
var entities = cljs.core.nthnext.call(null,vec__34516,(1));
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var known_eid = datascript.core.entid_some.call(null,db,(cljs.core.truth_(datascript.shim.neg_number_QMARK_.call(null,old_eid))?cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),old_eid], null)):((datascript.core.tx_id_QMARK_.call(null,old_eid))?datascript.core.current_tx.call(null,report):old_eid
)));
var upserted = datascript.core.resolve_upsert.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),known_eid));
var new_eid = (function (){var or__11348__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(upserted);
if(cljs.core.truth_(or__11348__auto__)){
return or__11348__auto__;
} else {
return datascript.core.next_eid.call(null,db);
}
})();
var new_entity = cljs.core.assoc.call(null,upserted,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var new_report = (((old_eid == null))?datascript.core.allocate_eid.call(null,report,new_eid):(cljs.core.truth_(datascript.shim.neg_number_QMARK_.call(null,old_eid))?datascript.core.allocate_eid.call(null,report,old_eid,new_eid):(((typeof old_eid === 'number') && ((old_eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))))?datascript.core.allocate_eid.call(null,report,old_eid):report
)));
var G__34520 = new_report;
var G__34521 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,new_entity),entities);
report = G__34520;
es = G__34521;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__34517 = entity;
var op = cljs.core.nth.call(null,vec__34517,(0),null);
var e = cljs.core.nth.call(null,vec__34517,(1),null);
var a = cljs.core.nth.call(null,vec__34517,(2),null);
var v = cljs.core.nth.call(null,vec__34517,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__34518 = entity;
var _ = cljs.core.nth.call(null,vec__34518,(0),null);
var f = cljs.core.nth.call(null,vec__34518,(1),null);
var args = cljs.core.nthnext.call(null,vec__34518,(2));
var G__34522 = report;
var G__34523 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__34522;
es = G__34523;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__34519 = entity;
var _ = cljs.core.nth.call(null,vec__34519,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__34519,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__34519,(2),null);
var ov = cljs.core.nth.call(null,vec__34519,(3),null);
var nv = cljs.core.nth.call(null,vec__34519,(4),null);
var e__$2 = datascript.core.entid_strict.call(null,db,e__$1);
var ___$1 = datascript.core.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datascript.core.ref_QMARK_.call(null,db,a__$1))?datascript.core.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datascript.core.ref_QMARK_.call(null,db,a__$1))?datascript.core.entid_strict.call(null,db,nv):nv);
var ___$2 = datascript.core.validate_val.call(null,ov__$1,entity);
var ___$3 = datascript.core.validate_val.call(null,nv__$1,entity);
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.core.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__34519,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,___$3,datoms,vec__34517,op,e,a,v,vec__34516,entity,entities,db){
return (function (d){
return cljs.core._EQ_.call(null,d.v,ov__$1);
});})(report,es,vec__34519,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,___$3,datoms,vec__34517,op,e,a,v,vec__34516,entity,entities,db))
,datoms))){
var G__34524 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__34525 = entities;
report = G__34524;
es = G__34525;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__34526 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__34527 = entities;
report = G__34526;
es = G__34527;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.core.tx_id_QMARK_.call(null,e)){
var G__34528 = report;
var G__34529 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx.call(null,report),a,v], null)], null),entities);
report = G__34528;
es = G__34529;
continue;
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && (datascript.core.tx_id_QMARK_.call(null,v))){
var G__34530 = report;
var G__34531 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx.call(null,report)], null)], null),entities);
report = G__34530;
es = G__34531;
continue;
} else {
if(cljs.core.truth_(datascript.shim.neg_number_QMARK_.call(null,e))){
var temp__4423__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_(temp__4423__auto__)){
var eid = temp__4423__auto__;
var G__34532 = report;
var G__34533 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__34532;
es = G__34533;
continue;
} else {
var G__34534 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__34535 = es;
report = G__34534;
es = G__34535;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__11336__auto__ = datascript.core.ref_QMARK_.call(null,db,a);
if(and__11336__auto__){
return datascript.shim.neg_number_QMARK_.call(null,v);
} else {
return and__11336__auto__;
}
})())){
var temp__4423__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__4423__auto__)){
var vid = temp__4423__auto__;
var G__34536 = report;
var G__34537 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__34536;
es = G__34537;
continue;
} else {
var G__34538 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__34539 = es;
report = G__34538;
es = G__34539;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__34540 = datascript.core.transact_add.call(null,report,entity);
var G__34541 = entities;
report = G__34540;
es = G__34541;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var v__$1 = ((datascript.core.ref_QMARK_.call(null,db,a))?datascript.core.entid_strict.call(null,db,v):v);
datascript.core.validate_attr.call(null,a,entity);

datascript.core.validate_val.call(null,v__$1,entity);

var temp__4423__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var old_datom = temp__4423__auto__;
var G__34542 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__34543 = entities;
report = G__34542;
es = G__34543;
continue;
} else {
var G__34544 = report;
var G__34545 = entities;
report = G__34544;
es = G__34545;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
datascript.core.validate_attr.call(null,a,entity);

var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__34546 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__34547 = cljs.core.concat.call(null,datascript.core.retract_components.call(null,db,datoms),entities);
report = G__34546;
es = G__34547;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var e_datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,es,e__$1,e_datoms,vec__34517,op,e,a,v,vec__34516,entity,entities,db){
return (function (a__$1){
return datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e__$1,e_datoms,vec__34517,op,e,a,v,vec__34516,entity,entities,db))
,datascript.core._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
var G__34548 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__34549 = cljs.core.concat.call(null,datascript.core.retract_components.call(null,db,e_datoms),entities);
report = G__34548;
es = G__34549;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unknown operation at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity type at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
break;
}
});

//# sourceMappingURL=core.js.map