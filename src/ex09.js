// Wiring minimal
window.addEventListener('load', () => {
    document.querySelector('#idActionBuild').addEventListener('click', actionBuild);
});

// ---------------------------------------------------------------------------
// Affichage JSON dans la page (empile les résultats pour visualiser plusieurs essais)
function afficherObjet(resultat) {
    const container = document.getElementById('output');
    const txt = JSON.stringify(resultat, null, 2);
    container.textContent = container.textContent !== '' ? container.textContent + '\n' + txt : txt;
}

// ---------------------------------------------------------------------------
// Modèle PC (objet final)
class PC {
    constructor(cpu, ramGB, ssdGB, hddGB, gpu, screens, os) {
        this.cpu = cpu || '';
        this.ramGB = Number.isFinite(ramGB) ? ramGB : 0;
        this.ssdGB = Number.isFinite(ssdGB) ? ssdGB : 0;
        this.hddGB = Number.isFinite(hddGB) ? hddGB : 0;
        this.gpu = gpu || '';
        this.screens = Number.isFinite(screens) ? screens : 1;
        this.os = os || '';
    }
    toString() {
        return `PC[cpu=${this.cpu}, ram=${this.ramGB}Go, ssd=${this.ssdGB}Go, hdd=${this.hddGB}Go, gpu=${this.gpu}, ecrans=${this.screens}, os=${this.os}]`;
    }
}

// ---------------------------------------------------------------------------
// Builder pour PC (style proche de ton exemple)
class PCBuilder {
    // -----------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------
}

// ---------------------------------------------------------------------------
// Action bouton : lit le formulaire, construit via le Builder, affiche le résultat
function actionBuild() {
    // Lecture du formulaire.
    const cpu = document.getElementById('idCpu').value;
    const ram = document.getElementById('idRam').value;
    const ssd = document.getElementById('idSsd').value;
    const hdd = document.getElementById('idHdd').value;
    const gpu = document.getElementById('idGpu').value;
    const screens = document.getElementById('idScreens').value;
    const os = document.getElementById('idOs').value;

    // Construction fluide (chaînage)
    const pcConstruit = null; // À compléter avec le Builder

    // Affichage du résultat.
    afficherObjet(pcConstruit);
}
