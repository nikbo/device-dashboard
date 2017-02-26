(function(){

    angular
        .module('app')
        .controller('DronesListController', [
            DronesListController
        ]);

    function DronesListController() {
        var vm = this;
        this.drones = [
            {
                id: 1,
                name: 'Airbn456',
                status: true,
                battery: 98
            },
            {
                id: 2,
                name: 'Drone562',
                status: false,
                battery: 91
            },
            {
                id: 3,
                name: 'Droned562',
                status: true,
                battery: 60
            },
            {
                id: 4,
                name: 'FlyOBJ',
                status: true,
                battery: 99
            },
            {
                id: 5,
                name: 'Drone #2',
                status: true,
                battery: 88
            },
            {
                id: 6,
                name: 'FlyME',
                status: false,
                battery: 89
            },
            {
                id: 7,
                name: 'BlackObject',
                status: true,
                battery: 91
            },
            {
                id: 8,
                name: 'Undefined',
                status: false,
                battery: 97
            },
            {
                id: 9,
                name: 'DSAf',
                status: true,
                battery: 78
            },
            {
                id: 10,
                name: 'Object',
                status: true,
                battery: 86
            },
            {
                id: 11,
                name: 'Some Drone',
                status: true,
                battery: 92
            },
            {
                id: 12,
                name: 'Drone',
                status: true,
                battery: 60
            },
            {
                id: 13,
                name: 'NLO',
                status: false,
                battery: 74
            },
            {
                id: 14,
                name: 'Valid',
                status: true,
                battery: 88
            },
            {
                id: 15,
                name: 'Awesome #3',
                status: true,
                battery: 76
            },
            {
                id: 16,
                name: '#1',
                status: true,
                battery: 96
            },
            {
                id: 17,
                name: 'Come with me',
                status: true,
                battery: 100
            },
            {
                id: 18,
                name: 'SuperMan',
                status: true,
                battery: 99
            },
            {
                id: 19,
                name: 'Drone #12',
                status: true,
                battery: 93
            },
            {
                id: 20,
                name: 'NDA',
                status: true,
                battery: 70
            },
            {
                id: 21,
                name: 'Last',
                status: true,
                battery: 78
            }
        ];
}

})();