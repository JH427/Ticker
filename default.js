'use strict';

$(function() {
	let Data = $('#Data');
	let Plus = $('#Plus');
	let soilCount = [];
	let ticker = document.querySelectorAll(".ticker-wrap .ticker");

	PQ(
    'Query1',
    {},
    function(view){
    	view.forEach(function(rec) {
    		soilCount.push(rec.Lab);
    		Data.append(`
    			<div class="ticker__item">${rec.Lab} : ${rec.Requested}</div>
          `);
    	});
    });

    PQ(
    'Query2',
    {},
    function(view){
    	view.forEach(function(rec) {
    		Plus.append(`
    			<div id="Plus" class="ticker__item">${rec.Lab} : ${rec.Requested}</div>
          `);
    	});
    });

    

    ticker.style.animationDuration = "30s";

});

