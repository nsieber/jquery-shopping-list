(function($) {
    "use strict"

    var itemList, listLength
    
    $(document).ready(function() {
        itemList = $(".list p")
        listLength = itemList.length
        
        $('#item').on('click', function() {
            console.log($('#input').val())
        })    



    })

}(jQuery))
