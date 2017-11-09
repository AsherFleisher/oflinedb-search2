localStorage.setItem("word", "");

function search() {
    localStorage.setItem("SearchResult", "");
    var linksForLocal = [];
    var allPages = pageData;
    var catalogLinks = catalogData;
    var word = document.getElementById("search").value;
    localStorage.setItem("word", word);
    word = word.toUpperCase()
    for (i = 0; i < allPages.length; i++) {
        var link1 = allPages[i]["link"];
        var title = allPages[i]["title"];
        var table = allPages[i]["bom1"];
        var image = allPages[i]["image"];
        image = "../" + image
        if (link1.length > 1)
            var link1 = link1.split("\\");
        var long = link1.length;
        link1 = link1[long - 1];
        link2 = "../../page/" + link1;
        link1 = "../page/" + link1;

        if (title !== undefined) {
            if (title.toUpperCase().indexOf(word) > -1 || table.toUpperCase().indexOf(word) > -1 || link1.toUpperCase().indexOf(word) > -1) {

                for (k = 0; k < catalogLinks.length; k++) {
                    if (link2 == catalogLinks[k]["link"]) {
                        var haveAlready = 0;
                        if (linksForLocal.length == 0) {
                            linksForLocal.push({ "link": link2, "title": title, "table": table, "image": image, "word": word });
                        } else {
                            for (l = 0; l < linksForLocal.length; l++) {
                                if (link2 == linksForLocal[l]["link"]) {
                                    haveAlready = 1;
                                }
                            }
                            if (haveAlready == 0)
                                linksForLocal.push({ "link": link2, "title": title, "table": table, "image": image, "word": word });
                        }
                    }
                }
            }
        }
    }
}
localStorage.setItem("SearchResult", JSON.stringify(linksForLocal));
window.open("..\\shared\\Script\\searchResult.html");
