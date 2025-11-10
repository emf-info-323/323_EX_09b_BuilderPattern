<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# 😅 Exercice 09 - Builder Pattern

## 🎯 Objectifs

-   Comprendre et appliquer le **design pattern Builder**.
-   Construire un objet complexe (ici un PC) de manière fluide et structurée.

---

## 🧩 Consigne

Vous devez **implémenter uniquement la classe `PCBuilder`**.  
Le reste du code (classe `PC`, programme principal, tests, etc.) est déjà fourni.

L’objectif est de permettre la création d’un objet `PC` via une approche fluide du type :

```js
const myPC = new PCBuilder().setCPU('Intel i7').setGPU('RTX 4070').setRAM(32).setSSD(512).setHDD(2000).setOS('Ubuntu 24.04').build();
```

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
