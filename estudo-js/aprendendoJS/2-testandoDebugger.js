const cidades = ["Sao Paulo", "Rio de Janeiro", "Recife", "Curitiba"];
const destino = "Recife";

cidades.push("Salvador");

let contador = 0;

while (contador < cidades.length) {
    if (cidades[contador++] == destino) {
        console.log(`Destino ${destino} esncontrado\nTenha uma otima viagem!`)
        break;
    }
}