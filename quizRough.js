(function(x){ delete x; console.log(x);})(1);   // 1

(function() {
    return (() => this.x).bind({ x: 'inner' })(),(() => this.x)() }).call({ x: 'outer' });

