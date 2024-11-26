function iniciarFinanza() {
    alert("Bienvenido a FinanzaVersity: Aprende a gestionar tu dinero de manera inteligente.");
  
    let continuar = true;
    let ahorroPorcentaje = null; // Para almacenar el porcentaje de ahorro
    let tieneDeudas = null; // Para saber si el usuario tiene deudas
    let verResumen = false; // Variable para controlar si el resumen debe mostrarse
  
    while (continuar) {
      const tema = prompt(
        "Selecciona un tema:\n1. Introducción a las Finanzas Personales\n2. Presupuesto y Ahorro\n3. Conceptos Básicos de Inversión\n\nEscribe el número del tema o 'salir' para terminar."
      );
  
      if (tema === "salir" || tema === null) {
        alert("¡Gracias por usar FinanzaVersity! ¡Hasta pronto!");
        continuar = false;
      } else if (tema === "1") {
        alert(
          "Introducción a las Finanzas Personales:\n- Ingresos: Todo el dinero que recibes.\n- Egresos: Todo el dinero que sale de tus bolsillos.\n- Ahorro: Lo que guardas para el futuro.\n- Deuda: Lo que debes."
        );
      } else if (tema === "2") {
        ahorroPorcentaje = prompt("¿Cuánto porcentaje de tus ingresos destinas al ahorro? (0-100)");
        tieneDeudas = confirm("¿Tienes deudas actualmente? (Aceptar = Sí, Cancelar = No)");
  
        // Mostrar un mensaje según las respuestas
        if (ahorroPorcentaje < 20) {
          alert("Tu porcentaje de ahorro es bajo. Implementa la regla del 50/30/20: 50% para necesidades, 30% para gustos y 20% para ahorro e inversión.");
        } else {
          alert("¡Vas por buen camino con tu ahorro! Sigue manteniendo esta disciplina.");
        }
  
        if (tieneDeudas) {
          alert("Prioriza el pago de deudas con mayor tasa de interés y busca consolidar tus compromisos financieros.");
        } else {
          alert("¡Excelente! Estar libre de deudas mejora tu salud financiera.");
        }
  
        // Hacer que se pueda mostrar el resumen solo después de este módulo
        verResumen = true;
      } else if (tema === "3") {
        alert(
          "Consejos de Finanzas:\n- Ahorra al menos el 20% de tus ingresos.\n- Prioriza pagar deudas con altas tasas de interés.\n- Invierte de forma inteligente."
        );
      } else {
        alert("Opción no válida. Por favor, intenta de nuevo.");
      }
  
      if (verResumen) {
        const confirmarResumen = confirm("¿Deseas ver un resumen final de tu salud financiera?");
        if (confirmarResumen) {
          let nivelSalud = "";
          if (ahorroPorcentaje >= 20 && !tieneDeudas) {
            nivelSalud = "Excelente";
          } else if (ahorroPorcentaje < 20 && tieneDeudas) {
            nivelSalud = "Bajo";
          } else {
            nivelSalud = "Moderado";
          }
  
          let recomendacion = "";
          if (nivelSalud === "Excelente") {
            recomendacion = "Sigue con tus buenos hábitos financieros.";
          } else if (nivelSalud === "Moderado") {
            recomendacion = "Aumenta tu porcentaje de ahorro y paga deudas rápidamente.";
          } else {
            recomendacion = "Prioriza mejorar tus hábitos de ahorro y elimina deudas.";
          }
  
          alert(`Resumen Final:\n- Nivel de Salud Financiera: ${nivelSalud}\n- Recomendación: ${recomendacion}\n¡Sigue aprendiendo y mejorando!`);
        }
        verResumen = false; 
      }
    }
  }
  
  iniciarFinanza();
  