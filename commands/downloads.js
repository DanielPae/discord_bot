const Discord = require('discord.js');
module.exports = {
	name: 'downloads',
	description: 'gives download links',
	execute(message, args) {
        const guideEmbed = {
	    color: 0x0099ff,
	    title: 'Downloads:',
	    //description: 'This stuff helps!',
	    thumbnail: {
	    	url: 'https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg',
	    },
	    fields: [
	    	{
	    		name: 'CyberAIO:',
	    		value: '[Click here for link](https://cdn.cybersole.io/installer/installer.exe)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Ghost Phantom:',
	    		value: '[Click here for link](https://ghost.shoes/l/phantom)',
	    		inline: true,
	    	},
	    	{
	    		name: 'ANB AIO V2:',
	    		value: '[Click here for link](http://downloadsv2.aiobot.com/)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Dashe:',
	    		value: '[Click here for link](https://dashe-updater.herokuapp.com/)',
	    		inline: true,
	    	},
	    	{
	    		name: 'HasteyIO:',
	    		value: '[Click here for link](https://update.hastey.io/)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Kodai:',
	    		value: '[Click here for link](https://kodai.io/download)',
	    		inline: true,
	    	},
	    	{
	    		name: 'ANB AIO',
	    		value: '[Click here for link](http://bit.ly/ANB-AIO-Setup)',
	    		inline: true,
	    	},
	    	{
	    		name: 'EveCaptcha Windows:',
	    		value: '[Click here for link](https://updates.shhhh3dots.com/download/latest&platform=win)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Eve Captcha Mac:',
	    		value: '[Click here for link]( https://updates.shhhh3dots.com/download/latest&platform=mac)',
	    		inline: true,
	    	},
	    	{
	    		name: 'NikeShoeBot:',
	    		value: '[Click here for link](https://nsb.nyc3.digitaloceanspaces.com/NSB-win-latest.exe)',
	    		inline: true,
	    	},
	    	{
	    		name: 'TheKickStation:',
	    		value: '[Click here for link](http://thekickstationapi.com/downloads/Installer.msi.)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Latchkey:',
	    		value: '[Click here for link](http://download.latchkeybots.io/)',
	    		inline: true,
	    	},
	    	{
	    		name: 'PD:',
	    		value: '[Click here for link]( https://shopify.projectdestroyer.com/download)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Ghost SNKRS:',
	    		value: '[Click here for link](https://update.ghostaio.com/)',
	    		inline: true,
	    	},
	    	{
	    		name: 'BNB:',
	    		value: '[Click here for link](http://bnba.io/download-bnb)',
	    		inline: true,
	    	},
	    	{
	    		name: 'EveAIO:',
	    		value: '[Click here for link](http://eve-robotics.com/release/EveAIO_setup.exe)',
	    		inline: true,
	    	},
	    	{
	    		name: 'Easy Captcha:',
	    		value: '[Click here for link](http://update.ezcaptcha.io/)',
	    		inline: true,
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