/* define a function to make an Ajax call which expects the url to call and a callback which expects a string (containing the contents) */
function ajaxGet(url, onSuccess) {
    var xhttp = new XMLHttpRequest();
    
    if(!xhttp) {
        alert("Canot create XMLHTTP instance");
    }
    
    xhttp.onreadystatechange = someFunction; 
    xhttp.open('GET', url, true);
    xhttp.send();
    
    function someFunction() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            onSuccess(xhttp.responseText);   
        }
    }
}
