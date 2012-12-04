Ext.application({
	name : 'SenchaAPI',
	controllers : ['TestController'],
	profiles : ['TestProfile'],
	launch : function() {
		//Ext.Msg.alert('Setup test',"Setup has completed",Ext.emptyFn);
		console.log('Application launch function');
	}
});