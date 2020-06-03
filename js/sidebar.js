var video = document.getElementById("_videos");
var question = document.getElementById("_questions");
var jss = document.getElementById("_jss");
var sss = document.getElementById("_sss");
var questions = document.getElementById("_questions");
//changing es6 to plain
var sortedVideos = videos.sort(function(x, y){
    if(x.VideoName == y.Vid) return 0;
    else if(x.CategoryName > y.CategoryName) return 1;
    else return -1;

});

for(i = 0; i < sortedVideos.length; i++){
    var elem = createElement("li", null, null, null);
    var link = createElement("a", "videos-on-page", "#", null);
    link.innerHTML = sortedVideos[i].VideoName;
    link.setAttribute("onclick", "pageVideo(" + sortedVideos[i].VideoId +");addVideoVisited(this);")
    elem.appendChild(link);
    jss.appendChild(elem);
}


// videos.forEach(item =>{
//     var elem = createElement("li", "sidebar-dropdown-inner-2", null, null);
//     var link = createElement("a", null, "#", null);
//     link.innerHTML = item.CategoryName
//     var inner = createElement("div", "sidebar-submenu-inner-2", null, null);
//     elem.appendChild(link);
//     item.Videos.forEach(innerValue =>{
//         var innerItem = createElement("li", null, null, null);
//         var innerItemLink = createElement("a", null, "#", null);
//         innerItemLink.innerHTML = innerValue.VideoUrl;
//         innerItemLink.setAttribute("onclick", `pageVideo(${innerValue.VideoId})`)
//         innerItem.appendChild(innerItemLink);
//         inner.appendChild(innerItem);
//     })
//     elem.appendChild(inner);
//     if(item.Class == "1"){
//         jss.appendChild(elem);
//     }
//     else{
//         sss.appendChild(elem);
//     }
// })


//changing es6 to old

// courses.forEach(item => {
//     var elem = createElement("li", "sidebar-dropdown-inner-2", null, null);
//     var link = createElement("a", null, "#", null);
//     link.innerHTML = item.Category
//     var inner = createElement("div", "sidebar-submenu-inner-2", null, null);
//     elem.appendChild(link);
//     item.Subject.forEach(innerValue =>{
//         var innerItem = createElement("li", null, null, null);
//         var innerItemLink = createElement("a", "popup-youtube popup-vimeo popup-gmaps", innerValue.SubjectUrl, null);
//         innerItemLink.innerHTML = "Year " + innerValue.SubjectName;
//         innerItem.appendChild(innerItemLink);
//         inner.appendChild(innerItem);
//     })
//     elem.appendChild(inner);
//     questions.appendChild(elem);
// })

function createElement(elemName, elemClass, href, addAria)
{
    var element = document.createElement(elemName);
    if(elemClass != null)
    {
        element.setAttribute("class", elemClass);
    }
    
    if(addAria)
    {
        element.setAttribute("aria-hidden", true);
    }
    if(href != null)
    {
        element.setAttribute("href", href);
    }
    return element;
}


initializePreviousRead();