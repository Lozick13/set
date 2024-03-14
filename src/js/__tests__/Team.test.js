import { Team, Character } from "../app";

test("Team add()", () => {
  const team = new Team();
  const character = new Character("Alex", "Swordsman");

  team.add(character);

  const result = team.members.has(character);

  expect(result).toBe(true);
});

test("Team addAll()", () => {
  const team = new Team();
  const characters = [];

  for (let i = 0; i < 10; i++) {
    const character = new Character("Alex", "Swordsman")
    characters.push(character);
  }
  team.addAll(...characters);

  const result = team.members.size;

  expect(result).toBe(10);
});

test("Team toArray()", () => {
  const team = new Team();
  const character = new Character("Alex", "Swordsman");

  team.add(character)

  const result = team.toArray().toString();
  const expected = [character].toString();

  expect(result).toBe(expected);
});
