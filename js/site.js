jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  $(".sidebar-submenu-inner").slideUp(200);
  $(".sidebar-submenu-inner-2").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});


$(".sidebar-dropdown-inner > a").click(function() {
$(".sidebar-submenu-inner").slideUp(200);
$(".sidebar-submenu-inner-2").slideUp(200);
if (
  $(this)
    .parent()
    .hasClass("active")
) {
  $(".sidebar-dropdown-inner").removeClass("active");
  $(this)
    .parent()
    .removeClass("active");
} else {
  $(".sidebar-dropdown-inner").removeClass("active");
  $(this)
    .next(".sidebar-submenu-inner")
    .slideDown(200);
  $(this)
    .parent()
    .addClass("active");
}
});

$(".sidebar-dropdown-inner-2 > a").click(function() {
  $(".sidebar-submenu-inner-2").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown-inner-2").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown-inner-2").removeClass("active");
    $(this)
      .next(".sidebar-submenu-inner-2")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
  });

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

var STUDYMATE = "studyMate";
var USER_IMG = "img";
var USER_NAME = "userName";

function addVisited(elem){
  elem.classList.add("visited");

  var id = elem.id;
  try{
    if(localStorage){
      
      var obj = null;
      if(localStorage.getItem(STUDYMATE) == null){
          obj = {"visited": [id], "lastVisited": id}; 
      }
      else{
        obj = JSON.parse(localStorage.getItem(STUDYMATE));
        if(!obj.visited.includes(id)){
          //console.log("entered");
          obj.visited.push(id);
        }
        obj.lastVisited = id;

      }
      if(obj != null){
        var stringRep = JSON.stringify(obj);
        localStorage.setItem(STUDYMATE, stringRep);
      }
      
      
    }
  }catch(e){ }
  
  addLastVisited(elem);
  
}

function addLastVisited(elem){
  var allPopUpClasses = document.getElementsByClassName("courses-on-page");
  for(var i = 0; i < allPopUpClasses.length; i++){
    if(allPopUpClasses[i].classList.contains("last-visited")){
      allPopUpClasses[i].classList.remove("last-visited");
    }
    var parent = allPopUpClasses[i].parentElement.parentElement.parentElement;
    var toEdit = parent.getElementsByTagName("a")[0];
    if(toEdit.classList.contains("last-visited")){
      toEdit.classList.remove("last-visited");
    }
  }

  elem.classList.add("last-visited");

  var parent = elem.parentElement.parentElement.parentElement;
  var toEdit = parent.getElementsByTagName("a")[0];
  toEdit.classList.add("last-visited");
}

//check if the page has stored values

function initializePreviousRead(){
  if(localStorage){
    if(localStorage.getItem(STUDYMATE) != null){
      var obj = JSON.parse(localStorage.getItem(STUDYMATE));
      var lastVisitedId = obj.lastVisited;
      var visitedIds = obj.visited;

      //set last visited
      var item = findIdAndSetClassName(lastVisitedId);
      item.classList.add("last-visited");

      //set parent
      var parent = item.parentElement.parentElement.parentElement;
      var toEdit = parent.getElementsByTagName("a")[0];
      toEdit.classList.add("last-visited");

      for(var i = 0; i < visitedIds.length; i++){
        findIdAndSetClassName(visitedIds[i]);
      }
    }
    if(localStorage.getItem(USER_IMG) != null){
      $('.user-profile-pix').attr('src', localStorage.getItem(USER_IMG));
    }
    if(localStorage.getItem(USER_NAME) != null){
      var formerParent = document.getElementsByClassName("user-name")[0];
      formerParent.innerHTML = localStorage.getItem(USER_NAME) + " ";
      var editIcon = createElement("i", "fa fa-edit edit-name", null, null);
      editIcon.setAttribute("onclick", "editName()");
      formerParent.appendChild(editIcon);
    }
  }
}

function findIdAndSetClassName(courseId){
  //console.log(courseId)
  var innerHolder = courseId;
  var lastVisited = document.getElementById(innerHolder);
  lastVisited.classList.add("visited");
  return lastVisited;
}

function addVideoVisited(elem){
  elem.classList.add("visited");
  addLastVideoVisited(elem);
}

function addLastVideoVisited(elem){
    var allVideoClass = document.getElementsByClassName("videos-on-page");
    //console.log
    for(var i = 0; i < allVideoClass.length; i++){
      if(allVideoClass[i].classList.contains("last-visited")){
        allVideoClass[i].classList.remove("last-visited");
      }
      var parent = allVideoClass[i].parentElement.parentElement.parentElement;
      var toEdit = parent.getElementsByTagName("a")[0];
      if(toEdit.classList.contains("last-visited")){
        toEdit.classList.remove("last-visited");
      }
    }
    elem.classList.add("last-visited");
    var parent = elem.parentElement.parentElement.parentElement;
    var toEdit = parent.getElementsByTagName("a")[0];
    toEdit.classList.add("last-visited");
  }


  $(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.user-profile-pix').attr('src', e.target.result);
                if(localStorage){
                  localStorage[USER_IMG] = e.target.result;
                }
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});



function editName(){
  var parentClass = document.getElementsByClassName("user-name")[0];
  parentClass.innerHTML = "";
  var editTag = createElement("input", "form-control main-name", null, null);
  var saveButton = createElement("span", "fa fa-save save-button", null, null);
  var saveButtonText = createElement("span", "save-text", null, null);
  saveButtonText.innerHTML = " Save"
  saveButton.appendChild(saveButtonText);
  saveButton.setAttribute("onclick", "saveName()");
  parentClass.appendChild(editTag);
  parentClass.appendChild(saveButton);
}




function saveName(){
  var name = null;
  if(localStorage){
    var nameValue = document.getElementsByClassName("main-name")[0];
    if(nameValue.value.trim().length > 0){
      localStorage[USER_NAME] = nameValue.value;
      name = nameValue.value;
    }
    
  }
  else{
    alert("Cannot save name");
  }
  var formerParent = document.getElementsByClassName("user-name")[0];
  if(name != null){
    formerParent.innerHTML = name + " ";
  }
  else{
    if(localStorage){
      if(localStorage.getItem(USER_NAME) != null){
        formerParent.innerHTML = localStorage.getItem(USER_NAME) + " ";
      }
      else{
        formerParent.innerHTML = "StudyMATE User ";
      }
    }
    else{
      formerParent.innerHTML = "StudyMATE User ";
    }
  }
  var editIcon = createElement("i", "fa fa-edit edit-name", null, null);
  editIcon.setAttribute("onclick", "editName()");
  formerParent.appendChild(editIcon);
}


