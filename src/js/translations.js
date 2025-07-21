const de = {
  GAME_OVER: 'Game Over',
  HANDEDNESS: 'Händigkeit',
  HANDEDNESS_LEFT: 'Linkshänder',
  HANDEDNESS_RIGHT: 'Rechtshänder',
  LANGUAGE: 'Sprache',
  LANGUAGE_EN: 'Englisch',
  LINK_INVENTORY: 'Inventar',
  LINK_MEMORY: 'Erinnerung',
  LINK_SETTINGS: 'Einstellungen',
  LINK_TITLE: 'Auf Twitter teilen',
  MEMORY_ENTERED_FIVE_TOWN: 'Five Town betreten',
  MEMORY_ENTERED_FOUR_CASTLE: 'Four Castle betreten',
  MEMORY_ENTERED_SIX_MOUNTAIN: 'Six Mountain betreten',
  MEMORY_ENTERED_THREE_VILLAGE: 'Three Village betreten',
  MEMORY_GAME_STARTED: 'das Spiel hat begonnen',
  MEMORY_MET_FISHERWOMAN: 'habe die Fischerin getroffen',
  MEMORY_MET_KNIGHT: 'habe den Ritter getroffen',
  MEMORY_MET_NARRATOR: 'habe den Erzähler getroffen',
  MEMORY_MET_PILOT: 'habe die Pilotin getroffen',
  MEMORY_MET_SCRIBE: 'habe den Schriftführer',
  NEW_GAME: 'Neues Spiel',
  NO_ITEMS: 'Keine Gegenstände.',
  NO_MEMORIES: 'Treffe Leute.',
  SHARE_TITLE: 'Ich spielte »Polygone - Trust Not Found«',
  TITLE_FIVE_PORTAL: 'In Five Portal',
  TITLE_FIVE_TOWN: 'In Five Town',
  TITLE_FOUR_CASTLE: 'In Four Castle',
  TITLE_FOUR_PORTAL: 'In Four Portal',
  TITLE_GAME_OVER: 'Game Over',
  TITLE_INTRO: 'Am Anfang',
  TITLE_PORTAL: 'In Portal',
  TITLE_SIX_MOUNTAIN: 'In Six Mountain',
  TITLE_SIX_PORTAL: 'In Six Portal',
  TITLE_THREE_PORTAL: 'In Three Portal',
  TITLE_THREE_VILLAGE: 'In Three Village',
  TITLE: '',  // Sic!
  TYPING: 'Tippgeschwindigkeit',
  VOLUME: 'Lautstärke',
  WELCOME: [
    'Oh, gut dass du kommst!',
    'Wir brauchen deine Hilfe!'
  ]
}

const en = {
  GAME_OVER: 'Game Over',
  HANDEDNESS: 'Handedness',
  HANDEDNESS_LEFT: 'Left-handed',
  HANDEDNESS_RIGHT: 'Right-handed',
  LANGUAGE: 'Language',
  LANGUAGE_EN: 'English',
  LINK_INVENTORY: 'Inventory',
  LINK_MEMORY: 'Memory',
  LINK_SETTINGS: 'Settings',
  LINK_TITLE: 'Share on Twitter',
  MEMORY_ENTERED_FIVE_TOWN: 'entered Five Town',
  MEMORY_ENTERED_FOUR_CASTLE: 'entered Four Castle',
  MEMORY_ENTERED_SIX_MOUNTAIN: 'entered Six Mountain',
  MEMORY_ENTERED_THREE_VILLAGE: 'entered Three Village',
  MEMORY_GAME_STARTED: 'the game started',
  MEMORY_MET_FISHERWOMAN: 'met the Fisherwoman',
  MEMORY_MET_KNIGHT: 'met the Knight',
  MEMORY_MET_NARRATOR: 'met the Narrator',
  MEMORY_MET_PILOT: 'met the Pilot',
  MEMORY_MET_SCRIBE: 'met the Scribe',
  NEW_GAME: 'New Game',
  NO_ITEMS: 'No items.',
  NO_MEMORIES: 'Make some encounters.',
  SHARE_TITLE: 'I played »Polygone - Trust Not Found«',
  TITLE_FIVE_PORTAL: 'At Five Portal',
  TITLE_FIVE_TOWN: 'At Five Town',
  TITLE_FOUR_CASTLE: 'At Four Castle',
  TITLE_FOUR_PORTAL: 'At Four Portal',
  TITLE_GAME_OVER: 'Game Over',
  TITLE_INTRO: 'At the beginning',
  TITLE_PORTAL: 'At Portal',
  TITLE_SIX_MOUNTAIN: 'At Six Mountain',
  TITLE_SIX_PORTAL: 'At Six Portal',
  TITLE_THREE_PORTAL: 'At Three Portal',
  TITLE_THREE_VILLAGE: 'At Three Village',
  TITLE: '',  // Sic!
  TYPING: 'Typing speed',
  VOLUME: 'Volume',
  WELCOME: [
    'Oh, good that you are there!',
    'We need your help!'
  ]
}

/**
 * Updates all translations
 */
function t () {
  const lang = document.documentElement.lang
  const dict = lang === 'de' ? de : en

  Array.from(document.querySelectorAll('[data-t-key]')).forEach((element) => {
    const key = element.dataset.tKey
    const value = dict[ key ]
    element.textContent = value
  })
}

export { t }
