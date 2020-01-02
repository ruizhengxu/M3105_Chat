# M3105
## Node.js et Javascript

Pour commencer le projet, les outils nécessaires se trouvent sur ce [site](http://telmat.io/work/M3500/session1/).

### Le projet
Le but du projet est de réaliser un tchat en utilisant le plugin **WebSocket** avec **Node.js** et **Javascript**.  
Nous simulerons une communication persistante entre le client et le serveur, pour que deux personnes peuvent se communiquer entre eux en temps réel.

## Implémentation

### Prérequis

- Installer [Webstorm](https://www.jetbrains.com/webstorm/)
- Installer [npm](https://nodejs.org/en/download/)
- Installer les dépendances de WebSocket et express  

    >  `npm install express`  
       `npm install ws`

- Lancer le serveur

    > `node serveur.js`

- Voir si le serveur est lancé

    > `localhost:numeroPort`

- Aller sur la page de connexion

    > Lancez le ficheir login.html

### Conception & UI

- Utilisation de [Bootstrap](http://getbootstrap.com/)

### Pages

- Page Login
    - Qui dialogue avec le serveur Node.js
- Page Chat 
    - Qui affiche les messages qu'on a tapé, dialogue aussi avec le serveur