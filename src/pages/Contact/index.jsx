import { useState } from "react"

import DefaultLayout from "../../Layouts/Default"
import Input from "../../components/Input"

import "./style.css"

export default function Contact() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()

  function submitForm(event) {
    event.preventDefault()
    sendForWhatsApp()
  }

  function sendForWhatsApp() {
    const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
    const hashedText = encodeURIComponent(text)
    const whatsappNumber = import.meta.env.VITE_W
    const url = `https://wa.me/${whatsappNumber}?text=${hashedText}`

    window.open(url, "_blank")
  }

  function inputPhoneMask(event) {
    const texto = event.target.value
    const textoApenasNumeros = texto.replace(/\D/g, "").substring(0, 11)

    let telefoneFormatado = textoApenasNumeros.replace(
      /^(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    )

    if (textoApenasNumeros.length < 11) {
      telefoneFormatado = textoApenasNumeros.replace(
        /^(\d{2})(\d{4})(\d{0,4})/,
        "($1) $2-$3"
      )
    }

    setPhone(telefoneFormatado)
  }

  return (
    <DefaultLayout currentPage="contact">
      <form action="" className="flex" onSubmit={submitForm}>
        <Input
          title="Nome"
          labelFor="name"
          type="text"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          title="E-mail"
          labelFor="email"
          type="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Telefone"
          labelFor="phone"
          type="tel"
          id="phone"
          required
          pattern="^\(\d{2}\) \d{5}-\d{4}$"
          maxLength="15"
          className="input-tel"
          value={phone}
          onChange={inputPhoneMask}
        />
        <div className="input-wrapper flex">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </DefaultLayout>
  )
}
