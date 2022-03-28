// $(document).ready(function(){
//     const audio = new Audio('/common/audio/audio.wav');
//     const soundPlayBtn = $('#soundPlayBtn')
//     var soundPlaySW = false;
//     var audioInit = false;
//     function audioPlay(){
//         if(audioInit==false){
//             audio.play();
//             audioInit = false;
//         }
//     }
//     $(window).scroll(function(){
//         setTimeout(()=>{
//             audioPlay()
//         })
//     })
//     soundPlayBtn.click(function(){
//         console.log('hi')
//         if(!soundPlaySW){
//             $(this).addClass('on')
//             $(this).removeClass('off')
//         }else{
//             $(this).addClass('off')
//             $(this).removeClass('on')
//         }
//         soundPlaySW = !soundPlaySW;
//     })
// })