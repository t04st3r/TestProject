var myBooks = Alloy.Collections.books;

var book = Alloy.createModel('books', {
	title : 'bruschetta',
	author : 'calda calda..'
});

myBooks.add(book);
book.save();

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}

function showBook(event) {
	var selectedBook = event.source;
	var args = {
		title : selectedBook.title,
		author : selectedBook.author
	};
	var bookView = Alloy.createController("bookdetails", args).getView();
	
	if (OS_IOS) {
        $.navGroupWin.openWindow(bookView);
    }
    if (OS_ANDROID) {
        bookView.open();
    }    
}

function addBook(){
	var myAddBook = Alloy.createController("addbook", {}).getView();
	if (OS_IOS){
		$.navGroupWin.openWindow(myAddBook);
	}
	if(OS_ANDROID) {
		myAddBook.open();
	}
}
