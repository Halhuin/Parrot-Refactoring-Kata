export class Parrot {
    constructor(numberOfCoconuts, voltage, isNailed) {
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(){}

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

    getSpeed() {
        super.getSpeed()

        return this.getBaseSpeed()
    }

}

export class AfricanParrot extends Parrot{

    getSpeed() {
        super.getSpeed()

        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts)
    }

}

export class NorwegianBlueParrot extends Parrot{
    getSpeed() {
        super.getSpeed()

        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage)
    }
}
