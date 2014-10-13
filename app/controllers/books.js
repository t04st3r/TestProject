$.books.open();

var books = Alloy.Collections.books;

books.fetch();

// Free model-view data binding resources when this view-controller closes
$.books.addEventListener('close', function() {
    $.destroy();
});