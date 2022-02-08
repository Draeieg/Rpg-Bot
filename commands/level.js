const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('level')
		.setDescription('Replies with user level'),
	async execute(interaction) {
		await interaction.reply('[user level]');
	},
};
