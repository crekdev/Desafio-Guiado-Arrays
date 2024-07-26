//Arreglos de pacientes
let radiologiaPacientes = []
let traumatologiaPacientes = []
let dentalPacientes = []
const button = document.getElementsByTagName("button")


function generarPacientes() {
  //Arreglos con info dada
  let horaAtencion = [
    { hora: "11:00", origen: "Dental" },
    { hora: "11:30", origen: "Dental" },
    { hora: "15:00", origen: "Dental" },
    { hora: "15:00", origen: "Dental" },
    { hora: "16:00", origen: "Dental" },
    { hora: "8:00", origen: "Traumatologia" },
    { hora: "10:00", origen: "Traumatologia" },
    { hora: "10:30", origen: "Traumatologia" },
    { hora: "11:00", origen: "Traumatologia" },
    { hora: "11:30", origen: "Traumatologia" },
    { hora: "12:00", origen: "Traumatologia" },
    { hora: "12:30", origen: "Traumatologia" },
    { hora: "8:30", origen: "Radiologia" },
    { hora: "11:00", origen: "Radiologia" },
    { hora: "11:30", origen: "Radiologia" },
    { hora: "13:00", origen: "Radiologia" },
    { hora: "13:30", origen: "Radiologia" },
    { hora: "14:00", origen: "Radiologia" }
  ]

  let medicoEspecialista = [
    "IGNACIO SCHULZ",
    "FEDERICO SUBERCASEAUX",
    "FERNANDO WURTHZ",
    "ANA MARIA GODOY",
    "PATRICIA SUAZO",
    "MARIA PAZ ALTUZARRA",
    "RAUL ARAYA",
    "MARIA ARRIAGADA",
    "ALEJANDRO BADILLA",
    "CECILIA BUDNIK",
    "ARTURO CAVAGNARO",
    "ANDRES KANACRI",
    "ANDREA ZUÑIGA",
    "MARIA PIA ZAÑARTU",
    "SCARLETT WITTING",
    "FRANCISCO VON TEUBER",
    "EDUARDO VIÑUELA",
    "RAQUEL VILLASECA"
  ]

  let nombrePaciente = [
    "Francisca Rojas",
    "Pamela Estrada",
    "Armando Luna",
    "Manuel Godoy",
    "Ramon Ulloa",
    "PAULA SANCHEZ",
    "ANGÉLICA NAVAS",
    "ANA KLAPP",
    "FELIPE MARDONES",
    "DIEGO MARRE",
    "CECILIA MENDEZ",
    "MARCIAL SUAZO",
    "MARCELA RETAMAL",
    "ANGEL MUÑOZ",
    "MARIO KAST",
    "KARIN FERNANDEZ",
    "HUGO SANCHEZ",
    "ANA SEPULVEDA"
  ]

  let rutPaciente = [
    "9878782-1",
    "15345241-3",
    "16445345-9",
    "17666419-0",
    "14989389-K",
    "15554774-5",
    "15444147-9",
    "17879423-9",
    "1547423-6",
    "16554741-K",
    "9747535-8",
    "11254785-5",
    "11123425-6",
    "9878789-2",
    "7998789-5",
    "18887662-K",
    "17665461-4",
    "14441281-0"
  ]

  let prevision = [
    "Fonasa",
    "Isapre",
    "Isapre",
    "Fonasa",
    "Fonasa",
    "FONASA",
    "ISAPRE",
    "ISAPRE",
    "ISAPRE",
    "FONASA",
    "ISAPRE",
    "ISAPRE",
    "ISAPRE",
    "ISAPRE",
    "FONASA",
    "FONASA",
    "FONASA",
    "ISAPRE"
  ]

  for (let i = 0; i < horaAtencion.length; i++) {
    let paciente = {}
    // Asignamos valor a propiedades del paciente dental
    paciente.horaAtencion = horaAtencion[i].hora
    paciente.medicoEspecialista = medicoEspecialista[i]
    paciente.nombrePaciente = nombrePaciente[i]
    paciente.rutPaciente = rutPaciente[i]
    paciente.prevision = prevision[i]

    if (horaAtencion[i].origen == "Dental") {
      dentalPacientes.push(paciente) // agregamos al listado de pacientes dentales, los pacientes
    } else if (horaAtencion[i].origen == "Traumatologia") {
      traumatologiaPacientes.push(paciente) // agregamos al listado de pacientes traumatologia, los pacientes
    } else {
      radiologiaPacientes.push(paciente) // agregamos al listado de pacientes radiologia, los pacientes
    }

  }
}
// Carga los pacientes
generarPacientes()

//Escucha los botones y llama a pintarFilas según el botón clickeado
for (let j = 0; j < button.length; j++) {
  button[j].addEventListener("click", () => {

    if (button[j].id === "btn-pacientesDentales") {
      pintarFilas(dentalPacientes)
    } else if (button[j].id === "btn-pacientesTraumatologia") {
      pintarFilas(traumatologiaPacientes)
    } else {
      pintarFilas(radiologiaPacientes)
    }
  })
}

// "pintar las filas"
function pintarFilas(array) {
  // Acumulador para filas de tabla HTML
  let filasTabla = ''

  for (let paciente of array) { // "Para cada auto, del arreglo de autos"
    filasTabla += `
    <tr>
      <td>${paciente.horaAtencion}</td>
      <td>${paciente.medicoEspecialista}</td>
      <td>${paciente.nombrePaciente}</td>
      <td>${paciente.rutPaciente}</td>
      <td>${paciente.prevision}</td>
    </tr> `
  }


  let resultado;
  let resultadoAtencion;

  switch (array) {
    case dentalPacientes:
      console.log(dentalPacientes)
      resultado = document.getElementById("resultadoDental")
      resultado.innerHTML = filasTabla
      resultadoAtencion = document.getElementById("resultadoAtencionDental")
      resultadoAtencion.innerText = `Primera atención: ${dentalPacientes[0].nombrePaciente} - ${dentalPacientes[0].prevision} | Última atención: ${dentalPacientes[dentalPacientes.length - 1].nombrePaciente} - ${dentalPacientes[dentalPacientes.length - 1].prevision}`
      break;
    case traumatologiaPacientes:
      console.log(traumatologiaPacientes)
      resultado = document.getElementById("resultadoTraumatologia")
      resultado.innerHTML = filasTabla
      resultadoAtencion = document.getElementById("resultadoAtencionTrauma")
      resultadoAtencion.innerText = `Primera atención: ${traumatologiaPacientes[0].nombrePaciente} - ${traumatologiaPacientes[0].prevision} | Última atención: ${traumatologiaPacientes[traumatologiaPacientes.length - 1].nombrePaciente} - ${traumatologiaPacientes[traumatologiaPacientes.length - 1].prevision}`
      break;
    case radiologiaPacientes:
      console.log(radiologiaPacientes)
      resultado = document.getElementById("resultadoRadiologia")
      resultado.innerHTML = filasTabla
      resultadoAtencion = document.getElementById("resultadoAtencionRadio")
      resultadoAtencion.innerText = `Primera atención: ${radiologiaPacientes[0].nombrePaciente} - ${radiologiaPacientes[0].prevision} | Última atención: ${radiologiaPacientes[radiologiaPacientes.length - 1].nombrePaciente} - ${radiologiaPacientes[radiologiaPacientes.length - 1].prevision}`
      break;
    default:
      break;
  }
}

//Author Cristobal Sanhueza