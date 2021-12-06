const { Client } = require("discord.js")
const client = new Client()

const scams = require("./scams.json")

client.on("message", async message => {
if(scams.includes(message.content.toLowerCase())) {
  message.delete()
  message.channel.send("No scam links aloowd").then((x) => {
    setTimeout(() => {
      x.delete()
    }, 5000)
  })
}
})

client.login(process.env.token)