var datas = ['Sachin Tendulkar vas born on $$$ 1973 in Mumbai. His father, $$$ was a famous Mand! novelist. He went to Shardhasham Visthys Mandir (high school) and was very inclined to playing $$$. Cricket was his passion from a very early age and played with friends in $$$. He began serious coaching at school, under Ramakant Achrekar practiced for hours and tried to perfect his skills in batting. When bored of batting, his coach would place a cupee coin on the stump and gift the coin if Sachin managed to bat well and stay not out. He won such $$$ coins and they are among his prized possessions, Today he is rated second after El Donald adnan, the greatest cricketer ever and one of the three batsmen to surpass 11,000 runs in test cricket (first Indian to do it. He is also the greatest one day batman. He has rightly earned the titles or nick name THE LITTLE MASTER.']
    
    
var answers = ['24 April','Ramesh Tendulkar','cricket','street','13'];
var ck = true;

$(document).ready(function(){
    datas.map(function(data,index){
        var a = data.replace(/\$\$\$/g ,'<input type="text" class="box" id = "box_'+index+'"></input>')
        $('#main').append('<div>'+a+'</div>');
    });

    $('button').bind('click',clickfun).css('cursor','pointer');
});

function clickfun(){
    if(ck == true){

        $('input').each(function(index,elem){
            var a = $(elem).val().toLowerCase().trim();
            var b = answers[index].toLowerCase().trim();

            if(a==b){
                $(elem).css({'border':'1px solid green','background':'green'});
            }
            else{
                $(elem).css({'border':'1px solid red','background':'red'});
            }
;
        })

        $('input').prop('disabled',true);
        $('button').html('reset');
        ck = false;
    }
    else{
        $('input').prop('disabled',false).val('').css('border', '1px solid #000');
        $(button).html('submit');

        ck = true;
    }
}
    
    
    