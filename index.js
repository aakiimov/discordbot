const Discord = require('discord.js'); 
const bot = new Discord.Client();
// подключаем файл конфигурации //
let config = require('./botconfig.json'); 
// достаём токен и префикс //
let token = config.token; 
let prefix = config.prefix;
// создаём ссылку-приглашение для бота //
bot.on('ready', () => { 
    console.log(`Бот ${bot.user.username} успешно запущен!`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
});
// команда, и то, что она должна выполнить //
bot.on('message', msg => {
    if (msg.content === prefix + 'bot') {
        msg.reply('бот работает.');
    }
});
bot.on('message', msg => {
    if (msg.content === prefix + 'help') {
        msg.reply('мои команды:\n!bot - проверка работоспособности бота\n!ping - пинг бота');
    }
});
bot.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        const start = new Date();
        const end = new Date();
        const time = utils.random(73)
        msg.reply(`понг! Сейчас пинг составляет ${end-start}ms. Пинг до discordapi: ${time}ms`)
    }
});
bot.login(token);
