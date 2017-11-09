	var add = document.getElementsByTagName("body")
	var hlDiv = []
	add.addEventListener("load", highlight())


	function highlight() {
	    if (typeof(localStorage["word"] != undefined) && localStorage["word"] != "") {
	        var word = localStorage["word"]
	        hlDiv.push(document.getElementsByClassName('title'))
	        hlDiv.push(document.getElementsByClassName('bompn'))
	        hlDiv.push(document.getElementsByClassName('bomdesc'))
	        hlDiv.push(document.getElementsByClassName('bomdesc300'))
	        hlDiv.push(document.getElementsByClassName('bomdesc350'))
	        hlDiv.push(document.getElementsByClassName('bomdesc400'))
	        hlDiv.push(document.getElementsByTagName('a'))
	        var word2 = "<span style='background-color: yellow'><span style='text-transform: uppercase'>" + word + "</span></span>";
	        var regx = new RegExp(word, "gi");

	        for (i = 0; i < hlDiv.length; i++) {
	            for (j = 0; j < hlDiv[i].length; j++) {
	                var go = hlDiv[i][j].innerHTML.replace(regx, word2);
	                hlDiv[i][j].innerHTML = go;
	            }
	        }
	    }
	}