var input=document.getElementById('textinput');
var listItem=document.getElementById("listItem");
var url = 'http://localhost:9081/book';
var data;
function getData(){
    axios.get(url).then(function(res){
        data = res.data;
    })
}

getData();
