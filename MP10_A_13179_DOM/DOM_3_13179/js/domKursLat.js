var targetNode;

function init(){
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr");
}

function hitungKurs(id){
    var inputEl = document.getElementById(id);
    var hasilUsd = parseFloat(inputEl.value) / 18266;
    targetNode.data = hasilUsd.toFixed(2);

    const node = document.createElement("li");
    const textnode = document.createTextNode(targetNode.data);
    node.appendChild(textnode);
    document.getElementById("riwayat").appendChild(node);
} var targetNode;