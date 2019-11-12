'use strict'

const Mail = use("Mail")
const Helpers = use("Helpers")

class NewTaskMail {
  static get concurrency() {
    return 1
  }

  static get key() {
    return 'NewTaskMail-job'
  }

  async handle({ email, username, title, file }) {
    console.log(`Job: ${NewTaskMail.key}`)
    await Mail.send(
      ["emails.new_task"],
      { username, title, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from("victor.santos@kumulus.com.br", "Victor Piassi")
          .subject("Nova tarefa")

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            file: file.name
          })
        }
      })
  }
}

module.exports = NewTaskMail

