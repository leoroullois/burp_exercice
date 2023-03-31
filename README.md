# Exercice (très simple) sur Burp Suite

## Docker

Cela fonctionne avec docker-compose, il n'y a pas besoin de cloner le repository github.
Les images sont stockées sur docker hub.

Voici le `docker-compose.yml` :

```yaml
version: "3.8"
services:
  burp_exercice:
    image: leoroullois/burp_exercice:latest
    container_name: burp_exercice
    ports:
      - 3000:3000
```

Que l'on peut télécharger avec la commande suivante :

```bash
wget https://raw.githubusercontent.com/leoroullois/burp_exercice/main/docker-compose.yaml
```

Une fois le fichier télécharger, il suffit d'éxécuter :

```bash
docker-compose up --build
```
Site web disponible sur [http://localhost:3000](http://localhost:3000).

## Autre

Si vous voulez lancer le projet sans Docker, vous devez avoir nodejs et npm d'installer.

```bash
git clone https://github.com/leoroullois/burp_exercice.git
cd burp_exercice
npm install
npm run dev
```

Site web disponible sur [http://localhost:3000](http://localhost:3000).
