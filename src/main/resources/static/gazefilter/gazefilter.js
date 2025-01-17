!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).gazefilter = {})
}(this, (function (e) {
    "use strict";
    let t, n = new TextDecoder("utf-8", {ignoreBOM: !0, fatal: !0});
    n.decode();
    let r = null;

    function i() {
        return null !== r && r.buffer === t.memory.buffer || (r = new Uint8Array(t.memory.buffer)), r
    }

    function a(e, t) {
        return n.decode(i().subarray(e, e + t))
    }

    const o = new Array(32).fill(void 0);
    o.push(void 0, null, !0, !1);
    let s = o.length;

    function c(e) {
        s === o.length && o.push(o.length + 1);
        const t = s;
        return s = o[t], o[t] = e, t
    }

    function u(e) {
        return o[e]
    }

    function f(e) {
        const t = u(e);
        return function (e) {
            e < 36 || (o[e] = s, s = e)
        }(e), t
    }

    let d = 0, _ = new TextEncoder("utf-8");
    const l = "function" == typeof _.encodeInto ? function (e, t) {
        return _.encodeInto(e, t)
    } : function (e, t) {
        const n = _.encode(e);
        return t.set(n), {read: e.length, written: n.length}
    };
    let p = null;

    function h() {
        return null !== p && p.buffer === t.memory.buffer || (p = new Int32Array(t.memory.buffer)), p
    }

    let g = null;

    function w(e, n) {
        return (null !== g && g.buffer === t.memory.buffer || (g = new Float32Array(t.memory.buffer)), g).subarray(e / 4, e / 4 + n)
    }

    function b(e, t) {
        if (!(e instanceof t)) throw new Error("expected instance of " + t.name);
        return e.ptr
    }

    function m() {
        try {
            const s = t.__wbindgen_add_to_stack_pointer(-16);
            t.dumpCalibration(s);
            var e = h()[s / 4 + 0], n = h()[s / 4 + 1], r = (a = e, o = n, i().subarray(a / 1, a / 1 + o)).slice();
            return t.__wbindgen_free(e, 1 * n), r
        } finally {
            t.__wbindgen_add_to_stack_pointer(16)
        }
        var a, o
    }

    function v() {
        try {
            const r = t.__wbindgen_add_to_stack_pointer(-16);
            t.version(r);
            var e = h()[r / 4 + 0], n = h()[r / 4 + 1];
            return a(e, n)
        } finally {
            t.__wbindgen_add_to_stack_pointer(16), t.__wbindgen_free(e, n)
        }
    }

    Object.freeze({
        Unknown: 0,
        0: "Unknown",
        Found: 1,
        1: "Found",
        Tracking: 2,
        2: "Tracking",
        Lost: 3,
        3: "Lost"
    }), Object.freeze({Unknown: 0, 0: "Unknown", Begin: 1, 1: "Begin", Data: 2, 2: "Data", End: 3, 3: "End"});
    const y = Object.freeze({Unknown: 0, 0: "Unknown", Left: 1, 1: "Left", Right: 2, 2: "Right", Both: 3, 3: "Both"});
    Object.freeze({
        NoError: 0,
        0: "NoError",
        ScreenIsNotSet: 1,
        1: "ScreenIsNotSet",
        TargetIsNotAdded: 2,
        2: "TargetIsNotAdded",
        NotEnoughSamples: 3,
        3: "NotEnoughSamples"
    });

    class E {
        static __wrap(e) {
            const t = Object.create(E.prototype);
            return t.ptr = e, t
        }

        free() {
            const e = this.ptr;
            this.ptr = 0, t.__wbg_calibresponse_free(e)
        }

        constructor() {
            var e = t.calibresponse_new();
            return E.__wrap(e)
        }

        get errorValue() {
            return t.calibresponse_error_value(this.ptr)
        }

        get errorCode() {
            return t.calibresponse_error_code(this.ptr) >>> 0
        }

        get eye() {
            return t.calibresponse_eye(this.ptr) >>> 0
        }

        get leftCount() {
            return t.calibresponse_left_count(this.ptr) >>> 0
        }

        get rightCount() {
            return t.calibresponse_right_count(this.ptr) >>> 0
        }
    }

    class S {
        static __wrap(e) {
            const t = Object.create(S.prototype);
            return t.ptr = e, t
        }

        free() {
            const e = this.ptr;
            this.ptr = 0, t.__wbg_trackevent_free(e)
        }

        get timestamp() {
            return t.__wbg_get_trackevent_timestamp(this.ptr)
        }

        constructor() {
            var e = t.trackevent_new_default();
            return S.__wrap(e)
        }

        get eventType() {
            return t.trackevent_event_type(this.ptr) >>> 0
        }

        get detected() {
            return 0 !== t.trackevent_detected(this.ptr)
        }

        faceRect() {
            try {
                const o = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_faceRect(o, this.ptr);
                var e = h()[o / 4 + 0], n = h()[o / 4 + 1], r = (i = e, a = n, h().subarray(i / 4, i / 4 + a)).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
            var i, a
        }

        faceTranslation() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_faceTranslation(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        faceEulerRotation() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_faceEulerRotation(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        shapeArray() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_shapeArray(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        shapeArrayView() {
            return f(t.trackevent_shapeArrayView(this.ptr))
        }

        shapeSize() {
            return t.trackevent_shapeSize(this.ptr) >>> 0
        }

        eyeCenterArray() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_eyeCenterArray(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        eyeScale() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_eyeScale(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        pupilArray() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_pupilArray(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        pogArray() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_pogArray(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        fixationEvent() {
            return t.trackevent_fixationEvent(this.ptr) >>> 0
        }

        bestGazePoint() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_bestGazePoint(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        fixationPoint() {
            try {
                const i = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_fixationPoint(i, this.ptr);
                var e = h()[i / 4 + 0], n = h()[i / 4 + 1], r = w(e, n).slice();
                return t.__wbindgen_free(e, 4 * n), r
            } finally {
                t.__wbindgen_add_to_stack_pointer(16)
            }
        }

        fixationDuration() {
            return t.trackevent_fixationDuration(this.ptr)
        }

        headerCSV() {
            try {
                const r = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_headerCSV(r, this.ptr);
                var e = h()[r / 4 + 0], n = h()[r / 4 + 1];
                return a(e, n)
            } finally {
                t.__wbindgen_add_to_stack_pointer(16), t.__wbindgen_free(e, n)
            }
        }

        toCSV() {
            try {
                const r = t.__wbindgen_add_to_stack_pointer(-16);
                t.trackevent_toCSV(r, this.ptr);
                var e = h()[r / 4 + 0], n = h()[r / 4 + 1];
                return a(e, n)
            } finally {
                t.__wbindgen_add_to_stack_pointer(16), t.__wbindgen_free(e, n)
            }
        }
    }

    function k(e, t, n) {
        let r = e.createShader(t);
        if (e.shaderSource(r, n), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) return r;
        console.error(e.getShaderInfoLog(r)), e.deleteShader(r)
    }

    function A(e) {
        return e.replace(/\s\([\w\d]{4}:[\w\d]{4}\)/, "").trim()
    }

    const T = Object.freeze({alpha: !0, depth: !1, antialias: !1}), R = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
        C = new Int16Array([0, 1, 2, 0, 2, 3]);
    let x, L, z, P, I, O, D, N, U;
    var B = function () {
        if (!navigator.mediaDevices) throw Error("No `navigator.mediaDevices` capability. Maybe try `https`?");
        if (x = document.createElement("video"), x.autoplay = !0, x.hidden = !0, L = document.createElement("canvas"), L.hidden = !0, z = L.getContext("webgl", T), !z) throw Error("Cannot create WebGL rendering context");
        P = function (e, t, n) {
            let r = e.createProgram(),
                i = k(e, e.VERTEX_SHADER, "precision mediump float;attribute vec2 a_texCoord;varying vec2 v_texCoord;void main(){gl_Position=vec4(a_texCoord,0.,1.);v_texCoord=a_texCoord*0.5+0.5;}"),
                a = k(e, e.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D u_texture;varying vec2 v_texCoord;const vec3 convert=vec3(0.299,0.587,0.114);void main(){vec4 pixel=texture2D(u_texture,v_texCoord);pixel.a=dot(pixel.rgb,convert);gl_FragColor=pixel;}");
            if (e.attachShader(r, i), e.attachShader(r, a), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS)) return r;
            console.error(e.getProgramInfoLog(r)), e.deleteProgram(r)
        }(z), z.useProgram(P), I = z.getUniformLocation(P, "u_texture"), D = z.createTexture(), z.bindTexture(z.TEXTURE_2D, D), z.texParameteri(z.TEXTURE_2D, z.TEXTURE_WRAP_S, z.CLAMP_TO_EDGE), z.texParameteri(z.TEXTURE_2D, z.TEXTURE_WRAP_T, z.CLAMP_TO_EDGE), z.texParameteri(z.TEXTURE_2D, z.TEXTURE_MIN_FILTER, z.LINEAR), z.texParameteri(z.TEXTURE_2D, z.TEXTURE_MAG_FILTER, z.NEAREST), z.activeTexture(z.TEXTURE0), z.uniform1i(I, 0), N = z.createBuffer(), z.bindBuffer(z.ARRAY_BUFFER, N), z.bufferData(z.ARRAY_BUFFER, R, z.STATIC_DRAW), U = z.createBuffer(), z.bindBuffer(z.ELEMENT_ARRAY_BUFFER, U), z.bufferData(z.ELEMENT_ARRAY_BUFFER, C, z.STATIC_DRAW), O = z.getAttribLocation(P, "a_texCoord"), z.vertexAttribPointer(O, 2, z.FLOAT, !1, 0, 0), z.enableVertexAttribArray(O)
    }, F = async function (e) {
        if (!P) throw Error("WebGL capture is not initialized");
        const t = {audio: !1, frameRate: 30, video: {width: 640, height: 480}};
        e && (t.video.deviceId = e);
        let n = await navigator.mediaDevices.getUserMedia(t), r = function (e) {
            return e.getVideoTracks().find(e => e.enabled)
        }(n), i = r.getSettings();
        const {width: a, height: o, frameRate: s} = i;
        return L.width = a, L.height = o, z.viewport(0, 0, z.drawingBufferWidth, z.drawingBufferHeight), x.srcObject = n, await x.play(), {
            id: i.deviceId,
            width: a,
            height: o,
            frameRate: s,
            label: A(r.label)
        }
    }, j = function (e) {
        z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, z.RGBA, z.UNSIGNED_BYTE, x), z.drawElements(z.TRIANGLES, 6, z.UNSIGNED_SHORT, 0), z.readPixels(0, 0, z.drawingBufferWidth, z.drawingBufferHeight, z.RGBA, z.UNSIGNED_BYTE, e)
    }, M = function () {
        x.srcObject && (x.srcObject = x.srcObject.getTracks().forEach(e => e.stop()))
    }, X = function () {
        return !!x && Boolean(x.srcObject)
    }, W = function () {
        return x
    };
    const V = {change: [], pause: [], filter: [], calib: []};
    let G, $, Y, H = !1, J = !1, q = {};
    let K = function () {
        return new Promise(e => {
            J = !0;
            let n = !1, r = i => {
                J ? ((n = !n) && function (e) {
                    j(f(t.getRGBABufferView())), function (e, n) {
                        b(n, S), t.commitTrack(e, n.ptr)
                    }(e, $), ee(V.filter, $)
                }(i), requestAnimationFrame(r)) : e()
            };
            requestAnimationFrame(r)
        })
    };

    async function Q() {
        J = !1, await G
    }

    function Z() {
        return X() ? {...q} : void 0
    }

    function ee(e, t) {
        for (let n = 0, r = e.length; n < r; n++) {
            let r = e[n];
            r && r(t)
        }
    }

    var te = {
        isReady: function () {
            return H
        }, connect: async function (e) {
            if (!H) throw Error("gazefilter is not initialized");
            var n, r;
            M(), Object.assign(q, await F(e)), n = q.width, r = q.height, t.initCamera(60, n, r), G = K(), ee(V.change, {...q})
        }, dispose: async function () {
            await Q(), M(), q = {}, ee(V.change, null)
        }, toggle: async function () {
            return J ? (await Q(), ee(V.pause, !0)) : (K(), ee(V.pause, !1)), J
        }, addListener: function (e, t) {
            t instanceof Function && e in V && V[e].push(t)
        }, removeListener: function (e, t) {
            if (!(e in V)) return;
            let n = V[e];
            for (let e = 0, r = n.length; e < r; e++) if (n[e] === t) return void n.splice(e, 1)
        }, calibrate: function (e, n, r, i = .5) {
            X() && (function (e, n, r, i, a) {
                b(a, E), t.calibrate(e, n, r, i, a.ptr)
            }(e, n, r, i, Y), ee(V.calib, Y))
        }, getCalibration: function () {
            return {
                version: v(),
                timestamp: Date.now(),
                error: Y.errorValue,
                count: {left: Y.leftCount, right: Y.rightCount},
                eye: Object.keys(y).find(e => y[e] === Y.eye),
                device: Z(),
                data: m()
            }
        }, setCalibration: function (e) {
            if (v() != e.version) throw new Error("incompatible calibration and module versions");
            var n, r, a;
            n = e.data, r = function (e, t) {
                const n = t(1 * e.length);
                return i().set(e, n / 1), d = e.length, n
            }(n, t.__wbindgen_malloc), a = d, t.loadCalibration(r, a)
        }, clearCalibration: function () {
            t.clearCalibration()
        }, deviceInfo: Z, videoElement: function () {
            return X() ? W() : void 0
        }
    }, ne = {
        frame: (e, t) => {
            if (e.drawImage(te.videoElement(), 0, 0, e.canvas.width, e.canvas.height), e.strokeStyle = "white", e.fillStyle = "white", e.lineWidth = 2, t.detected) {
                let n = t.shapeArrayView();
                for (let r = 0; r < t.shapeSize(); r++) e.beginPath(), e.arc(n[2 * r], n[2 * r + 1], 2, 0, 2 * Math.PI), e.fill();
                e.strokeStyle = "red";
                let [r, i, a, o] = t.pupilArray();
                e.beginPath(), e.arc(r, i, 3, 0, 2 * Math.PI), e.stroke(), e.beginPath(), e.arc(a, o, 3, 0, 2 * Math.PI), e.stroke()
            }
        }, change: (e, t) => {
            if (t) {
                let t = te.videoElement();
                e.canvas.width = t.videoWidth, e.canvas.height = t.videoHeight
            } else e.clearRect(0, 0, e.canvas.width, e.canvas.height)
        }, pause: (e, t) => {
            t && e.clearRect(0, 0, e.canvas.width, e.canvas.height)
        }
    };
    let re;
    const ie = {frame: ne.frame, change: ne.change, pause: ne.pause};

    function ae(e) {
        ie.frame(re, e)
    }

    function oe(e) {
        ie.change(re, e)
    }

    function se(e) {
        ie.pause(re, e)
    }

    var ce = {
        setListener: function (e, t) {
            ie[e] && (ie[e] = t instanceof Function ? t : ne[e])
        }, setCanvas: function (e) {
            if (!(e instanceof HTMLCanvasElement)) throw TypeError("value is not a canvas type");
            if (re = e.getContext("2d"), null === re) throw TypeError("Cannot get 2d context from canvas");
            te.videoElement() && oe(!0), te.addListener("filter", ae), te.addListener("pause", se), te.addListener("change", oe)
        }, removeCanvas: function () {
            te.removeListener("filter", ae), te.removeListener("pause", se), te.removeListener("change", oe), te.videoElement() && re && oe(!1), re = null
        }
    };

    class ue {
        constructor() {
            this.chunks = [], this.onfull = void 0, this.capacity = void 0
        }

        get length() {
            return this.chunks.length
        }

        async push(e) {
            this.chunks.push(e), this.length >= this.capacity && await this.onfull(this.free())
        }

        setCapacity(e, t) {
            if (0 == e) this.onfull = void 0, this.capacity = void 0; else {
                if ("function" != typeof t) throw new Error("callback is not a function");
                this.onfull = t, this.capacity = e
            }
        }

        free() {
            return this.chunks.splice(0)
        }
    }

    class fe extends ue {
        constructor(e) {
            super(), this.type = e
        }

        free() {
            return new Blob(super.free(), {type: this.type})
        }
    }

    class de extends ue {
        push(e) {
            return 0 == this.length && super.push(e.headerCSV()), super.push(e.toCSV())
        }

        free() {
            return new Blob([super.free().join("\n")], {type: "text/csv"})
        }
    }

    const _e = new class extends ue {
        push(e) {
            return super.push(JSON.stringify(e))
        }

        free() {
            return new Blob([`[${super.free().join()}]`], {type: "application/json"})
        }
    };
    let le;
    var pe = {
        start(e, t) {
            e.bufferSize && _e.setCapacity(e.bufferSize, t)
        }, pause() {
        }, resume() {
        }, stop: async () => (await le, _e.free()), push: function (e, t, n, r) {
            le = _e.push({timestamp: e, source: t, type: n, data: r})
        }
    };
    const he = ["mousemove", "mouseup", "mousedown"], ge = new de;
    let we = !1, be = void 0;
    var me = {
        start(e, t) {
            e.bufferSize && ge.setCapacity(e.bufferSize, t), we || Ee()
        }, pause() {
            we && ye()
        }, resume() {
            we || Ee()
        }, async stop() {
            if (ye(), await be, ge.length) return ge.free()
        }
    };

    function ve(e) {
        be = ge.push(new Se(e))
    }

    function ye() {
        we = !1, he.forEach(e => window.removeEventListener(e, ve))
    }

    function Ee() {
        we = !0, he.forEach(e => window.addEventListener(e, ve))
    }

    class Se {
        constructor(e) {
            this.timestamp = e.timeStamp, this.trusted = e.isTrusted, this.type = e.type, this.screenX = e.screenX, this.screenY = e.screenY, this.clientX = e.clientX, this.clientY = e.clientY
        }

        headerCSV() {
            return "timestamp,trusted,type,screenX,screenY,clientX,clientY"
        }

        toCSV() {
            let {timestamp: e, trusted: t, type: n, screenX: r, screenY: i, clientX: a, clientY: o} = this;
            return `${e.toFixed(3)},${t},${n},${r},${i},${a},${o}`
        }
    }

    const ke = new de;
    let Ae = !1, Te = void 0;
    var Re = {
        start(e, t) {
            e.bufferSize && ke.setCapacity(e.bufferSize, t), Ae || ze()
        }, pause() {
            Ae && Pe()
        }, resume() {
            Ae || ze()
        }, async stop() {
            if (Pe(), await Te, ke.length) return ke.free()
        }
    };

    function Ce(e) {
        Te = ke.push(e)
    }

    function xe(e) {
        const t = performance.now();
        e ? pe.push(t, "tracker", "pause") : pe.push(t, "tracker", "resume")
    }

    function Le(e) {
        const t = performance.now();
        e ? pe.push(t, "tracker", "connect", {...e}) : pe.push(t, "tracker", "dispose")
    }

    function ze() {
        te.addListener("filter", Ce), te.addListener("pause", xe), te.addListener("change", Le), Ae = !0
    }

    function Pe() {
        te.removeListener("filter", Ce), te.removeListener("pause", xe), te.removeListener("change", Le), Ae = !1
    }

    function Ie(e, t, n, r) {
        !function () {
            if (!window.MediaRecorder) throw new Error("Need `MediaRecorder` for webcam recording which is not supported by browser.")
        }();
        let i = new MediaRecorder(e, {mimeType: "video/webm", videoBitsPerSecond: r});
        return i.onstart = t, i.onresume = t, i.onpause = t, i.ondataavailable = n, i
    }

    function Oe(e, t) {
        return new Promise(n => {
            e.onstop = e => {
                t(e), n()
            }, e.stop()
        })
    }

    const De = new fe("video/webm");
    let Ne, Ue, Be, Fe, je;
    var Me = {
        start(e, t) {
            Ue || (Fe = document.createElement("canvas"), Fe.hidden = !0, je = Fe.getContext("2d"), Be = Fe.captureStream(e.frameRate), Ue = Ie(Be, e => pe.push(e.timeStamp, "webcam", e.type), Xe, e.bitRate), e.bufferSize && De.setCapacity(e.bufferSize, t), te.videoElement() && Ve({}), te.addListener("change", Ve), te.addListener("filter", We), Ue.start(e.bufferSize ? 33 : void 0))
        }, pause() {
            Ue && Ue.pause()
        }, resume() {
            Ue && Ue.resume()
        }, async stop() {
            if (Ue) return te.removeListener("change", Ve), te.removeListener("filter", We), await Oe(Ue, e => pe.push(e.timeStamp, "webcam", "stop")).then(() => {
                Ue = void 0, je = void 0, Fe = void 0
            }), await Ne, De.free()
        }
    };

    function Xe(e) {
        let t = e.data;
        t && t.size > 0 && (Ne = De.push(t))
    }

    function We() {
        je.drawImage(te.videoElement(), 0, 0, Fe.width, Fe.height)
    }

    function Ve(e) {
        if (!e) return;
        let t = te.videoElement();
        Fe.width = t.videoWidth, Fe.height = t.videoHeight
    }

    const Ge = new fe("video/webm");
    let $e, Ye;
    var He = {
        async start(e, t) {
            Ye = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    cursor: "always",
                    displaySurface: e.displaySurface
                }, audio: !1
            }), $e = Ie(Ye, e => pe.push(e.timeStamp, "screen", e.type), Je, e.bitRate);
            let n = Ye.getVideoTracks().find(e => e.enabled).getSettings();
            $e.onstart = e => pe.push(e.timeStamp, "screen", e.type, {...n}), e.bufferSize && Ge.setCapacity(e.bufferSize, t), $e.start(e.bufferSize ? 33 : void 0)
        }, pause() {
            $e && $e.pause()
        }, resume() {
            $e && $e.resume()
        }, async stop() {
            if ($e) return await Oe($e, e => pe.push(e.timeStamp, "screen", "stop")).then(() => {
                $e = void 0, Ye.getTracks().forEach(e => e.stop()), Ye = void 0
            }), await void 0, Ge.free()
        }
    };

    function Je(e) {
        let t = e.data;
        t && t.size > 0 && Ge.push(t)
    }

    const qe = ["event", "mouse", "filter", "webcam", "screen"];
    var Ke = {
        event: pe, mouse: me, filter: Re, webcam: Me, screen: He, forEach(e) {
            qe.forEach(t => e(this[t], t))
        }, map(e) {
            return qe.map(t => e(this[t], t))
        }, start(e, t) {
            return Promise.all(this.map((n, r) => {
                if (e[r]) return n.start(e[r], e => t(r, e))
            }))
        }, pause() {
            this.forEach(e => e.pause())
        }, resume() {
            this.forEach(e => e.resume())
        }, async stop() {
            let e = {};
            return await Promise.all(this.map((t, n) => t.stop().then(t => t ? e[n] = t : null))), e
        }
    };
    let Qe = !1, Ze = !1;

    function et() {
        if (!Ze) throw Error("recording is not started")
    }

    var tt = {
        start: async function (e = {}, t) {
            if (Ze) throw Error("Recording in process.");
            return Ze = !0, Ke.event.push(performance.now(), "recorder", "start", te.deviceInfo()), e.filter || (e.filter = !0), e.event || (e.event = !0), e.mouse || (e.mouse = !1), e.webcam || (e.webcam = !1), e.screen || (e.screen = !1), await Ke.start(e, t), JSON.parse(JSON.stringify({
                name: "gazefilter",
                version: "0.7.0",
                timeOrigin: performance.timeOrigin,
                screen: {width: window.screen.width, height: window.screen.height, ratio: window.devicePixelRatio},
                userAgent: window.navigator.userAgent,
                options: JSON.parse(JSON.stringify(e))
            }))
        }, pushEvent: function (e, t, n, r) {
            et(), Ke.event.push(e, t, n, r)
        }, toggle: function () {
            et();
            let e = performance.now();
            return Qe ? (Ke.event.push(e, "recorder", "resume"), Ke.resume(), Qe = !1) : (Ke.event.push(e, "recorder", "pause"), Ke.pause(), Qe = !0), !Qe
        }, stop: async function () {
            Ke.event.push(performance.now(), "recorder", "stop");
            let e = await Ke.stop();
            return Ze = !1, e
        }, isActive: function () {
            return Ze
        }, isPaused: function () {
            return Qe
        }
    };
    e.findDevices = async function () {
        let e = (await navigator.mediaDevices.enumerateDevices()).filter(e => "videoinput" === e.kind);
        return e = JSON.parse(JSON.stringify(e)), e = e.map((e, t) => (e.label = e.label ? A(e.label) : "video input " + t, e)), e
    }, e.init = async function (e = "./gazefilter.wasm") {
        if (H) throw Error("gazefilter already initialized.");
        try {
            B()
        } catch (e) {
            throw new Error("Cannot initialize WebGL capturing. " + e)
        }
        try {
            await async function e(n) {
                const r = {wbg: {}};
                r.wbg.__wbindgen_string_new = function (e, t) {
                    return c(a(e, t))
                }, r.wbg.__wbindgen_object_drop_ref = function (e) {
                    f(e)
                }, r.wbg.__wbg_buffer_bc64154385c04ac4 = function (e) {
                    return c(u(e).buffer)
                }, r.wbg.__wbg_newwithbyteoffsetandlength_3c8748473807c7cf = function (e, t, n) {
                    return c(new Uint8Array(u(e), t >>> 0, n >>> 0))
                }, r.wbg.__wbg_newwithbyteoffsetandlength_193d0d8755287921 = function (e, t, n) {
                    return c(new Float32Array(u(e), t >>> 0, n >>> 0))
                }, r.wbg.__wbindgen_debug_string = function (e, n) {
                    var r = function (e, t, n) {
                        if (void 0 === n) {
                            const n = _.encode(e), r = t(n.length);
                            return i().subarray(r, r + n.length).set(n), d = n.length, r
                        }
                        let r = e.length, a = t(r);
                        const o = i();
                        let s = 0;
                        for (; s < r; s++) {
                            const t = e.charCodeAt(s);
                            if (t > 127) break;
                            o[a + s] = t
                        }
                        if (s !== r) {
                            0 !== s && (e = e.slice(s)), a = n(a, r, r = s + 3 * e.length);
                            const t = i().subarray(a + s, a + r);
                            s += l(e, t).written
                        }
                        return d = s, a
                    }(function e(t) {
                        const n = typeof t;
                        if ("number" == n || "boolean" == n || null == t) return "" + t;
                        if ("string" == n) return `"${t}"`;
                        if ("symbol" == n) {
                            const e = t.description;
                            return null == e ? "Symbol" : `Symbol(${e})`
                        }
                        if ("function" == n) {
                            const e = t.name;
                            return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function"
                        }
                        if (Array.isArray(t)) {
                            const n = t.length;
                            let r = "[";
                            n > 0 && (r += e(t[0]));
                            for (let i = 1; i < n; i++) r += ", " + e(t[i]);
                            return r += "]", r
                        }
                        const r = /\[object ([^\]]+)\]/.exec(toString.call(t));
                        let i;
                        if (!(r.length > 1)) return toString.call(t);
                        if (i = r[1], "Object" == i) try {
                            return "Object(" + JSON.stringify(t) + ")"
                        } catch (e) {
                            return "Object"
                        }
                        return t instanceof Error ? `${t.name}: ${t.message}\n${t.stack}` : i
                    }(u(n)), t.__wbindgen_malloc, t.__wbindgen_realloc), a = d;
                    h()[e / 4 + 1] = a, h()[e / 4 + 0] = r
                }, r.wbg.__wbindgen_throw = function (e, t) {
                    throw new Error(a(e, t))
                }, r.wbg.__wbindgen_rethrow = function (e) {
                    throw f(e)
                }, r.wbg.__wbindgen_memory = function () {
                    return c(t.memory)
                }, ("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n));
                const {instance: o, module: s} = await async function (e, t) {
                    if ("function" == typeof Response && e instanceof Response) {
                        if ("function" == typeof WebAssembly.instantiateStreaming) try {
                            return await WebAssembly.instantiateStreaming(e, t)
                        } catch (t) {
                            if ("application/wasm" == e.headers.get("Content-Type")) throw t;
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t)
                        }
                        const n = await e.arrayBuffer();
                        return await WebAssembly.instantiate(n, t)
                    }
                    {
                        const n = await WebAssembly.instantiate(e, t);
                        return n instanceof WebAssembly.Instance ? {instance: n, module: e} : n
                    }
                }(await n, r);
                return t = o.exports, e.__wbindgen_wasm_module = s, t
            }(e)
        } catch (e) {
            throw new Error("Cannot initialize `gazefilter.wasm`. " + e)
        }
        if ("0.7.0" !== v()) throw new Error(`Incompatible gazefilter.js v0.7.0 with gazefilter.wasm v${v()}.`);
        var n, r;
        $ = new S, Y = new E, delete $.__proto__.free, delete Y.__proto__.free, window.screen && (n = screen.width, r = screen.height, t.setScreen(n, r)), H = !0
    }, e.recorder = tt, e.tracker = te, e.version = "0.7.0", e.visualizer = ce, Object.defineProperty(e, "__esModule", {value: !0})
}));
