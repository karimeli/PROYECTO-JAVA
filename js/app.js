const egresos = {
    Renta: 4000,
    Ropa: 800
};

const ingresos = {
    Salario: 20000,
    'Venta auto': 50000
};

const totalIngresos = () => {
    let totalIngreso = 0;
    for (const key in ingresos) {
        totalIngreso += ingresos[key];
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (const key in egresos) {
        totalEgreso += egresos[key];
    }
    return totalEgreso;
};

const cargarCabecera = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log('Presupuesto:', formatoMoneda(presupuesto));
    console.log('Porcentaje de Egreso:', formatoPorcentaje(porcentajeEgreso));
    console.log('Total Ingresos:', formatoMoneda(totalIngresos()));
    console.log('Total Egresos:', formatoMoneda(totalEgresos()));
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

cargarCabecera();
