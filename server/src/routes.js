const router = require('express').Router()
const nodemailer = require("nodemailer")
const Message = require('./message')

router.post('/rsvp', async (req, res, next) => {
  try {
    const { mainGuest, phone, email, otherGuests } = req.body

    if (!mainGuest || !phone || !email) {
      throw new Error('parametros incorretos')
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
      }
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      subject: `[RSVP] - ${mainGuest}`,
      from: '"RSVP" <casamentoamandhaehiury@gmail.com>', // sender address
      to: 'casamentoamandhaehiury@gmail.com', // list of receivers
      html: `<b>Convidado:</b> ${mainGuest} <br>
             <b>Email:</b> ${email} <br>
             <b>Telefone:</b> ${phone} <br>
             <b>Total de Acompanhantes:</b> ${otherGuests.length} <br>
             <b>Acompanhantes:</b> ${otherGuests.join(", ")} <br>`
    })

    res.status(200).send()
  } catch (error) {
    next(error)
  }
})

router.post('/messages', async (req, res, next) => {
  try {
    const { author, message } = req.body

    if (!author || !message) {
      throw new Error('parametros incorretos')
    }

    await Message.create({ author, message })

    res.status(200).send()
  } catch (error) {
    next(error)
  }
})

router.get('/messages', async (req, res, next) => {
  try {
    const messages = await Message.find({})

    res.status(200).json(messages)
  } catch (error) {
    next(error)
  }
})

module.exports = router