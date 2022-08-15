import { PersonFactory } from "./modules/personFactory.js";
import { Person } from "./models/person/person.js";

const pf = new PersonFactory()

for (let i = 0; i < 100; i++)
  console.log(pf.GetName());

