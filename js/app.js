// Definición de los arreglos de ingresos y egresos
const egresos = [
    { descripcion: 'Renta', valor: 1000  },
    { descripcion: 'Ropa', valor: 800 }
];

const ingresos = [
    { descripcion: 'Salario', valor: 2000 },
    { descripcion: 'Venta auto', valor: 5000 }
];

// Función para calcular el total de ingresos
const totalIngresos = () => {
    return ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
};

// Función para calcular el total de egresos
const totalEgresos = () => {
    return egresos.reduce((total, egreso) => total + egreso.valor, 0);
};

// Función para cargar el cabecero
const cargarCabecera = () => {
    const presupuestoElement = document.querySelector('.presupuesto_valor');
    const porcentajeEgresoElement = document.querySelector('.presupuesto_egreso--porcentaje');
    const ingresosElement = document.querySelector('.presupuesto_ingreso--valor');
    const egresosElement = document.querySelector('.presupuesto_egreso--valor');

    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();

    presupuestoElement.innerHTML = formatoMoneda(presupuesto);
    porcentajeEgresoElement.innerHTML = formatoPorcentaje(porcentajeEgreso);
    ingresosElement.innerHTML = formatoMoneda(totalIngresos());
    egresosElement.innerHTML = formatoMoneda(totalEgresos());
};

// Función para formatear valores a moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

// Función para formatear valores a porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

// Función para cargar los ingresos dinámicamente
const cargarIngresos = () => {
    let ingresosHTML = "";

    for (const ingreso of ingresos) {
        ingresosHTML += crearElementoHTML(ingreso.descripcion, ingreso.valor, true);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

// Función para cargar los egresos dinámicamente
const cargarEgresos = () => {
    let egresosHTML = "";

    for (const egreso of egresos) {
        egresosHTML += crearElementoHTML(egreso.descripcion, egreso.valor, false);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

// Función para crear elementos HTML de ingresos y egresos
const crearElementoHTML = (descripcion, valor, esIngreso) => {
    const elementoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${esIngreso ? '+' : '-'}${formatoMoneda(valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="${esIngreso ? 'eliminarIngreso' : 'eliminarEgreso'}('${descripcion}')">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return elementoHTML;
};

// Función principal para cargar la aplicación
const cargarApp = () => {
    cargarCabecera();
    cargarIngresos();
    cargarEgresos();
};

// Evento que se ejecuta cuando el documento se carga completamente
document.body.onload = cargarApp;



