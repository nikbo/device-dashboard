(function () {
    angular
        .module('app')
        .controller('WarningsController', ['$interval',
            WarningsController
        ]);

    function WarningsController($interval) {
        var vm = this;
        var currentPoint = 1;

        // TODO: move data to the service
        vm.warningsChartData = [{values: [{series: 0, x: 0, y: 30}], color: '#00a4e4', area: true}];

        vm.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 210,
                margin: {top: -10, left: -20, right: -20},
                x: function (d) {
                    return d.x
                },
                y: function (d) {
                    return d.y
                },
                showLabels: false,
                showLegend: false,
                title: 'Height of drone',
                showYAxis: false,
                showXAxis: false,
                tooltip: {
                    contentGenerator: function (d) {
                        return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>'
                    }
                }
            }
        };
        $interval(function () {
            vm.warningsChartData[0].values.push({series:0, x: currentPoint, y: Math.floor(Math.random() * (70 - 50)) + 50});
            currentPoint++;
        },5000);
    }
})();
