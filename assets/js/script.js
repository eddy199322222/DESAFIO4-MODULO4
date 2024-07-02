const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/images/1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una zona exclusiva con todas las comodidades.',
        ubicacion: '123 Luxury Lane, Beverly Hills, CA 90210',
        habitaciones: 3,
        costo: 540000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/images/2.jpg',
        descripcion: 'Un apartamento acogedor en la montaña con hermosas vistas.',
        ubicacion: '789 Mountain Road, Aspen, CO 81611',
        habitaciones: 2,
        costo: 320000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/images/3.jpg',
        descripcion: 'Penthouse de lujo con una impresionante terraza panorámica.',
        ubicacion: '567 Skyline Avenue, New York, NY 10001',
        habitaciones: 4,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo con gran terreno',
        src: './assets/images/4.jpg',
        descripcion: 'Casa de campo con un gran terreno y muchas posibilidades.',
        ubicacion: '456 Country Road, Nashville, TN 37201',
        habitaciones: 3,
        costo: 450000,
        smoke: true,
        pets: false
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/images/5.jpg',
        descripcion: 'Apartamento moderno en el centro de la ciudad, cerca de todos los servicios.',
        ubicacion: '101 City Center, Los Angeles, CA 90001',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/images/6.jpg',
        descripcion: 'Un apartamento luminoso con vista al mar, ideal para relajarse.',
        ubicacion: '202 Seaside Town, Santa Monica, CA 90401',
        habitaciones: 3,
        costo: 3000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/images/7.jpg',
        descripcion: 'Condominio moderno ubicado en una zona residencial tranquila.',
        ubicacion: '303 Suburbia Street, San Diego, CA 92101',
        habitaciones: 2,
        costo: 2500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa acogedora en las afueras',
        src: './assets/images/8.jpg',
        descripcion: 'Casa acogedora ubicada en las afueras de la ciudad, con un gran jardín.',
        ubicacion: '404 Countryside Road, Austin, TX 78701',
        habitaciones: 4,
        costo: 3500,
        smoke: true,
        pets: true
    }
];
function renderPropiedades(propiedades, containerId) {
    const container = document.getElementById(containerId);
    propiedades.forEach(propiedad => {
        const propiedadDiv = document.createElement('div');
        propiedadDiv.className = 'propiedad';
        propiedadDiv.innerHTML = `
            <img src="${propiedad.src}" alt="${propiedad.nombre}">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
            <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
            <p><strong>Costo:</strong> $${propiedad.costo}</p>
            <p>${propiedad.smoke ? '🚬 Permitido fumar' : '🚭 No se permite fumar'}</p>
            <p>${propiedad.pets ? '🐾 Mascotas permitidas' : '🚫 No se permiten mascotas'}</p>
        `;
        container.appendChild(propiedadDiv);
    });
}

function init() {
    if (document.getElementById('venta-container')) {
        renderPropiedades(propiedades_venta.slice(0, 3), 'venta-container');
    }
    if (document.getElementById('alquiler-container')) {
        renderPropiedades(propiedades_alquiler.slice(0, 3), 'alquiler-container');
    }
    if (document.title.includes('Venta')) {
        renderPropiedades(propiedades_venta, 'venta-container');
    }
    if (document.title.includes('Alquiler')) {
        renderPropiedades(propiedades_alquiler, 'alquiler-container');
    }
}

document.addEventListener('DOMContentLoaded', init);
