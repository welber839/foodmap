var fig=document.querySelectorAll(".fig");
var innerDownContent=document.querySelectorAll(".innerDownContent");
var upperImg=document.querySelectorAll('.upperImg');
var iframeMap=document.querySelectorAll('.iframeMap');

function changeData(e){
    console.log(e.target.getAttribute('value'));
    for(var i=0;i<innerDownContent.length;i++){
        innerDownContent[i].style.display="none";
        upperImg[i].style.display="none";
        iframeMap[i].style.display="none";
    }
    innerDownContent[e.target.getAttribute('value')].style.display="";
    upperImg[e.target.getAttribute('value')].style.display="";
    iframeMap[e.target.getAttribute('value')].style.display="";
}

function changeOpacity(e){
    e.target.style.opacity=1;
}

function changeOpacity2(e){
    e.target.style.opacity=0.8;
}


for(var j=0;j<fig.length;j++){
    fig[j].addEventListener('click',changeData);
    fig[j].addEventListener('mouseover',changeOpacity);
    fig[j].addEventListener('mouseout',changeOpacity2);
}