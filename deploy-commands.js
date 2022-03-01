const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('henlo').setDescription('Replies with henlo ser'),
	new SlashCommandBuilder().setName('available').setDescription('Replies with available achievements'),
	new SlashCommandBuilder().setName('obtained').setDescription('Replies with obtained achievements'),
	new SlashCommandBuilder().setName('rank').setDescription('Replies with user level, completion rate and rank'),
	new SlashCommandBuilder().setName('class').setDescription('Replies with user user classesadn starts the class unlock quest'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);