// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

let moi = {
    nom: 'saw',
    prenom: 'idriss',
    age: 23,
    taille: 1.80
}
console.log(moi.age);


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let deux = {
    nom: 'deux',
    prenom: 'ilias',
    age: 19,
    taille: 1.99
}

let trois = {
    
}


// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la vale

trois.nom = moi.nom
trois.age = deux.age
console.log(trois);

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let quatre = {
    nom: 'doee',
    prenom: 'omzzz',
    sePresenter(){
        console.log(`Bonjour je m'appelle ${quatre.nom} ${quatre.prenom}`);
    }
    
}
quatre.sePresenter()
// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

let cinq= {
    nom: "cinquieme",
    changeAge(){
        let ag = +prompt('quel age?')
        cinq.age = ag
    }
}
cinq.changeAge()
alert(cinq.nom +' '+ cinq.age)











// Kadri 🐳🦍🐦👺 — Aujourd’hui à 09:09
// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.


let François = {
    ingredient : ['huile','tomate','carotte','pain','thon','poirreau'],
    mesAliment(){
        François.ingredient.push('obj1','obj2')
        
    }
}

let Sergio = {
    ingredient : ['huile','tomate','carotte','pain','thon','poirreau','obj1','obj2'] ,
    retraiAliment(){
        Sergio.ingredient.pop()
        Sergio.ingredient.pop()
    } 
}


François.mesAliment()
console.log(François.ingredient);
Sergio.retraiAliment()
console.log(Sergio.ingredient);