
// Object literal for Saloon

let saloon = {
    name: "The Pet Saloon",
    address: {
        street: "Pet Drive",
        number: "55555",
        zip: "12345",
        state: "CA",
        city: "Los Angeles"
    },
    hours: {
        open: "9:00 am",
        close: "10:00 pm"
    },

    services: [
        {
            service: "Training",
        },
        {
            service: "Grooming",
        },
        {
            service: "Daycare",
        }
    ],
    employees:[
        {
            name: "Walley",
            position: "Groomer",
            availability: "2pm to 8pm"
        },
        {
            name: "Tori",
            position: "Trainer",
            availability: "10am to 6pm"
        },
        {
            name: "Tina",
            position: "Groomer",
            availability: "10am to 6pm"
        },
        {
            name: "Nicole",
            position: "Trainer",
            availability: "10am to 6pm"
        },
        {
            name: "Cayden",
            position: "Groomer",
            availability: "10am to 6pm"
        },
        {
            name: "Liam",
            position: "Trainer",
            availability: "10am to 6pm"
        }
    ]
}

function createTable(){
    let tbody = document.getElementById('tbody');
    let th = "<tr><th>Name:</th><th>Position:</th><th>Avialability:</th></tr>";
    tbody.innerHTML = th
    let td;
    for (let i = 0; i < saloon.employees.length; i++) {

        td = "<tr class='employeeRow'><td>" + saloon.employees[i].name +"</td><td>" + saloon.employees[i].position + "</td><td>" + saloon.employees[i].availability + "</td></tr>";
        tbody.innerHTML += td;
    }

    
}
createTable();

function provideServices(){
    
}

