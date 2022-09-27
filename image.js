const openModal = function(event){        
    let e = event;
    if(!e){
        e = window.event;
    }
    let imgElements = Array.prototype.slice.call(document.getElementsByTagName("img"));
    let index = e.target.getAttribute("idx");
    let imgs = [];
    imgElements.forEach(function(imgEle,index){
        let enable = imgEle.getAttribute("enable")
        if (enable === '1') {
         imgs.push({src:imgEle.getAttribute("src"),caption:imgEle.getAttribute("caption")})
        }
    })
    let imgJson = JSON.stringify(imgs)
    let message = "showGallery/images="+imgJson+"&idx="+index;
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(message)
}