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
        vm.memoryChartData = [ {key: 'Stay', y: 100}, { key: 'Used', y: 0} ];

        vm.chartOptions = {
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
                color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
                showLabels: false,
                showLegend: false,
                tooltips: false,
                title: '100%',
                titleOffset: -10,
                margin: { bottom: -80, left: -20, right: -20 }
            }
        };
        $interval(function () {
            currentBattery--;
            vm.memoryChartData[0].y = currentBattery;
            vm.memoryChartData[1].y = 100-currentBattery;
            vm.chartOptions.chart.title = currentBattery+'%';
        },20000)
    }
})();
