window.onload = loadMedalGeralData;

async function loadMedalsData() {
    try {
        // Fazendo a requisição para a API
        const response = await fetch('https://apis.codante.io/olympic-games/countries');

        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
        }

        // Convertendo a resposta para JSON
        const data = await response.json();

        // Seleciona o corpo da tabela onde os dados serão exibidos
        const tbody = document.getElementById('medals-body');
        if (!tbody) {
            throw new Error('Elemento com ID "medals-body" não encontrado.');
        }
        tbody.innerHTML = ''; // Limpa o conteúdo existente

        // Iterando sobre os resultados e criando as linhas da tabela
        data.data.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.name}</td>
                <td>${result.gold_medals}</td>
                <td>${result.silver_medals}</td>
                <td>${result.bronze_medals}</td>
                <td>${result.total_medals}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao carregar dados:', error);
    }
    document.getElementById("bt1").innerText = "País";
    document.getElementById("bt2").innerText = "Ouro";
    document.getElementById("bt3").innerText = "Prata";
    document.getElementById("bt4").innerText = "Bronze";
    document.getElementById("bt5").innerText = "Total";
    document.getElementById("txt-medal").innerText = "Quadro Geral das Medalhas das Olimpíadas 2024";
    
}

async function loadMedalMascData() {
    try {
        // Fazendo a requisição para o arquivo JSON
        const response = await fetch('../json/medal_masc.json'); // Substitua pela URL correta
        
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
        }

        // Convertendo a resposta para JSON
        const data = await response.json();

        // Seleciona o corpo da tabela onde os dados serão exibidos
        const tbody = document.getElementById('medals-body');
        if (!tbody) {
            throw new Error('Elemento com ID "medals-body" não encontrado.');
        }
        tbody.innerHTML = ''; // Limpa o conteúdo existente

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Embaralhando a lista de atletas
        shuffle(data.atletas);

        data.atletas.sort((a, b) => b.medalhas - a.medalhas);

        // Iterando sobre os resultados e criando as linhas da tabela
        data.atletas.forEach(atleta => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${atleta.pais}</td>
                <td>${atleta.nome}</td>
                <td>${atleta.idade}</td>
                <td>${atleta.medalhas}</td>
                <td>${atleta.categoria}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao carregar dados:', error);
    }

    // Atualizando textos dos botões e título
    document.getElementById("bt1").innerText = "País";
    document.getElementById("bt2").innerText = "Nome";
    document.getElementById("bt3").innerText = "Idade";
    document.getElementById("bt4").innerText = "Medalhas";
    document.getElementById("bt5").innerText = "Categoria"; // Ajuste conforme necessário
    document.getElementById("txt-medal").innerText = "Medalhas da Categoria Masculina do Skate Olímpico";
}

async function loadMedalFemData() {
    try {
        // Fazendo a requisição para o arquivo JSON
        const response = await fetch('../json/medal_Fem.json'); // Substitua pela URL correta
        
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
        }

        // Convertendo a resposta para JSON
        const data = await response.json();

        // Seleciona o corpo da tabela onde os dados serão exibidos
        const tbody = document.getElementById('medals-body');
        if (!tbody) {
            throw new Error('Elemento com ID "medals-body" não encontrado.');
        }
        tbody.innerHTML = ''; // Limpa o conteúdo existente

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Embaralhando a lista de atletas
        shuffle(data.atletas);

        // Garantindo que "Rayssa Leal" fique em primeiro
        const rayssaIndex = data.atletas.findIndex(atleta => atleta.nome === "Rayssa Leal");
        if (rayssaIndex !== -1) {
            const rayssa = data.atletas.splice(rayssaIndex, 1)[0]; // Remove Rayssa da lista
            data.atletas.unshift(rayssa); // Adiciona Rayssa ao início da lista
        }

        data.atletas.sort((a, b) => b.medalhas - a.medalhas);

        // Iterando sobre os resultados e criando as linhas da tabela
        data.atletas.forEach(atleta => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${atleta.pais}</td>
                <td>${atleta.nome}</td>
                <td>${atleta.idade}</td>
                <td>${atleta.medalhas}</td>
                <td>${atleta.categoria}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao carregar dados:', error);
    }

    // Atualizando textos dos botões e título
    document.getElementById("bt1").innerText = "País";
    document.getElementById("bt2").innerText = "Nome";
    document.getElementById("bt3").innerText = "Idade";
    document.getElementById("bt4").innerText = "Medalhas";
    document.getElementById("bt5").innerText = "Categoria"; // Ajuste conforme necessário
    document.getElementById("txt-medal").innerText = "Medalhas da Categoria Feminina do Skate Olímpico";
}

async function loadMedalGeralData() {
    try {
        // Fazendo a requisição para o arquivo JSON
        const response = await fetch('../json/medal_geral.json'); // Substitua pela URL correta
        
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON: ' + response.statusText);
        }

        // Convertendo a resposta para JSON
        const data = await response.json();

        // Seleciona o corpo da tabela onde os dados serão exibidos
        const tbody = document.getElementById('medals-body');
        if (!tbody) {
            throw new Error('Elemento com ID "medals-body" não encontrado.');
        }
        tbody.innerHTML = ''; // Limpa o conteúdo existente

        // Função para embaralhar os atletas
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Embaralhando a lista de atletas
        shuffle(data.atletas);

        data.atletas.sort((a, b) => b.medalhas - a.medalhas);

        // Garantindo que "Rayssa Leal" fique em primeiro
        const rayssaIndex = data.atletas.findIndex(atleta => atleta.nome === "Rayssa Leal");
        if (rayssaIndex !== -1) {
            const rayssa = data.atletas.splice(rayssaIndex, 1)[0]; // Remove Rayssa da lista
            data.atletas.unshift(rayssa); // Adiciona Rayssa ao início da lista
        }

        // Limitando a 50 atletas
        const limitedAtletas = data.atletas.slice(0, 50);

        // Iterando sobre os resultados e criando as linhas da tabela
        limitedAtletas.forEach(atleta => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${atleta.pais}</td>
                <td>${atleta.nome}</td>
                <td>${atleta.idade}</td>
                <td>${atleta.medalhas}</td>
                <td>${atleta.categoria}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // Captura e exibe erros no console
        console.error('Erro ao carregar dados:', error);
    }

    // Atualizando textos dos botões e título
    document.getElementById("bt1").innerText = "País";
    document.getElementById("bt2").innerText = "Nome";
    document.getElementById("bt3").innerText = "Idade";
    document.getElementById("bt4").innerText = "Medalhas";
    document.getElementById("bt5").innerText = "Categoria"; // Ajuste conforme necessário
    document.getElementById("txt-medal").innerText = "Quadro Geral das Medalhas do Skate Olímpico";
}
