(function () {

    angular
        .module('app')
        .controller('MainController', [
            '$scope', 'navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast',
            MainController
        ]);

    function MainController($scope, navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast) {
        var vm = this;
        $scope.options = {scrollwheel: false};
        $scope.map = {
            center: {latitude: 53.917638, longitude: 27.595057},
            zoom: 17,
            bounds: {
                northeast: {
                    latitude: 53.917938,
                    longitude: 27.595957
                },
                southwest: {
                    latitude: 53.917038,
                    longitude: 27.594057
                }
            }
        };
        var createRandomMarker = function(i, bounds, idKey) {
            var lat_min = bounds.southwest.latitude,
                lat_range = bounds.northeast.latitude - lat_min,
                lng_min = bounds.southwest.longitude,
                lng_range = bounds.northeast.longitude - lng_min;

            if (idKey == null) {
                idKey = "id";
            }

            var latitude = lat_min + (Math.random() * lat_range);
            var longitude = lng_min + (Math.random() * lng_range);
            var ret = {
                latitude: latitude,
                longitude: longitude,
                title: 'm' + i
            };
            ret[idKey] = i;
            return ret;
        };
        var markers = [];
        for (var i = 0; i < 22; i++) {
            markers.push(createRandomMarker(i, $scope.map.bounds))
        }
        $scope.randomMarkers = markers;

        vm.menuItems = [];
        vm.selectItem = selectItem;
        vm.toggleItemsList = toggleItemsList;
        vm.showActions = showActions;
        vm.title = $state.current.data.title;
        vm.showSimpleToast = showSimpleToast;
        vm.toggleRightSidebar = toggleRightSidebar;

        navService
            .loadAllItems()
            .then(function (menuItems) {
                vm.menuItems = [].concat(menuItems);
            });

        function toggleRightSidebar() {
            $mdSidenav('right').toggle();
        }

        function toggleItemsList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        function selectItem(item) {
            vm.title = item.name;
            vm.toggleItemsList();
            vm.showSimpleToast(vm.title);
        }

        function showActions($event) {
            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: 'app/views/partials/bottomSheet.html',
                controller: ['$mdBottomSheet', SheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            function SheetController($mdBottomSheet) {
                var vm = this;

                vm.performAction = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

        function showSimpleToast(title) {
            $mdToast.show(
                $mdToast.simple()
                    .content(title)
                    .hideDelay(2000)
                    .position('bottom right')
            );
        }
    }

})();
