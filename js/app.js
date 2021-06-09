  
let leftSideImage=document.getElementById('leftSide')
let midSideImage=document.getElementById('midSide')
let rightSideImage=document.getElementById('rightSide')
  
let arrOfImageSrc=['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/breakfast.jpg','img/bubblegum - Copy.jpg','img/chair.jpg'
,'img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png'
,'img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg']

let arrOfImageName=['bag','banana','bathroom','breakfast','bubblegum','chair','cthulhu','dog','dragon','pen','pet-sweep','scissors'
,'shark','sweep','tauntaun','unicorn','usb','water','glass']

let arrOfNames=[]
function BusMallImage(nameImage,soruce){
    this.nameImage=nameImage;
    this.soruce=soruce;
    this.votes = 0;
    this.shown = 0;
   BusMallImage.allImage.push(this);
   arrOfNames.push(this.nameImage)
   
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
    let showing=[]
    
    leftSide=getIndexRandomly()
    rightSide=getIndexRandomly()
    midSide=getIndexRandomly()
    
    while(leftSide===rightSide||rightSide===midSide||leftSide===midSide||showing.includes(leftSide)||showing.includes(midSide)
            ||showing.includes(rightSide)){

        leftSide=getIndexRandomly()
        midSide=getIndexRandomly() 
        // console.log(showing);
    }
    showing=[leftSide,midSide,rightSide]
    // showing.push(leftSide)
    // showing.push(midSide)
    // showing.push(rightSide)

    
    leftSideImage.src= BusMallImage.allImage[leftSide].soruce
    BusMallImage.allImage[leftSide].shown++
    midSideImage.src= BusMallImage.allImage[midSide].soruce
    BusMallImage.allImage[rightSide].shown++
    rightSideImage.src= BusMallImage.allImage[rightSide].soruce
    BusMallImage.allImage[midSide].shown++
}
render()
let localStor=[]
let buttonEvent;
// let imageClicked=[]
let countsClick=0;
let round=10;
let imageEvent=document.getElementById('section')
imageEvent.addEventListener('click',handelClicking)

function handelClicking(event){


    countsClick++
    // console.log(event.target.id)
    
    if(round >= countsClick){
        // console.log(BusMallImage.allImage)
        if (event.target.id=='leftSide'){
            BusMallImage.allImage[leftSide].votes++
            
            // imageClicked.push(BusMallImage.allImage[leftSide])
        }else if(event.target.id=='rightSide'){
            BusMallImage.allImage[rightSide].votes++
            
            // imageClicked.push(BusMallImage.allImage[rightSide])
        }else if(event.target.id=='midSide'){
            BusMallImage.allImage[midSide].votes++
            // imageClicked.push(BusMallImage.allImage[midSide])
        }else{
            return
        } render()
        // savingToLocalStorge()
        
    }else{
        
        
        buttonEvent=document.getElementById('butt')
        buttonEvent.addEventListener('click',handelClickingButton)
        imageEvent.removeEventListener('click',handelClicking)
    }
    
    
}
// console.log(imageClicked)

function handelClickingButton(event){
    gettingList()
     localStorage.setItem('Product',JSON.stringify(BusMallImage.allImage));
    //  console.log(Product)
    getChart()
    buttonEvent.removeEventListener('click',handelClickingButton)
}
let arrOfShown=[]
let arrOfVotes=[];
function gettingList(){
    let ul = document.getElementById('list');
    for(let i = 0 ; i <BusMallImage.allImage.length; i++ ){
      
        arrOfVotes.push(BusMallImage.allImage[i].votes)
        arrOfShown.push(BusMallImage.allImage[i].shown)
     
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${BusMallImage.allImage[i].nameImage} had ${BusMallImage.allImage[i].votes} Votes ,and was seen ${BusMallImage.allImage[i].shown} times.`;
    }


}


function getChart(){


    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrOfNames,
            datasets: [{
                label: '# of Votes',
                data: arrOfVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                ],
                borderWidth: 1
            },{
              label: '# of shown',
              data: arrOfShown,
              backgroundColor: [
                  'rgb(210, 108, 253)',
              ],
              borderWidth: 1
          }
          ]
        },
    });
    }



    // function savingToLocalStorge(){
        
    //     localStor=localStorage.setItem('Product',JSON.stringify(BusMallImage.allImage));
       
   
    // }
    // console.log(localStor);
    //   savingToLocalStorge()

      let product=[]
      function toGetDataFromLS(){
         let data= localStorage.getItem('Product')
         console.log(data)
         console.log(JSON.parse(data))
         let product=JSON.parse(data)
        //  product=BusMallImage.allImage
         let ul = document.getElementById('listLS');
         console.log(product.length)
         for(let i = 0 ; i <product.length; i++ ){
      
            arrOfVotes.push(product.votes)
            arrOfShown.push(product.shown)
         
          let li = document.createElement('li');
          ul.appendChild(li);
          li.textContent = `${product[i].nameImage} had ${product[i].votes} Votes ,and was seen ${product[i].shown} times.`;
        }
      }
     toGetDataFromLS()