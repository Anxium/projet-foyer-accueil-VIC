# Section Application

Vous trouverez dans ce dossier tous les fichiers liés à l'application ainsi que le détail des opérations réalisées sur ce **readme**. 

## Initialisation de l'application React.js

### Prérequis

* [Node.js](https://nodejs.org/en/) pour windows et mac
* [Node.js](https://github.com/nodesource/distributions/blob/master/README.md) pour ubuntu
* [Cmder](http://cmder.net/) Optionnel | Console pour windows
* [Hyper](https://hyper.is/) Optionnel | Console pour ubuntu et mac
* [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) pour débug votre application depuis la console du navigateur

## Installation
Cloner le repo là où vous désirez l'installer
```
git clone git@github.com:Anxium/projet-foyer-accueil-VIC.git
```
Se déplacer à l'intérieur du dossier 'Application'
```
cd projet-foyer-accueil-VIC/Application
```
Installer les dépendances
```
npm i
```

## Variables d'environnement

Pour que l'application fonctionne correctement, il faut insérer ces variables d'environnement dans un fichier .env se trouvant dans le dossier "Application"

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
```

## Lancement

Pour lancer l'application, il faut se trouver dans le dossier "Application" et effectuer cette commande:

```
npm start
```

## Code guidelines

Qu'est ce que "code guidelines"? C'est simplement un ensemble de règles qui permettent aux développeurs d'un même projet de coder de la même façon, avec la même syntaxe, les mêmes indentations, ... 
Cela permet aussi d'avoir une certaine "qualité" dans le code

### Formater le code automatiquement

 Il y a deux façons de formater son code automatiquement dans ce projet:

* A chaque commit, le code sera vérifié et corrigé automatiquement, sans que vous ayez besoin de faire quoi que ce soit.

* A chaque enregistrement dans son éditeur, ce qui actualisera à chaque save. Mais pour cela il faut ajouter:
    
    ```
    {
        "editor.formatOnSave: "true"
    }
    ```
    dans votre configuration de vscode (settings.json).
    

### Formater le code via ligne de commande

Il existe une commande dans ce projet qui permet de formatter tous les fichiers {.js, .jxs}

```
npm run lint
```

## Auteur

* **BeCode** - *A school to address the skills gap in an inclusive way* - [be<\/code>](https://github.com/becodeorg)

Vous pouvez voir la [liste complète des contributeurs](https://github.com/Anxium/projet-foyer-accueil-VIC/graphs/contributors) qui ont participé à ce projet
