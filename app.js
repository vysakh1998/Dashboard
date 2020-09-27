var chart = new CanvasJS.Chart("chartContainer1", {


    animationEnabled: true,

    data: [{
        type: "doughnut",
        innerRadius: "70%",

        indexLabel: "{label}: #percent%",

        dataPoints: [{
                label: "New User",
                y: 99616
            },
            {
                label: "Unknown User",
                y: 1000
            },
            {
                label: "Known User",
                y: 99530
            }


        ]
    }, ]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer2", {


    animationEnabled: true,

    data: [{
        type: "doughnut",
        innerRadius: "70%",

        indexLabel: "{label}: #percent%",

        dataPoints: [{
                label: "Web",
                y: 50
            },
            {
                label: "Mobile",
                y: 85
            },



        ]
    }, ]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer3", {


    animationEnabled: true,

    data: [{
        type: "doughnut",
        innerRadius: "70%",

        indexLabel: "{label}: #percent%",

        dataPoints: [{
                label: "App",
                y: 356
            },
            {
                label: "Email",
                y: 3000
            },
            {
                label: "SMS",
                y: 8907
            },
            {
                label: "Web Push",
                y: 50
            }


        ]
    }, ]
});
chart.render();




var chart = new CanvasJS.Chart("chartContainer4", {


    animationEnabled: true,

    data: [{

        type: "column",

        dataPoints: [{
                label: "App Push",
                y: 0
            },
            {
                label: "SMS",
                y: 15
            },
            {
                label: "Web Push",
                y: 25
            },
            {
                label: "Email",
                y: 70
            },
            {
                label: "Web Pop-Up",
                y: 28
            }
        ]
    }, ]
});
chart.render();


var chart = new CanvasJS.Chart("chartContainer5", {


    animationEnabled: true,

    data: [{
        type: "pie",
        innerRadius: "70%",

        indexLabel: "{label}: #percent%",

        dataPoints: [{
                label: "Users",
                y: 10
            },
            {
                label: "Campaign",
                y: 40
            },
            {
                label: "Conversion",
                y: 20
            }


        ]
    }, ]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer6", {


    animationEnabled: true,

    data: [{
        type: "pie",
        innerRadius: "70%",

        indexLabel: "{label}: #percent%",

        dataPoints: [{
                label: "Users",
                y: 10
            },
            {
                label: "Campaign",
                y: 40
            },
            {
                label: "Conversion",
                y: 20
            },
            {
                label: "Revenue",
                y: 20
            }


        ]
    }, ]
});
chart.render();