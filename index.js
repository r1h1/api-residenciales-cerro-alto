//CONSTANTES DE SERVIDOR
const app = require('./src/app.js');

//SE INICIALIZA EL SERVIDOR EN EL PUERTO ESTABLECIDO
app.listen(app.get('port'), () => {
    console.log("Servidor Escuchando Puerto:", app.get('port'));
});