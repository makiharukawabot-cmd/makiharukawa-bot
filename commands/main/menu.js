const { MessageActionRow, MessageButton } = require('discord.js');

function createMenu() {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('option1')
                .setLabel('🌸 MAKI Option 1')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('option2')
                .setLabel('🍰 MAKI Option 2')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('option3')
                .setLabel('🎀 MAKI Option 3')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('option4')
                .setLabel('✨ MAKI Option 4')
                .setStyle('PRIMARY')
        );

    return { content: '🎉 Welcome to the MAKI Menu! 🎉\nChoose an option below:', components: [row] }; 
}

module.exports = { createMenu };