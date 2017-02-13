(function(compId) {
    var _ = null,
        y = true,
        n = false,
        x9 = 'break-word',
        x10 = 'nowrap',
        x3 = '6.0.0.400',
        x2 = '5.0.0',
        x4 = 'rgba(213,68,68,1.00)',
        x8 = 'Arial, Helvetica, sans-serif',
        l = 'normal',
        x11 = 'rgba(255,255,255,1)',
        w = 'width',
        x1 = '6.0.0',
        x5 = 'rgba(65,40,40,1.00)',
        x = 'text',
        xc = 'rgba(0,0,0,1)',
        m = 'rect',
        x7 = '24',
        i = 'none';
    var s6 = "<p style=\"margin: 0px;\">​<span style=\"font-weight: 800; color: rgb(255, 255, 255); font-size: 194px;\">HELLO</span></p>";
    var im = 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                v: x1,
                mv: x2,
                b: x3,
                stf: w,
                cg: i,
                rI: n,
                cn: {
                    dom: [{
                        id: 'Rectangle',
                        t: m,
                        r: ['0px', '0px', '1920px', '879px', 'auto', 'auto'],
                        f: [x4],
                        s: [0, xc, i]
                    }, {
                        id: 'RectangleCopy',
                        t: m,
                        r: ['0px', '903px', '1920px', '879px', 'auto', 'auto'],
                        f: [x5],
                        s: [0, xc, i]
                    }, {
                        id: 'RectangleCopy3',
                        t: m,
                        r: ['0px', '1824px', '1920px', '879px', 'auto', 'auto'],
                        f: [x4],
                        s: [0, xc, i]
                    }, {
                        id: 'RectangleCopy2',
                        t: m,
                        r: ['0px', '2727px', '1920px', '879px', 'auto', 'auto'],
                        f: [x5],
                        s: [0, xc, i]
                    }, {
                        id: 'Text',
                        t: x,
                        r: ['631px', '3052px', 'auto', 'auto', 'auto', 'auto'],
                        text: s6,
                        n: [x8, [x7, ], xc, l, i, "", x9, x10]
                    }, {
                        id: 'TextCopy',
                        t: x,
                        r: ['107px', '2149px', 'auto', 'auto', 'auto', 'auto'],
                        text: s6,
                        n: [x8, [x7, ], xc, l, i, "", x9, x10]
                    }, {
                        id: 'TextCopy2',
                        t: x,
                        r: ['631px', '1228px', 'auto', 'auto', 'auto', 'auto'],
                        text: s6,
                        n: [x8, [x7, ], xc, l, i, "", x9, x10]
                    }, {
                        id: 'TextCopy3',
                        t: x,
                        r: ['632px', '332px', 'auto', 'auto', 'auto', 'auto'],
                        text: s6,
                        n: [x8, [x7, ], xc, l, i, "", x9, x10]
                    }],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            r: [undefined, undefined, '1920px', '4000px'],
                            overflow: 'hidden',
                            f: [x11]
                        }
                    }
                },
                tt: {
                    d: 0,
                    a: y,
                    data: []
                }
            }
        };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-414048917");
(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol;
    Edge.registerEventBinding(compId, function($) {
        //Edge symbol: 'stage'
        (function(symbolName) {
            Symbol.bindElementAction(compId, symbolName, "${TextCopy3}", "click", function(sym, e) {
                alert = ("nilesh ti pd");
            });
            //Edge binding end
        })("stage");
        //Edge symbol end:'stage'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-414048917");