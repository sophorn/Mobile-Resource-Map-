function getCollection(){
    $.ajax({
    url: 'http://localhost:3000/api/collections.json',
    type: 'GET',
    dataType: "jsonp",
    success: function(data) {
    },
    beforeSend: function(xhr){   
        xhr.setRequestHeader("X-CSRFToken", $.cookie("_token"));
    }
  });
}

function getCollectionCallback(data){
    var collections = $.map(data, function(collection){
        return new Collection(collection);
    })
    window.model.collections(collections);  
    $('.ui-listview').listview('refresh');
}

