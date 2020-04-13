rows = $('.table-hover').children('tbody').children('tr');    // Find all rows in table (content)
			ids = rows.children("td:nth-child(3)").hide(); 
			id = rows.children("th:nth-child(3)").hide(); 


			crs_rows = $('.table-hover1').children('tbody').children('tr');    // Find all rows in table (content)
		    crs_rows.children("td:nth-child(3)").hide(); 
		    crs_rows.children("td:nth-child(4)").hide(); 
		    crs_rows.children("td:nth-child(5)").hide();
			crs_rows.children("th:nth-child(3)").hide();
			crs_rows.children("th:nth-child(4)").hide();
			crs_rows.children("th:nth-child(5)").hide();
