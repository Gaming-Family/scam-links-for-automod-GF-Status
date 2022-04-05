const { Client, Intents } = require("discord.js")
const client = new Client({
 intent: Intents.FLAGS.GUILDS,
         Intents.FLAGS.GUILD_MESSAGES
         allowedMentions: { 
        parse: ['users', 'roles'], 
        repliedUser: true
       }
})

const scams = require("./scams.json")

client.on("messageCreate", async message => {
if(scams.includes(message.content)) {
  message.delete()
  message.channel.send({ content: "No scam links allowed" }).then((x) => {
    setTimeout(() => {
      x.delete()
    }, 10000)
  })
}
})

client.login(process.env.token)
