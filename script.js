var listaFilmes = ["https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1585842808.jpg",
"https://upload.wikimedia.org/wikipedia/pt/3/33/Chamber_of_Secrets.jpg", 
"https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg"]
//o [] é usado para listas (arrays)

listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/7/7b/Harry_Potter_C%C3%A1lice_Fogo_2004.jpg");
listaFilmes.push("https://br.web.img3.acsta.net/medias/nmedia/18/90/67/58/20107766.jpg");
listaFilmes.push("https://br.web.img3.acsta.net/medias/nmedia/18/92/91/18/20224756.jpg");
listaFilmes.push("https://ingresso-a.akamaihd.net/img/cinema/cartaz/7767-cartaz.jpg");
listaFilmes.push("https://ingresso-a.akamaihd.net/img/cinema/cartaz/7791-cartaz.jpg");
//.push é usado para inserir um elemento em uma lista

//var indice é o valor inicial da lista(sempre 0)
//em seguida a condição para a lista, onde continuará imprimindo algo se a lista for maior que o indice 
// .length determina o tamanho da lista, onde sempre que adicionar um novo item será impresso
//por último é a expressão final, onde sempre depois de um elemento será adicionado mais um
for (var indice = 0; indice < listaFilmes.length ; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">")
//.write é utilizado para escrever/colocar algo na tela
//
}