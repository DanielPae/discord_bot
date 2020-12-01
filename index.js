const fs = require('fs');
const Discord = require('discord.js');
const Attachment = require('discord.js');
const { prefix, token } = require('./config.json');
const { exec } = require('child_process');
const request = require("request");
const client = new Discord.Client();
client.commands = new Discord.Collection();

//read in files from commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//make every file in the folder required to run this program
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

//when a message is sent to the discord server then..
client.on('message', message => {


    //if the message has an attachment
    if(message.channel.name == "success" && message.attachments.first() !== undefined){
        image = message.attachments.first();
        const type_of_file = image.url.substring(image.url.length - 3);
        //download it from the discord server
        request.get(image.url)
            .on('error', console.error)
            .pipe(fs.createWriteStream("pic_to_post." + type_of_file)); //and then write it to a preset file

        //call the twitter bot to post it through the terminal
        exec("cd ../twitter_bot && node index.js", (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
        });

        const guideEmbed = new Discord.RichEmbed()
	        .setColor("0x0099ff")
	        //.setThumbnail('https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg')
	        .addField("Picture was posted to twitter!", "React to this message with a trashcan to delete the tweet")
	        .setTimestamp()
	        .setFooter("Hope it helped!", "https://cdn.discordapp.com/attachments/613543342374125580/614239729742905350/Infinite_Small.jpg");


        const filter = (reaction, user) => reaction.emoji.name === '🗑' && user === message.author

        message.channel.send(guideEmbed).then(function(message) {
            message.react('🗑');
            const collector = message.createReactionCollector(filter, {time: 15000});
        }).catch(function() {
            console.log("it didn't work");
        })

        collector.on('collect', r => {
            fs.readFile('/twitter_info.txt', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
            exec("cd ../twitter_bot && node index.js " + data, (err, stdout, stderr) => {
                if (err) {
                    console.error(`exec error: ${err}`);
                    return;
                }
            });
        });
        };



    //if the message starts the the command prefix (!)
	if (!message.content.startsWith(prefix) || message.author.bot) return;

    //remove the command prefix
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase(); //to ignore capitals

	if (!client.commands.has(command)) return; //if its an unrecognized command then give up

	try {
		client.commands.get(command).execute(message, args); //try to execute the command
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');//self explanatory
	}
});

client.login(token);


