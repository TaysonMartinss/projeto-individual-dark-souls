window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var banner = document.querySelector('.banner');

    // Calcula a opacidade com base na posição da rolagem
    var opacity = window.scrollY / banner.offsetHeight;
    // Limita a opacidade entre 0 e 1
    opacity = Math.min(1, Math.max(0, opacity));
    // Aplica a opacidade ao cabeçalho
    header.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
});

// Função para animar a opacidade do cabeçalho ao recarregar a página
function animateHeaderOpacity() {
    var header = document.querySelector('.header');
    var banner = document.querySelector('.banner');
    var opacity = 0; // Opacidade inicial ao recarregar a página

    // Define a opacidade inicial como 0
    header.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';

    // Função para animar a opacidade do cabeçalho suavemente
    function fadeIn() {
        if (opacity < 1) {
            opacity += 0.01; // Ajuste o valor de incremento para controlar a velocidade da transição
            header.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
            requestAnimationFrame(fadeIn);
        }
    }

    // Função para animar a opacidade do cabeçalho suavemente para 0
    function fadeOut() {
        if (opacity > 0) {
            opacity -= 0.01; // Ajuste o valor de incremento para controlar a velocidade da transição
            header.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
            requestAnimationFrame(fadeOut);
        }
    }

    // Verifique se a página foi carregada completamente
    if (document.readyState === 'complete') {
        // Inicie a animação de desvanecimento
        fadeOut();
    }

    // Adicione um listener de evento para a rolagem da página
    window.addEventListener('scroll', function() {
        // Verifique se a posição atual de rolagem é maior que 0
        if (window.scrollY > 0) {
            // Se a posição atual de rolagem for maior que 0, inicie a animação de desvanecimento
            fadeOut();
        } else {
            // Se a posição atual de rolagem for 0, inicie a animação de aparecimento
            fadeIn();
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollLink = document.querySelectorAll('a[href^="#"]');
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.offsetTop;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutSine(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }
        
        function easeInOutSine(t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        };
        
        window.requestAnimationFrame(step);
    }
    
    scrollLink.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });
});



function showLoader() {
    document.getElementById("loader").style.display = "flex";
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        window.location.href = "./../html/login.html";
    }, 10000); 
}


function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var saudacoes = document.querySelector('.saudacoes');

    if (email != null && nome != null) {
        saudacoes.innerHTML = "<b>Olá,  </b>"  +  nome + "!";
    } else {
        window.location = "../dashboard.html";
    }

    fetch("/usuarios/gameVitoria",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id
        })
    }).then(function (resposta) {
        console.log("quizResultado caiu aqui")

        if (resposta.ok) {
            console.log("resposta quizGrafico" + resposta);

            resposta.json().then(json => {
                console.log(json);
                var obj = JSON.stringify(json);
                sessionStorage.id = json.id;
                console.log(obj);
                
                document.getElementById("divvitorias").innerHTML = `
                <div class="kpi1">
                    <span class="kpi-value">${json[0].vitorias} :</span>
                    <span class="kpi-label"> <b>Vitórias</b></span>
                </div>
            `;
            });

        } else {
            console.log("Houve um erro ao terminar o quiz!");

            resposta.text().then(texto => {
                console.error(texto);

            });

        }
    }).catch(function (erro) {
        console.log(erro);
    })


    ///////////SEPARAR PRA NÃO MISTURAR\\\\\\\\\\\
    fetch("/usuarios/gameMortes",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: id
        })
    }).then(function (resposta) {
        console.log("quizResultado caiu aqui")

        if (resposta.ok) {
            console.log("resposta quizGrafico" + resposta);

            resposta.json().then(json => {
                console.log(json);
                var obj = JSON.stringify(json);
                sessionStorage.id = json.id;
                console.log(obj);
                
                document.getElementById("divderrotas").innerHTML = `
                <div class="kpi2">
                    <span class="kpi-value">${json[0].mortes} :</span>
                    <span class="kpi-label"> <b>Derrotas</b></span>
                </div>
            `;
            });

        } else {
            console.log("Houve um erro ao terminar o quiz!");

            resposta.text().then(texto => {
                console.error(texto);

            });

        }
    }).catch(function (erro) {
        console.log(erro);
    })

}

document.addEventListener("DOMContentLoaded", function() {
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/usuarios/gameVitoria", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idUsuario
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var vitorias = data[0].vitorias;

        fetch("/usuarios/gameMortes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idServer: idUsuario
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var mortes = data[0].mortes;

            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Vitórias', 'Derrotas'],
                    datasets: [{
                        label: 'Resultado do jogo',
                        data: [vitorias, mortes],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        })
        .catch(function(error) {
            console.error('Erro ao obter dados de mortes:', error);
        });
    })
    .catch(function(error) {
        console.error('Erro ao obter dados de vitórias:', error);
    });
});


////////// outras coisas \\\\\\\\\\\\\

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

