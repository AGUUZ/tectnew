const Discord = require("discord.js")
const { owner, prefix } = require('../../config.json')
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "set-stats",
  description: "تغير حاله البوت",
  aliases: [''],
  type: "owner",
  memberPermissions: ['ADMINISTRATION'], // Member Permission Check
  botPerms: ['ADMINISTRATION'], // Bot Permission check in server
  botChannelPerms: ['ADMINISTRATION'], // Bot permission check in Channel
  owner: true, // Owner Only check
  serverOwner: true, // Server Owner check

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    let play = new Discord.MessageButton()
      .setCustomId("playing")
      .setLabel("playing")
      .setStyle("SECONDARY")

    let strem = new Discord.MessageButton()
      .setCustomId("strem")
      .setLabel("streming")
      .setStyle("SECONDARY")

    let listeing = new Discord.MessageButton()
      .setCustomId("lisin")
      .setLabel("listing")
      .setStyle("SECONDARY")

       let watch = new Discord.MessageButton()
      .setCustomId("watc")
      .setLabel("watching")
      .setStyle("SECONDARY")
      
      const row = new Discord.MessageActionRow()
      .addComponents(play, strem, listeing, watch)

      const sts = new MessageEmbed()
        .setColor("DARK_BLUE")
        .setDescription("نقي زب")
        message.reply({embeds: [sts], components: [row]});


  }
}