(function($) {
    "use strict"

    var itemList, listLength
    var prepend = '<p><input type="checkbox">&nbsp;'
    var append = '<button ID="remove">remove</button></p>'
    $(document).ready(function() {
        itemList = $(".list p")
        listLength = itemList.length
        
        $('#item').on('click', function() {
//            addItem($('#input'))
              $('.list').append('#input')
        })    

    })

    function addItem(item) {
        $('.list').append(prepend + item + append)
    }

}(jQuery))
