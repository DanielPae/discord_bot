const Discord = require('discord.js');
module.exports = {
	name: 'address',
	description: 'Adds 4 capital letters to the start fo the address',
	execute(message, args) {
        var first = Math.random() * (25) + 65;
        var second = Math.random() * (25) + 65;
        var third = Math.random() * (25) + 65;
        var fourth = Math.random() * (25) + 65;
        var to_print1 = String.fromCharCode(first, second, third, fourth);
        first = Math.random() * (25) + 65;
        second = Math.random() * (25) + 65;
        third = Math.random() * (25) + 65;
        fourth = Math.random() * (25) + 65;
        to_print2 = String.fromCharCode(first, second, third, fourth);
        first = Math.random() * (25) + 65;
        second = Math.random() * (25) + 65;
        third = Math.random() * (25) + 65;
        fourth = Math.random() * (25) + 65;
        to_print3 = String.fromCharCode(first, second, third, fourth);
        first = Math.random() * (25) + 65;
        second = Math.random() * (25) + 65;
        third = Math.random() * (25) + 65;
        fourth = Math.random() * (25) + 65;
        to_print4 = String.fromCharCode(first, second, third, fourth);
        first = Math.random() * (25) + 65;
        second = Math.random() * (25) + 65;
        third = Math.random() * (25) + 65;
        fourth = Math.random() * (25) + 65;
        to_print5 = String.fromCharCode(first, second, third, fourth);
        const guideEmbed = {
	    color: 0x0099ff,
	    title: 'New address:',
	    //description: 'You should make this much money',
	    /*thumbnail: {
	    	url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    	height: 10,
	    	width: 10,
	    },*/
	    fields: [
	    	{
	    		name: 'Generated address:',
	    		value: to_print1 + message.content.slice(8) + "\n" +
	    		       to_print2 + message.content.slice(8) + "\n" +
	    		       to_print3 + message.content.slice(8) + "\n" +
	    		       to_print4 + message.content.slice(8) + "\n" +
	    		       to_print5 + message.content.slice(8) + "\n",
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
