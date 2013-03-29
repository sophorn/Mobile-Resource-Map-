function Collection(collection){
    this.id = collection.id;
    this.name = ko.observable(collection.name);
    this.lat = ko.observable(collection.lat);
    this.lng = ko.observable(collection.lng);
    this.tmp_sites = ko.observableArray();
    this.sites = ko.observableArray();
}