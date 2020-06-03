function pageVideo(id){
    var previousVideo = document.getElementsByTagName("video")[0];
    if(previousVideo != null){
        console.log("I was paused");
        previousVideo.pause();
    }
    var pageContent = document.getElementsByClassName("page-content")[0];
    pageContent.removeChild(pageContent.children[0]);
    //first section

    var divCont = createElement("div", "container-fluid", null, null);
    var row = createElement("div", "row", null, null);
    var innerCol = createElement("div", "mb-4 col-sm-12 col-xs-12 col-md-12 col-lg-12", null, null);
    var rowInnerCol = createElement("div", "row", null, null);
    var videoTitle = createElement("h3", " col-sm-12 col-xs-12 col-md-12 col-lg-12", null, null);
    

    var videoCategory = "AYS VIDEO SUMMARY";
    console.log({id, type: typeof id})
    var video = videos.find(v => v.VideoId == id);
    console.log({videos, video})
    //convert all arrow functions to plain js
    //using two lines to find item
    
    
    // videos.forEach(item => {
    //     item.Videos.forEach(vid => {
    //         if(vid.VideoId == id)
    //         {
    //             videoCategory = item;
    //             video = vid;
    //         }
    //     })
    // })
    //var waiterCont = createElement("div", "full-width col-sm-12 col-xs-12 col-md-12 col-lg-12 wc", null, null);
    //var spinnerCont = createElement("div", "full-width col-sm-12 col-xs-12 col-md-12 col-lg-12 wc", null, null);
    //var spinner = createElement("div", "loader loader-2", null, null);
    //var loaderSpan1 = createElement("span", null, null, null);
    //var loaderSpan2 = createElement("span", null, null, null);
    //var loaderSpan3 = createElement("span", null, null, null);
    //spinnerCont.appendChild(spinner);
    //spinner.appendChild(loaderSpan1);
    //spinner.appendChild(loaderSpan2);
    //spinner.appendChild(loaderSpan3);
    //waiterCont.appendChild(spinnerCont);
    var videoName = video.VideoName;
    var videoSelf = createElement("video", "full-width col-sm-12 col-xs-12 col-md-12 col-lg-12", null, null);
    var videoFileName = "videos/" + video.VideoUrl;
    videoSelf.setAttribute("src", videoFileName);
    /*var req = new XMLHttpRequest();
    req.open('GET', videoFileName, true);
    req.responseType = 'blob';

    req.onload = function() {
    // Onload is triggered even on 404
    // so we need to check the status code
    if (this.status === 200) {
        var cont = document.getElementsByClassName("wc")[0];
        cont.removeChild(cont.children[0]);
        var videoBlob = this.response;
        console.log(videoBlob);
        var vid = URL.createObjectURL(videoBlob); // IE10+
        // Video is now downloaded
        // and we can set it as source on the video element
        videoSelf.setAttribute("src", vid);
        cont.appendChild(videoSelf);
    }
    }
    req.onerror = function() {
    // Error
    }

    req.send();*/
	//var cont = document.getElementsByClassName("wc")[0]
    videoSelf.setAttribute("controls", "controls")
	//cont.appendChild(videoSelf);
    videoTitle.innerHTML = videoName;
    var subtitle = createElement("h4", "col-sm-12 col-xs-12 col-md-12 col-lg-12", null, null);
    subtitle.innerHTML += "Subject: " + videoCategory;

    rowInnerCol.appendChild(videoTitle);
	rowInnerCol.appendChild(videoSelf);
    //rowInnerCol.appendChild(cont);
    rowInnerCol.appendChild(subtitle);
    
    innerCol.appendChild(rowInnerCol)

    //second section
    var sideCol = createElement("div", "col-sm-12 col-xs-12 col-md-12 col-lg-12", null, null);
    var upNext = createElement("h3", null, null, null);
    var nextVidContainer = createElement("div", "row", null, null);


    upNext.innerHTML = "Up Next";

    sideCol.appendChild(upNext);
    var vidsLength = videos.length;
    var videoNext = [];
    var itemPosition = videos.indexOf(video);
    // item = videoCategory.Videos[index];
    

    // var itemPosition = videoCategory.Videos.indexOf(item);
    if(itemPosition === vidsLength - 1){
        videoNext.push(videos[0]);
        videoNext.push(videos[1]);
    }
    else if(itemPosition === vidsLength - 2){
        videoNext.push(videos[itemPosition + 1]);
        videoNext.push(videos[0]);
    }
    else{
        videoNext.push(videos[itemPosition + 1]);
        videoNext.push(videos[itemPosition + 2]);
    }
    //using plain js rather than es6
   //up next
 
   for(i = 0; i < videoNext.length; i++){
        var anchor = createElement("a", "text-dec-none col-md-4 col-sm-4 col-xs-4 text-center mb-3", null, null);
        var anchorDiv = createElement("div", "inner-90", null, null);
        var anchorImg = createElement("img", "fixed-height-3", null, null);
        if(i == 0){
            anchorImg.setAttribute("src", "./images/1icon.png");
        }
        else{
            anchorImg.setAttribute("src", "./images/2icons.png");
        }
        var anchorDivisor = createElement("hr", "text-top-shadow", null, null);
        var anchorText = createElement("h6", "mt-2", null, null);
        // var wrapperDivnextVid = createElement("div", "col-sm-4 col-xs-4 col-md-4 col-lg-4 mb-2", null, null);
        // var smallVidContainer = createElement("video", "full-width", null, null);
        // var smallVideoFileName = "videos/" + videoNext[i].VideoName + "#t=10";
        // smallVidContainer.setAttribute("src", smallVideoFileName);
        // // smallVidContainer.setAttribute("controls", "controls");
        anchorText.innerHTML = videoNext[i].VideoName;
        anchorDiv.appendChild(anchorImg);
        anchorDiv.appendChild(anchorDivisor);
        anchorDiv.appendChild(anchorText);

        anchor.appendChild(anchorDiv);
        anchor.setAttribute("onclick", "pageVideo("+videoNext[i].VideoId+")")
        // wrapperDivnextVid.appendChild(smallVidContainer)
        // var smallVideoSummary = createElement("a", "col-sm-8 col-xs-8 col-md-8 col-lg-8 mb-2", "#", null);
        // smallVideoSummary.innerHTML = videoNext[i].VideoUrl;
        // smallVideoSummary.setAttribute("onclick", "pageVideo("+videoNext[i].VideoId+")")
        // smallVideoSummary.setAttribute("preload", "metadata")
        // nextVidContainer.appendChild(wrapperDivnextVid);
        // nextVidContainer.appendChild(smallVideoSummary);
        nextVidContainer.appendChild(anchor);
        console.log(nextVidContainer);
   }
    // videoNext.forEach(vids => {
    //     var wrapperDivnextVid = createElement("div", "col-sm-4 col-xs-4 col-md-4 col-lg-4 mb-2", null, null);
    //     var smallVidContainer = createElement("video", "full-width", null, null);
    //     var smallVideoFileName = "videos/" + vids.VideoName + "#t=10";
    //     smallVidContainer.setAttribute("src", smallVideoFileName);
    //     // smallVidContainer.setAttribute("controls", "controls");
    //     wrapperDivnextVid.appendChild(smallVidContainer)
    //     var smallVideoSummary = createElement("a", "col-sm-8 col-xs-8 col-md-8 col-lg-8 mb-2", "#", null);
    //     smallVideoSummary.innerHTML = vids.VideoUrl;
    //     smallVideoSummary.setAttribute("onclick", `pageVideo(${vids.VideoId})`)
    //     smallVideoSummary.setAttribute("preload", `metadata`)
    //     nextVidContainer.appendChild(wrapperDivnextVid);
    //     nextVidContainer.appendChild(smallVideoSummary);
    // })

    sideCol.appendChild(nextVidContainer);

    row.appendChild(innerCol);
    row.appendChild(sideCol);

    divCont.appendChild(row);
    console.log("i came here")
    pageContent.appendChild(divCont);
}

