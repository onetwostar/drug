const ul=document.querySelector('.nav');
const ol=document.querySelectorAll('.container>div')
const li=document.querySelectorAll('.nav>li')
const chartButton=document.querySelector('.chart-btn')
const listButton=document.querySelector('.list-btn')
const chart=document.querySelector('.chart')
const list=document.querySelector('.list')


ul.addEventListener('click',e=>{
    e=e||window.event;
    var target= e.target|| e.srcElement;
    j = Array.prototype.indexOf.call(ul.children,target);

    if(target.tagName==='LI'){
        console.log(li.length)
        console.log(ol.length)

        for(var i= 0; i<li.length-1;i++){
            li[i].className='';
            ol[i].className='';
        }
        target.className='active';
        ol[j].className='active';

    }
})

listButton.addEventListener('click',function (){
    chartButton.style.backgroundImage='url(image/chart001.png)';
    listButton.style.backgroundImage='url(image/list1.png)';
    list.style.display='block'
    chart.style.display='none'
})

chartButton.addEventListener('click',function (){
    chartButton.style.backgroundImage='url(image/chart.png)';
    listButton.style.backgroundImage='url(image/list.png)';
    list.style.display='none'
    chart.style.display='flex'
})

const popup=document.querySelector('.popup')
const point=document.querySelector('.point')
const popup2=document.querySelector('.popup2')
point.addEventListener('click',function (){
    if(popup.style.display==='none'){
        popup.style.display='block'
    }else {
        popup.style.display='none'
    }

})

point.addEventListener('mouseover',function (){
    popup2.style.display='flex'
})

point.addEventListener('mouseout',function (){
    popup2.style.display='none'
})


const menu= document.querySelector('.menu')
const submenu=document.querySelector('.submenu')
const province=document.querySelectorAll('.province>li')
const city=document.querySelectorAll('.city>li')
const map=document.querySelector('.map')

menu.addEventListener('click',function (){
    if(submenu.style.display==='none'){
        submenu.style.display='block'
    }else {
       submenu.style.display='none'
    }
    console.log(province)

})

//province.addEventListener('mouseover',e=>{
//    e=e||window.event;
//    var target= e.target|| e.srcElement;
//
//    if(target.tagName==='LI'){
//       target.
//       target.getElementsByTagName('ul')[0].style.display='block'
//}})
//
//province.addEventListener('mouseout',e=>{
//    e=e||window.event;
//    var target= e.target|| e.srcElement;
//
//    if(target.tagName==='LI'){
//       target.style.background=''
//}})

for(var i=0;i<province.length;i++){
    province[i].addEventListener('mouseover', function () {

        this.children[0].style.display='block'
    })
        province[i].addEventListener('mouseout', function () {
        this.children[0].style.display='none'
    })
}

for(var i=0;i<city.length;i++){
   city[i].addEventListener('mouseover', function () {
        this.style.background='#283789'
    })
    city[i].addEventListener('mouseout', function () {
        this.style.background=''
    })
    city[0].addEventListener('click',function (){
        submenu.style.display='none'
        map.style.backgroundImage='url(image/bg1.png)'
        submenu.children[0].className=''
        for(var i=0;i<city.length;i++){
           city[i].className=''
        }
        this.className='active'
        menu.innerHTML=this.parentElement.parentElement.firstChild.nodeValue +this.innerText

    })
    city[1].addEventListener('click',function (){
        submenu.style.display='none'
        map.style.backgroundImage='url(image/bg2.png)'
        submenu.children[0].className=''
        for(var i=0;i<city.length;i++){
            city[i].className=''
        }
        this.className='active'
        menu.innerHTML=this.parentElement.parentElement.firstChild.nodeValue +this.innerText

    })
}

