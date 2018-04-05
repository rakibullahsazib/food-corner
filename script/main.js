var products=[
    ['Frenchfries', 'frenchfries.jpg'],
    ['Fried Chicken','fried-chicken.jpg' ],
    ['Fruit Shake','fruit-shake.jpg'],
    ['Ice cream','ice-cream.jpg'],
    ['Muffin','muffin.jpg'],
    ['Pasta', 'pasta.jpg'],
    ["Pizza",'pizza.jpg'],
    ['Rissole','rissole.jpg'],
    ['Spaghetti','spaghetti.jpg'],
    ['Strawberry Cake','strawberry-cake.jpg']
];


$(document).ready(function(){

    $("#nav-btn").click(function(){
        $("ul#nav-list").slideToggle();
    });

    // Adding items using js
    $("#build-less-up-btn").hide();
    for(var i=0; i<products.length; i++ ){

        var buildMenuItem = '<div class="build-menu-item" style="display:none;"><img src="images/'+products[i][1]+'" alt=""><div class="build-item-title">'+ products[i][0] +'</div></div>';

        $("#build-menu-items").append(buildMenuItem);
    }

    //Show more items
    var clickCounter = 0;
    $("#build-more-down-btn").click(function(){

        var low= (6 + clickCounter*4);

        
        var id = "#build-menu-items div:gt("+String(low)+"):lt("+String(low+3)+")";
        
        console.log(id);
        
        $(id).slideDown();
        $("#build-less-up-btn").show();
        
        clickCounter++ ;
        if(clickCounter>=3){
            $("#build-more-down-btn").hide();
        }
    });

    //Show less items
    $("#build-less-up-btn").click(function(){
        $("#build-menu-items div:gt(6)").slideUp();
        $("#build-less-up-btn").hide();
        $("#build-more-down-btn").show();
        clickCounter = 0;
    });


});

