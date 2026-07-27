const cards = document.querySelectorAll(".card-musica");

cards.forEach(card => {

    const musica = card.querySelector(".musica");
    const playBtn = card.querySelector(".play-btn");
    const progresso = card.querySelector(".progresso");

    playBtn.addEventListener("click", () => {

        // pausa todas as outras músicas
        document.querySelectorAll(".musica").forEach(audio => {
            if(audio !== musica){
                audio.pause();
                audio.currentTime = 0;
            }
        });

        // volta todos os botões para ▶
        document.querySelectorAll(".play-btn").forEach(botao => {
            botao.textContent = "▶";
        });

        if(musica.paused){
            musica.play();
            playBtn.textContent = "❚❚";
        }else{
            musica.pause();
            playBtn.textContent = "▶";
        }

    });

    musica.addEventListener("loadedmetadata", () => {
        progresso.max = musica.duration;
    });

    musica.addEventListener("timeupdate", () => {
        progresso.value = musica.currentTime;
    });

    progresso.addEventListener("input", () => {
        musica.currentTime = progresso.value;
    });

});