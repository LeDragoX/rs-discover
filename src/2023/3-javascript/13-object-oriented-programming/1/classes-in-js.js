class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }

  dizerNome() {
    console.log(this.nome)
    return this.nome
  }

  meuId() {
    console.log(this.id)
    return this.id
  }
}

const pessoa = new Pessoa('Mayk')
pessoa.dizerNome()
pessoa.meuId()
