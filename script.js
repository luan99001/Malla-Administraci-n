const dependencias = {
  // Ciclo 1 → Ciclo 2
  'comunicacion1': ['comunicacion2'],
  'economia': ['microeconomia'],
  'matematica': ['matematicaemp'],
  // Ciclo 2 → Ciclo 3
  'contabilidad': ['gestcostos'],
  'microeconomia': ['macroeconomia'],
  'administracion': ['disenoorg'],
  'matematicaemp': ['estadisticaap'],
  // Ciclo 3 → Ciclo 4
  'gestcostos': ['contagerencial'],
  'disenoorg': ['talentohumano1'],
  'estadisticaap': ['estadisticadeci'],
  // Ciclo 4 → Ciclo 5
  'marketing': ['investigacionmercados'],
  'talentohumano1': ['talentohumano2'],
  'contagerencial': ['financiera'],
  'estadisticadeci': ['modelodeci'],
  // Ciclo 5 → Ciclo 6
  'metodologia': ['metodoinvestigacion'],
  'operaciones': ['supplychain'],
  'financiera': ['finanzascorporativas'],
  'talentohumano2': ['direccionth'],
  // Ciclo 6 → Ciclo 7
  'investigacionmercados': ['marketingestrategico'],
  'supplychain': ['procesoscalidad'],
  'sociedades': ['publica'],
  'usercentered': ['customerdev'],
  'modelodeci': ['sistemasinfo'],
  // Ciclo 7 → Ciclo 8
  'marketingestrategico': ['planeamiento'],
  'metodoinvestigacion': ['proyectoinvestigacion'],
  'procesoscalidad': ['comercioint'],
  'customerdev': ['productbusiness'],
  'finanzascorporativas': ['evaluacionproyectos'],
  // Ciclo 8 → Ciclo 9
  'planeamiento': ['businesscontroller'],
  'publica': ['businesscontroller'],
  'proyectoinvestigacion': ['tesis1'],
  'comercioint': ['gestionint'],
  'productbusiness': ['innovation'],
  // Ciclo 9 → Ciclo 10
  'tesis1': ['tesis2'],
  'gestionint': ['simulacion'],
  'innovation': ['practicas'],
};

document.querySelectorAll('.curso input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    const parent = e.target.closest('.curso');
    const id = parent.dataset.id;

    if (e.target.checked && dependencias[id]) {
      dependencias[id].forEach(dep => {
        const desbloquear = document.querySelector(`.curso[data-id="${dep}"]`);
        if (desbloquear) {
          desbloquear.classList.remove('bloqueado');
          desbloquear.querySelector('input').disabled = false;
        }
      });
    }
  });
});
