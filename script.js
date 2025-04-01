// Navegação suave entre seções
document.querySelectorAll('.menu-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('section').forEach(section => section.classList.remove('active-section'));
        document.getElementById(sectionId).classList.add('active-section');
        window.scrollTo({
            top: document.getElementById(sectionId).offsetTop - document.querySelector('.game-hud').offsetHeight,
            behavior: 'smooth'
        });
        // Atualizar ícones ativos
        document.querySelectorAll('.menu-icon').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animação de digitação no texto inicial
const typingText = document.querySelector('.typing-text');
const textContent = typingText.textContent.trim();
typingText.textContent = '';
let index = 0;

function typeWriter() {
    if (index < textContent.length) {
        typingText.textContent += textContent.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Velocidade da digitação
    }
}
typeWriter();

// Exibição e seleção de personagens
const characters = [
    {
        name: "Guerreiro",
        description: "Um mestre do combate corpo a corpo, equipado com uma espada poderosa e uma armadura resistente.",
        image: "guerreiro.png",
        skills: ["Golpe de Espada", "Defesa Avançada"]
    },
    {
        name: "Mago",
        description: "Um manipulador das artes arcanas, capaz de lançar feitiços devastadores contra seus inimigos.",
        image: "mago.png",
        skills: ["Bola de Fogo", "Escudo Arcano"]
    },
    {
        name: "Arqueiro",
        description: "Um especialista em ataques à distância, usando seu arco para atingir alvos com precisão mortal.",
        image: "arqueiro.png",
        skills: ["Tiro Preciso", "Flecha Envenenada"]
    },
    {
        name: "Assassino",
        description: "Um mestre da furtividade e ataques rápidos, eliminando inimigos antes que percebam sua presença.",
        image: "assassino.png",
        skills: ["Ataque Furtivo", "Lâmina Sombria"]
    }
];

// Função para exibir todos os personagens com nomes visíveis
function displayCharacters() {
    const container = document.getElementById("characters-container");
    container.innerHTML = "";
    container.className = "character-selection"; // Adiciona classe específica
}

function selectCharacter(character) {
    const container = document.getElementById("characters-container");
    container.innerHTML = "";
    container.className = "character-details"; // Muda para outra classe
}

  
    characters.forEach(character => {
      const characterCard = document.createElement("div");
      characterCard.className = "character-card";
  
      // Adiciona a imagem do personagem
      const img = document.createElement("img");
      img.src = character.image;
      img.alt = character.name;
  
      // Adiciona o nome do personagem (sempre visível)
      const name = document.createElement("h3");
      name.innerText = character.name;
  
      // Adiciona o botão de seleção
      const selectButton = document.createElement("button");
      selectButton.innerText = "Selecionar";
      selectButton.onclick = () => selectCharacter(character);
  
      // Adiciona tudo ao card
      characterCard.appendChild(img);
      characterCard.appendChild(name);
      characterCard.appendChild(selectButton);
      container.appendChild(characterCard);
    });
  }
  
  // Função para selecionar um personagem e revelar suas características
function selectCharacter(character) {
    const container = document.getElementById("characters-container");
    container.innerHTML = ""; // Limpa o container
  
    const selectedCard = document.createElement("div");
    selectedCard.className = "selected-character";
  
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
  
    const characterInfo = document.createElement("div");
    characterInfo.className = "character-info";
  
    const name = document.createElement("h3");
    name.innerText = character.name;
  
    const description = document.createElement("p");
    description.innerText = character.description;
  
    const skillsTitle = document.createElement("h4");
    skillsTitle.innerText = "Habilidades:";
  
    // Cria um container flexível para as habilidades e o botão
    const skillsAndButtonContainer = document.createElement("div");
    skillsAndButtonContainer.style.display = "flex";
    skillsAndButtonContainer.style.alignItems = "center";
    skillsAndButtonContainer.style.justifyContent = "center";
  
    const skillsList = document.createElement("ul");
    skillsList.className = "skills-list";
    character.skills.forEach(skill => {
      const li = document.createElement("li");
      li.innerText = skill;
      skillsList.appendChild(li);
    });
  
    // Cria o botão de reset
    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-button";
    resetBtn.innerText = "Selecionar Outro";
    resetBtn.onclick = resetSelection;
    resetBtn.style.fontSize = "0.7rem";
    resetBtn.style.padding = "4px 8px";
    resetBtn.style.width = "auto"; // Impede que fique muito largo
    resetBtn.style.position = "absolute"; // Posicionamento absoluto
    resetBtn.style.top = "20px"; // Coloca mais para cima
    resetBtn.style.right = "20px"; // Alinha à direita
  
    // Adiciona as habilidades e o botão ao container flexível
    skillsAndButtonContainer.appendChild(skillsList);
    skillsAndButtonContainer.appendChild(resetBtn);
  
    // Adiciona tudo ao card de informações
    characterInfo.appendChild(name);
    characterInfo.appendChild(description);
    characterInfo.appendChild(skillsTitle);
    characterInfo.appendChild(skillsAndButtonContainer);
  
    // Adiciona a imagem e as informações ao card selecionado
    selectedCard.appendChild(img);
    selectedCard.appendChild(characterInfo);
  
    // Adiciona o card ao container
    container.appendChild(selectedCard);
  
    // Esconde o botão de reset original
    const originalResetButton = document.getElementById("reset-button");
    if (originalResetButton && originalResetButton !== resetBtn) {
      originalResetButton.style.display = "none";
    }
  }  