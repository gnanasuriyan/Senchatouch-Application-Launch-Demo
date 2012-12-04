Ext.define('SenchaAPI.profile.TestProfile',{
	extend : 'Ext.app.Profile',
	isActive : function() {
		return true;
	},
	launch : function() {
		console.log('Profile launch function');
	}
});