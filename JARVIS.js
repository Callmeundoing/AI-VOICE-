const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('P');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes('Jarvis are you awake')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'For you sir, Always.'
            texts.appendChild(p);
        }

        
        if(text.includes('you there')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'At your service sir.'



            texts.appendChild(p);
        }


        if(text.includes('Jarvis open Roblox')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'Would you like this on your local drive, Or your external drive?'
            texts.appendChild(p);
        }


        if(text.includes('local Drive')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'Working on a secret project are we?'
            texts.appendChild(p);
            window.open('https://www.roblox.com/home')
        }


        if(text.includes('Jarvis open YouTube')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'As you wish.'
            texts.appendChild(p);
            window.open('https://www.youtube.com/')
        }


        if(text.includes('Jarvis open Amazon')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'As you Wish.'
            texts.appendChild(p);
            window.open('https://www.amazon.com/ref=nav_logo')
        }


        if(text.includes('Jarvis open my email')){
            p = document.createElement('p');
            p.classList.add('replay')
            p.innerText = 'As you wish.'
            texts.appendChild(p);
            window.open('https://mail.google.com/mail/u/0/#inbox')
        }

        p = document.createElement('p');
    }

    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})


recognition.start();