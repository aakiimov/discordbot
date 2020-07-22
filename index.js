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
    if (msg.content === prefix + 'бот') {
        msg.reply('Привет! Бот работает.');
    }
});
bot.on('message', msg => {
    if (msg.content === prefix + 'help') {
        msg.reply('Привет! Список моих команд, существующих на данный момент:\nБот - проверка работоспособности бота');
    }
});
bot.login(token);
