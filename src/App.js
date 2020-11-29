import Cabecera from "./cabecera";
import Main from "./main";
import Footer from "./footer";
import "./App.css";


let muelle = {
    nombre: 'Puerto deportivo',
    barcos: [
        {
            nombre: 'bar quito',
            eslora: "5m",
            tripulantes: 2
        },
        {
            nombre: 'imperioso',
            eslora: "12m",
            tripulantes: 3
        }
    ],
    contacto: {
        telefono: '94463827'
    }
};


function App() {
    
    const barcos = muelle.barcos.map((barco) => {

        return (
            <Main
                key={barco.nombre}
                nombre={barco.nombre}
                eslora={barco.eslora}
                tripulantes={barco.tripulantes}
            />
        )

    });

return (
    <>
        <Cabecera
             nombre={muelle.nombre}
        />


        {barcos}

        <Footer telefono={muelle.contacto.telefono} />
        </>
);

 
}

export default App;
