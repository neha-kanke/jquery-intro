let cl=console.log

let $box=$(".box")
  $(document).ready(function(){
    $("#clickbtn").on("click",function(){
        $(".box").show()
    })
    $("#hidekbtn").on("click",function(){
             $(".box").hide()
    })
    $("#tooglebtn").on("click",function(){
        $box.toggle()
    })

    $("#slideupbtn").on("click",function(){
        $box.slideUp(5000)
    })
    $("#slidedown").on("click",function(){
        $box.slideDown("slow")
    })
  $("#slidetoggle").on("click",function(){
    $box.slideToggle(2000)
  })
  $("#fadein").on("click",function(){
    $box.fadeIn(2000)
  })
$("#fadeout").on("click",function(){
    $box.fadeOut(2000)
})
$("#fadetogglebtn").on("click",function(){
    $box.fadeToggle()
})
  })


   