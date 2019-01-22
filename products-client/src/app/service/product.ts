export class Product {

   constructor (public name: string, public examen: string, public reden: string, public datum: number) {}

   toForm(): string {
      return `name=${this.name}&examen=${this.examen}&reden=${this.reden}&datum=${this.datum}`;
   }
}


//naam van de student (String), het examen (String), een reden (String) en de datum van indienen (automatisch gegenereerd). 