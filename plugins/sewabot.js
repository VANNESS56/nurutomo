const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*
Perminggu : 2K
Perbulan  : 4K
Permanen  : 20K

*Payment :*
_Pulsa Dan Dana_

Minat?PC
Ketik #owner
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler
