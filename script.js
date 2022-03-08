//when b button is clicked
if (!sessionStorage.hasOwnProperty("page")){
    sessionStorage.setItem("page", 1);
    go(1);
} else {
    go(sessionStorage.getItem("page"));
}

    
    
function go(init = 0) {
    //geting html elment DRY-Dont repeat yourself
    var p = document.getElementById('page');
    var v = document.getElementById('value');
    var a = document.getElementById('audio')
    var page_number = v.value;
    
    if (init) {
        page_number = init;
    } else {
        //if value is greater than 604
        page_number = parseInt(page_number).toFixed() == 'NaN' ? 1 : parseInt(page_number).toFixed();
        page_number = ((page_number > 604 || page_number < 1) ? "1" : page_number);    
    }
    sessionStorage.setItem("page", page_number);
    
    p.src = "https://quran.ksu.edu.sa/tajweed_png/" + page_number  + ".png";
    p.alt = "page " + page_number;
    
    if(page_number >= 1 && page_number <= 9){
        a.src = "https://everyayah.com/data/Abdullah_Basfar_32kbps/PageMp3s/Page00"+page_number+".mp3" 
    }
    if(page_number >= 10 && page_number <= 99){
        a.src = "https://everyayah.com/data/Abdullah_Basfar_32kbps/PageMp3s/Page0"+page_number+".mp3" 
    }
    if(page_number >= 100 && page_number <= 604){
        a.src = "https://everyayah.com/data/Abdullah_Basfar_32kbps/PageMp3s/Page"+page_number+".mp3" 
    }
}