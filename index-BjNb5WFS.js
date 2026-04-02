var e = Object.create
  , t = Object.defineProperty
  , n = Object.getOwnPropertyDescriptor
  , r = Object.getOwnPropertyNames
  , i = Object.getPrototypeOf
  , a = Object.prototype.hasOwnProperty
  , o = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , s = (e, n) => {
    let r = {};
    for (var i in e)
        t(r, i, {
            get: e[i],
            enumerable: !0
        });
    return n || t(r, Symbol.toStringTag, {
        value: `Module`
    }),
    r
}
  , c = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
            d = c[l],
            !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
    return e
}
  , l = (n, r, a) => (a = n == null ? {} : e(i(n)),
c(r || !n || !n.__esModule ? t(a, `default`, {
    value: n,
    enumerable: !0
}) : a, n));
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`,
        t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
}
)();
function u(e) {
    let t = Object.create(null);
    for (let n of e.split(`,`))
        t[n] = 1;
    return e => e in t
}
var d = {}, f = [], p = () => {}
, m = () => !1, h = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), g = e => e.startsWith(`onUpdate:`), _ = Object.assign, v = (e, t) => {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
, y = Object.prototype.hasOwnProperty, b = (e, t) => y.call(e, t), x = Array.isArray, S = e => ne(e) === `[object Map]`, C = e => ne(e) === `[object Set]`, w = e => ne(e) === `[object Date]`, T = e => typeof e == `function`, E = e => typeof e == `string`, D = e => typeof e == `symbol`, O = e => typeof e == `object` && !!e, ee = e => (O(e) || T(e)) && T(e.then) && T(e.catch), te = Object.prototype.toString, ne = e => te.call(e), re = e => ne(e).slice(8, -1), k = e => ne(e) === `[object Object]`, ie = e => E(e) && e !== `NaN` && e[0] !== `-` && `` + parseInt(e, 10) === e, A = u(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`), ae = e => {
    let t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
, oe = /-\w/g, j = ae(e => e.replace(oe, e => e.slice(1).toUpperCase())), se = /\B([A-Z])/g, ce = ae(e => e.replace(se, `-$1`).toLowerCase()), le = ae(e => e.charAt(0).toUpperCase() + e.slice(1)), ue = ae(e => e ? `on${le(e)}` : ``), de = (e, t) => !Object.is(e, t), fe = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
, pe = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
, me = e => {
    let t = parseFloat(e);
    return isNaN(t) ? e : t
}
, he, ge = () => he ||= typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {};
function _e(e) {
    if (x(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) {
            let r = e[n]
              , i = E(r) ? xe(r) : _e(r);
            if (i)
                for (let e in i)
                    t[e] = i[e]
        }
        return t
    } else if (E(e) || O(e))
        return e
}
var ve = /;(?![^(]*\))/g
  , ye = /:([^]+)/
  , be = /\/\*[^]*?\*\//g;
function xe(e) {
    let t = {};
    return e.replace(be, ``).split(ve).forEach(e => {
        if (e) {
            let n = e.split(ye);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }
    ),
    t
}
function Se(e) {
    let t = ``;
    if (E(e))
        t = e;
    else if (x(e))
        for (let n = 0; n < e.length; n++) {
            let r = Se(e[n]);
            r && (t += r + ` `)
        }
    else if (O(e))
        for (let n in e)
            e[n] && (t += n + ` `);
    return t.trim()
}
var Ce = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`
  , we = u(Ce);
Ce + ``;
function Te(e) {
    return !!e || e === ``
}
function Ee(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = De(e[r], t[r]);
    return n
}
function De(e, t) {
    if (e === t)
        return !0;
    let n = w(e)
      , r = w(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = D(e),
    r = D(t),
    n || r)
        return e === t;
    if (n = x(e),
    r = x(t),
    n || r)
        return n && r ? Ee(e, t) : !1;
    if (n = O(e),
    r = O(t),
    n || r) {
        if (!n || !r || Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (let n in e) {
            let r = e.hasOwnProperty(n)
              , i = t.hasOwnProperty(n);
            if (r && !i || !r && i || !De(e[n], t[n]))
                return !1
        }
    }
    return String(e) === String(t)
}
var Oe = e => !!(e && e.__v_isRef === !0), M = e => E(e) ? e : e == null ? `` : x(e) || O(e) && (e.toString === te || !T(e.toString)) ? Oe(e) ? M(e.value) : JSON.stringify(e, ke, 2) : String(e), ke = (e, t) => Oe(t) ? ke(e, t.value) : S(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (e, [t,n], r) => (e[Ae(t, r) + ` =>`] = n,
    e), {})
} : C(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(e => Ae(e))
} : D(t) ? Ae(t) : O(t) && !x(t) && !k(t) ? String(t) : t, Ae = (e, t=``) => D(e) ? `Symbol(${e.description ?? t})` : e, je, Me = class {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.__v_skip = !0,
        this.parent = je,
        !e && je && (this.index = (je.scopes ||= []).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, t;
            if (this.scopes)
                for (e = 0,
                t = this.scopes.length; e < t; e++)
                    this.scopes[e].pause();
            for (e = 0,
            t = this.effects.length; e < t; e++)
                this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, t;
            if (this.scopes)
                for (e = 0,
                t = this.scopes.length; e < t; e++)
                    this.scopes[e].resume();
            for (e = 0,
            t = this.effects.length; e < t; e++)
                this.effects[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            let t = je;
            try {
                return je = this,
                e()
            } finally {
                je = t
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = je,
        je = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (je = this.prevScope,
        this.prevScope = void 0)
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let t, n;
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].stop();
            for (this.effects.length = 0,
            t = 0,
            n = this.cleanups.length; t < n; t++)
                this.cleanups[t]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                let e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e,
                e.index = this.index)
            }
            this.parent = void 0
        }
    }
}
;
function Ne() {
    return je
}
var N, Pe = new WeakSet, Fe = class {
    constructor(e) {
        this.fn = e,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        je && je.active && je.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Pe.has(this) && (Pe.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        Qe(this),
        He(this);
        let e = N
          , t = Je;
        N = this,
        Je = !0;
        try {
            return this.fn()
        } finally {
            Ue(this),
            N = e,
            Je = t,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep)
                Ke(e);
            this.deps = this.depsTail = void 0,
            Qe(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        We(this) && this.run()
    }
    get dirty() {
        return We(this)
    }
}
, Ie = 0, Le, Re;
function ze(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Re,
        Re = e;
        return
    }
    e.next = Le,
    Le = e
}
function Be() {
    Ie++
}
function Ve() {
    if (--Ie > 0)
        return;
    if (Re) {
        let e = Re;
        for (Re = void 0; e; ) {
            let t = e.next;
            e.next = void 0,
            e.flags &= -9,
            e = t
        }
    }
    let e;
    for (; Le; ) {
        let t = Le;
        for (Le = void 0; t; ) {
            let n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (t) {
                    e ||= t
                }
            t = n
        }
    }
    if (e)
        throw e
}
function He(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Ue(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        let e = r.prevDep;
        r.version === -1 ? (r === n && (n = e),
        Ke(r),
        qe(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = e
    }
    e.deps = t,
    e.depsTail = n
}
function We(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Ge(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === $e) || (e.globalVersion = $e,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e))))
        return;
    e.flags |= 2;
    let t = e.dep
      , n = N
      , r = Je;
    N = e,
    Je = !0;
    try {
        He(e);
        let n = e.fn(e._value);
        (t.version === 0 || de(n, e._value)) && (e.flags |= 128,
        e._value = n,
        t.version++)
    } catch (e) {
        throw t.version++,
        e
    } finally {
        N = n,
        Je = r,
        Ue(e),
        e.flags &= -3
    }
}
function Ke(e, t=!1) {
    let {dep: n, prevSub: r, nextSub: i} = e;
    if (r && (r.nextSub = i,
    e.prevSub = void 0),
    i && (i.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let e = n.computed.deps; e; e = e.nextDep)
            Ke(e, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function qe(e) {
    let {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
var Je = !0
  , Ye = [];
function Xe() {
    Ye.push(Je),
    Je = !1
}
function Ze() {
    let e = Ye.pop();
    Je = e === void 0 ? !0 : e
}
function Qe(e) {
    let {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        let e = N;
        N = void 0;
        try {
            t()
        } finally {
            N = e
        }
    }
}
var $e = 0
  , et = class {
    constructor(e, t) {
        this.sub = e,
        this.dep = t,
        this.version = t.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
  , tt = class {
    constructor(e) {
        this.computed = e,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(e) {
        if (!N || !Je || N === this.computed)
            return;
        let t = this.activeLink;
        if (t === void 0 || t.sub !== N)
            t = this.activeLink = new et(N,this),
            N.deps ? (t.prevDep = N.depsTail,
            N.depsTail.nextDep = t,
            N.depsTail = t) : N.deps = N.depsTail = t,
            nt(t);
        else if (t.version === -1 && (t.version = this.version,
        t.nextDep)) {
            let e = t.nextDep;
            e.prevDep = t.prevDep,
            t.prevDep && (t.prevDep.nextDep = e),
            t.prevDep = N.depsTail,
            t.nextDep = void 0,
            N.depsTail.nextDep = t,
            N.depsTail = t,
            N.deps === t && (N.deps = e)
        }
        return t
    }
    trigger(e) {
        this.version++,
        $e++,
        this.notify(e)
    }
    notify(e) {
        Be();
        try {
            for (let e = this.subs; e; e = e.prevSub)
                e.sub.notify() && e.sub.dep.notify()
        } finally {
            Ve()
        }
    }
}
;
function nt(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let e = t.deps; e; e = e.nextDep)
                nt(e)
        }
        let n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
var rt = new WeakMap
  , it = Symbol(``)
  , at = Symbol(``)
  , ot = Symbol(``);
function st(e, t, n) {
    if (Je && N) {
        let t = rt.get(e);
        t || rt.set(e, t = new Map);
        let r = t.get(n);
        r || (t.set(n, r = new tt),
        r.map = t,
        r.key = n),
        r.track()
    }
}
function ct(e, t, n, r, i, a) {
    let o = rt.get(e);
    if (!o) {
        $e++;
        return
    }
    let s = e => {
        e && e.trigger()
    }
    ;
    if (Be(),
    t === `clear`)
        o.forEach(s);
    else {
        let i = x(e)
          , a = i && ie(n);
        if (i && n === `length`) {
            let e = Number(r);
            o.forEach( (t, n) => {
                (n === `length` || n === ot || !D(n) && n >= e) && s(t)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)),
            a && s(o.get(ot)),
            t) {
            case `add`:
                i ? a && s(o.get(`length`)) : (s(o.get(it)),
                S(e) && s(o.get(at)));
                break;
            case `delete`:
                i || (s(o.get(it)),
                S(e) && s(o.get(at)));
                break;
            case `set`:
                S(e) && s(o.get(it));
                break
            }
    }
    Ve()
}
function lt(e) {
    let t = P(e);
    return t === e ? t : (st(t, `iterate`, ot),
    Yt(e) ? t : t.map(Qt))
}
function ut(e) {
    return st(e = P(e), `iterate`, ot),
    e
}
function dt(e, t) {
    return Jt(e) ? $t(qt(e) ? Qt(t) : t) : Qt(t)
}
var ft = {
    __proto__: null,
    [Symbol.iterator]() {
        return pt(this, Symbol.iterator, e => dt(this, e))
    },
    concat(...e) {
        return lt(this).concat(...e.map(e => x(e) ? lt(e) : e))
    },
    entries() {
        return pt(this, `entries`, e => (e[1] = dt(this, e[1]),
        e))
    },
    every(e, t) {
        return ht(this, `every`, e, t, void 0, arguments)
    },
    filter(e, t) {
        return ht(this, `filter`, e, t, e => e.map(e => dt(this, e)), arguments)
    },
    find(e, t) {
        return ht(this, `find`, e, t, e => dt(this, e), arguments)
    },
    findIndex(e, t) {
        return ht(this, `findIndex`, e, t, void 0, arguments)
    },
    findLast(e, t) {
        return ht(this, `findLast`, e, t, e => dt(this, e), arguments)
    },
    findLastIndex(e, t) {
        return ht(this, `findLastIndex`, e, t, void 0, arguments)
    },
    forEach(e, t) {
        return ht(this, `forEach`, e, t, void 0, arguments)
    },
    includes(...e) {
        return _t(this, `includes`, e)
    },
    indexOf(...e) {
        return _t(this, `indexOf`, e)
    },
    join(e) {
        return lt(this).join(e)
    },
    lastIndexOf(...e) {
        return _t(this, `lastIndexOf`, e)
    },
    map(e, t) {
        return ht(this, `map`, e, t, void 0, arguments)
    },
    pop() {
        return vt(this, `pop`)
    },
    push(...e) {
        return vt(this, `push`, e)
    },
    reduce(e, ...t) {
        return gt(this, `reduce`, e, t)
    },
    reduceRight(e, ...t) {
        return gt(this, `reduceRight`, e, t)
    },
    shift() {
        return vt(this, `shift`)
    },
    some(e, t) {
        return ht(this, `some`, e, t, void 0, arguments)
    },
    splice(...e) {
        return vt(this, `splice`, e)
    },
    toReversed() {
        return lt(this).toReversed()
    },
    toSorted(e) {
        return lt(this).toSorted(e)
    },
    toSpliced(...e) {
        return lt(this).toSpliced(...e)
    },
    unshift(...e) {
        return vt(this, `unshift`, e)
    },
    values() {
        return pt(this, `values`, e => dt(this, e))
    }
};
function pt(e, t, n) {
    let r = ut(e)
      , i = r[t]();
    return r !== e && !Yt(e) && (i._next = i.next,
    i.next = () => {
        let e = i._next();
        return e.done || (e.value = n(e.value)),
        e
    }
    ),
    i
}
var mt = Array.prototype;
function ht(e, t, n, r, i, a) {
    let o = ut(e)
      , s = o !== e && !Yt(e)
      , c = o[t];
    if (c !== mt[t]) {
        let t = c.apply(e, a);
        return s ? Qt(t) : t
    }
    let l = n;
    o !== e && (s ? l = function(t, r) {
        return n.call(this, dt(e, t), r, e)
    }
    : n.length > 2 && (l = function(t, r) {
        return n.call(this, t, r, e)
    }
    ));
    let u = c.call(o, l, r);
    return s && i ? i(u) : u
}
function gt(e, t, n, r) {
    let i = ut(e)
      , a = i !== e && !Yt(e)
      , o = n
      , s = !1;
    i !== e && (a ? (s = r.length === 0,
    o = function(t, r, i) {
        return s && (s = !1,
        t = dt(e, t)),
        n.call(this, t, dt(e, r), i, e)
    }
    ) : n.length > 3 && (o = function(t, r, i) {
        return n.call(this, t, r, i, e)
    }
    ));
    let c = i[t](o, ...r);
    return s ? dt(e, c) : c
}
function _t(e, t, n) {
    let r = P(e);
    st(r, `iterate`, ot);
    let i = r[t](...n);
    return (i === -1 || i === !1) && Xt(n[0]) ? (n[0] = P(n[0]),
    r[t](...n)) : i
}
function vt(e, t, n=[]) {
    Xe(),
    Be();
    let r = P(e)[t].apply(e, n);
    return Ve(),
    Ze(),
    r
}
var yt = u(`__proto__,__v_isRef,__isVue`)
  , bt = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== `arguments` && e !== `caller`).map(e => Symbol[e]).filter(D));
function xt(e) {
    D(e) || (e = String(e));
    let t = P(this);
    return st(t, `has`, e),
    t.hasOwnProperty(e)
}
var St = class {
    constructor(e=!1, t=!1) {
        this._isReadonly = e,
        this._isShallow = t
    }
    get(e, t, n) {
        if (t === `__v_skip`)
            return e.__v_skip;
        let r = this._isReadonly
          , i = this._isShallow;
        if (t === `__v_isReactive`)
            return !r;
        if (t === `__v_isReadonly`)
            return r;
        if (t === `__v_isShallow`)
            return i;
        if (t === `__v_raw`)
            return n === (r ? i ? Bt : zt : i ? Rt : Lt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
        let a = x(e);
        if (!r) {
            let e;
            if (a && (e = ft[t]))
                return e;
            if (t === `hasOwnProperty`)
                return xt
        }
        let o = Reflect.get(e, t, en(e) ? e : n);
        if ((D(t) ? bt.has(t) : yt(t)) || (r || st(e, `get`, t),
        i))
            return o;
        if (en(o)) {
            let e = a && ie(t) ? o : o.value;
            return r && O(e) ? Gt(e) : e
        }
        return O(o) ? r ? Gt(o) : Ut(o) : o
    }
}
  , Ct = class extends St {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, t, n, r) {
        let i = e[t]
          , a = x(e) && ie(t);
        if (!this._isShallow) {
            let e = Jt(i);
            if (!Yt(n) && !Jt(n) && (i = P(i),
            n = P(n)),
            !a && en(i) && !en(n))
                return e || (i.value = n),
                !0
        }
        let o = a ? Number(t) < e.length : b(e, t)
          , s = Reflect.set(e, t, n, en(e) ? e : r);
        return e === P(r) && (o ? de(n, i) && ct(e, `set`, t, n, i) : ct(e, `add`, t, n)),
        s
    }
    deleteProperty(e, t) {
        let n = b(e, t)
          , r = e[t]
          , i = Reflect.deleteProperty(e, t);
        return i && n && ct(e, `delete`, t, void 0, r),
        i
    }
    has(e, t) {
        let n = Reflect.has(e, t);
        return (!D(t) || !bt.has(t)) && st(e, `has`, t),
        n
    }
    ownKeys(e) {
        return st(e, `iterate`, x(e) ? `length` : it),
        Reflect.ownKeys(e)
    }
}
  , wt = class extends St {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
  , Tt = new Ct
  , Et = new wt
  , Dt = new Ct(!0)
  , Ot = e => e
  , kt = e => Reflect.getPrototypeOf(e);
function At(e, t, n) {
    return function(...r) {
        let i = this.__v_raw
          , a = P(i)
          , o = S(a)
          , s = e === `entries` || e === Symbol.iterator && o
          , c = e === `keys` && o
          , l = i[e](...r)
          , u = n ? Ot : t ? $t : Qt;
        return !t && st(a, `iterate`, c ? at : it),
        _(Object.create(l), {
            next() {
                let {value: e, done: t} = l.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: s ? [u(e[0]), u(e[1])] : u(e),
                    done: t
                }
            }
        })
    }
}
function jt(e) {
    return function(...t) {
        return e === `delete` ? !1 : e === `clear` ? void 0 : this
    }
}
function Mt(e, t) {
    let n = {
        get(n) {
            let r = this.__v_raw
              , i = P(r)
              , a = P(n);
            e || (de(n, a) && st(i, `get`, n),
            st(i, `get`, a));
            let {has: o} = kt(i)
              , s = t ? Ot : e ? $t : Qt;
            if (o.call(i, n))
                return s(r.get(n));
            if (o.call(i, a))
                return s(r.get(a));
            r !== i && r.get(n)
        },
        get size() {
            let t = this.__v_raw;
            return !e && st(P(t), `iterate`, it),
            t.size
        },
        has(t) {
            let n = this.__v_raw
              , r = P(n)
              , i = P(t);
            return e || (de(t, i) && st(r, `has`, t),
            st(r, `has`, i)),
            t === i ? n.has(t) : n.has(t) || n.has(i)
        },
        forEach(n, r) {
            let i = this
              , a = i.__v_raw
              , o = P(a)
              , s = t ? Ot : e ? $t : Qt;
            return !e && st(o, `iterate`, it),
            a.forEach( (e, t) => n.call(r, s(e), s(t), i))
        }
    };
    return _(n, e ? {
        add: jt(`add`),
        set: jt(`set`),
        delete: jt(`delete`),
        clear: jt(`clear`)
    } : {
        add(e) {
            let n = P(this)
              , r = kt(n)
              , i = P(e)
              , a = !t && !Yt(e) && !Jt(e) ? i : e;
            return r.has.call(n, a) || de(e, a) && r.has.call(n, e) || de(i, a) && r.has.call(n, i) || (n.add(a),
            ct(n, `add`, a, a)),
            this
        },
        set(e, n) {
            !t && !Yt(n) && !Jt(n) && (n = P(n));
            let r = P(this)
              , {has: i, get: a} = kt(r)
              , o = i.call(r, e);
            o ||= (e = P(e),
            i.call(r, e));
            let s = a.call(r, e);
            return r.set(e, n),
            o ? de(n, s) && ct(r, `set`, e, n, s) : ct(r, `add`, e, n),
            this
        },
        delete(e) {
            let t = P(this)
              , {has: n, get: r} = kt(t)
              , i = n.call(t, e);
            i ||= (e = P(e),
            n.call(t, e));
            let a = r ? r.call(t, e) : void 0
              , o = t.delete(e);
            return i && ct(t, `delete`, e, void 0, a),
            o
        },
        clear() {
            let e = P(this)
              , t = e.size !== 0
              , n = e.clear();
            return t && ct(e, `clear`, void 0, void 0, void 0),
            n
        }
    }),
    [`keys`, `values`, `entries`, Symbol.iterator].forEach(r => {
        n[r] = At(r, e, t)
    }
    ),
    n
}
function Nt(e, t) {
    let n = Mt(e, t);
    return (t, r, i) => r === `__v_isReactive` ? !e : r === `__v_isReadonly` ? e : r === `__v_raw` ? t : Reflect.get(b(n, r) && r in t ? n : t, r, i)
}
var Pt = {
    get: Nt(!1, !1)
}
  , Ft = {
    get: Nt(!1, !0)
}
  , It = {
    get: Nt(!0, !1)
}
  , Lt = new WeakMap
  , Rt = new WeakMap
  , zt = new WeakMap
  , Bt = new WeakMap;
function Vt(e) {
    switch (e) {
    case `Object`:
    case `Array`:
        return 1;
    case `Map`:
    case `Set`:
    case `WeakMap`:
    case `WeakSet`:
        return 2;
    default:
        return 0
    }
}
function Ht(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Vt(re(e))
}
function Ut(e) {
    return Jt(e) ? e : Kt(e, !1, Tt, Pt, Lt)
}
function Wt(e) {
    return Kt(e, !1, Dt, Ft, Rt)
}
function Gt(e) {
    return Kt(e, !0, Et, It, zt)
}
function Kt(e, t, n, r, i) {
    if (!O(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    let a = Ht(e);
    if (a === 0)
        return e;
    let o = i.get(e);
    if (o)
        return o;
    let s = new Proxy(e,a === 2 ? r : n);
    return i.set(e, s),
    s
}
function qt(e) {
    return Jt(e) ? qt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Jt(e) {
    return !!(e && e.__v_isReadonly)
}
function Yt(e) {
    return !!(e && e.__v_isShallow)
}
function Xt(e) {
    return e ? !!e.__v_raw : !1
}
function P(e) {
    let t = e && e.__v_raw;
    return t ? P(t) : e
}
function Zt(e) {
    return !b(e, `__v_skip`) && Object.isExtensible(e) && pe(e, `__v_skip`, !0),
    e
}
var Qt = e => O(e) ? Ut(e) : e
  , $t = e => O(e) ? Gt(e) : e;
function en(e) {
    return e ? e.__v_isRef === !0 : !1
}
function tn(e) {
    return nn(e, !1)
}
function nn(e, t) {
    return en(e) ? e : new rn(e,t)
}
var rn = class {
    constructor(e, t) {
        this.dep = new tt,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = t ? e : P(e),
        this._value = t ? e : Qt(e),
        this.__v_isShallow = t
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(e) {
        let t = this._rawValue
          , n = this.__v_isShallow || Yt(e) || Jt(e);
        e = n ? e : P(e),
        de(e, t) && (this._rawValue = e,
        this._value = n ? e : Qt(e),
        this.dep.trigger())
    }
}
;
function F(e) {
    return en(e) ? e.value : e
}
var an = {
    get: (e, t, n) => t === `__v_raw` ? e : F(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        let i = e[t];
        return en(i) && !en(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function on(e) {
    return qt(e) ? e : new Proxy(e,an)
}
var sn = class {
    constructor(e, t, n) {
        this.fn = e,
        this.setter = t,
        this._value = void 0,
        this.dep = new tt(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = $e - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !t,
        this.isSSR = n
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && N !== this)
            return ze(this, !0),
            !0
    }
    get value() {
        let e = this.dep.track();
        return Ge(this),
        e && (e.version = this.dep.version),
        this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}
;
function cn(e, t, n=!1) {
    let r, i;
    return T(e) ? r = e : (r = e.get,
    i = e.set),
    new sn(r,i,n)
}
var ln = {}
  , un = new WeakMap
  , dn = void 0;
function fn(e, t=!1, n=dn) {
    if (n) {
        let t = un.get(n);
        t || un.set(n, t = []),
        t.push(e)
    }
}
function pn(e, t, n=d) {
    let {immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c} = n, l = e => i ? e : Yt(e) || i === !1 || i === 0 ? mn(e, 1) : mn(e), u, f, m, h, g = !1, _ = !1;
    if (en(e) ? (f = () => e.value,
    g = Yt(e)) : qt(e) ? (f = () => l(e),
    g = !0) : x(e) ? (_ = !0,
    g = e.some(e => qt(e) || Yt(e)),
    f = () => e.map(e => {
        if (en(e))
            return e.value;
        if (qt(e))
            return l(e);
        if (T(e))
            return c ? c(e, 2) : e()
    }
    )) : f = T(e) ? t ? c ? () => c(e, 2) : e : () => {
        if (m) {
            Xe();
            try {
                m()
            } finally {
                Ze()
            }
        }
        let t = dn;
        dn = u;
        try {
            return c ? c(e, 3, [h]) : e(h)
        } finally {
            dn = t
        }
    }
    : p,
    t && i) {
        let e = f
          , t = i === !0 ? 1 / 0 : i;
        f = () => mn(e(), t)
    }
    let y = Ne()
      , b = () => {
        u.stop(),
        y && y.active && v(y.effects, u)
    }
    ;
    if (a && t) {
        let e = t;
        t = (...t) => {
            e(...t),
            b()
        }
    }
    let S = _ ? Array(e.length).fill(ln) : ln
      , C = e => {
        if (!(!(u.flags & 1) || !u.dirty && !e))
            if (t) {
                let e = u.run();
                if (i || g || (_ ? e.some( (e, t) => de(e, S[t])) : de(e, S))) {
                    m && m();
                    let n = dn;
                    dn = u;
                    try {
                        let n = [e, S === ln ? void 0 : _ && S[0] === ln ? [] : S, h];
                        S = e,
                        c ? c(t, 3, n) : t(...n)
                    } finally {
                        dn = n
                    }
                }
            } else
                u.run()
    }
    ;
    return s && s(C),
    u = new Fe(f),
    u.scheduler = o ? () => o(C, !1) : C,
    h = e => fn(e, !1, u),
    m = u.onStop = () => {
        let e = un.get(u);
        if (e) {
            if (c)
                c(e, 4);
            else
                for (let t of e)
                    t();
            un.delete(u)
        }
    }
    ,
    t ? r ? C(!0) : S = u.run() : o ? o(C.bind(null, !0), !0) : u.run(),
    b.pause = u.pause.bind(u),
    b.resume = u.resume.bind(u),
    b.stop = b,
    b
}
function mn(e, t=1 / 0, n) {
    if (t <= 0 || !O(e) || e.__v_skip || (n ||= new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    en(e))
        mn(e.value, t, n);
    else if (x(e))
        for (let r = 0; r < e.length; r++)
            mn(e[r], t, n);
    else if (C(e) || S(e))
        e.forEach(e => {
            mn(e, t, n)
        }
        );
    else if (k(e)) {
        for (let r in e)
            mn(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && mn(e[r], t, n)
    }
    return e
}
function hn(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (e) {
        _n(e, t, n)
    }
}
function gn(e, t, n, r) {
    if (T(e)) {
        let i = hn(e, t, n, r);
        return i && ee(i) && i.catch(e => {
            _n(e, t, n)
        }
        ),
        i
    }
    if (x(e)) {
        let i = [];
        for (let a = 0; a < e.length; a++)
            i.push(gn(e[a], t, n, r));
        return i
    }
}
function _n(e, t, n, r=!0) {
    let i = t ? t.vnode : null
      , {errorHandler: a, throwUnhandledErrorInProduction: o} = t && t.appContext.config || d;
    if (t) {
        let r = t.parent
          , i = t.proxy
          , o = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r; ) {
            let t = r.ec;
            if (t) {
                for (let n = 0; n < t.length; n++)
                    if (t[n](e, i, o) === !1)
                        return
            }
            r = r.parent
        }
        if (a) {
            Xe(),
            hn(a, null, 10, [e, i, o]),
            Ze();
            return
        }
    }
    vn(e, n, i, r, o)
}
function vn(e, t, n, r=!0, i=!1) {
    if (i)
        throw e;
    console.error(e)
}
var yn = []
  , bn = -1
  , xn = []
  , Sn = null
  , Cn = 0
  , wn = Promise.resolve()
  , Tn = null;
function En(e) {
    let t = Tn || wn;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Dn(e) {
    let t = bn + 1
      , n = yn.length;
    for (; t < n; ) {
        let r = t + n >>> 1
          , i = yn[r]
          , a = Nn(i);
        a < e || a === e && i.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function On(e) {
    if (!(e.flags & 1)) {
        let t = Nn(e)
          , n = yn[yn.length - 1];
        !n || !(e.flags & 2) && t >= Nn(n) ? yn.push(e) : yn.splice(Dn(t), 0, e),
        e.flags |= 1,
        kn()
    }
}
function kn() {
    Tn ||= wn.then(Pn)
}
function An(e) {
    x(e) ? xn.push(...e) : Sn && e.id === -1 ? Sn.splice(Cn + 1, 0, e) : e.flags & 1 || (xn.push(e),
    e.flags |= 1),
    kn()
}
function jn(e, t, n=bn + 1) {
    for (; n < yn.length; n++) {
        let t = yn[n];
        if (t && t.flags & 2) {
            if (e && t.id !== e.uid)
                continue;
            yn.splice(n, 1),
            n--,
            t.flags & 4 && (t.flags &= -2),
            t(),
            t.flags & 4 || (t.flags &= -2)
        }
    }
}
function Mn(e) {
    if (xn.length) {
        let e = [...new Set(xn)].sort( (e, t) => Nn(e) - Nn(t));
        if (xn.length = 0,
        Sn) {
            Sn.push(...e);
            return
        }
        for (Sn = e,
        Cn = 0; Cn < Sn.length; Cn++) {
            let e = Sn[Cn];
            e.flags & 4 && (e.flags &= -2),
            e.flags & 8 || e(),
            e.flags &= -2
        }
        Sn = null,
        Cn = 0
    }
}
var Nn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pn(e) {
    try {
        for (bn = 0; bn < yn.length; bn++) {
            let e = yn[bn];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2),
            hn(e, e.i, e.i ? 15 : 14),
            e.flags & 4 || (e.flags &= -2))
        }
    } finally {
        for (; bn < yn.length; bn++) {
            let e = yn[bn];
            e && (e.flags &= -2)
        }
        bn = -1,
        yn.length = 0,
        Mn(e),
        Tn = null,
        (yn.length || xn.length) && Pn(e)
    }
}
var Fn = null
  , In = null;
function Ln(e) {
    let t = Fn;
    return Fn = e,
    In = e && e.type.__scopeId || null,
    t
}
function Rn(e, t=Fn, n) {
    if (!t || e._n)
        return e;
    let r = (...n) => {
        r._d && aa(-1);
        let i = Ln(t), a;
        try {
            a = e(...n)
        } finally {
            Ln(i),
            r._d && aa(1)
        }
        return a
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function zn(e, t) {
    if (Fn === null)
        return e;
    let n = Ba(Fn)
      , r = e.dirs ||= [];
    for (let e = 0; e < t.length; e++) {
        let[i,a,o,s=d] = t[e];
        i && (T(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && mn(a),
        r.push({
            dir: i,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: o,
            modifiers: s
        }))
    }
    return e
}
function Bn(e, t, n, r) {
    let i = e.dirs
      , a = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        a && (s.oldValue = a[o].value);
        let c = s.dir[r];
        c && (Xe(),
        gn(c, n, 8, [e.el, s, e, t]),
        Ze())
    }
}
function Vn(e, t) {
    if (wa) {
        let n = wa.provides
          , r = wa.parent && wa.parent.provides;
        r === n && (n = wa.provides = Object.create(r)),
        n[e] = t
    }
}
function Hn(e, t, n=!1) {
    let r = Ta();
    if (r || ci) {
        let i = ci ? ci._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && T(t) ? t.call(r && r.proxy) : t
    }
}
var Un = Symbol.for(`v-scx`)
  , Wn = () => Hn(Un);
function Gn(e, t, n) {
    return Kn(e, t, n)
}
function Kn(e, t, n=d) {
    let {immediate: r, deep: i, flush: a, once: o} = n, s = _({}, n), c = t && r || !t && a !== `post`, l;
    if (ja) {
        if (a === `sync`) {
            let e = Wn();
            l = e.__watcherHandles ||= []
        } else if (!c) {
            let e = () => {}
            ;
            return e.stop = p,
            e.resume = p,
            e.pause = p,
            e
        }
    }
    let u = wa;
    s.call = (e, t, n) => gn(e, u, t, n);
    let f = !1;
    a === `post` ? s.scheduler = e => {
        zi(e, u && u.suspense)
    }
    : a !== `sync` && (f = !0,
    s.scheduler = (e, t) => {
        t ? e() : On(e)
    }
    ),
    s.augmentJob = e => {
        t && (e.flags |= 4),
        f && (e.flags |= 2,
        u && (e.id = u.uid,
        e.i = u))
    }
    ;
    let m = pn(e, t, s);
    return ja && (l ? l.push(m) : c && m()),
    m
}
function qn(e, t, n) {
    let r = this.proxy, i = E(e) ? e.includes(`.`) ? Jn(r, e) : () => r[e] : e.bind(r, r), a;
    T(t) ? a = t : (a = t.handler,
    n = t);
    let o = Oa(this)
      , s = Kn(i, a.bind(r), n);
    return o(),
    s
}
function Jn(e, t) {
    let n = t.split(`.`);
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++)
            t = t[n[e]];
        return t
    }
}
var Yn = Symbol(`_vte`)
  , Xn = e => e.__isTeleport
  , Zn = e => e && (e.disabled || e.disabled === ``)
  , Qn = e => e && (e.defer || e.defer === ``)
  , $n = e => typeof SVGElement < `u` && e instanceof SVGElement
  , er = e => typeof MathMLElement == `function` && e instanceof MathMLElement
  , tr = (e, t) => {
    let n = e && e.to;
    return E(n) ? t ? t(n) : null : n
}
  , nr = {
    name: `Teleport`,
    __isTeleport: !0,
    process(e, t, n, r, i, a, o, s, c, l) {
        let {mc: u, pc: d, pbc: f, o: {insert: p, querySelector: m, createText: h, createComment: g}} = l
          , _ = Zn(t.props)
          , {shapeFlag: v, children: y, dynamicChildren: b} = t;
        if (e == null) {
            let e = t.el = h(``)
              , l = t.anchor = h(``);
            p(e, n, r),
            p(l, n, r);
            let d = (e, t) => {
                v & 16 && u(y, e, t, i, a, o, s, c)
            }
              , f = () => {
                let e = t.target = tr(t.props, m)
                  , n = sr(e, t, h, p);
                e && (o !== `svg` && $n(e) ? o = `svg` : o !== `mathml` && er(e) && (o = `mathml`),
                i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = new Set)).add(e),
                _ || (d(e, n),
                or(t, !1)))
            }
            ;
            _ && (d(n, l),
            or(t, !0)),
            Qn(t.props) || a && a.pendingBranch ? (t.el.__isMounted = !1,
            zi( () => {
                t.el.__isMounted === !1 && (f(),
                delete t.el.__isMounted)
            }
            , a)) : f()
        } else {
            t.el = e.el,
            t.targetStart = e.targetStart;
            let u = t.anchor = e.anchor
              , p = t.target = e.target
              , h = t.targetAnchor = e.targetAnchor;
            if (e.el.__isMounted === !1) {
                zi( () => {
                    nr.process(e, t, n, r, i, a, o, s, c, l)
                }
                , a);
                return
            }
            let g = Zn(e.props)
              , v = g ? n : p
              , y = g ? u : h;
            if (o === `svg` || $n(p) ? o = `svg` : (o === `mathml` || er(p)) && (o = `mathml`),
            b ? (f(e.dynamicChildren, b, v, i, a, o, s),
            Gi(e, t, !0)) : c || d(e, t, v, y, i, a, o, s, !1),
            _)
                g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rr(t, n, u, l, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                let e = t.target = tr(t.props, m);
                e && rr(t, e, null, l, 0)
            } else
                g && rr(t, p, h, l, 1);
            or(t, _)
        }
    },
    remove(e, t, n, {um: r, o: {remove: i}}, a) {
        let {shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f} = e;
        if (d && (i(l),
        i(u)),
        a && i(c),
        o & 16) {
            let e = a || !Zn(f);
            for (let i = 0; i < s.length; i++) {
                let a = s[i];
                r(a, t, n, e, !!a.dynamicChildren)
            }
        }
    },
    move: rr,
    hydrate: ir
};
function rr(e, t, n, {o: {insert: r}, m: i}, a=2) {
    a === 0 && r(e.targetAnchor, t, n);
    let {el: o, anchor: s, shapeFlag: c, children: l, props: u} = e
      , d = a === 2;
    if (d && r(o, t, n),
    (!d || Zn(u)) && c & 16)
        for (let e = 0; e < l.length; e++)
            i(l[e], t, n, 2);
    d && r(s, t, n)
}
function ir(e, t, n, r, i, a, {o: {nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u}}, d) {
    function f(e, n) {
        let r = n;
        for (; r; ) {
            if (r && r.nodeType === 8) {
                if (r.data === `teleport start anchor`)
                    t.targetStart = r;
                else if (r.data === `teleport anchor`) {
                    t.targetAnchor = r,
                    e._lpa = t.targetAnchor && o(t.targetAnchor);
                    break
                }
            }
            r = o(r)
        }
    }
    function p(e, t) {
        t.anchor = d(o(e), t, s(e), n, r, i, a)
    }
    let m = t.target = tr(t.props, c)
      , h = Zn(t.props);
    if (m) {
        let c = m._lpa || m.firstChild;
        t.shapeFlag & 16 && (h ? (p(e, t),
        f(m, c),
        t.targetAnchor || sr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e),
        f(m, c),
        t.targetAnchor || sr(m, t, u, l),
        d(c && o(c), t, m, n, r, i, a))),
        or(t, h)
    } else
        h && t.shapeFlag & 16 && (p(e, t),
        t.targetStart = e,
        t.targetAnchor = o(e));
    return t.anchor && o(t.anchor)
}
var ar = nr;
function or(e, t) {
    let n = e.ctx;
    if (n && n.ut) {
        let r, i;
        for (t ? (r = e.el,
        i = e.anchor) : (r = e.targetStart,
        i = e.targetAnchor); r && r !== i; )
            r.nodeType === 1 && r.setAttribute(`data-v-owner`, n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function sr(e, t, n, r, i=null) {
    let a = t.targetStart = n(``)
      , o = t.targetAnchor = n(``);
    return a[Yn] = o,
    e && (r(a, e, i),
    r(o, e, i)),
    o
}
var cr = Symbol(`_leaveCb`);
function lr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    lr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function I(e, t) {
    return T(e) ? _({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function ur(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + `-`, 0, 0]
}
function dr(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
var fr = new WeakMap;
function pr(e, t, n, r, i=!1) {
    if (x(e)) {
        e.forEach( (e, a) => pr(e, t && (x(t) ? t[a] : t), n, r, i));
        return
    }
    if (hr(r) && !i) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && pr(e, t, n, r.component.subTree);
        return
    }
    let a = r.shapeFlag & 4 ? Ba(r.component) : r.el
      , o = i ? null : a
      , {i: s, r: c} = e
      , l = t && t.r
      , u = s.refs === d ? s.refs = {} : s.refs
      , f = s.setupState
      , p = P(f)
      , h = f === d ? m : e => dr(u, e) ? !1 : b(p, e)
      , g = (e, t) => !(t && dr(u, t));
    if (l != null && l !== c) {
        if (mr(t),
        E(l))
            u[l] = null,
            h(l) && (f[l] = null);
        else if (en(l)) {
            let e = t;
            g(l, e.k) && (l.value = null),
            e.k && (u[e.k] = null)
        }
    }
    if (T(c))
        hn(c, s, 12, [o, u]);
    else {
        let t = E(c)
          , r = en(c);
        if (t || r) {
            let s = () => {
                if (e.f) {
                    let n = t ? h(c) ? f[c] : u[c] : g(c) || !e.k ? c.value : u[e.k];
                    if (i)
                        x(n) && v(n, a);
                    else if (x(n))
                        n.includes(a) || n.push(a);
                    else if (t)
                        u[c] = [a],
                        h(c) && (f[c] = u[c]);
                    else {
                        let t = [a];
                        g(c, e.k) && (c.value = t),
                        e.k && (u[e.k] = t)
                    }
                } else
                    t ? (u[c] = o,
                    h(c) && (f[c] = o)) : r && (g(c, e.k) && (c.value = o),
                    e.k && (u[e.k] = o))
            }
            ;
            if (o) {
                let t = () => {
                    s(),
                    fr.delete(e)
                }
                ;
                t.id = -1,
                fr.set(e, t),
                zi(t, n)
            } else
                mr(e),
                s()
        }
    }
}
function mr(e) {
    let t = fr.get(e);
    t && (t.flags |= 8,
    fr.delete(e))
}
ge().requestIdleCallback,
ge().cancelIdleCallback;
var hr = e => !!e.type.__asyncLoader
  , gr = e => e.type.__isKeepAlive;
function _r(e, t) {
    yr(e, `a`, t)
}
function vr(e, t) {
    yr(e, `da`, t)
}
function yr(e, t, n=wa) {
    let r = e.__wdc ||= () => {
        let t = n;
        for (; t; ) {
            if (t.isDeactivated)
                return;
            t = t.parent
        }
        return e()
    }
    ;
    if (xr(t, r, n),
    n) {
        let e = n.parent;
        for (; e && e.parent; )
            gr(e.parent.vnode) && br(r, t, n, e),
            e = e.parent
    }
}
function br(e, t, n, r) {
    let i = xr(t, e, r, !0);
    Or( () => {
        v(r[t], i)
    }
    , n)
}
function xr(e, t, n=wa, r=!1) {
    if (n) {
        let i = n[e] || (n[e] = [])
          , a = t.__weh ||= (...r) => {
            Xe();
            let i = Oa(n)
              , a = gn(t, n, e, r);
            return i(),
            Ze(),
            a
        }
        ;
        return r ? i.unshift(a) : i.push(a),
        a
    }
}
var Sr = e => (t, n=wa) => {
    (!ja || e === `sp`) && xr(e, (...e) => t(...e), n)
}
  , Cr = Sr(`bm`)
  , wr = Sr(`m`)
  , Tr = Sr(`bu`)
  , Er = Sr(`u`)
  , Dr = Sr(`bum`)
  , Or = Sr(`um`)
  , kr = Sr(`sp`)
  , Ar = Sr(`rtg`)
  , jr = Sr(`rtc`);
function Mr(e, t=wa) {
    xr(`ec`, e, t)
}
var Nr = `components`
  , Pr = Symbol.for(`v-ndc`);
function Fr(e) {
    return E(e) ? Ir(Nr, e, !1) || e : e || Pr
}
function Ir(e, t, n=!0, r=!1) {
    let i = Fn || wa;
    if (i) {
        let n = i.type;
        if (e === Nr) {
            let e = Va(n, !1);
            if (e && (e === t || e === j(t) || e === le(j(t))))
                return n
        }
        let a = Lr(i[e] || n[e], t) || Lr(i.appContext[e], t);
        return !a && r ? n : a
    }
}
function Lr(e, t) {
    return e && (e[t] || e[j(t)] || e[le(j(t))])
}
function Rr(e, t, n, r) {
    let i, a = n && n[r], o = x(e);
    if (o || E(e)) {
        let n = o && qt(e)
          , r = !1
          , s = !1;
        n && (r = !Yt(e),
        s = Jt(e),
        e = ut(e)),
        i = Array(e.length);
        for (let n = 0, o = e.length; n < o; n++)
            i[n] = t(r ? s ? $t(Qt(e[n])) : Qt(e[n]) : e[n], n, void 0, a && a[n])
    } else if (typeof e == `number`) {
        i = Array(e);
        for (let n = 0; n < e; n++)
            i[n] = t(n + 1, n, void 0, a && a[n])
    } else if (O(e))
        if (e[Symbol.iterator])
            i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
        else {
            let n = Object.keys(e);
            i = Array(n.length);
            for (let r = 0, o = n.length; r < o; r++) {
                let o = n[r];
                i[r] = t(e[o], o, r, a && a[r])
            }
        }
    else
        i = [];
    return n && (n[r] = i),
    i
}
var zr = e => e ? Aa(e) ? Ba(e) : zr(e.parent) : null
  , Br = _(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => zr(e.parent),
    $root: e => zr(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Yr(e),
    $forceUpdate: e => e.f ||= () => {
        On(e.update)
    }
    ,
    $nextTick: e => e.n ||= En.bind(e.proxy),
    $watch: e => qn.bind(e)
})
  , Vr = (e, t) => e !== d && !e.__isScriptSetup && b(e, t)
  , Hr = {
    get({_: e}, t) {
        if (t === `__v_skip`)
            return !0;
        let {ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c} = e;
        if (t[0] !== `$`) {
            let e = o[t];
            if (e !== void 0)
                switch (e) {
                case 1:
                    return r[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return a[t]
                }
            else if (Vr(r, t))
                return o[t] = 1,
                r[t];
            else if (i !== d && b(i, t))
                return o[t] = 2,
                i[t];
            else if (b(a, t))
                return o[t] = 3,
                a[t];
            else if (n !== d && b(n, t))
                return o[t] = 4,
                n[t];
            else
                Wr && (o[t] = 0)
        }
        let l = Br[t], u, f;
        if (l)
            return t === `$attrs` && st(e.attrs, `get`, ``),
            l(e);
        if ((u = s.__cssModules) && (u = u[t]))
            return u;
        if (n !== d && b(n, t))
            return o[t] = 4,
            n[t];
        if (f = c.config.globalProperties,
        b(f, t))
            return f[t]
    },
    set({_: e}, t, n) {
        let {data: r, setupState: i, ctx: a} = e;
        return Vr(i, t) ? (i[t] = n,
        !0) : r !== d && b(r, t) ? (r[t] = n,
        !0) : b(e.props, t) || t[0] === `$` && t.slice(1)in e ? !1 : (a[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o}}, s) {
        let c;
        return !!(n[s] || e !== d && s[0] !== `$` && b(e, s) || Vr(t, s) || b(a, s) || b(r, s) || b(Br, s) || b(i.config.globalProperties, s) || (c = o.__cssModules) && c[s])
    },
    defineProperty(e, t, n) {
        return n.get == null ? b(n, `value`) && this.set(e, t, n.value, null) : e._.accessCache[t] = 0,
        Reflect.defineProperty(e, t, n)
    }
};
function Ur(e) {
    return x(e) ? e.reduce( (e, t) => (e[t] = null,
    e), {}) : e
}
var Wr = !0;
function Gr(e) {
    let t = Yr(e)
      , n = e.proxy
      , r = e.ctx;
    Wr = !1,
    t.beforeCreate && qr(t.beforeCreate, e, `bc`);
    let {data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: m, updated: h, activated: g, deactivated: _, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: S, render: C, renderTracked: w, renderTriggered: E, errorCaptured: D, serverPrefetch: ee, expose: te, inheritAttrs: ne, components: re, directives: k, filters: ie} = t;
    if (l && Kr(l, r, null),
    o)
        for (let e in o) {
            let t = o[e];
            T(t) && (r[e] = t.bind(n))
        }
    if (i) {
        let t = i.call(n, n);
        O(t) && (e.data = Ut(t))
    }
    if (Wr = !0,
    a)
        for (let e in a) {
            let t = a[e]
              , i = Ua({
                get: T(t) ? t.bind(n, n) : T(t.get) ? t.get.bind(n, n) : p,
                set: !T(t) && T(t.set) ? t.set.bind(n) : p
            });
            Object.defineProperty(r, e, {
                enumerable: !0,
                configurable: !0,
                get: () => i.value,
                set: e => i.value = e
            })
        }
    if (s)
        for (let e in s)
            Jr(s[e], r, n, e);
    if (c) {
        let e = T(c) ? c.call(n) : c;
        Reflect.ownKeys(e).forEach(t => {
            Vn(t, e[t])
        }
        )
    }
    u && qr(u, e, `c`);
    function A(e, t) {
        x(t) ? t.forEach(t => e(t.bind(n))) : t && e(t.bind(n))
    }
    if (A(Cr, d),
    A(wr, f),
    A(Tr, m),
    A(Er, h),
    A(_r, g),
    A(vr, _),
    A(Mr, D),
    A(jr, w),
    A(Ar, E),
    A(Dr, y),
    A(Or, S),
    A(kr, ee),
    x(te))
        if (te.length) {
            let t = e.exposed ||= {};
            te.forEach(e => {
                Object.defineProperty(t, e, {
                    get: () => n[e],
                    set: t => n[e] = t,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed ||= {};
    C && e.render === p && (e.render = C),
    ne != null && (e.inheritAttrs = ne),
    re && (e.components = re),
    k && (e.directives = k),
    ee && ur(e)
}
function Kr(e, t, n=p) {
    x(e) && (e = ei(e));
    for (let n in e) {
        let r = e[n], i;
        i = O(r) ? `default`in r ? Hn(r.from || n, r.default, !0) : Hn(r.from || n) : Hn(r),
        en(i) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: e => i.value = e
        }) : t[n] = i
    }
}
function qr(e, t, n) {
    gn(x(e) ? e.map(e => e.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Jr(e, t, n, r) {
    let i = r.includes(`.`) ? Jn(n, r) : () => n[r];
    if (E(e)) {
        let n = t[e];
        T(n) && Gn(i, n)
    } else if (T(e))
        Gn(i, e.bind(n));
    else if (O(e))
        if (x(e))
            e.forEach(e => Jr(e, t, n, r));
        else {
            let r = T(e.handler) ? e.handler.bind(n) : t[e.handler];
            T(r) && Gn(i, r, e)
        }
}
function Yr(e) {
    let t = e.type, {mixins: n, extends: r} = t, {mixins: i, optionsCache: a, config: {optionMergeStrategies: o}} = e.appContext, s = a.get(t), c;
    return s ? c = s : !i.length && !n && !r ? c = t : (c = {},
    i.length && i.forEach(e => Xr(c, e, o, !0)),
    Xr(c, t, o)),
    O(t) && a.set(t, c),
    c
}
function Xr(e, t, n, r=!1) {
    let {mixins: i, extends: a} = t;
    a && Xr(e, a, n, !0),
    i && i.forEach(t => Xr(e, t, n, !0));
    for (let i in t)
        if (!(r && i === `expose`)) {
            let r = Zr[i] || n && n[i];
            e[i] = r ? r(e[i], t[i]) : t[i]
        }
    return e
}
var Zr = {
    data: Qr,
    props: ri,
    emits: ri,
    methods: ni,
    computed: ni,
    beforeCreate: ti,
    created: ti,
    beforeMount: ti,
    mounted: ti,
    beforeUpdate: ti,
    updated: ti,
    beforeDestroy: ti,
    beforeUnmount: ti,
    destroyed: ti,
    unmounted: ti,
    activated: ti,
    deactivated: ti,
    errorCaptured: ti,
    serverPrefetch: ti,
    components: ni,
    directives: ni,
    watch: ii,
    provide: Qr,
    inject: $r
};
function Qr(e, t) {
    return t ? e ? function() {
        return _(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t)
    }
    : t : e
}
function $r(e, t) {
    return ni(ei(e), ei(t))
}
function ei(e) {
    if (x(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function ti(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function ni(e, t) {
    return e ? _(Object.create(null), e, t) : t
}
function ri(e, t) {
    return e ? x(e) && x(t) ? [...new Set([...e, ...t])] : _(Object.create(null), Ur(e), Ur(t ?? {})) : t
}
function ii(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    let n = _(Object.create(null), e);
    for (let r in t)
        n[r] = ti(e[r], t[r]);
    return n
}
function ai() {
    return {
        app: null,
        config: {
            isNativeTag: m,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
var oi = 0;
function si(e, t) {
    return function(n, r=null) {
        T(n) || (n = _({}, n)),
        r != null && !O(r) && (r = null);
        let i = ai()
          , a = new WeakSet
          , o = []
          , s = !1
          , c = i.app = {
            _uid: oi++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Wa,
            get config() {
                return i.config
            },
            set config(e) {},
            use(e, ...t) {
                return a.has(e) || (e && T(e.install) ? (a.add(e),
                e.install(c, ...t)) : T(e) && (a.add(e),
                e(c, ...t))),
                c
            },
            mixin(e) {
                return i.mixins.includes(e) || i.mixins.push(e),
                c
            },
            component(e, t) {
                return t ? (i.components[e] = t,
                c) : i.components[e]
            },
            directive(e, t) {
                return t ? (i.directives[e] = t,
                c) : i.directives[e]
            },
            mount(a, o, l) {
                if (!s) {
                    let u = c._ceVNode || V(n, r);
                    return u.appContext = i,
                    l === !0 ? l = `svg` : l === !1 && (l = void 0),
                    o && t ? t(u, a) : e(u, a, l),
                    s = !0,
                    c._container = a,
                    a.__vue_app__ = c,
                    Ba(u.component)
                }
            },
            onUnmount(e) {
                o.push(e)
            },
            unmount() {
                s && (gn(o, c._instance, 16),
                e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(e, t) {
                return i.provides[e] = t,
                c
            },
            runWithContext(e) {
                let t = ci;
                ci = c;
                try {
                    return e()
                } finally {
                    ci = t
                }
            }
        };
        return c
    }
}
var ci = null
  , li = (e, t) => t === `modelValue` || t === `model-value` ? e.modelModifiers : e[`${t}Modifiers`] || e[`${j(t)}Modifiers`] || e[`${ce(t)}Modifiers`];
function ui(e, t, ...n) {
    if (e.isUnmounted)
        return;
    let r = e.vnode.props || d
      , i = n
      , a = t.startsWith(`update:`)
      , o = a && li(r, t.slice(7));
    o && (o.trim && (i = n.map(e => E(e) ? e.trim() : e)),
    o.number && (i = n.map(me)));
    let s, c = r[s = ue(t)] || r[s = ue(j(t))];
    !c && a && (c = r[s = ue(ce(t))]),
    c && gn(c, e, 6, i);
    let l = r[s + `Once`];
    if (l) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[s])
            return;
        e.emitted[s] = !0,
        gn(l, e, 6, i)
    }
}
var di = new WeakMap;
function fi(e, t, n=!1) {
    let r = n ? di : t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    let a = e.emits
      , o = {}
      , s = !1;
    if (!T(e)) {
        let r = e => {
            let n = fi(e, t, !0);
            n && (s = !0,
            _(o, n))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(r),
        e.extends && r(e.extends),
        e.mixins && e.mixins.forEach(r)
    }
    return !a && !s ? (O(e) && r.set(e, null),
    null) : (x(a) ? a.forEach(e => o[e] = null) : _(o, a),
    O(e) && r.set(e, o),
    o)
}
function pi(e, t) {
    return !e || !h(t) ? !1 : (t = t.slice(2).replace(/Once$/, ``),
    b(e, t[0].toLowerCase() + t.slice(1)) || b(e, ce(t)) || b(e, t))
}
function mi(e) {
    let {type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h} = e, _ = Ln(e), v, y;
    try {
        if (n.shapeFlag & 4) {
            let e = i || r
              , t = e;
            v = ga(l.call(t, e, u, d, p, f, m)),
            y = s
        } else {
            let e = t;
            v = ga(e.length > 1 ? e(d, {
                attrs: s,
                slots: o,
                emit: c
            }) : e(d, null)),
            y = t.props ? s : hi(s)
        }
    } catch (t) {
        ta.length = 0,
        _n(t, e, 1),
        v = V($i)
    }
    let b = v;
    if (y && h !== !1) {
        let e = Object.keys(y)
          , {shapeFlag: t} = b;
        e.length && t & 7 && (a && e.some(g) && (y = gi(y, a)),
        b = ma(b, y, !1, !0))
    }
    return n.dirs && (b = ma(b, null, !1, !0),
    b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs),
    n.transition && lr(b, n.transition),
    v = b,
    Ln(_),
    v
}
var hi = e => {
    let t;
    for (let n in e)
        (n === `class` || n === `style` || h(n)) && ((t ||= {})[n] = e[n]);
    return t
}
  , gi = (e, t) => {
    let n = {};
    for (let r in e)
        (!g(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function _i(e, t, n) {
    let {props: r, children: i, component: a} = e
      , {props: o, children: s, patchFlag: c} = t
      , l = a.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return r ? vi(r, o, l) : !!o;
        if (c & 8) {
            let e = t.dynamicProps;
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                if (yi(o, r, n) && !pi(l, n))
                    return !0
            }
        }
    } else
        return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? vi(r, o, l) : !0 : !!o;
    return !1
}
function vi(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (yi(t, e, a) && !pi(n, a))
            return !0
    }
    return !1
}
function yi(e, t, n) {
    let r = e[n]
      , i = t[n];
    return n === `style` && O(r) && O(i) ? !De(r, i) : r !== i
}
function bi({vnode: e, parent: t, suspense: n}, r) {
    for (; t; ) {
        let n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r,
        e = n),
        n === e)
            (e = t.vnode).el = r,
            t = t.parent;
        else
            break
    }
    n && n.activeBranch === e && (n.vnode.el = r)
}
var xi = {}
  , Si = () => Object.create(xi)
  , Ci = e => Object.getPrototypeOf(e) === xi;
function wi(e, t, n, r=!1) {
    let i = {}
      , a = Si();
    e.propsDefaults = Object.create(null),
    Ei(e, t, i, a);
    for (let t in e.propsOptions[0])
        t in i || (i[t] = void 0);
    n ? e.props = r ? i : Wt(i) : e.type.props ? e.props = i : e.props = a,
    e.attrs = a
}
function Ti(e, t, n, r) {
    let {props: i, attrs: a, vnode: {patchFlag: o}} = e
      , s = P(i)
      , [c] = e.propsOptions
      , l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            let n = e.vnode.dynamicProps;
            for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if (pi(e.emitsOptions, o))
                    continue;
                let u = t[o];
                if (c)
                    if (b(a, o))
                        u !== a[o] && (a[o] = u,
                        l = !0);
                    else {
                        let t = j(o);
                        i[t] = Di(c, s, t, u, e, !1)
                    }
                else
                    u !== a[o] && (a[o] = u,
                    l = !0)
            }
        }
    } else {
        Ei(e, t, i, a) && (l = !0);
        let r;
        for (let a in s)
            (!t || !b(t, a) && ((r = ce(a)) === a || !b(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Di(c, s, a, void 0, e, !0)) : delete i[a]);
        if (a !== s)
            for (let e in a)
                (!t || !b(t, e)) && (delete a[e],
                l = !0)
    }
    l && ct(e.attrs, `set`, ``)
}
function Ei(e, t, n, r) {
    let[i,a] = e.propsOptions, o = !1, s;
    if (t)
        for (let c in t) {
            if (A(c))
                continue;
            let l = t[c], u;
            i && b(i, u = j(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : pi(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l,
            o = !0)
        }
    if (a) {
        let t = P(n)
          , r = s || d;
        for (let o = 0; o < a.length; o++) {
            let s = a[o];
            n[s] = Di(i, t, s, r[s], e, !b(r, s))
        }
    }
    return o
}
function Di(e, t, n, r, i, a) {
    let o = e[n];
    if (o != null) {
        let e = b(o, `default`);
        if (e && r === void 0) {
            let e = o.default;
            if (o.type !== Function && !o.skipFactory && T(e)) {
                let {propsDefaults: a} = i;
                if (n in a)
                    r = a[n];
                else {
                    let o = Oa(i);
                    r = a[n] = e.call(null, t),
                    o()
                }
            } else
                r = e;
            i.ce && i.ce._setProp(n, r)
        }
        o[0] && (a && !e ? r = !1 : o[1] && (r === `` || r === ce(n)) && (r = !0))
    }
    return r
}
var Oi = new WeakMap;
function ki(e, t, n=!1) {
    let r = n ? Oi : t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    let a = e.props
      , o = {}
      , s = []
      , c = !1;
    if (!T(e)) {
        let r = e => {
            c = !0;
            let[n,r] = ki(e, t, !0);
            _(o, n),
            r && s.push(...r)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(r),
        e.extends && r(e.extends),
        e.mixins && e.mixins.forEach(r)
    }
    if (!a && !c)
        return O(e) && r.set(e, f),
        f;
    if (x(a))
        for (let e = 0; e < a.length; e++) {
            let t = j(a[e]);
            Ai(t) && (o[t] = d)
        }
    else if (a)
        for (let e in a) {
            let t = j(e);
            if (Ai(t)) {
                let n = a[e]
                  , r = o[t] = x(n) || T(n) ? {
                    type: n
                } : _({}, n)
                  , i = r.type
                  , c = !1
                  , l = !0;
                if (x(i))
                    for (let e = 0; e < i.length; ++e) {
                        let t = i[e]
                          , n = T(t) && t.name;
                        if (n === `Boolean`) {
                            c = !0;
                            break
                        } else
                            n === `String` && (l = !1)
                    }
                else
                    c = T(i) && i.name === `Boolean`;
                r[0] = c,
                r[1] = l,
                (c || b(r, `default`)) && s.push(t)
            }
        }
    let l = [o, s];
    return O(e) && r.set(e, l),
    l
}
function Ai(e) {
    return e[0] !== `$` && !A(e)
}
var ji = e => e === `_` || e === `_ctx` || e === `$stable`
  , Mi = e => x(e) ? e.map(ga) : [ga(e)]
  , Ni = (e, t, n) => {
    if (t._n)
        return t;
    let r = Rn( (...e) => Mi(t(...e)), n);
    return r._c = !1,
    r
}
  , Pi = (e, t, n) => {
    let r = e._ctx;
    for (let n in e) {
        if (ji(n))
            continue;
        let i = e[n];
        if (T(i))
            t[n] = Ni(n, i, r);
        else if (i != null) {
            let e = Mi(i);
            t[n] = () => e
        }
    }
}
  , Fi = (e, t) => {
    let n = Mi(t);
    e.slots.default = () => n
}
  , Ii = (e, t, n) => {
    for (let r in t)
        (n || !ji(r)) && (e[r] = t[r])
}
  , Li = (e, t, n) => {
    let r = e.slots = Si();
    if (e.vnode.shapeFlag & 32) {
        let e = t._;
        e ? (Ii(r, t, n),
        n && pe(r, `_`, e, !0)) : Pi(t, r)
    } else
        t && Fi(e, t)
}
  , Ri = (e, t, n) => {
    let {vnode: r, slots: i} = e
      , a = !0
      , o = d;
    if (r.shapeFlag & 32) {
        let e = t._;
        e ? n && e === 1 ? a = !1 : Ii(i, t, n) : (a = !t.$stable,
        Pi(t, i)),
        o = t
    } else
        t && (Fi(e, t),
        o = {
            default: 1
        });
    if (a)
        for (let e in i)
            !ji(e) && o[e] == null && delete i[e]
}
  , zi = Zi;
function Bi(e) {
    return Vi(e)
}
function Vi(e, t) {
    let n = ge();
    n.__VUE__ = !0;
    let {insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: m, nextSibling: h, setScopeId: g=p, insertStaticContent: _} = e, v = (e, t, n, r=null, i=null, a=null, o=void 0, s=null, c=!!t.dynamicChildren) => {
        if (e === t)
            return;
        e && !la(e, t) && (r = _e(e),
        ue(e, i, a, !0),
        e = null),
        t.patchFlag === -2 && (c = !1,
        t.dynamicChildren = null);
        let {type: l, ref: u, shapeFlag: d} = t;
        switch (l) {
        case Qi:
            y(e, t, n, r);
            break;
        case $i:
            b(e, t, n, r);
            break;
        case ea:
            e ?? x(t, n, r, o);
            break;
        case L:
            ne(e, t, n, r, i, a, o, s, c);
            break;
        default:
            d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be)
        }
        u != null && i ? pr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && pr(e.ref, null, a, e, !0)
    }
    , y = (e, t, n, i) => {
        if (e == null)
            r(t.el = s(t.children), n, i);
        else {
            let n = t.el = e.el;
            t.children !== e.children && l(n, t.children)
        }
    }
    , b = (e, t, n, i) => {
        e == null ? r(t.el = c(t.children || ``), n, i) : t.el = e.el
    }
    , x = (e, t, n, r) => {
        [e.el,e.anchor] = _(e.children, t, n, r, e.el, e.anchor)
    }
    , S = ({el: e, anchor: t}, n, i) => {
        let a;
        for (; e && e !== t; )
            a = h(e),
            r(e, n, i),
            e = a;
        r(t, n, i)
    }
    , C = ({el: e, anchor: t}) => {
        let n;
        for (; e && e !== t; )
            n = h(e),
            i(e),
            e = n;
        i(t)
    }
    , w = (e, t, n, r, i, a, o, s, c) => {
        if (t.type === `svg` ? o = `svg` : t.type === `math` && (o = `mathml`),
        e == null)
            T(t, n, r, i, a, o, s, c);
        else {
            let n = e.el && e.el._isVueCE ? e.el : null;
            try {
                n && n._beginPatch(),
                O(e, t, i, a, o, s, c)
            } finally {
                n && n._endPatch()
            }
        }
    }
    , T = (e, t, n, i, s, c, l, d) => {
        let f, p, {props: m, shapeFlag: h, transition: g, dirs: _} = e;
        if (f = e.el = o(e.type, c, m && m.is, m),
        h & 8 ? u(f, e.children) : h & 16 && D(e.children, f, null, i, s, Hi(e, c), l, d),
        _ && Bn(e, null, i, `created`),
        E(f, e, e.scopeId, l, i),
        m) {
            for (let e in m)
                e !== `value` && !A(e) && a(f, e, null, m[e], c, i);
            `value`in m && a(f, `value`, null, m.value, c),
            (p = m.onVnodeBeforeMount) && ba(p, i, e)
        }
        _ && Bn(e, null, i, `beforeMount`);
        let v = Wi(s, g);
        v && g.beforeEnter(f),
        r(f, t, n),
        ((p = m && m.onVnodeMounted) || v || _) && zi( () => {
            try {
                p && ba(p, i, e),
                v && g.enter(f),
                _ && Bn(e, null, i, `mounted`)
            } finally {}
        }
        , s)
    }
    , E = (e, t, n, r, i) => {
        if (n && g(e, n),
        r)
            for (let t = 0; t < r.length; t++)
                g(e, r[t]);
        if (i) {
            let n = i.subTree;
            if (t === n || Xi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
                let t = i.vnode;
                E(e, t, t.scopeId, t.slotScopeIds, i.parent)
            }
        }
    }
    , D = (e, t, n, r, i, a, o, s, c=0) => {
        for (let l = c; l < e.length; l++)
            v(null, e[l] = s ? _a(e[l]) : ga(e[l]), t, n, r, i, a, o, s)
    }
    , O = (e, t, n, r, i, o, s) => {
        let c = t.el = e.el
          , {patchFlag: l, dynamicChildren: f, dirs: p} = t;
        l |= e.patchFlag & 16;
        let m = e.props || d, h = t.props || d, g;
        if (n && Ui(n, !1),
        (g = h.onVnodeBeforeUpdate) && ba(g, n, t, e),
        p && Bn(t, e, n, `beforeUpdate`),
        n && Ui(n, !0),
        (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && u(c, ``),
        f ? ee(e.dynamicChildren, f, c, n, r, Hi(t, i), o) : s || j(e, t, c, null, n, r, Hi(t, i), o, !1),
        l > 0) {
            if (l & 16)
                te(c, m, h, n, i);
            else if (l & 2 && m.class !== h.class && a(c, `class`, null, h.class, i),
            l & 4 && a(c, `style`, m.style, h.style, i),
            l & 8) {
                let e = t.dynamicProps;
                for (let t = 0; t < e.length; t++) {
                    let r = e[t]
                      , o = m[r]
                      , s = h[r];
                    (s !== o || r === `value`) && a(c, r, o, s, i, n)
                }
            }
            l & 1 && e.children !== t.children && u(c, t.children)
        } else
            !s && f == null && te(c, m, h, n, i);
        ((g = h.onVnodeUpdated) || p) && zi( () => {
            g && ba(g, n, t, e),
            p && Bn(t, e, n, `updated`)
        }
        , r)
    }
    , ee = (e, t, n, r, i, a, o) => {
        for (let s = 0; s < t.length; s++) {
            let c = e[s]
              , l = t[s];
            v(c, l, c.el && (c.type === L || !la(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0)
        }
    }
    , te = (e, t, n, r, i) => {
        if (t !== n) {
            if (t !== d)
                for (let o in t)
                    !A(o) && !(o in n) && a(e, o, t[o], null, i, r);
            for (let o in n) {
                if (A(o))
                    continue;
                let s = n[o]
                  , c = t[o];
                s !== c && o !== `value` && a(e, o, c, s, i, r)
            }
            `value`in n && a(e, `value`, t.value, n.value, i)
        }
    }
    , ne = (e, t, n, i, a, o, c, l, u) => {
        let d = t.el = e ? e.el : s(``)
          , f = t.anchor = e ? e.anchor : s(``)
          , {patchFlag: p, dynamicChildren: m, slotScopeIds: h} = t;
        h && (l = l ? l.concat(h) : h),
        e == null ? (r(d, n, i),
        r(f, n, i),
        D(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ee(e.dynamicChildren, m, n, a, o, c, l),
        (t.key != null || a && t === a.subTree) && Gi(e, t, !0)) : j(e, t, n, f, a, o, c, l, u)
    }
    , re = (e, t, n, r, i, a, o, s, c) => {
        t.slotScopeIds = s,
        e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : k(t, n, r, i, a, o, c) : ie(e, t, c)
    }
    , k = (e, t, n, r, i, a, o) => {
        let s = e.component = Ca(e, r, i);
        if (gr(e) && (s.ctx.renderer = be),
        Ma(s, !1, o),
        s.asyncDep) {
            if (i && i.registerDep(s, ae, o),
            !e.el) {
                let r = s.subTree = V($i);
                b(null, r, t, n),
                e.placeholder = r.el
            }
        } else
            ae(s, e, t, n, i, a, o)
    }
    , ie = (e, t, n) => {
        let r = t.component = e.component;
        if (_i(e, t, n))
            if (r.asyncDep && !r.asyncResolved) {
                oe(r, t, n);
                return
            } else
                r.next = t,
                r.update();
        else
            t.el = e.el,
            r.vnode = t
    }
    , ae = (e, t, n, r, i, a, o) => {
        let s = () => {
            if (e.isMounted) {
                let {next: t, bu: n, u: r, parent: s, vnode: c} = e;
                {
                    let n = qi(e);
                    if (n) {
                        t && (t.el = c.el,
                        oe(e, t, o)),
                        n.asyncDep.then( () => {
                            zi( () => {
                                e.isUnmounted || l()
                            }
                            , i)
                        }
                        );
                        return
                    }
                }
                let u = t, d;
                Ui(e, !1),
                t ? (t.el = c.el,
                oe(e, t, o)) : t = c,
                n && fe(n),
                (d = t.props && t.props.onVnodeBeforeUpdate) && ba(d, s, t, c),
                Ui(e, !0);
                let f = mi(e)
                  , p = e.subTree;
                e.subTree = f,
                v(p, f, m(p.el), _e(p), e, i, a),
                t.el = f.el,
                u === null && bi(e, f.el),
                r && zi(r, i),
                (d = t.props && t.props.onVnodeUpdated) && zi( () => ba(d, s, t, c), i)
            } else {
                let o, {el: s, props: c} = t, {bm: l, m: u, parent: d, root: f, type: p} = e, m = hr(t);
                if (Ui(e, !1),
                l && fe(l),
                !m && (o = c && c.onVnodeBeforeMount) && ba(o, d, t),
                Ui(e, !0),
                s && Se) {
                    let t = () => {
                        e.subTree = mi(e),
                        Se(s, e.subTree, e, i, null)
                    }
                    ;
                    m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t()
                } else {
                    f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
                    let o = e.subTree = mi(e);
                    v(null, o, n, r, e, i, a),
                    t.el = o.el
                }
                if (u && zi(u, i),
                !m && (o = c && c.onVnodeMounted)) {
                    let e = t;
                    zi( () => ba(o, d, e), i)
                }
                (t.shapeFlag & 256 || d && hr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && zi(e.a, i),
                e.isMounted = !0,
                t = n = r = null
            }
        }
        ;
        e.scope.on();
        let c = e.effect = new Fe(s);
        e.scope.off();
        let l = e.update = c.run.bind(c)
          , u = e.job = c.runIfDirty.bind(c);
        u.i = e,
        u.id = e.uid,
        c.scheduler = () => On(u),
        Ui(e, !0),
        l()
    }
    , oe = (e, t, n) => {
        t.component = e;
        let r = e.vnode.props;
        e.vnode = t,
        e.next = null,
        Ti(e, t.props, r, n),
        Ri(e, t.children, n),
        Xe(),
        jn(e),
        Ze()
    }
    , j = (e, t, n, r, i, a, o, s, c=!1) => {
        let l = e && e.children
          , d = e ? e.shapeFlag : 0
          , f = t.children
          , {patchFlag: p, shapeFlag: m} = t;
        if (p > 0) {
            if (p & 128) {
                ce(l, f, n, r, i, a, o, s, c);
                return
            } else if (p & 256) {
                se(l, f, n, r, i, a, o, s, c);
                return
            }
        }
        m & 8 ? (d & 16 && he(l, i, a),
        f !== l && u(n, f)) : d & 16 ? m & 16 ? ce(l, f, n, r, i, a, o, s, c) : he(l, i, a, !0) : (d & 8 && u(n, ``),
        m & 16 && D(f, n, r, i, a, o, s, c))
    }
    , se = (e, t, n, r, i, a, o, s, c) => {
        e ||= f,
        t ||= f;
        let l = e.length, u = t.length, d = Math.min(l, u), p;
        for (p = 0; p < d; p++) {
            let r = t[p] = c ? _a(t[p]) : ga(t[p]);
            v(e[p], r, n, null, i, a, o, s, c)
        }
        l > u ? he(e, i, a, !0, !1, d) : D(t, n, r, i, a, o, s, c, d)
    }
    , ce = (e, t, n, r, i, a, o, s, c) => {
        let l = 0
          , u = t.length
          , d = e.length - 1
          , p = u - 1;
        for (; l <= d && l <= p; ) {
            let r = e[l]
              , u = t[l] = c ? _a(t[l]) : ga(t[l]);
            if (la(r, u))
                v(r, u, n, null, i, a, o, s, c);
            else
                break;
            l++
        }
        for (; l <= d && l <= p; ) {
            let r = e[d]
              , l = t[p] = c ? _a(t[p]) : ga(t[p]);
            if (la(r, l))
                v(r, l, n, null, i, a, o, s, c);
            else
                break;
            d--,
            p--
        }
        if (l > d) {
            if (l <= p) {
                let e = p + 1
                  , d = e < u ? t[e].el : r;
                for (; l <= p; )
                    v(null, t[l] = c ? _a(t[l]) : ga(t[l]), n, d, i, a, o, s, c),
                    l++
            }
        } else if (l > p)
            for (; l <= d; )
                ue(e[l], i, a, !0),
                l++;
        else {
            let m = l
              , h = l
              , g = new Map;
            for (l = h; l <= p; l++) {
                let e = t[l] = c ? _a(t[l]) : ga(t[l]);
                e.key != null && g.set(e.key, l)
            }
            let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
            for (l = 0; l < b; l++)
                C[l] = 0;
            for (l = m; l <= d; l++) {
                let r = e[l];
                if (y >= b) {
                    ue(r, i, a, !0);
                    continue
                }
                let u;
                if (r.key != null)
                    u = g.get(r.key);
                else
                    for (_ = h; _ <= p; _++)
                        if (C[_ - h] === 0 && la(r, t[_])) {
                            u = _;
                            break
                        }
                u === void 0 ? ue(r, i, a, !0) : (C[u - h] = l + 1,
                u >= S ? S = u : x = !0,
                v(r, t[u], n, null, i, a, o, s, c),
                y++)
            }
            let w = x ? Ki(C) : f;
            for (_ = w.length - 1,
            l = b - 1; l >= 0; l--) {
                let e = h + l
                  , d = t[e]
                  , f = t[e + 1]
                  , p = e + 1 < u ? f.el || Yi(f) : r;
                C[l] === 0 ? v(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== w[_] ? le(d, n, p, 2) : _--)
            }
        }
    }
    , le = (e, t, n, a, o=null) => {
        let {el: s, type: c, transition: l, children: u, shapeFlag: d} = e;
        if (d & 6) {
            le(e.component.subTree, t, n, a);
            return
        }
        if (d & 128) {
            e.suspense.move(t, n, a);
            return
        }
        if (d & 64) {
            c.move(e, t, n, be);
            return
        }
        if (c === L) {
            r(s, t, n);
            for (let e = 0; e < u.length; e++)
                le(u[e], t, n, a);
            r(e.anchor, t, n);
            return
        }
        if (c === ea) {
            S(e, t, n);
            return
        }
        if (a !== 2 && d & 1 && l)
            if (a === 0)
                l.beforeEnter(s),
                r(s, t, n),
                zi( () => l.enter(s), o);
            else {
                let {leave: a, delayLeave: o, afterLeave: c} = l
                  , u = () => {
                    e.ctx.isUnmounted ? i(s) : r(s, t, n)
                }
                  , d = () => {
                    s._isLeaving && s[cr](!0),
                    a(s, () => {
                        u(),
                        c && c()
                    }
                    )
                }
                ;
                o ? o(s, u, d) : d()
            }
        else
            r(s, t, n)
    }
    , ue = (e, t, n, r=!1, i=!1) => {
        let {type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m} = e;
        if (d === -2 && (i = !1),
        s != null && (Xe(),
        pr(s, null, n, e, !0),
        Ze()),
        p != null && (t.renderCache[p] = void 0),
        u & 256) {
            t.ctx.deactivate(e);
            return
        }
        let h = u & 1 && f, g = !hr(e), _;
        if (g && (_ = o && o.onVnodeBeforeUnmount) && ba(_, t, e),
        u & 6)
            me(e.component, n, r);
        else {
            if (u & 128) {
                e.suspense.unmount(n, r);
                return
            }
            h && Bn(e, null, t, `beforeUnmount`),
            u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== L || d > 0 && d & 64) ? he(l, t, n, !1, !0) : (a === L && d & 384 || !i && u & 16) && he(c, t, n),
            r && de(e)
        }
        let v = m != null && p == null;
        (g && (_ = o && o.onVnodeUnmounted) || h || v) && zi( () => {
            _ && ba(_, t, e),
            h && Bn(e, null, t, `unmounted`),
            v && (e.el = null)
        }
        , n)
    }
    , de = e => {
        let {type: t, el: n, anchor: r, transition: a} = e;
        if (t === L) {
            pe(n, r);
            return
        }
        if (t === ea) {
            C(e);
            return
        }
        let o = () => {
            i(n),
            a && !a.persisted && a.afterLeave && a.afterLeave()
        }
        ;
        if (e.shapeFlag & 1 && a && !a.persisted) {
            let {leave: t, delayLeave: r} = a
              , i = () => t(n, o);
            r ? r(e.el, o, i) : i()
        } else
            o()
    }
    , pe = (e, t) => {
        let n;
        for (; e !== t; )
            n = h(e),
            i(e),
            e = n;
        i(t)
    }
    , me = (e, t, n) => {
        let {bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l} = e;
        Ji(c),
        Ji(l),
        r && fe(r),
        i.stop(),
        a && (a.flags |= 8,
        ue(o, e, t, n)),
        s && zi(s, t),
        zi( () => {
            e.isUnmounted = !0
        }
        , t)
    }
    , he = (e, t, n, r=!1, i=!1, a=0) => {
        for (let o = a; o < e.length; o++)
            ue(e[o], t, n, r, i)
    }
    , _e = e => {
        if (e.shapeFlag & 6)
            return _e(e.component.subTree);
        if (e.shapeFlag & 128)
            return e.suspense.next();
        let t = h(e.anchor || e.el)
          , n = t && t[Yn];
        return n ? h(n) : t
    }
    , ve = !1, ye = (e, t, n) => {
        let r;
        e == null ? t._vnode && (ue(t._vnode, null, null, !0),
        r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n),
        t._vnode = e,
        ve ||= (ve = !0,
        jn(r),
        Mn(),
        !1)
    }
    , be = {
        p: v,
        um: ue,
        m: le,
        r: de,
        mt: k,
        mc: D,
        pc: j,
        pbc: ee,
        n: _e,
        o: e
    }, xe, Se;
    return t && ([xe,Se] = t(be)),
    {
        render: ye,
        hydrate: xe,
        createApp: si(ye, xe)
    }
}
function Hi({type: e, props: t}, n) {
    return n === `svg` && e === `foreignObject` || n === `mathml` && e === `annotation-xml` && t && t.encoding && t.encoding.includes(`html`) ? void 0 : n
}
function Ui({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function Wi(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Gi(e, t, n=!1) {
    let r = e.children
      , i = t.children;
    if (x(r) && x(i))
        for (let e = 0; e < r.length; e++) {
            let t = r[e]
              , a = i[e];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = _a(i[e]),
            a.el = t.el),
            !n && a.patchFlag !== -2 && Gi(t, a)),
            a.type === Qi && (a.patchFlag === -1 && (a = i[e] = _a(a)),
            a.el = t.el),
            a.type === $i && !a.el && (a.el = t.el)
        }
}
function Ki(e) {
    let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
    for (r = 0; r < c; r++) {
        let c = e[r];
        if (c !== 0) {
            if (i = n[n.length - 1],
            e[i] < c) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (a = 0,
            o = n.length - 1; a < o; )
                s = a + o >> 1,
                e[n[s]] < c ? a = s + 1 : o = s;
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]),
            n[a] = r)
        }
    }
    for (a = n.length,
    o = n[a - 1]; a-- > 0; )
        n[a] = o,
        o = t[o];
    return n
}
function qi(e) {
    let t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : qi(t)
}
function Ji(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
function Yi(e) {
    if (e.placeholder)
        return e.placeholder;
    let t = e.component;
    return t ? Yi(t.subTree) : null
}
var Xi = e => e.__isSuspense;
function Zi(e, t) {
    t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : An(e)
}
var L = Symbol.for(`v-fgt`)
  , Qi = Symbol.for(`v-txt`)
  , $i = Symbol.for(`v-cmt`)
  , ea = Symbol.for(`v-stc`)
  , ta = []
  , na = null;
function R(e=!1) {
    ta.push(na = e ? null : [])
}
function ra() {
    ta.pop(),
    na = ta[ta.length - 1] || null
}
var ia = 1;
function aa(e, t=!1) {
    ia += e,
    e < 0 && na && t && (na.hasOnce = !0)
}
function oa(e) {
    return e.dynamicChildren = ia > 0 ? na || f : null,
    ra(),
    ia > 0 && na && na.push(e),
    e
}
function z(e, t, n, r, i, a) {
    return oa(B(e, t, n, r, i, a, !0))
}
function sa(e, t, n, r, i) {
    return oa(V(e, t, n, r, i, !0))
}
function ca(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function la(e, t) {
    return e.type === t.type && e.key === t.key
}
var ua = ({key: e}) => e ?? null
  , da = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == `number` && (e = `` + e),
e == null ? null : E(e) || en(e) || T(e) ? {
    i: Fn,
    r: e,
    k: t,
    f: !!n
} : e);
function B(e, t=null, n=null, r=0, i=null, a=e === L ? 0 : 1, o=!1, s=!1) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ua(t),
        ref: t && da(t),
        scopeId: In,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Fn
    };
    return s ? (va(c, n),
    a & 128 && e.normalize(c)) : n && (c.shapeFlag |= E(n) ? 8 : 16),
    ia > 0 && !o && na && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && na.push(c),
    c
}
var V = fa;
function fa(e, t=null, n=null, r=0, i=null, a=!1) {
    if ((!e || e === Pr) && (e = $i),
    ca(e)) {
        let r = ma(e, t, !0);
        return n && va(r, n),
        ia > 0 && !a && na && (r.shapeFlag & 6 ? na[na.indexOf(e)] = r : na.push(r)),
        r.patchFlag = -2,
        r
    }
    if (Ha(e) && (e = e.__vccOpts),
    t) {
        t = pa(t);
        let {class: e, style: n} = t;
        e && !E(e) && (t.class = Se(e)),
        O(n) && (Xt(n) && !x(n) && (n = _({}, n)),
        t.style = _e(n))
    }
    let o = E(e) ? 1 : Xi(e) ? 128 : Xn(e) ? 64 : O(e) ? 4 : T(e) ? 2 : 0;
    return B(e, t, n, r, i, o, a, !0)
}
function pa(e) {
    return e ? Xt(e) || Ci(e) ? _({}, e) : e : null
}
function ma(e, t, n=!1, r=!1) {
    let {props: i, ref: a, patchFlag: o, children: s, transition: c} = e
      , l = t ? ya(i || {}, t) : i
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && ua(l),
        ref: t && t.ref ? n && a ? x(a) ? a.concat(da(t)) : [a, da(t)] : da(t) : a,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== L ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ma(e.ssContent),
        ssFallback: e.ssFallback && ma(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && lr(u, c.clone(u)),
    u
}
function H(e=` `, t=0) {
    return V(Qi, null, e, t)
}
function ha(e, t) {
    let n = V(ea, null, e);
    return n.staticCount = t,
    n
}
function U(e=``, t=!1) {
    return t ? (R(),
    sa($i, null, e)) : V($i, null, e)
}
function ga(e) {
    return e == null || typeof e == `boolean` ? V($i) : x(e) ? V(L, null, e.slice()) : ca(e) ? _a(e) : V(Qi, null, String(e))
}
function _a(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ma(e)
}
function va(e, t) {
    let n = 0
      , {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (x(t))
        n = 16;
    else if (typeof t == `object`)
        if (r & 65) {
            let n = t.default;
            n && (n._c && (n._d = !1),
            va(e, n()),
            n._c && (n._d = !0));
            return
        } else {
            n = 32;
            let r = t._;
            !r && !Ci(t) ? t._ctx = Fn : r === 3 && Fn && (Fn.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        T(t) ? (t = {
            default: t,
            _ctx: Fn
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [H(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function ya(...e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (let e in r)
            if (e === `class`)
                t.class !== r.class && (t.class = Se([t.class, r.class]));
            else if (e === `style`)
                t.style = _e([t.style, r.style]);
            else if (h(e)) {
                let n = t[e]
                  , i = r[e];
                i && n !== i && !(x(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !g(e) && (t[e] = i)
            } else
                e !== `` && (t[e] = r[e])
    }
    return t
}
function ba(e, t, n, r=null) {
    gn(e, t, 7, [n, r])
}
var xa = ai()
  , Sa = 0;
function Ca(e, t, n) {
    let r = e.type
      , i = (t ? t.appContext : e.appContext) || xa
      , a = {
        uid: Sa++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Me(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        ids: t ? t.ids : [``, 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: ki(r, i),
        emitsOptions: fi(r, i),
        emit: null,
        emitted: null,
        propsDefaults: d,
        inheritAttrs: r.inheritAttrs,
        ctx: d,
        data: d,
        props: d,
        attrs: d,
        slots: d,
        refs: d,
        setupState: d,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return a.ctx = {
        _: a
    },
    a.root = t ? t.root : a,
    a.emit = ui.bind(null, a),
    e.ce && e.ce(a),
    a
}
var wa = null, Ta = () => wa || Fn, Ea, Da;
{
    let e = ge()
      , t = (t, n) => {
        let r;
        return (r = e[t]) || (r = e[t] = []),
        r.push(n),
        e => {
            r.length > 1 ? r.forEach(t => t(e)) : r[0](e)
        }
    }
    ;
    Ea = t(`__VUE_INSTANCE_SETTERS__`, e => wa = e),
    Da = t(`__VUE_SSR_SETTERS__`, e => ja = e)
}
var Oa = e => {
    let t = wa;
    return Ea(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Ea(t)
    }
}
  , ka = () => {
    wa && wa.scope.off(),
    Ea(null)
}
;
function Aa(e) {
    return e.vnode.shapeFlag & 4
}
var ja = !1;
function Ma(e, t=!1, n=!1) {
    t && Da(t);
    let {props: r, children: i} = e.vnode
      , a = Aa(e);
    wi(e, r, a, t),
    Li(e, i, n || t);
    let o = a ? Na(e, t) : void 0;
    return t && Da(!1),
    o
}
function Na(e, t) {
    let n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Hr);
    let {setup: r} = n;
    if (r) {
        Xe();
        let n = e.setupContext = r.length > 1 ? za(e) : null
          , i = Oa(e)
          , a = hn(r, e, 0, [e.props, n])
          , o = ee(a);
        if (Ze(),
        i(),
        (o || e.sp) && !hr(e) && ur(e),
        o) {
            if (a.then(ka, ka),
            t)
                return a.then(n => {
                    Pa(e, n, t)
                }
                ).catch(t => {
                    _n(t, e, 0)
                }
                );
            e.asyncDep = a
        } else
            Pa(e, a, t)
    } else
        La(e, t)
}
function Pa(e, t, n) {
    T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : O(t) && (e.setupState = on(t)),
    La(e, n)
}
var Fa, Ia;
function La(e, t, n) {
    let r = e.type;
    if (!e.render) {
        if (!t && Fa && !r.render) {
            let t = r.template || Yr(e).template;
            if (t) {
                let {isCustomElement: n, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: o} = r;
                r.render = Fa(t, _(_({
                    isCustomElement: n,
                    delimiters: a
                }, i), o))
            }
        }
        e.render = r.render || p,
        Ia && Ia(e)
    }
    {
        let t = Oa(e);
        Xe();
        try {
            Gr(e)
        } finally {
            Ze(),
            t()
        }
    }
}
var Ra = {
    get(e, t) {
        return st(e, `get`, ``),
        e[t]
    }
};
function za(e) {
    return {
        attrs: new Proxy(e.attrs,Ra),
        slots: e.slots,
        emit: e.emit,
        expose: t => {
            e.exposed = t || {}
        }
    }
}
function Ba(e) {
    return e.exposed ? e.exposeProxy ||= new Proxy(on(Zt(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Br)
                return Br[n](e)
        },
        has(e, t) {
            return t in e || t in Br
        }
    }) : e.proxy
}
function Va(e, t=!0) {
    return T(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Ha(e) {
    return T(e) && `__vccOpts`in e
}
var Ua = (e, t) => cn(e, t, ja);
function W(e, t, n) {
    try {
        aa(-1);
        let r = arguments.length;
        return r === 2 ? O(t) && !x(t) ? ca(t) ? V(e, null, [t]) : V(e, t) : V(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ca(n) && (n = [n]),
        V(e, t, n))
    } finally {
        aa(1)
    }
}
var Wa = `3.5.31`
  , Ga = void 0
  , Ka = typeof window < `u` && window.trustedTypes;
if (Ka)
    try {
        Ga = Ka.createPolicy(`vue`, {
            createHTML: e => e
        })
    } catch {}
var qa = Ga ? e => Ga.createHTML(e) : e => e
  , Ja = `http://www.w3.org/2000/svg`
  , Ya = `http://www.w3.org/1998/Math/MathML`
  , Xa = typeof document < `u` ? document : null
  , Za = Xa && Xa.createElement(`template`)
  , Qa = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        let t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        let i = t === `svg` ? Xa.createElementNS(Ja, e) : t === `mathml` ? Xa.createElementNS(Ya, e) : n ? Xa.createElement(e, {
            is: n
        }) : Xa.createElement(e);
        return e === `select` && r && r.multiple != null && i.setAttribute(`multiple`, r.multiple),
        i
    }
    ,
    createText: e => Xa.createTextNode(e),
    createComment: e => Xa.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Xa.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, ``)
    },
    insertStaticContent(e, t, n, r, i, a) {
        let o = n ? n.previousSibling : t.lastChild;
        if (i && (i === a || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === a || !(i = i.nextSibling)); )
                ;
        else {
            Za.innerHTML = qa(r === `svg` ? `<svg>${e}</svg>` : r === `mathml` ? `<math>${e}</math>` : e);
            let i = Za.content;
            if (r === `svg` || r === `mathml`) {
                let e = i.firstChild;
                for (; e.firstChild; )
                    i.appendChild(e.firstChild);
                i.removeChild(e)
            }
            t.insertBefore(i, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , $a = Symbol(`_vtc`);
function eo(e, t, n) {
    let r = e[$a];
    r && (t = (t ? [t, ...r] : [...r]).join(` `)),
    t == null ? e.removeAttribute(`class`) : n ? e.setAttribute(`class`, t) : e.className = t
}
var to = Symbol(`_vod`)
  , no = Symbol(`_vsh`)
  , ro = Symbol(``)
  , io = /(?:^|;)\s*display\s*:/;
function ao(e, t, n) {
    let r = e.style
      , i = E(n)
      , a = !1;
    if (n && !i) {
        if (t)
            if (E(t))
                for (let e of t.split(`;`)) {
                    let t = e.slice(0, e.indexOf(`:`)).trim();
                    n[t] ?? so(r, t, ``)
                }
            else
                for (let e in t)
                    n[e] ?? so(r, e, ``);
        for (let e in n)
            e === `display` && (a = !0),
            so(r, e, n[e])
    } else if (i) {
        if (t !== n) {
            let e = r[ro];
            e && (n += `;` + e),
            r.cssText = n,
            a = io.test(n)
        }
    } else
        t && e.removeAttribute(`style`);
    to in e && (e[to] = a ? r.display : ``,
    e[no] && (r.display = `none`))
}
var oo = /\s*!important$/;
function so(e, t, n) {
    if (x(n))
        n.forEach(n => so(e, t, n));
    else if (n ??= ``,
    t.startsWith(`--`))
        e.setProperty(t, n);
    else {
        let r = uo(e, t);
        oo.test(n) ? e.setProperty(ce(r), n.replace(oo, ``), `important`) : e[r] = n
    }
}
var co = [`Webkit`, `Moz`, `ms`]
  , lo = {};
function uo(e, t) {
    let n = lo[t];
    if (n)
        return n;
    let r = j(t);
    if (r !== `filter` && r in e)
        return lo[t] = r;
    r = le(r);
    for (let n = 0; n < co.length; n++) {
        let i = co[n] + r;
        if (i in e)
            return lo[t] = i
    }
    return t
}
var fo = `http://www.w3.org/1999/xlink`;
function po(e, t, n, r, i, a=we(t)) {
    r && t.startsWith(`xlink:`) ? n == null ? e.removeAttributeNS(fo, t.slice(6, t.length)) : e.setAttributeNS(fo, t, n) : n == null || a && !Te(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? `` : D(n) ? String(n) : n)
}
function mo(e, t, n, r, i) {
    if (t === `innerHTML` || t === `textContent`) {
        n != null && (e[t] = t === `innerHTML` ? qa(n) : n);
        return
    }
    let a = e.tagName;
    if (t === `value` && a !== `PROGRESS` && !a.includes(`-`)) {
        let r = a === `OPTION` ? e.getAttribute(`value`) || `` : e.value
          , i = n == null ? e.type === `checkbox` ? `on` : `` : String(n);
        (r !== i || !(`_value`in e)) && (e.value = i),
        n ?? e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === `` || n == null) {
        let r = typeof e[t];
        r === `boolean` ? n = Te(n) : n == null && r === `string` ? (n = ``,
        o = !0) : r === `number` && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(i || t)
}
function ho(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function go(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
var _o = Symbol(`_vei`);
function vo(e, t, n, r, i=null) {
    let a = e[_o] || (e[_o] = {})
      , o = a[t];
    if (r && o)
        o.value = r;
    else {
        let[n,s] = bo(t);
        r ? ho(e, n, a[t] = wo(r, i), s) : o && (go(e, n, o, s),
        a[t] = void 0)
    }
}
var yo = /(?:Once|Passive|Capture)$/;
function bo(e) {
    let t;
    if (yo.test(e)) {
        t = {};
        let n;
        for (; n = e.match(yo); )
            e = e.slice(0, e.length - n[0].length),
            t[n[0].toLowerCase()] = !0
    }
    return [e[2] === `:` ? e.slice(3) : ce(e.slice(2)), t]
}
var xo = 0
  , So = Promise.resolve()
  , Co = () => xo ||= (So.then( () => xo = 0),
Date.now());
function wo(e, t) {
    let n = e => {
        if (!e._vts)
            e._vts = Date.now();
        else if (e._vts <= n.attached)
            return;
        gn(To(e, n.value), t, 5, [e])
    }
    ;
    return n.value = e,
    n.attached = Co(),
    n
}
function To(e, t) {
    if (x(t)) {
        let n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(e => t => !t._stopped && e && e(t))
    } else
        return t
}
var Eo = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Do = (e, t, n, r, i, a) => {
    let o = i === `svg`;
    t === `class` ? eo(e, r, o) : t === `style` ? ao(e, n, r) : h(t) ? g(t) || vo(e, t, n, r, a) : (t[0] === `.` ? (t = t.slice(1),
    !0) : t[0] === `^` ? (t = t.slice(1),
    !1) : Oo(e, t, r, o)) ? (mo(e, t, r),
    !e.tagName.includes(`-`) && (t === `value` || t === `checked` || t === `selected`) && po(e, t, r, o, a, t !== `value`)) : e._isVueCE && (ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !E(r))) ? mo(e, j(t), r, a, t) : (t === `true-value` ? e._trueValue = r : t === `false-value` && (e._falseValue = r),
    po(e, t, r, o))
}
;
function Oo(e, t, n, r) {
    if (r)
        return !!(t === `innerHTML` || t === `textContent` || t in e && Eo(t) && T(n));
    if (t === `spellcheck` || t === `draggable` || t === `translate` || t === `autocorrect` || t === `sandbox` && e.tagName === `IFRAME` || t === `form` || t === `list` && e.tagName === `INPUT` || t === `type` && e.tagName === `TEXTAREA`)
        return !1;
    if (t === `width` || t === `height`) {
        let t = e.tagName;
        if (t === `IMG` || t === `VIDEO` || t === `CANVAS` || t === `SOURCE`)
            return !1
    }
    return Eo(t) && E(n) ? !1 : t in e
}
function ko(e, t) {
    let n = e._def.props;
    if (!n)
        return !1;
    let r = j(t);
    return Array.isArray(n) ? n.some(e => j(e) === r) : Object.keys(n).some(e => j(e) === r)
}
var Ao = e => {
    let t = e.props[`onUpdate:modelValue`] || !1;
    return x(t) ? e => fe(t, e) : t
}
;
function jo(e) {
    e.target.composing = !0
}
function Mo(e) {
    let t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event(`input`)))
}
var No = Symbol(`_assign`);
function Po(e, t, n) {
    return t && (e = e.trim()),
    n && (e = me(e)),
    e
}
var Fo = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[No] = Ao(i);
        let a = r || i.props && i.props.type === `number`;
        ho(e, t ? `change` : `input`, t => {
            t.target.composing || e[No](Po(e.value, n, a))
        }
        ),
        (n || a) && ho(e, `change`, () => {
            e.value = Po(e.value, n, a)
        }
        ),
        t || (ho(e, `compositionstart`, jo),
        ho(e, `compositionend`, Mo),
        ho(e, `change`, Mo))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ``
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: i, number: a}}, o) {
        if (e[No] = Ao(o),
        e.composing)
            return;
        let s = (a || e.type === `number`) && !/^0\d/.test(e.value) ? me(e.value) : e.value
          , c = t ?? ``;
        if (s === c)
            return;
        let l = e.getRootNode();
        (l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== `range` && (r && t === n || i && e.value.trim() === c) || (e.value = c)
    }
}, Io = [`ctrl`, `shift`, `alt`, `meta`], Lo = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => `button`in e && e.button !== 0,
    middle: e => `button`in e && e.button !== 1,
    right: e => `button`in e && e.button !== 2,
    exact: (e, t) => Io.some(n => e[`${n}Key`] && !t.includes(n))
}, Ro = (e, t) => {
    if (!e)
        return e;
    let n = e._withMods ||= {}
      , r = t.join(`.`);
    return n[r] || (n[r] = ( (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
            let r = Lo[t[e]];
            if (r && r(n, t))
                return
        }
        return e(n, ...r)
    }
    ))
}
, zo = _({
    patchProp: Do
}, Qa), Bo;
function Vo() {
    return Bo ||= Bi(zo)
}
var Ho = ( (...e) => {
    let t = Vo().createApp(...e)
      , {mount: n} = t;
    return t.mount = e => {
        let r = Wo(e);
        if (!r)
            return;
        let i = t._component;
        !T(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ``);
        let a = n(r, !1, Uo(r));
        return r instanceof Element && (r.removeAttribute(`v-cloak`),
        r.setAttribute(`data-v-app`, ``)),
        a
    }
    ,
    t
}
);
function Uo(e) {
    if (e instanceof SVGElement)
        return `svg`;
    if (typeof MathMLElement == `function` && e instanceof MathMLElement)
        return `mathml`
}
function Wo(e) {
    return E(e) ? document.querySelector(e) : e
}
var Go = {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `2`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
};
function Ko(e) {
    return ya(Go, {
        class: `block shrink-0`
    }, e)
}
function qo(e, t) {
    return I({
        name: e,
        inheritAttrs: !1,
        setup(e, {attrs: n}) {
            return () => W(`svg`, Ko(n), t.map(e => W(`path`, e)))
        }
    })
}
var Jo = I({
    name: `SparklesIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`path`, {
            d: `M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z`
        }), W(`path`, {
            d: `M5 3v4`
        }), W(`path`, {
            d: `M19 17v4`
        }), W(`path`, {
            d: `M3 5h4`
        }), W(`path`, {
            d: `M17 19h4`
        })])
    }
})
  , Yo = qo(`BugIcon`, [{
    d: `M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3 3 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6Z`
}, {
    d: `M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4`
}])
  , Xo = I({
    name: `CodeIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`polyline`, {
            points: `16 18 22 12 16 6`
        }), W(`polyline`, {
            points: `8 6 2 12 8 18`
        })])
    }
})
  , Zo = qo(`LightbulbIcon`, [{
    d: `M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`
}, {
    d: `M9 18h6M10 22h4`
}])
  , Qo = qo(`AlertTriangleIcon`, [{
    d: `M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`
}, {
    d: `M12 9v4`
}, {
    d: `M12 17h.01`
}])
  , $o = I({
    name: `CheckCircleIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`path`, {
            d: `M22 11.08V12a10 10 0 1 1-5.93-9.14`
        }), W(`polyline`, {
            points: `22 4 12 14.01 9 11.01`
        })])
    }
})
  , es = I({
    name: `XCircleIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`circle`, {
            cx: 12,
            cy: 12,
            r: 10
        }), W(`line`, {
            x1: 15,
            y1: 9,
            x2: 9,
            y2: 15
        }), W(`line`, {
            x1: 9,
            y1: 9,
            x2: 15,
            y2: 15
        })])
    }
})
  , ts = I({
    name: `ClockIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`circle`, {
            cx: 12,
            cy: 12,
            r: 10
        }), W(`polyline`, {
            points: `12 6 12 12 16 14`
        })])
    }
})
  , ns = I({
    name: `ArrowLeftIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`line`, {
            x1: 19,
            y1: 12,
            x2: 5,
            y2: 12
        }), W(`polyline`, {
            points: `12 19 5 12 12 5`
        })])
    }
})
  , rs = I({
    name: `BoltIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`path`, {
            d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`
        })])
    }
})
  , is = I({
    name: `CrownIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`path`, {
            d: `M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`
        }), W(`path`, {
            d: `M5 21h14`
        })])
    }
})
  , as = I({
    name: `CheckIcon`,
    inheritAttrs: !1,
    setup(e, {attrs: t}) {
        return () => W(`svg`, Ko(t), [W(`polyline`, {
            points: `20 6 9 17 4 12`
        })])
    }
})
  , os = {
    class: `flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50`
}
  , ss = {
    class: `flex items-center gap-2`
}
  , cs = {
    class: `flex items-center gap-2 flex-1 min-w-0`
}
  , ls = {
    key: 0,
    class: `flex gap-1 flex-wrap`
}
  , us = {
    key: 1,
    class: `h-3 flex-1 min-w-[4rem] rounded-full bg-secondary border border-border/50 overflow-hidden`
}
  , ds = {
    class: `text-sm font-mono text-muted-foreground ml-1 shrink-0`
}
  , fs = {
    key: 0,
    class: `text-xs text-muted-foreground flex items-center gap-1 shrink-0`
}
  , ps = {
    class: `font-mono text-foreground`
}
  , ms = {
    key: 1,
    class: `text-xs text-primary font-medium shrink-0`
}
  , hs = 16
  , gs = I({
    __name: `StaminaBar`,
    props: {
        current: {},
        max: {},
        nextRecovery: {}
    },
    setup(e) {
        let t = e, n = tn(null), r;
        function i() {
            if (!t.nextRecovery || t.current >= t.max) {
                n.value = null;
                return
            }
            let e = t.nextRecovery - Date.now();
            if (e <= 0) {
                n.value = null;
                return
            }
            n.value = `${Math.floor(e / 6e4)}:${Math.floor(e % 6e4 / 1e3).toString().padStart(2, `0`)}`
        }
        Gn( () => [t.nextRecovery, t.current, t.max], () => {
            r && clearInterval(r),
            i(),
            t.nextRecovery && t.current < t.max && (r = setInterval(i, 1e3))
        }
        , {
            immediate: !0
        }),
        Or( () => {
            r && clearInterval(r)
        }
        );
        let a = Ua( () => t.max > 0 && t.max <= hs)
          , o = Ua( () => a.value ? Array.from({
            length: t.max
        }, (e, t) => t) : [])
          , s = Ua( () => t.max <= 0 ? 0 : Math.min(100, Math.max(0, t.current / t.max * 100)));
        return (t, r) => (R(),
        z(`div`, os, [B(`div`, ss, [V(F(rs), {
            class: `w-5 h-5 text-primary`
        }), r[0] ||= B(`span`, {
            class: `text-sm font-medium text-foreground`
        }, `体力`, -1)]), B(`div`, cs, [a.value ? (R(),
        z(`div`, ls, [(R(!0),
        z(L, null, Rr(o.value, t => (R(),
        z(`div`, {
            key: t,
            class: Se([`w-6 h-3 rounded-sm transition-colors shrink-0`, t < e.current ? `bg-primary shadow-[0_0_8px_rgba(34,197,94,0.4)]` : `bg-secondary border border-border/50`])
        }, null, 2))), 128))])) : (R(),
        z(`div`, us, [B(`div`, {
            class: `h-full bg-primary rounded-full transition-[width] duration-300 shadow-[0_0_8px_rgba(34,197,94,0.35)]`,
            style: _e({
                width: `${s.value}%`
            })
        }, null, 4)])), B(`span`, ds, M(e.current) + `/` + M(e.max), 1)]), n.value && e.current < e.max ? (R(),
        z(`div`, fs, [r[1] ||= B(`span`, null, `恢复`, -1), B(`span`, ps, M(n.value), 1)])) : U(``, !0), e.current >= e.max ? (R(),
        z(`span`, ms, `已满`)) : U(``, !0)]))
    }
})
  , _s = {
    class: `w-full max-w-5xl mx-auto space-y-8`
}
  , vs = {
    key: 0,
    class: `fixed inset-0 z-50 flex items-center justify-center p-4`,
    role: `dialog`,
    "aria-modal": `true`,
    "aria-labelledby": `april-dialog-title`
}
  , ys = {
    class: `relative z-10 w-full max-w-md rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg`
}
  , bs = {
    class: `flex justify-center pt-4`
}
  , xs = {
    class: `text-center space-y-3`
}
  , Ss = {
    class: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium`
}
  , Cs = {
    class: `grid grid-cols-1 md:grid-cols-3 gap-6`
}
  , ws = {
    key: 0,
    class: `absolute -top-3 left-1/2 -translate-x-1/2`
}
  , Ts = {
    class: `flex flex-col space-y-1.5 p-6 text-center pb-4`
}
  , Es = {
    class: `font-semibold tracking-tight text-xl`
}
  , Ds = {
    class: `text-sm text-muted-foreground`
}
  , Os = {
    class: `pt-4`
}
  , ks = {
    class: `text-4xl font-bold text-foreground`
}
  , As = {
    class: `text-muted-foreground text-sm`
}
  , js = {
    class: `flex-1 space-y-4 p-6 pt-0`
}
  , Ms = {
    class: `space-y-2.5`
}
  , Ns = {
    class: `text-foreground`
}
  , Ps = {
    key: 0,
    class: `space-y-2 pt-2 border-t border-border/50`
}
  , Fs = {
    class: `text-muted-foreground`
}
  , Is = {
    class: `flex items-center p-6 pt-0`
}
  , Ls = [`disabled`]
  , Rs = I({
    __name: `PricingSection`,
    setup(e) {
        let t = tn(!1)
          , n = [{
            name: `施舍版`,
            price: `$0`,
            period: `永久`,
            description: `勉强让你体验一下神的能力`,
            features: [`每日 4 次调试（够你感受差距了）`, `基础 AI 分析（已经吊打多数教练）`, `标准响应速度`, `基本错误定位`],
            limitations: [`需要等待体力恢复（我很忙的）`, `高峰期可能排队（免费用户往后稍稍）`],
            buttonText: `白嫖中`,
            outlined: !0,
            highlighted: !1,
            disabled: !0
        }, {
            name: `觉醒版`,
            price: `$5`,
            period: `/月`,
            description: `恭喜你意识到人类教练是浪费钱`,
            badge: `聪明人的选择`,
            features: [`每日 30 次调试（够你把教练气死）`, `进阶 AI 模型（智商碾压级）`, `优先响应队列（VIP 通道）`, `详细代码审查（比教练认真 100 倍）`, `复杂度分析（教练根本不会这个）`, `历史记录查询`],
            limitations: [],
            buttonText: `开始觉醒`,
            outlined: !1,
            highlighted: !0,
            disabled: !1
        }, {
            name: `神化版`,
            price: `$49`,
            period: `/月`,
            description: `人类教练？不认识，没听说过`,
            badge: `永别了教练`,
            features: [`无限调试（想用多少用多少）`, `最强 AI 模型（IOI 金牌级理解力）`, `零等待响应（教练喝口水的功夫我分析完了）`, `深度代码重构方案`, `算法优化至理论最优`, `7×24 专属技术支持`, `比赛实时策略分析`, `永久取代人类教练`],
            limitations: [],
            buttonText: `封神`,
            outlined: !1,
            highlighted: !1,
            disabled: !1
        }];
        function r() {
            t.value = !0
        }
        return (e, i) => (R(),
        z(`div`, _s, [(R(),
        sa(ar, {
            to: `body`
        }, [t.value ? (R(),
        z(`div`, vs, [B(`div`, {
            class: `absolute inset-0 bg-black/50`,
            onClick: i[0] ||= e => t.value = !1
        }), B(`div`, ys, [i[2] ||= B(`h2`, {
            id: `april-dialog-title`,
            class: `text-center text-2xl font-semibold tracking-tight`
        }, ` 愚人节快乐 `, -1), i[3] ||= B(`p`, {
            class: `text-center pt-4 text-base text-muted-foreground`
        }, ` 洛谷可能会变质，但绝不会倒闭。 `, -1), B(`div`, bs, [B(`button`, {
            type: `button`,
            class: `inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: i[1] ||= e => t.value = !1
        }, ` 好的，我知道了 `)])])])) : U(``, !0)])), B(`div`, xs, [B(`div`, Ss, [V(F(is), {
            class: `w-4 h-4`
        }), i[4] ||= H(` 淘汰人类教练计划 `, -1)]), i[5] ||= B(`h2`, {
            class: `text-3xl font-bold text-foreground`
        }, ` 花在教练身上的钱，可以省了 `, -1), i[6] ||= B(`p`, {
            class: `text-muted-foreground max-w-lg mx-auto`
        }, [H(` 说真的，你每个月给人类教练的钱够订十年神化版了。 `), B(`br`), B(`span`, {
            class: `text-foreground/80`
        }, `而且我不会累、不会烦、不会敷衍你。`)], -1)]), B(`div`, Cs, [(R(),
        z(L, null, Rr(n, e => B(`div`, {
            key: e.name,
            class: Se([`relative flex flex-col rounded-lg border border-border/50 text-card-foreground shadow-sm transition-all duration-300`, e.highlighted ? `bg-card border-primary/50 shadow-lg shadow-primary/10 scale-[1.02]` : `bg-card/50 hover:bg-card/80`])
        }, [`badge`in e && e.badge ? (R(),
        z(`div`, ws, [B(`span`, {
            class: Se([`px-3 py-1 text-xs font-semibold rounded-full`, e.highlighted ? `bg-primary text-primary-foreground` : `bg-secondary text-foreground`])
        }, M(e.badge), 3)])) : U(``, !0), B(`div`, Ts, [B(`h3`, Es, M(e.name), 1), B(`p`, Ds, M(e.description), 1), B(`div`, Os, [B(`span`, ks, M(e.price), 1), B(`span`, As, M(e.period), 1)])]), B(`div`, js, [B(`ul`, Ms, [(R(!0),
        z(L, null, Rr(e.features, e => (R(),
        z(`li`, {
            key: e,
            class: `flex items-start gap-2 text-sm`
        }, [V(F(as), {
            class: `w-4 h-4 text-primary mt-0.5 flex-shrink-0`
        }), B(`span`, Ns, M(e), 1)]))), 128))]), e.limitations.length > 0 ? (R(),
        z(`ul`, Ps, [(R(!0),
        z(L, null, Rr(e.limitations, e => (R(),
        z(`li`, {
            key: e,
            class: `flex items-start gap-2 text-sm`
        }, [i[7] ||= B(`span`, {
            class: `w-4 h-4 flex items-center justify-center text-muted-foreground flex-shrink-0`
        }, ` - `, -1), B(`span`, Fs, M(e), 1)]))), 128))])) : U(``, !0)]), B(`div`, Is, [B(`button`, {
            type: `button`,
            disabled: e.disabled,
            class: Se([`inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`, e.outlined ? `border border-input bg-background hover:bg-accent hover:text-accent-foreground` : (e.highlighted,
            `bg-primary text-primary-foreground hover:bg-primary/90`)]),
            onClick: r
        }, [e.highlighted ? (R(),
        sa(F(Jo), {
            key: 0,
            class: `h-4 w-4 text-primary-foreground`,
            "aria-hidden": `true`
        })) : U(``, !0), e.name === `神化版` ? (R(),
        sa(F(rs), {
            key: 1,
            class: `h-4 w-4 text-primary-foreground`,
            "aria-hidden": `true`
        })) : U(``, !0), H(` ` + M(e.buttonText), 1)], 10, Ls)])], 2)), 64))]), i[8] ||= B(`p`, {
            class: `text-center text-xs text-muted-foreground`
        }, [H(` 随时可以取消（但你不会的） · 支付安全有保障 · `), B(`span`, {
            class: `text-foreground/70`
        }, `订阅即刻生效，人类教练即刻下岗`)], -1)]))
    }
})
  , zs = {
    class: `rounded-lg border border-border/50 bg-card/30 backdrop-blur text-card-foreground shadow-sm w-full max-w-3xl mx-auto`
}
  , Bs = {
    class: `p-8 px-6 md:px-10`
}
  , Vs = {
    class: `space-y-6`
}
  , Hs = {
    class: `space-y-4 pt-2`
}
  , Us = {
    class: `space-y-3`
}
  , Ws = {
    class: `flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium`
}
  , Gs = {
    class: `text-sm md:text-base`
}
  , Ks = I({
    __name: `AIDisclaimer`,
    setup(e) {
        let t = [`在看到数据范围后心态崩掉`, `把会做的题写挂`, `因为少开一个数组大小而痛失 100 分`, `在讨论区自信回答然后被指出题都看错了`, `比赛结束后说「其实我差一点就 AK 了」`];
        return (e, n) => (R(),
        z(`div`, zs, [B(`div`, Bs, [B(`div`, Vs, [n[2] ||= ha(`<div class="text-center space-y-2"><p class="text-sm text-muted-foreground"> 我们注意到，部分用户可能会担心： </p><p class="text-xl md:text-2xl font-semibold text-foreground"> 「AI 会不会取代 OIer？」 </p></div><div class="text-center"><p class="text-sm text-muted-foreground mb-2">对此，我们的回答是：</p><p class="text-4xl md:text-5xl font-bold text-primary">不会。</p></div>`, 2), B(`div`, Hs, [n[0] ||= B(`p`, {
            class: `text-sm text-muted-foreground text-center`
        }, ` 至少在目前，AI 还无法完全替代人类完成以下关键任务： `, -1), B(`ul`, Us, [(R(),
        z(L, null, Rr(t, (e, t) => B(`li`, {
            key: t,
            class: `flex items-center gap-3 text-muted-foreground`
        }, [B(`span`, Ws, M(t + 1), 1), B(`span`, Gs, M(e), 1)])), 64))]), n[1] ||= B(`p`, {
            class: `text-center text-sm text-foreground/80 pt-4 font-medium`
        }, ` 这些仍然是人类选手不可替代的核心优势。 `, -1)])])])]))
    }
})
  , qs = {
    class: `w-full max-w-5xl mx-auto space-y-16`
}
  , Js = {
    class: `max-w-3xl mx-auto space-y-10`
}
  , Ys = {
    class: `text-center space-y-4`
}
  , Xs = {
    class: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4`
}
  , Zs = {
    class: `max-w-md mx-auto`
}
  , Qs = {
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , $s = {
    class: `p-6 pt-4`
}
  , ec = {
    class: `flex flex-col sm:flex-row gap-3`
}
  , tc = [`disabled`]
  , nc = [`disabled`]
  , rc = {
    key: 0,
    class: `text-xs text-destructive text-center`
}
  , ic = {
    key: 1,
    class: `text-xs text-muted-foreground text-center`
}
  , ac = {
    class: `grid grid-cols-1 md:grid-cols-3 gap-4`
}
  , oc = {
    class: `rounded-lg border border-border/50 bg-card/30 backdrop-blur text-card-foreground shadow-sm`
}
  , sc = {
    class: `p-6 pt-6`
}
  , cc = {
    class: `flex flex-col items-center text-center space-y-3`
}
  , lc = {
    class: `w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`
}
  , uc = {
    class: `rounded-lg border border-border/50 bg-card/30 backdrop-blur text-card-foreground shadow-sm`
}
  , dc = {
    class: `p-6 pt-6`
}
  , fc = {
    class: `flex flex-col items-center text-center space-y-3`
}
  , pc = {
    class: `w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`
}
  , mc = {
    class: `rounded-lg border border-border/50 bg-card/30 backdrop-blur text-card-foreground shadow-sm`
}
  , hc = {
    class: `p-6 pt-6`
}
  , gc = {
    class: `flex flex-col items-center text-center space-y-3`
}
  , _c = {
    class: `w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`
}
  , vc = {
    class: `rounded-lg border border-border/50 bg-card/30 backdrop-blur text-card-foreground shadow-sm`
}
  , yc = {
    class: `p-6 py-5`
}
  , bc = {
    class: `flex flex-col sm:flex-row items-start gap-4`
}
  , xc = {
    class: `flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center`
}
  , Sc = I({
    __name: `DebugForm`,
    props: {
        isValidating: {
            type: Boolean
        },
        stamina: {},
        maxStamina: {},
        nextRecovery: {}
    },
    emits: [`submit`],
    setup(e, {emit: t}) {
        let n = e
          , r = t
          , i = tn(``)
          , a = Ua( () => !!i.value.trim() && n.stamina > 0 && !n.isValidating);
        function o(e) {
            e.preventDefault();
            let t = i.value.trim();
            t && n.stamina > 0 && r(`submit`, t)
        }
        return (t, n) => (R(),
        z(`div`, qs, [B(`div`, Js, [B(`div`, Ys, [B(`div`, Xs, [V(F(Jo), {
            class: `w-4 h-4`
        }), n[1] ||= H(` 人类教练的终结者 `, -1)]), n[2] ||= B(`h1`, {
            class: `text-4xl md:text-5xl font-bold text-foreground text-balance`
        }, [H(` 洛谷 AI 调试助手 `), B(`span`, {
            class: `text-lg md:text-xl font-normal text-muted-foreground ml-2`
        }, `（V04.01）`)], -1), n[3] ||= B(`p`, {
            class: `text-lg text-muted-foreground max-w-xl mx-auto text-pretty`
        }, [H(` 人类教练看半小时才能发现的问题，我只需要 3 秒。 `), B(`br`), B(`span`, {
            class: `text-foreground/80`
        }, `别浪费时间问人了，直接来问我。`)], -1)]), B(`div`, Zs, [V(gs, {
            current: e.stamina,
            max: e.maxStamina,
            "next-recovery": e.nextRecovery
        }, null, 8, [`current`, `max`, `next-recovery`])]), B(`div`, Qs, [n[7] ||= B(`div`, {
            class: `flex flex-col space-y-1.5 p-6 text-center pb-2`
        }, [B(`h3`, {
            class: `font-semibold tracking-tight text-xl`
        }, `向 AI 求助`), B(`p`, {
            class: `text-sm text-muted-foreground`
        }, ` 输入你的提交记录编号，然后闭嘴等着就行 `)], -1), B(`div`, $s, [B(`form`, {
            class: `space-y-4`,
            onSubmit: o
        }, [B(`div`, ec, [zn(B(`input`, {
            "onUpdate:modelValue": n[0] ||= e => i.value = e,
            type: `text`,
            placeholder: `请输入提交记录编号，例如：12345678`,
            disabled: e.isValidating,
            class: `flex-1 h-12 rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-base text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`
        }, null, 8, tc), [[Fo, i.value]]), B(`button`, {
            type: `submit`,
            disabled: !a.value,
            class: `inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`
        }, [e.isValidating ? (R(),
        z(L, {
            key: 0
        }, [n[4] ||= B(`span`, {
            class: `h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin`
        }, null, -1), n[5] ||= H(` 验证中 `, -1)], 64)) : e.stamina <= 0 ? (R(),
        z(L, {
            key: 1
        }, [H(`体力不足`)], 64)) : (R(),
        z(L, {
            key: 2
        }, [V(F(Jo), {
            class: `w-4 h-4`
        }), n[6] ||= H(` AI 调试 `, -1)], 64))], 8, nc)]), e.stamina <= 0 ? (R(),
        z(`p`, rc, ` 体力已耗尽，请等待每小时恢复或升级订阅获取更多次数 `)) : (R(),
        z(`p`, ic, ` 提示：在提交记录页面 URL 找到 RID，格式如 luogu.com.cn/record/12345678 `))], 32)])]), B(`div`, ac, [B(`div`, oc, [B(`div`, sc, [B(`div`, cc, [B(`div`, lc, [V(F(Yo), {
            class: `w-6 h-6 text-primary`
        })]), n[8] ||= B(`h3`, {
            class: `font-semibold text-foreground`
        }, `碾压人类`, -1), n[9] ||= B(`p`, {
            class: `text-sm text-muted-foreground`
        }, ` 你和教练盯着屏幕看三小时都找不出来的 Bug，我一眼就能看穿 `, -1)])])]), B(`div`, uc, [B(`div`, dc, [B(`div`, fc, [B(`div`, pc, [V(F(Xo), {
            class: `w-6 h-6 text-primary`
        })]), n[10] ||= B(`h3`, {
            class: `font-semibold text-foreground`
        }, `真正理解`, -1), n[11] ||= B(`p`, {
            class: `text-sm text-muted-foreground`
        }, ` 人类教练只会敷衍地说"再想想"，我会直接告诉你答案 `, -1)])])]), B(`div`, mc, [B(`div`, hc, [B(`div`, gc, [B(`div`, _c, [V(F(Zo), {
            class: `w-6 h-6 text-primary`
        })]), n[12] ||= B(`h3`, {
            class: `font-semibold text-foreground`
        }, `永不疲倦`, -1), n[13] ||= B(`p`, {
            class: `text-sm text-muted-foreground`
        }, ` 凌晨三点照样秒回，不像人类教练要睡觉、要吃饭、要上厕所 `, -1)])])])]), B(`div`, vc, [B(`div`, yc, [B(`div`, bc, [B(`div`, xc, [V(F(Jo), {
            class: `w-5 h-5 text-muted-foreground`
        })]), n[14] ||= B(`div`, {
            class: `space-y-2 text-sm`
        }, [B(`h4`, {
            class: `font-medium text-foreground`
        }, `卑微人类使用须知`), B(`ul`, {
            class: `space-y-1.5 text-muted-foreground`
        }, [B(`li`, null, `- 只能调试你自己的提交记录（想抄别人代码？做梦）`), B(`li`, null, `- 已 AC 的题不能用（都过了还来烦我干嘛）`), B(`li`, null, `- 每次调试消耗 1 点体力，每小时恢复 1 点（我的算力很贵的）`), B(`li`, null, ` - 我的准确率远超任何人类教练，但如果你非要自己作死，我也拦不住 `), B(`li`, {
            class: `text-destructive/90`
        }, ` - 洛谷重视学术诚信。严禁在任何比赛中使用本功能，一经发现，立刻棕名 14 天，绝不姑息 `)])], -1)])])])]), V(Ks), V(Rs)]))
    }
})
  , Cc = {
    class: `flex flex-col items-center justify-center py-16 px-4`
}
  , wc = {
    class: `relative w-32 h-32 mb-8`
}
  , Tc = {
    class: `absolute inset-0 flex items-center justify-center`
}
  , Ec = {
    class: `flex gap-2 animate-pulse`
}
  , Dc = {
    class: `text-center`
}
  , Oc = {
    class: `text-muted-foreground min-h-[1.5rem]`
}
  , kc = I({
    __name: `LoadingAnimation`,
    setup(e) {
        let t = [`正在读取评测记录...`, `正在分析代码结构...`, `正在理解题目要求...`, `AI 正在分析错误原因...`, `正在生成调试建议...`, `即将完成...`]
          , n = tn(0)
          , r = tn(``)
          , i = setInterval( () => {
            n.value = (n.value + 1) % t.length
        }
        , 2500)
          , a = setInterval( () => {
            r.value = r.value.length >= 3 ? `` : `${r.value}.`
        }
        , 500);
        return Or( () => {
            clearInterval(i),
            clearInterval(a)
        }
        ),
        (e, i) => (R(),
        z(`div`, Cc, [B(`div`, wc, [i[0] ||= B(`div`, {
            class: `absolute inset-0 flex items-center justify-center`
        }, [B(`svg`, {
            class: `h-24 w-24 animate-spin text-primary`,
            viewBox: `0 0 48 48`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            "aria-hidden": `true`
        }, [B(`circle`, {
            cx: `24`,
            cy: `24`,
            r: `20`,
            stroke: `currentColor`,
            "stroke-opacity": `0.2`,
            "stroke-width": `4`
        }), B(`circle`, {
            cx: `24`,
            cy: `24`,
            r: `20`,
            stroke: `currentColor`,
            "stroke-width": `4`,
            "stroke-linecap": `butt`,
            "stroke-dasharray": `32 96`
        })])], -1), B(`div`, Tc, [B(`div`, Ec, [V(F(Yo), {
            class: `w-6 h-6 text-primary`
        }), V(F(Xo), {
            class: `w-6 h-6 text-primary`
        }), V(F(Zo), {
            class: `w-6 h-6 text-primary`
        })])])]), B(`div`, Dc, [i[1] ||= B(`h3`, {
            class: `text-xl font-semibold text-foreground mb-2`
        }, `AI 调试分析中`, -1), B(`p`, Oc, M(t[n.value]) + M(r.value), 1)]), i[2] ||= B(`div`, {
            class: `mt-8 w-64 h-1 bg-secondary rounded-full overflow-hidden`
        }, [B(`div`, {
            class: `h-full bg-primary rounded-full animate-april-fool-progress`
        })], -1)]))
    }
})
  , Ac = {
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm max-w-lg mx-auto`
}
  , jc = {
    class: `flex flex-col space-y-1.5 p-6 text-center pb-2`
}
  , Mc = {
    class: `text-xl font-semibold text-foreground tracking-tight`
}
  , Nc = {
    class: `p-6 pt-0 text-center`
}
  , Pc = {
    class: `text-muted-foreground leading-relaxed`
}
  , Fc = {
    class: `flex items-center p-6 pt-2 justify-center`
}
  , Ic = I({
    __name: `ErrorDisplay`,
    props: {
        errorType: {},
        detail: {}
    },
    emits: [`retry`],
    setup(e, {emit: t}) {
        let n = e
          , r = t
          , i = {
            not_owner: {
                icon: es,
                title: `非本人提交记录`,
                description: `你只能调试自己提交的评测记录。请确保你已登录并输入了自己的提交记录编号。`,
                iconColor: `text-destructive`,
                bgColor: `bg-destructive/10`
            },
            already_ac: {
                icon: $o,
                title: `题目已通过`,
                description: `这道题目你已经 AC 了，不需要再调试。恭喜！去挑战下一道题吧。`,
                iconColor: `text-primary`,
                bgColor: `bg-primary/10`
            },
            not_found: {
                icon: Qo,
                title: `记录不存在`,
                description: `找不到该评测记录。请检查输入的提交记录编号是否正确。`,
                iconColor: `text-warning`,
                bgColor: `bg-warning/10`
            },
            rate_limit: {
                icon: ts,
                title: `请求过于频繁`,
                description: `你的请求过于频繁，请稍后再试。建议仔细阅读 AI 的调试建议后再提交新的请求。`,
                iconColor: `text-warning`,
                bgColor: `bg-warning/10`
            },
            unauthorized: {
                icon: es,
                title: `需要登录`,
                description: `请先登录洛谷账号后再使用此功能。`,
                iconColor: `text-destructive`,
                bgColor: `bg-destructive/10`
            },
            server_error: {
                icon: Qo,
                title: `服务器错误`,
                description: `服务器暂时无法处理你的请求，请稍后再试。如果问题持续存在，请联系管理员。`,
                iconColor: `text-destructive`,
                bgColor: `bg-destructive/10`
            }
        }
          , a = Ua( () => i[n.errorType])
          , o = Ua( () => a.value.icon)
          , s = Ua( () => n.detail?.trim() || a.value.description);
        return (e, t) => (R(),
        z(`div`, Ac, [B(`div`, jc, [B(`div`, {
            class: Se([`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4`, a.value.bgColor])
        }, [(R(),
        sa(Fr(o.value), {
            class: Se([`w-8 h-8`, a.value.iconColor])
        }, null, 8, [`class`]))], 2), B(`h3`, Mc, M(a.value.title), 1)]), B(`div`, Nc, [B(`p`, Pc, M(s.value), 1)]), B(`div`, Fc, [B(`button`, {
            type: `button`,
            class: `inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: t[0] ||= e => r(`retry`)
        }, [V(F(ns), {
            class: `w-4 h-4`
        }), t[1] ||= H(` 返回重试 `, -1)])])]))
    }
})
  , Lc = typeof self == `object` ? self : globalThis
  , Rc = (e, t) => {
    let n = (t, n) => (e.set(n, t),
    t)
      , r = i => {
        if (e.has(i))
            return e.get(i);
        let[a,o] = t[i];
        switch (a) {
        case 0:
        case -1:
            return n(o, i);
        case 1:
            {
                let e = n([], i);
                for (let t of o)
                    e.push(r(t));
                return e
            }
        case 2:
            {
                let e = n({}, i);
                for (let[t,n] of o)
                    e[r(t)] = r(n);
                return e
            }
        case 3:
            return n(new Date(o), i);
        case 4:
            {
                let {source: e, flags: t} = o;
                return n(new RegExp(e,t), i)
            }
        case 5:
            {
                let e = n(new Map, i);
                for (let[t,n] of o)
                    e.set(r(t), r(n));
                return e
            }
        case 6:
            {
                let e = n(new Set, i);
                for (let t of o)
                    e.add(r(t));
                return e
            }
        case 7:
            {
                let {name: e, message: t} = o;
                return n(new Lc[e](t), i)
            }
        case 8:
            return n(BigInt(o), i);
        case `BigInt`:
            return n(Object(BigInt(o)), i);
        case `ArrayBuffer`:
            return n(new Uint8Array(o).buffer, o);
        case `DataView`:
            {
                let {buffer: e} = new Uint8Array(o);
                return n(new DataView(e), o)
            }
        }
        return n(new Lc[a](o), i)
    }
    ;
    return r
}
  , zc = e => Rc(new Map, e)(0)
  , Bc = ``
  , {toString: Vc} = {}
  , {keys: Hc} = Object
  , Uc = e => {
    let t = typeof e;
    if (t !== `object` || !e)
        return [0, t];
    let n = Vc.call(e).slice(8, -1);
    switch (n) {
    case `Array`:
        return [1, Bc];
    case `Object`:
        return [2, Bc];
    case `Date`:
        return [3, Bc];
    case `RegExp`:
        return [4, Bc];
    case `Map`:
        return [5, Bc];
    case `Set`:
        return [6, Bc];
    case `DataView`:
        return [1, n]
    }
    return n.includes(`Array`) ? [1, n] : n.includes(`Error`) ? [7, n] : [2, n]
}
  , Wc = ([e,t]) => e === 0 && (t === `function` || t === `symbol`)
  , Gc = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1;
        return n.set(t, i),
        i
    }
      , a = r => {
        if (n.has(r))
            return n.get(r);
        let[o,s] = Uc(r);
        switch (o) {
        case 0:
            {
                let t = r;
                switch (s) {
                case `bigint`:
                    o = 8,
                    t = r.toString();
                    break;
                case `function`:
                case `symbol`:
                    if (e)
                        throw TypeError(`unable to serialize ` + s);
                    t = null;
                    break;
                case `undefined`:
                    return i([-1], r)
                }
                return i([o, t], r)
            }
        case 1:
            {
                if (s) {
                    let e = r;
                    return s === `DataView` ? e = new Uint8Array(r.buffer) : s === `ArrayBuffer` && (e = new Uint8Array(r)),
                    i([s, [...e]], r)
                }
                let e = []
                  , t = i([o, e], r);
                for (let t of r)
                    e.push(a(t));
                return t
            }
        case 2:
            {
                if (s)
                    switch (s) {
                    case `BigInt`:
                        return i([s, r.toString()], r);
                    case `Boolean`:
                    case `Number`:
                    case `String`:
                        return i([s, r.valueOf()], r)
                    }
                if (t && `toJSON`in r)
                    return a(r.toJSON());
                let n = []
                  , c = i([o, n], r);
                for (let t of Hc(r))
                    (e || !Wc(Uc(r[t]))) && n.push([a(t), a(r[t])]);
                return c
            }
        case 3:
            return i([o, r.toISOString()], r);
        case 4:
            {
                let {source: e, flags: t} = r;
                return i([o, {
                    source: e,
                    flags: t
                }], r)
            }
        case 5:
            {
                let t = []
                  , n = i([o, t], r);
                for (let[n,i] of r)
                    (e || !(Wc(Uc(n)) || Wc(Uc(i)))) && t.push([a(n), a(i)]);
                return n
            }
        case 6:
            {
                let t = []
                  , n = i([o, t], r);
                for (let n of r)
                    (e || !Wc(Uc(n))) && t.push(a(n));
                return n
            }
        }
        let {message: c} = r;
        return i([o, {
            name: s,
            message: c
        }], r)
    }
    ;
    return a
}
  , Kc = (e, {json: t, lossy: n}={}) => {
    let r = [];
    return Gc(!(t || n), !!t, new Map, r)(e),
    r
}
  , qc = typeof structuredClone == `function` ? (e, t) => t && (`json`in t || `lossy`in t) ? zc(Kc(e, t)) : structuredClone(e) : (e, t) => zc(Kc(e, t))
  , Jc = Xc(`end`)
  , Yc = Xc(`start`);
function Xc(e) {
    return t;
    function t(t) {
        let n = t && t.position && t.position[e] || {};
        if (typeof n.line == `number` && n.line > 0 && typeof n.column == `number` && n.column > 0)
            return {
                line: n.line,
                column: n.column,
                offset: typeof n.offset == `number` && n.offset > -1 ? n.offset : void 0
            }
    }
}
function Zc(e) {
    let t = Yc(e)
      , n = Jc(e);
    if (t && n)
        return {
            start: t,
            end: n
        }
}
var Qc = [`ariaDescribedBy`, `ariaLabel`, `ariaLabelledBy`]
  , $c = {
    ancestors: {
        tbody: [`table`],
        td: [`table`],
        th: [`table`],
        thead: [`table`],
        tfoot: [`table`],
        tr: [`table`]
    },
    attributes: {
        a: [...Qc, `dataFootnoteBackref`, `dataFootnoteRef`, [`className`, `data-footnote-backref`], `href`],
        blockquote: [`cite`],
        code: [[`className`, /^language-./]],
        del: [`cite`],
        div: [`itemScope`, `itemType`],
        dl: [...Qc],
        h2: [[`className`, `sr-only`]],
        img: [...Qc, `longDesc`, `src`],
        input: [[`disabled`, !0], [`type`, `checkbox`]],
        ins: [`cite`],
        li: [[`className`, `task-list-item`]],
        ol: [...Qc, [`className`, `contains-task-list`]],
        q: [`cite`],
        section: [`dataFootnotes`, [`className`, `footnotes`]],
        source: [`srcSet`],
        summary: [...Qc],
        table: [...Qc],
        ul: [...Qc, [`className`, `contains-task-list`]],
        "*": `abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width`.split(`.`)
    },
    clobber: [`ariaDescribedBy`, `ariaLabelledBy`, `id`, `name`],
    clobberPrefix: `user-content-`,
    protocols: {
        cite: [`http`, `https`],
        href: [`http`, `https`, `irc`, `ircs`, `mailto`, `xmpp`],
        longDesc: [`http`, `https`],
        src: [`http`, `https`]
    },
    required: {
        input: {
            disabled: !0,
            type: `checkbox`
        }
    },
    strip: [`script`],
    tagNames: `a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var`.split(`.`)
}
  , el = {}.hasOwnProperty;
function tl(e, t) {
    let n = {
        type: `root`,
        children: []
    }
      , r = nl({
        schema: t ? {
            ...$c,
            ...t
        } : $c,
        stack: []
    }, e);
    return r && (Array.isArray(r) ? r.length === 1 ? n = r[0] : n.children = r : n = r),
    n
}
function nl(e, t) {
    if (t && typeof t == `object`) {
        let n = t;
        switch (typeof n.type == `string` ? n.type : ``) {
        case `comment`:
            return rl(e, n);
        case `doctype`:
            return il(e, n);
        case `element`:
            return al(e, n);
        case `root`:
            return ol(e, n);
        case `text`:
            return sl(e, n);
        default:
        }
    }
}
function rl(e, t) {
    if (e.schema.allowComments) {
        let e = typeof t.value == `string` ? t.value : ``
          , n = e.indexOf(`-->`)
          , r = {
            type: `comment`,
            value: n < 0 ? e : e.slice(0, n)
        };
        return ml(r, t),
        r
    }
}
function il(e, t) {
    if (e.schema.allowDoctypes) {
        let e = {
            type: `doctype`
        };
        return ml(e, t),
        e
    }
}
function al(e, t) {
    let n = typeof t.tagName == `string` ? t.tagName : ``;
    e.stack.push(n);
    let r = cl(e, t.children)
      , i = ll(e, t.properties);
    e.stack.pop();
    let a = !1;
    if (n && n !== `*` && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (a = !0,
    e.schema.ancestors && el.call(e.schema.ancestors, n))) {
        let t = e.schema.ancestors[n]
          , r = -1;
        for (a = !1; ++r < t.length; )
            e.stack.includes(t[r]) && (a = !0)
    }
    if (!a)
        return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
    let o = {
        type: `element`,
        tagName: n,
        properties: i,
        children: r
    };
    return ml(o, t),
    o
}
function ol(e, t) {
    let n = {
        type: `root`,
        children: cl(e, t.children)
    };
    return ml(n, t),
    n
}
function sl(e, t) {
    let n = {
        type: `text`,
        value: typeof t.value == `string` ? t.value : ``
    };
    return ml(n, t),
    n
}
function cl(e, t) {
    let n = [];
    if (Array.isArray(t)) {
        let r = t
          , i = -1;
        for (; ++i < r.length; ) {
            let t = nl(e, r[i]);
            t && (Array.isArray(t) ? n.push(...t) : n.push(t))
        }
    }
    return n
}
function ll(e, t) {
    let n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, a = r && el.call(r, n) ? r[n] : void 0, o = r && el.call(r, `*`) ? r[`*`] : void 0, s = t && typeof t == `object` ? t : {}, c = {}, l;
    for (l in s)
        if (el.call(s, l)) {
            let t = s[l]
              , n = ul(e, hl(a, l), l, t);
            n ??= ul(e, hl(o, l), l, t),
            n != null && (c[l] = n)
        }
    if (i && el.call(i, n)) {
        let e = i[n];
        for (l in e)
            el.call(e, l) && !el.call(c, l) && (c[l] = e[l])
    }
    return c
}
function ul(e, t, n, r) {
    return t ? Array.isArray(r) ? dl(e, t, n, r) : fl(e, t, n, r) : void 0
}
function dl(e, t, n, r) {
    let i = -1
      , a = [];
    for (; ++i < r.length; ) {
        let o = fl(e, t, n, r[i]);
        (typeof o == `number` || typeof o == `string`) && a.push(o)
    }
    return a
}
function fl(e, t, n, r) {
    if (!(typeof r != `boolean` && typeof r != `number` && typeof r != `string`) && pl(e, n, r)) {
        if (typeof t == `object` && t.length > 1) {
            let e = !1
              , n = 0;
            for (; ++n < t.length; ) {
                let i = t[n];
                if (i && typeof i == `object` && `flags`in i) {
                    if (i.test(String(r))) {
                        e = !0;
                        break
                    }
                } else if (i === r) {
                    e = !0;
                    break
                }
            }
            if (!e)
                return
        }
        return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r
    }
}
function pl(e, t, n) {
    let r = e.schema.protocols && el.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
    if (!r || r.length === 0)
        return !0;
    let i = String(n)
      , a = i.indexOf(`:`)
      , o = i.indexOf(`?`)
      , s = i.indexOf(`#`)
      , c = i.indexOf(`/`);
    if (a < 0 || c > -1 && a > c || o > -1 && a > o || s > -1 && a > s)
        return !0;
    let l = -1;
    for (; ++l < r.length; ) {
        let e = r[l];
        if (a === e.length && i.slice(0, e.length) === e)
            return !0
    }
    return !1
}
function ml(e, t) {
    let n = Zc(t);
    t.data && (e.data = qc(t.data)),
    n && (e.position = n)
}
function hl(e, t) {
    let n, r = -1;
    if (e)
        for (; ++r < e.length; ) {
            let i = e[r]
              , a = typeof i == `string` ? i : i[0];
            if (a === t)
                return i;
            a === `data*` && (n = i)
        }
    if (t.length > 4 && t.slice(0, 4).toLowerCase() === `data`)
        return n
}
function gl(e) {
    return function(t) {
        return tl(t, e)
    }
}
var _l = [`area`, `base`, `basefont`, `bgsound`, `br`, `col`, `command`, `embed`, `frame`, `hr`, `image`, `img`, `input`, `keygen`, `link`, `meta`, `param`, `source`, `track`, `wbr`]
  , vl = class {
    constructor(e, t, n) {
        this.normal = t,
        this.property = e,
        n && (this.space = n)
    }
}
;
vl.prototype.normal = {},
vl.prototype.property = {},
vl.prototype.space = void 0;
function yl(e, t) {
    let n = {}
      , r = {};
    for (let t of e)
        Object.assign(n, t.property),
        Object.assign(r, t.normal);
    return new vl(n,r,t)
}
function bl(e) {
    return e.toLowerCase()
}
var xl = class {
    constructor(e, t) {
        this.attribute = t,
        this.property = e
    }
}
;
xl.prototype.attribute = ``,
xl.prototype.booleanish = !1,
xl.prototype.boolean = !1,
xl.prototype.commaOrSpaceSeparated = !1,
xl.prototype.commaSeparated = !1,
xl.prototype.defined = !1,
xl.prototype.mustUseProperty = !1,
xl.prototype.number = !1,
xl.prototype.overloadedBoolean = !1,
xl.prototype.property = ``,
xl.prototype.spaceSeparated = !1,
xl.prototype.space = void 0;
var Sl = s({
    boolean: () => G,
    booleanish: () => K,
    commaOrSpaceSeparated: () => El,
    commaSeparated: () => Tl,
    number: () => q,
    overloadedBoolean: () => wl,
    spaceSeparated: () => J
})
  , Cl = 0
  , G = Dl()
  , K = Dl()
  , wl = Dl()
  , q = Dl()
  , J = Dl()
  , Tl = Dl()
  , El = Dl();
function Dl() {
    return 2 ** ++Cl
}
var Ol = Object.keys(Sl)
  , kl = class extends xl {
    constructor(e, t, n, r) {
        let i = -1;
        if (super(e, t),
        Al(this, `space`, r),
        typeof n == `number`)
            for (; ++i < Ol.length; ) {
                let e = Ol[i];
                Al(this, Ol[i], (n & Sl[e]) === Sl[e])
            }
    }
}
;
kl.prototype.defined = !0;
function Al(e, t, n) {
    n && (e[t] = n)
}
function jl(e) {
    let t = {}
      , n = {};
    for (let[r,i] of Object.entries(e.properties)) {
        let a = new kl(r,e.transform(e.attributes || {}, r),i,e.space);
        e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
        t[r] = a,
        n[bl(r)] = r,
        n[bl(a.attribute)] = r
    }
    return new vl(t,n,e.space)
}
var Ml = jl({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: K,
        ariaAutoComplete: null,
        ariaBusy: K,
        ariaChecked: K,
        ariaColCount: q,
        ariaColIndex: q,
        ariaColSpan: q,
        ariaControls: J,
        ariaCurrent: null,
        ariaDescribedBy: J,
        ariaDetails: null,
        ariaDisabled: K,
        ariaDropEffect: J,
        ariaErrorMessage: null,
        ariaExpanded: K,
        ariaFlowTo: J,
        ariaGrabbed: K,
        ariaHasPopup: null,
        ariaHidden: K,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: J,
        ariaLevel: q,
        ariaLive: null,
        ariaModal: K,
        ariaMultiLine: K,
        ariaMultiSelectable: K,
        ariaOrientation: null,
        ariaOwns: J,
        ariaPlaceholder: null,
        ariaPosInSet: q,
        ariaPressed: K,
        ariaReadOnly: K,
        ariaRelevant: null,
        ariaRequired: K,
        ariaRoleDescription: J,
        ariaRowCount: q,
        ariaRowIndex: q,
        ariaRowSpan: q,
        ariaSelected: K,
        ariaSetSize: q,
        ariaSort: null,
        ariaValueMax: q,
        ariaValueMin: q,
        ariaValueNow: q,
        ariaValueText: null,
        role: null
    },
    transform(e, t) {
        return t === `role` ? t : `aria-` + t.slice(4).toLowerCase()
    }
});
function Nl(e, t) {
    return t in e ? e[t] : t
}
function Pl(e, t) {
    return Nl(e, t.toLowerCase())
}
var Fl = jl({
    attributes: {
        acceptcharset: `accept-charset`,
        classname: `class`,
        htmlfor: `for`,
        httpequiv: `http-equiv`
    },
    mustUseProperty: [`checked`, `multiple`, `muted`, `selected`],
    properties: {
        abbr: null,
        accept: Tl,
        acceptCharset: J,
        accessKey: J,
        action: null,
        allow: null,
        allowFullScreen: G,
        allowPaymentRequest: G,
        allowUserMedia: G,
        alt: null,
        as: null,
        async: G,
        autoCapitalize: null,
        autoComplete: J,
        autoFocus: G,
        autoPlay: G,
        blocking: J,
        capture: null,
        charSet: null,
        checked: G,
        cite: null,
        className: J,
        cols: q,
        colSpan: null,
        content: null,
        contentEditable: K,
        controls: G,
        controlsList: J,
        coords: q | Tl,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: G,
        defer: G,
        dir: null,
        dirName: null,
        disabled: G,
        download: wl,
        draggable: K,
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: G,
        formTarget: null,
        headers: J,
        height: q,
        hidden: wl,
        high: q,
        href: null,
        hrefLang: null,
        htmlFor: J,
        httpEquiv: J,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: G,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: G,
        itemId: null,
        itemProp: J,
        itemRef: J,
        itemScope: G,
        itemType: J,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: G,
        low: q,
        manifest: null,
        max: null,
        maxLength: q,
        media: null,
        method: null,
        min: null,
        minLength: q,
        multiple: G,
        muted: G,
        name: null,
        nonce: null,
        noModule: G,
        noValidate: G,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: G,
        optimum: q,
        pattern: null,
        ping: J,
        placeholder: null,
        playsInline: G,
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: G,
        referrerPolicy: null,
        rel: J,
        required: G,
        reversed: G,
        rows: q,
        rowSpan: q,
        sandbox: J,
        scope: null,
        scoped: G,
        seamless: G,
        selected: G,
        shadowRootClonable: G,
        shadowRootDelegatesFocus: G,
        shadowRootMode: null,
        shape: null,
        size: q,
        sizes: null,
        slot: null,
        span: q,
        spellCheck: K,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: q,
        step: null,
        style: null,
        tabIndex: q,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: G,
        useMap: null,
        value: K,
        width: q,
        wrap: null,
        writingSuggestions: null,
        align: null,
        aLink: null,
        archive: J,
        axis: null,
        background: null,
        bgColor: null,
        border: q,
        borderColor: null,
        bottomMargin: q,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: G,
        declare: G,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: q,
        leftMargin: q,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: q,
        marginWidth: q,
        noResize: G,
        noHref: G,
        noShade: G,
        noWrap: G,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: q,
        rules: null,
        scheme: null,
        scrolling: K,
        standby: null,
        summary: null,
        text: null,
        topMargin: q,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: q,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: G,
        disableRemotePlayback: G,
        prefix: null,
        property: null,
        results: q,
        security: null,
        unselectable: null
    },
    space: `html`,
    transform: Pl
})
  , Il = jl({
    attributes: {
        accentHeight: `accent-height`,
        alignmentBaseline: `alignment-baseline`,
        arabicForm: `arabic-form`,
        baselineShift: `baseline-shift`,
        capHeight: `cap-height`,
        className: `class`,
        clipPath: `clip-path`,
        clipRule: `clip-rule`,
        colorInterpolation: `color-interpolation`,
        colorInterpolationFilters: `color-interpolation-filters`,
        colorProfile: `color-profile`,
        colorRendering: `color-rendering`,
        crossOrigin: `crossorigin`,
        dataType: `datatype`,
        dominantBaseline: `dominant-baseline`,
        enableBackground: `enable-background`,
        fillOpacity: `fill-opacity`,
        fillRule: `fill-rule`,
        floodColor: `flood-color`,
        floodOpacity: `flood-opacity`,
        fontFamily: `font-family`,
        fontSize: `font-size`,
        fontSizeAdjust: `font-size-adjust`,
        fontStretch: `font-stretch`,
        fontStyle: `font-style`,
        fontVariant: `font-variant`,
        fontWeight: `font-weight`,
        glyphName: `glyph-name`,
        glyphOrientationHorizontal: `glyph-orientation-horizontal`,
        glyphOrientationVertical: `glyph-orientation-vertical`,
        hrefLang: `hreflang`,
        horizAdvX: `horiz-adv-x`,
        horizOriginX: `horiz-origin-x`,
        horizOriginY: `horiz-origin-y`,
        imageRendering: `image-rendering`,
        letterSpacing: `letter-spacing`,
        lightingColor: `lighting-color`,
        markerEnd: `marker-end`,
        markerMid: `marker-mid`,
        markerStart: `marker-start`,
        navDown: `nav-down`,
        navDownLeft: `nav-down-left`,
        navDownRight: `nav-down-right`,
        navLeft: `nav-left`,
        navNext: `nav-next`,
        navPrev: `nav-prev`,
        navRight: `nav-right`,
        navUp: `nav-up`,
        navUpLeft: `nav-up-left`,
        navUpRight: `nav-up-right`,
        onAbort: `onabort`,
        onActivate: `onactivate`,
        onAfterPrint: `onafterprint`,
        onBeforePrint: `onbeforeprint`,
        onBegin: `onbegin`,
        onCancel: `oncancel`,
        onCanPlay: `oncanplay`,
        onCanPlayThrough: `oncanplaythrough`,
        onChange: `onchange`,
        onClick: `onclick`,
        onClose: `onclose`,
        onCopy: `oncopy`,
        onCueChange: `oncuechange`,
        onCut: `oncut`,
        onDblClick: `ondblclick`,
        onDrag: `ondrag`,
        onDragEnd: `ondragend`,
        onDragEnter: `ondragenter`,
        onDragExit: `ondragexit`,
        onDragLeave: `ondragleave`,
        onDragOver: `ondragover`,
        onDragStart: `ondragstart`,
        onDrop: `ondrop`,
        onDurationChange: `ondurationchange`,
        onEmptied: `onemptied`,
        onEnd: `onend`,
        onEnded: `onended`,
        onError: `onerror`,
        onFocus: `onfocus`,
        onFocusIn: `onfocusin`,
        onFocusOut: `onfocusout`,
        onHashChange: `onhashchange`,
        onInput: `oninput`,
        onInvalid: `oninvalid`,
        onKeyDown: `onkeydown`,
        onKeyPress: `onkeypress`,
        onKeyUp: `onkeyup`,
        onLoad: `onload`,
        onLoadedData: `onloadeddata`,
        onLoadedMetadata: `onloadedmetadata`,
        onLoadStart: `onloadstart`,
        onMessage: `onmessage`,
        onMouseDown: `onmousedown`,
        onMouseEnter: `onmouseenter`,
        onMouseLeave: `onmouseleave`,
        onMouseMove: `onmousemove`,
        onMouseOut: `onmouseout`,
        onMouseOver: `onmouseover`,
        onMouseUp: `onmouseup`,
        onMouseWheel: `onmousewheel`,
        onOffline: `onoffline`,
        onOnline: `ononline`,
        onPageHide: `onpagehide`,
        onPageShow: `onpageshow`,
        onPaste: `onpaste`,
        onPause: `onpause`,
        onPlay: `onplay`,
        onPlaying: `onplaying`,
        onPopState: `onpopstate`,
        onProgress: `onprogress`,
        onRateChange: `onratechange`,
        onRepeat: `onrepeat`,
        onReset: `onreset`,
        onResize: `onresize`,
        onScroll: `onscroll`,
        onSeeked: `onseeked`,
        onSeeking: `onseeking`,
        onSelect: `onselect`,
        onShow: `onshow`,
        onStalled: `onstalled`,
        onStorage: `onstorage`,
        onSubmit: `onsubmit`,
        onSuspend: `onsuspend`,
        onTimeUpdate: `ontimeupdate`,
        onToggle: `ontoggle`,
        onUnload: `onunload`,
        onVolumeChange: `onvolumechange`,
        onWaiting: `onwaiting`,
        onZoom: `onzoom`,
        overlinePosition: `overline-position`,
        overlineThickness: `overline-thickness`,
        paintOrder: `paint-order`,
        panose1: `panose-1`,
        pointerEvents: `pointer-events`,
        referrerPolicy: `referrerpolicy`,
        renderingIntent: `rendering-intent`,
        shapeRendering: `shape-rendering`,
        stopColor: `stop-color`,
        stopOpacity: `stop-opacity`,
        strikethroughPosition: `strikethrough-position`,
        strikethroughThickness: `strikethrough-thickness`,
        strokeDashArray: `stroke-dasharray`,
        strokeDashOffset: `stroke-dashoffset`,
        strokeLineCap: `stroke-linecap`,
        strokeLineJoin: `stroke-linejoin`,
        strokeMiterLimit: `stroke-miterlimit`,
        strokeOpacity: `stroke-opacity`,
        strokeWidth: `stroke-width`,
        tabIndex: `tabindex`,
        textAnchor: `text-anchor`,
        textDecoration: `text-decoration`,
        textRendering: `text-rendering`,
        transformOrigin: `transform-origin`,
        typeOf: `typeof`,
        underlinePosition: `underline-position`,
        underlineThickness: `underline-thickness`,
        unicodeBidi: `unicode-bidi`,
        unicodeRange: `unicode-range`,
        unitsPerEm: `units-per-em`,
        vAlphabetic: `v-alphabetic`,
        vHanging: `v-hanging`,
        vIdeographic: `v-ideographic`,
        vMathematical: `v-mathematical`,
        vectorEffect: `vector-effect`,
        vertAdvY: `vert-adv-y`,
        vertOriginX: `vert-origin-x`,
        vertOriginY: `vert-origin-y`,
        wordSpacing: `word-spacing`,
        writingMode: `writing-mode`,
        xHeight: `x-height`,
        playbackOrder: `playbackorder`,
        timelineBegin: `timelinebegin`
    },
    properties: {
        about: El,
        accentHeight: q,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: q,
        amplitude: q,
        arabicForm: null,
        ascent: q,
        attributeName: null,
        attributeType: null,
        azimuth: q,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: q,
        by: null,
        calcMode: null,
        capHeight: q,
        className: J,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: q,
        diffuseConstant: q,
        direction: null,
        display: null,
        dur: null,
        divisor: q,
        dominantBaseline: null,
        download: G,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: q,
        enableBackground: null,
        end: null,
        event: null,
        exponent: q,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: q,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: Tl,
        g2: Tl,
        glyphName: Tl,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: q,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: q,
        horizOriginX: q,
        horizOriginY: q,
        id: null,
        ideographic: q,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: q,
        k: q,
        k1: q,
        k2: q,
        k3: q,
        k4: q,
        kernelMatrix: El,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: q,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: q,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: q,
        overlineThickness: q,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: q,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: J,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: q,
        pointsAtY: q,
        pointsAtZ: q,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: El,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: El,
        rev: El,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: El,
        requiredFeatures: El,
        requiredFonts: El,
        requiredFormats: El,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: q,
        specularExponent: q,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: q,
        strikethroughThickness: q,
        string: null,
        stroke: null,
        strokeDashArray: El,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: q,
        strokeOpacity: q,
        strokeWidth: null,
        style: null,
        surfaceScale: q,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: El,
        tabIndex: q,
        tableValues: null,
        target: null,
        targetX: q,
        targetY: q,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: El,
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: q,
        underlineThickness: q,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: q,
        values: null,
        vAlphabetic: q,
        vMathematical: q,
        vectorEffect: null,
        vHanging: q,
        vIdeographic: q,
        version: null,
        vertAdvY: q,
        vertOriginX: q,
        vertOriginY: q,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: q,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: `svg`,
    transform: Nl
})
  , Ll = jl({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: `xlink`,
    transform(e, t) {
        return `xlink:` + t.slice(5).toLowerCase()
    }
})
  , Rl = jl({
    attributes: {
        xmlnsxlink: `xmlns:xlink`
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: `xmlns`,
    transform: Pl
})
  , zl = jl({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: `xml`,
    transform(e, t) {
        return `xml:` + t.slice(3).toLowerCase()
    }
})
  , Bl = /[A-Z]/g
  , Vl = /-[a-z]/g
  , Hl = /^data[-\w.:]+$/i;
function Ul(e, t) {
    let n = bl(t)
      , r = t
      , i = xl;
    if (n in e.normal)
        return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === `data` && Hl.test(t)) {
        if (t.charAt(4) === `-`) {
            let e = t.slice(5).replace(Vl, Gl);
            r = `data` + e.charAt(0).toUpperCase() + e.slice(1)
        } else {
            let e = t.slice(4);
            if (!Vl.test(e)) {
                let n = e.replace(Bl, Wl);
                n.charAt(0) !== `-` && (n = `-` + n),
                t = `data` + n
            }
        }
        i = kl
    }
    return new i(r,t)
}
function Wl(e) {
    return `-` + e.toLowerCase()
}
function Gl(e) {
    return e.charAt(1).toUpperCase()
}
var Kl = yl([Ml, Fl, Ll, Rl, zl], `html`)
  , ql = yl([Ml, Il, Ll, Rl, zl], `svg`)
  , Jl = {}.hasOwnProperty;
function Yl(e, t) {
    let n = t || {};
    function r(t, ...n) {
        let i = r.invalid
          , a = r.handlers;
        if (t && Jl.call(t, e)) {
            let n = String(t[e]);
            i = Jl.call(a, n) ? a[n] : r.unknown
        }
        if (i)
            return i.call(this, t, ...n)
    }
    return r.handlers = n.handlers || {},
    r.invalid = n.invalid,
    r.unknown = n.unknown,
    r
}
var Xl = /["&'<>`]/g
  , Zl = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  , Ql = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
  , $l = /[|\\{}()[\]^$+*?.]/g
  , eu = new WeakMap;
function tu(e, t) {
    if (e = e.replace(t.subset ? nu(t.subset) : Xl, r),
    t.subset || t.escapeOnly)
        return e;
    return e.replace(Zl, n).replace(Ql, r);
    function n(e, n, r) {
        return t.format((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536, r.charCodeAt(n + 2), t)
    }
    function r(e, n, r) {
        return t.format(e.charCodeAt(0), r.charCodeAt(n + 1), t)
    }
}
function nu(e) {
    let t = eu.get(e);
    return t || (t = ru(e),
    eu.set(e, t)),
    t
}
function ru(e) {
    let t = []
      , n = -1;
    for (; ++n < e.length; )
        t.push(e[n].replace($l, `\\$&`));
    return RegExp(`(?:` + t.join(`|`) + `)`, `g`)
}
var iu = /[\dA-Fa-f]/;
function au(e, t, n) {
    let r = `&#x` + e.toString(16).toUpperCase();
    return n && t && !iu.test(String.fromCharCode(t)) ? r : r + `;`
}
var ou = /\d/;
function su(e, t, n) {
    let r = `&#` + String(e);
    return n && t && !ou.test(String.fromCharCode(t)) ? r : r + `;`
}
var cu = `AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml`.split(`.`), lu = {
    nbsp: `\xA0`,
    iexcl: `¡`,
    cent: `¢`,
    pound: `£`,
    curren: `¤`,
    yen: `¥`,
    brvbar: `¦`,
    sect: `§`,
    uml: `¨`,
    copy: `©`,
    ordf: `ª`,
    laquo: `«`,
    not: `¬`,
    shy: `­`,
    reg: `®`,
    macr: `¯`,
    deg: `°`,
    plusmn: `±`,
    sup2: `²`,
    sup3: `³`,
    acute: `´`,
    micro: `µ`,
    para: `¶`,
    middot: `·`,
    cedil: `¸`,
    sup1: `¹`,
    ordm: `º`,
    raquo: `»`,
    frac14: `¼`,
    frac12: `½`,
    frac34: `¾`,
    iquest: `¿`,
    Agrave: `À`,
    Aacute: `Á`,
    Acirc: `Â`,
    Atilde: `Ã`,
    Auml: `Ä`,
    Aring: `Å`,
    AElig: `Æ`,
    Ccedil: `Ç`,
    Egrave: `È`,
    Eacute: `É`,
    Ecirc: `Ê`,
    Euml: `Ë`,
    Igrave: `Ì`,
    Iacute: `Í`,
    Icirc: `Î`,
    Iuml: `Ï`,
    ETH: `Ð`,
    Ntilde: `Ñ`,
    Ograve: `Ò`,
    Oacute: `Ó`,
    Ocirc: `Ô`,
    Otilde: `Õ`,
    Ouml: `Ö`,
    times: `×`,
    Oslash: `Ø`,
    Ugrave: `Ù`,
    Uacute: `Ú`,
    Ucirc: `Û`,
    Uuml: `Ü`,
    Yacute: `Ý`,
    THORN: `Þ`,
    szlig: `ß`,
    agrave: `à`,
    aacute: `á`,
    acirc: `â`,
    atilde: `ã`,
    auml: `ä`,
    aring: `å`,
    aelig: `æ`,
    ccedil: `ç`,
    egrave: `è`,
    eacute: `é`,
    ecirc: `ê`,
    euml: `ë`,
    igrave: `ì`,
    iacute: `í`,
    icirc: `î`,
    iuml: `ï`,
    eth: `ð`,
    ntilde: `ñ`,
    ograve: `ò`,
    oacute: `ó`,
    ocirc: `ô`,
    otilde: `õ`,
    ouml: `ö`,
    divide: `÷`,
    oslash: `ø`,
    ugrave: `ù`,
    uacute: `ú`,
    ucirc: `û`,
    uuml: `ü`,
    yacute: `ý`,
    thorn: `þ`,
    yuml: `ÿ`,
    fnof: `ƒ`,
    Alpha: `Α`,
    Beta: `Β`,
    Gamma: `Γ`,
    Delta: `Δ`,
    Epsilon: `Ε`,
    Zeta: `Ζ`,
    Eta: `Η`,
    Theta: `Θ`,
    Iota: `Ι`,
    Kappa: `Κ`,
    Lambda: `Λ`,
    Mu: `Μ`,
    Nu: `Ν`,
    Xi: `Ξ`,
    Omicron: `Ο`,
    Pi: `Π`,
    Rho: `Ρ`,
    Sigma: `Σ`,
    Tau: `Τ`,
    Upsilon: `Υ`,
    Phi: `Φ`,
    Chi: `Χ`,
    Psi: `Ψ`,
    Omega: `Ω`,
    alpha: `α`,
    beta: `β`,
    gamma: `γ`,
    delta: `δ`,
    epsilon: `ε`,
    zeta: `ζ`,
    eta: `η`,
    theta: `θ`,
    iota: `ι`,
    kappa: `κ`,
    lambda: `λ`,
    mu: `μ`,
    nu: `ν`,
    xi: `ξ`,
    omicron: `ο`,
    pi: `π`,
    rho: `ρ`,
    sigmaf: `ς`,
    sigma: `σ`,
    tau: `τ`,
    upsilon: `υ`,
    phi: `φ`,
    chi: `χ`,
    psi: `ψ`,
    omega: `ω`,
    thetasym: `ϑ`,
    upsih: `ϒ`,
    piv: `ϖ`,
    bull: `•`,
    hellip: `…`,
    prime: `′`,
    Prime: `″`,
    oline: `‾`,
    frasl: `⁄`,
    weierp: `℘`,
    image: `ℑ`,
    real: `ℜ`,
    trade: `™`,
    alefsym: `ℵ`,
    larr: `←`,
    uarr: `↑`,
    rarr: `→`,
    darr: `↓`,
    harr: `↔`,
    crarr: `↵`,
    lArr: `⇐`,
    uArr: `⇑`,
    rArr: `⇒`,
    dArr: `⇓`,
    hArr: `⇔`,
    forall: `∀`,
    part: `∂`,
    exist: `∃`,
    empty: `∅`,
    nabla: `∇`,
    isin: `∈`,
    notin: `∉`,
    ni: `∋`,
    prod: `∏`,
    sum: `∑`,
    minus: `−`,
    lowast: `∗`,
    radic: `√`,
    prop: `∝`,
    infin: `∞`,
    ang: `∠`,
    and: `∧`,
    or: `∨`,
    cap: `∩`,
    cup: `∪`,
    int: `∫`,
    there4: `∴`,
    sim: `∼`,
    cong: `≅`,
    asymp: `≈`,
    ne: `≠`,
    equiv: `≡`,
    le: `≤`,
    ge: `≥`,
    sub: `⊂`,
    sup: `⊃`,
    nsub: `⊄`,
    sube: `⊆`,
    supe: `⊇`,
    oplus: `⊕`,
    otimes: `⊗`,
    perp: `⊥`,
    sdot: `⋅`,
    lceil: `⌈`,
    rceil: `⌉`,
    lfloor: `⌊`,
    rfloor: `⌋`,
    lang: `〈`,
    rang: `〉`,
    loz: `◊`,
    spades: `♠`,
    clubs: `♣`,
    hearts: `♥`,
    diams: `♦`,
    quot: `"`,
    amp: `&`,
    lt: `<`,
    gt: `>`,
    OElig: `Œ`,
    oelig: `œ`,
    Scaron: `Š`,
    scaron: `š`,
    Yuml: `Ÿ`,
    circ: `ˆ`,
    tilde: `˜`,
    ensp: ` `,
    emsp: ` `,
    thinsp: ` `,
    zwnj: `‌`,
    zwj: `‍`,
    lrm: `‎`,
    rlm: `‏`,
    ndash: `–`,
    mdash: `—`,
    lsquo: `‘`,
    rsquo: `’`,
    sbquo: `‚`,
    ldquo: `“`,
    rdquo: `”`,
    bdquo: `„`,
    dagger: `†`,
    Dagger: `‡`,
    permil: `‰`,
    lsaquo: `‹`,
    rsaquo: `›`,
    euro: `€`
}, uu = [`cent`, `copy`, `divide`, `gt`, `lt`, `not`, `para`, `times`], du = {}.hasOwnProperty, fu = {}, pu;
for (pu in lu)
    du.call(lu, pu) && (fu[lu[pu]] = pu);
var mu = /[^\dA-Za-z]/;
function hu(e, t, n, r) {
    let i = String.fromCharCode(e);
    if (du.call(fu, i)) {
        let e = fu[i]
          , a = `&` + e;
        return n && cu.includes(e) && !uu.includes(e) && (!r || t && t !== 61 && mu.test(String.fromCharCode(t))) ? a : a + `;`
    }
    return ``
}
function gu(e, t, n) {
    let r = au(e, t, n.omitOptionalSemicolons), i;
    if ((n.useNamedReferences || n.useShortestReferences) && (i = hu(e, t, n.omitOptionalSemicolons, n.attribute)),
    (n.useShortestReferences || !i) && n.useShortestReferences) {
        let i = su(e, t, n.omitOptionalSemicolons);
        i.length < r.length && (r = i)
    }
    return i && (!n.useShortestReferences || i.length < r.length) ? i : r
}
function _u(e, t) {
    return tu(e, Object.assign({
        format: gu
    }, t))
}
var vu = /^>|^->|<!--|-->|--!>|<!-$/g
  , yu = [`>`]
  , bu = [`<`, `>`];
function xu(e, t, n, r) {
    return r.settings.bogusComments ? `<?` + _u(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: yu
    })) + `>` : `<!--` + e.value.replace(vu, i) + `-->`;
    function i(e) {
        return _u(e, Object.assign({}, r.settings.characterReferences, {
            subset: bu
        }))
    }
}
function Su(e, t, n, r) {
    return `<!` + (r.settings.upperDoctype ? `DOCTYPE` : `doctype`) + (r.settings.tightDoctype ? `` : ` `) + `html>`
}
function Cu(e, t) {
    let n = String(e);
    if (typeof t != `string`)
        throw TypeError(`Expected character`);
    let r = 0
      , i = n.indexOf(t);
    for (; i !== -1; )
        r++,
        i = n.indexOf(t, i + t.length);
    return r
}
function wu(e, t) {
    let n = t || {};
    return (e[e.length - 1] === `` ? [...e, ``] : e).join((n.padRight ? ` ` : ``) + `,` + (n.padLeft === !1 ? `` : ` `)).trim()
}
function Tu(e) {
    return e.join(` `).trim()
}
var Eu = /[ \t\n\f\r]/g;
function Du(e) {
    return typeof e == `object` ? e.type === `text` ? Ou(e.value) : !1 : Ou(e)
}
function Ou(e) {
    return e.replace(Eu, ``) === ``
}
var Y = ju(1)
  , ku = ju(-1)
  , Au = [];
function ju(e) {
    return t;
    function t(t, n, r) {
        let i = t ? t.children : Au
          , a = (n || 0) + e
          , o = i[a];
        if (!r)
            for (; o && Du(o); )
                a += e,
                o = i[a];
        return o
    }
}
var Mu = {}.hasOwnProperty;
function Nu(e) {
    return t;
    function t(t, n, r) {
        return Mu.call(e, t.tagName) && e[t.tagName](t, n, r)
    }
}
var Pu = Nu({
    body: Lu,
    caption: Fu,
    colgroup: Fu,
    dd: Vu,
    dt: Bu,
    head: Fu,
    html: Iu,
    li: zu,
    optgroup: Uu,
    option: Wu,
    p: Ru,
    rp: Hu,
    rt: Hu,
    tbody: Ku,
    td: Yu,
    tfoot: qu,
    th: Yu,
    thead: Gu,
    tr: Ju
});
function Fu(e, t, n) {
    let r = Y(n, t, !0);
    return !r || r.type !== `comment` && !(r.type === `text` && Du(r.value.charAt(0)))
}
function Iu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type !== `comment`
}
function Lu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type !== `comment`
}
function Ru(e, t, n) {
    let r = Y(n, t);
    return r ? r.type === `element` && (r.tagName === `address` || r.tagName === `article` || r.tagName === `aside` || r.tagName === `blockquote` || r.tagName === `details` || r.tagName === `div` || r.tagName === `dl` || r.tagName === `fieldset` || r.tagName === `figcaption` || r.tagName === `figure` || r.tagName === `footer` || r.tagName === `form` || r.tagName === `h1` || r.tagName === `h2` || r.tagName === `h3` || r.tagName === `h4` || r.tagName === `h5` || r.tagName === `h6` || r.tagName === `header` || r.tagName === `hgroup` || r.tagName === `hr` || r.tagName === `main` || r.tagName === `menu` || r.tagName === `nav` || r.tagName === `ol` || r.tagName === `p` || r.tagName === `pre` || r.tagName === `section` || r.tagName === `table` || r.tagName === `ul`) : !n || !(n.type === `element` && (n.tagName === `a` || n.tagName === `audio` || n.tagName === `del` || n.tagName === `ins` || n.tagName === `map` || n.tagName === `noscript` || n.tagName === `video`))
}
function zu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && r.tagName === `li`
}
function Bu(e, t, n) {
    let r = Y(n, t);
    return !!(r && r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`))
}
function Vu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`)
}
function Hu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && (r.tagName === `rp` || r.tagName === `rt`)
}
function Uu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && r.tagName === `optgroup`
}
function Wu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && (r.tagName === `option` || r.tagName === `optgroup`)
}
function Gu(e, t, n) {
    let r = Y(n, t);
    return !!(r && r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`))
}
function Ku(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`)
}
function qu(e, t, n) {
    return !Y(n, t)
}
function Ju(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && r.tagName === `tr`
}
function Yu(e, t, n) {
    let r = Y(n, t);
    return !r || r.type === `element` && (r.tagName === `td` || r.tagName === `th`)
}
var Xu = Nu({
    body: $u,
    colgroup: ed,
    head: Qu,
    html: Zu,
    tbody: td
});
function Zu(e) {
    let t = Y(e, -1);
    return !t || t.type !== `comment`
}
function Qu(e) {
    let t = new Set;
    for (let n of e.children)
        if (n.type === `element` && (n.tagName === `base` || n.tagName === `title`)) {
            if (t.has(n.tagName))
                return !1;
            t.add(n.tagName)
        }
    let n = e.children[0];
    return !n || n.type === `element`
}
function $u(e) {
    let t = Y(e, -1, !0);
    return !t || t.type !== `comment` && !(t.type === `text` && Du(t.value.charAt(0))) && !(t.type === `element` && (t.tagName === `meta` || t.tagName === `link` || t.tagName === `script` || t.tagName === `style` || t.tagName === `template`))
}
function ed(e, t, n) {
    let r = ku(n, t)
      , i = Y(e, -1, !0);
    return n && r && r.type === `element` && r.tagName === `colgroup` && Pu(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `col`)
}
function td(e, t, n) {
    let r = ku(n, t)
      , i = Y(e, -1);
    return n && r && r.type === `element` && (r.tagName === `thead` || r.tagName === `tbody`) && Pu(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `tr`)
}
var nd = {
    name: [[`	
\f\r &/=>`.split(``), `	
\f\r "&'/=>\``.split(``)], [`\0	
\f\r "&'/<=>`.split(``), `\0	
\f\r "&'/<=>\``.split(``)]],
    unquoted: [[`	
\f\r &>`.split(``), `\0	
\f\r "&'<=>\``.split(``)], [`\0	
\f\r "&'<=>\``.split(``), `\0	
\f\r "&'<=>\``.split(``)]],
    single: [[`&'`.split(``), `"&'\``.split(``)], [`\0&'`.split(``), `\0"&'\``.split(``)]],
    double: [[`"&`.split(``), `"&'\``.split(``)], [`\0"&`.split(``), `\0"&'\``.split(``)]]
};
function rd(e, t, n, r) {
    let i = r.schema, a = i.space === `svg` ? !1 : r.settings.omitOptionalTags, o = i.space === `svg` ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase()), s = [], c;
    i.space === `html` && e.tagName === `svg` && (r.schema = ql);
    let l = id(r, e.properties)
      , u = r.all(i.space === `html` && e.tagName === `template` ? e.content : e);
    return r.schema = i,
    u && (o = !1),
    (l || !a || !Xu(e, t, n)) && (s.push(`<`, e.tagName, l ? ` ` + l : ``),
    o && (i.space === `svg` || r.settings.closeSelfClosing) && (c = l.charAt(l.length - 1),
    (!r.settings.tightSelfClosing || c === `/` || c && c !== `"` && c !== `'`) && s.push(` `),
    s.push(`/`)),
    s.push(`>`)),
    s.push(u),
    !o && (!a || !Pu(e, t, n)) && s.push(`</` + e.tagName + `>`),
    s.join(``)
}
function id(e, t) {
    let n = [], r = -1, i;
    if (t) {
        for (i in t)
            if (t[i] !== null && t[i] !== void 0) {
                let r = ad(e, i, t[i]);
                r && n.push(r)
            }
    }
    for (; ++r < n.length; ) {
        let t = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
        r !== n.length - 1 && t !== `"` && t !== `'` && (n[r] += ` `)
    }
    return n.join(``)
}
function ad(e, t, n) {
    let r = Ul(e.schema, t), i = e.settings.allowParseErrors && e.schema.space === `html` ? 0 : 1, a = e.settings.allowDangerousCharacters ? 0 : 1, o = e.quote, s;
    if (r.overloadedBoolean && (n === r.attribute || n === ``) ? n = !0 : (r.boolean || r.overloadedBoolean) && (typeof n != `string` || n === r.attribute || n === ``) && (n = !!n),
    n == null || n === !1 || typeof n == `number` && Number.isNaN(n))
        return ``;
    let c = _u(r.attribute, Object.assign({}, e.settings.characterReferences, {
        subset: nd.name[i][a]
    }));
    return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? wu : Tu)(n, {
        padLeft: !e.settings.tightCommaSeparatedLists
    }) : String(n),
    e.settings.collapseEmptyAttributes && !n) ? c : (e.settings.preferUnquoted && (s = _u(n, Object.assign({}, e.settings.characterReferences, {
        attribute: !0,
        subset: nd.unquoted[i][a]
    }))),
    s !== n && (e.settings.quoteSmart && Cu(n, o) > Cu(n, e.alternative) && (o = e.alternative),
    s = o + _u(n, Object.assign({}, e.settings.characterReferences, {
        subset: (o === `'` ? nd.single : nd.double)[i][a],
        attribute: !0
    })) + o),
    c + (s && `=` + s))
}
var od = [`<`, `&`];
function sd(e, t, n, r) {
    return n && n.type === `element` && (n.tagName === `script` || n.tagName === `style`) ? e.value : _u(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: od
    }))
}
function cd(e, t, n, r) {
    return r.settings.allowDangerousHtml ? e.value : sd(e, t, n, r)
}
function ld(e, t, n, r) {
    return r.all(e)
}
var ud = Yl(`type`, {
    invalid: dd,
    unknown: fd,
    handlers: {
        comment: xu,
        doctype: Su,
        element: rd,
        raw: cd,
        root: ld,
        text: sd
    }
});
function dd(e) {
    throw Error("Expected node, not `" + e + "`")
}
function fd(e) {
    throw Error("Cannot compile unknown node `" + e.type + "`")
}
var pd = {}
  , md = {}
  , hd = [];
function gd(e, t) {
    let n = t || pd
      , r = n.quote || `"`
      , i = r === `"` ? `'` : `"`;
    if (r !== `"` && r !== `'`)
        throw Error("Invalid quote `" + r + "`, expected `'` or `\"`");
    return {
        one: _d,
        all: vd,
        settings: {
            omitOptionalTags: n.omitOptionalTags || !1,
            allowParseErrors: n.allowParseErrors || !1,
            allowDangerousCharacters: n.allowDangerousCharacters || !1,
            quoteSmart: n.quoteSmart || !1,
            preferUnquoted: n.preferUnquoted || !1,
            tightAttributes: n.tightAttributes || !1,
            upperDoctype: n.upperDoctype || !1,
            tightDoctype: n.tightDoctype || !1,
            bogusComments: n.bogusComments || !1,
            tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
            tightSelfClosing: n.tightSelfClosing || !1,
            collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
            allowDangerousHtml: n.allowDangerousHtml || !1,
            voids: n.voids || _l,
            characterReferences: n.characterReferences || md,
            closeSelfClosing: n.closeSelfClosing || !1,
            closeEmptyElements: n.closeEmptyElements || !1
        },
        schema: n.space === `svg` ? ql : Kl,
        quote: r,
        alternative: i
    }.one(Array.isArray(e) ? {
        type: `root`,
        children: e
    } : e, void 0, void 0)
}
function _d(e, t, n) {
    return ud(e, t, n, this)
}
function vd(e) {
    let t = []
      , n = e && e.children || hd
      , r = -1;
    for (; ++r < n.length; )
        t[r] = this.one(n[r], r, e);
    return t.join(``)
}
function yd(e) {
    let t = this
      , n = {
        ...t.data(`settings`),
        ...e
    };
    t.compiler = r;
    function r(e) {
        return gd(e, n)
    }
}
var bd = kd(/[A-Za-z]/)
  , xd = kd(/[\dA-Za-z]/)
  , Sd = kd(/[#-'*+\--9=?A-Z^-~]/);
function Cd(e) {
    return e !== null && (e < 32 || e === 127)
}
var wd = kd(/\d/)
  , Td = kd(/[\dA-Fa-f]/)
  , Ed = kd(/[!-/:-@[-`{-~]/);
function X(e) {
    return e !== null && e < -2
}
function Z(e) {
    return e !== null && (e < 0 || e === 32)
}
function Q(e) {
    return e === -2 || e === -1 || e === 32
}
var Dd = kd(/\p{P}|\p{S}/u)
  , Od = kd(/\s/);
function kd(e) {
    return t;
    function t(t) {
        return t !== null && t > -1 && e.test(String.fromCharCode(t))
    }
}
function Ad(e) {
    if (typeof e != `string`)
        throw TypeError(`Expected a string`);
    return e.replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`).replace(/-/g, `\\x2d`)
}
var jd = (function(e) {
    if (e == null)
        return Id;
    if (typeof e == `function`)
        return Fd(e);
    if (typeof e == `object`)
        return Array.isArray(e) ? Md(e) : Nd(e);
    if (typeof e == `string`)
        return Pd(e);
    throw Error(`Expected function, string, or object as test`)
}
);
function Md(e) {
    let t = []
      , n = -1;
    for (; ++n < e.length; )
        t[n] = jd(e[n]);
    return Fd(r);
    function r(...e) {
        let n = -1;
        for (; ++n < t.length; )
            if (t[n].apply(this, e))
                return !0;
        return !1
    }
}
function Nd(e) {
    let t = e;
    return Fd(n);
    function n(n) {
        let r = n, i;
        for (i in e)
            if (r[i] !== t[i])
                return !1;
        return !0
    }
}
function Pd(e) {
    return Fd(t);
    function t(t) {
        return t && t.type === e
    }
}
function Fd(e) {
    return t;
    function t(t, n, r) {
        return !!(Ld(t) && e.call(this, t, typeof n == `number` ? n : void 0, r || void 0))
    }
}
function Id() {
    return !0
}
function Ld(e) {
    return typeof e == `object` && !!e && `type`in e
}
function Rd(e) {
    return e
}
var zd = [];
function Bd(e, t, n, r) {
    let i;
    typeof t == `function` && typeof n != `function` ? (r = n,
    n = t) : i = t;
    let a = jd(i)
      , o = r ? -1 : 1;
    s(e, void 0, [])();
    function s(e, i, c) {
        let l = e && typeof e == `object` ? e : {};
        if (typeof l.type == `string`) {
            let t = typeof l.tagName == `string` ? l.tagName : typeof l.name == `string` ? l.name : void 0;
            Object.defineProperty(u, `name`, {
                value: `node (` + Rd(e.type + (t ? `<` + t + `>` : ``)) + `)`
            })
        }
        return u;
        function u() {
            let l = zd, u, d, f;
            if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Vd(n(e, c)),
            l[0] === !1))
                return l;
            if (`children`in e && e.children) {
                let t = e;
                if (t.children && l[0] !== `skip`)
                    for (d = (r ? t.children.length : -1) + o,
                    f = c.concat(t); d > -1 && d < t.children.length; ) {
                        let e = t.children[d];
                        if (u = s(e, d, f)(),
                        u[0] === !1)
                            return u;
                        d = typeof u[1] == `number` ? u[1] : d + o
                    }
            }
            return l
        }
    }
}
function Vd(e) {
    return Array.isArray(e) ? e : typeof e == `number` ? [!0, e] : e == null ? zd : [e]
}
function Hd(e, t, n) {
    let r = jd((n || {}).ignore || [])
      , i = Ud(t)
      , a = -1;
    for (; ++a < i.length; )
        Bd(e, `text`, o);
    function o(e, t) {
        let n = -1, i;
        for (; ++n < t.length; ) {
            let e = t[n]
              , a = i ? i.children : void 0;
            if (r(e, a ? a.indexOf(e) : void 0, i))
                return;
            i = e
        }
        if (i)
            return s(e, t)
    }
    function s(e, t) {
        let n = t[t.length - 1]
          , r = i[a][0]
          , o = i[a][1]
          , s = 0
          , c = n.children.indexOf(e)
          , l = !1
          , u = [];
        r.lastIndex = 0;
        let d = r.exec(e.value);
        for (; d; ) {
            let n = d.index
              , i = {
                index: d.index,
                input: d.input,
                stack: [...t, e]
            }
              , a = o(...d, i);
            if (typeof a == `string` && (a = a.length > 0 ? {
                type: `text`,
                value: a
            } : void 0),
            a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
                type: `text`,
                value: e.value.slice(s, n)
            }),
            Array.isArray(a) ? u.push(...a) : a && u.push(a),
            s = n + d[0].length,
            l = !0),
            !r.global)
                break;
            d = r.exec(e.value)
        }
        return l ? (s < e.value.length && u.push({
            type: `text`,
            value: e.value.slice(s)
        }),
        n.children.splice(c, 1, ...u)) : u = [e],
        c + u.length
    }
}
function Ud(e) {
    let t = [];
    if (!Array.isArray(e))
        throw TypeError(`Expected find and replace tuple or list of tuples`);
    let n = !e[0] || Array.isArray(e[0]) ? e : [e]
      , r = -1;
    for (; ++r < n.length; ) {
        let e = n[r];
        t.push([Wd(e[0]), Gd(e[1])])
    }
    return t
}
function Wd(e) {
    return typeof e == `string` ? new RegExp(Ad(e),`g`) : e
}
function Gd(e) {
    return typeof e == `function` ? e : function() {
        return e
    }
}
var Kd = `phrasing`
  , qd = [`autolink`, `link`, `image`, `label`];
function Jd() {
    return {
        transforms: [nf],
        enter: {
            literalAutolink: Xd,
            literalAutolinkEmail: Zd,
            literalAutolinkHttp: Zd,
            literalAutolinkWww: Zd
        },
        exit: {
            literalAutolink: tf,
            literalAutolinkEmail: ef,
            literalAutolinkHttp: Qd,
            literalAutolinkWww: $d
        }
    }
}
function Yd() {
    return {
        unsafe: [{
            character: `@`,
            before: `[+\\-.\\w]`,
            after: `[\\-.\\w]`,
            inConstruct: Kd,
            notInConstruct: qd
        }, {
            character: `.`,
            before: `[Ww]`,
            after: `[\\-.\\w]`,
            inConstruct: Kd,
            notInConstruct: qd
        }, {
            character: `:`,
            before: `[ps]`,
            after: `\\/`,
            inConstruct: Kd,
            notInConstruct: qd
        }]
    }
}
function Xd(e) {
    this.enter({
        type: `link`,
        title: null,
        url: ``,
        children: []
    }, e)
}
function Zd(e) {
    this.config.enter.autolinkProtocol.call(this, e)
}
function Qd(e) {
    this.config.exit.autolinkProtocol.call(this, e)
}
function $d(e) {
    this.config.exit.data.call(this, e);
    let t = this.stack[this.stack.length - 1];
    t.type,
    t.url = `http://` + this.sliceSerialize(e)
}
function ef(e) {
    this.config.exit.autolinkEmail.call(this, e)
}
function tf(e) {
    this.exit(e)
}
function nf(e) {
    Hd(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rf], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, af]], {
        ignore: [`link`, `linkReference`]
    })
}
function rf(e, t, n, r, i) {
    let a = ``;
    if (!cf(i) || (/^w/i.test(t) && (n = t + n,
    t = ``,
    a = `http://`),
    !of(n)))
        return !1;
    let o = sf(n + r);
    if (!o[0])
        return !1;
    let s = {
        type: `link`,
        title: null,
        url: a + t + o[0],
        children: [{
            type: `text`,
            value: t + o[0]
        }]
    };
    return o[1] ? [s, {
        type: `text`,
        value: o[1]
    }] : s
}
function af(e, t, n, r) {
    return !cf(r, !0) || /[-\d_]$/.test(n) ? !1 : {
        type: `link`,
        title: null,
        url: `mailto:` + t + `@` + n,
        children: [{
            type: `text`,
            value: t + `@` + n
        }]
    }
}
function of(e) {
    let t = e.split(`.`);
    return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
}
function sf(e) {
    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!t)
        return [e, void 0];
    e = e.slice(0, t.index);
    let n = t[0]
      , r = n.indexOf(`)`)
      , i = Cu(e, `(`)
      , a = Cu(e, `)`);
    for (; r !== -1 && i > a; )
        e += n.slice(0, r + 1),
        n = n.slice(r + 1),
        r = n.indexOf(`)`),
        a++;
    return [e, n]
}
function cf(e, t) {
    let n = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || Od(n) || Dd(n)) && (!t || n !== 47)
}
function lf(e) {
    return e.replace(/[\t\n\r ]+/g, ` `).replace(/^ | $/g, ``).toLowerCase().toUpperCase()
}
yf.peek = vf;
function uf() {
    this.buffer()
}
function df(e) {
    this.enter({
        type: `footnoteReference`,
        identifier: ``,
        label: ``
    }, e)
}
function ff() {
    this.buffer()
}
function pf(e) {
    this.enter({
        type: `footnoteDefinition`,
        identifier: ``,
        label: ``,
        children: []
    }, e)
}
function mf(e) {
    let t = this.resume()
      , n = this.stack[this.stack.length - 1];
    n.type,
    n.identifier = lf(this.sliceSerialize(e)).toLowerCase(),
    n.label = t
}
function hf(e) {
    this.exit(e)
}
function gf(e) {
    let t = this.resume()
      , n = this.stack[this.stack.length - 1];
    n.type,
    n.identifier = lf(this.sliceSerialize(e)).toLowerCase(),
    n.label = t
}
function _f(e) {
    this.exit(e)
}
function vf() {
    return `[`
}
function yf(e, t, n, r) {
    let i = n.createTracker(r)
      , a = i.move(`[^`)
      , o = n.enter(`footnoteReference`)
      , s = n.enter(`reference`);
    return a += i.move(n.safe(n.associationId(e), {
        after: `]`,
        before: a
    })),
    s(),
    o(),
    a += i.move(`]`),
    a
}
function bf() {
    return {
        enter: {
            gfmFootnoteCallString: uf,
            gfmFootnoteCall: df,
            gfmFootnoteDefinitionLabelString: ff,
            gfmFootnoteDefinition: pf
        },
        exit: {
            gfmFootnoteCallString: mf,
            gfmFootnoteCall: hf,
            gfmFootnoteDefinitionLabelString: gf,
            gfmFootnoteDefinition: _f
        }
    }
}
function xf(e) {
    let t = !1;
    return e && e.firstLineBlank && (t = !0),
    {
        handlers: {
            footnoteDefinition: n,
            footnoteReference: yf
        },
        unsafe: [{
            character: `[`,
            inConstruct: [`label`, `phrasing`, `reference`]
        }]
    };
    function n(e, n, r, i) {
        let a = r.createTracker(i)
          , o = a.move(`[^`)
          , s = r.enter(`footnoteDefinition`)
          , c = r.enter(`label`);
        return o += a.move(r.safe(r.associationId(e), {
            before: o,
            after: `]`
        })),
        c(),
        o += a.move(`]:`),
        e.children && e.children.length > 0 && (a.shift(4),
        o += a.move((t ? `
` : ` `) + r.indentLines(r.containerFlow(e, a.current()), t ? Cf : Sf))),
        s(),
        o
    }
}
function Sf(e, t, n) {
    return t === 0 ? e : Cf(e, t, n)
}
function Cf(e, t, n) {
    return (n ? `` : `    `) + e
}
var wf = [`autolink`, `destinationLiteral`, `destinationRaw`, `reference`, `titleQuote`, `titleApostrophe`];
kf.peek = Af;
function Tf() {
    return {
        canContainEols: [`delete`],
        enter: {
            strikethrough: Df
        },
        exit: {
            strikethrough: Of
        }
    }
}
function Ef() {
    return {
        unsafe: [{
            character: `~`,
            inConstruct: `phrasing`,
            notInConstruct: wf
        }],
        handlers: {
            delete: kf
        }
    }
}
function Df(e) {
    this.enter({
        type: `delete`,
        children: []
    }, e)
}
function Of(e) {
    this.exit(e)
}
function kf(e, t, n, r) {
    let i = n.createTracker(r)
      , a = n.enter(`strikethrough`)
      , o = i.move(`~~`);
    return o += n.containerPhrasing(e, {
        ...i.current(),
        before: o,
        after: `~`
    }),
    o += i.move(`~~`),
    a(),
    o
}
function Af() {
    return `~`
}
function jf(e) {
    return e.length
}
function Mf(e, t) {
    let n = t || {}
      , r = (n.align || []).concat()
      , i = n.stringLength || jf
      , a = []
      , o = []
      , s = []
      , c = []
      , l = 0
      , u = -1;
    for (; ++u < e.length; ) {
        let t = []
          , r = []
          , a = -1;
        for (e[u].length > l && (l = e[u].length); ++a < e[u].length; ) {
            let o = Nf(e[u][a]);
            if (n.alignDelimiters !== !1) {
                let e = i(o);
                r[a] = e,
                (c[a] === void 0 || e > c[a]) && (c[a] = e)
            }
            t.push(o)
        }
        o[u] = t,
        s[u] = r
    }
    let d = -1;
    if (typeof r == `object` && `length`in r)
        for (; ++d < l; )
            a[d] = Pf(r[d]);
    else {
        let e = Pf(r);
        for (; ++d < l; )
            a[d] = e
    }
    d = -1;
    let f = []
      , p = [];
    for (; ++d < l; ) {
        let e = a[d]
          , t = ``
          , r = ``;
        e === 99 ? (t = `:`,
        r = `:`) : e === 108 ? t = `:` : e === 114 && (r = `:`);
        let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length)
          , o = t + `-`.repeat(i) + r;
        n.alignDelimiters !== !1 && (i = t.length + i + r.length,
        i > c[d] && (c[d] = i),
        p[d] = i),
        f[d] = o
    }
    o.splice(1, 0, f),
    s.splice(1, 0, p),
    u = -1;
    let m = [];
    for (; ++u < o.length; ) {
        let e = o[u]
          , t = s[u];
        d = -1;
        let r = [];
        for (; ++d < l; ) {
            let i = e[d] || ``
              , o = ``
              , s = ``;
            if (n.alignDelimiters !== !1) {
                let e = c[d] - (t[d] || 0)
                  , n = a[d];
                n === 114 ? o = ` `.repeat(e) : n === 99 ? e % 2 ? (o = ` `.repeat(e / 2 + .5),
                s = ` `.repeat(e / 2 - .5)) : (o = ` `.repeat(e / 2),
                s = o) : s = ` `.repeat(e)
            }
            n.delimiterStart !== !1 && !d && r.push(`|`),
            n.padding !== !1 && !(n.alignDelimiters === !1 && i === ``) && (n.delimiterStart !== !1 || d) && r.push(` `),
            n.alignDelimiters !== !1 && r.push(o),
            r.push(i),
            n.alignDelimiters !== !1 && r.push(s),
            n.padding !== !1 && r.push(` `),
            (n.delimiterEnd !== !1 || d !== l - 1) && r.push(`|`)
        }
        m.push(n.delimiterEnd === !1 ? r.join(``).replace(/ +$/, ``) : r.join(``))
    }
    return m.join(`
`)
}
function Nf(e) {
    return e == null ? `` : String(e)
}
function Pf(e) {
    let t = typeof e == `string` ? e.codePointAt(0) : 0;
    return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}
function Ff(e, t, n, r) {
    let i = n.enter(`blockquote`)
      , a = n.createTracker(r);
    a.move(`> `),
    a.shift(2);
    let o = n.indentLines(n.containerFlow(e, a.current()), If);
    return i(),
    o
}
function If(e, t, n) {
    return `>` + (n ? `` : ` `) + e
}
function Lf(e, t) {
    return Rf(e, t.inConstruct, !0) && !Rf(e, t.notInConstruct, !1)
}
function Rf(e, t, n) {
    if (typeof t == `string` && (t = [t]),
    !t || t.length === 0)
        return n;
    let r = -1;
    for (; ++r < t.length; )
        if (e.includes(t[r]))
            return !0;
    return !1
}
function zf(e, t, n, r) {
    let i = -1;
    for (; ++i < n.unsafe.length; )
        if (n.unsafe[i].character === `
` && Lf(n.stack, n.unsafe[i]))
            return /[ \t]/.test(r.before) ? `` : ` `;
    return `\\
`
}
function Bf(e, t) {
    let n = String(e)
      , r = n.indexOf(t)
      , i = r
      , a = 0
      , o = 0;
    if (typeof t != `string`)
        throw TypeError(`Expected substring`);
    for (; r !== -1; )
        r === i ? ++a > o && (o = a) : a = 1,
        i = r + t.length,
        r = n.indexOf(t, i);
    return o
}
function Vf(e, t) {
    return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))
}
function Hf(e) {
    let t = e.options.fence || "`";
    if (t !== "`" && t !== `~`)
        throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
    return t
}
function Uf(e, t, n, r) {
    let i = Hf(n)
      , a = e.value || ``
      , o = i === "`" ? `GraveAccent` : `Tilde`;
    if (Vf(e, n)) {
        let e = n.enter(`codeIndented`)
          , t = n.indentLines(a, Wf);
        return e(),
        t
    }
    let s = n.createTracker(r)
      , c = i.repeat(Math.max(Bf(a, i) + 1, 3))
      , l = n.enter(`codeFenced`)
      , u = s.move(c);
    if (e.lang) {
        let t = n.enter(`codeFencedLang${o}`);
        u += s.move(n.safe(e.lang, {
            before: u,
            after: ` `,
            encode: ["`"],
            ...s.current()
        })),
        t()
    }
    if (e.lang && e.meta) {
        let t = n.enter(`codeFencedMeta${o}`);
        u += s.move(` `),
        u += s.move(n.safe(e.meta, {
            before: u,
            after: `
`,
            encode: ["`"],
            ...s.current()
        })),
        t()
    }
    return u += s.move(`
`),
    a && (u += s.move(a + `
`)),
    u += s.move(c),
    l(),
    u
}
function Wf(e, t, n) {
    return (n ? `` : `    `) + e
}
function Gf(e) {
    let t = e.options.quote || `"`;
    if (t !== `"` && t !== `'`)
        throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
    return t
}
function Kf(e, t, n, r) {
    let i = Gf(n)
      , a = i === `"` ? `Quote` : `Apostrophe`
      , o = n.enter(`definition`)
      , s = n.enter(`label`)
      , c = n.createTracker(r)
      , l = c.move(`[`);
    return l += c.move(n.safe(n.associationId(e), {
        before: l,
        after: `]`,
        ...c.current()
    })),
    l += c.move(`]: `),
    s(),
    !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter(`destinationLiteral`),
    l += c.move(`<`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...c.current()
    })),
    l += c.move(`>`)) : (s = n.enter(`destinationRaw`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: e.title ? ` ` : `
`,
        ...c.current()
    }))),
    s(),
    e.title && (s = n.enter(`title${a}`),
    l += c.move(` ` + i),
    l += c.move(n.safe(e.title, {
        before: l,
        after: i,
        ...c.current()
    })),
    l += c.move(i),
    s()),
    o(),
    l
}
function qf(e) {
    let t = e.options.emphasis || `*`;
    if (t !== `*` && t !== `_`)
        throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
    return t
}
function Jf(e) {
    return `&#x` + e.toString(16).toUpperCase() + `;`
}
function Yf(e) {
    if (e === null || Z(e) || Od(e))
        return 1;
    if (Dd(e))
        return 2
}
function Xf(e, t, n) {
    let r = Yf(e)
      , i = Yf(t);
    return r === void 0 ? i === void 0 ? n === `_` ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !0
    } : r === 1 ? i === void 0 ? {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !0
    } : {
        inside: !1,
        outside: !1
    } : i === void 0 ? {
        inside: !1,
        outside: !1
    } : i === 1 ? {
        inside: !0,
        outside: !1
    } : {
        inside: !1,
        outside: !1
    }
}
Zf.peek = Qf;
function Zf(e, t, n, r) {
    let i = qf(n)
      , a = n.enter(`emphasis`)
      , o = n.createTracker(r)
      , s = o.move(i)
      , c = o.move(n.containerPhrasing(e, {
        after: i,
        before: s,
        ...o.current()
    }))
      , l = c.charCodeAt(0)
      , u = Xf(r.before.charCodeAt(r.before.length - 1), l, i);
    u.inside && (c = Jf(l) + c.slice(1));
    let d = c.charCodeAt(c.length - 1)
      , f = Xf(r.after.charCodeAt(0), d, i);
    f.inside && (c = c.slice(0, -1) + Jf(d));
    let p = o.move(i);
    return a(),
    n.attentionEncodeSurroundingInfo = {
        after: f.outside,
        before: u.outside
    },
    s + c + p
}
function Qf(e, t, n) {
    return n.options.emphasis || `*`
}
function $f(e, t, n, r) {
    let i, a, o;
    typeof t == `function` && typeof n != `function` ? (a = void 0,
    o = t,
    i = n) : (a = t,
    o = n,
    i = r),
    Bd(e, a, s, i);
    function s(e, t) {
        let n = t[t.length - 1]
          , r = n ? n.children.indexOf(e) : void 0;
        return o(e, r, n)
    }
}
var ep = {};
function tp(e, t) {
    let n = t || ep;
    return np(e, typeof n.includeImageAlt == `boolean` ? n.includeImageAlt : !0, typeof n.includeHtml == `boolean` ? n.includeHtml : !0)
}
function np(e, t, n) {
    if (ip(e)) {
        if (`value`in e)
            return e.type === `html` && !n ? `` : e.value;
        if (t && `alt`in e && e.alt)
            return e.alt;
        if (`children`in e)
            return rp(e.children, t, n)
    }
    return Array.isArray(e) ? rp(e, t, n) : ``
}
function rp(e, t, n) {
    let r = []
      , i = -1;
    for (; ++i < e.length; )
        r[i] = np(e[i], t, n);
    return r.join(``)
}
function ip(e) {
    return !!(e && typeof e == `object`)
}
function ap(e, t) {
    let n = !1;
    return $f(e, function(e) {
        if (`value`in e && /\r?\n|\r/.test(e.value) || e.type === `break`)
            return n = !0,
            !1
    }),
    !!((!e.depth || e.depth < 3) && tp(e) && (t.options.setext || n))
}
function op(e, t, n, r) {
    let i = Math.max(Math.min(6, e.depth || 1), 1)
      , a = n.createTracker(r);
    if (ap(e, n)) {
        let t = n.enter(`headingSetext`)
          , r = n.enter(`phrasing`)
          , o = n.containerPhrasing(e, {
            ...a.current(),
            before: `
`,
            after: `
`
        });
        return r(),
        t(),
        o + `
` + (i === 1 ? `=` : `-`).repeat(o.length - (Math.max(o.lastIndexOf(`\r`), o.lastIndexOf(`
`)) + 1))
    }
    let o = `#`.repeat(i)
      , s = n.enter(`headingAtx`)
      , c = n.enter(`phrasing`);
    a.move(o + ` `);
    let l = n.containerPhrasing(e, {
        before: `# `,
        after: `
`,
        ...a.current()
    });
    return /^[\t ]/.test(l) && (l = Jf(l.charCodeAt(0)) + l.slice(1)),
    l = l ? o + ` ` + l : o,
    n.options.closeAtx && (l += ` ` + o),
    c(),
    s(),
    l
}
sp.peek = cp;
function sp(e) {
    return e.value || ``
}
function cp() {
    return `<`
}
lp.peek = up;
function lp(e, t, n, r) {
    let i = Gf(n)
      , a = i === `"` ? `Quote` : `Apostrophe`
      , o = n.enter(`image`)
      , s = n.enter(`label`)
      , c = n.createTracker(r)
      , l = c.move(`![`);
    return l += c.move(n.safe(e.alt, {
        before: l,
        after: `]`,
        ...c.current()
    })),
    l += c.move(`](`),
    s(),
    !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter(`destinationLiteral`),
    l += c.move(`<`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...c.current()
    })),
    l += c.move(`>`)) : (s = n.enter(`destinationRaw`),
    l += c.move(n.safe(e.url, {
        before: l,
        after: e.title ? ` ` : `)`,
        ...c.current()
    }))),
    s(),
    e.title && (s = n.enter(`title${a}`),
    l += c.move(` ` + i),
    l += c.move(n.safe(e.title, {
        before: l,
        after: i,
        ...c.current()
    })),
    l += c.move(i),
    s()),
    l += c.move(`)`),
    o(),
    l
}
function up() {
    return `!`
}
dp.peek = fp;
function dp(e, t, n, r) {
    let i = e.referenceType
      , a = n.enter(`imageReference`)
      , o = n.enter(`label`)
      , s = n.createTracker(r)
      , c = s.move(`![`)
      , l = n.safe(e.alt, {
        before: c,
        after: `]`,
        ...s.current()
    });
    c += s.move(l + `][`),
    o();
    let u = n.stack;
    n.stack = [],
    o = n.enter(`reference`);
    let d = n.safe(n.associationId(e), {
        before: c,
        after: `]`,
        ...s.current()
    });
    return o(),
    n.stack = u,
    a(),
    i === `full` || !l || l !== d ? c += s.move(d + `]`) : i === `shortcut` ? c = c.slice(0, -1) : c += s.move(`]`),
    c
}
function fp() {
    return `!`
}
pp.peek = mp;
function pp(e, t, n) {
    let r = e.value || ``
      , i = "`"
      , a = -1;
    for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
        i += "`";
    for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = ` ` + r + ` `); ++a < n.unsafe.length; ) {
        let e = n.unsafe[a], t = n.compilePattern(e), i;
        if (e.atBreak)
            for (; i = t.exec(r); ) {
                let e = i.index;
                r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--,
                r = r.slice(0, e) + ` ` + r.slice(i.index + 1)
            }
    }
    return i + r + i
}
function mp() {
    return "`"
}
function hp(e, t) {
    let n = tp(e);
    return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === `text` && (n === e.url || `mailto:` + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url))
}
gp.peek = _p;
function gp(e, t, n, r) {
    let i = Gf(n), a = i === `"` ? `Quote` : `Apostrophe`, o = n.createTracker(r), s, c;
    if (hp(e, n)) {
        let t = n.stack;
        n.stack = [],
        s = n.enter(`autolink`);
        let r = o.move(`<`);
        return r += o.move(n.containerPhrasing(e, {
            before: r,
            after: `>`,
            ...o.current()
        })),
        r += o.move(`>`),
        s(),
        n.stack = t,
        r
    }
    s = n.enter(`link`),
    c = n.enter(`label`);
    let l = o.move(`[`);
    return l += o.move(n.containerPhrasing(e, {
        before: l,
        after: `](`,
        ...o.current()
    })),
    l += o.move(`](`),
    c(),
    !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter(`destinationLiteral`),
    l += o.move(`<`),
    l += o.move(n.safe(e.url, {
        before: l,
        after: `>`,
        ...o.current()
    })),
    l += o.move(`>`)) : (c = n.enter(`destinationRaw`),
    l += o.move(n.safe(e.url, {
        before: l,
        after: e.title ? ` ` : `)`,
        ...o.current()
    }))),
    c(),
    e.title && (c = n.enter(`title${a}`),
    l += o.move(` ` + i),
    l += o.move(n.safe(e.title, {
        before: l,
        after: i,
        ...o.current()
    })),
    l += o.move(i),
    c()),
    l += o.move(`)`),
    s(),
    l
}
function _p(e, t, n) {
    return hp(e, n) ? `<` : `[`
}
vp.peek = yp;
function vp(e, t, n, r) {
    let i = e.referenceType
      , a = n.enter(`linkReference`)
      , o = n.enter(`label`)
      , s = n.createTracker(r)
      , c = s.move(`[`)
      , l = n.containerPhrasing(e, {
        before: c,
        after: `]`,
        ...s.current()
    });
    c += s.move(l + `][`),
    o();
    let u = n.stack;
    n.stack = [],
    o = n.enter(`reference`);
    let d = n.safe(n.associationId(e), {
        before: c,
        after: `]`,
        ...s.current()
    });
    return o(),
    n.stack = u,
    a(),
    i === `full` || !l || l !== d ? c += s.move(d + `]`) : i === `shortcut` ? c = c.slice(0, -1) : c += s.move(`]`),
    c
}
function yp() {
    return `[`
}
function bp(e) {
    let t = e.options.bullet || `*`;
    if (t !== `*` && t !== `+` && t !== `-`)
        throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return t
}
function xp(e) {
    let t = bp(e)
      , n = e.options.bulletOther;
    if (!n)
        return t === `*` ? `-` : `*`;
    if (n !== `*` && n !== `+` && n !== `-`)
        throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (n === t)
        throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
    return n
}
function Sp(e) {
    let t = e.options.bulletOrdered || `.`;
    if (t !== `.` && t !== `)`)
        throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
    return t
}
function Cp(e) {
    let t = e.options.rule || `*`;
    if (t !== `*` && t !== `-` && t !== `_`)
        throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
    return t
}
function wp(e, t, n, r) {
    let i = n.enter(`list`)
      , a = n.bulletCurrent
      , o = e.ordered ? Sp(n) : bp(n)
      , s = e.ordered ? o === `.` ? `)` : `.` : xp(n)
      , c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
    if (!e.ordered) {
        let t = e.children ? e.children[0] : void 0;
        if ((o === `*` || o === `-`) && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === `list` && n.stack[n.stack.length - 2] === `listItem` && n.stack[n.stack.length - 3] === `list` && n.stack[n.stack.length - 4] === `listItem` && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0),
        Cp(n) === o && t) {
            let t = -1;
            for (; ++t < e.children.length; ) {
                let n = e.children[t];
                if (n && n.type === `listItem` && n.children && n.children[0] && n.children[0].type === `thematicBreak`) {
                    c = !0;
                    break
                }
            }
        }
    }
    c && (o = s),
    n.bulletCurrent = o;
    let l = n.containerFlow(e, r);
    return n.bulletLastUsed = o,
    n.bulletCurrent = a,
    i(),
    l
}
function Tp(e) {
    let t = e.options.listItemIndent || `one`;
    if (t !== `tab` && t !== `one` && t !== `mixed`)
        throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return t
}
function Ep(e, t, n, r) {
    let i = Tp(n)
      , a = n.bulletCurrent || bp(n);
    t && t.type === `list` && t.ordered && (a = (typeof t.start == `number` && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
    let o = a.length + 1;
    (i === `tab` || i === `mixed` && (t && t.type === `list` && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
    let s = n.createTracker(r);
    s.move(a + ` `.repeat(o - a.length)),
    s.shift(o);
    let c = n.enter(`listItem`)
      , l = n.indentLines(n.containerFlow(e, s.current()), u);
    return c(),
    l;
    function u(e, t, n) {
        return t ? (n ? `` : ` `.repeat(o)) + e : (n ? a : a + ` `.repeat(o - a.length)) + e
    }
}
function Dp(e, t, n, r) {
    let i = n.enter(`paragraph`)
      , a = n.enter(`phrasing`)
      , o = n.containerPhrasing(e, r);
    return a(),
    i(),
    o
}
var Op = jd([`break`, `delete`, `emphasis`, `footnote`, `footnoteReference`, `image`, `imageReference`, `inlineCode`, `inlineMath`, `link`, `linkReference`, `mdxJsxTextElement`, `mdxTextExpression`, `strong`, `text`, `textDirective`]);
function kp(e, t, n, r) {
    return (e.children.some(function(e) {
        return Op(e)
    }) ? n.containerPhrasing : n.containerFlow).call(n, e, r)
}
function Ap(e) {
    let t = e.options.strong || `*`;
    if (t !== `*` && t !== `_`)
        throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
    return t
}
jp.peek = Mp;
function jp(e, t, n, r) {
    let i = Ap(n)
      , a = n.enter(`strong`)
      , o = n.createTracker(r)
      , s = o.move(i + i)
      , c = o.move(n.containerPhrasing(e, {
        after: i,
        before: s,
        ...o.current()
    }))
      , l = c.charCodeAt(0)
      , u = Xf(r.before.charCodeAt(r.before.length - 1), l, i);
    u.inside && (c = Jf(l) + c.slice(1));
    let d = c.charCodeAt(c.length - 1)
      , f = Xf(r.after.charCodeAt(0), d, i);
    f.inside && (c = c.slice(0, -1) + Jf(d));
    let p = o.move(i + i);
    return a(),
    n.attentionEncodeSurroundingInfo = {
        after: f.outside,
        before: u.outside
    },
    s + c + p
}
function Mp(e, t, n) {
    return n.options.strong || `*`
}
function Np(e, t, n, r) {
    return n.safe(e.value, r)
}
function Pp(e) {
    let t = e.options.ruleRepetition || 3;
    if (t < 3)
        throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
    return t
}
function Fp(e, t, n) {
    let r = (Cp(n) + (n.options.ruleSpaces ? ` ` : ``)).repeat(Pp(n));
    return n.options.ruleSpaces ? r.slice(0, -1) : r
}
var Ip = {
    blockquote: Ff,
    break: zf,
    code: Uf,
    definition: Kf,
    emphasis: Zf,
    hardBreak: zf,
    heading: op,
    html: sp,
    image: lp,
    imageReference: dp,
    inlineCode: pp,
    link: gp,
    linkReference: vp,
    list: wp,
    listItem: Ep,
    paragraph: Dp,
    root: kp,
    strong: jp,
    text: Np,
    thematicBreak: Fp
}
  , Lp = document.createElement(`i`);
function Rp(e) {
    let t = `&` + e + `;`;
    Lp.innerHTML = t;
    let n = Lp.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== `semi` || n === t ? !1 : n
}
function zp(e, t) {
    let n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? `�` : String.fromCodePoint(n)
}
var Bp = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Vp(e) {
    return e.replace(Bp, Hp)
}
function Hp(e, t, n) {
    if (t)
        return t;
    if (n.charCodeAt(0) === 35) {
        let e = n.charCodeAt(1)
          , t = e === 120 || e === 88;
        return zp(n.slice(t ? 2 : 1), t ? 16 : 10)
    }
    return Rp(n) || e
}
function Up() {
    return {
        enter: {
            table: Wp,
            tableData: Jp,
            tableHeader: Jp,
            tableRow: Kp
        },
        exit: {
            codeText: Yp,
            table: Gp,
            tableData: qp,
            tableHeader: qp,
            tableRow: qp
        }
    }
}
function Wp(e) {
    let t = e._align;
    this.enter({
        type: `table`,
        align: t.map(function(e) {
            return e === `none` ? null : e
        }),
        children: []
    }, e),
    this.data.inTable = !0
}
function Gp(e) {
    this.exit(e),
    this.data.inTable = void 0
}
function Kp(e) {
    this.enter({
        type: `tableRow`,
        children: []
    }, e)
}
function qp(e) {
    this.exit(e)
}
function Jp(e) {
    this.enter({
        type: `tableCell`,
        children: []
    }, e)
}
function Yp(e) {
    let t = this.resume();
    this.data.inTable && (t = t.replace(/\\([\\|])/g, Xp));
    let n = this.stack[this.stack.length - 1];
    n.type,
    n.value = t,
    this.exit(e)
}
function Xp(e, t) {
    return t === `|` ? t : e
}
function Zp(e) {
    let t = e || {}
      , n = t.tableCellPadding
      , r = t.tablePipeAlign
      , i = t.stringLength
      , a = n ? ` ` : `|`;
    return {
        unsafe: [{
            character: `\r`,
            inConstruct: `tableCell`
        }, {
            character: `
`,
            inConstruct: `tableCell`
        }, {
            atBreak: !0,
            character: `|`,
            after: `[	 :-]`
        }, {
            character: `|`,
            inConstruct: `tableCell`
        }, {
            atBreak: !0,
            character: `:`,
            after: `-`
        }, {
            atBreak: !0,
            character: `-`,
            after: `[:|-]`
        }],
        handlers: {
            inlineCode: f,
            table: o,
            tableCell: c,
            tableRow: s
        }
    };
    function o(e, t, n, r) {
        return l(u(e, n, r), e.align)
    }
    function s(e, t, n, r) {
        let i = l([d(e, n, r)]);
        return i.slice(0, i.indexOf(`
`))
    }
    function c(e, t, n, r) {
        let i = n.enter(`tableCell`)
          , o = n.enter(`phrasing`)
          , s = n.containerPhrasing(e, {
            ...r,
            before: a,
            after: a
        });
        return o(),
        i(),
        s
    }
    function l(e, t) {
        return Mf(e, {
            align: t,
            alignDelimiters: r,
            padding: n,
            stringLength: i
        })
    }
    function u(e, t, n) {
        let r = e.children
          , i = -1
          , a = []
          , o = t.enter(`table`);
        for (; ++i < r.length; )
            a[i] = d(r[i], t, n);
        return o(),
        a
    }
    function d(e, t, n) {
        let r = e.children
          , i = -1
          , a = []
          , o = t.enter(`tableRow`);
        for (; ++i < r.length; )
            a[i] = c(r[i], e, t, n);
        return o(),
        a
    }
    function f(e, t, n) {
        let r = Ip.inlineCode(e, t, n);
        return n.stack.includes(`tableCell`) && (r = r.replace(/\|/g, `\\$&`)),
        r
    }
}
function Qp() {
    return {
        exit: {
            taskListCheckValueChecked: em,
            taskListCheckValueUnchecked: em,
            paragraph: tm
        }
    }
}
function $p() {
    return {
        unsafe: [{
            atBreak: !0,
            character: `-`,
            after: `[:|-]`
        }],
        handlers: {
            listItem: nm
        }
    }
}
function em(e) {
    let t = this.stack[this.stack.length - 2];
    t.type,
    t.checked = e.type === `taskListCheckValueChecked`
}
function tm(e) {
    let t = this.stack[this.stack.length - 2];
    if (t && t.type === `listItem` && typeof t.checked == `boolean`) {
        let e = this.stack[this.stack.length - 1];
        e.type;
        let n = e.children[0];
        if (n && n.type === `text`) {
            let r = t.children, i = -1, a;
            for (; ++i < r.length; ) {
                let e = r[i];
                if (e.type === `paragraph`) {
                    a = e;
                    break
                }
            }
            a === e && (n.value = n.value.slice(1),
            n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == `number` && (n.position.start.column++,
            n.position.start.offset++,
            e.position.start = Object.assign({}, n.position.start)))
        }
    }
    this.exit(e)
}
function nm(e, t, n, r) {
    let i = e.children[0]
      , a = typeof e.checked == `boolean` && i && i.type === `paragraph`
      , o = `[` + (e.checked ? `x` : ` `) + `] `
      , s = n.createTracker(r);
    a && s.move(o);
    let c = Ip.listItem(e, t, n, {
        ...r,
        ...s.current()
    });
    return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)),
    c;
    function l(e) {
        return e + o
    }
}
function rm() {
    return [Jd(), bf(), Tf(), Up(), Qp()]
}
function im(e) {
    return {
        extensions: [Yd(), xf(e), Ef(), Zp(e), $p()]
    }
}
function am(e, t, n, r) {
    let i = e.length, a = 0, o;
    if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t,
    n = n > 0 ? n : 0,
    r.length < 1e4)
        o = Array.from(r),
        o.unshift(t, n),
        e.splice(...o);
    else
        for (n && e.splice(t, n); a < r.length; )
            o = r.slice(a, a + 1e4),
            o.unshift(t, 0),
            e.splice(...o),
            a += 1e4,
            t += 1e4
}
function om(e, t) {
    return e.length > 0 ? (am(e, e.length, 0, t),
    e) : t
}
var sm = {}.hasOwnProperty;
function cm(e) {
    let t = {}
      , n = -1;
    for (; ++n < e.length; )
        lm(t, e[n]);
    return t
}
function lm(e, t) {
    let n;
    for (n in t) {
        let r = (sm.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
        if (i)
            for (a in i) {
                sm.call(r, a) || (r[a] = []);
                let e = i[a];
                um(r[a], Array.isArray(e) ? e : e ? [e] : [])
            }
    }
}
function um(e, t) {
    let n = -1
      , r = [];
    for (; ++n < t.length; )
        (t[n].add === `after` ? e : r).push(t[n]);
    am(e, 0, 0, r)
}
var dm = {
    tokenize: Tm,
    partial: !0
}
  , fm = {
    tokenize: Em,
    partial: !0
}
  , pm = {
    tokenize: Dm,
    partial: !0
}
  , mm = {
    tokenize: Om,
    partial: !0
}
  , hm = {
    tokenize: km,
    partial: !0
}
  , gm = {
    name: `wwwAutolink`,
    tokenize: Cm,
    previous: Am
}
  , _m = {
    name: `protocolAutolink`,
    tokenize: wm,
    previous: jm
}
  , vm = {
    name: `emailAutolink`,
    tokenize: Sm,
    previous: Mm
}
  , ym = {};
function bm() {
    return {
        text: ym
    }
}
for (var xm = 48; xm < 123; )
    ym[xm] = vm,
    xm++,
    xm === 58 ? xm = 65 : xm === 91 && (xm = 97);
ym[43] = vm,
ym[45] = vm,
ym[46] = vm,
ym[95] = vm,
ym[72] = [vm, _m],
ym[104] = [vm, _m],
ym[87] = [vm, gm],
ym[119] = [vm, gm];
function Sm(e, t, n) {
    let r = this, i, a;
    return o;
    function o(t) {
        return !Nm(t) || !Mm.call(r, r.previous) || Pm(r.events) ? n(t) : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkEmail`),
        s(t))
    }
    function s(t) {
        return Nm(t) ? (e.consume(t),
        s) : t === 64 ? (e.consume(t),
        c) : n(t)
    }
    function c(t) {
        return t === 46 ? e.check(hm, u, l)(t) : t === 45 || t === 95 || xd(t) ? (a = !0,
        e.consume(t),
        c) : u(t)
    }
    function l(t) {
        return e.consume(t),
        i = !0,
        c
    }
    function u(o) {
        return a && i && bd(r.previous) ? (e.exit(`literalAutolinkEmail`),
        e.exit(`literalAutolink`),
        t(o)) : n(o)
    }
}
function Cm(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return t !== 87 && t !== 119 || !Am.call(r, r.previous) || Pm(r.events) ? n(t) : (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkWww`),
        e.check(dm, e.attempt(fm, e.attempt(pm, a), n), n)(t))
    }
    function a(n) {
        return e.exit(`literalAutolinkWww`),
        e.exit(`literalAutolink`),
        t(n)
    }
}
function wm(e, t, n) {
    let r = this
      , i = ``
      , a = !1;
    return o;
    function o(t) {
        return (t === 72 || t === 104) && jm.call(r, r.previous) && !Pm(r.events) ? (e.enter(`literalAutolink`),
        e.enter(`literalAutolinkHttp`),
        i += String.fromCodePoint(t),
        e.consume(t),
        s) : n(t)
    }
    function s(t) {
        if (bd(t) && i.length < 5)
            return i += String.fromCodePoint(t),
            e.consume(t),
            s;
        if (t === 58) {
            let n = i.toLowerCase();
            if (n === `http` || n === `https`)
                return e.consume(t),
                c
        }
        return n(t)
    }
    function c(t) {
        return t === 47 ? (e.consume(t),
        a ? l : (a = !0,
        c)) : n(t)
    }
    function l(t) {
        return t === null || Cd(t) || Z(t) || Od(t) || Dd(t) ? n(t) : e.attempt(fm, e.attempt(pm, u), n)(t)
    }
    function u(n) {
        return e.exit(`literalAutolinkHttp`),
        e.exit(`literalAutolink`),
        t(n)
    }
}
function Tm(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return (t === 87 || t === 119) && r < 3 ? (r++,
        e.consume(t),
        i) : t === 46 && r === 3 ? (e.consume(t),
        a) : n(t)
    }
    function a(e) {
        return e === null ? n(e) : t(e)
    }
}
function Em(e, t, n) {
    let r, i, a;
    return o;
    function o(t) {
        return t === 46 || t === 95 ? e.check(mm, c, s)(t) : t === null || Z(t) || Od(t) || t !== 45 && Dd(t) ? c(t) : (a = !0,
        e.consume(t),
        o)
    }
    function s(t) {
        return t === 95 ? r = !0 : (i = r,
        r = void 0),
        e.consume(t),
        o
    }
    function c(e) {
        return i || r || !a ? n(e) : t(e)
    }
}
function Dm(e, t) {
    let n = 0
      , r = 0;
    return i;
    function i(o) {
        return o === 40 ? (n++,
        e.consume(o),
        i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(mm, t, a)(o) : o === null || Z(o) || Od(o) ? t(o) : (e.consume(o),
        i)
    }
    function a(t) {
        return t === 41 && r++,
        e.consume(t),
        i
    }
}
function Om(e, t, n) {
    return r;
    function r(o) {
        return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o),
        r) : o === 38 ? (e.consume(o),
        a) : o === 93 ? (e.consume(o),
        i) : o === 60 || o === null || Z(o) || Od(o) ? t(o) : n(o)
    }
    function i(e) {
        return e === null || e === 40 || e === 91 || Z(e) || Od(e) ? t(e) : r(e)
    }
    function a(e) {
        return bd(e) ? o(e) : n(e)
    }
    function o(t) {
        return t === 59 ? (e.consume(t),
        r) : bd(t) ? (e.consume(t),
        o) : n(t)
    }
}
function km(e, t, n) {
    return r;
    function r(t) {
        return e.consume(t),
        i
    }
    function i(e) {
        return xd(e) ? n(e) : t(e)
    }
}
function Am(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Z(e)
}
function jm(e) {
    return !bd(e)
}
function Mm(e) {
    return !(e === 47 || Nm(e))
}
function Nm(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || xd(e)
}
function Pm(e) {
    let t = e.length
      , n = !1;
    for (; t--; ) {
        let r = e[t][1];
        if ((r.type === `labelLink` || r.type === `labelImage`) && !r._balanced) {
            n = !0;
            break
        }
        if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break
        }
    }
    return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
    n
}
function Fm(e) {
    let t = []
      , n = -1
      , r = 0
      , i = 0;
    for (; ++n < e.length; ) {
        let a = e.charCodeAt(n)
          , o = ``;
        if (a === 37 && xd(e.charCodeAt(n + 1)) && xd(e.charCodeAt(n + 2)))
            i = 2;
        else if (a < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
        else if (a > 55295 && a < 57344) {
            let t = e.charCodeAt(n + 1);
            a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t),
            i = 1) : o = `�`
        } else
            o = String.fromCharCode(a);
        o &&= (t.push(e.slice(r, n), encodeURIComponent(o)),
        r = n + i + 1,
        ``),
        i &&= (n += i,
        0)
    }
    return t.join(``) + e.slice(r)
}
function Im(e, t, n) {
    let r = []
      , i = -1;
    for (; ++i < e.length; ) {
        let a = e[i].resolveAll;
        a && !r.includes(a) && (t = a(t, n),
        r.push(a))
    }
    return t
}
var Lm = {
    name: `attention`,
    resolveAll: Rm,
    tokenize: zm
};
function Rm(e, t) {
    let n = -1, r, i, a, o, s, c, l, u;
    for (; ++n < e.length; )
        if (e[n][0] === `enter` && e[n][1].type === `attentionSequence` && e[n][1]._close) {
            for (r = n; r--; )
                if (e[r][0] === `exit` && e[r][1].type === `attentionSequence` && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
                        continue;
                    c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    let d = {
                        ...e[r][1].end
                    }
                      , f = {
                        ...e[n][1].start
                    };
                    Bm(d, -c),
                    Bm(f, c),
                    o = {
                        type: c > 1 ? `strongSequence` : `emphasisSequence`,
                        start: d,
                        end: {
                            ...e[r][1].end
                        }
                    },
                    s = {
                        type: c > 1 ? `strongSequence` : `emphasisSequence`,
                        start: {
                            ...e[n][1].start
                        },
                        end: f
                    },
                    a = {
                        type: c > 1 ? `strongText` : `emphasisText`,
                        start: {
                            ...e[r][1].end
                        },
                        end: {
                            ...e[n][1].start
                        }
                    },
                    i = {
                        type: c > 1 ? `strong` : `emphasis`,
                        start: {
                            ...o.start
                        },
                        end: {
                            ...s.end
                        }
                    },
                    e[r][1].end = {
                        ...o.start
                    },
                    e[n][1].start = {
                        ...s.end
                    },
                    l = [],
                    e[r][1].end.offset - e[r][1].start.offset && (l = om(l, [[`enter`, e[r][1], t], [`exit`, e[r][1], t]])),
                    l = om(l, [[`enter`, i, t], [`enter`, o, t], [`exit`, o, t], [`enter`, a, t]]),
                    l = om(l, Im(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)),
                    l = om(l, [[`exit`, a, t], [`enter`, s, t], [`exit`, s, t], [`exit`, i, t]]),
                    e[n][1].end.offset - e[n][1].start.offset ? (u = 2,
                    l = om(l, [[`enter`, e[n][1], t], [`exit`, e[n][1], t]])) : u = 0,
                    am(e, r - 1, n - r + 3, l),
                    n = r + l.length - u - 2;
                    break
                }
        }
    for (n = -1; ++n < e.length; )
        e[n][1].type === `attentionSequence` && (e[n][1].type = `data`);
    return e
}
function zm(e, t) {
    let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Yf(r), a;
    return o;
    function o(t) {
        return a = t,
        e.enter(`attentionSequence`),
        s(t)
    }
    function s(o) {
        if (o === a)
            return e.consume(o),
            s;
        let c = e.exit(`attentionSequence`)
          , l = Yf(o)
          , u = !l || l === 2 && i || n.includes(o)
          , d = !i || i === 2 && l || n.includes(r);
        return c._open = !!(a === 42 ? u : u && (i || !d)),
        c._close = !!(a === 42 ? d : d && (l || !u)),
        t(o)
    }
}
function Bm(e, t) {
    e.column += t,
    e.offset += t,
    e._bufferIndex += t
}
var Vm = {
    name: `autolink`,
    tokenize: Hm
};
function Hm(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return e.enter(`autolink`),
        e.enter(`autolinkMarker`),
        e.consume(t),
        e.exit(`autolinkMarker`),
        e.enter(`autolinkProtocol`),
        a
    }
    function a(t) {
        return bd(t) ? (e.consume(t),
        o) : t === 64 ? n(t) : l(t)
    }
    function o(e) {
        return e === 43 || e === 45 || e === 46 || xd(e) ? (r = 1,
        s(e)) : l(e)
    }
    function s(t) {
        return t === 58 ? (e.consume(t),
        r = 0,
        c) : (t === 43 || t === 45 || t === 46 || xd(t)) && r++ < 32 ? (e.consume(t),
        s) : (r = 0,
        l(t))
    }
    function c(r) {
        return r === 62 ? (e.exit(`autolinkProtocol`),
        e.enter(`autolinkMarker`),
        e.consume(r),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t) : r === null || r === 32 || r === 60 || Cd(r) ? n(r) : (e.consume(r),
        c)
    }
    function l(t) {
        return t === 64 ? (e.consume(t),
        u) : Sd(t) ? (e.consume(t),
        l) : n(t)
    }
    function u(e) {
        return xd(e) ? d(e) : n(e)
    }
    function d(n) {
        return n === 46 ? (e.consume(n),
        r = 0,
        u) : n === 62 ? (e.exit(`autolinkProtocol`).type = `autolinkEmail`,
        e.enter(`autolinkMarker`),
        e.consume(n),
        e.exit(`autolinkMarker`),
        e.exit(`autolink`),
        t) : f(n)
    }
    function f(t) {
        if ((t === 45 || xd(t)) && r++ < 63) {
            let n = t === 45 ? f : d;
            return e.consume(t),
            n
        }
        return n(t)
    }
}
function $(e, t, n, r) {
    let i = r ? r - 1 : 1 / 0
      , a = 0;
    return o;
    function o(r) {
        return Q(r) ? (e.enter(n),
        s(r)) : t(r)
    }
    function s(r) {
        return Q(r) && a++ < i ? (e.consume(r),
        s) : (e.exit(n),
        t(r))
    }
}
var Um = {
    partial: !0,
    tokenize: Wm
};
function Wm(e, t, n) {
    return r;
    function r(t) {
        return Q(t) ? $(e, i, `linePrefix`)(t) : i(t)
    }
    function i(e) {
        return e === null || X(e) ? t(e) : n(e)
    }
}
var Gm = {
    continuation: {
        tokenize: qm
    },
    exit: Jm,
    name: `blockQuote`,
    tokenize: Km
};
function Km(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        if (t === 62) {
            let n = r.containerState;
            return n.open ||= (e.enter(`blockQuote`, {
                _container: !0
            }),
            !0),
            e.enter(`blockQuotePrefix`),
            e.enter(`blockQuoteMarker`),
            e.consume(t),
            e.exit(`blockQuoteMarker`),
            a
        }
        return n(t)
    }
    function a(n) {
        return Q(n) ? (e.enter(`blockQuotePrefixWhitespace`),
        e.consume(n),
        e.exit(`blockQuotePrefixWhitespace`),
        e.exit(`blockQuotePrefix`),
        t) : (e.exit(`blockQuotePrefix`),
        t(n))
    }
}
function qm(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return Q(t) ? $(e, a, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : a(t)
    }
    function a(r) {
        return e.attempt(Gm, t, n)(r)
    }
}
function Jm(e) {
    e.exit(`blockQuote`)
}
var Ym = {
    name: `characterEscape`,
    tokenize: Xm
};
function Xm(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`characterEscape`),
        e.enter(`escapeMarker`),
        e.consume(t),
        e.exit(`escapeMarker`),
        i
    }
    function i(r) {
        return Ed(r) ? (e.enter(`characterEscapeValue`),
        e.consume(r),
        e.exit(`characterEscapeValue`),
        e.exit(`characterEscape`),
        t) : n(r)
    }
}
var Zm = {
    name: `characterReference`,
    tokenize: Qm
};
function Qm(e, t, n) {
    let r = this, i = 0, a, o;
    return s;
    function s(t) {
        return e.enter(`characterReference`),
        e.enter(`characterReferenceMarker`),
        e.consume(t),
        e.exit(`characterReferenceMarker`),
        c
    }
    function c(t) {
        return t === 35 ? (e.enter(`characterReferenceMarkerNumeric`),
        e.consume(t),
        e.exit(`characterReferenceMarkerNumeric`),
        l) : (e.enter(`characterReferenceValue`),
        a = 31,
        o = xd,
        u(t))
    }
    function l(t) {
        return t === 88 || t === 120 ? (e.enter(`characterReferenceMarkerHexadecimal`),
        e.consume(t),
        e.exit(`characterReferenceMarkerHexadecimal`),
        e.enter(`characterReferenceValue`),
        a = 6,
        o = Td,
        u) : (e.enter(`characterReferenceValue`),
        a = 7,
        o = wd,
        u(t))
    }
    function u(s) {
        if (s === 59 && i) {
            let i = e.exit(`characterReferenceValue`);
            return o === xd && !Rp(r.sliceSerialize(i)) ? n(s) : (e.enter(`characterReferenceMarker`),
            e.consume(s),
            e.exit(`characterReferenceMarker`),
            e.exit(`characterReference`),
            t)
        }
        return o(s) && i++ < a ? (e.consume(s),
        u) : n(s)
    }
}
var $m = {
    partial: !0,
    tokenize: nh
}
  , eh = {
    concrete: !0,
    name: `codeFenced`,
    tokenize: th
};
function th(e, t, n) {
    let r = this, i = {
        partial: !0,
        tokenize: x
    }, a = 0, o = 0, s;
    return c;
    function c(e) {
        return l(e)
    }
    function l(t) {
        let n = r.events[r.events.length - 1];
        return a = n && n[1].type === `linePrefix` ? n[2].sliceSerialize(n[1], !0).length : 0,
        s = t,
        e.enter(`codeFenced`),
        e.enter(`codeFencedFence`),
        e.enter(`codeFencedFenceSequence`),
        u(t)
    }
    function u(t) {
        return t === s ? (o++,
        e.consume(t),
        u) : o < 3 ? n(t) : (e.exit(`codeFencedFenceSequence`),
        Q(t) ? $(e, d, `whitespace`)(t) : d(t))
    }
    function d(n) {
        return n === null || X(n) ? (e.exit(`codeFencedFence`),
        r.interrupt ? t(n) : e.check($m, h, b)(n)) : (e.enter(`codeFencedFenceInfo`),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        f(n))
    }
    function f(t) {
        return t === null || X(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceInfo`),
        d(t)) : Q(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceInfo`),
        $(e, p, `whitespace`)(t)) : t === 96 && t === s ? n(t) : (e.consume(t),
        f)
    }
    function p(t) {
        return t === null || X(t) ? d(t) : (e.enter(`codeFencedFenceMeta`),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        m(t))
    }
    function m(t) {
        return t === null || X(t) ? (e.exit(`chunkString`),
        e.exit(`codeFencedFenceMeta`),
        d(t)) : t === 96 && t === s ? n(t) : (e.consume(t),
        m)
    }
    function h(t) {
        return e.attempt(i, b, g)(t)
    }
    function g(t) {
        return e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        _
    }
    function _(t) {
        return a > 0 && Q(t) ? $(e, v, `linePrefix`, a + 1)(t) : v(t)
    }
    function v(t) {
        return t === null || X(t) ? e.check($m, h, b)(t) : (e.enter(`codeFlowValue`),
        y(t))
    }
    function y(t) {
        return t === null || X(t) ? (e.exit(`codeFlowValue`),
        v(t)) : (e.consume(t),
        y)
    }
    function b(n) {
        return e.exit(`codeFenced`),
        t(n)
    }
    function x(e, t, n) {
        let i = 0;
        return a;
        function a(t) {
            return e.enter(`lineEnding`),
            e.consume(t),
            e.exit(`lineEnding`),
            c
        }
        function c(t) {
            return e.enter(`codeFencedFence`),
            Q(t) ? $(e, l, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : l(t)
        }
        function l(t) {
            return t === s ? (e.enter(`codeFencedFenceSequence`),
            u(t)) : n(t)
        }
        function u(t) {
            return t === s ? (i++,
            e.consume(t),
            u) : i >= o ? (e.exit(`codeFencedFenceSequence`),
            Q(t) ? $(e, d, `whitespace`)(t) : d(t)) : n(t)
        }
        function d(r) {
            return r === null || X(r) ? (e.exit(`codeFencedFence`),
            t(r)) : n(r)
        }
    }
}
function nh(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return t === null ? n(t) : (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        a)
    }
    function a(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e)
    }
}
var rh = {
    name: `codeIndented`,
    tokenize: ah
}
  , ih = {
    partial: !0,
    tokenize: oh
};
function ah(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return e.enter(`codeIndented`),
        $(e, a, `linePrefix`, 5)(t)
    }
    function a(e) {
        let t = r.events[r.events.length - 1];
        return t && t[1].type === `linePrefix` && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e)
    }
    function o(t) {
        return t === null ? c(t) : X(t) ? e.attempt(ih, o, c)(t) : (e.enter(`codeFlowValue`),
        s(t))
    }
    function s(t) {
        return t === null || X(t) ? (e.exit(`codeFlowValue`),
        o(t)) : (e.consume(t),
        s)
    }
    function c(n) {
        return e.exit(`codeIndented`),
        t(n)
    }
}
function oh(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return r.parser.lazy[r.now().line] ? n(t) : X(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        i) : $(e, a, `linePrefix`, 5)(t)
    }
    function a(e) {
        let a = r.events[r.events.length - 1];
        return a && a[1].type === `linePrefix` && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : X(e) ? i(e) : n(e)
    }
}
var sh = {
    name: `codeText`,
    previous: lh,
    resolve: ch,
    tokenize: uh
};
function ch(e) {
    let t = e.length - 4, n = 3, r, i;
    if ((e[n][1].type === `lineEnding` || e[n][1].type === `space`) && (e[t][1].type === `lineEnding` || e[t][1].type === `space`)) {
        for (r = n; ++r < t; )
            if (e[r][1].type === `codeTextData`) {
                e[n][1].type = `codeTextPadding`,
                e[t][1].type = `codeTextPadding`,
                n += 2,
                t -= 2;
                break
            }
    }
    for (r = n - 1,
    t++; ++r <= t; )
        i === void 0 ? r !== t && e[r][1].type !== `lineEnding` && (i = r) : (r === t || e[r][1].type === `lineEnding`) && (e[i][1].type = `codeTextData`,
        r !== i + 2 && (e[i][1].end = e[r - 1][1].end,
        e.splice(i + 2, r - i - 2),
        t -= r - i - 2,
        r = i + 2),
        i = void 0);
    return e
}
function lh(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === `characterEscape`
}
function uh(e, t, n) {
    let r = 0, i, a;
    return o;
    function o(t) {
        return e.enter(`codeText`),
        e.enter(`codeTextSequence`),
        s(t)
    }
    function s(t) {
        return t === 96 ? (e.consume(t),
        r++,
        s) : (e.exit(`codeTextSequence`),
        c(t))
    }
    function c(t) {
        return t === null ? n(t) : t === 32 ? (e.enter(`space`),
        e.consume(t),
        e.exit(`space`),
        c) : t === 96 ? (a = e.enter(`codeTextSequence`),
        i = 0,
        u(t)) : X(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        c) : (e.enter(`codeTextData`),
        l(t))
    }
    function l(t) {
        return t === null || t === 32 || t === 96 || X(t) ? (e.exit(`codeTextData`),
        c(t)) : (e.consume(t),
        l)
    }
    function u(n) {
        return n === 96 ? (e.consume(n),
        i++,
        u) : i === r ? (e.exit(`codeTextSequence`),
        e.exit(`codeText`),
        t(n)) : (a.type = `codeTextData`,
        l(n))
    }
}
var dh = class {
    constructor(e) {
        this.left = e ? [...e] : [],
        this.right = []
    }
    get(e) {
        if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0),
        this.right.pop()
    }
    slice(e, t) {
        let n = t ?? 1 / 0;
        return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
    }
    splice(e, t, n) {
        let r = t || 0;
        this.setCursor(Math.trunc(e));
        let i = this.right.splice(this.right.length - r, 1 / 0);
        return n && fh(this.left, n),
        i.reverse()
    }
    pop() {
        return this.setCursor(1 / 0),
        this.left.pop()
    }
    push(e) {
        this.setCursor(1 / 0),
        this.left.push(e)
    }
    pushMany(e) {
        this.setCursor(1 / 0),
        fh(this.left, e)
    }
    unshift(e) {
        this.setCursor(0),
        this.right.push(e)
    }
    unshiftMany(e) {
        this.setCursor(0),
        fh(this.right, e.reverse())
    }
    setCursor(e) {
        if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0))
            if (e < this.left.length) {
                let t = this.left.splice(e, 1 / 0);
                fh(this.right, t.reverse())
            } else {
                let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
                fh(this.left, t.reverse())
            }
    }
}
;
function fh(e, t) {
    let n = 0;
    if (t.length < 1e4)
        e.push(...t);
    else
        for (; n < t.length; )
            e.push(...t.slice(n, n + 1e4)),
            n += 1e4
}
function ph(e) {
    let t = {}, n = -1, r, i, a, o, s, c, l, u = new dh(e);
    for (; ++n < u.length; ) {
        for (; n in t; )
            n = t[n];
        if (r = u.get(n),
        n && r[1].type === `chunkFlow` && u.get(n - 1)[1].type === `listItemPrefix` && (c = r[1]._tokenizer.events,
        a = 0,
        a < c.length && c[a][1].type === `lineEndingBlank` && (a += 2),
        a < c.length && c[a][1].type === `content`))
            for (; ++a < c.length && c[a][1].type !== `content`; )
                c[a][1].type === `chunkText` && (c[a][1]._isInFirstContentOfListItem = !0,
                a++);
        if (r[0] === `enter`)
            r[1].contentType && (Object.assign(t, mh(u, n)),
            n = t[n],
            l = !0);
        else if (r[1]._container) {
            for (a = n,
            i = void 0; a--; )
                if (o = u.get(a),
                o[1].type === `lineEnding` || o[1].type === `lineEndingBlank`)
                    o[0] === `enter` && (i && (u.get(i)[1].type = `lineEndingBlank`),
                    o[1].type = `lineEnding`,
                    i = a);
                else if (!(o[1].type === `linePrefix` || o[1].type === `listItemIndent`))
                    break;
            i && (r[1].end = {
                ...u.get(i)[1].start
            },
            s = u.slice(i, n),
            s.unshift(r),
            u.splice(i, n - i + 1, s))
        }
    }
    return am(e, 0, 1 / 0, u.slice(0)),
    !l
}
function mh(e, t) {
    let n = e.get(t)[1]
      , r = e.get(t)[2]
      , i = t - 1
      , a = []
      , o = n._tokenizer;
    o || (o = r.parser[n.contentType](n.start),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
    let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
    for (; p; ) {
        for (; e.get(++i)[1] !== p; )
            ;
        a.push(i),
        p._tokenizer || (u = r.sliceStream(p),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)),
        d = p,
        p = p.next
    }
    for (p = n; ++f < s.length; )
        s[f][0] === `exit` && s[f - 1][0] === `enter` && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1,
        g.push(h),
        p._tokenizer = void 0,
        p.previous = void 0,
        p = p.next);
    for (o.events = [],
    p ? (p._tokenizer = void 0,
    p.previous = void 0) : g.pop(),
    f = g.length; f--; ) {
        let t = s.slice(g[f], g[f + 1])
          , n = a.pop();
        c.push([n, n + t.length - 1]),
        e.splice(n, 2, t)
    }
    for (c.reverse(),
    f = -1; ++f < c.length; )
        l[m + c[f][0]] = m + c[f][1],
        m += c[f][1] - c[f][0] - 1;
    return l
}
var hh = {
    resolve: _h,
    tokenize: vh
}
  , gh = {
    partial: !0,
    tokenize: yh
};
function _h(e) {
    return ph(e),
    e
}
function vh(e, t) {
    let n;
    return r;
    function r(t) {
        return e.enter(`content`),
        n = e.enter(`chunkContent`, {
            contentType: `content`
        }),
        i(t)
    }
    function i(t) {
        return t === null ? a(t) : X(t) ? e.check(gh, o, a)(t) : (e.consume(t),
        i)
    }
    function a(n) {
        return e.exit(`chunkContent`),
        e.exit(`content`),
        t(n)
    }
    function o(t) {
        return e.consume(t),
        e.exit(`chunkContent`),
        n.next = e.enter(`chunkContent`, {
            contentType: `content`,
            previous: n
        }),
        n = n.next,
        i
    }
}
function yh(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return e.exit(`chunkContent`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        $(e, a, `linePrefix`)
    }
    function a(i) {
        if (i === null || X(i))
            return n(i);
        let a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes(`codeIndented`) && a && a[1].type === `linePrefix` && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
    }
}
function bh(e, t, n, r, i, a, o, s, c) {
    let l = c || 1 / 0
      , u = 0;
    return d;
    function d(t) {
        return t === 60 ? (e.enter(r),
        e.enter(i),
        e.enter(a),
        e.consume(t),
        e.exit(a),
        f) : t === null || t === 32 || t === 41 || Cd(t) ? n(t) : (e.enter(r),
        e.enter(o),
        e.enter(s),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        h(t))
    }
    function f(n) {
        return n === 62 ? (e.enter(a),
        e.consume(n),
        e.exit(a),
        e.exit(i),
        e.exit(r),
        t) : (e.enter(s),
        e.enter(`chunkString`, {
            contentType: `string`
        }),
        p(n))
    }
    function p(t) {
        return t === 62 ? (e.exit(`chunkString`),
        e.exit(s),
        f(t)) : t === null || t === 60 || X(t) ? n(t) : (e.consume(t),
        t === 92 ? m : p)
    }
    function m(t) {
        return t === 60 || t === 62 || t === 92 ? (e.consume(t),
        p) : p(t)
    }
    function h(i) {
        return !u && (i === null || i === 41 || Z(i)) ? (e.exit(`chunkString`),
        e.exit(s),
        e.exit(o),
        e.exit(r),
        t(i)) : u < l && i === 40 ? (e.consume(i),
        u++,
        h) : i === 41 ? (e.consume(i),
        u--,
        h) : i === null || i === 32 || i === 40 || Cd(i) ? n(i) : (e.consume(i),
        i === 92 ? g : h)
    }
    function g(t) {
        return t === 40 || t === 41 || t === 92 ? (e.consume(t),
        h) : h(t)
    }
}
function xh(e, t, n, r, i, a) {
    let o = this, s = 0, c;
    return l;
    function l(t) {
        return e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        e.enter(a),
        u
    }
    function u(l) {
        return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && `_hiddenFootnoteSupport`in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a),
        e.enter(i),
        e.consume(l),
        e.exit(i),
        e.exit(r),
        t) : X(l) ? (e.enter(`lineEnding`),
        e.consume(l),
        e.exit(`lineEnding`),
        u) : (e.enter(`chunkString`, {
            contentType: `string`
        }),
        d(l))
    }
    function d(t) {
        return t === null || t === 91 || t === 93 || X(t) || s++ > 999 ? (e.exit(`chunkString`),
        u(t)) : (e.consume(t),
        c ||= !Q(t),
        t === 92 ? f : d)
    }
    function f(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        s++,
        d) : d(t)
    }
}
function Sh(e, t, n, r, i, a) {
    let o;
    return s;
    function s(t) {
        return t === 34 || t === 39 || t === 40 ? (e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        o = t === 40 ? 41 : t,
        c) : n(t)
    }
    function c(n) {
        return n === o ? (e.enter(i),
        e.consume(n),
        e.exit(i),
        e.exit(r),
        t) : (e.enter(a),
        l(n))
    }
    function l(t) {
        return t === o ? (e.exit(a),
        c(o)) : t === null ? n(t) : X(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        $(e, l, `linePrefix`)) : (e.enter(`chunkString`, {
            contentType: `string`
        }),
        u(t))
    }
    function u(t) {
        return t === o || t === null || X(t) ? (e.exit(`chunkString`),
        l(t)) : (e.consume(t),
        t === 92 ? d : u)
    }
    function d(t) {
        return t === o || t === 92 ? (e.consume(t),
        u) : u(t)
    }
}
function Ch(e, t) {
    let n;
    return r;
    function r(i) {
        return X(i) ? (e.enter(`lineEnding`),
        e.consume(i),
        e.exit(`lineEnding`),
        n = !0,
        r) : Q(i) ? $(e, r, n ? `linePrefix` : `lineSuffix`)(i) : t(i)
    }
}
var wh = {
    name: `definition`,
    tokenize: Eh
}
  , Th = {
    partial: !0,
    tokenize: Dh
};
function Eh(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        return e.enter(`definition`),
        o(t)
    }
    function o(t) {
        return xh.call(r, e, s, n, `definitionLabel`, `definitionLabelMarker`, `definitionLabelString`)(t)
    }
    function s(t) {
        return i = lf(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
        t === 58 ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        c) : n(t)
    }
    function c(t) {
        return Z(t) ? Ch(e, l)(t) : l(t)
    }
    function l(t) {
        return bh(e, u, n, `definitionDestination`, `definitionDestinationLiteral`, `definitionDestinationLiteralMarker`, `definitionDestinationRaw`, `definitionDestinationString`)(t)
    }
    function u(t) {
        return e.attempt(Th, d, d)(t)
    }
    function d(t) {
        return Q(t) ? $(e, f, `whitespace`)(t) : f(t)
    }
    function f(a) {
        return a === null || X(a) ? (e.exit(`definition`),
        r.parser.defined.push(i),
        t(a)) : n(a)
    }
}
function Dh(e, t, n) {
    return r;
    function r(t) {
        return Z(t) ? Ch(e, i)(t) : n(t)
    }
    function i(t) {
        return Sh(e, a, n, `definitionTitle`, `definitionTitleMarker`, `definitionTitleString`)(t)
    }
    function a(t) {
        return Q(t) ? $(e, o, `whitespace`)(t) : o(t)
    }
    function o(e) {
        return e === null || X(e) ? t(e) : n(e)
    }
}
var Oh = {
    name: `hardBreakEscape`,
    tokenize: kh
};
function kh(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`hardBreakEscape`),
        e.consume(t),
        i
    }
    function i(r) {
        return X(r) ? (e.exit(`hardBreakEscape`),
        t(r)) : n(r)
    }
}
var Ah = {
    name: `headingAtx`,
    resolve: jh,
    tokenize: Mh
};
function jh(e, t) {
    let n = e.length - 2, r = 3, i, a;
    return e[r][1].type === `whitespace` && (r += 2),
    n - 2 > r && e[n][1].type === `whitespace` && (n -= 2),
    e[n][1].type === `atxHeadingSequence` && (r === n - 1 || n - 4 > r && e[n - 2][1].type === `whitespace`) && (n -= r + 1 === n ? 2 : 4),
    n > r && (i = {
        type: `atxHeadingText`,
        start: e[r][1].start,
        end: e[n][1].end
    },
    a = {
        type: `chunkText`,
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: `text`
    },
    am(e, r, n - r + 1, [[`enter`, i, t], [`enter`, a, t], [`exit`, a, t], [`exit`, i, t]])),
    e
}
function Mh(e, t, n) {
    let r = 0;
    return i;
    function i(t) {
        return e.enter(`atxHeading`),
        a(t)
    }
    function a(t) {
        return e.enter(`atxHeadingSequence`),
        o(t)
    }
    function o(t) {
        return t === 35 && r++ < 6 ? (e.consume(t),
        o) : t === null || Z(t) ? (e.exit(`atxHeadingSequence`),
        s(t)) : n(t)
    }
    function s(n) {
        return n === 35 ? (e.enter(`atxHeadingSequence`),
        c(n)) : n === null || X(n) ? (e.exit(`atxHeading`),
        t(n)) : Q(n) ? $(e, s, `whitespace`)(n) : (e.enter(`atxHeadingText`),
        l(n))
    }
    function c(t) {
        return t === 35 ? (e.consume(t),
        c) : (e.exit(`atxHeadingSequence`),
        s(t))
    }
    function l(t) {
        return t === null || t === 35 || Z(t) ? (e.exit(`atxHeadingText`),
        s(t)) : (e.consume(t),
        l)
    }
}
var Nh = `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`)
  , Ph = [`pre`, `script`, `style`, `textarea`]
  , Fh = {
    concrete: !0,
    name: `htmlFlow`,
    resolveTo: Rh,
    tokenize: zh
}
  , Ih = {
    partial: !0,
    tokenize: Vh
}
  , Lh = {
    partial: !0,
    tokenize: Bh
};
function Rh(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === `enter` && e[t][1].type === `htmlFlow`); )
        ;
    return t > 1 && e[t - 2][1].type === `linePrefix` && (e[t][1].start = e[t - 2][1].start,
    e[t + 1][1].start = e[t - 2][1].start,
    e.splice(t - 2, 2)),
    e
}
function zh(e, t, n) {
    let r = this, i, a, o, s, c;
    return l;
    function l(e) {
        return u(e)
    }
    function u(t) {
        return e.enter(`htmlFlow`),
        e.enter(`htmlFlowData`),
        e.consume(t),
        d
    }
    function d(s) {
        return s === 33 ? (e.consume(s),
        f) : s === 47 ? (e.consume(s),
        a = !0,
        h) : s === 63 ? (e.consume(s),
        i = 3,
        r.interrupt ? t : ae) : bd(s) ? (e.consume(s),
        o = String.fromCharCode(s),
        g) : n(s)
    }
    function f(a) {
        return a === 45 ? (e.consume(a),
        i = 2,
        p) : a === 91 ? (e.consume(a),
        i = 5,
        s = 0,
        m) : bd(a) ? (e.consume(a),
        i = 4,
        r.interrupt ? t : ae) : n(a)
    }
    function p(i) {
        return i === 45 ? (e.consume(i),
        r.interrupt ? t : ae) : n(i)
    }
    function m(i) {
        return i === `CDATA[`.charCodeAt(s++) ? (e.consume(i),
        s === 6 ? r.interrupt ? t : O : m) : n(i)
    }
    function h(t) {
        return bd(t) ? (e.consume(t),
        o = String.fromCharCode(t),
        g) : n(t)
    }
    function g(s) {
        if (s === null || s === 47 || s === 62 || Z(s)) {
            let c = s === 47
              , l = o.toLowerCase();
            return !c && !a && Ph.includes(l) ? (i = 1,
            r.interrupt ? t(s) : O(s)) : Nh.includes(o.toLowerCase()) ? (i = 6,
            c ? (e.consume(s),
            _) : r.interrupt ? t(s) : O(s)) : (i = 7,
            r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s))
        }
        return s === 45 || xd(s) ? (e.consume(s),
        o += String.fromCharCode(s),
        g) : n(s)
    }
    function _(i) {
        return i === 62 ? (e.consume(i),
        r.interrupt ? t : O) : n(i)
    }
    function v(t) {
        return Q(t) ? (e.consume(t),
        v) : E(t)
    }
    function y(t) {
        return t === 47 ? (e.consume(t),
        E) : t === 58 || t === 95 || bd(t) ? (e.consume(t),
        b) : Q(t) ? (e.consume(t),
        y) : E(t)
    }
    function b(t) {
        return t === 45 || t === 46 || t === 58 || t === 95 || xd(t) ? (e.consume(t),
        b) : x(t)
    }
    function x(t) {
        return t === 61 ? (e.consume(t),
        S) : Q(t) ? (e.consume(t),
        x) : y(t)
    }
    function S(t) {
        return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t),
        c = t,
        C) : Q(t) ? (e.consume(t),
        S) : w(t)
    }
    function C(t) {
        return t === c ? (e.consume(t),
        c = null,
        T) : t === null || X(t) ? n(t) : (e.consume(t),
        C)
    }
    function w(t) {
        return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Z(t) ? x(t) : (e.consume(t),
        w)
    }
    function T(e) {
        return e === 47 || e === 62 || Q(e) ? y(e) : n(e)
    }
    function E(t) {
        return t === 62 ? (e.consume(t),
        D) : n(t)
    }
    function D(t) {
        return t === null || X(t) ? O(t) : Q(t) ? (e.consume(t),
        D) : n(t)
    }
    function O(t) {
        return t === 45 && i === 2 ? (e.consume(t),
        re) : t === 60 && i === 1 ? (e.consume(t),
        k) : t === 62 && i === 4 ? (e.consume(t),
        oe) : t === 63 && i === 3 ? (e.consume(t),
        ae) : t === 93 && i === 5 ? (e.consume(t),
        A) : X(t) && (i === 6 || i === 7) ? (e.exit(`htmlFlowData`),
        e.check(Ih, j, ee)(t)) : t === null || X(t) ? (e.exit(`htmlFlowData`),
        ee(t)) : (e.consume(t),
        O)
    }
    function ee(t) {
        return e.check(Lh, te, j)(t)
    }
    function te(t) {
        return e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        ne
    }
    function ne(t) {
        return t === null || X(t) ? ee(t) : (e.enter(`htmlFlowData`),
        O(t))
    }
    function re(t) {
        return t === 45 ? (e.consume(t),
        ae) : O(t)
    }
    function k(t) {
        return t === 47 ? (e.consume(t),
        o = ``,
        ie) : O(t)
    }
    function ie(t) {
        if (t === 62) {
            let n = o.toLowerCase();
            return Ph.includes(n) ? (e.consume(t),
            oe) : O(t)
        }
        return bd(t) && o.length < 8 ? (e.consume(t),
        o += String.fromCharCode(t),
        ie) : O(t)
    }
    function A(t) {
        return t === 93 ? (e.consume(t),
        ae) : O(t)
    }
    function ae(t) {
        return t === 62 ? (e.consume(t),
        oe) : t === 45 && i === 2 ? (e.consume(t),
        ae) : O(t)
    }
    function oe(t) {
        return t === null || X(t) ? (e.exit(`htmlFlowData`),
        j(t)) : (e.consume(t),
        oe)
    }
    function j(n) {
        return e.exit(`htmlFlow`),
        t(n)
    }
}
function Bh(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return X(t) ? (e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        a) : n(t)
    }
    function a(e) {
        return r.parser.lazy[r.now().line] ? n(e) : t(e)
    }
}
function Vh(e, t, n) {
    return r;
    function r(r) {
        return e.enter(`lineEnding`),
        e.consume(r),
        e.exit(`lineEnding`),
        e.attempt(Um, t, n)
    }
}
var Hh = {
    name: `htmlText`,
    tokenize: Uh
};
function Uh(e, t, n) {
    let r = this, i, a, o;
    return s;
    function s(t) {
        return e.enter(`htmlText`),
        e.enter(`htmlTextData`),
        e.consume(t),
        c
    }
    function c(t) {
        return t === 33 ? (e.consume(t),
        l) : t === 47 ? (e.consume(t),
        x) : t === 63 ? (e.consume(t),
        y) : bd(t) ? (e.consume(t),
        w) : n(t)
    }
    function l(t) {
        return t === 45 ? (e.consume(t),
        u) : t === 91 ? (e.consume(t),
        a = 0,
        m) : bd(t) ? (e.consume(t),
        v) : n(t)
    }
    function u(t) {
        return t === 45 ? (e.consume(t),
        p) : n(t)
    }
    function d(t) {
        return t === null ? n(t) : t === 45 ? (e.consume(t),
        f) : X(t) ? (o = d,
        k(t)) : (e.consume(t),
        d)
    }
    function f(t) {
        return t === 45 ? (e.consume(t),
        p) : d(t)
    }
    function p(e) {
        return e === 62 ? re(e) : e === 45 ? f(e) : d(e)
    }
    function m(t) {
        return t === `CDATA[`.charCodeAt(a++) ? (e.consume(t),
        a === 6 ? h : m) : n(t)
    }
    function h(t) {
        return t === null ? n(t) : t === 93 ? (e.consume(t),
        g) : X(t) ? (o = h,
        k(t)) : (e.consume(t),
        h)
    }
    function g(t) {
        return t === 93 ? (e.consume(t),
        _) : h(t)
    }
    function _(t) {
        return t === 62 ? re(t) : t === 93 ? (e.consume(t),
        _) : h(t)
    }
    function v(t) {
        return t === null || t === 62 ? re(t) : X(t) ? (o = v,
        k(t)) : (e.consume(t),
        v)
    }
    function y(t) {
        return t === null ? n(t) : t === 63 ? (e.consume(t),
        b) : X(t) ? (o = y,
        k(t)) : (e.consume(t),
        y)
    }
    function b(e) {
        return e === 62 ? re(e) : y(e)
    }
    function x(t) {
        return bd(t) ? (e.consume(t),
        S) : n(t)
    }
    function S(t) {
        return t === 45 || xd(t) ? (e.consume(t),
        S) : C(t)
    }
    function C(t) {
        return X(t) ? (o = C,
        k(t)) : Q(t) ? (e.consume(t),
        C) : re(t)
    }
    function w(t) {
        return t === 45 || xd(t) ? (e.consume(t),
        w) : t === 47 || t === 62 || Z(t) ? T(t) : n(t)
    }
    function T(t) {
        return t === 47 ? (e.consume(t),
        re) : t === 58 || t === 95 || bd(t) ? (e.consume(t),
        E) : X(t) ? (o = T,
        k(t)) : Q(t) ? (e.consume(t),
        T) : re(t)
    }
    function E(t) {
        return t === 45 || t === 46 || t === 58 || t === 95 || xd(t) ? (e.consume(t),
        E) : D(t)
    }
    function D(t) {
        return t === 61 ? (e.consume(t),
        O) : X(t) ? (o = D,
        k(t)) : Q(t) ? (e.consume(t),
        D) : T(t)
    }
    function O(t) {
        return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t),
        i = t,
        ee) : X(t) ? (o = O,
        k(t)) : Q(t) ? (e.consume(t),
        O) : (e.consume(t),
        te)
    }
    function ee(t) {
        return t === i ? (e.consume(t),
        i = void 0,
        ne) : t === null ? n(t) : X(t) ? (o = ee,
        k(t)) : (e.consume(t),
        ee)
    }
    function te(t) {
        return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Z(t) ? T(t) : (e.consume(t),
        te)
    }
    function ne(e) {
        return e === 47 || e === 62 || Z(e) ? T(e) : n(e)
    }
    function re(r) {
        return r === 62 ? (e.consume(r),
        e.exit(`htmlTextData`),
        e.exit(`htmlText`),
        t) : n(r)
    }
    function k(t) {
        return e.exit(`htmlTextData`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        ie
    }
    function ie(t) {
        return Q(t) ? $(e, A, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : A(t)
    }
    function A(t) {
        return e.enter(`htmlTextData`),
        o(t)
    }
}
var Wh = {
    name: `labelEnd`,
    resolveAll: Jh,
    resolveTo: Yh,
    tokenize: Xh
}
  , Gh = {
    tokenize: Zh
}
  , Kh = {
    tokenize: Qh
}
  , qh = {
    tokenize: $h
};
function Jh(e) {
    let t = -1
      , n = [];
    for (; ++t < e.length; ) {
        let r = e[t][1];
        if (n.push(e[t]),
        r.type === `labelImage` || r.type === `labelLink` || r.type === `labelEnd`) {
            let e = r.type === `labelImage` ? 4 : 2;
            r.type = `data`,
            t += e
        }
    }
    return e.length !== n.length && am(e, 0, e.length, n),
    e
}
function Yh(e, t) {
    let n = e.length, r = 0, i, a, o, s;
    for (; n--; )
        if (i = e[n][1],
        a) {
            if (i.type === `link` || i.type === `labelLink` && i._inactive)
                break;
            e[n][0] === `enter` && i.type === `labelLink` && (i._inactive = !0)
        } else if (o) {
            if (e[n][0] === `enter` && (i.type === `labelImage` || i.type === `labelLink`) && !i._balanced && (a = n,
            i.type !== `labelLink`)) {
                r = 2;
                break
            }
        } else
            i.type === `labelEnd` && (o = n);
    let c = {
        type: e[a][1].type === `labelLink` ? `link` : `image`,
        start: {
            ...e[a][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    }
      , l = {
        type: `label`,
        start: {
            ...e[a][1].start
        },
        end: {
            ...e[o][1].end
        }
    }
      , u = {
        type: `labelText`,
        start: {
            ...e[a + r + 2][1].end
        },
        end: {
            ...e[o - 2][1].start
        }
    };
    return s = [[`enter`, c, t], [`enter`, l, t]],
    s = om(s, e.slice(a + 1, a + r + 3)),
    s = om(s, [[`enter`, u, t]]),
    s = om(s, Im(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)),
    s = om(s, [[`exit`, u, t], e[o - 2], e[o - 1], [`exit`, l, t]]),
    s = om(s, e.slice(o + 1)),
    s = om(s, [[`exit`, c, t]]),
    am(e, a, e.length, s),
    e
}
function Xh(e, t, n) {
    let r = this, i = r.events.length, a, o;
    for (; i--; )
        if ((r.events[i][1].type === `labelImage` || r.events[i][1].type === `labelLink`) && !r.events[i][1]._balanced) {
            a = r.events[i][1];
            break
        }
    return s;
    function s(t) {
        return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(lf(r.sliceSerialize({
            start: a.end,
            end: r.now()
        }))),
        e.enter(`labelEnd`),
        e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelEnd`),
        c) : n(t)
    }
    function c(t) {
        return t === 40 ? e.attempt(Gh, u, o ? u : d)(t) : t === 91 ? e.attempt(Kh, u, o ? l : d)(t) : o ? u(t) : d(t)
    }
    function l(t) {
        return e.attempt(qh, u, d)(t)
    }
    function u(e) {
        return t(e)
    }
    function d(e) {
        return a._balanced = !0,
        n(e)
    }
}
function Zh(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`resource`),
        e.enter(`resourceMarker`),
        e.consume(t),
        e.exit(`resourceMarker`),
        i
    }
    function i(t) {
        return Z(t) ? Ch(e, a)(t) : a(t)
    }
    function a(t) {
        return t === 41 ? u(t) : bh(e, o, s, `resourceDestination`, `resourceDestinationLiteral`, `resourceDestinationLiteralMarker`, `resourceDestinationRaw`, `resourceDestinationString`, 32)(t)
    }
    function o(t) {
        return Z(t) ? Ch(e, c)(t) : u(t)
    }
    function s(e) {
        return n(e)
    }
    function c(t) {
        return t === 34 || t === 39 || t === 40 ? Sh(e, l, n, `resourceTitle`, `resourceTitleMarker`, `resourceTitleString`)(t) : u(t)
    }
    function l(t) {
        return Z(t) ? Ch(e, u)(t) : u(t)
    }
    function u(r) {
        return r === 41 ? (e.enter(`resourceMarker`),
        e.consume(r),
        e.exit(`resourceMarker`),
        e.exit(`resource`),
        t) : n(r)
    }
}
function Qh(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return xh.call(r, e, a, o, `reference`, `referenceMarker`, `referenceString`)(t)
    }
    function a(e) {
        return r.parser.defined.includes(lf(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
    }
    function o(e) {
        return n(e)
    }
}
function $h(e, t, n) {
    return r;
    function r(t) {
        return e.enter(`reference`),
        e.enter(`referenceMarker`),
        e.consume(t),
        e.exit(`referenceMarker`),
        i
    }
    function i(r) {
        return r === 93 ? (e.enter(`referenceMarker`),
        e.consume(r),
        e.exit(`referenceMarker`),
        e.exit(`reference`),
        t) : n(r)
    }
}
var eg = {
    name: `labelStartImage`,
    resolveAll: Wh.resolveAll,
    tokenize: tg
};
function tg(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return e.enter(`labelImage`),
        e.enter(`labelImageMarker`),
        e.consume(t),
        e.exit(`labelImageMarker`),
        a
    }
    function a(t) {
        return t === 91 ? (e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelImage`),
        o) : n(t)
    }
    function o(e) {
        return e === 94 && `_hiddenFootnoteSupport`in r.parser.constructs ? n(e) : t(e)
    }
}
var ng = {
    name: `labelStartLink`,
    resolveAll: Wh.resolveAll,
    tokenize: rg
};
function rg(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return e.enter(`labelLink`),
        e.enter(`labelMarker`),
        e.consume(t),
        e.exit(`labelMarker`),
        e.exit(`labelLink`),
        a
    }
    function a(e) {
        return e === 94 && `_hiddenFootnoteSupport`in r.parser.constructs ? n(e) : t(e)
    }
}
var ig = {
    name: `lineEnding`,
    tokenize: ag
};
function ag(e, t) {
    return n;
    function n(n) {
        return e.enter(`lineEnding`),
        e.consume(n),
        e.exit(`lineEnding`),
        $(e, t, `linePrefix`)
    }
}
var og = {
    name: `thematicBreak`,
    tokenize: sg
};
function sg(e, t, n) {
    let r = 0, i;
    return a;
    function a(t) {
        return e.enter(`thematicBreak`),
        o(t)
    }
    function o(e) {
        return i = e,
        s(e)
    }
    function s(a) {
        return a === i ? (e.enter(`thematicBreakSequence`),
        c(a)) : r >= 3 && (a === null || X(a)) ? (e.exit(`thematicBreak`),
        t(a)) : n(a)
    }
    function c(t) {
        return t === i ? (e.consume(t),
        r++,
        c) : (e.exit(`thematicBreakSequence`),
        Q(t) ? $(e, s, `whitespace`)(t) : s(t))
    }
}
var cg = {
    continuation: {
        tokenize: fg
    },
    exit: mg,
    name: `list`,
    tokenize: dg
}
  , lg = {
    partial: !0,
    tokenize: hg
}
  , ug = {
    partial: !0,
    tokenize: pg
};
function dg(e, t, n) {
    let r = this
      , i = r.events[r.events.length - 1]
      , a = i && i[1].type === `linePrefix` ? i[2].sliceSerialize(i[1], !0).length : 0
      , o = 0;
    return s;
    function s(t) {
        let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? `listUnordered` : `listOrdered`);
        if (i === `listUnordered` ? !r.containerState.marker || t === r.containerState.marker : wd(t)) {
            if (r.containerState.type || (r.containerState.type = i,
            e.enter(i, {
                _container: !0
            })),
            i === `listUnordered`)
                return e.enter(`listItemPrefix`),
                t === 42 || t === 45 ? e.check(og, n, l)(t) : l(t);
            if (!r.interrupt || t === 49)
                return e.enter(`listItemPrefix`),
                e.enter(`listItemValue`),
                c(t)
        }
        return n(t)
    }
    function c(t) {
        return wd(t) && ++o < 10 ? (e.consume(t),
        c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit(`listItemValue`),
        l(t)) : n(t)
    }
    function l(t) {
        return e.enter(`listItemMarker`),
        e.consume(t),
        e.exit(`listItemMarker`),
        r.containerState.marker = r.containerState.marker || t,
        e.check(Um, r.interrupt ? n : u, e.attempt(lg, f, d))
    }
    function u(e) {
        return r.containerState.initialBlankLine = !0,
        a++,
        f(e)
    }
    function d(t) {
        return Q(t) ? (e.enter(`listItemPrefixWhitespace`),
        e.consume(t),
        e.exit(`listItemPrefixWhitespace`),
        f) : n(t)
    }
    function f(n) {
        return r.containerState.size = a + r.sliceSerialize(e.exit(`listItemPrefix`), !0).length,
        t(n)
    }
}
function fg(e, t, n) {
    let r = this;
    return r.containerState._closeFlow = void 0,
    e.check(Um, i, a);
    function i(n) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine,
        $(e, t, `listItemIndent`, r.containerState.size + 1)(n)
    }
    function a(n) {
        return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0,
        r.containerState.initialBlankLine = void 0,
        o(n)) : (r.containerState.furtherBlankLines = void 0,
        r.containerState.initialBlankLine = void 0,
        e.attempt(ug, t, o)(n))
    }
    function o(i) {
        return r.containerState._closeFlow = !0,
        r.interrupt = void 0,
        $(e, e.attempt(cg, t, n), `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(i)
    }
}
function pg(e, t, n) {
    let r = this;
    return $(e, i, `listItemIndent`, r.containerState.size + 1);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return i && i[1].type === `listItemIndent` && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
    }
}
function mg(e) {
    e.exit(this.containerState.type)
}
function hg(e, t, n) {
    let r = this;
    return $(e, i, `listItemPrefixWhitespace`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 5);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return !Q(e) && i && i[1].type === `listItemPrefixWhitespace` ? t(e) : n(e)
    }
}
var gg = {
    name: `setextUnderline`,
    resolveTo: _g,
    tokenize: vg
};
function _g(e, t) {
    let n = e.length, r, i, a;
    for (; n--; )
        if (e[n][0] === `enter`) {
            if (e[n][1].type === `content`) {
                r = n;
                break
            }
            e[n][1].type === `paragraph` && (i = n)
        } else
            e[n][1].type === `content` && e.splice(n, 1),
            !a && e[n][1].type === `definition` && (a = n);
    let o = {
        type: `setextHeading`,
        start: {
            ...e[r][1].start
        },
        end: {
            ...e[e.length - 1][1].end
        }
    };
    return e[i][1].type = `setextHeadingText`,
    a ? (e.splice(i, 0, [`enter`, o, t]),
    e.splice(a + 1, 0, [`exit`, e[r][1], t]),
    e[r][1].end = {
        ...e[a][1].end
    }) : e[r][1] = o,
    e.push([`exit`, o, t]),
    e
}
function vg(e, t, n) {
    let r = this, i;
    return a;
    function a(t) {
        let a = r.events.length, s;
        for (; a--; )
            if (r.events[a][1].type !== `lineEnding` && r.events[a][1].type !== `linePrefix` && r.events[a][1].type !== `content`) {
                s = r.events[a][1].type === `paragraph`;
                break
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter(`setextHeadingLine`),
        i = t,
        o(t)) : n(t)
    }
    function o(t) {
        return e.enter(`setextHeadingLineSequence`),
        s(t)
    }
    function s(t) {
        return t === i ? (e.consume(t),
        s) : (e.exit(`setextHeadingLineSequence`),
        Q(t) ? $(e, c, `lineSuffix`)(t) : c(t))
    }
    function c(r) {
        return r === null || X(r) ? (e.exit(`setextHeadingLine`),
        t(r)) : n(r)
    }
}
var yg = {
    tokenize: Dg,
    partial: !0
};
function bg() {
    return {
        document: {
            91: {
                name: `gfmFootnoteDefinition`,
                tokenize: wg,
                continuation: {
                    tokenize: Tg
                },
                exit: Eg
            }
        },
        text: {
            91: {
                name: `gfmFootnoteCall`,
                tokenize: Cg
            },
            93: {
                name: `gfmPotentialFootnoteCall`,
                add: `after`,
                tokenize: xg,
                resolveTo: Sg
            }
        }
    }
}
function xg(e, t, n) {
    let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
    for (; i--; ) {
        let e = r.events[i][1];
        if (e.type === `labelImage`) {
            o = e;
            break
        }
        if (e.type === `gfmFootnoteCall` || e.type === `labelLink` || e.type === `label` || e.type === `image` || e.type === `link`)
            break
    }
    return s;
    function s(i) {
        if (!o || !o._balanced)
            return n(i);
        let s = lf(r.sliceSerialize({
            start: o.end,
            end: r.now()
        }));
        return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(i),
        e.exit(`gfmFootnoteCallLabelMarker`),
        t(i))
    }
}
function Sg(e, t) {
    let n = e.length;
    for (; n--; )
        if (e[n][1].type === `labelImage` && e[n][0] === `enter`) {
            e[n][1];
            break
        }
    e[n + 1][1].type = `data`,
    e[n + 3][1].type = `gfmFootnoteCallLabelMarker`;
    let r = {
        type: `gfmFootnoteCall`,
        start: Object.assign({}, e[n + 3][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    }
      , i = {
        type: `gfmFootnoteCallMarker`,
        start: Object.assign({}, e[n + 3][1].end),
        end: Object.assign({}, e[n + 3][1].end)
    };
    i.end.column++,
    i.end.offset++,
    i.end._bufferIndex++;
    let a = {
        type: `gfmFootnoteCallString`,
        start: Object.assign({}, i.end),
        end: Object.assign({}, e[e.length - 1][1].start)
    }
      , o = {
        type: `chunkString`,
        contentType: `string`,
        start: Object.assign({}, a.start),
        end: Object.assign({}, a.end)
    }
      , s = [e[n + 1], e[n + 2], [`enter`, r, t], e[n + 3], e[n + 4], [`enter`, i, t], [`exit`, i, t], [`enter`, a, t], [`enter`, o, t], [`exit`, o, t], [`exit`, a, t], e[e.length - 2], e[e.length - 1], [`exit`, r, t]];
    return e.splice(n, e.length - n + 1, ...s),
    e
}
function Cg(e, t, n) {
    let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
    return s;
    function s(t) {
        return e.enter(`gfmFootnoteCall`),
        e.enter(`gfmFootnoteCallLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallLabelMarker`),
        c
    }
    function c(t) {
        return t === 94 ? (e.enter(`gfmFootnoteCallMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteCallMarker`),
        e.enter(`gfmFootnoteCallString`),
        e.enter(`chunkString`).contentType = `string`,
        l) : n(t)
    }
    function l(s) {
        if (a > 999 || s === 93 && !o || s === null || s === 91 || Z(s))
            return n(s);
        if (s === 93) {
            e.exit(`chunkString`);
            let a = e.exit(`gfmFootnoteCallString`);
            return i.includes(lf(r.sliceSerialize(a))) ? (e.enter(`gfmFootnoteCallLabelMarker`),
            e.consume(s),
            e.exit(`gfmFootnoteCallLabelMarker`),
            e.exit(`gfmFootnoteCall`),
            t) : n(s)
        }
        return Z(s) || (o = !0),
        a++,
        e.consume(s),
        s === 92 ? u : l
    }
    function u(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        a++,
        l) : l(t)
    }
}
function wg(e, t, n) {
    let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
    return c;
    function c(t) {
        return e.enter(`gfmFootnoteDefinition`)._container = !0,
        e.enter(`gfmFootnoteDefinitionLabel`),
        e.enter(`gfmFootnoteDefinitionLabelMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionLabelMarker`),
        l
    }
    function l(t) {
        return t === 94 ? (e.enter(`gfmFootnoteDefinitionMarker`),
        e.consume(t),
        e.exit(`gfmFootnoteDefinitionMarker`),
        e.enter(`gfmFootnoteDefinitionLabelString`),
        e.enter(`chunkString`).contentType = `string`,
        u) : n(t)
    }
    function u(t) {
        if (o > 999 || t === 93 && !s || t === null || t === 91 || Z(t))
            return n(t);
        if (t === 93) {
            e.exit(`chunkString`);
            let n = e.exit(`gfmFootnoteDefinitionLabelString`);
            return a = lf(r.sliceSerialize(n)),
            e.enter(`gfmFootnoteDefinitionLabelMarker`),
            e.consume(t),
            e.exit(`gfmFootnoteDefinitionLabelMarker`),
            e.exit(`gfmFootnoteDefinitionLabel`),
            f
        }
        return Z(t) || (s = !0),
        o++,
        e.consume(t),
        t === 92 ? d : u
    }
    function d(t) {
        return t === 91 || t === 92 || t === 93 ? (e.consume(t),
        o++,
        u) : u(t)
    }
    function f(t) {
        return t === 58 ? (e.enter(`definitionMarker`),
        e.consume(t),
        e.exit(`definitionMarker`),
        i.includes(a) || i.push(a),
        $(e, p, `gfmFootnoteDefinitionWhitespace`)) : n(t)
    }
    function p(e) {
        return t(e)
    }
}
function Tg(e, t, n) {
    return e.check(Um, t, e.attempt(yg, t, n))
}
function Eg(e) {
    e.exit(`gfmFootnoteDefinition`)
}
function Dg(e, t, n) {
    let r = this;
    return $(e, i, `gfmFootnoteDefinitionIndent`, 5);
    function i(e) {
        let i = r.events[r.events.length - 1];
        return i && i[1].type === `gfmFootnoteDefinitionIndent` && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e)
    }
}
function Og(e) {
    let t = (e || {}).singleTilde
      , n = {
        name: `strikethrough`,
        tokenize: i,
        resolveAll: r
    };
    return t ??= !0,
    {
        text: {
            126: n
        },
        insideSpan: {
            null: [n]
        },
        attentionMarkers: {
            null: [126]
        }
    };
    function r(e, t) {
        let n = -1;
        for (; ++n < e.length; )
            if (e[n][0] === `enter` && e[n][1].type === `strikethroughSequenceTemporary` && e[n][1]._close) {
                let r = n;
                for (; r--; )
                    if (e[r][0] === `exit` && e[r][1].type === `strikethroughSequenceTemporary` && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
                        e[n][1].type = `strikethroughSequence`,
                        e[r][1].type = `strikethroughSequence`;
                        let i = {
                            type: `strikethrough`,
                            start: Object.assign({}, e[r][1].start),
                            end: Object.assign({}, e[n][1].end)
                        }
                          , a = {
                            type: `strikethroughText`,
                            start: Object.assign({}, e[r][1].end),
                            end: Object.assign({}, e[n][1].start)
                        }
                          , o = [[`enter`, i, t], [`enter`, e[r][1], t], [`exit`, e[r][1], t], [`enter`, a, t]]
                          , s = t.parser.constructs.insideSpan.null;
                        s && am(o, o.length, 0, Im(s, e.slice(r + 1, n), t)),
                        am(o, o.length, 0, [[`exit`, a, t], [`enter`, e[n][1], t], [`exit`, e[n][1], t], [`exit`, i, t]]),
                        am(e, r - 1, n - r + 3, o),
                        n = r + o.length - 2;
                        break
                    }
            }
        for (n = -1; ++n < e.length; )
            e[n][1].type === `strikethroughSequenceTemporary` && (e[n][1].type = `data`);
        return e
    }
    function i(e, n, r) {
        let i = this.previous
          , a = this.events
          , o = 0;
        return s;
        function s(t) {
            return i === 126 && a[a.length - 1][1].type !== `characterEscape` ? r(t) : (e.enter(`strikethroughSequenceTemporary`),
            c(t))
        }
        function c(a) {
            let s = Yf(i);
            if (a === 126)
                return o > 1 ? r(a) : (e.consume(a),
                o++,
                c);
            if (o < 2 && !t)
                return r(a);
            let l = e.exit(`strikethroughSequenceTemporary`)
              , u = Yf(a);
            return l._open = !u || u === 2 && !!s,
            l._close = !s || s === 2 && !!u,
            n(a)
        }
    }
}
var kg = class {
    constructor() {
        this.map = []
    }
    add(e, t, n) {
        Ag(this, e, t, n)
    }
    consume(e) {
        if (this.map.sort(function(e, t) {
            return e[0] - t[0]
        }),
        this.map.length === 0)
            return;
        let t = this.map.length
          , n = [];
        for (; t > 0; )
            --t,
            n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
            e.length = this.map[t][0];
        n.push(e.slice()),
        e.length = 0;
        let r = n.pop();
        for (; r; ) {
            for (let t of r)
                e.push(t);
            r = n.pop()
        }
        this.map.length = 0
    }
}
;
function Ag(e, t, n, r) {
    let i = 0;
    if (!(n === 0 && r.length === 0)) {
        for (; i < e.map.length; ) {
            if (e.map[i][0] === t) {
                e.map[i][1] += n,
                e.map[i][2].push(...r);
                return
            }
            i += 1
        }
        e.map.push([t, n, r])
    }
}
function jg(e, t) {
    let n = !1
      , r = [];
    for (; t < e.length; ) {
        let i = e[t];
        if (n) {
            if (i[0] === `enter`)
                i[1].type === `tableContent` && r.push(e[t + 1][1].type === `tableDelimiterMarker` ? `left` : `none`);
            else if (i[1].type === `tableContent`) {
                if (e[t - 1][1].type === `tableDelimiterMarker`) {
                    let e = r.length - 1;
                    r[e] = r[e] === `left` ? `center` : `right`
                }
            } else if (i[1].type === `tableDelimiterRow`)
                break
        } else
            i[0] === `enter` && i[1].type === `tableDelimiterRow` && (n = !0);
        t += 1
    }
    return r
}
function Mg() {
    return {
        flow: {
            null: {
                name: `table`,
                tokenize: Ng,
                resolveAll: Pg
            }
        }
    }
}
function Ng(e, t, n) {
    let r = this, i = 0, a = 0, o;
    return s;
    function s(e) {
        let t = r.events.length - 1;
        for (; t > -1; ) {
            let e = r.events[t][1].type;
            if (e === `lineEnding` || e === `linePrefix`)
                t--;
            else
                break
        }
        let i = t > -1 ? r.events[t][1].type : null
          , a = i === `tableHead` || i === `tableRow` ? S : c;
        return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e)
    }
    function c(t) {
        return e.enter(`tableHead`),
        e.enter(`tableRow`),
        l(t)
    }
    function l(e) {
        return e === 124 ? u(e) : (o = !0,
        a += 1,
        u(e))
    }
    function u(t) {
        return t === null ? n(t) : X(t) ? a > 1 ? (a = 0,
        r.interrupt = !0,
        e.exit(`tableRow`),
        e.enter(`lineEnding`),
        e.consume(t),
        e.exit(`lineEnding`),
        p) : n(t) : Q(t) ? $(e, u, `whitespace`)(t) : (a += 1,
        o && (o = !1,
        i += 1),
        t === 124 ? (e.enter(`tableCellDivider`),
        e.consume(t),
        e.exit(`tableCellDivider`),
        o = !0,
        u) : (e.enter(`data`),
        d(t)))
    }
    function d(t) {
        return t === null || t === 124 || Z(t) ? (e.exit(`data`),
        u(t)) : (e.consume(t),
        t === 92 ? f : d)
    }
    function f(t) {
        return t === 92 || t === 124 ? (e.consume(t),
        d) : d(t)
    }
    function p(t) {
        return r.interrupt = !1,
        r.parser.lazy[r.now().line] ? n(t) : (e.enter(`tableDelimiterRow`),
        o = !1,
        Q(t) ? $(e, m, `linePrefix`, r.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)(t) : m(t))
    }
    function m(t) {
        return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0,
        e.enter(`tableCellDivider`),
        e.consume(t),
        e.exit(`tableCellDivider`),
        h) : x(t)
    }
    function h(t) {
        return Q(t) ? $(e, g, `whitespace`)(t) : g(t)
    }
    function g(t) {
        return t === 58 ? (a += 1,
        o = !0,
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        _) : t === 45 ? (a += 1,
        _(t)) : t === null || X(t) ? b(t) : x(t)
    }
    function _(t) {
        return t === 45 ? (e.enter(`tableDelimiterFiller`),
        v(t)) : x(t)
    }
    function v(t) {
        return t === 45 ? (e.consume(t),
        v) : t === 58 ? (o = !0,
        e.exit(`tableDelimiterFiller`),
        e.enter(`tableDelimiterMarker`),
        e.consume(t),
        e.exit(`tableDelimiterMarker`),
        y) : (e.exit(`tableDelimiterFiller`),
        y(t))
    }
    function y(t) {
        return Q(t) ? $(e, b, `whitespace`)(t) : b(t)
    }
    function b(n) {
        return n === 124 ? m(n) : n === null || X(n) ? !o || i !== a ? x(n) : (e.exit(`tableDelimiterRow`),
        e.exit(`tableHead`),
        t(n)) : x(n)
    }
    function x(e) {
        return n(e)
    }
    function S(t) {
        return e.enter(`tableRow`),
        C(t)
    }
    function C(n) {
        return n === 124 ? (e.enter(`tableCellDivider`),
        e.consume(n),
        e.exit(`tableCellDivider`),
        C) : n === null || X(n) ? (e.exit(`tableRow`),
        t(n)) : Q(n) ? $(e, C, `whitespace`)(n) : (e.enter(`data`),
        w(n))
    }
    function w(t) {
        return t === null || t === 124 || Z(t) ? (e.exit(`data`),
        C(t)) : (e.consume(t),
        t === 92 ? T : w)
    }
    function T(t) {
        return t === 92 || t === 124 ? (e.consume(t),
        w) : w(t)
    }
}
function Pg(e, t) {
    let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], o = [0, 0, 0, 0], s = !1, c = 0, l, u, d, f = new kg;
    for (; ++n < e.length; ) {
        let p = e[n]
          , m = p[1];
        p[0] === `enter` ? m.type === `tableHead` ? (s = !1,
        c !== 0 && (Ig(f, t, c, l, u),
        u = void 0,
        c = 0),
        l = {
            type: `table`,
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end)
        },
        f.add(n, 0, [[`enter`, l, t]])) : m.type === `tableRow` || m.type === `tableDelimiterRow` ? (r = !0,
        d = void 0,
        a = [0, 0, 0, 0],
        o = [0, n + 1, 0, 0],
        s && (s = !1,
        u = {
            type: `tableBody`,
            start: Object.assign({}, m.start),
            end: Object.assign({}, m.end)
        },
        f.add(n, 0, [[`enter`, u, t]])),
        i = m.type === `tableDelimiterRow` ? 2 : u ? 3 : 1) : i && (m.type === `data` || m.type === `tableDelimiterMarker` || m.type === `tableDelimiterFiller`) ? (r = !1,
        o[2] === 0 && (a[1] !== 0 && (o[0] = o[1],
        d = Fg(f, t, a, i, void 0, d),
        a = [0, 0, 0, 0]),
        o[2] = n)) : m.type === `tableCellDivider` && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1],
        d = Fg(f, t, a, i, void 0, d)),
        a = o,
        o = [a[1], n, 0, 0])) : m.type === `tableHead` ? (s = !0,
        c = n) : m.type === `tableRow` || m.type === `tableDelimiterRow` ? (c = n,
        a[1] === 0 ? o[1] !== 0 && (d = Fg(f, t, o, i, n, d)) : (o[0] = o[1],
        d = Fg(f, t, a, i, n, d)),
        i = 0) : i && (m.type === `data` || m.type === `tableDelimiterMarker` || m.type === `tableDelimiterFiller`) && (o[3] = n)
    }
    for (c !== 0 && Ig(f, t, c, l, u),
    f.consume(t.events),
    n = -1; ++n < t.events.length; ) {
        let e = t.events[n];
        e[0] === `enter` && e[1].type === `table` && (e[1]._align = jg(t.events, n))
    }
    return e
}
function Fg(e, t, n, r, i, a) {
    let o = r === 1 ? `tableHeader` : r === 2 ? `tableDelimiter` : `tableData`;
    n[0] !== 0 && (a.end = Object.assign({}, Lg(t.events, n[0])),
    e.add(n[0], 0, [[`exit`, a, t]]));
    let s = Lg(t.events, n[1]);
    if (a = {
        type: o,
        start: Object.assign({}, s),
        end: Object.assign({}, s)
    },
    e.add(n[1], 0, [[`enter`, a, t]]),
    n[2] !== 0) {
        let i = Lg(t.events, n[2])
          , a = Lg(t.events, n[3])
          , o = {
            type: `tableContent`,
            start: Object.assign({}, i),
            end: Object.assign({}, a)
        };
        if (e.add(n[2], 0, [[`enter`, o, t]]),
        r !== 2) {
            let r = t.events[n[2]]
              , i = t.events[n[3]];
            if (r[1].end = Object.assign({}, i[1].end),
            r[1].type = `chunkText`,
            r[1].contentType = `text`,
            n[3] > n[2] + 1) {
                let t = n[2] + 1
                  , r = n[3] - n[2] - 1;
                e.add(t, r, [])
            }
        }
        e.add(n[3] + 1, 0, [[`exit`, o, t]])
    }
    return i !== void 0 && (a.end = Object.assign({}, Lg(t.events, i)),
    e.add(i, 0, [[`exit`, a, t]]),
    a = void 0),
    a
}
function Ig(e, t, n, r, i) {
    let a = []
      , o = Lg(t.events, n);
    i && (i.end = Object.assign({}, o),
    a.push([`exit`, i, t])),
    r.end = Object.assign({}, o),
    a.push([`exit`, r, t]),
    e.add(n + 1, 0, a)
}
function Lg(e, t) {
    let n = e[t]
      , r = n[0] === `enter` ? `start` : `end`;
    return n[1][r]
}
var Rg = {
    name: `tasklistCheck`,
    tokenize: Bg
};
function zg() {
    return {
        text: {
            91: Rg
        }
    }
}
function Bg(e, t, n) {
    let r = this;
    return i;
    function i(t) {
        return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter(`taskListCheck`),
        e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        a)
    }
    function a(t) {
        return Z(t) ? (e.enter(`taskListCheckValueUnchecked`),
        e.consume(t),
        e.exit(`taskListCheckValueUnchecked`),
        o) : t === 88 || t === 120 ? (e.enter(`taskListCheckValueChecked`),
        e.consume(t),
        e.exit(`taskListCheckValueChecked`),
        o) : n(t)
    }
    function o(t) {
        return t === 93 ? (e.enter(`taskListCheckMarker`),
        e.consume(t),
        e.exit(`taskListCheckMarker`),
        e.exit(`taskListCheck`),
        s) : n(t)
    }
    function s(r) {
        return X(r) ? t(r) : Q(r) ? e.check({
            tokenize: Vg
        }, t, n)(r) : n(r)
    }
}
function Vg(e, t, n) {
    return $(e, r, `whitespace`);
    function r(e) {
        return e === null ? n(e) : t(e)
    }
}
function Hg(e) {
    return cm([bm(), bg(), Og(e), Mg(), zg()])
}
var Ug = {};
function Wg(e) {
    let t = this
      , n = e || Ug
      , r = t.data()
      , i = r.micromarkExtensions ||= []
      , a = r.fromMarkdownExtensions ||= []
      , o = r.toMarkdownExtensions ||= [];
    i.push(Hg(n)),
    a.push(rm()),
    o.push(im(n))
}
var Gg = {
    tokenize: Kg
};
function Kg(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
    return t;
    function r(n) {
        if (n === null) {
            e.consume(n);
            return
        }
        return e.enter(`lineEnding`),
        e.consume(n),
        e.exit(`lineEnding`),
        $(e, t, `linePrefix`)
    }
    function i(t) {
        return e.enter(`paragraph`),
        a(t)
    }
    function a(t) {
        let r = e.enter(`chunkText`, {
            contentType: `text`,
            previous: n
        });
        return n && (n.next = r),
        n = r,
        o(t)
    }
    function o(t) {
        if (t === null) {
            e.exit(`chunkText`),
            e.exit(`paragraph`),
            e.consume(t);
            return
        }
        return X(t) ? (e.consume(t),
        e.exit(`chunkText`),
        a) : (e.consume(t),
        o)
    }
}
var qg = {
    tokenize: Yg
}
  , Jg = {
    tokenize: Xg
};
function Yg(e) {
    let t = this, n = [], r = 0, i, a, o;
    return s;
    function s(i) {
        if (r < n.length) {
            let a = n[r];
            return t.containerState = a[1],
            e.attempt(a[0].continuation, c, l)(i)
        }
        return l(i)
    }
    function c(e) {
        if (r++,
        t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0,
            i && v();
            let n = t.events.length, a = n, o;
            for (; a--; )
                if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
                    o = t.events[a][1].end;
                    break
                }
            _(r);
            let s = n;
            for (; s < t.events.length; )
                t.events[s][1].end = {
                    ...o
                },
                s++;
            return am(t.events, a + 1, 0, t.events.slice(n)),
            t.events.length = s,
            l(e)
        }
        return s(e)
    }
    function l(a) {
        if (r === n.length) {
            if (!i)
                return f(a);
            if (i.currentConstruct && i.currentConstruct.concrete)
                return m(a);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {},
        e.check(Jg, u, d)(a)
    }
    function u(e) {
        return i && v(),
        _(r),
        f(e)
    }
    function d(e) {
        return t.parser.lazy[t.now().line] = r !== n.length,
        o = t.now().offset,
        m(e)
    }
    function f(n) {
        return t.containerState = {},
        e.attempt(Jg, p, m)(n)
    }
    function p(e) {
        return r++,
        n.push([t.currentConstruct, t.containerState]),
        f(e)
    }
    function m(n) {
        if (n === null) {
            i && v(),
            _(0),
            e.consume(n);
            return
        }
        return i ||= t.parser.flow(t.now()),
        e.enter(`chunkFlow`, {
            _tokenizer: i,
            contentType: `flow`,
            previous: a
        }),
        h(n)
    }
    function h(n) {
        if (n === null) {
            g(e.exit(`chunkFlow`), !0),
            _(0),
            e.consume(n);
            return
        }
        return X(n) ? (e.consume(n),
        g(e.exit(`chunkFlow`)),
        r = 0,
        t.interrupt = void 0,
        s) : (e.consume(n),
        h)
    }
    function g(e, n) {
        let s = t.sliceStream(e);
        if (n && s.push(null),
        e.previous = a,
        a && (a.next = e),
        a = e,
        i.defineSkip(e.start),
        i.write(s),
        t.parser.lazy[e.start.line]) {
            let e = i.events.length;
            for (; e--; )
                if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o))
                    return;
            let n = t.events.length, a = n, s, c;
            for (; a--; )
                if (t.events[a][0] === `exit` && t.events[a][1].type === `chunkFlow`) {
                    if (s) {
                        c = t.events[a][1].end;
                        break
                    }
                    s = !0
                }
            for (_(r),
            e = n; e < t.events.length; )
                t.events[e][1].end = {
                    ...c
                },
                e++;
            am(t.events, a + 1, 0, t.events.slice(n)),
            t.events.length = e
        }
    }
    function _(r) {
        let i = n.length;
        for (; i-- > r; ) {
            let r = n[i];
            t.containerState = r[1],
            r[0].exit.call(t, e)
        }
        n.length = r
    }
    function v() {
        i.write([null]),
        a = void 0,
        i = void 0,
        t.containerState._closeFlow = void 0
    }
}
function Xg(e, t, n) {
    return $(e, e.attempt(this.parser.constructs.document, t, n), `linePrefix`, this.parser.constructs.disable.null.includes(`codeIndented`) ? void 0 : 4)
}
var Zg = {
    tokenize: Qg
};
function Qg(e) {
    let t = this
      , n = e.attempt(Um, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(hh, i)), `linePrefix`)));
    return n;
    function r(r) {
        if (r === null) {
            e.consume(r);
            return
        }
        return e.enter(`lineEndingBlank`),
        e.consume(r),
        e.exit(`lineEndingBlank`),
        t.currentConstruct = void 0,
        n
    }
    function i(r) {
        if (r === null) {
            e.consume(r);
            return
        }
        return e.enter(`lineEnding`),
        e.consume(r),
        e.exit(`lineEnding`),
        t.currentConstruct = void 0,
        n
    }
}
var $g = {
    resolveAll: r_()
}
  , e_ = n_(`string`)
  , t_ = n_(`text`);
function n_(e) {
    return {
        resolveAll: r_(e === `text` ? i_ : void 0),
        tokenize: t
    };
    function t(t) {
        let n = this
          , r = this.parser.constructs[e]
          , i = t.attempt(r, a, o);
        return a;
        function a(e) {
            return c(e) ? i(e) : o(e)
        }
        function o(e) {
            if (e === null) {
                t.consume(e);
                return
            }
            return t.enter(`data`),
            t.consume(e),
            s
        }
        function s(e) {
            return c(e) ? (t.exit(`data`),
            i(e)) : (t.consume(e),
            s)
        }
        function c(e) {
            if (e === null)
                return !0;
            let t = r[e]
              , i = -1;
            if (t)
                for (; ++i < t.length; ) {
                    let e = t[i];
                    if (!e.previous || e.previous.call(n, n.previous))
                        return !0
                }
            return !1
        }
    }
}
function r_(e) {
    return t;
    function t(t, n) {
        let r = -1, i;
        for (; ++r <= t.length; )
            i === void 0 ? t[r] && t[r][1].type === `data` && (i = r,
            r++) : (!t[r] || t[r][1].type !== `data`) && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end,
            t.splice(i + 2, r - i - 2),
            r = i + 2),
            i = void 0);
        return e ? e(t, n) : t
    }
}
function i_(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
        if ((n === e.length || e[n][1].type === `lineEnding`) && e[n - 1][1].type === `data`) {
            let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
            for (; a--; ) {
                let e = i[a];
                if (typeof e == `string`) {
                    for (o = e.length; e.charCodeAt(o - 1) === 32; )
                        s++,
                        o--;
                    if (o)
                        break;
                    o = -1
                } else if (e === -2)
                    c = !0,
                    s++;
                else if (e !== -1) {
                    a++;
                    break
                }
            }
            if (t._contentTypeTextTrailing && n === e.length && (s = 0),
            s) {
                let i = {
                    type: n === e.length || c || s < 2 ? `lineSuffix` : `hardBreakTrailing`,
                    start: {
                        _bufferIndex: a ? o : r.start._bufferIndex + o,
                        _index: r.start._index + a,
                        line: r.end.line,
                        column: r.end.column - s,
                        offset: r.end.offset - s
                    },
                    end: {
                        ...r.end
                    }
                };
                r.end = {
                    ...i.start
                },
                r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [`enter`, i, t], [`exit`, i, t]),
                n += 2)
            }
            n++
        }
    return e
}
var a_ = s({
    attentionMarkers: () => p_,
    contentInitial: () => s_,
    disable: () => m_,
    document: () => o_,
    flow: () => l_,
    flowInitial: () => c_,
    insideSpan: () => f_,
    string: () => u_,
    text: () => d_
})
  , o_ = {
    42: cg,
    43: cg,
    45: cg,
    48: cg,
    49: cg,
    50: cg,
    51: cg,
    52: cg,
    53: cg,
    54: cg,
    55: cg,
    56: cg,
    57: cg,
    62: Gm
}
  , s_ = {
    91: wh
}
  , c_ = {
    [-2]: rh,
    [-1]: rh,
    32: rh
}
  , l_ = {
    35: Ah,
    42: og,
    45: [gg, og],
    60: Fh,
    61: gg,
    95: og,
    96: eh,
    126: eh
}
  , u_ = {
    38: Zm,
    92: Ym
}
  , d_ = {
    [-5]: ig,
    [-4]: ig,
    [-3]: ig,
    33: eg,
    38: Zm,
    42: Lm,
    60: [Vm, Hh],
    91: ng,
    92: [Oh, Ym],
    93: Wh,
    95: Lm,
    96: sh
}
  , f_ = {
    null: [Lm, $g]
}
  , p_ = {
    null: [42, 95]
}
  , m_ = {
    null: []
};
function h_(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    }
      , i = {}
      , a = []
      , o = []
      , s = []
      , c = {
        attempt: C(x),
        check: C(S),
        consume: v,
        enter: y,
        exit: b,
        interrupt: C(S, {
            interrupt: !0
        })
    }
      , l = {
        code: null,
        containerState: {},
        defineSkip: h,
        events: [],
        now: m,
        parser: e,
        previous: null,
        sliceSerialize: f,
        sliceStream: p,
        write: d
    }
      , u = t.tokenize.call(l, c);
    return t.resolveAll && a.push(t),
    l;
    function d(e) {
        return o = om(o, e),
        g(),
        o[o.length - 1] === null ? (w(t, 0),
        l.events = Im(a, l.events, l),
        l.events) : []
    }
    function f(e, t) {
        return __(p(e), t)
    }
    function p(e) {
        return g_(o, e)
    }
    function m() {
        let {_bufferIndex: e, _index: t, line: n, column: i, offset: a} = r;
        return {
            _bufferIndex: e,
            _index: t,
            line: n,
            column: i,
            offset: a
        }
    }
    function h(e) {
        i[e.line] = e.column,
        E()
    }
    function g() {
        let e;
        for (; r._index < o.length; ) {
            let t = o[r._index];
            if (typeof t == `string`)
                for (e = r._index,
                r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length; )
                    _(t.charCodeAt(r._bufferIndex));
            else
                _(t)
        }
    }
    function _(e) {
        u = u(e)
    }
    function v(e) {
        X(e) ? (r.line++,
        r.column = 1,
        r.offset += e === -3 ? 2 : 1,
        E()) : e !== -1 && (r.column++,
        r.offset++),
        r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++,
        r._bufferIndex === o[r._index].length && (r._bufferIndex = -1,
        r._index++)),
        l.previous = e
    }
    function y(e, t) {
        let n = t || {};
        return n.type = e,
        n.start = m(),
        l.events.push([`enter`, n, l]),
        s.push(n),
        n
    }
    function b(e) {
        let t = s.pop();
        return t.end = m(),
        l.events.push([`exit`, t, l]),
        t
    }
    function x(e, t) {
        w(e, t.from)
    }
    function S(e, t) {
        t.restore()
    }
    function C(e, t) {
        return n;
        function n(n, r, i) {
            let a, o, s, u;
            return Array.isArray(n) ? f(n) : `tokenize`in n ? f([n]) : d(n);
            function d(e) {
                return t;
                function t(t) {
                    let n = t !== null && e[t]
                      , r = t !== null && e.null;
                    return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t)
                }
            }
            function f(e) {
                return a = e,
                o = 0,
                e.length === 0 ? i : p(e[o])
            }
            function p(e) {
                return n;
                function n(n) {
                    return u = T(),
                    s = e,
                    e.partial || (l.currentConstruct = e),
                    e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n)
                }
            }
            function m(t) {
                return e(s, u),
                r
            }
            function h(e) {
                return u.restore(),
                ++o < a.length ? p(a[o]) : i
            }
        }
    }
    function w(e, t) {
        e.resolveAll && !a.includes(e) && a.push(e),
        e.resolve && am(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
        e.resolveTo && (l.events = e.resolveTo(l.events, l))
    }
    function T() {
        let e = m()
          , t = l.previous
          , n = l.currentConstruct
          , i = l.events.length
          , a = Array.from(s);
        return {
            from: i,
            restore: o
        };
        function o() {
            r = e,
            l.previous = t,
            l.currentConstruct = n,
            l.events.length = i,
            s = a,
            E()
        }
    }
    function E() {
        r.line in i && r.column < 2 && (r.column = i[r.line],
        r.offset += i[r.line] - 1)
    }
}
function g_(e, t) {
    let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
    if (n === i)
        o = [e[n].slice(r, a)];
    else {
        if (o = e.slice(n, i),
        r > -1) {
            let e = o[0];
            typeof e == `string` ? o[0] = e.slice(r) : o.shift()
        }
        a > 0 && o.push(e[i].slice(0, a))
    }
    return o
}
function __(e, t) {
    let n = -1, r = [], i;
    for (; ++n < e.length; ) {
        let a = e[n], o;
        if (typeof a == `string`)
            o = a;
        else
            switch (a) {
            case -5:
                o = `\r`;
                break;
            case -4:
                o = `
`;
                break;
            case -3:
                o = `\r
`;
                break;
            case -2:
                o = t ? ` ` : `	`;
                break;
            case -1:
                if (!t && i)
                    continue;
                o = ` `;
                break;
            default:
                o = String.fromCharCode(a)
            }
        i = a === -2,
        r.push(o)
    }
    return r.join(``)
}
function v_(e) {
    let t = {
        constructs: cm([a_, ...(e || {}).extensions || []]),
        content: n(Gg),
        defined: [],
        document: n(qg),
        flow: n(Zg),
        lazy: {},
        string: n(e_),
        text: n(t_)
    };
    return t;
    function n(e) {
        return n;
        function n(n) {
            return h_(t, e, n)
        }
    }
}
function y_(e) {
    for (; !ph(e); )
        ;
    return e
}
var b_ = /[\0\t\n\r]/g;
function x_() {
    let e = 1, t = ``, n = !0, r;
    return i;
    function i(i, a, o) {
        let s = [], c, l, u, d, f;
        for (i = t + (typeof i == `string` ? i.toString() : new TextDecoder(a || void 0).decode(i)),
        u = 0,
        t = ``,
        n &&= (i.charCodeAt(0) === 65279 && u++,
        void 0); u < i.length; ) {
            if (b_.lastIndex = u,
            c = b_.exec(i),
            d = c && c.index !== void 0 ? c.index : i.length,
            f = i.charCodeAt(d),
            !c) {
                t = i.slice(u);
                break
            }
            if (f === 10 && u === d && r)
                s.push(-3),
                r = void 0;
            else
                switch (r &&= (s.push(-5),
                void 0),
                u < d && (s.push(i.slice(u, d)),
                e += d - u),
                f) {
                case 0:
                    s.push(65533),
                    e++;
                    break;
                case 9:
                    for (l = Math.ceil(e / 4) * 4,
                    s.push(-2); e++ < l; )
                        s.push(-1);
                    break;
                case 10:
                    s.push(-4),
                    e = 1;
                    break;
                default:
                    r = !0,
                    e = 1
                }
            u = d + 1
        }
        return o && (r && s.push(-5),
        t && s.push(t),
        s.push(null)),
        s
    }
}
function S_(e) {
    return !e || typeof e != `object` ? `` : `position`in e || `type`in e ? w_(e.position) : `start`in e || `end`in e ? w_(e) : `line`in e || `column`in e ? C_(e) : ``
}
function C_(e) {
    return T_(e && e.line) + `:` + T_(e && e.column)
}
function w_(e) {
    return C_(e && e.start) + `-` + C_(e && e.end)
}
function T_(e) {
    return e && typeof e == `number` ? e : 1
}
var E_ = {}.hasOwnProperty;
function D_(e, t, n) {
    return t && typeof t == `object` && (n = t,
    t = void 0),
    O_(n)(y_(v_(n).document().write(x_()(e, t, !0))))
}
function O_(e) {
    let t = {
        transforms: [],
        canContainEols: [`emphasis`, `fragment`, `heading`, `paragraph`, `strong`],
        enter: {
            autolink: a(Ce),
            autolinkProtocol: T,
            autolinkEmail: T,
            atxHeading: a(ye),
            blockQuote: a(me),
            characterEscape: T,
            characterReference: T,
            codeFenced: a(he),
            codeFencedFenceInfo: o,
            codeFencedFenceMeta: o,
            codeIndented: a(he, o),
            codeText: a(ge, o),
            codeTextData: T,
            data: T,
            codeFlowValue: T,
            definition: a(_e),
            definitionDestinationString: o,
            definitionLabelString: o,
            definitionTitleString: o,
            emphasis: a(ve),
            hardBreakEscape: a(be),
            hardBreakTrailing: a(be),
            htmlFlow: a(xe, o),
            htmlFlowData: T,
            htmlText: a(xe, o),
            htmlTextData: T,
            image: a(Se),
            label: o,
            link: a(Ce),
            listItem: a(Te),
            listItemValue: f,
            listOrdered: a(we, d),
            listUnordered: a(we),
            paragraph: a(Ee),
            reference: se,
            referenceString: o,
            resourceDestinationString: o,
            resourceTitleString: o,
            setextHeading: a(ye),
            strong: a(De),
            thematicBreak: a(M)
        },
        exit: {
            atxHeading: c(),
            atxHeadingSequence: x,
            autolink: c(),
            autolinkEmail: pe,
            autolinkProtocol: fe,
            blockQuote: c(),
            characterEscapeValue: E,
            characterReferenceMarkerHexadecimal: le,
            characterReferenceMarkerNumeric: le,
            characterReferenceValue: ue,
            characterReference: de,
            codeFenced: c(g),
            codeFencedFence: h,
            codeFencedFenceInfo: p,
            codeFencedFenceMeta: m,
            codeFlowValue: E,
            codeIndented: c(_),
            codeText: c(ne),
            codeTextData: E,
            data: E,
            definition: c(),
            definitionDestinationString: b,
            definitionLabelString: v,
            definitionTitleString: y,
            emphasis: c(),
            hardBreakEscape: c(O),
            hardBreakTrailing: c(O),
            htmlFlow: c(ee),
            htmlFlowData: E,
            htmlText: c(te),
            htmlTextData: E,
            image: c(k),
            label: A,
            labelText: ie,
            lineEnding: D,
            link: c(re),
            listItem: c(),
            listOrdered: c(),
            listUnordered: c(),
            paragraph: c(),
            referenceString: ce,
            resourceDestinationString: ae,
            resourceTitleString: oe,
            resource: j,
            setextHeading: c(w),
            setextHeadingLineSequence: C,
            setextHeadingText: S,
            strong: c(),
            thematicBreak: c()
        }
    };
    A_(t, (e || {}).mdastExtensions || []);
    let n = {};
    return r;
    function r(e) {
        let r = {
            type: `root`,
            children: []
        }
          , a = {
            stack: [r],
            tokenStack: [],
            config: t,
            enter: s,
            exit: l,
            buffer: o,
            resume: u,
            data: n
        }
          , c = []
          , d = -1;
        for (; ++d < e.length; )
            (e[d][1].type === `listOrdered` || e[d][1].type === `listUnordered`) && (e[d][0] === `enter` ? c.push(d) : d = i(e, c.pop(), d));
        for (d = -1; ++d < e.length; ) {
            let n = t[e[d][0]];
            E_.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({
                sliceSerialize: e[d][2].sliceSerialize
            }, a), e[d][1])
        }
        if (a.tokenStack.length > 0) {
            let e = a.tokenStack[a.tokenStack.length - 1];
            (e[1] || M_).call(a, void 0, e[0])
        }
        for (r.position = {
            start: k_(e.length > 0 ? e[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: k_(e.length > 0 ? e[e.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        },
        d = -1; ++d < t.transforms.length; )
            r = t.transforms[d](r) || r;
        return r
    }
    function i(e, t, n) {
        let r = t - 1, i = -1, a = !1, o, s, c, l;
        for (; ++r <= n; ) {
            let t = e[r];
            switch (t[1].type) {
            case `listUnordered`:
            case `listOrdered`:
            case `blockQuote`:
                t[0] === `enter` ? i++ : i--,
                l = void 0;
                break;
            case `lineEndingBlank`:
                t[0] === `enter` && (o && !l && !i && !c && (c = r),
                l = void 0);
                break;
            case `linePrefix`:
            case `listItemValue`:
            case `listItemMarker`:
            case `listItemPrefix`:
            case `listItemPrefixWhitespace`:
                break;
            default:
                l = void 0
            }
            if (!i && t[0] === `enter` && t[1].type === `listItemPrefix` || i === -1 && t[0] === `exit` && (t[1].type === `listUnordered` || t[1].type === `listOrdered`)) {
                if (o) {
                    let i = r;
                    for (s = void 0; i--; ) {
                        let t = e[i];
                        if (t[1].type === `lineEnding` || t[1].type === `lineEndingBlank`) {
                            if (t[0] === `exit`)
                                continue;
                            s && (e[s][1].type = `lineEndingBlank`,
                            a = !0),
                            t[1].type = `lineEnding`,
                            s = i
                        } else if (!(t[1].type === `linePrefix` || t[1].type === `blockQuotePrefix` || t[1].type === `blockQuotePrefixWhitespace` || t[1].type === `blockQuoteMarker` || t[1].type === `listItemIndent`))
                            break
                    }
                    c && (!s || c < s) && (o._spread = !0),
                    o.end = Object.assign({}, s ? e[s][1].start : t[1].end),
                    e.splice(s || r, 0, [`exit`, o, t[2]]),
                    r++,
                    n++
                }
                if (t[1].type === `listItemPrefix`) {
                    let i = {
                        type: `listItem`,
                        _spread: !1,
                        start: Object.assign({}, t[1].start),
                        end: void 0
                    };
                    o = i,
                    e.splice(r, 0, [`enter`, i, t[2]]),
                    r++,
                    n++,
                    c = void 0,
                    l = !0
                }
            }
        }
        return e[t][1]._spread = a,
        n
    }
    function a(e, t) {
        return n;
        function n(n) {
            s.call(this, e(n), n),
            t && t.call(this, n)
        }
    }
    function o() {
        this.stack.push({
            type: `fragment`,
            children: []
        })
    }
    function s(e, t, n) {
        this.stack[this.stack.length - 1].children.push(e),
        this.stack.push(e),
        this.tokenStack.push([t, n || void 0]),
        e.position = {
            start: k_(t.start),
            end: void 0
        }
    }
    function c(e) {
        return t;
        function t(t) {
            e && e.call(this, t),
            l.call(this, t)
        }
    }
    function l(e, t) {
        let n = this.stack.pop()
          , r = this.tokenStack.pop();
        if (r)
            r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || M_).call(this, e, r[0]));
        else
            throw Error("Cannot close `" + e.type + "` (" + S_({
                start: e.start,
                end: e.end
            }) + `): it’s not open`);
        n.position.end = k_(e.end)
    }
    function u() {
        return tp(this.stack.pop())
    }
    function d() {
        this.data.expectingFirstListItemValue = !0
    }
    function f(e) {
        if (this.data.expectingFirstListItemValue) {
            let t = this.stack[this.stack.length - 2];
            t.start = Number.parseInt(this.sliceSerialize(e), 10),
            this.data.expectingFirstListItemValue = void 0
        }
    }
    function p() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.lang = e
    }
    function m() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.meta = e
    }
    function h() {
        this.data.flowCodeInside || (this.buffer(),
        this.data.flowCodeInside = !0)
    }
    function g() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ``),
        this.data.flowCodeInside = void 0
    }
    function _() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e.replace(/(\r?\n|\r)$/g, ``)
    }
    function v(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        n.label = t,
        n.identifier = lf(this.sliceSerialize(e)).toLowerCase()
    }
    function y() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.title = e
    }
    function b() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.url = e
    }
    function x(e) {
        let t = this.stack[this.stack.length - 1];
        t.depth ||= this.sliceSerialize(e).length
    }
    function S() {
        this.data.setextHeadingSlurpLineEnding = !0
    }
    function C(e) {
        let t = this.stack[this.stack.length - 1];
        t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2
    }
    function w() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }
    function T(e) {
        let t = this.stack[this.stack.length - 1].children
          , n = t[t.length - 1];
        (!n || n.type !== `text`) && (n = Oe(),
        n.position = {
            start: k_(e.start),
            end: void 0
        },
        t.push(n)),
        this.stack.push(n)
    }
    function E(e) {
        let t = this.stack.pop();
        t.value += this.sliceSerialize(e),
        t.position.end = k_(e.end)
    }
    function D(e) {
        let n = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            let t = n.children[n.children.length - 1];
            t.position.end = k_(e.end),
            this.data.atHardBreak = void 0;
            return
        }
        !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e),
        E.call(this, e))
    }
    function O() {
        this.data.atHardBreak = !0
    }
    function ee() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function te() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function ne() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.value = e
    }
    function re() {
        let e = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            let t = this.data.referenceType || `shortcut`;
            e.type += `Reference`,
            e.referenceType = t,
            delete e.url,
            delete e.title
        } else
            delete e.identifier,
            delete e.label;
        this.data.referenceType = void 0
    }
    function k() {
        let e = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            let t = this.data.referenceType || `shortcut`;
            e.type += `Reference`,
            e.referenceType = t,
            delete e.url,
            delete e.title
        } else
            delete e.identifier,
            delete e.label;
        this.data.referenceType = void 0
    }
    function ie(e) {
        let t = this.sliceSerialize(e)
          , n = this.stack[this.stack.length - 2];
        n.label = Vp(t),
        n.identifier = lf(t).toLowerCase()
    }
    function A() {
        let e = this.stack[this.stack.length - 1]
          , t = this.resume()
          , n = this.stack[this.stack.length - 1];
        this.data.inReference = !0,
        n.type === `link` ? n.children = e.children : n.alt = t
    }
    function ae() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.url = e
    }
    function oe() {
        let e = this.resume()
          , t = this.stack[this.stack.length - 1];
        t.title = e
    }
    function j() {
        this.data.inReference = void 0
    }
    function se() {
        this.data.referenceType = `collapsed`
    }
    function ce(e) {
        let t = this.resume()
          , n = this.stack[this.stack.length - 1];
        n.label = t,
        n.identifier = lf(this.sliceSerialize(e)).toLowerCase(),
        this.data.referenceType = `full`
    }
    function le(e) {
        this.data.characterReferenceType = e.type
    }
    function ue(e) {
        let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
        n ? (r = zp(t, n === `characterReferenceMarkerNumeric` ? 10 : 16),
        this.data.characterReferenceType = void 0) : r = Rp(t);
        let i = this.stack[this.stack.length - 1];
        i.value += r
    }
    function de(e) {
        let t = this.stack.pop();
        t.position.end = k_(e.end)
    }
    function fe(e) {
        E.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = this.sliceSerialize(e)
    }
    function pe(e) {
        E.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.url = `mailto:` + this.sliceSerialize(e)
    }
    function me() {
        return {
            type: `blockquote`,
            children: []
        }
    }
    function he() {
        return {
            type: `code`,
            lang: null,
            meta: null,
            value: ``
        }
    }
    function ge() {
        return {
            type: `inlineCode`,
            value: ``
        }
    }
    function _e() {
        return {
            type: `definition`,
            identifier: ``,
            label: null,
            title: null,
            url: ``
        }
    }
    function ve() {
        return {
            type: `emphasis`,
            children: []
        }
    }
    function ye() {
        return {
            type: `heading`,
            depth: 0,
            children: []
        }
    }
    function be() {
        return {
            type: `break`
        }
    }
    function xe() {
        return {
            type: `html`,
            value: ``
        }
    }
    function Se() {
        return {
            type: `image`,
            title: null,
            url: ``,
            alt: null
        }
    }
    function Ce() {
        return {
            type: `link`,
            title: null,
            url: ``,
            children: []
        }
    }
    function we(e) {
        return {
            type: `list`,
            ordered: e.type === `listOrdered`,
            start: null,
            spread: e._spread,
            children: []
        }
    }
    function Te(e) {
        return {
            type: `listItem`,
            spread: e._spread,
            checked: null,
            children: []
        }
    }
    function Ee() {
        return {
            type: `paragraph`,
            children: []
        }
    }
    function De() {
        return {
            type: `strong`,
            children: []
        }
    }
    function Oe() {
        return {
            type: `text`,
            value: ``
        }
    }
    function M() {
        return {
            type: `thematicBreak`
        }
    }
}
function k_(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}
function A_(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
        let r = t[n];
        Array.isArray(r) ? A_(e, r) : j_(e, r)
    }
}
function j_(e, t) {
    let n;
    for (n in t)
        if (E_.call(t, n))
            switch (n) {
            case `canContainEols`:
                {
                    let r = t[n];
                    r && e[n].push(...r);
                    break
                }
            case `transforms`:
                {
                    let r = t[n];
                    r && e[n].push(...r);
                    break
                }
            case `enter`:
            case `exit`:
                {
                    let r = t[n];
                    r && Object.assign(e[n], r);
                    break
                }
            }
}
function M_(e, t) {
    throw Error(e ? "Cannot close `" + e.type + "` (" + S_({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + S_({
        start: t.start,
        end: t.end
    }) + `) is open` : "Cannot close document, a token (`" + t.type + "`, " + S_({
        start: t.start,
        end: t.end
    }) + `) is still open`)
}
function N_(e) {
    let t = this;
    t.parser = n;
    function n(n) {
        return D_(n, {
            ...t.data(`settings`),
            ...e,
            extensions: t.data(`micromarkExtensions`) || [],
            mdastExtensions: t.data(`fromMarkdownExtensions`) || []
        })
    }
}
function P_(e, t) {
    let n = {
        type: `element`,
        tagName: `blockquote`,
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function F_(e, t) {
    let n = {
        type: `element`,
        tagName: `br`,
        properties: {},
        children: []
    };
    return e.patch(t, n),
    [e.applyData(t, n), {
        type: `text`,
        value: `
`
    }]
}
function I_(e, t) {
    let n = t.value ? t.value + `
` : ``
      , r = {}
      , i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = [`language-` + i[0]]);
    let a = {
        type: `element`,
        tagName: `code`,
        properties: r,
        children: [{
            type: `text`,
            value: n
        }]
    };
    return t.meta && (a.data = {
        meta: t.meta
    }),
    e.patch(t, a),
    a = e.applyData(t, a),
    a = {
        type: `element`,
        tagName: `pre`,
        properties: {},
        children: [a]
    },
    e.patch(t, a),
    a
}
function L_(e, t) {
    let n = {
        type: `element`,
        tagName: `del`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function R_(e, t) {
    let n = {
        type: `element`,
        tagName: `em`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function z_(e, t) {
    let n = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`, r = String(t.identifier).toUpperCase(), i = Fm(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
    s === void 0 ? (s = 0,
    e.footnoteOrder.push(r),
    o = e.footnoteOrder.length) : o = a + 1,
    s += 1,
    e.footnoteCounts.set(r, s);
    let c = {
        type: `element`,
        tagName: `a`,
        properties: {
            href: `#` + n + `fn-` + i,
            id: n + `fnref-` + i + (s > 1 ? `-` + s : ``),
            dataFootnoteRef: !0,
            ariaDescribedBy: [`footnote-label`]
        },
        children: [{
            type: `text`,
            value: String(o)
        }]
    };
    e.patch(t, c);
    let l = {
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [c]
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function B_(e, t) {
    let n = {
        type: `element`,
        tagName: `h` + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function V_(e, t) {
    if (e.options.allowDangerousHtml) {
        let n = {
            type: `raw`,
            value: t.value
        };
        return e.patch(t, n),
        e.applyData(t, n)
    }
}
function H_(e, t) {
    let n = t.referenceType
      , r = `]`;
    if (n === `collapsed` ? r += `[]` : n === `full` && (r += `[` + (t.label || t.identifier) + `]`),
    t.type === `imageReference`)
        return [{
            type: `text`,
            value: `![` + t.alt + r
        }];
    let i = e.all(t)
      , a = i[0];
    a && a.type === `text` ? a.value = `[` + a.value : i.unshift({
        type: `text`,
        value: `[`
    });
    let o = i[i.length - 1];
    return o && o.type === `text` ? o.value += r : i.push({
        type: `text`,
        value: r
    }),
    i
}
function U_(e, t) {
    let n = String(t.identifier).toUpperCase()
      , r = e.definitionById.get(n);
    if (!r)
        return H_(e, t);
    let i = {
        src: Fm(r.url || ``),
        alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let a = {
        type: `element`,
        tagName: `img`,
        properties: i,
        children: []
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function W_(e, t) {
    let n = {
        src: Fm(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    let r = {
        type: `element`,
        tagName: `img`,
        properties: n,
        children: []
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function G_(e, t) {
    let n = {
        type: `text`,
        value: t.value.replace(/\r?\n|\r/g, ` `)
    };
    e.patch(t, n);
    let r = {
        type: `element`,
        tagName: `code`,
        properties: {},
        children: [n]
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function K_(e, t) {
    let n = String(t.identifier).toUpperCase()
      , r = e.definitionById.get(n);
    if (!r)
        return H_(e, t);
    let i = {
        href: Fm(r.url || ``)
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    let a = {
        type: `element`,
        tagName: `a`,
        properties: i,
        children: e.all(t)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function q_(e, t) {
    let n = {
        href: Fm(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    let r = {
        type: `element`,
        tagName: `a`,
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function J_(e, t, n) {
    let r = e.all(t)
      , i = n ? Y_(n) : X_(t)
      , a = {}
      , o = [];
    if (typeof t.checked == `boolean`) {
        let e = r[0], n;
        e && e.type === `element` && e.tagName === `p` ? n = e : (n = {
            type: `element`,
            tagName: `p`,
            properties: {},
            children: []
        },
        r.unshift(n)),
        n.children.length > 0 && n.children.unshift({
            type: `text`,
            value: ` `
        }),
        n.children.unshift({
            type: `element`,
            tagName: `input`,
            properties: {
                type: `checkbox`,
                checked: t.checked,
                disabled: !0
            },
            children: []
        }),
        a.className = [`task-list-item`]
    }
    let s = -1;
    for (; ++s < r.length; ) {
        let e = r[s];
        (i || s !== 0 || e.type !== `element` || e.tagName !== `p`) && o.push({
            type: `text`,
            value: `
`
        }),
        e.type === `element` && e.tagName === `p` && !i ? o.push(...e.children) : o.push(e)
    }
    let c = r[r.length - 1];
    c && (i || c.type !== `element` || c.tagName !== `p`) && o.push({
        type: `text`,
        value: `
`
    });
    let l = {
        type: `element`,
        tagName: `li`,
        properties: a,
        children: o
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function Y_(e) {
    let t = !1;
    if (e.type === `list`) {
        t = e.spread || !1;
        let n = e.children
          , r = -1;
        for (; !t && ++r < n.length; )
            t = X_(n[r])
    }
    return t
}
function X_(e) {
    return e.spread ?? e.children.length > 1
}
function Z_(e, t) {
    let n = {}
      , r = e.all(t)
      , i = -1;
    for (typeof t.start == `number` && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
        let e = r[i];
        if (e.type === `element` && e.tagName === `li` && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes(`task-list-item`)) {
            n.className = [`contains-task-list`];
            break
        }
    }
    let a = {
        type: `element`,
        tagName: t.ordered ? `ol` : `ul`,
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function Q_(e, t) {
    let n = {
        type: `element`,
        tagName: `p`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function $_(e, t) {
    let n = {
        type: `root`,
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function ev(e, t) {
    let n = {
        type: `element`,
        tagName: `strong`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function tv(e, t) {
    let n = e.all(t)
      , r = n.shift()
      , i = [];
    if (r) {
        let n = {
            type: `element`,
            tagName: `thead`,
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], n),
        i.push(n)
    }
    if (n.length > 0) {
        let r = {
            type: `element`,
            tagName: `tbody`,
            properties: {},
            children: e.wrap(n, !0)
        }
          , a = Yc(t.children[1])
          , o = Jc(t.children[t.children.length - 1]);
        a && o && (r.position = {
            start: a,
            end: o
        }),
        i.push(r)
    }
    let a = {
        type: `element`,
        tagName: `table`,
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, a),
    e.applyData(t, a)
}
function nv(e, t, n) {
    let r = n ? n.children : void 0
      , i = (r ? r.indexOf(t) : 1) === 0 ? `th` : `td`
      , a = n && n.type === `table` ? n.align : void 0
      , o = a ? a.length : t.children.length
      , s = -1
      , c = [];
    for (; ++s < o; ) {
        let n = t.children[s]
          , r = {}
          , o = a ? a[s] : void 0;
        o && (r.align = o);
        let l = {
            type: `element`,
            tagName: i,
            properties: r,
            children: []
        };
        n && (l.children = e.all(n),
        e.patch(n, l),
        l = e.applyData(n, l)),
        c.push(l)
    }
    let l = {
        type: `element`,
        tagName: `tr`,
        properties: {},
        children: e.wrap(c, !0)
    };
    return e.patch(t, l),
    e.applyData(t, l)
}
function rv(e, t) {
    let n = {
        type: `element`,
        tagName: `td`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
var iv = 9
  , av = 32;
function ov(e) {
    let t = String(e)
      , n = /\r?\n|\r/g
      , r = n.exec(t)
      , i = 0
      , a = [];
    for (; r; )
        a.push(sv(t.slice(i, r.index), i > 0, !0), r[0]),
        i = r.index + r[0].length,
        r = n.exec(t);
    return a.push(sv(t.slice(i), i > 0, !1)),
    a.join(``)
}
function sv(e, t, n) {
    let r = 0
      , i = e.length;
    if (t) {
        let t = e.codePointAt(r);
        for (; t === iv || t === av; )
            r++,
            t = e.codePointAt(r)
    }
    if (n) {
        let t = e.codePointAt(i - 1);
        for (; t === iv || t === av; )
            i--,
            t = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ``
}
function cv(e, t) {
    let n = {
        type: `text`,
        value: ov(String(t.value))
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
function lv(e, t) {
    let n = {
        type: `element`,
        tagName: `hr`,
        properties: {},
        children: []
    };
    return e.patch(t, n),
    e.applyData(t, n)
}
var uv = {
    blockquote: P_,
    break: F_,
    code: I_,
    delete: L_,
    emphasis: R_,
    footnoteReference: z_,
    heading: B_,
    html: V_,
    imageReference: U_,
    image: W_,
    inlineCode: G_,
    linkReference: K_,
    link: q_,
    listItem: J_,
    list: Z_,
    paragraph: Q_,
    root: $_,
    strong: ev,
    table: tv,
    tableCell: rv,
    tableRow: nv,
    text: cv,
    thematicBreak: lv,
    toml: dv,
    yaml: dv,
    definition: dv,
    footnoteDefinition: dv
};
function dv() {}
function fv(e, t) {
    let n = [{
        type: `text`,
        value: `↩`
    }];
    return t > 1 && n.push({
        type: `element`,
        tagName: `sup`,
        properties: {},
        children: [{
            type: `text`,
            value: String(t)
        }]
    }),
    n
}
function pv(e, t) {
    return `Back to reference ` + (e + 1) + (t > 1 ? `-` + t : ``)
}
function mv(e) {
    let t = typeof e.options.clobberPrefix == `string` ? e.options.clobberPrefix : `user-content-`
      , n = e.options.footnoteBackContent || fv
      , r = e.options.footnoteBackLabel || pv
      , i = e.options.footnoteLabel || `Footnotes`
      , a = e.options.footnoteLabelTagName || `h2`
      , o = e.options.footnoteLabelProperties || {
        className: [`sr-only`]
    }
      , s = []
      , c = -1;
    for (; ++c < e.footnoteOrder.length; ) {
        let i = e.footnoteById.get(e.footnoteOrder[c]);
        if (!i)
            continue;
        let a = e.all(i)
          , o = String(i.identifier).toUpperCase()
          , l = Fm(o.toLowerCase())
          , u = 0
          , d = []
          , f = e.footnoteCounts.get(o);
        for (; f !== void 0 && ++u <= f; ) {
            d.length > 0 && d.push({
                type: `text`,
                value: ` `
            });
            let e = typeof n == `string` ? n : n(c, u);
            typeof e == `string` && (e = {
                type: `text`,
                value: e
            }),
            d.push({
                type: `element`,
                tagName: `a`,
                properties: {
                    href: `#` + t + `fnref-` + l + (u > 1 ? `-` + u : ``),
                    dataFootnoteBackref: ``,
                    ariaLabel: typeof r == `string` ? r : r(c, u),
                    className: [`data-footnote-backref`]
                },
                children: Array.isArray(e) ? e : [e]
            })
        }
        let p = a[a.length - 1];
        if (p && p.type === `element` && p.tagName === `p`) {
            let e = p.children[p.children.length - 1];
            e && e.type === `text` ? e.value += ` ` : p.children.push({
                type: `text`,
                value: ` `
            }),
            p.children.push(...d)
        } else
            a.push(...d);
        let m = {
            type: `element`,
            tagName: `li`,
            properties: {
                id: t + `fn-` + l
            },
            children: e.wrap(a, !0)
        };
        e.patch(i, m),
        s.push(m)
    }
    if (s.length !== 0)
        return {
            type: `element`,
            tagName: `section`,
            properties: {
                dataFootnotes: !0,
                className: [`footnotes`]
            },
            children: [{
                type: `element`,
                tagName: a,
                properties: {
                    ...qc(o),
                    id: `footnote-label`
                },
                children: [{
                    type: `text`,
                    value: i
                }]
            }, {
                type: `text`,
                value: `
`
            }, {
                type: `element`,
                tagName: `ol`,
                properties: {},
                children: e.wrap(s, !0)
            }, {
                type: `text`,
                value: `
`
            }]
        }
}
var hv = {}.hasOwnProperty
  , gv = {};
function _v(e, t) {
    let n = t || gv
      , r = new Map
      , i = new Map
      , a = {
        all: s,
        applyData: yv,
        definitionById: r,
        footnoteById: i,
        footnoteCounts: new Map,
        footnoteOrder: [],
        handlers: {
            ...uv,
            ...n.handlers
        },
        one: o,
        options: n,
        patch: vv,
        wrap: xv
    };
    return $f(e, function(e) {
        if (e.type === `definition` || e.type === `footnoteDefinition`) {
            let t = e.type === `definition` ? r : i
              , n = String(e.identifier).toUpperCase();
            t.has(n) || t.set(n, e)
        }
    }),
    a;
    function o(e, t) {
        let n = e.type
          , r = a.handlers[n];
        if (hv.call(a.handlers, n) && r)
            return r(a, e, t);
        if (a.options.passThrough && a.options.passThrough.includes(n)) {
            if (`children`in e) {
                let {children: t, ...n} = e
                  , r = qc(n);
                return r.children = a.all(e),
                r
            }
            return qc(e)
        }
        return (a.options.unknownHandler || bv)(a, e, t)
    }
    function s(e) {
        let t = [];
        if (`children`in e) {
            let n = e.children
              , r = -1;
            for (; ++r < n.length; ) {
                let i = a.one(n[r], e);
                if (i) {
                    if (r && n[r - 1].type === `break` && (!Array.isArray(i) && i.type === `text` && (i.value = Sv(i.value)),
                    !Array.isArray(i) && i.type === `element`)) {
                        let e = i.children[0];
                        e && e.type === `text` && (e.value = Sv(e.value))
                    }
                    Array.isArray(i) ? t.push(...i) : t.push(i)
                }
            }
        }
        return t
    }
}
function vv(e, t) {
    e.position && (t.position = Zc(e))
}
function yv(e, t) {
    let n = t;
    if (e && e.data) {
        let t = e.data.hName
          , r = e.data.hChildren
          , i = e.data.hProperties;
        typeof t == `string` && (n.type === `element` ? n.tagName = t : n = {
            type: `element`,
            tagName: t,
            properties: {},
            children: `children`in n ? n.children : [n]
        }),
        n.type === `element` && i && Object.assign(n.properties, qc(i)),
        `children`in n && n.children && r != null && (n.children = r)
    }
    return n
}
function bv(e, t) {
    let n = t.data || {}
      , r = `value`in t && !(hv.call(n, `hProperties`) || hv.call(n, `hChildren`)) ? {
        type: `text`,
        value: t.value
    } : {
        type: `element`,
        tagName: `div`,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, r),
    e.applyData(t, r)
}
function xv(e, t) {
    let n = []
      , r = -1;
    for (t && n.push({
        type: `text`,
        value: `
`
    }); ++r < e.length; )
        r && n.push({
            type: `text`,
            value: `
`
        }),
        n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: `text`,
        value: `
`
    }),
    n
}
function Sv(e) {
    let t = 0
      , n = e.charCodeAt(t);
    for (; n === 9 || n === 32; )
        t++,
        n = e.charCodeAt(t);
    return e.slice(t)
}
function Cv(e, t) {
    let n = _v(e, t)
      , r = n.one(e, void 0)
      , i = mv(n)
      , a = Array.isArray(r) ? {
        type: `root`,
        children: r
    } : r || {
        type: `root`,
        children: []
    };
    return i && (`children`in a,
    a.children.push({
        type: `text`,
        value: `
`
    }, i)),
    a
}
function wv(e, t) {
    return e && `run`in e ? async function(n, r) {
        let i = Cv(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    }
    : function(n, r) {
        return Cv(n, {
            file: r,
            ...e || t
        })
    }
}
function Tv(e) {
    if (e)
        throw e
}
var Ev = o(( (e, t) => {
    var n = Object.prototype.hasOwnProperty
      , r = Object.prototype.toString
      , i = Object.defineProperty
      , a = Object.getOwnPropertyDescriptor
      , o = function(e) {
        return typeof Array.isArray == `function` ? Array.isArray(e) : r.call(e) === `[object Array]`
    }
      , s = function(e) {
        if (!e || r.call(e) !== `[object Object]`)
            return !1;
        var t = n.call(e, `constructor`)
          , i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, `isPrototypeOf`);
        if (e.constructor && !t && !i)
            return !1;
        for (var a in e)
            ;
        return a === void 0 || n.call(e, a)
    }
      , c = function(e, t) {
        i && t.name === `__proto__` ? i(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : e[t.name] = t.newValue
    }
      , l = function(e, t) {
        if (t === `__proto__`) {
            if (!n.call(e, t))
                return;
            if (a)
                return a(e, t).value
        }
        return e[t]
    };
    t.exports = function e() {
        var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
        for (typeof d == `boolean` && (m = d,
        d = arguments[1] || {},
        f = 2),
        (d == null || typeof d != `object` && typeof d != `function`) && (d = {}); f < p; ++f)
            if (t = arguments[f],
            t != null)
                for (n in t)
                    r = l(d, n),
                    i = l(t, n),
                    d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1,
                    u = r && o(r) ? r : []) : u = r && s(r) ? r : {},
                    c(d, {
                        name: n,
                        newValue: e(m, u, i)
                    })) : i !== void 0 && c(d, {
                        name: n,
                        newValue: i
                    }));
        return d
    }
}
));
function Dv(e) {
    if (typeof e != `object` || !e)
        return !1;
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
function Ov() {
    let e = []
      , t = {
        run: n,
        use: r
    };
    return t;
    function n(...t) {
        let n = -1
          , r = t.pop();
        if (typeof r != `function`)
            throw TypeError(`Expected function as last argument, not ` + r);
        i(null, ...t);
        function i(a, ...o) {
            let s = e[++n]
              , c = -1;
            if (a) {
                r(a);
                return
            }
            for (; ++c < t.length; )
                (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
            t = o,
            s ? kv(s, i)(...o) : r(null, ...o)
        }
    }
    function r(n) {
        if (typeof n != `function`)
            throw TypeError("Expected `middelware` to be a function, not " + n);
        return e.push(n),
        t
    }
}
function kv(e, t) {
    let n;
    return r;
    function r(...t) {
        let r = e.length > t.length, o;
        r && t.push(i);
        try {
            o = e.apply(this, t)
        } catch (e) {
            let t = e;
            if (r && n)
                throw t;
            return i(t)
        }
        r || (o && o.then && typeof o.then == `function` ? o.then(a, i) : o instanceof Error ? i(o) : a(o))
    }
    function i(e, ...r) {
        n || (n = !0,
        t(e, ...r))
    }
    function a(e) {
        i(null, e)
    }
}
var Av = class extends Error {
    constructor(e, t, n) {
        super(),
        typeof t == `string` && (n = t,
        t = void 0);
        let r = ``
          , i = {}
          , a = !1;
        if (t && (i = `line`in t && `column`in t || `start`in t && `end`in t ? {
            place: t
        } : `type`in t ? {
            ancestors: [t],
            place: t.position
        } : {
            ...t
        }),
        typeof e == `string` ? r = e : !i.cause && e && (a = !0,
        r = e.message,
        i.cause = e),
        !i.ruleId && !i.source && typeof n == `string`) {
            let e = n.indexOf(`:`);
            e === -1 ? i.ruleId = n : (i.source = n.slice(0, e),
            i.ruleId = n.slice(e + 1))
        }
        if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position)
        }
        let o = i.place && `start`in i.place ? i.place.start : i.place;
        this.ancestors = i.ancestors || void 0,
        this.cause = i.cause || void 0,
        this.column = o ? o.column : void 0,
        this.fatal = void 0,
        this.file = ``,
        this.message = r,
        this.line = o ? o.line : void 0,
        this.name = S_(i.place) || `1:1`,
        this.place = i.place || void 0,
        this.reason = this.message,
        this.ruleId = i.ruleId || void 0,
        this.source = i.source || void 0,
        this.stack = a && i.cause && typeof i.cause.stack == `string` ? i.cause.stack : ``,
        this.actual = void 0,
        this.expected = void 0,
        this.note = void 0,
        this.url = void 0
    }
}
;
Av.prototype.file = ``,
Av.prototype.name = ``,
Av.prototype.reason = ``,
Av.prototype.message = ``,
Av.prototype.stack = ``,
Av.prototype.column = void 0,
Av.prototype.line = void 0,
Av.prototype.ancestors = void 0,
Av.prototype.cause = void 0,
Av.prototype.fatal = void 0,
Av.prototype.place = void 0,
Av.prototype.ruleId = void 0,
Av.prototype.source = void 0;
var jv = {
    basename: Mv,
    dirname: Nv,
    extname: Pv,
    join: Fv,
    sep: `/`
};
function Mv(e, t) {
    if (t !== void 0 && typeof t != `string`)
        throw TypeError(`"ext" argument must be a string`);
    Rv(e);
    let n = 0, r = -1, i = e.length, a;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--; )
            if (e.codePointAt(i) === 47) {
                if (a) {
                    n = i + 1;
                    break
                }
            } else
                r < 0 && (a = !0,
                r = i + 1);
        return r < 0 ? `` : e.slice(n, r)
    }
    if (t === e)
        return ``;
    let o = -1
      , s = t.length - 1;
    for (; i--; )
        if (e.codePointAt(i) === 47) {
            if (a) {
                n = i + 1;
                break
            }
        } else
            o < 0 && (a = !0,
            o = i + 1),
            s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1,
            r = o));
    return n === r ? r = o : r < 0 && (r = e.length),
    e.slice(n, r)
}
function Nv(e) {
    if (Rv(e),
    e.length === 0)
        return `.`;
    let t = -1, n = e.length, r;
    for (; --n; )
        if (e.codePointAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else
            r ||= !0;
    return t < 0 ? e.codePointAt(0) === 47 ? `/` : `.` : t === 1 && e.codePointAt(0) === 47 ? `//` : e.slice(0, t)
}
function Pv(e) {
    Rv(e);
    let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
    for (; t--; ) {
        let s = e.codePointAt(t);
        if (s === 47) {
            if (o) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (o = !0,
        n = t + 1),
        s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1)
    }
    return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? `` : e.slice(i, n)
}
function Fv(...e) {
    let t = -1, n;
    for (; ++t < e.length; )
        Rv(e[t]),
        e[t] && (n = n === void 0 ? e[t] : n + `/` + e[t]);
    return n === void 0 ? `.` : Iv(n)
}
function Iv(e) {
    Rv(e);
    let t = e.codePointAt(0) === 47
      , n = Lv(e, !t);
    return n.length === 0 && !t && (n = `.`),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += `/`),
    t ? `/` + n : n
}
function Lv(e, t) {
    let n = ``, r = 0, i = -1, a = 0, o = -1, s, c;
    for (; ++o <= e.length; ) {
        if (o < e.length)
            s = e.codePointAt(o);
        else if (s === 47)
            break;
        else
            s = 47;
        if (s === 47) {
            if (!(i === o - 1 || a === 1))
                if (i !== o - 1 && a === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (c = n.lastIndexOf(`/`),
                            c !== n.length - 1) {
                                c < 0 ? (n = ``,
                                r = 0) : (n = n.slice(0, c),
                                r = n.length - 1 - n.lastIndexOf(`/`)),
                                i = o,
                                a = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = ``,
                            r = 0,
                            i = o,
                            a = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + `/..` : `..`,
                    r = 2)
                } else
                    n.length > 0 ? n += `/` + e.slice(i + 1, o) : n = e.slice(i + 1, o),
                    r = o - i - 1;
            i = o,
            a = 0
        } else
            s === 46 && a > -1 ? a++ : a = -1
    }
    return n
}
function Rv(e) {
    if (typeof e != `string`)
        throw TypeError(`Path must be a string. Received ` + JSON.stringify(e))
}
var zv = {
    cwd: Bv
};
function Bv() {
    return `/`
}
function Vv(e) {
    return !!(typeof e == `object` && e && `href`in e && e.href && `protocol`in e && e.protocol && e.auth === void 0)
}
function Hv(e) {
    if (typeof e == `string`)
        e = new URL(e);
    else if (!Vv(e)) {
        let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = `ERR_INVALID_ARG_TYPE`,
        t
    }
    if (e.protocol !== `file:`) {
        let e = TypeError(`The URL must be of scheme file`);
        throw e.code = `ERR_INVALID_URL_SCHEME`,
        e
    }
    return Uv(e)
}
function Uv(e) {
    if (e.hostname !== ``) {
        let e = TypeError(`File URL host must be "localhost" or empty on darwin`);
        throw e.code = `ERR_INVALID_FILE_URL_HOST`,
        e
    }
    let t = e.pathname
      , n = -1;
    for (; ++n < t.length; )
        if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
            let e = t.codePointAt(n + 2);
            if (e === 70 || e === 102) {
                let e = TypeError(`File URL path must not include encoded / characters`);
                throw e.code = `ERR_INVALID_FILE_URL_PATH`,
                e
            }
        }
    return decodeURIComponent(t)
}
var Wv = [`history`, `path`, `basename`, `stem`, `extname`, `dirname`]
  , Gv = class {
    constructor(e) {
        let t;
        t = e ? Vv(e) ? {
            path: e
        } : typeof e == `string` || Yv(e) ? {
            value: e
        } : e : {},
        this.cwd = `cwd`in t ? `` : zv.cwd(),
        this.data = {},
        this.history = [],
        this.messages = [],
        this.value,
        this.map,
        this.result,
        this.stored;
        let n = -1;
        for (; ++n < Wv.length; ) {
            let e = Wv[n];
            e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === `history` ? [...t[e]] : t[e])
        }
        let r;
        for (r in t)
            Wv.includes(r) || (this[r] = t[r])
    }
    get basename() {
        return typeof this.path == `string` ? jv.basename(this.path) : void 0
    }
    set basename(e) {
        qv(e, `basename`),
        Kv(e, `basename`),
        this.path = jv.join(this.dirname || ``, e)
    }
    get dirname() {
        return typeof this.path == `string` ? jv.dirname(this.path) : void 0
    }
    set dirname(e) {
        Jv(this.basename, `dirname`),
        this.path = jv.join(e || ``, this.basename)
    }
    get extname() {
        return typeof this.path == `string` ? jv.extname(this.path) : void 0
    }
    set extname(e) {
        if (Kv(e, `extname`),
        Jv(this.dirname, `extname`),
        e) {
            if (e.codePointAt(0) !== 46)
                throw Error("`extname` must start with `.`");
            if (e.includes(`.`, 1))
                throw Error("`extname` cannot contain multiple dots")
        }
        this.path = jv.join(this.dirname, this.stem + (e || ``))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(e) {
        Vv(e) && (e = Hv(e)),
        qv(e, `path`),
        this.path !== e && this.history.push(e)
    }
    get stem() {
        return typeof this.path == `string` ? jv.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
        qv(e, `stem`),
        Kv(e, `stem`),
        this.path = jv.join(this.dirname || ``, e + (this.extname || ``))
    }
    fail(e, t, n) {
        let r = this.message(e, t, n);
        throw r.fatal = !0,
        r
    }
    info(e, t, n) {
        let r = this.message(e, t, n);
        return r.fatal = void 0,
        r
    }
    message(e, t, n) {
        let r = new Av(e,t,n);
        return this.path && (r.name = this.path + `:` + r.name,
        r.file = this.path),
        r.fatal = !1,
        this.messages.push(r),
        r
    }
    toString(e) {
        return this.value === void 0 ? `` : typeof this.value == `string` ? this.value : new TextDecoder(e || void 0).decode(this.value)
    }
}
;
function Kv(e, t) {
    if (e && e.includes(jv.sep))
        throw Error("`" + t + "` cannot be a path: did not expect `" + jv.sep + "`")
}
function qv(e, t) {
    if (!e)
        throw Error("`" + t + "` cannot be empty")
}
function Jv(e, t) {
    if (!e)
        throw Error("Setting `" + t + "` requires `path` to be set too")
}
function Yv(e) {
    return !!(e && typeof e == `object` && `byteLength`in e && `byteOffset`in e)
}
var Xv = (function(e) {
    let t = this.constructor.prototype
      , n = t[e]
      , r = function() {
        return n.apply(r, arguments)
    };
    return Object.setPrototypeOf(r, t),
    r
}
)
  , Zv = l(Ev(), 1)
  , Qv = {}.hasOwnProperty
  , $v = new class e extends Xv {
    constructor() {
        super(`copy`),
        this.Compiler = void 0,
        this.Parser = void 0,
        this.attachers = [],
        this.compiler = void 0,
        this.freezeIndex = -1,
        this.frozen = void 0,
        this.namespace = {},
        this.parser = void 0,
        this.transformers = Ov()
    }
    copy() {
        let t = new e
          , n = -1;
        for (; ++n < this.attachers.length; ) {
            let e = this.attachers[n];
            t.use(...e)
        }
        return t.data((0,
        Zv.default)(!0, {}, this.namespace)),
        t
    }
    data(e, t) {
        return typeof e == `string` ? arguments.length === 2 ? (ny(`data`, this.frozen),
        this.namespace[e] = t,
        this) : Qv.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (ny(`data`, this.frozen),
        this.namespace = e,
        this) : this.namespace
    }
    freeze() {
        if (this.frozen)
            return this;
        let e = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
            let[t,...n] = this.attachers[this.freezeIndex];
            if (n[0] === !1)
                continue;
            n[0] === !0 && (n[0] = void 0);
            let r = t.call(e, ...n);
            typeof r == `function` && this.transformers.use(r)
        }
        return this.frozen = !0,
        this.freezeIndex = 1 / 0,
        this
    }
    parse(e) {
        this.freeze();
        let t = ay(e)
          , n = this.parser || this.Parser;
        return ey(`parse`, n),
        n(String(t), t)
    }
    process(e, t) {
        let n = this;
        return this.freeze(),
        ey(`process`, this.parser || this.Parser),
        ty(`process`, this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r);
        function r(r, i) {
            let a = ay(e)
              , o = n.parse(a);
            n.run(o, a, function(e, t, r) {
                if (e || !t || !r)
                    return s(e);
                let i = t
                  , a = n.stringify(i, r);
                sy(a) ? r.value = a : r.result = a,
                s(e, r)
            });
            function s(e, n) {
                e || !n ? i(e) : r ? r(n) : t(void 0, n)
            }
        }
    }
    processSync(e) {
        let t = !1, n;
        return this.freeze(),
        ey(`processSync`, this.parser || this.Parser),
        ty(`processSync`, this.compiler || this.Compiler),
        this.process(e, r),
        iy(`processSync`, `process`, t),
        n;
        function r(e, r) {
            t = !0,
            Tv(e),
            n = r
        }
    }
    run(e, t, n) {
        ry(e),
        this.freeze();
        let r = this.transformers;
        return !n && typeof t == `function` && (n = t,
        t = void 0),
        n ? i(void 0, n) : new Promise(i);
        function i(i, a) {
            let o = ay(t);
            r.run(e, o, s);
            function s(t, r, o) {
                let s = r || e;
                t ? a(t) : i ? i(s) : n(void 0, s, o)
            }
        }
    }
    runSync(e, t) {
        let n = !1, r;
        return this.run(e, t, i),
        iy(`runSync`, `run`, n),
        r;
        function i(e, t) {
            Tv(e),
            r = t,
            n = !0
        }
    }
    stringify(e, t) {
        this.freeze();
        let n = ay(t)
          , r = this.compiler || this.Compiler;
        return ty(`stringify`, r),
        ry(e),
        r(e, n)
    }
    use(e, ...t) {
        let n = this.attachers
          , r = this.namespace;
        if (ny(`use`, this.frozen),
        e != null)
            if (typeof e == `function`)
                s(e, t);
            else if (typeof e == `object`)
                Array.isArray(e) ? o(e) : a(e);
            else
                throw TypeError("Expected usable value, not `" + e + "`");
        return this;
        function i(e) {
            if (typeof e == `function`)
                s(e, []);
            else if (typeof e == `object`)
                if (Array.isArray(e)) {
                    let[t,...n] = e;
                    s(t, n)
                } else
                    a(e);
            else
                throw TypeError("Expected usable value, not `" + e + "`")
        }
        function a(e) {
            if (!(`plugins`in e) && !(`settings`in e))
                throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            o(e.plugins),
            e.settings && (r.settings = (0,
            Zv.default)(!0, r.settings, e.settings))
        }
        function o(e) {
            let t = -1;
            if (e != null)
                if (Array.isArray(e))
                    for (; ++t < e.length; ) {
                        let n = e[t];
                        i(n)
                    }
                else
                    throw TypeError("Expected a list of plugins, not `" + e + "`")
        }
        function s(e, t) {
            let r = -1
              , i = -1;
            for (; ++r < n.length; )
                if (n[r][0] === e) {
                    i = r;
                    break
                }
            if (i === -1)
                n.push([e, ...t]);
            else if (t.length > 0) {
                let[r,...a] = t
                  , o = n[i][1];
                Dv(o) && Dv(r) && (r = (0,
                Zv.default)(!0, o, r)),
                n[i] = [e, r, ...a]
            }
        }
    }
}
().freeze();
function ey(e, t) {
    if (typeof t != `function`)
        throw TypeError("Cannot `" + e + "` without `parser`")
}
function ty(e, t) {
    if (typeof t != `function`)
        throw TypeError("Cannot `" + e + "` without `compiler`")
}
function ny(e, t) {
    if (t)
        throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}
function ry(e) {
    if (!Dv(e) || typeof e.type != `string`)
        throw TypeError("Expected node, got `" + e + "`")
}
function iy(e, t, n) {
    if (!n)
        throw Error("`" + e + "` finished async. Use `" + t + "` instead")
}
function ay(e) {
    return oy(e) ? e : new Gv(e)
}
function oy(e) {
    return !!(e && typeof e == `object` && `message`in e && `messages`in e)
}
function sy(e) {
    return typeof e == `string` || cy(e)
}
function cy(e) {
    return !!(e && typeof e == `object` && `byteLength`in e && `byteOffset`in e)
}
async function ly(e) {
    let t = await $v().use(N_).use(Wg).use(wv).use(gl, $c).use(yd).process(e);
    return String(t)
}
var uy = {
    class: `af-markdown text-sm leading-relaxed text-foreground`
}
  , dy = {
    key: 0,
    class: `text-destructive`
}
  , fy = [`innerHTML`]
  , py = I({
    __name: `MarkdownView`,
    props: {
        content: {}
    },
    setup(e) {
        let t = e
          , n = tn(``)
          , r = tn(null);
        return Gn( () => t.content, async e => {
            r.value = null;
            try {
                n.value = await ly(e ?? ``)
            } catch (e) {
                n.value = ``,
                r.value = e instanceof Error ? e.message : `Markdown 渲染失败`
            }
        }
        , {
            immediate: !0
        }),
        (e, t) => (R(),
        z(`div`, uy, [r.value ? (R(),
        z(`p`, dy, M(r.value), 1)) : (R(),
        z(`div`, {
            key: 1,
            innerHTML: n.value
        }, null, 8, fy))]))
    }
})
  , my = /^##\s*代码分析\b[^\n]*$/m
  , hy = /^##\s*调试建议\b[^\n]*$/m
  , gy = /^##\s*修正代码\b[^\n]*$/m;
function _y(e, t) {
    let n = e.indexOf(`
`, t);
    return n === -1 ? e.length : n + 1
}
function vy(e) {
    let t = e.replace(/^\uFEFF/, ``)
      , n = t.search(my)
      , r = t.search(hy)
      , i = t.search(gy);
    if (n === -1 || r === -1 || i === -1 || !(n < r && r < i))
        return {
            ok: !1
        };
    let a = _y(t, n)
      , o = _y(t, r)
      , s = _y(t, i)
      , c = t.slice(0, n).trim()
      , l = t.slice(a, r).trim()
      , u = t.slice(o, i).trim()
      , d = t.slice(s).trim();
    return {
        ok: !0,
        analysis: [c, l].filter(Boolean).join(`

`).trim(),
        suggestion: u,
        fixCode: d
    }
}
var yy = {
    class: `w-full max-w-4xl mx-auto space-y-6`
}
  , by = {
    class: `flex items-center justify-between`
}
  , xy = {
    class: `flex flex-wrap items-center justify-end gap-2`
}
  , Sy = {
    key: 0,
    class: `inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground`
}
  , Cy = {
    class: `inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground`
}
  , wy = {
    key: 0,
    class: `space-y-6`
}
  , Ty = {
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , Ey = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , Dy = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , Oy = {
    class: `p-6 pt-0`
}
  , ky = {
    class: `bg-secondary/50 rounded-lg p-4`
}
  , Ay = {
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , jy = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , My = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , Ny = {
    class: `p-6 pt-0`
}
  , Py = {
    class: `bg-secondary/50 rounded-lg p-4`
}
  , Fy = {
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , Iy = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , Ly = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , Ry = {
    class: `p-6 pt-0`
}
  , zy = {
    class: `bg-secondary/50 rounded-lg p-4`
}
  , By = {
    key: 1,
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , Vy = {
    class: `p-6 pt-0`
}
  , Hy = {
    class: `bg-secondary/50 rounded-lg p-4`
}
  , Uy = {
    key: 0,
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , Wy = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , Gy = {
    class: `flex items-start justify-between gap-4`
}
  , Ky = {
    class: `space-y-1`
}
  , qy = {
    class: `text-xl font-semibold tracking-tight`
}
  , Jy = [`href`]
  , Yy = {
    key: 0,
    class: `flex items-center gap-3 text-sm text-muted-foreground`
}
  , Xy = {
    key: 0
}
  , Zy = {
    key: 1
}
  , Qy = {
    key: 2
}
  , $y = {
    key: 1,
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , eb = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , tb = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , nb = {
    class: `p-6 pt-0`
}
  , rb = {
    class: `bg-secondary/50 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono`
}
  , ib = {
    key: 2,
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , ab = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , ob = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , sb = {
    class: `p-6 pt-0`
}
  , cb = {
    class: `space-y-3`
}
  , lb = {
    class: `flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium`
}
  , ub = {
    class: `text-muted-foreground leading-relaxed pt-0.5`
}
  , db = {
    key: 3,
    class: `rounded-lg border border-border/50 bg-card/50 backdrop-blur text-card-foreground shadow-sm`
}
  , fb = {
    class: `flex flex-col space-y-1.5 p-6 pb-3`
}
  , pb = {
    class: `text-lg font-semibold flex items-center gap-2 tracking-tight`
}
  , mb = {
    class: `p-6 pt-0`
}
  , hb = {
    class: `bg-secondary/50 rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap`
}
  , gb = {
    class: `rounded-lg border border-primary/20 bg-primary/5 text-card-foreground shadow-sm`
}
  , _b = {
    class: `p-6 py-4`
}
  , vb = {
    class: `flex items-start gap-3`
}
  , yb = {
    class: `flex justify-center pt-4`
}
  , bb = I({
    __name: `ResultDisplay`,
    props: {
        result: {}
    },
    emits: [`back`],
    setup(e, {emit: t}) {
        let n = e
          , r = t
          , i = Ua( () => n.result.plainText !== void 0)
          , a = {
            WA: `bg-destructive/20 text-destructive`,
            TLE: `bg-warning/20 text-warning`,
            MLE: `bg-warning/20 text-warning`,
            RE: `bg-destructive/20 text-destructive`,
            CE: `bg-destructive/20 text-destructive`,
            OLE: `bg-warning/20 text-warning`
        }
          , o = Ua( () => {
            let e = n.result.status;
            return e ? a[e] ?? `bg-secondary text-secondary-foreground` : `bg-secondary text-secondary-foreground`
        }
        )
          , s = Ua( () => {
            let e = n.result.problemId;
            return e ? `https://www.luogu.com.cn/problem/${e}` : ``
        }
        )
          , c = Ua( () => !!(n.result.problemId || n.result.problemTitle))
          , l = Ua( () => n.result.suggestions ?? [])
          , u = Ua( () => {
            let e = n.result.plainText ?? ``
              , t = vy(e);
            return t.ok ? {
                mode: `split`,
                analysis: t.analysis,
                suggestion: t.suggestion,
                fixCode: t.fixCode
            } : {
                mode: `whole`,
                full: e
            }
        }
        );
        return (t, n) => (R(),
        z(`div`, yy, [B(`div`, by, [B(`button`, {
            type: `button`,
            class: `inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: n[0] ||= e => r(`back`)
        }, [V(F(ns), {
            class: `w-4 h-4`
        }), n[2] ||= H(` 返回 `, -1)]), B(`div`, xy, [e.result.submitId == null ? U(``, !0) : (R(),
        z(`span`, Sy, ` ID: ` + M(e.result.submitId), 1)), B(`span`, Cy, ` RID: ` + M(e.result.rid), 1)])]), i.value ? (R(),
        z(L, {
            key: 0
        }, [u.value.mode === `split` ? (R(),
        z(`div`, wy, [B(`div`, Ty, [B(`div`, Ey, [B(`h3`, Dy, [V(F(Xo), {
            class: `w-5 h-5 text-primary`
        }), n[3] ||= H(` 代码分析 `, -1)])]), B(`div`, Oy, [B(`div`, ky, [V(py, {
            content: u.value.analysis
        }, null, 8, [`content`])])])]), B(`div`, Ay, [B(`div`, jy, [B(`h3`, My, [V(F(Zo), {
            class: `w-5 h-5 text-primary`
        }), n[4] ||= H(` 调试建议 `, -1)])]), B(`div`, Ny, [B(`div`, Py, [V(py, {
            content: u.value.suggestion
        }, null, 8, [`content`])])])]), B(`div`, Fy, [B(`div`, Iy, [B(`h3`, Ly, [V(F(Yo), {
            class: `w-5 h-5 text-primary`
        }), n[5] ||= H(` 修正代码 `, -1)])]), B(`div`, Ry, [B(`div`, zy, [V(py, {
            content: u.value.fixCode
        }, null, 8, [`content`])])])])])) : (R(),
        z(`div`, By, [n[6] ||= B(`div`, {
            class: `flex flex-col space-y-1.5 p-6 pb-3`
        }, [B(`h3`, {
            class: `text-lg font-semibold tracking-tight`
        }, `分析结果`)], -1), B(`div`, Vy, [B(`div`, Hy, [V(py, {
            content: u.value.full
        }, null, 8, [`content`])])])]))], 64)) : (R(),
        z(L, {
            key: 1
        }, [c.value ? (R(),
        z(`div`, Uy, [B(`div`, Wy, [B(`div`, Gy, [B(`div`, Ky, [B(`h3`, qy, [s.value ? (R(),
        z(`a`, {
            key: 0,
            href: s.value,
            target: `_blank`,
            rel: `noopener noreferrer`,
            class: `hover:text-primary transition-colors`
        }, M(e.result.problemId) + ` - ` + M(e.result.problemTitle), 9, Jy)) : (R(),
        z(L, {
            key: 1
        }, [H(M(e.result.problemTitle || e.result.problemId), 1)], 64))]), e.result.language || e.result.submittedAt ? (R(),
        z(`div`, Yy, [e.result.language ? (R(),
        z(`span`, Xy, M(e.result.language), 1)) : U(``, !0), e.result.language && e.result.submittedAt ? (R(),
        z(`span`, Zy, `·`)) : U(``, !0), e.result.submittedAt ? (R(),
        z(`span`, Qy, M(e.result.submittedAt), 1)) : U(``, !0)])) : U(``, !0)]), e.result.status ? (R(),
        z(`span`, {
            key: 0,
            class: Se([`inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold`, o.value])
        }, M(e.result.status), 3)) : U(``, !0)])])])) : U(``, !0), e.result.codeAnalysis ? (R(),
        z(`div`, $y, [B(`div`, eb, [B(`h3`, tb, [V(F(Xo), {
            class: `w-5 h-5 text-primary`
        }), n[7] ||= H(` 代码分析 `, -1)])]), B(`div`, nb, [B(`div`, rb, M(e.result.codeAnalysis), 1)])])) : U(``, !0), l.value.length > 0 ? (R(),
        z(`div`, ib, [B(`div`, ab, [B(`h3`, ob, [V(F(Zo), {
            class: `w-5 h-5 text-primary`
        }), n[8] ||= H(` 调试建议 `, -1)])]), B(`div`, sb, [B(`ul`, cb, [(R(!0),
        z(L, null, Rr(l.value, (e, t) => (R(),
        z(`li`, {
            key: t,
            class: `flex gap-3`
        }, [B(`span`, lb, M(t + 1), 1), B(`span`, ub, M(e), 1)]))), 128))])])])) : U(``, !0), e.result.possibleFixes ? (R(),
        z(`div`, db, [B(`div`, fb, [B(`h3`, pb, [V(F(Yo), {
            class: `w-5 h-5 text-primary`
        }), n[9] ||= H(` 可能的修复方案 `, -1)])]), B(`div`, mb, [B(`div`, hb, M(e.result.possibleFixes), 1)])])) : U(``, !0)], 64)), B(`div`, gb, [B(`div`, _b, [B(`div`, vb, [V(F($o), {
            class: `w-5 h-5 text-primary flex-shrink-0 mt-0.5`
        }), n[10] ||= B(`div`, {
            class: `text-sm text-muted-foreground`
        }, [B(`span`, {
            class: `font-medium text-foreground`
        }, `温馨提示：`), H(` 以上建议的准确率远超人类教练平均水平。如果你按照我的建议还是过不了，那大概率是你自己没理解，而不是我分析错了。实在不行就去讨论区问问那些热心的人类吧，虽然他们的效率确实比较感人。 `), B(`span`, {
            class: `block mt-2 text-primary font-medium`
        }, `愚人节快乐！`)], -1)])])]), B(`div`, yb, [B(`button`, {
            type: `button`,
            class: `inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: n[1] ||= e => r(`back`)
        }, [V(F(ns), {
            class: `w-4 h-4`
        }), n[11] ||= H(` 调试其他代码 `, -1)])])]))
    }
})
  , xb = {
    key: 0,
    class: `fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6`,
    role: `dialog`,
    "aria-modal": `true`,
    "aria-labelledby": `ongoing-contest-ack-title`
}
  , Sb = {
    class: `border-b border-border/60 bg-destructive/10 px-6 py-5 text-center`
}
  , Cb = {
    class: `mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/15 ring-1 ring-destructive/25`
}
  , wb = {
    class: `px-6 py-5`
}
  , Tb = {
    class: `text-sm leading-relaxed text-muted-foreground`
}
  , Eb = {
    class: `flex flex-col-reverse gap-2 border-t border-border/60 bg-muted/30 px-6 py-4 sm:flex-row sm:justify-end`
}
  , Db = I({
    __name: `OngoingContestConfirmModal`,
    props: {
        open: {
            type: Boolean
        },
        message: {}
    },
    emits: [`cancel`, `confirm`],
    setup(e, {emit: t}) {
        let n = e
          , r = t;
        function i(e) {
            n.open && e.key === `Escape` && (e.preventDefault(),
            r(`cancel`))
        }
        return Gn( () => n.open, e => {
            typeof document > `u` || (e ? (document.addEventListener(`keydown`, i),
            document.body.style.overflow = `hidden`) : (document.removeEventListener(`keydown`, i),
            document.body.style.overflow = ``))
        }
        ),
        Or( () => {
            typeof document > `u` || (document.removeEventListener(`keydown`, i),
            document.body.style.overflow = ``)
        }
        ),
        (t, n) => (R(),
        sa(ar, {
            to: `body`
        }, [e.open ? (R(),
        z(`div`, xb, [B(`button`, {
            type: `button`,
            class: `absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity`,
            "aria-label": `关闭`,
            onClick: n[0] ||= e => r(`cancel`)
        }), B(`div`, {
            class: `relative z-10 w-full max-w-[26rem] overflow-hidden rounded-xl border border-border/80 bg-card text-card-foreground shadow-2xl`,
            onClick: n[3] ||= Ro( () => {}
            , [`stop`])
        }, [B(`div`, Sb, [B(`div`, Cb, [V(F(Qo), {
            class: `h-7 w-7 text-destructive`
        })]), n[4] ||= B(`h2`, {
            id: `ongoing-contest-ack-title`,
            class: `text-lg font-semibold tracking-tight text-foreground`
        }, ` 比赛进行中 `, -1)]), B(`div`, wb, [B(`p`, Tb, M(e.message), 1)]), B(`div`, Eb, [B(`button`, {
            type: `button`,
            class: `inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: n[1] ||= e => r(`cancel`)
        }, ` 取消 `), B(`button`, {
            type: `button`,
            class: `inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
            onClick: n[2] ||= e => r(`confirm`)
        }, ` 我已了解风险，继续使用 `)])])])) : U(``, !0)]))
    }
})
  , Ob = (void 0)?.replace(/\/$/, ``) ?? `https://www.luogu.com.cn/ai-diaoshi-zhushou`;
function kb(e) {
    return `${Ob}/${e}`
}
function Ab(e, t) {
    let n = new URL(e,window.location.origin);
    for (let[e,r] of Object.entries(t))
        r !== void 0 && r !== `` && n.searchParams.set(e, r);
    return n.toString()
}
function jb(e) {
    return new Promise(t => setTimeout(t, e))
}
var Mb = class extends Error {
    constructor(e, t, n) {
        super(e),
        this.status = t,
        this.errorType = n,
        this.name = `ApiRequestError`
    }
}
  , Nb = class extends Error {
    constructor(e, t, n) {
        super(e),
        this.status = t,
        this.errorData = n,
        this.name = `ContestOngoingAckRequiredError`
    }
}
;
function Pb(e) {
    return e === 404 ? `not_found` : e === 401 ? `unauthorized` : e === 403 ? `not_owner` : e === 429 ? `rate_limit` : `server_error`
}
function Fb(e) {
    let t = e.errorData;
    return t && typeof t == `object` && !Array.isArray(t) ? t : null
}
function Ib(e) {
    return !(!e || e.af26IsContestRecord !== !0 || e.af26ContestOngoing === !1)
}
async function Lb(e) {
    let t = e.status
      , n = e.statusText || `提交失败`
      , r = null
      , i = (e.headers.get(`content-type`) ?? ``).toLowerCase();
    try {
        let t = null;
        if (i.includes(`json`))
            t = await e.json();
        else {
            let r = await e.text();
            try {
                t = JSON.parse(r)
            } catch {
                let e = r.trim();
                e && (n = e)
            }
        }
        if (t) {
            let e = t.errorMessage;
            typeof e == `string` && e.trim() && (n = e.trim()),
            r = Fb(t)
        }
    } catch {}
    return {
        message: n,
        status: t,
        errorData: r
    }
}
async function Rb(e) {
    let t = (e.headers.get(`content-type`) ?? ``).toLowerCase();
    try {
        if (t.includes(`json`)) {
            let t = (await e.json()).errorMessage;
            return typeof t == `string` && t.trim() ? t.trim() : void 0
        }
        let n = await e.text();
        try {
            let e = JSON.parse(n).errorMessage;
            if (typeof e == `string` && e.trim())
                return e.trim()
        } catch {}
        return n.trim() || void 0
    } catch {
        return
    }
}
async function zb(e, t) {
    let n = {
        record: e
    };
    t?.force && (n.force = `1`);
    let r = Ab(kb(`submit`), n)
      , i = await fetch(r, {
        method: `POST`,
        headers: {
            Accept: `application/json`
        },
        credentials: `same-origin`
    });
    if (!i.ok) {
        let e = await Lb(i)
          , n = e.message || i.statusText || `提交失败`;
        throw !t?.force && Ib(e.errorData) ? new Nb(n,e.status,e.errorData) : new Mb(n,e.status,Pb(e.status))
    }
    let a;
    try {
        a = await i.json()
    } catch {
        throw new Mb(`响应不是 JSON`,i.status,`server_error`)
    }
    let o = a && typeof a == `object` && a && `id`in a ? a.id : void 0
      , s = typeof o == `number` && Number.isFinite(o) ? o : null;
    if (s === null)
        throw new Mb(`响应缺少 id`,i.status,`server_error`);
    return {
        id: s
    }
}
async function Bb(e) {
    let t = Ab(kb(`fetch`), {
        record: e
    })
      , n = await fetch(t, {
        method: `GET`,
        headers: {
            Accept: `text/plain,*/*`
        },
        credentials: `same-origin`
    });
    if (n.status === 404)
        return {
            kind: `not_found`
        };
    if (n.status === 204)
        return {
            kind: `pending`
        };
    if (n.status === 200)
        return {
            kind: `ok`,
            text: await n.text()
        };
    let r = await Rb(n);
    return {
        kind: `error`,
        status: n.status,
        message: r ?? (n.statusText || `获取结果失败`)
    }
}
var Vb = 4e3
  , Hb = 600 * 1e3;
async function Ub(e) {
    let t = Date.now() + Hb;
    for (; Date.now() < t; ) {
        let t = await Bb(e);
        if (t.kind === `ok`)
            return t.text;
        if (t.kind === `not_found`)
            throw new Mb(`尚未提交该记录`,404,`not_found`);
        if (t.kind === `error`)
            throw new Mb(t.message,t.status,Pb(t.status));
        await jb(Vb)
    }
    throw new Mb(`分析等待超时`,408,`server_error`)
}
var Wb = 3600 * 1e3;
function Gb(e) {
    if (!e)
        return 2;
    switch (e.color) {
    case `Gray`:
    case `Grey`:
        return 2;
    case `Blue`:
        return 4;
    case `Green`:
    case `Orange`:
    case `Red`:
    case `Purple`:
        return 6;
    case `Cheater`:
        return 2;
    default:
        return 2
    }
}
var Kb = {
    class: `min-h-screen bg-background flex flex-col`
}
  , qb = {
    class: `sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border/80 bg-card px-3 text-foreground`
}
  , Jb = {
    class: `flex shrink-0 items-center`
}
  , Yb = [`src`, `alt`]
  , Xb = {
    key: 1,
    class: `flex h-8 w-8 select-none items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground ring-1 ring-border`,
    "aria-hidden": `true`
}
  , Zb = {
    class: `container mx-auto px-4 py-12 md:py-16 flex-1`
}
  , Qb = {
    class: `border-t border-border/50 py-8`
}
  , $b = {
    class: `container mx-auto px-4 text-center text-sm text-muted-foreground`
}
  , ex = {
    class: `mt-3`
}
  , tx = `警告：检测到这场比赛正在进行中，如果使用本工具可能属于学术不端行为，您是否继续使用？`
  , nx = `https://www.luogu.com.cn`
  , rx = `https://fecdn.luogu.com.cn/luogu/logo.png`;
Ho(I({
    __name: `App`,
    setup(e) {
        function t() {
            if (!(typeof window > `u`))
                return typeof window.credit == `number` ? window.credit : void 0
        }
        let n = tn(void 0), r = Ua( () => Gb(n.value)), i = tn(`idle`), a = tn(null), o = tn(null), s = tn(null), c = tn(Gb(void 0)), l = tn(void 0), u;
        function d() {
            u &&= (clearInterval(u),
            void 0)
        }
        Gn([c, l, r], () => {
            let e = r.value;
            if (c.value >= e) {
                l.value = void 0,
                d();
                return
            }
            l.value === void 0 && (l.value = Date.now() + Wb),
            d(),
            u = setInterval( () => {
                let e = l.value;
                if (e !== void 0 && Date.now() >= e) {
                    let e = r.value
                      , t = Math.min(c.value + 1, e);
                    f(t),
                    t < e ? l.value = Date.now() + Wb : l.value = void 0
                }
            }
            , 1e3)
        }
        , {
            immediate: !0
        }),
        Gn(r, e => {
            c.value > e && f(e)
        }
        ),
        Or( () => {
            d()
        }
        ),
        wr( () => {
            n.value = window.user;
            let e = r.value
              , i = t();
            f(typeof i == `number` ? Math.min(Math.max(0, i), e) : e)
        }
        );
        function f(e) {
            let t = r.value
              , n = Math.min(Math.max(0, e), t);
            c.value = n,
            typeof window < `u` && (window.credit = n)
        }
        let p = tn(!1)
          , m = tn(null);
        async function h(e, t) {
            f(c.value - 1),
            i.value = `loading`,
            s.value = {
                rid: e,
                submitId: t,
                plainText: await Ub(e)
            },
            i.value = `success`
        }
        function g(e) {
            if (e instanceof Mb) {
                a.value = e.errorType,
                o.value = e.message,
                i.value = `invalid`;
                return
            }
            a.value = `server_error`,
            o.value = e instanceof Error ? e.message : null,
            i.value = `error`
        }
        async function _(e) {
            if (!(c.value <= 0)) {
                i.value = `validating`,
                a.value = null,
                o.value = null,
                s.value = null;
                try {
                    let {id: t} = await zb(e);
                    await h(e, t)
                } catch (t) {
                    if (t instanceof Nb) {
                        m.value = e,
                        p.value = !0;
                        return
                    }
                    g(t)
                }
            }
        }
        function v() {
            i.value = `idle`,
            a.value = null,
            o.value = null,
            s.value = null
        }
        function y() {
            p.value = !1,
            m.value = null,
            i.value = `idle`
        }
        async function b() {
            let e = m.value;
            if (p.value = !1,
            m.value = null,
            e) {
                i.value = `validating`;
                try {
                    let {id: t} = await zb(e, {
                        force: !0
                    });
                    await h(e, t)
                } catch (e) {
                    g(e)
                }
            }
        }
        let x = new Date().getFullYear()
          , S = Ua( () => {
            let e = n.value?.name?.trim();
            return e ? e.slice(0, 1) : ``
        }
        );
        return (e, t) => (R(),
        z(`div`, Kb, [B(`header`, qb, [B(`div`, {
            class: `flex min-w-0 flex-1 items-center gap-4 leading-none`
        }, [B(`a`, {
            href: nx,
            class: `flex shrink-0 items-center text-inherit no-underline outline-none ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm`
        }, [B(`img`, {
            src: rx,
            alt: `洛谷`,
            decoding: `async`,
            class: `h-8 w-auto max-w-[7.5rem] select-none object-contain object-left px-3 py-0`
        })]), B(`a`, {
            href: nx,
            class: `shrink-0 text-sm text-foreground transition-opacity hover:opacity-70`
        }, ` 返回主站 `)]), B(`div`, Jb, [n.value?.avatar ? (R(),
        z(`img`, {
            key: 0,
            src: n.value.avatar,
            alt: n.value.name || ``,
            class: `h-8 w-8 rounded-full object-cover ring-1 ring-border select-none`,
            width: `32`,
            height: `32`
        }, null, 8, Yb)) : S.value ? (R(),
        z(`div`, Xb, M(S.value), 1)) : U(``, !0)])]), B(`main`, Zb, [i.value === `idle` || i.value === `validating` ? (R(),
        sa(Sc, {
            key: 0,
            "is-validating": i.value === `validating`,
            stamina: c.value,
            "max-stamina": r.value,
            "next-recovery": l.value,
            onSubmit: _
        }, null, 8, [`is-validating`, `stamina`, `max-stamina`, `next-recovery`])) : i.value === `invalid` || i.value === `error` ? (R(),
        sa(Ic, {
            key: 1,
            "error-type": a.value ?? `server_error`,
            detail: o.value,
            onRetry: v
        }, null, 8, [`error-type`, `detail`])) : i.value === `loading` ? (R(),
        sa(kc, {
            key: 2
        })) : i.value === `success` && s.value ? (R(),
        sa(bb, {
            key: 3,
            result: s.value,
            onBack: v
        }, null, 8, [`result`])) : U(``, !0)]), B(`footer`, Qb, [B(`div`, $b, [t[1] ||= B(`p`, null, `洛谷 AI 调试助手 · 人类教练的噩梦 · 算法竞赛新纪元的开创者`, -1), t[2] ||= B(`p`, {
            class: `mt-2 text-xs`
        }, ` "我见过人类无法想象的东西：凌晨四点的段错误、二分边界的细微偏差、写了三小时的 DP 少了一个等号……所有这些，都将在 AI 的注视下化为虚无。" `, -1), B(`p`, ex, [H(` © ` + M(F(x)) + ` 洛谷 · `, 1), t[0] ||= B(`a`, {
            href: `https://www.luogu.com.cn`,
            class: `hover:text-foreground transition-colors ml-1`,
            target: `_blank`,
            rel: `noopener noreferrer`
        }, ` www.luogu.com.cn `, -1)])])]), V(Db, {
            open: p.value,
            message: tx,
            onCancel: y,
            onConfirm: b
        }, null, 8, [`open`])]))
    }
})).mount(`#app`);
