const util = {
	validateEmail: function (email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	},
	setEmail: function(email) {
		window.localStorage.setItem('login_email', email);
	},
	setPassword: function(password) {
		window.localStorage.setItem('login_pw', password);
	},
	clearStorage: function() {
		window.localStorage.clear();
	},
	getEmail: function() {
		return window.localStorage['login_email'];
	},
	getPassword: function() {
		return window.localStorage['login_pw'];
	}
}

export default util;