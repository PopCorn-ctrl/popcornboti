const Discord = require('discord.js')
const client = new Discord.Client()

let prefix = "?"

client.login("NjM3MDA4NjMwNzI5NjcwNjY2.XbH6jw.6q6vNPt-HkH_n8GnLxSkl37Gv9Y")

client.on("ready", () => {
    console.log("Le bot vien de se connècter !")
    client.user.setActivity("?help for the command ! Bot dev by PopCorn", {type: 1})
})

