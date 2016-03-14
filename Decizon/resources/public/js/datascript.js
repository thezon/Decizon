// Compiled by ClojureScript 0.0-3291 {}
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.core');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function datascript$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("de","entity?","de/entity?",555337042,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null))))].join('')));
}

return entity.db;
});
datascript.datom = datascript.core.datom;
datascript.pull = datascript.pull_api.pull;
datascript.pull_many = datascript.pull_api.pull_many;
datascript.touch = datascript.impl.entity.touch;
datascript.empty_db = datascript.core.empty_db;
datascript.init_db = datascript.core.init_db;
datascript.datom_QMARK_ = datascript.core.datom_QMARK_;
datascript.db_QMARK_ = datascript.core.db_QMARK_;
datascript.tx0 = datascript.core.tx0;
datascript.is_filtered = (function datascript$is_filtered(x){
return (x instanceof datascript.core.FilteredDB);
});
datascript.filter = (function datascript$filter(db,pred){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.core.FilteredDB(u,((function (fdb,u){
return (function (p1__33877_SHARP_){
var and__11336__auto__ = pred.call(null,u,p1__33877_SHARP_);
if(cljs.core.truth_(and__11336__auto__)){
return fdb.pred.call(null,p1__33877_SHARP_);
} else {
return and__11336__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.core.FilteredDB(db,(function (p1__33878_SHARP_){
return pred.call(null,db,p1__33878_SHARP_);
}),null,null,null));
}
});
datascript.with$ = (function datascript$with(){
var G__33880 = arguments.length;
switch (G__33880) {
case 2:
return datascript.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.with$.call(null,db,tx_data,null);
});

datascript.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.with$.cljs$lang$maxFixedArity = 3;
datascript.db_with = (function datascript$db_with(db,tx_data){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
datascript.datoms = (function datascript$datoms(){
var G__33883 = arguments.length;
switch (G__33883) {
case 2:
return datascript.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.datoms.cljs$lang$maxFixedArity = 6;
datascript.seek_datoms = (function datascript$seek_datoms(){
var G__33886 = arguments.length;
switch (G__33886) {
case 2:
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.index_range = (function datascript$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.core.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("dc","db?","dc/db?",1715868461,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.core._index_range.call(null,db,attr,start,end);
});
datascript.entid = datascript.core.entid;
datascript.conn_QMARK_ = (function datascript$conn_QMARK_(conn){
var and__11336__auto__ = (conn instanceof cljs.core.Atom);
if(and__11336__auto__){
return datascript.core.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__11336__auto__;
}
});
datascript.create_conn = (function datascript$create_conn(){
var G__33889 = arguments.length;
switch (G__33889) {
case 0:
return datascript.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.create_conn.call(null,datascript.core.default_schema);
});

datascript.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema__$1){
return cljs.core.atom.call(null,datascript.empty_db.call(null,schema__$1),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});

datascript.create_conn.cljs$lang$maxFixedArity = 1;
datascript._transact_BANG_ = (function datascript$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function datascript$transact_BANG_(){
var G__33892 = arguments.length;
switch (G__33892) {
case 2:
return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__33893_33900 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__33894_33901 = null;
var count__33895_33902 = (0);
var i__33896_33903 = (0);
while(true){
if((i__33896_33903 < count__33895_33902)){
var vec__33897_33904 = cljs.core._nth.call(null,chunk__33894_33901,i__33896_33903);
var __33905 = cljs.core.nth.call(null,vec__33897_33904,(0),null);
var callback_33906 = cljs.core.nth.call(null,vec__33897_33904,(1),null);
callback_33906.call(null,report);

var G__33907 = seq__33893_33900;
var G__33908 = chunk__33894_33901;
var G__33909 = count__33895_33902;
var G__33910 = (i__33896_33903 + (1));
seq__33893_33900 = G__33907;
chunk__33894_33901 = G__33908;
count__33895_33902 = G__33909;
i__33896_33903 = G__33910;
continue;
} else {
var temp__4425__auto___33911 = cljs.core.seq.call(null,seq__33893_33900);
if(temp__4425__auto___33911){
var seq__33893_33912__$1 = temp__4425__auto___33911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33893_33912__$1)){
var c__12133__auto___33913 = cljs.core.chunk_first.call(null,seq__33893_33912__$1);
var G__33914 = cljs.core.chunk_rest.call(null,seq__33893_33912__$1);
var G__33915 = c__12133__auto___33913;
var G__33916 = cljs.core.count.call(null,c__12133__auto___33913);
var G__33917 = (0);
seq__33893_33900 = G__33914;
chunk__33894_33901 = G__33915;
count__33895_33902 = G__33916;
i__33896_33903 = G__33917;
continue;
} else {
var vec__33898_33918 = cljs.core.first.call(null,seq__33893_33912__$1);
var __33919 = cljs.core.nth.call(null,vec__33898_33918,(0),null);
var callback_33920 = cljs.core.nth.call(null,vec__33898_33918,(1),null);
callback_33920.call(null,report);

var G__33921 = cljs.core.next.call(null,seq__33893_33912__$1);
var G__33922 = null;
var G__33923 = (0);
var G__33924 = (0);
seq__33893_33900 = G__33921;
chunk__33894_33901 = G__33922;
count__33895_33902 = G__33923;
i__33896_33903 = G__33924;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.listen_BANG_ = (function datascript$listen_BANG_(){
var G__33926 = arguments.length;
switch (G__33926) {
case 2:
return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.unlisten_BANG_ = (function datascript$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.core.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.core.db_from_reader], null);
var seq__33928_33934 = cljs.core.seq.call(null,datascript.data_readers);
var chunk__33929_33935 = null;
var count__33930_33936 = (0);
var i__33931_33937 = (0);
while(true){
if((i__33931_33937 < count__33930_33936)){
var vec__33932_33938 = cljs.core._nth.call(null,chunk__33929_33935,i__33931_33937);
var tag_33939 = cljs.core.nth.call(null,vec__33932_33938,(0),null);
var cb_33940 = cljs.core.nth.call(null,vec__33932_33938,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_33939,cb_33940);

var G__33941 = seq__33928_33934;
var G__33942 = chunk__33929_33935;
var G__33943 = count__33930_33936;
var G__33944 = (i__33931_33937 + (1));
seq__33928_33934 = G__33941;
chunk__33929_33935 = G__33942;
count__33930_33936 = G__33943;
i__33931_33937 = G__33944;
continue;
} else {
var temp__4425__auto___33945 = cljs.core.seq.call(null,seq__33928_33934);
if(temp__4425__auto___33945){
var seq__33928_33946__$1 = temp__4425__auto___33945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33928_33946__$1)){
var c__12133__auto___33947 = cljs.core.chunk_first.call(null,seq__33928_33946__$1);
var G__33948 = cljs.core.chunk_rest.call(null,seq__33928_33946__$1);
var G__33949 = c__12133__auto___33947;
var G__33950 = cljs.core.count.call(null,c__12133__auto___33947);
var G__33951 = (0);
seq__33928_33934 = G__33948;
chunk__33929_33935 = G__33949;
count__33930_33936 = G__33950;
i__33931_33937 = G__33951;
continue;
} else {
var vec__33933_33952 = cljs.core.first.call(null,seq__33928_33946__$1);
var tag_33953 = cljs.core.nth.call(null,vec__33933_33952,(0),null);
var cb_33954 = cljs.core.nth.call(null,vec__33933_33952,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_33953,cb_33954);

var G__33955 = cljs.core.next.call(null,seq__33928_33946__$1);
var G__33956 = null;
var G__33957 = (0);
var G__33958 = (0);
seq__33928_33934 = G__33955;
chunk__33929_33935 = G__33956;
count__33930_33936 = G__33957;
i__33931_33937 = G__33958;
continue;
}
} else {
}
}
break;
}
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function datascript$tempid(){
var G__33960 = arguments.length;
switch (G__33960) {
case 1:
return datascript.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});

datascript.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.tempid.cljs$lang$maxFixedArity = 2;
datascript.resolve_tempid = (function datascript$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = (function datascript$db(conn){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.deref.call(null,conn);
});
datascript.transact = (function datascript$transact(){
var G__33963 = arguments.length;
switch (G__33963) {
case 2:
return datascript.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.transact.call(null,conn,tx_data,null);
});

datascript.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.t33964 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t33964 = (function (conn,tx_data,tx_meta,res,meta33965){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta33965 = meta33965;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.t33964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_33966,meta33965__$1){
var self__ = this;
var _33966__$1 = this;
return (new datascript.t33964(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta33965__$1));
});})(res))
;

datascript.t33964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_33966){
var self__ = this;
var _33966__$1 = this;
return self__.meta33965;
});})(res))
;

datascript.t33964.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.t33964.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.t33964.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.t33964.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta33965","meta33965",1269557230,null)], null);
});})(res))
;

datascript.t33964.cljs$lang$type = true;

datascript.t33964.cljs$lang$ctorStr = "datascript/t33964";

datascript.t33964.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"datascript/t33964");
});})(res))
;

datascript.__GT_t33964 = ((function (res){
return (function datascript$__GT_t33964(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta33965){
return (new datascript.t33964(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta33965));
});})(res))
;

}

return (new datascript.t33964(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.transact.cljs$lang$maxFixedArity = 3;
datascript.future_call = (function datascript$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.t33971 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t33971 = (function (future_call,f,res,realized,meta33972){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta33972 = meta33972;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.t33971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_33973,meta33972__$1){
var self__ = this;
var _33973__$1 = this;
return (new datascript.t33971(self__.future_call,self__.f,self__.res,self__.realized,meta33972__$1));
});})(res,realized))
;

datascript.t33971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_33973){
var self__ = this;
var _33973__$1 = this;
return self__.meta33972;
});})(res,realized))
;

