/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "OldSchool Runescape",
    date: "March 2, 2020",
    firstParagraph: `There are many ways to train all skills. The fastest training methods usually require the most effort and/or money to perform; cheaper and lower-effort methods tend to be slower. What type of method the player chooses ultimately comes down to preference and what properties the player values. Some players like to make money during their training, some prefer low-effort methods regardless of the profit or experience rates, and others do not care so much as long as they get their experience as fast and efficiently as possible.`,
    secondParagraph: `Some skills may be trained quickly by buying supplies from the Grand Exchange, such as Cooking, Prayer, Construction, and Crafting. These are sometimes referred to as "buyable" skills. They are usually considered easy to train for normal accounts, but Ironmen must get the supplies for these skills some other way, usually by gathering them directly, buying from shops or from monster drops. For example, when training Herblore, it is easy for a normal account to simply buy thousands of herbs and ingredients, while Ironmen must collect all the ingredients themselves by Farming or killing monsters.`,
    thirdParagraph: `Training some skills can also provide passive experience in other skills. Barbarian Fishing for example, which is one of the fastest ways to train Fishing, also provides small amounts of Agility and Strength experience. Woodcutting with an infernal axe or mining with an infernal pickaxe can also provide (depending on the method) passive Firemaking and Smithing experience, respectively. Furthermore, Magic and Fletching can be trained almost entirely while training other skills.`
  },
  {
    title: "Skill Training Guides",
    date: "March 4, 2020",
    firstParagraph: `When training buyable skills, it is usually better to train skills where raw materials are made into finished products which are sold back to the Grand Exchange (such as Crafting, Herblore, Smithing) before skills that sink capital by removing items from the game (such as Construction, Prayer, Firemaking). The latter skills require a lot more capital relative to the loss, and it is inconvenient to train them with less capital available as this would require constantly buying and selling supplies.`,
    secondParagraph: `Some players choose to play alternative accounts to make money while training skills on the main account, allowing the player to sustain wealth whilst always using expensive methods with high experience rates. Merchanting and killing profitable monsters (such as rune dragons, gargoyles, skeletal wyverns, or brutal black dragons) are common methods of money making for this purpose, as they are relatively low effort and therefore do not require much attention. Alternative accounts can also be used to increase experience rates for some skills, such as luring Slayer monsters for barraging and looting their drops, shooting stray chinchompas, or running pure essence.`,
    thirdParagraph: `Since skill training can be repetitive and very often exhausting, one of the best ways to do it without becoming burnt out is to do something else at the same time. Activities such as reading, watching television, listening to music or even working out while training can keep focus up and boredom levels to a minimum. It can also be good to switch training from one skill to another from time to time. Not only does it decrease monotony, but certain skills can be trained much faster and/or cheaper in conjunction with other skills.`
  },
  {
    title: "Money Making Guides",
    date: "March 4, 2020",
    firstParagraph: `This is a list of some of the ways to make money in Old School RuneScape and the requirements to do so. The prices and hourly rates are simply an estimate. The actual rates and profit are likely to differ. There are likely other ways that aren't included here; feel free to suggest them on the talk page.`,
    secondParagraph: `If you notice a discrepancy between profits listed here and profits listed on guide pages, it is probably because of a caching issue. You can clear the cache and force an update by clicking here.`,
    thirdParagraph: `Caution: You should always research the items and methods before trying these methods. Because of constantly changing prices of items, the estimated profit may be inaccurate.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/


//#1

function createCard(title, date, desc1, desc2, desc3) {
  const card = document.createElement('div')
  const h2c = document.createElement('h2')
  const dateArt = document.createElement('p')
  const pTag1 = document.createElement('p')
  const pTag2 = document.createElement('p')
  const pTag3 = document.createElement('p')
  const btn = document.createElement('span')
  card.append(h2c, date, pTag1, pTag2, pTag3, btn)
  card.classList.add('article')
  dateArt.classList.add('date')
  btn.classList.add('expandButton')
  h2c.textContent = title
  dateArt.textContent = date
  pTag1.textContent = desc1
  pTag2.textContent = desc2
  pTag3.textContent = desc3
  btn.textContent = '\u25bc'
  btn.addEventListener('click', function() {
    card.classList.toggle('article-open')
  })
  return card
}
// const articles = document.querySelector(".articles");
data.forEach(comp => {
  document.querySelector(".articles").append(createCard(
        comp.title,
        comp.date,
        comp.firstParagraph,
        comp.secondParagraph,
        comp.thirdParagraph
      )
    );
});

//Step 5
// let newArticle = data.map((item) => {
  //return new array, with the new item, after being manipulated by the callback
//   let article = createCard(item);
//   console.log(article)
//   return article;
// })

// let arr = document.querySelector('data')

// newArticle.forEach(article => {
//   arr.appendChild(article)
// })
// console.log(newArticle)