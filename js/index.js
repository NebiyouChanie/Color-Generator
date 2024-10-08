const filp =document.getElementById('filp');
const automatic =document.getElementById('automatic');
const codes =document.getElementById('codes');
const bgcolr =document.getElementById('bgcolr');
const clickme =document.getElementById('clickme');

var colorArray = ['#00FF00', '#FFFF00', '#FF0000'];

var selectedtab='filp'; 
filp.addEventListener('click',function(){
    selectedtab='filp'
    automatic.className=' '
    filp.className='selected'

})
automatic.addEventListener('click',function(){
    selectedtab='automatic'
    filp.className=' '
    automatic.className='selected'

})

var counter=0;
function flipper(){   
    bgcolr.style.background=colorArray[counter];
    codes.textContent=colorArray[counter];
    counter = (counter+1)%colorArray.length;
};
    

var chararray=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var randomcolrocde='#'
function colorCodeGenratore(){
    for(var i = 0;i<6;i++){
        randomcolrocde+=chararray[Math.floor(Math.random()*15)]
    }
    return randomcolrocde ;
}


clickme.addEventListener('click',function(){
    if(selectedtab==='filp'){
        flipper()
    }else if(selectedtab='automatic'){
        const generatedcode=colorCodeGenratore();
        bgcolr.style.background=generatedcode;
        codes.textContent=generatedcode;
        randomcolrocde='#'
    }
})
    