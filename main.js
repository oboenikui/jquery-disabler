var script = document.createElement("script");
script.innerHTML = 
`
new MutationObserver(function(ev){
    for(var i=0;i<ev.length;i++){
        if(ev[i].addedNodes.length){
            for(var j=0;j<ev[i].addedNodes.length;j++){
                if(ev[i].addedNodes[j].tagName=="SCRIPT"){
                    var node = ev[i].addedNodes[j];
                    node.addEventListener("load", function(e){disable(e.target)});
                }
            }
        }
    }
}).observe(document,{childList: true, subtree: true});

function disable(node){
    if(window["$"]){
        window["$"] = undefined;
    }
}
`
new MutationObserver(function(ev){
    for(var i=0;i<ev.length;i++){
        if(ev[i].addedNodes.length){
            for(var j=0;j<ev[i].addedNodes.length;j++){
                if(ev[i].addedNodes[j].tagName=="BODY"){
                    document.body.appendChild(script, null);
                }
            }
        }
    }
}).observe(document,{childList: true, subtree: true});