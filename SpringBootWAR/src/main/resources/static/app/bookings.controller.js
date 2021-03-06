/**
 * Created by dan.geabunea on 3/29/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookingsController', BookingsController);

    BookingsController.$inject = ['$http'];

    function BookingsController($http) {
        var vm = this;

        vm.bookings = [];
        vm.getAll = getAll;
        vm.getAffordable = getAffordable;
        vm.deleteBooking = deleteBooking;
        vm.create = create;

        init();

        function init(){
            getAll();
        }

        function getAll(){
            var url = "/booking-app/bookings/all";
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response){
                vm.bookings = response.data;
            });
        }

        function getAffordable(){
            var url = "/booking-app/bookings/affordable/" + 100;
            var bookingsPromise = $http.get(url);
            bookingsPromise.then(function(response){
                vm.bookings = response.data;
            });
        }

        function deleteBooking(id){
            var url = "/booking-app/bookings/delete/" + id;
            $http.post(url).then(function(response){
                vm.bookings = response.data;
            });
        }

        function create(){
            var url = "/booking-app/bookings/create";

            var booking = {
                pricePerNight: Math.floor(Math.random() * 200) + 5,
                hotelName:"Some Hotel "+Math.random().toString(36).slice(-3),
                nbOfNights:Math.floor(Math.random() * 10) + 1
            };
            console.log(booking);
            $http.post(url, booking).then(function(response){
                alert('Hotel saved :)');
                console.log(response);
            });
        }
    }
})();
