
//_____________________________EVENT Konusu:

//kullanici icin yapilmasi adina birakilan seylerdir. mesela bir ikona tiklatmak, veya alert etttirmek. click mesela eventtir. kullanici birsey yapabiliyor. 
/*
const colorChangeFunction=()=>{

    let button= document.querySelector('#colorChangeButton')
    button.style.backgroundColor='blue';
    button.style.color='white'
}
*/
/*
const colorChangeFunction = ()=>{

    let button= document.querySelector('.square')
    button.style.backgroundColor='red';
    button.style.color='white'
    button.innerText= 'Clicked' //bunu yaparak kutu icinde clicked yazdirdik.
}

//yani burada ya Html de button belileyip Htmle id vererek onclick ekleyip tanimlatilayoruz. yada javascriptte function yazarak html de baglantisini kuruyoruz.  
*/

/*
const colorChangeFunction = (element, background, text)=>{
    element.style.backgroundColor = background;
    element.style.color= text;
}// bu özellikle this özelligi de kullanilarak buttonlara renk verdik 3 butonu da. 

*/

/*
// simdi ücüncü yöntemi isliyoruz.

const button= document.querySelector('#btn')
button.addEventListener('click', ()=>{

    console.log('clicked')// burada tikladikca cliked sayisi console da yazdirmakta. 
})//addEventListener bir methoddur. ezberlemek lazim. */
/*
//diger yazim yöntemi;

const button= document.querySelector('#btn')

button.addEventListener('click', function(){

    console.log('clicked')
})//bu sekilde de yazilir. */


/*
const button= document.querySelector('#btn')
const consoleClick= ()=>{
    console.log('hi')
}
button.addEventListener('click', ()=> consoleClick()) //Burada console sayaciyla hi yazdirmis olduk.
*/
/*
// maus ve keyboard eventlerinin oldugunu belirtiyor bakalim görelim. 

//Iki kere tiklama ile olan eventler:

const button= document.querySelector('#btn')
const div= document.querySelector('.square')
const consoleClick= ()=>{

}

button.addEventListener('click', ()=> consoleClick())

div.addEventListener('dbclick', function(){//burada dbclick doubleclick cift tiklama.

div.style.backgroundColor= 'orange'
}) //doubleclick bu kadar. 


div.addEventListener('mousedown', function(){

    div.style.backgroundColor= 'yellow'
    })
//ayni elemente birden fazla event verebilirim. cift tiklamaya benziyor. mousedown
div.addEventListener('mouseup', function(){

    div.style.backgroundColor= 'red'
    })
*/
    //MOUSEUP tiklamanin mausedan kalkmasiyla aktif olur. calisir. MOUSEDOWN da asagi dogru mouse a basmamiz ile aktif olu. birakinca up aktif olur. 


    const button= document.querySelector('#btn')
    const div= document.querySelector('.square')
    const consoleClick= ()=>{
    
    }
    
    // div.addEventListener('mouseenter', function(){

    //     div.style.backgroundColor= 'red'

    //})// Mouseenter ile, ilgili alana mesea bir karenin icine girdiginde renk degistiriyor. 

    // div.addEventListener('mouseleave', function(){

    //     div.style.backgroundColor= 'purple'
    // }) //mouseleave ilgili karenin icinden ayrilinca farkli bir renk almasini sagliyor. tekrar icine girince yani Mouseenter olunca yine atadigimiz Mouseenter rengine dönüsüyor. 


    // div.addEventListener('mousemove', function(e){

    //     div.style.backgroundColor= 'yellow'
    //     //console.log('geziniyorum')
    //     console.log('X->', e.screenX, 'Y->', e.screenY)
    // })// Mousemove karenin icine girdigimiz anda kare icindeki tüm gezinmeyi hareketleri sayi olarak console a yazdiyior. function a(e) deyip alttaki console a x ve y screen yazdirmasini istedik. tüm koordinatlari x ve y olarak consola yazdirdi. 

    /*  //klavye eventleri icin simdi yaziyoruz. :
    const input= document.querySelector('#input')
    const func = ()=>{
        alert('keydown')
    }
    input.addEventListener('keydown',func)//burada input icine girip enter yparsak uyari yazisi aliyoruzkeydown yazdiriyoruyarida.
    */


    const input= document.querySelector('#input')
    const keyDownFunc= () => {
        input.style.backgroundColor= 'red'
    }
    const keyUpFunc = () =>{
        input.style.backgroundColor='green'
    }
        
    input.addEventListener('keydown',keyDownFunc)
    input.addEventListener('keyup',keyUpFunc)

    //input icine yazarken renk farkli yazmayi biraktigimizda renk farkli oluyor.Keyup ve keydown bu sekilde.  