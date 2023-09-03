import './styles.css';

export function Exercise() {
  class Person {
    introduce() {
      return 'I am a Person';
    }
  }

  class Builder extends Person {
    introduce() {
      return super.introduce() + ', I am also a Builder';
    }
  }

  class Doctor extends Person {
    introduce() {
      return super.introduce() + ', I am also a Doctor';
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      return "I'm a Pediatrician";
    }
  }

  // Tworzenie instancji i wywoływanie metod
  const person = new Person();
  console.log(person.introduce()); // "I am a Person"

  const builder = new Builder();
  console.log(builder.introduce()); // "I am a Person, I am also a Builder"

  const doctor = new Doctor();
  console.log(doctor.introduce()); // "I am a Person, I am also a Doctor"

  const pediatrician = new Pediatrician();
  console.log(pediatrician.introduce()); // "I'm a Pediatrician"

  class Engine {
    start() {
      return 'Engine is turned on';
    }

    stop() {
      return 'Engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP!';
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `Turning ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const randomIndex = Math.floor(Math.random() * directions.length);
      return directions[randomIndex];
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }

    start() {
      return this.engine.start();
    }

    stop() {
      return this.engine.stop();
    }

    beep() {
      return this.klaxon.beep();
    }

    turn(direction) {
      return this.steeringWheel.turn(direction);
    }

    navigate() {
      return this.gps.navigate();
    }
  }

  // Tworzenie instancji klasy Car
  const myCar = new Car();

  // Wywoływanie metod na instancji Car
  console.log(myCar.start()); // "Engine is turned on"
  console.log(myCar.stop()); // "Engine is turned off"
  console.log(myCar.beep()); // "BEEEP!"
  console.log(myCar.turn('left')); // "Turning left" (lub "right")
  console.log(myCar.navigate()); // "turn right", "turn left" lub "drive straight"
  return (
    <div>
      <h1>OOP - exercise</h1>
    </div>
  );
}
