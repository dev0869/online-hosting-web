var count=new Date("oct 25,2022 16:37:52").getTime();
var main=setInterval(()=>{
    var current=new Date().getTime();
    var tleft=count-current;

    var dayee=Math.floor(tleft/(1000*60*60*24));
    var hours=Math.floor((tleft%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((tleft%(1000*60*60))/(1000*60));
    var seconds=Math.floor((tleft%(1000*60))/1000);
    
    if (seconds<10) {
        document.getElementById("sec").innerHTML="0"+seconds;   
    }
    else{
        document.getElementById("sec").innerHTML=seconds;
    }
    if (dayee<10) {
        document.getElementById("days").innerHTML="0"+dayee;
    } else {
        document.getElementById("days").innerHTML=dayee;       
    }
    if (hours<10) {
        document.getElementById("hours").innerHTML="0"+hours;
    } else {
        document.getElementById("hours").innerHTML=hours;
    }

    if (minutes<10) {
        document.getElementById("min").innerHTML="0"+minutes;
        
    } else {
        document.getElementById("min").innerHTML=minutes;
    }
    

},1000);


// accordition


function hovers(){
    var hover=document.getElementById('accor').style.display="block";
}

function hover(){
    var hovered=document.getElementById('accor').style.display="none";
};


// toggle menu



function hamburger(){
        var android=document.getElementById('navbar-ul')
        android.classList.toggle('tooglee')

    };

    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY>600){
                $('.navbar').addClass("sticky")

            }else{
                $('.navbar').removeClass("sticky")

            }



        });



        $(".menu").click(function(){

            $('.toggle ').toggleClass('actived')
            $('.menu i ').toggleClass('actived')
        })
    })















