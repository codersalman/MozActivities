
<script>
document.getElementById(‘clicked’).addEventListener(‘click’, function(e) {

if(window.MozActivity) {

var act = new MozActivity({

name: “configure”,

data: {

target: “device”,

section: “accessibility-colors”

}

})

}

else {

window.alert(‘Hello World – Task Completed’)

}

}, false)

</script>
