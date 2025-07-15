const requisitos = {
  comunicacion2: ["comunicacion1"],
  microeconomia: ["economia"],
  matematicaemp: ["matematica"],
  gestcostos: ["contabilidad"],
  macroeconomia: ["microeconomia"],
  disenoorg: ["administracion"],
  estadisticaap: ["matematicaemp"],
  contagerencial: ["gestcostos"],
  talentohumano1: ["disenoorg"],
  estadisticadeci: ["estadisticaap"],
  investigacionmercados: ["marketing"],
  talentohumano2: ["talentohumano1"],
  financiera: ["matematicaemp", "contagerencial"],
  modelodeci: ["estadisticadeci"],
  metodoinvestigacion: ["metodologia"],
  supplychain: ["operaciones"],
  finanzascorporativas: ["financiera"],
  direccionth: ["talentohumano2"],
  marketingestrategico: ["investigacionmercados"],
  procesoscalidad: ["supplychain"],
  publica: ["sociedades"],
  customerdev: ["usercentered"],
  sistemasinfo: ["modelodeci"],
  planeamiento: ["marketingestrategico"],
  proyectoinvestigacion: ["metodoinvestigacion"],
  comercioint: ["procesoscalidad"],
  productbusiness: ["customerdev"],
  evaluacionproyectos: ["finanzascorporativas"],
  businesscontroller: ["publica", "planeamiento"],
  tesis1: ["proyectoinvestigacion"],
  gestionint: ["comercioint"],
  innovation: ["productbusiness"],
  tesis2: ["tesis1"],
  simulacion: ["gestionint"],
  practicas: ["innovation"]
};

// Aplica listener a cada checkbox
document.querySelectorAll('.curso input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    const cursoDiv = this.closest('.curso');
    const cursoId = cursoDiv.dataset.id;

    if (this.checked) {
      cursoDiv.classList.add('completado');
    } else {
      cursoDiv.classList.remove('completado');
    }

    saveProgress();
    desbloquearCursosDependientes(cursoId);
  });
});

// Desbloquea cursos dependientes si todos los requisitos están aprobados
function desbloquearCursosDependientes(cursoAprobado) {
  for (const [curso, prereqs] of Object.entries(requisitos)) {
    if (prereqs.includes(cursoAprobado)) {
      const todosAprobados = prereqs.every(prereq => {
        const checkbox = document.querySelector(`.curso[data-id="${prereq}"] input[type="checkbox"]`);
        return checkbox && checkbox.checked;
      });

      if (todosAprobados) {
        const cursoDiv = document.querySelector(`.curso[data-id="${curso}"]`);
        cursoDiv.classList.remove('bloqueado');
        const input = cursoDiv.querySelector('input[type="checkbox"]');
        input.disabled = false;
      }
    }
  }
}

// Guarda en localStorage
function saveProgress() {
  const progreso = {};
  document.querySelectorAll('.curso').forEach(curso => {
    const id = curso.dataset.id;
    const checked = curso.querySelector('input[type="checkbox"]').checked;
    progreso[id] = checked;
  });
  localStorage.setItem('mallaProgreso', JSON.stringify(progreso));
}

// Carga desde localStorage
function loadProgress() {
  const progreso = JSON.parse(localStorage.getItem('mallaProgreso')) || {};
  for (const [id, checked] of Object.entries(progreso)) {
    const cursoDiv = document.querySelector(`.curso[data-id="${id}"]`);
    if (cursoDiv) {
      const input = cursoDiv.querySelector('input[type="checkbox"]`);
      input.checked = checked;
      if (checked) {
        cursoDiv.classList.add('completado');
      }
    }
  }

  // Desbloquea todos dependientes en cadena
  for (const id of Object.keys(progreso)) {
    if (progreso[id]) {
      desbloquearCursosDependientes(id);
    }
  }
}

loadProgress();
