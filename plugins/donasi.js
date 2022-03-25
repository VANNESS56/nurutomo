let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Axis:* [081380935092]
┣➥ *Dana:* [081380935092]
┣➥ *Gopay:* [081380935092]
┣➥ *Ovo:* [081380935092]
┃ 「 *Chat OWNER* 」
┃ > #owner
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
