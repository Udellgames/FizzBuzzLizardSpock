/*jslint plusplus: true */
(function () {
    
    "use strict";

    function Element(name, frequency) {
        this.name = name;
        this.frequency = frequency;
    }

    function FizzBuzz(index, value) {
        this.index = index;
        this.value = value || index.toString();
    }

    var app = angular.module("fizzBuzzApp", []);

    app.controller("fizzBuzzController", function ($scope) {
        $scope.model = {
            elements: [
                new Element("Fizz", 3),
                new Element("Buzz", 5),
                new Element("Lizard", 7),
                new Element("Spock", 11)
            ],
            fizzBuzz: []
        };
        
        $scope.controller = {
            elementCount: 4,
            fizzBuzzCount: 100,
            generateElements: function () {
                $scope.model.elements = [];
                $scope.model.fizzBuzz = [];
                var i;
                for (i = 0; i < $scope.controller.elementCount; i++) {
                    $scope.model.elements.push(new Element("Element", 0));
                }
            },
            generateFizzBuzz: function () {
                $scope.model.fizzBuzz = [];
                $scope.model.elements.sort(function (a, b) {
                    return a.frequency - b.frequency;
                });
                
                var i, result, anyElementMatches, matchElement = function (element) {
                    if (i % element.frequency === 0) {
                        result += element.name;
                        anyElementMatches = true;
                    }
                };
                
                for (i = 1; i <= $scope.controller.fizzBuzzCount; i++) {
                    
                    result = "";
                    anyElementMatches = false;

                    $scope.model.elements.forEach(matchElement);

                    if (!anyElementMatches) {
                        result = i.toString();
                    }

                    $scope.model.fizzBuzz.push(new FizzBuzz(i, result));
                }
            }
        };
        
        $scope.controller.generateFizzBuzz();
        $scope.$apply();
    });
}());