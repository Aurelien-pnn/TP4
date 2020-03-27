function sum(tab){
    let somme = 0;
    let taille = tab.length;
    for(let i = 0; i < taille; i++){
        somme += tab[i];
    }

    return somme;
}

function sum2(tab){
    let somme = 0;
    for(let value of tab){
        somme += value;
    }

    return somme;
}

function longestWord(tab){
    let size = 0;
    let indice;
    for(let word of tab){
        if(word.length > size){
            size = word.length;
            indice = tab.indexOf(word)
        }
    }

    return tab[indice];
}

function range(min, max, step){
    let tab = [];
    while(min <= max){
        tab.push(min);
        min += step;
    }

    return tab;
}

function nbOccurences(wordList, word){
    let tab = wordList.split(" ");
    let occurence = 0;
    for(let value of tab){
        if(value == word){
            occurence++;
        }
    }

    return occurence;
}