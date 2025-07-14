// Mapa de requisitos: clave = curso base, valor = cursos desbloqueados
const dependencias = {
  'comunicacion1': ['comunicacion2'],
  'economia': ['microeconomia'],
  'matematica': ['matematicaemp'],
  'contabilidad': ['gestcostos'],
  'microeconomia': ['macroeconomia'],
  'administracion': ['disenoorg'],
  'matematicaemp': ['estadisticaap', 'financiera'],
  'gestcostos': ['contagerencial'],
  'disenoorg': ['talentohumano1'],
  'estadisticaap': ['estadisticadeci'],
  'contagerencial': ['financiera'],
  'marketing': ['investigacionmercados'],
  'talentohumano1': ['talentohumano2'],
  'estadisticadeci': ['modelodeci'],
  'metodologia': ['metodoinvestigacion'],
  'operaciones': ['supplychain'],
  'financiera': ['finanzascorporativas'],
  'talentohumano2': ['direccionth'],
  'investigacionmercados': ['marketingestrategico'],
  'supplychain': ['procesoscalidad'],
  'sociedades': ['publica'],
  'usercentered': ['customerdev'],
  'modelodeci': ['sistemasinfo'],
  'marketingestrategico': ['planeamiento'],
  'metodoinvestigacion': ['proyectoinvestigacion'],
  'procesoscalidad': ['comercioint'],
  'customerdev': ['productbusiness'],
  'finanzascorporativas': ['evaluacionproyectos'],
  'publica': ['businesscontroller'],
  'planeamiento': ['businesscontroller'],
  'proyectoinvestigacion': ['tesis1'],
  'comercioint': ['gestionint'],
  'productbusiness': ['innovation'],
  'gestionint': ['simulacion'],
  'innovation': ['practicas'],
  'tesis1': ['tesis2']
};

// Escucha todos los checks
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
