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
        console.log("");
    }
}

//Exercice 8

function chiffrement(text, clef){
    let taille = text.length;
    let decimal;
    let newText = ""
    for(let i = 0; i < taille; i++){
        if(text[i] != " "){
            decimal = charToASCII(text[i]);
            decimal += clef;
            decimal = decimal - 97;
            decimal = decimal % 26;
            decimal += 97;
            newText += ASCIItoChar(decimal);
        }
        else{
            newText += " ";
        }
    }

    return newText;
}

function chiffrement(text, clef){
    let taille = text.length;
    let decimal;
    let newText = "";
    for(let i = 0; i < taille; i++){
        if(text[i] != " "){
            decimal = text.charCodeAt(i);
            decimal += clef;
            if(text[i] == text[i].toUpperCase()){
                if(decimal > 90){
                    decimal -= 26;
                }
                if(decimal < 65){
                    decimal += 26;
                }
            }
            else{
                if(decimal > 122){
                    decimal -= 26;
                }
                else if(decimal < 97){
                    decimal += 26;
                }
            }
            newText += String.fromCharCode(decimal);
        }
        else{
            newText += " ";
        }
    }

    return newText;
}


function dechiffrement(text, clef){
    let newClef = -clef;
    let newText = chiffrement(text, newClef);

    return newText;
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

function charToASCII(char){
    if(char == "a"){
        return 97;
    }
    else if(char == "b"){
        return 98;
    }
    else if(char == "c"){
        return 99;
    }
    else if(char == "d"){
        return 100;
    }  
    else if(char == "e"){
        return 101;
    }
    else if(char == "f"){
        return 102;
    }
    else if(char == "g"){
        return 103;
    }
    else if(char == "h"){
        return 104;
    }
    else if(char == "i"){
        return 105;
    }
    else if(char == "j"){
        return 106;
    }
    else if(char == "k"){
        return 107;
    }
    else if(char == "l"){
        return 108;
    }
    else if(char == "m"){
        return 109;
    }
    else if(char == "n"){
        return 110;
    }
    else if(char == "o"){
        return 111;
    }
    else if(char == "p"){
        return 112;
    }
    else if(char == "q"){
        return 113;
    }
    else if(char == "r"){
        return 114;
    }
    else if(char == "s"){
        return 115;
    }
    else if(char == "t"){
        return 116;
    }
    else if(char == "u"){
        return 117;
    }
    else if(char == "v"){
        return 118;
    }
    else if(char == "w"){
        return 119;
    }
    else if(char == "x"){
        return 120;
    }
    else if(char == "y"){
        return 121;
    }
    else if(char == "z"){
        return 122;
    }
}

function ASCIItoChar(n){
    if(n == 97){
        return "a";
    }
    else if(n == 98){
        return "b";
    }
    else if(n == 99){
        return "c";
    }
    else if(n == 100){
        return "d";
    }
    else if(n == 101){
        return "e";
    }
    else if(n == 102){
        return "f";
    }
    else if(n == 103){
        return "g";
    }
    else if(n == 104){
        return "h";
    }
    else if(n == 105){
        return "i";
    }
    else if(n == 106){
        return "j";
    }
    else if(n == 107){
        return "k";
    }
    else if(n == 108){
        return "l";
    }
    else if(n == 109){
        return "m";
    }
    else if(n == 110){
        return "n";
    }
    else if(n == 111){
        return "o";
    }
    else if(n == 112){
        return "p";
    }
    else if(n == 113){
        return "q";
    }
    else if(n == 114){
        return "r";
    }
    else if(n == 115){
        return "s";
    }
    else if(n == 116){
        return "t";
    }
    else if(n == 117){
        return "u";
    }
    else if(n == 118){
        return "v";
    }
    else if(n == 119){
        return "w";
    }
    else if(n == 120){
        return "x";
    }
    else if(n == 121){
        return "y";
    }
    else if(n == 122){
        return "z";
    }
}