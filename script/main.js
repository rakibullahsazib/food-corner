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
        // At each click we will show 4 more items
        var low= (3+clickCounter*4);
        //lt(8):gt(3) means 4,5,6,7
        var id = "#build-menu-items .build-menu-item:lt("+String(low+5)+"):gt("+String(low)+")";
        
        //console.log(id);
        
        $(id).slideDown();
        $("#build-less-up-btn").show();
        
        clickCounter++ ;

        //After 3 counts 3*4=12 items will be shown, we have 10 items. Therefore we don't need show-more button anymore.
        if(clickCounter>=3){
            $("#build-more-down-btn").hide();
        }
    });

    //Show less items
    $("#build-less-up-btn").click(function(){
        $("#build-menu-items div.build-menu-item:gt(3)").slideUp();
        $("#build-less-up-btn").hide();
        $("#build-more-down-btn").show();
        clickCounter = 0;
    });


});

