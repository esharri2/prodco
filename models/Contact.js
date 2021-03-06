var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
    map: { name: 'showPlatformAs' },
    // autokey: { from: 'showPlatformAs', path: 'key', unique: true },
    label: "Contact info",
    plural: "Contact links"
});

Contact.add({
	showPlatformAs: { type: String, required: true, initial:true},
	platform: { type: Types.Select, options: 'email, facebook, instagram, twitter, other', default: 'other', index: true, initial:true },
	address: { type: String, required: true, initial:true}
});

//I think this defines what shows in the adminUI
Contact.defaultColumns = 'showPlatformAs, address';
Contact.register();
