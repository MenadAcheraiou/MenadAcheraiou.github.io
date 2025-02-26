
document.addEventListener("DOMContentLoaded", () => {
    let i, j, k, a, b, c, x, y, z;

    function changeBackgroundColor() {
        const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

        // Initialisation des valeurs RGB en fonction du mode
        const initColors = () => {
            const base = isDarkMode ? 0 : 100;
            const range = isDarkMode ? 100 : 155;
            i = Math.floor(Math.random() * range) + base;
            j = Math.floor(Math.random() * range) + base;
            k = Math.floor(Math.random() * range) + base;
            a = Math.floor(Math.random() * range) + base;
            b = Math.floor(Math.random() * range) + base;
            c = Math.floor(Math.random() * range) + base;
            x = Math.floor(Math.random() * range) + base;
            y = Math.floor(Math.random() * range) + base;
            z = Math.floor(Math.random() * range) + base;
        };

        // Initialisation des variables RGB
        initColors();

        let stateI = true, stateJ = true, stateK = true;
        let stateA = true, stateB = true, stateC = true;
        let stateX = true, stateY = true, stateZ = true;

        setInterval(() => {
            let max = isDarkMode ? 100 : 255;
            let min = isDarkMode ? 0 : 100;

        
            // Mise à jour dynamique de l'arrière-plan
            document.body.style.background = `linear-gradient(90deg, rgb(${i}, ${j}, ${k}), rgb(${a}, ${b}, ${c}) 60%, rgb(${x}, ${y}, ${z}))`;

            // Mise à jour des canaux RGB
            stateI = updateColor(i, stateI, min, max, (v) => i = v);
            stateJ = updateColor(j, stateJ, min, max, (v) => j = v);
            stateK = updateColor(k, stateK, min, max, (v) => k = v);
            stateA = updateColor(a, stateA, min, max, (v) => a = v);
            stateB = updateColor(b, stateB, min, max, (v) => b = v);
            stateC = updateColor(c, stateC, min, max, (v) => c = v);
            stateX = updateColor(x, stateX, min, max, (v) => x = v);
            stateY = updateColor(y, stateY, min, max, (v) => y = v);
            stateZ = updateColor(z, stateZ, min, max, (v) => z = v);

            // Modification aléatoire
            if (Math.random() < 0.15) {
                a = Math.min(max, a + 5);
                x = Math.min(max, x + 4);
                z = Math.min(max, z + 3);
                c = Math.max(min, c - 3);
                b = Math.max(min, b - 4);
                i = Math.min(max, i + 2);
                k = Math.max(min, k - 3);
            }
        }, 50);
    }

    // Fonction utilitaire pour mettre à jour les couleurs
    function updateColor(value, state, min, max, setValue) {
        if (state) value++;
        else value--;
        if (value >= max || value <= min) state = !state;
        setValue(value);
        return state;
    }

    function darkMode() {
        const toggle = document.getElementById('dark-mode-toggle');

        const applyDarkMode = (enabled) => {
            document.body.classList.toggle('dark-mode', enabled);

            // Ajustement des couleurs de l'arrière-plan
            const delta = enabled ? -155 : 155;
            i = clamp(i + delta);
            j = clamp(j + delta);
            k = clamp(k + delta);
            a = clamp(a + delta);
            b = clamp(b + delta);
            c = clamp(c + delta);
            x = clamp(x + delta);
            y = clamp(y + delta);
            z = clamp(z + delta);

            localStorage.setItem('dark-mode', enabled ? 'enabled' : 'disabled');
        };

        // Appliquer le mode sombre si activé
        applyDarkMode(localStorage.getItem('dark-mode') === 'enabled');

        toggle.addEventListener('click', () => {
            const isEnabled = !document.body.classList.contains('dark-mode');
            applyDarkMode(isEnabled);
        });
    }

    // Fonction pour s'assurer que les valeurs restent entre 0 et 255
    const clamp = (value) => Math.max(0, Math.min(255, value));

    // Initialisation
    darkMode();
    changeBackgroundColor();
});
// Gestion des soumissions de formulaire


const targetName = "ACHERAIOU Menad";
const displayElement = document.getElementById("nameDisplay");
const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let currentName = ""; // Ce qui est affiché progressivement
let currentIndex = 0;

function findNextLetter() {
    if (currentIndex < targetName.length) {
        const targetLetter = targetName[currentIndex];
        let currentLetterIndex = 0;

        const interval = setInterval(() => {
            const guessedLetter = alphabet[currentLetterIndex];
            displayElement.textContent = currentName + guessedLetter;

            if (guessedLetter === targetLetter) {
                clearInterval(interval);
                currentName += targetLetter; // Fixe la bonne lettre
                currentIndex++;
                findNextLetter(); // Passe à la lettre suivante
            } else {
                currentLetterIndex++;
            }
        }, 50); // Vitesse des itérations
    }
}

// Lancement
findNextLetter();

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
  
    hamburger.addEventListener('click',() => {
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
            navbar.classList.add('hide');
        }else{
        navbar.classList.add('show');
        if(navbar.classList.contains('hide')){
                navbar.classList.remove("hide");
            }
        }
  
      // Gestion de l'état du bouton hamburger
      hamburger.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  });



    function openModal(id) {
        document.getElementById(id).style.display = 'flex';
    }
    
    function closeModal(id) {
        document.getElementById(id).style.display = 'none';
    }
    
    // Fermer le modal si on clique à l'extérieur
    window.onclick = function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
    
