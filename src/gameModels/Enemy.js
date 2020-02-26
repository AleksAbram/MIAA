// Враг.
class Enemy {
  constructor() {
    this.generateSkin();
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
  }

  die() {
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
