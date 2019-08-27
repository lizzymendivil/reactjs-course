// Crear una clase Auto
class Auto {
    constructor(type, year, hasSoat) {
        this.type = type;
        this.year = year;
        this.hasSoat = hasSoat;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getYear() {
        return this.year;
    }

    setYear(year) {
        this.year = year;
    }

    getSoat() {
        return this.hasSoat;
    }

    setSoat(hasSoat) {
        this.hasSoat = hasSoat;
    }

    autoToString() {
        const retorno = "type " + this.type + " year " + this.year + " hasSoat " + this.hasSoat;
        return retorno;
      }
}

class Toyota extends Auto {
    constructor(type, year, hasSoat, model) {
        super(type, year, hasSoat);
        this.model = model
    }

    getModel() {
        return this.model;
    }

    setModel(model) {
        this.model = model;
    }
}

let auto = new Auto('Automovil', 2019, true);
console.log(auto.autoToString());