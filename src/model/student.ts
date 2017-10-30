export class Student {
  public name: string;
  public _surname: string;
  public _index: number;
  public _module: string;


  constructor(name: string, surname: string, index: number, module: string) {
    this.name = name;
    this._surname = surname;
    this._index = index;
    this._module = module;
  }

}
