import { Person } from "../models/person/person.js";
import { NameFactory } from "./nameFactory.js";

export class PersonFactory {
  constructor() {
    this.nf = new NameFactory()
  }

  GetName = _ => {
    return this.nf.GetName()
  }
}