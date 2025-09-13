export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {
            case PARROT_TYPES.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

    getLoadFactor() {
        return 9;
    }

    getBaseSpeed() {
        return 12;
    }
}

export class EuropeanParrot extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super(PARROT_TYPES.EUROPEAN, numberOfCoconuts, voltage, isNailed)
    }

    getSpeed() {
        return this.getBaseSpeed()
    }
}

export class AfricanParrot extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed){
        super(PARROT_TYPES.AFRICAN, numberOfCoconuts, voltage, isNailed)
    }

    getSpeed() {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts)
    }
}
