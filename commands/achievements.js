const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('achievements')
		.setDescription('Replies with list of achievements'),
	async execute(interaction) {
		await interaction.reply('[achievement list]');
	},
};
