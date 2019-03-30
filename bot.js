const Discord = require('discord.js')
const Client = new Discord.Client()

Client.login('NDY4NDc5Njk5NTQzMTMwMTMy.Dw2KAQ.dJRiUo0I9S3WSdHMT1_MBmickKo').then(async () => {
    console.log(`Ligado em ${Client.user.tag}`)
})
Client.on('message', async message => {
    if (message.author.id === '468479699543130132') {
        let prefix = '!'
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${prefix}avatar`)) {
            Client.user.setAvatar(args[1]).then(async () => {
                await message.reply(Client.user.displayAvatarURL)
            })
        }
    }
})
