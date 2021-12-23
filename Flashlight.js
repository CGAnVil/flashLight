class Battery{
    _energy;
    constructor(energy) {
        this._energy = energy
    }
    set energy(energy){
        this._energy = energy
    }
    get energy(){
        return this._energy
    }
    decreaseEnergy(){
        if(this._energy > 0){
            this._energy --;
        }
    }
}

class Flashlight{
    _status;
    _battery;
    constructor(status, battery) {
        this._battery = battery
        this._status = status
    }
    set battery(battery){
        this._battery = battery
    }
    get battery(){
        return this._battery
    }

    set status(status){
        this._status = status
    }
    get status(){
        return this._status
    }
    getBatteryInfo(){
        return this._battery.energy
    }
    turnOn(){
        this._status = true
    }
    turnOff(){
        this._status =false
    }

    light(){
        if(this._status){
            alert('Light on')
        }else{
            alert('Light off')
        }
    }
}