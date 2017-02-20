(function () {
    angular
        .module('app')
        .controller('MemoryController', ['$interval',
            MemoryController
        ]);

    function MemoryController($interval) {
        var vm = this;
        var iterator = 1;
        var currentBattery = 100;

        // TODO: move data to the service
        vm.memoryChartData = [
            [ {key: 'Stay', y: 100}, { key: 'Used', y: 0} ],
            [ {key: 'Stay', y: 97}, { key: 'Used', y: 3} ],
            [ {key: 'Stay', y: 94}, { key: 'Used', y: 6} ],
            [ {key: 'Stay', y: 99}, { key: 'Used', y: 1} ],
            [ {key: 'Stay', y: 98}, { key: 'Used', y: 2} ],
            [ {key: 'Stay', y: 79}, { key: 'Used', y: 21} ],
            [ {key: 'Stay', y: 89}, { key: 'Used', y: 11} ],
            [ {key: 'Stay', y: 93}, { key: 'Used', y: 7} ],
            [ {key: 'Stay', y: 87}, { key: 'Used', y: 13} ],
            [ {key: 'Stay', y: 95}, { key: 'Used', y: 5} ],
            [ {key: 'Stay', y: 84}, { key: 'Used', y: 6} ],
            [ {key: 'Stay', y: 89}, { key: 'Used', y: 11} ],
            [ {key: 'Stay', y: 99}, { key: 'Used', y: 1} ],
            [ {key: 'Stay', y: 100}, { key: 'Used', y: 0} ],
            [ {key: 'Stay', y: 91}, { key: 'Used', y: 9} ],
            [ {key: 'Stay', y: 97}, { key: 'Used', y: 3} ],
            [ {key: 'Stay', y: 88}, { key: 'Used', y: 12} ],
            [ {key: 'Stay', y: 93}, { key: 'Used', y: 7} ],
            [ {key: 'Stay', y: 85}, { key: 'Used', y: 15} ],
            [ {key: 'Stay', y: 84}, { key: 'Used', y: 16} ],
            [ {key: 'Stay', y: 88}, { key: 'Used', y: 12} ]
        ];


        var chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                pie: {
                    startAngle: function (d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function (d) { return d.endAngle/2 -Math.PI/2 }
                },
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#00a4e4', 'rgb(191, 191, 191)'],
                showLabels: false,
                showLegend: false,
                tooltips: false,
                title: '%',
                titleOffset: -10,
                margin: { bottom: -80, left: -20, right: -20 }
            }
        };

        vm.chartOptions = [];
        for (var i = 0; i < vm.memoryChartData.length; i++) {
            vm.chartOptions[i] = chartOptions;
        }
        $interval(function () {
            currentBattery--;
            for (var i = 0; i < vm.memoryChartData.length; i++) {
                vm.memoryChartData[i][0].y--;
                vm.memoryChartData[i][1].y = 100 - vm.memoryChartData[i][0].y;
            }
        },20000)
    }
})();
