interface Physics{
    physicsMessage(): void;
}
interface Chemistry{
    chemistryMessage(): void;
}
interface Biology{
    biologyMessage(): void;
}
interface ScienceHod extends Physics, Chemistry, Biology{};

class Science implements Physics, Chemistry, Biology{
    physicsMessage(): void {
       throw new Error("Physics messsage")
    }
    chemistryMessage(): void {
        throw new Error("Chemistry messsage")
    }
    biologyMessage(): void {
        throw new Error("Biology messsage")
    }
}

const physicsHod: Physics = new Science();
const chemistryHod: Chemistry = new Science();
const biologyHod: Biology = new Science();
chemistryHod.chemistryMessage();

const scienceHod: ScienceHod = new Science();
scienceHod.biologyMessage();