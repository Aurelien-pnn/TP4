//Exercice 1

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

//Exercice 2

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

//Exercice 3

function range(min, max, step){
    let tab = [];
    while(min <= max){
        tab.push(min);
        min += step;
    }

    return tab;
}

//Exercice 4

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

//Exercice 5

function flatten2D(array){
    let newArray = [];
    let taille = array.length;
    for(let i = 0; i < taille; i++){
        let size = array[i].length;
        for(let j = 0; j < size; j++){
            newArray += array[i][j];
        }
    }

    return newArray;
}

function flatten2DTwo(array){
    let newArray = [];
    for(let tab of array){
        for(let value of tab){
            newArray += value;
        }
    }

    return newArray;
}

//Exercice 6

function name(tab){
    for(let name of tab){
        console.log(name);
    }
    tab.pop();
    tab.push("Aurélien");
    console.log("newTableau :");
    for(let name of tab){
        console.log(name);
    }
}

//Exercice 7

function multiplicationTable(){
    let tab = [];
    for(let i = 0; i <= 9; i++){
        console.log("Table de multiplication de " + i + " :");
        for(let j = 0; j <= 10; j++){
            tab[j] = j*i;
        }
        printTab(tab);
    }
}

//Fonction auxiliaire

function printTab(tab){
    let string = "";
    for(let value of tab){
        string += value;
        string += " ";
    }
    console.log(string);
}