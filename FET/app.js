var app = angular.module('TransportationApp', []);

app.controller('BusController', function() {
    this.buses = [
        { name: 'Bus A', route: 'Route 1' },
        { name: 'Bus B', route: 'Route 2' },
        { name: 'Bus C', route: 'Route 3' }
    ];
});
