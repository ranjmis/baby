var baby = function(){
	this.babyActivity = {
		'1': 'Mostly sleeping...zzzz',
		'2': 'Sleepy..Cries for feeding/poop ',
		'3': 'Needs feeding every 2 hours',
		'4': 'Still fragile..likes to cycle his legs..',
		'5': 'Shows new activity..rolling',
		'6': 'Masters rolling..pushing hard for crawl'
	}
}

baby.prototype = {
	getActivity: function(month){
		return this.babyActivity[month];
	}
}

module.exports = new baby();