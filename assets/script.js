const dados = {
    "cursos":[
    {
        "id": 1,
        "nome": "Enfermagem",
        "disciplinas": [
            {
                "id": 1,
                "nome": "Avaliação e Desempenho",
                "descricao": "Métodos de análise de competências clínicas, evolução técnica e indicadores de qualidade no atendimento ao paciente.",
                "foto": "assets/imgs/av-desempenho.png",
                "detalhes": {
                    "carga_horaria": "40 horas",
                    "professor": "Ma. Renata Vasconcelos",
                    "modulos": [
                        "Indicadores de Qualidade na Assistência Hospitalar",
                        "Avaliação de Competências e Habilidades Clínicas",
                        "Auditoria de Prontuários e Processos de Enfermagem",
                        "Análise de Segurança do Paciente e Gestão de Riscos"
                    ],
                    "competencias": [
                        "Mapear gargalos e falhas operacionais em rotinas de cuidados.",
                        "Utilizar ferramentas de gestão de qualidade (PDCA, diagramas de causa).",
                        "Mensurar e auditar registros técnicos e relatórios de plantão."
                    ]
                }
            },
            {
                "id": 2,
                "nome": "Fundamentos Enfermagem I",
                "descricao": "Introdução às práticas essenciais de cuidado, semiologia, verificação de sinais vitais e biossegurança no ambiente hospitalar.",
                "foto": "assets/imgs/fundamentos-enfermagem.png",
                "detalhes": {
                    "carga_horaria": "120 horas",
                    "professor": "Esp. Carlos Eduardo Lima",
                    "modulos": [
                        "Biossegurança, Ergonomia e Controle de Infecção Hospitalar",
                        "Sinais Vitais: Técnicas de Aferição e Interpretação",
                        "Teorias de Enfermagem e Processo de Cuidar",
                        "Higiene, Conforto, Mobilização e Transporte de Pacientes"
                    ],
                    "competencias": [
                        "Executar a lavagem correta das mãos e paramentação estéril.",
                        "Identificar variações de pulso, temperatura, respiração e PA.",
                        "Aplicar técnicas seguras de mudança de decúbito e leito de evolução."
                    ]
                }
            },
            {
                "id": 3,
                "nome": "Anatomia e Fisiologia",
                "descricao": "Estudo detalhado dos sistemas do corpo humano, compreendendo suas estruturas mecânicas e o funcionamento biológico integrado.",
                "foto": "assets/imgs/anatomia-fisiologia.png",
                "detalhes": {
                    "carga_horaria": "80 horas",
                    "professor": "Dr. Alexandre Mendes",
                    "modulos": [
                        "Introdução à Anatomia e Homeostase Celular",
                        "Sistema Nervoso e Mecanismos de Sinapse",
                        "Sistema Cardiovascular e Hemodinâmica",
                        "Sistema Respiratório e Trocas Gasosas (Hematose)",
                        "Sistema Renal e Equilíbrio Hidroeletrolítico"
                    ],
                    "competencias": [
                        "Identificar estruturas anatômicas macroscópicas em modelos.",
                        "Compreender os mecanismos de regulação da pressão arterial.",
                        "Interpretar a fisiologia renal para entender o balanço hídrico."
                    ]
                }
            },
            {
                "id": 4,
                "nome": "Prática Clínica Supervisionada",
                "descricao": "Atividades práticas de campo em ambiente real de saúde, focadas no desenvolvimento da autonomia técnica e conduta ética sob mentoria.",
                "foto": "assets/imgs/pratica-clinica-supervisada.png",
                "detalhes": {
                    "carga_horaria": "160 horas",
                    "professor": "Ma. Juliana Freitas",
                    "modulos": [
                        "Inserção no Ambiente Hospitalar e Ética Profissional",
                        "Execução Supervisionada de Técnicas e Procedimentos Básicos",
                        "Sistematização da Assistência de Enfermagem (SAE) Real",
                        "Passagem de Plantão e Práticas Integrativas de Cuidado"
                    ],
                    "competencias": [
                        "Realizar admissão e evolução de pacientes em enfermarias reais.",
                        "Preparar e administrar medicações prescritas sob supervisão direta.",
                        "Manter postura ética, empática e sigilosa no contato com pacientes."
                    ]
                }
            },
            {
                "id": 5,
                "nome": "Saúde Pública e Comunitária",
                "descricao": "Ações de prevenção, epidemiologia, campanhas de vacinação e gestão de políticas públicas voltadas para o bem-estar coletivo.",
                "foto": "assets/imgs/saude-publica-comunitaria.png",
                "detalhes": {
                    "carga_horaria": "60 horas",
                    "professor": "Dr. Roberto Antunes",
                    "modulos": [
                        "História da Saúde Pública e Estrutura do SUS",
                        "Estratégia Saúde da Família (ESF) e Atenção Primária",
                        "Indicadores Epidemiológicos e Controle de Endemias",
                        "Programa Nacional de Imunização (PNI) e Rede de Frio"
                    ],
                    "competencias": [
                        "Planejar e aplicar ações educativas em salas de espera e comunidades.",
                        "Gerenciar e aplicar o calendário vacinal em todas as faixas etárias.",
                        "Notificar agravos de saúde compulsórios de importância epidemiológica."
                    ]
                }
            },
            {
                "id": 6,
                "nome": "Enfermagem Pediátrica",
                "descricao": "Cuidados especializados aplicados ao desenvolvimento neonatal e infantil, abordando do manejo clínico ao suporte humanizado à família.",
                "foto": "assets/imgs/enfermagem-pediatra.png",
                "detalhes": {
                    "carga_horaria": "80 horas",
                    "professor": "Dra. Patrícia Albuquerque",
                    "modulos": [
                        "Assistência de Enfermagem ao Recém-Nascido e Puericultura",
                        "Crescimento, Desenvolvimento e Marcos Motores da Infância",
                        "Principais Patologias Pediátricas e Emergências Comuns",
                        "Manejo da Dor Infantil e Abordagem Lúdica Centrada na Família"
                    ],
                    "competencias": [
                        "Realizar exames físicos detalhados em neonatos e crianças.",
                        "Calcular dosagens pediátricas com rigor matemático milimétrico.",
                        "Acolher e orientar os acompanhantes e responsáveis durante o internamento."
                    ]
                }
            },
            {
                "id": 7,
                "nome": "Saúde Mental e Psiquiatria",
                "descricao": "Abordagens terapêuticas e de acolhimento para transtornos mentais, focadas na reinserção social e assistência humanizada.",
                "foto": "assets/imgs/saude-mental-psiquiatra.png",
                "detalhes": {
                    "carga_horaria": "60 horas",
                    "professor": "Esp. Thiago Rocha",
                    "modulos": [
                        "Reforma Psiquiátrica e Redes de Atenção Psicossocial (RAPS)",
                        "Transtornos de Humor, Psicoses e Dependência Química",
                        "Abordagem Terapêutica, Escuta Qualificada e Comunicação",
                        "Gerenciamento de Crises e Emergências Psiquiátricas"
                    ],
                    "competencias": [
                        "Identificar surtos psicóticos ou crises e intervir com segurança.",
                        "Diferenciar efeitos colaterais de psicotrópicos versus sintomas primários.",
                        "Conduzir oficinas terapêuticas visando a ressocialização do paciente."
                    ]
                }
            },
            {
                "id": 8,
                "nome": "Farmacologia Aplicada",
                "descricao": "Mecanismos de ação dos fármacos, cálculo de dosagens, administração segura de medicamentos e efeitos colaterais na rotina clínica.",
                "foto": "assets/imgs/farmacologia-aplicada.png",
                "detalhes": {
                    "carga_horaria": "80 horas",
                    "professor": "Dr. Fernando Henrique Costa",
                    "modulos": [
                        "Farmacocinética e Farmacodinâmica Básica",
                        "Cálculos de Gotejamento, Rediluição e Dosagens Complexas",
                        "Vias de Administração (Enteral, Parenteral, Intradérmica, EV)",
                        "Os 13 Certos na Administração de Medicamentos e Interações"
                    ],
                    "competencias": [
                        "Executar diluições sem margem de erro (Ex: Penicilina G cristalina).",
                        "Intervir imediatamente diante de reações adversas ou anafiláticas.",
                        "Garantir a dupla checagem em medicamentos de alta vigilância."
                        ]
                    }
                }
            ]
        }
    ],
    "alunos": [
        {
            "id": 1,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Cleber",
            "nome": "Cleber Tung",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Noite",
            "redes": ["linkedin.com/in/clebertung", "github.com/clebertung"]
        },
        {
            "id": 2,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana",
            "nome": "Mariana Silva",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Manhã",
            "redes": ["instagram.com/mari_enfermagem"]
        },
        {
            "id": 3,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo",
            "nome": "Ricardo Oliveira",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Noite",
            "redes": []
        },
        {
            "id": 4,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz",
            "nome": "Beatriz Souza",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Tarde",
            "redes": ["linkedin.com/in/beatrizsouza"]
        },
        {
            "id": 5,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
            "nome": "Lucas Ferreira",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Manhã",
            "redes": ["twitter.com/lucas_enfer"]
        },
        {
            "id": 6,
            "foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
            "nome": "Ana Paula Mendes",
            "ocupacao": "Aluno",
            "curso_id": 1,
            "turma": "Noite",
            "redes": ["linkedin.com/in/anapaula-mendes"]
        }
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item")
    const listaDisciplinas = dados.cursos[0].disciplinas
    carouselItems.forEach((slide, index) => {
        if (listaDisciplinas[index]){
            const materiaNoJson = listaDisciplinas[index]

            const slideFoto = slide.querySelector(".slideImg")

            if (slideFoto && materiaNoJson) {
                slideFoto.setAttribute("src", materiaNoJson.foto)
                slideFoto.style.cursor = "pointer"
                slideFoto.addEventListener("click", () => {
                    window.location.href = `detalhes-card.html?id=${materiaNoJson.id}`
                })
            }
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const cardsDisciplinas = document.querySelectorAll(".card")
    const listaDisciplinas = dados.cursos[0].disciplinas
    
    cardsDisciplinas.forEach((card, index) => {
        if (listaDisciplinas[index]){
            const materiaNoJson = listaDisciplinas[index]
            
            const cardTitle = card.querySelector(".card-title")
            const cardText = card.querySelector(".card-text")
            const cardFoto = card.querySelector(".card-img-top")
            
            const btnDetalhes = card.querySelector(".btn-primary")

            if (cardTitle)
                cardTitle.innerHTML = materiaNoJson.nome
            if (cardText)
                cardText.innerHTML = materiaNoJson.descricao
            if (cardFoto && materiaNoJson.foto)
                cardFoto.setAttribute("src", materiaNoJson.foto)

            if (btnDetalhes) {
                btnDetalhes.addEventListener("click", (evento) => {
                    evento.preventDefault() 
                    window.location.href = `detalhes-card.html?id=${materiaNoJson.id}`
                })
            }
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const alunoFoto = document.getElementById("alunoFoto")
    const alunoNome = document.getElementById("alunoNome")
    const alunoTurma = document.getElementById("alunoTurma")
    const alunoCurso = document.getElementById("alunoCurso")
    const containerRedes = document.getElementById("alunoRedes")

    const alunoAtivo = dados.alunos[0]
    
    const cursoEncontrado = dados.cursos.find(curso => curso.id === alunoAtivo.curso_id)

    if (alunoFoto) alunoFoto.setAttribute("src", alunoAtivo.foto)
    if (alunoNome) alunoNome.innerHTML = "Aluno: " + alunoAtivo.nome
    if (alunoTurma) alunoTurma.innerHTML = "Turma: " + alunoAtivo.turma
    if (alunoCurso) alunoCurso.innerHTML = "Curso: " + (cursoEncontrado ? cursoEncontrado.nome : "Não encontrado")

    if (containerRedes && alunoAtivo.redes) {
        containerRedes.innerHTML = "";

        alunoAtivo.redes.forEach(link => {
            const urlCompleta = link.startsWith("http") ? link : `https://${link}`;
            
            const tagLink = document.createElement("a");
            tagLink.setAttribute("href", urlCompleta);
            tagLink.setAttribute("target", "_blank");
            
            tagLink.classList.add("btn", "btn-sm", "px-3", "fw-bold");

            if (link.includes("linkedin.com")) {
                tagLink.innerText = "LinkedIn";
                tagLink.classList.add("btn-primary");
            } else if (link.includes("github.com")) {
                tagLink.innerText = "GitHub";
                tagLink.classList.add("btn-dark");
            } else if (link.includes("instagram.com")) {
                tagLink.innerText = "Instagram";
                tagLink.classList.add("btn-danger");
            } else {
                tagLink.innerText = "Link";
                tagLink.classList.add("btn-secondary");
            }
            containerRedes.appendChild(tagLink);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const detalheNome = document.getElementById("detalheNome")
    if (detalheNome) {
        const parametrosURL = new URLSearchParams(window.location.search)
        const idMateria = parseInt(parametrosURL.get("id"))
        const listaDisciplinas = dados.cursos[0].disciplinas
        const materiaSelecionada = listaDisciplinas.find(m => m.id === idMateria) || listaDisciplinas[0]

        if (materiaSelecionada) {
            const detalheFoto = document.getElementById("detalheFoto")
            const detalheDesc = document.getElementById("detalheDesc")
            const detalheCarga = document.getElementById("detalheCarga")
            const detalheProfessor = document.getElementById("detalheProfessor")
            const listaModulos = document.getElementById("detalheModulos")
            const listaCompetencias = document.getElementById("detalheCompetencias")
            if (detalheFoto && materiaSelecionada.foto) {
                detalheFoto.setAttribute("src", materiaSelecionada.foto)
            }
            detalheNome.innerText = materiaSelecionada.nome
            if (detalheDesc) detalheDesc.innerText = materiaSelecionada.descricao
            if (materiaSelecionada.detalhes) {
                if (detalheCarga) detalheCarga.innerText = materiaSelecionada.detalhes.carga_horaria
                if (detalheProfessor) detalheProfessor.innerText = materiaSelecionada.detalhes.professor
                if (listaModulos && materiaSelecionada.detalhes.modulos) {
                    listaModulos.innerHTML = ""
                    materiaSelecionada.detalhes.modulos.forEach(mod => {
                        const li = document.createElement("li")
                        li.innerText = mod
                        listaModulos.appendChild(li)
                    })
                }
                if (listaCompetencias && materiaSelecionada.detalhes.competencias) {
                    listaCompetencias.innerHTML = ""
                    materiaSelecionada.detalhes.competencias.forEach(comp => {
                        const li = document.createElement("li")
                        li.innerText = comp
                        listaCompetencias.appendChild(li)
                    })
                }
            }
        }
    }
})



