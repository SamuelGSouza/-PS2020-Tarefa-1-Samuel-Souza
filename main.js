// Pessoas
var pedro = {
    nome: "Pedro",
    idade: 20,
    parente: "Ana",
    curso: "Engenharia de Computação",
    universidade: "UFOP",
}

var ana = {
    nome: "Ana",
    idade: 17,
    parente: "Pedro",
    curso: "Engenharia de Computação",
    universidade: "UFOP",
}

var paulo = {
    nome: "Paulo",
    idade: 23,
    residencia: "República Orfanato",
}

var armando = {
    nome: "Armando",
    idade: 17,
    residencia: "República Orfanato",
}

var andre = {
    nome: "André",
    profissao: "garçom",
    localDeTrab: "Clube da Cerveja",
    checa: function checarIDs(ageAna, ageArm){
        if(ageAna < 18) {
            if(ageArm < 18){
                return `${ana.nome} vai tomar Coca-Cola\n${armando.nome} vai tomar Coca-Cola`
            }
            else {
                return `${ana.nome} vai tomar Coca-Cola\n${armando.nome} pode tomar cerveja`
            }
        }
        else {
            if(ageArm < 18){
                return `${ana.nome} pode tomar cerveja\n${armando.nome} vai tomar Coca-Cola`
            }
            else {
                return `${ana.nome} pode tomar cerveja\n${armando.nome} pode tomar cerveja`
            }
        }
    }
}

var resenha = {
    amigos: [pedro, ana, paulo, armando],
    bebida: "2 cervejas",
    local: "Clube da Cerveja"
}

// Universidade

var ec = {
    nome: "Engenharia de Computação",
    quantPeriodos: 10,
    cargaHoraria: 3630
}

var ufop = {
    ec,
    // Possibilidade de adicionar outros cursos
}

// República

var orfanato = {
    nome: "República Orfanato",
    idade: 10,
    moradores: 5
}

var republicas = {
    orfanato,
    // Possibilidade de adicionar outras repúblicas
}
