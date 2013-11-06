var services = angular.module('services', []);

services.service("TestService1",
    function(){
        var data = [
            {
                name: 'Nicole Elaine Mitchell Dorlus',
                position: 'Mommy'
            },
            {
                name: 'John Silne Mitchell Dorlus',
                position: 'Daddy'
            },
            {
                name: 'Mateo The Shogun of Bartholomeow Dorlus',
                position: 'Ruler'
            },
            {
                name: 'Luke Creme Brule Micah Dorlus',
                position: 'Peasant/Beggar'
            }
        ];

        this.get = function(){
            return data;
        }
    });
