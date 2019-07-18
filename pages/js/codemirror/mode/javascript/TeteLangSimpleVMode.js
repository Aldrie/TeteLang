CodeMirror.defineMode("TLsv", function() {
    
    return {
        token: function(stream,state) {
            
            if (stream.match(/[A-Z]/)) {
                return "keyword";
            } else if (stream.match(/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i) ) {
                return "number";
            }
            else if (stream.match(/\/\/.*/)){
                return "comment";
            }
            else if (stream.match(/[-+\/*=<>!]+/)){
                return "operator";
            }
            else if (stream.match(/"(?:[^\\]|\\.)*?(?:"|$)/) || stream.match(/'(?:[^\\]|\\.)*?(?:'|$)/)){
                return "string";
            }
            else {
                stream.next();
                return "variable";
            }
        }
    };
    
});