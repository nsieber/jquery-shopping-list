(function($) {
    "use strict"

    var itemList, listLength
    var itemButton = $('button[name="item"]')
    
    $(document).ready(function() {
        itemList = $(".list p")
        listLength = itemList.length
        
        itemButton.on('click', function() {
            console.log('ok')
        })
        itemButton.on('click', function() {
            console.log('I\'m clicked')
        })
    })

    function addItem() {
       // $(".list").append(getItem())
        console.log(getItem())
    }
    
    function getItem() {
        $('button[name="item"]').on('click', function() {
            return $("input[type='text']").val()
       })
    }

    function printList(arr) {
        var len = arr.length
        for(var i = 0; i < len; i++) {
            console.log(arr[i]);
        }   
    }

}(jQuery))
