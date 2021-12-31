$(document).ready(function(){
    const soundPlayBtn = $('#soundPlayBtn')
    var soundPlaySW = false;
    
    soundPlayBtn.click(function(){
        console.log('hi')
        if(!soundPlaySW){
            $(this).addClass('on')
            $(this).removeClass('off')
        }else{
            $(this).addClass('off')
            $(this).removeClass('on')
        }
        soundPlaySW = !soundPlaySW;
    })
})