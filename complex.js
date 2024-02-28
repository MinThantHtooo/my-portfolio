function flipCard(card) {
    if (card.classList.contains('flipped')) {
      card.classList.remove('flipped');
    } else {
      card.classList.add('flipped');
    }
  }