const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'henlo') {
		await interaction.reply('henlo ser');
	}
	// checks the user current classes (or lack of them) and replies with all achievements avalable for that set of classes
	else if (commandName === 'available') {
		await interaction.reply('Replies with available achievements');
	}
	// checks all completed achievements for the user and displays them on a list
	// when we move this to web3 instead of a database it will check for individual NFTs representing each achievement
	else if (commandName === 'obtained') {
		await interaction.reply('Replies with obtained achievements');
	}
	// pretty self explainatory imo
	else if (commandName === 'rank') {
		await interaction.reply('Replies with user level, completion rate and rank');
	}
	// displays user current classes and acts as an interface for the class unlock quests, each individual class can be picked with reaction roles
	else if (commandName === 'class') {
		await interaction.reply('shows user current classes and allow starting a class unlock quest');
	}
});

client.login(token);