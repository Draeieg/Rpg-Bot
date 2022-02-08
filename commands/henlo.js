const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('henlo')
		.setDescription('Replies with henlo ser'),
	async execute(interaction) {
		await interaction.reply('henlo ser');
	},
};
