"use strict";
;
class Science {
    physicsMessage() {
        throw new Error("Physics messsage");
    }
    chemistryMessage() {
        throw new Error("Chemistry messsage");
    }
    biologyMessage() {
        throw new Error("Biology messsage");
    }
}
const physicsHod = new Science();
const chemistryHod = new Science();
const biologyHod = new Science();
chemistryHod.chemistryMessage();
const scienceHod = new Science();
scienceHod.biologyMessage();
//# sourceMappingURL=interfaces.js.map