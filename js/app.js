  
let leftSideImage=document.getElementById('leftSide')
// leftSideImage.setAttribute('src','img/bag.jpg');
let midSideImage=document.getElementById('midSide')
let rightSideImage=document.getElementById('rightSide')
  
arrOfImageSrc=['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/breakfast.jpg','img/bubblegum - Copy.jpg','img/chair.jpg'
,'img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png'
,'img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']

arrOfImageName=['bag','banana','bathroom','breakfast','bubblegum','chair','cthulhu','dog','dragon','pen','pet-sweep','scissors'
,'shark','sweep','tauntaun','unicorn','usb','water','glass']


function BusMallImage(nameImage,soruce){
    this.nameImage=nameImage;
    this.soruce=soruce;
    this.votes = 0;
    this.shown = 0;
   BusMallImage.allImage.push(this);
}
BusMallImage.allImage=[];

// console.log(arrOfImageSrc.length,arrOfImageName.length)

for(let i=0;i<arrOfImageSrc.length;i++){
    // console.log('hi')
 new BusMallImage(arrOfImageName[i],arrOfImageSrc[i])

}
// console.log(BusMallImage.allImage)

function getIndexRandomly(){
    let randomIndex= Math.floor(Math.random()*BusMallImage.allImage.length)
   
    return randomIndex

}
let leftSide=0
let rightSide=0
let midSide=0   
function render(){
       leftSide=getIndexRandomly()
    rightSide=getIndexRandomly()
    midSide=getIndexRandomly()
//     console.log(leftSide)
//    console.log(rightSide)
//    console.log(midSide)
    
   
   while(leftSide===rightSide||rightSide===midSide||leftSide===midSide){
       leftSide=getIndexRandomly()
       midSide=getIndexRandomly()
    //    console.log(leftSide)
    //    console.log(rightSide)
    //    console.log(midSide)
       
    }
    
    leftSideImage.src= BusMallImage.allImage[leftSide].soruce
    midSideImage.src= BusMallImage.allImage[midSide].soruce
    rightSideImage.src= BusMallImage.allImage[rightSide].soruce
}

render()
let countsClick=0;
let round=10;
let imageEvent=document.getElementById('section')
imageEvent.addEventListener('click',handelClicking)
function handelClicking(event){
    countsClick++
    console.log(event.target.id)
    // console.log(BusMallImage.allImage.shown++)
    if(round >= countsClick){
        if (event.target.id=='leftSide'){
             BusMallImage.allImage[leftSide].votes++
             BusMallImage.allImage[leftSide].shown++
        }else if(event.target.id=='rightSide'){
            BusMallImage.allImage[rightSide].votes++
            BusMallImage.allImage[rightSide].shown++
        }else if(event.target.id=='midSide'){
            BusMallImage.allImage[midSide].votes++
            BusMallImage.allImage[midSide].shown++
        }
        render()

    }else{
        gettingList()
        imageEvent.removeEventListener('click',handelClicking)
    }
    

}


let buttonEvent=document.getElementById('butt')
buttonEvent.addEventListener('click',handelClicking)
function handelClicking(event){
// function gettingList(){
    let ul = document.getElementById('list');
    for(let i = 0 ; i <BusMallImage.allImage.length; i++ ){
        console.log('hi')
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${BusMallImage.allImage[i].nameImage} had ${BusMallImage.allImage[i].votes} Votes ,and was seen ${BusMallImage.allImage[i].shown} times.`;
    }
    
    // let  th = document.getElementById('product');
    // let  thVote = document.getElementById('vote');
    // let  thShown = document.getElementById('shown');
    // for(let i = 0 ; i <BusMallImage.allImage.length; i++ ){
    //     let tr=document.createElement('tr')
    //     th.appendChild(tr)
    //     let td =document.createElement('td');
    //     tr.appendChild(td)
    //     td.textContent = BusMallImage.allImage[i].nameImage

    //     let trVote=document.createElement('tr')
    //     thVote.appendChild(trVote)
    //     let tdVoites =document.createElement('td');
    //     trVote.appendChild(tdVoites)
    //     tdVoites.textContent=BusMallImage.allImage[i].votes

    //     let trShown=document.createElement('tr')
    //     thShown.appendChild(trShown)
    //     let tdShown=document.createElement('td')
    //     trShown.appendChild(tdShown)
    //     tdShown.textContent=BusMallImage.allImage[i].shown


  
//   }

}


