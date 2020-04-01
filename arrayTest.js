// Test Exercice 1

function sumTest(){
    let tab = [6, 8, 43, 9];
    let result = sum(tab);
    let result2 = sum2(tab);
    console.log("result :" + result);
    console.log("result2 :" + result2);
}

// Test Exercice 2

function longestWordTest(){
    let fruit = ["banane", "kiwi", "ananas", "clementine"];
    let meilleurFruit = longestWord(fruit);
    console.log(meilleurFruit);
}

// Test Exercice 3

function rangeTest(){
    let tab = range(30, 78, 2);
    console.log(tab);
}

// Test Exercice 4

function nbOccurencesTest(){
    let text = "foo bar foo gue foo for"
    console.log(nbOccurences(text, foo));
}

// Test Exercice 5

function flatten2DTest(){
    let matrix = [[1, 6, 8], [3, 9, 4], [2, 8, 4]];
    console.log(flatten2D(matrix));
    console.log(flatten2DTwo(matrix));
}

// Test Exercice 6

function nameTest(){
    let nameTab = ["Roger", "Robert", "Fred"];
    name(nameTab);
}

// Test Exercice 7

function multiplicationTableTest(){
    multiplicationTable();
}

// Test Exercice 8

function chiffrementCesarTest(){
    let newText = chiffrementCesar("attaquez asterix", 3);
    console.log(newText);
}

function chiffrementCesar2Test(){
    let newText = chiffrementCesar2("attaquez asterix", 3);
    console.log(newText);
}

function dechiffrementCesar2Test(){
    let text = chiffrementCesar2("attaquez asterix", 3);
    let decript = dechiffrementCesar2(text, 3);
    console.log(decript);
}

function dechiffrementCesarTest(){
    let newText = chiffrementCesar("attaquez asterix", 3);
    let decript = dechiffrementCesar(newText, 3);
    console.log(decript);
}

// Test Exercice 9

function chiffrementViginereTest(){
    newText = chiffrementViginere("ATTAQUEZ ASTERIX!", 314);
    console.log(newText);
}

function dechiffrementViginereTest(){
    text = chiffrementViginere("Attaquez Astérix", 314);
    console.log(text);
    decript = dechiffrementViginere(text, 314);
    console.log(decript);
}