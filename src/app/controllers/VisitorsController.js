(function () {
    angular
        .module('app')
        .controller('VisitorsController', ['$interval',
            VisitorsController
        ]);

    function VisitorsController($interval) {
        var vm = this;
        var iterator = 0;
        var globalVisitorsConfig = [
            [{key: 'Blue cars', y: 5264}, { key: 'Red Cars', y: 3872}],
            [{key: 'Blue cars', y: 5364}, { key: 'Red Cars', y: 3842}],
            [{key: 'Blue cars', y: 9364}, { key: 'Red Cars', y: 3842}],
            [{key: 'Blue cars', y: 6364}, { key: 'Red Cars', y: 7842}],
            [{key: 'Blue cars', y: 6764}, { key: 'Red Cars', y: 7042}],
            [{key: 'Blue cars', y: 6164}, { key: 'Red Cars', y: 8042}],
            [{key: 'Blue cars', y: 3164}, { key: 'Red Cars', y: 3042}],
            [{key: 'Blue cars', y: 8164}, { key: 'Red Cars', y: 3042}],
            [{key: 'Blue cars', y: 9164}, { key: 'Red Cars', y: 3042}],
            [{key: 'Blue cars', y: 10164}, { key: 'Red Cars', y: 3042}],
            [{key: 'Blue cars', y: 1164}, { key: 'Red Cars', y: 42}],
            [{key: 'Blue cars', y: 3164}, { key: 'Red Cars', y: 642}],
            [{key: 'Blue cars', y: 2164}, { key: 'Red Cars', y: 7642}],
            [{key: 'Blue cars', y: 9164}, { key: 'Red Cars', y: 7642}],
            [{key: 'Blue cars', y: 90164}, { key: 'Red Cars', y: 7642}],
            [{key: 'Blue cars', y: 164}, { key: 'Red Cars', y: 4642}],
            [{key: 'Blue cars', y: 3164}, { key: 'Red Cars', y: 5642}],
            [{key: 'Blue cars', y: 2164}, { key: 'Red Cars', y: 6642}],
            [{key: 'Blue cars', y: 3164}, { key: 'Red Cars', y: 8642}],
            [{key: 'Blue cars', y: 364}, { key: 'Red Cars', y: 8642}],
            [{key: 'Blue cars', y: 3364}, { key: 'Red Cars', y: 88642}],
            [{key: 'Blue cars', y: 3364}, { key: 'Red Cars', y: 6642}],
            [{key: 'Blue cars', y: 3064}, { key: 'Red Cars', y: 6042}],
            [{key: 'Blue cars', y: 7064}, { key: 'Red Cars', y: 2042}],
            [{key: 'Blue cars', y: 3064}, { key: 'Red Cars', y: 2042}],
            [{key: 'Blue cars', y: 64}, { key: 'Red Cars', y: 2042}],
            [{key: 'Blue cars', y: 864}, { key: 'Red Cars', y: 42}],
            [{key: 'Blue cars', y: 7864}, { key: 'Red Cars', y: 842}],
            [{key: 'Blue cars', y: 1864}, { key: 'Red Cars', y: 6842}],
            [{key: 'Blue cars', y: 10864}, { key: 'Red Cars', y: 842}]
        ];

        // TODO: move data to the service
        vm.visitorsChartData = globalVisitorsConfig[0];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753'],
                showLabels: false,
                showLegend: false,
                title: 'Cars',
                margin: { top: -10 }
            }
        };

        $interval(function () {
            if (iterator >= 29)
                iterator = 0;
            else
                iterator++;
            vm.visitorsChartData = globalVisitorsConfig[iterator];
        },5000);
    }
})();
