### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) #function name should be snake case check_for_ace
    if card.value = 1 # should be == not = , one equal is for assigning variables.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #should be def not dif. No comma after card1 which will throw an error as that will not clearly show the two arguments.
  if card1.value > card2.value
    return card.name # no card name assigned to the Card class. This should return the .value instead.
  else
    card2
  end # needs a return statement, currently does not return anything so will not work properly.
end
end# too many end statements.

def self.cards_total(cards) # there is no cards array that has been defined to be called as an argument.
  total # variable not declared properly. should be equal to 0 to start the for loop.
  for card in cards
    total += card.value # card needs to be converted to an integer
    #the loop has to be ended here before the return statement.
    return "You have a total of" + total # an extra space after of will make the text look correct when it's printed.
  end
end # extra end needs added to end the Card class.

```
