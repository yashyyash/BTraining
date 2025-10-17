"use strict";
var Science = /** @class */ (function () {
    function Science() {
    }
    Science.prototype.chemistrymessage = function () {
        throw new Error("Method not implemented.");
    };
    Science.prototype.physicsmessage = function () {
        throw new Error("Method not implemented.");
    };
    Science.prototype.biologyymessage = function () {
        console.log("Holla Amigo, BioLogy Seekhoooo");
    };
    return Science;
}());
var physicsHod = new Science();
physicsHod.physicsmessage();
var chemistryHod = new Science();
chemistryHod.chemistrymessage();
var biologyHod = new Science();
biologyHod.biologyymessage();
var ScienceHod = new Science();
ScienceHod.MessagefromSciHod();
ScienceHod.biologyymessage();
ScienceHod.chemistrymessage();
ScienceHod.physicsmessage();
//# sourceMappingURL=interfaces.js.map