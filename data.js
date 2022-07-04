/* Algún dia usare el asincrono */

// const jsontest = fetch('./sites.json')
// .then(response =>{ return response.json()})
// .then(data => console.log(data))
// .catch(error => console.log(error)); 
// console.log(jsontest);
const jsontest = {
    "type": "FeatureCollection",
    "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.403421, -3.678291]

            },
            "properties": {
                "Name": "Kebab Omar \n",
                "Calle": " Calle de Juan de Urbieta, 2, 28007 Madrid\n",
                "calidad": "five",
                "descripcion": "Situado en el Pacífico (un barrio cercano a Atocha), es el que considero uno de mis lugares favoritos en cuanto a calidad/precio,con un buen trato, tiene muy buena calidad. Cuentan con el pan bien crujiente, con respecto a las dos salsas (roja y yogurt) cuentan con un buen sabor, la salsa roja es no picante. El kebab es muy económico contando que el Menú kebab sale por 5.50€",
                "notes": "",
                "image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qLFIjFWlzi_tYPmxijHmDQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=128.29865&pitch=0&thumbfov=100",
                "icon": "fiveStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.345198, -3.520722]

            },
            "properties": {
                "Name": "Ali kebab \n",
                "Calle": "C/ Luis Mateo Díez, 1, 28521 Rivas-Vaciamadrid, Madrid, España\n",
                "calidad": "five",
                "descripcion": "Aunque pilla algo lejos, tiene una gran calidad/precio, con un pan bien crujiente, el sabor de ambas salsas estan muy buenas (salsa roja no picante) y económico. Menú kebab por 5.50€",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipNUNqfvnXKd13C0vgnDa0nUNZnhCDyx_0DueDD1=w408-h306-k-no",
                "icon": "fiveStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.400366,-3.651179]

            },
            "properties": {
                "Name": "Al aqsa \n",
                "Calle": "C. de Ramón Pérez de Áyala, 82, 28038 Madrid\n",
                "calidad": "five",
                "descripcion": "Entra directamente en el top, buen sabor con un buen pan bien crujiente. Lo mejor de todo la cantidad que te ponen por solo 7€ el menú, estamos hablando de 500Gr de Kebab que sales bien contento de allí. El local está bien,tiene buena ventilación y el trato personal es muy cercano y agradable ",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipOO-WTBdTEYjunQyqQQkoV0on0DojDzxuMBMbum=s762-k-no",
                "icon": "fiveStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.387618, -3.64124]

            },
            "properties": {
                "Name": "Ateshgah\n",
                "Calle": "Av. de la Albufera, 266, 28018 Madrid\n",
                "calidad": "four",
                "descripcion": "En comparación es bastante majo de precio, depende del día te lo pueden dar con un pan crujiente, el sabor de la carne y la salsa esta muy bien. Menú kebab por 6.50€",
                "notes": "",
                "icon": "fourStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.40934, -3.693189]

            },
            "properties": {
                "Name": "Jalo \n",
                "Calle": "C. de Atocha, 116, 28012 Madrid\n",
                "calidad": "four",
                "descripcion": "De los más conocidos por el centro, tiene una gran variedad de platos, pan normalito pero el sabor de la carne y la salsa no está mal.",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipN0TdAF84cv6wNdTF8bK37KDiWYjp7XXDbbGpa-=w408-h338-k-no",
                "icon": "fourStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.432956, -3.717391]

            },
            "properties": {
                "Name": "Kebab house \n",
                "Calle": "C. de Meléndez Valdés, 67, 28015 Madrid\n",
                "calidad": "four",
                "descripcion": "Cierra prontisimo, si consigues uno verás que el sabor de la carne esta muy muy bien, ideal para pedir con un durum",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipM7OMQhemzRpKLf31266xAyQZj8jnRL0qIj77RT=w203-h154-k-no",
                "icon": "fourStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.574298, -4.004451]

            },
            "properties": {
                "Name": "Kebabish Turco \n",
                "Calle": "C. de los Alamillos, 28260 Galapagar, Madrid\n",
                "calidad": "four",
                "descripcion": "un kebab que recuerdo que la carne tenía un toque picante, pan normalito, patatas normales",
                "notes": "",
                "image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=bM2mwfyLz6G3raLqYxuFbQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=95.98317&pitch=0&thumbfov=100",
                "icon": "fourStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.394271, -3.661116]

            },
            "properties": {
                "Name": "kebab sr bangla\n",
                "Calle": "Av. de la Albufera, 97, 28038 Madrid\n",
                "calidad": "three",
                "descripcion": "De las opciones más baratas que puedes encontrar, es un kebab normalito en el que no destacarías gran cosa",
                "notes": "",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.406442, -3.676364]

            },
            "properties": {
                "Name": "Kebab madrid \n",
                "Calle": " C. de Cavanilles, 17, 28007\n",
                "calidad": "two-one",
                "descripcion": "Pan normalito, no destacaría apenas el sabor de la carne, apenas te lo dan con algo de salsa",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipOOFaQwgc7TDMHamDJb-oRhi7QlDLOucdkhYUsN=w408-h306-k-no",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.398939, -3.661979]

            },
            "properties": {
                "Name": "Kebab Hut \n",
                "Calle": "C. del Puerto Canfranc, 41, 28038 Madrid, España\n",
                "calidad": "two-one",
                "descripcion": "Pan normal,la carne con algo de sabor, kebab con poca salsa y las patatas con demasiada, lo malo es que estaban crudas.",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipMpectw_9AAhPOQURbb_yTZefgY6dXJOEw1NIL7=w408-h306-k-no",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.403399, -3.60869]

            },
            "properties": {
                "Name": "Kebabish Vicálvaro \n",
                "Calle": "C. Lago Sanabria, 2, 28032 Madrid\n",
                "calidad": "two-one",
                "descripcion": "Regulero, nada destacable, pan blando y carne que no llama la atención",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipPa5VSD2rj7gNRO1Bwwno7yJaboLe3TY_a-QrnO=w408-h306-k-no",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.38862, -3.699651]

            },
            "properties": {
                "Name": "Kebab y Pollo a la Broaster \n",
                "Calle": "C. de Antonio López, 137, 28026 Madrid\n",
                "calidad": "two-one",
                "descripcion": "Kebab que tenía una muy buena calidad pero con el tiempo acabó bajando estrepitosamente",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipO5uR7fVOW5wfMsBsmvB8yzfIqd8gOOjd6CEpkk=w203-h152-k-no",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.436529, -3.638907]

            },
            "properties": {
                "Name": "Universo Kebab - El Turco - Ciudad Lineal \n",
                "Calle": "Tr.ª de Jose Arcones Gil, 11, 28017 Madrid\n",
                "calidad": "two-one",
                "descripcion": "Kebab normalito, apenas ponen cantidad de carne",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipODQXjLJrIEjmql-u6Wtt7mLO0qylGQdh6q6brm=w408-h305-k-no",
                "icon": "threeStars"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [40.388589, -3.703953]

            },
            "properties": {
                "Name": "Kebab Mirasierra \n",
                "Calle": "C. Mirasierra, 35, 28026 Madrid\n",
                "calidad": "three",
                "descripcion": "Sitio ideal con terraza, la salsa yogurt no está mal, las patatas estan mejor que otros sitios de 3 estrellas marcados, si vas a matadero, pasate por aquí",
                "notes": "",
                "image": "https://lh5.googleusercontent.com/p/AF1QipN1fHhIZv6g6VfzYjR6w0QsEDsOdbbyZgg35ZOL=w203-h360-k-no",
                "icon": "threeStars"
            }
        }
    ]
};