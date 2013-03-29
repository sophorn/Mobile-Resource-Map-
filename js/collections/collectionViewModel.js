function CollectionViewModel(){
    this.collections = ko.observableArray();    
}

window.model = new CollectionViewModel();
ko.applyBindings(window.model);