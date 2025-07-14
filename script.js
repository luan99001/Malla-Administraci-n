// Define relaciones de requisitos
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

// Escucha clicks en los checkboxes
document.querySelectorAll('.curso input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      const cursoId = this.closest('.curso').dataset.id;
      desbloquearCursosDependientes(cursoId);
    }
  });
});

// Función que desbloquea cursos cuyo requisito es el curso aprobado
function desbloquearCursosDependientes(cursoAprobado) {
  for (const [curso, prereqs] of Object.entries(requisitos)) {
    if (prereqs.includes(cursoAprobado)) {
      // Verifica si todos los requisitos de este curso están aprobados
      const todosAprobados = prereqs.every(prereq => {
        const prereqCheckbox = document.querySelector(`.curso[data-id="${prereq}"] input[type="checkbox"]`);
        return prereqCheckbox && prereqCheckbox.checked;
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
