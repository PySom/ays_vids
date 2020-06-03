var service = document.getElementById("inputService");
var resultServ = document.getElementById("serviceResult")
var error = document.getElementById("errorArea");
function callUpTags(elem, event) {
    
    
    if (event.key === "Enter") {
        error.classList.remove("d-none");
    }
    else {
        error.classList.add("d-none");
        val = elem.value;
        console.log(val)
        var result = lookUp(val);
        resultServ.innerHTML = "";
        resultServ.classList.remove('hide')
        if(result.length > 0){
            
            for (z = 0; z < result.length; z++) {
                var serviceList = createElement('li', "list-group-item", null, null)
                var element = document.createTextNode(result[z].VideoUrl)
                serviceList.appendChild(element)
                resultServ.appendChild(serviceList)
                console.log(z);
                serviceList.setAttribute("onclick", "up("+result[z].VideoId+","+"'"+result[z].VideoUrl+"'"+")");
                // serviceList.addEventListener('click', function () {
                //     var button = document.getElementById("searchButton");
                //     console.log(z)
                //     //button.setAttribute("onclick", `preparePageVideo(${result[index].VideoId})`)
                //     button.setAttribute("onclick", "preparePageVideo("+result[z].VideoId+")")
                //     service.value = result[index].VideoUrl;
                //     resultServ.classList.add('hide')
                //     resultServ.classList.remove("show");
                //     error.classList.add("d-none");
                // })
                resultServ.classList.add('show')
            }
        }
          
    }
}
function up(item, url) {
    var button = document.getElementById("searchButton");
    console.log(z)
    //button.setAttribute("onclick", `preparePageVideo(${result[index].VideoId})`)
    button.setAttribute("onclick", "preparePageVideo("+item+")")
    service.value = url;
    resultServ.classList.add('hide')
    resultServ.classList.remove("show");
    error.classList.add("d-none");
}

function lookUp(tag){
    var possibilities = []
    if(tag.length >= 3)
    {
        //change new to old
        for(i = 0; i < videos.length; i++){
            for(j = 0; j < videos[i].Videos.length; j++){
                if(videos[i].Videos[j].VideoUrl.toLowerCase().indexOf(tag.toLowerCase()) == 0 || videos[i].Videos[j].VideoUrl.toLowerCase().indexOf(" "+tag.toLowerCase()) != -1)
                {
                    
                    possibilities.push(videos[i].Videos[j]);
                }
            }
        }
        // videos.forEach(item =>{
        //     item.Videos.forEach(vid =>{
        //         if(vid.VideoUrl.toLowerCase().indexOf(tag.toLowerCase()) == 0 || vid.VideoUrl.toLowerCase().indexOf(" "+tag.toLowerCase()) != -1)
        //         {
                    
        //             possibilities.push(vid);
        //         }
        //     })
        // })
    }
    return possibilities
  }

  function preparePageVideo(id){
    var error = document.getElementById("errorArea");
    error.classList.add("d-none");
    pageVideo(id);
  }