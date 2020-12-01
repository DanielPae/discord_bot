const Discord = require('discord.js');
module.exports = {
	name: 'payout',
	description: 'calculates payout',
	execute(message, args) {
	    price = args[0];
        const guideEmbed = {
	    color: 0x0099ff,
	    title: 'Payout calculations:',
	    description: 'You should make this much money',
	    thumbnail: {
	    	url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
	    fields: [
	    	{
	    		name: 'Paypal:',
	    		value: '$' + (Math.round((price - (price * .029) - .3) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'eBay:',
	    		value: '$' + (Math.round((price - (price * .1) - (price * .9 * .029)) * 100)  / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'Goat:',
	    		value: '$' + (Math.round((price - (price *.095) - 5) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'Grailed:',
	    		value: '$' + (Math.round((price - (price *.06) - (price * .94 * .029)) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'StockX level 1:',
	    		value: '$' + (Math.round((price - (price * .095)) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'StockX level 2:',
	    		value: '$' + (Math.round((price - (price * .090)) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'StockX level 3:',
	    		value: '$' + (Math.round((price - (price * .85)) * 100) / 100),
	    		inline: true,
	    	},
	    	{
	    		name: 'StockX level 4:',
	    		value: '$' + (Math.round((price - (price * .080)) * 100) / 100),
	    		inline: true,
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
