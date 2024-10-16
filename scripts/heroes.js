import { getHeroes } from "./database.js"

const heroes = getHeroes()

export const HeroList = () => {
  let heroHTML = '<div class="fun-stuff"><ul>'

  for (const hero of heroes) {
    heroHTML += `<li>${hero.name}</li>`
  }

  heroHTML += "</ul></div>"

  return heroHTML
}
