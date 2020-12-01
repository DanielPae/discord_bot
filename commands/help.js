const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'gives download links',
	execute(message, args) {
        const guideEmbed = {
	    color: 0x0099ff,
	    //title: 'Help:',
	    //description: "the things in brackets are required inputs on your part",
	    thumbnail: {
	    	url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
	    fields: [
	    	{
	    		name: '!guide',
	    		value: 'Gives links to our guides!',
	    	},
	    	{
	    		name: '!payout [value]',
	    		value: 'Calculates payout for different sites',
	    	},
	    	{
	    		name: '!address [words]',
	    		value: 'Generates 4 random capital letters before the words you put',
	    	},
	    	{
	    		name: '!downloads',
	    		value: 'Provides download links to many different useful applications',
	    	}
	    ],
	    /*image: {  17
	    	url: 'https://i.imgur.com/wSTFkRM.png',
	    },*/
	    timestamp: new Date(),
	    footer: {
	    	text: 'Hope it helped!',
	    	icon_url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
    };

    message.channel.send({ embed: guideEmbed });
		//message.channel.send('https://drive.google.com/open?id=1CeduGOEbNdSbYW5TCRO-oCQv12QG8Hz23Fq3e0qzhfk');
	},
};