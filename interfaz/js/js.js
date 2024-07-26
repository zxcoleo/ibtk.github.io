// Obtener el elemento <p> por su id
var elementoDireccion = document.getElementById("direccion-2");

// Verificar si se encontró el elemento
if (elementoDireccion) {
    // Cambiar el contenido del elemento
    elementoDireccion.textContent = "12pdGzHKaZa9a5DBYTwzU9x3oAG2rwjMYGqBRLkhVcCT";
} else {
    console.error("No se encontró el elemento con id 'direccion-2'");
}


// Cambiar dirección en direccion-1
var direccion1 = document.getElementById("direccion-1");
if (direccion1) {
    direccion1.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-1'");
}

// Cambiar dirección en direccion-4
var direccion4 = document.getElementById("direccion-4");
if (direccion4) {
    direccion4.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-4'");
}

// Cambiar dirección en direccion-5
var direccion5 = document.getElementById("direccion-5");
if (direccion5) {
    direccion5.textContent = "0x19bf023F7bD5e2297140e650dd1FD643A2318f53";
} else {
    console.error("No se encontró el elemento con id 'direccion-5'");
}

// Cambiar dirección en direccion-3
var direccion3 = document.getElementById("direccion-3");
if (direccion3) {
    direccion3.textContent = "bc1q3nskx64spvyvwtg6xnel95gndzlp0rnzl50zrk";
} else {
    console.error("No se encontró el elemento con id 'direccion-3'");
}




// Obtener el elemento span por su id
var spanElement = document.getElementById("connectedAddress");

// Verificar si el elemento existe para evitar errores
if (spanElement) {
    // Modificar el contenido del span
    spanElement.textContent = "🤑 Win a share of 8000 USDT - Buy tokens today! Don't miss out! 🔥";
}

function handleButtonClick(buttonId, link) {
    var button = document.getElementById(buttonId);
    button.addEventListener('click', function() {
        // Cambiar la ubicación de la ventana actual al enlace especificado
        window.location.href = link;
    });
}

// Asignar acciones a cada botón con sus respectivos enlaces
handleButtonClick('buynft1', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft2', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft3', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft4', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft5', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft6', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft7', 'https://cwallet.com/t/S3BY486W');
handleButtonClick('buynft8', 'https://cwallet.com/t/S3BY486W');