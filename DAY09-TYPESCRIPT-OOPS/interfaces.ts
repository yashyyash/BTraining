interface chemistry{
    chemistrymessage():void;
}
interface biology{
    biologyymessage():void;
}
interface physics{
    physicsmessage():void;
}

class Science implements biology , physics, chemistry{
    chemistrymessage(): void {
        throw new Error("Method not implemented.");
    }
    physicsmessage(): void {
        throw new Error("Method not implemented.");
    }
    biologyymessage(){
        console.log("Holla Amigo, BioLogy Seekhoooo");
    }

}

const physicsHod:physics = new Science();
physicsHod.physicsmessage();

const chemistryHod:chemistry = new Science();
chemistryHod.chemistrymessage();

const biologyHod:biology = new Science();
biologyHod.biologyymessage();

interface Science extends biology , chemistry , physics{
    MessagefromSciHod():void;
}

const ScienceHod:Science = new Science();
ScienceHod.MessagefromSciHod();
ScienceHod.biologyymessage();
ScienceHod.chemistrymessage();
ScienceHod.physicsmessage();