datascript.t33971.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.t33971.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.t33971.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.t33971.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta33972","meta33972",-353701233,null)], null);
});})(res,realized))
;

datascript.t33971.cljs$lang$type = true;

datascript.t33971.cljs$lang$ctorStr = "datascript/t33971";

datascript.t33971.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__11927__auto__,writer__11928__auto__,opt__11929__auto__){
return cljs.core._write.call(null,writer__11928__auto__,"datascript/t33971");
});})(res,realized))
;

datascript.__GT_t33971 = ((function (res,realized){
return (function datascript$future_call_$___GT_t33971(future_call__$1,f__$1,res__$1,realized__$1,meta33972){
return (new datascript.t33971(future_call__$1,f__$1,res__$1,realized__$1,meta33972));
});})(res,realized))
;

}

return (new datascript.t33971(datascript$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.transact_async = (function datascript$transact_async(){
var G__33975 = arguments.length;
switch (G__33975) {
case 2:
return datascript.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.transact_async.call(null,conn,tx_data,null);
});

datascript.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return datascript.future_call.call(null,(function (){
return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.transact_async.cljs$lang$maxFixedArity = 3;
datascript.rand_bits = (function datascript$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.to_hex_string = (function datascript$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.squuid = (function datascript$squuid(){
var G__33978 = arguments.length;
switch (G__33978) {
case 0:
return datascript.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.squuid.call(null,(new Date()).getTime());
});

datascript.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.squuid.cljs$lang$maxFixedArity = 1;
datascript.squuid_time_millis = (function datascript$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.js.map