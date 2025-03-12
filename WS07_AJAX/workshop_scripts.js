//Tehtävä 1
function parseData(){
    var allQuotes = document.getElementsByTagName("quotes");

    for(i = 0; i < allQuotes.length; i++){
        var quote = allQuotes[i].getElementsByTagName("quote")[0].textContent;
        var author = allQuotes[i].getElementsByTagName("author")[0].textContent;

        document.getElementById("myDiv").innerHTML += quote + "-" + author + "<br>";
    }
    
}

//Tehtävä 2
function loadXMLFile(){
    //luodaan AJAX-olio
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://thequoteshub.com/api/quotes", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("quotes").textContent = xmlhttp.responseText;
            
        }
    }
}

//Tehtäv 3
function loadAndParseXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://thequoteshub.com/api/quotes", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var allQuotes = data.quotes;
            console.log(allQuotes);

            var tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = "";

            for(i = 0; i < allQuotes.length;i++){
                var quote = allQuotes[i].text;
                var author = allQuotes[i].author;

                var row = "<tr><td>" + quote + "</td><td>" + author + "</td></tr>";
                tableBody.innerHTML += row;
            }

        };
    }
}

//Tehtävä 4

function loadAndParseNews(feedurl){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", feedurl, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item");
            var newsDiv = document.getElementById("newsfeed");
            newsDiv.innerHTML = "";

            var ul = document.createElement("ul");

            for (var i = 0; i < items.length; i++) {
                var title = items[i].getElementsByTagName("title")[0].textContent;
                var link = items[i].getElementsByTagName("link")[0].textContent;

                var li = document.createElement("li");
                var a = document.createElement("a");
                a.href = link;
                a.textContent = title;
                a.target = "_blank";

                li.appendChild(a);
                ul.appendChild(li);
            }

            newsDiv.appendChild(ul);
        }
    };
}





