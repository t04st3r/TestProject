var preload_data = [
	{name: 'To Kill a Mockingbird', description:'Harper Lee', address:'Via delle vie'},
];

migration.up = function(migrator) {
	migrator.createTable({
		"columns" : {
			"id" : "INTEGER PRIMARY KEY AUTOINCREMENT",
			"name" : "TEXT",
			"description" : "TEXT",
			"address" : "TEXT"
		}
	});
	
	for (var i = 0; i < preload_data.length; i++) { 
	    migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
	migrator.dropTable();
};
