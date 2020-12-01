const Discord = require('discord.js');
module.exports = {
	name: 'guide',
	description: 'returns link to the guide',
	execute(message, args) {
        const guideEmbed = {
	    color: 0x0099ff,
	    title: 'Our Guides!',
	    description: 'Go learn things!',
	    thumbnail: {
	    	url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
	    fields: [
	    	{
	    		name: 'Manual Queue Bypass Guide:',
	    		value: '[Click here for link](https://drive.google.com/open?id=1gFgDDaUuPbLwXD4ebR-uaHd4HdQh9n5iLcFsThV85mE)',
	    	},
	    	{
	    		name: 'Manual Foosites Guide:',
	    		value: '[Click here for link](https://drive.google.com/open?id=1gFgDDaUuPbLwXD4ebR-uaHd4HdQh9n5iLcFsThV85mE)',
	    	},
	    	{
	    		name: 'Omega SwitchProxy Guide:',
	    		value: '[Click here for link](https://docs.google.com/document/d/1dgN28Yjt3Ce5XgmHSQMgYfDTdW4kCX4d0YMwVYowPn8)',
	    	},
	    	{
	    		name: 'Reshipper Guide:',
	    		value: '[Click here for link](https://docs.google.com/document/d/13KXsEiK7MjRbENVvb_5aML8TvQ8fV2G4m9m7DEGZd5s/edit)',
	    	},
	    	{
	    		name: 'Creating a Catchall Email:',
	    		value: '[Click here for link](https://docs.google.com/document/d/19e_ZPqmXNqH-zHSjOuWfavQGryJvdO7mMqp81zw4g-o/edit?usp=sharing)',
	    	},
	    	{
	    		name: 'Accurate Time:',
	    		value: '[Click here for link](https://time.is/)',
	    	},
	    	{
	    		name: 'Footsites Platinum VIP Guide: ',
	    		value: '[Click here for link](https://docs.google.com/document/d/1xyUN5kSOvmXqjkdWrp8jO56dAYSTNH3BlEsDDYRokpY/edit?usp=sharing)',
	    	}
	    ],
	    timestamp: new Date(),
	    footer: {
	    	text: 'Hope it helped!',
	    	icon_url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
    };

    message.channel.send({ embed: guideEmbed });

	},
};