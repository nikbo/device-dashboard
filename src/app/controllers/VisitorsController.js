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
            [{key: 'Connection Established', y: 5264}, { key: 'Connection lost', y: 3872}],
            [{key: 'Connection Established', y: 5364}, { key: 'Connection lost', y: 3842}],
            [{key: 'Connection Established', y: 9364}, { key: 'Connection lost', y: 3842}],
            [{key: 'Connection Established', y: 6364}, { key: 'Connection lost', y: 7842}],
            [{key: 'Connection Established', y: 6764}, { key: 'Connection lost', y: 7042}],
            [{key: 'Connection Established', y: 6164}, { key: 'Connection lost', y: 8042}],
            [{key: 'Connection Established', y: 3164}, { key: 'Connection lost', y: 3042}],
            [{key: 'Connection Established', y: 8164}, { key: 'Connection lost', y: 3042}],
            [{key: 'Connection Established', y: 9164}, { key: 'Connection lost', y: 3042}],
            [{key: 'Connection Established', y: 10164}, { key: 'Connection lost', y: 3042}],
            [{key: 'Connection Established', y: 1164}, { key: 'Connection lost', y: 42}],
            [{key: 'Connection Established', y: 3164}, { key: 'Connection lost', y: 642}],
            [{key: 'Connection Established', y: 2164}, { key: 'Connection lost', y: 7642}],
            [{key: 'Connection Established', y: 9164}, { key: 'Connection lost', y: 7642}],
            [{key: 'Connection Established', y: 90164}, { key: 'Connection lost', y: 7642}],
            [{key: 'Connection Established', y: 164}, { key: 'Connection lost', y: 4642}],
            [{key: 'Connection Established', y: 3164}, { key: 'Connection lost', y: 5642}],
            [{key: 'Connection Established', y: 2164}, { key: 'Connection lost', y: 6642}],
            [{key: 'Connection Established', y: 3164}, { key: 'Connection lost', y: 8642}],
            [{key: 'Connection Established', y: 364}, { key: 'Connection lost', y: 8642}],
            [{key: 'Connection Established', y: 3364}, { key: 'Connection lost', y: 88642}],
            [{key: 'Connection Established', y: 3364}, { key: 'Connection lost', y: 6642}],
            [{key: 'Connection Established', y: 3064}, { key: 'Connection lost', y: 6042}],
            [{key: 'Connection Established', y: 7064}, { key: 'Connection lost', y: 2042}],
            [{key: 'Connection Established', y: 3064}, { key: 'Connection lost', y: 2042}],
            [{key: 'Connection Established', y: 64}, { key: 'Connection lost', y: 2042}],
            [{key: 'Connection Established', y: 864}, { key: 'Connection lost', y: 42}],
            [{key: 'Connection Established', y: 7864}, { key: 'Connection lost', y: 842}],
            [{key: 'Connection Established', y: 1864}, { key: 'Connection lost', y: 6842}],
            [{key: 'Connection Established', y: 10864}, { key: 'Connection lost', y: 842}]
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
                title: 'Drones',
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
