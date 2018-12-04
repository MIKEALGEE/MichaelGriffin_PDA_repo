require("minitest/autorun")
require('minitest/rg')
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class CardGameTest < MiniTest::Test

  def setup
    @CardGame = CardGame.new()
    @card1 = Card.new("HEARTS",9)
    @card2 = Card.new("SPADES",4)
    @card3 = Card.new("CLUBS", 2)
    @card4 = Card.new("DIAMONDS", 1)
  end

  def test_check_for_ace()
    assert_equal(true,@CardGame.check_for_ace(@card4))
  end

  def test_highest_card()
    assert_equal("The 9 of HEARTS wins!", @CardGame.highest_card(@card1,@card3))
  end

  def test_cards_total()
    cards = [@card1,@card2,@card3,@card4]
    assert_equal("You have a total of 16",@CardGame.cards_total(cards))
  end

end
