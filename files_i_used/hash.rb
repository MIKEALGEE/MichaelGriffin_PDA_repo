@beers = {tennents: 3.50,
         guinness: 4.50,
         carling: 4.20,
         budweiser: 3.80}


def show_beers
  for beer in @beers
  puts beer
  end
end

def what_price
@beers.each{|key,value| puts "The price of #{key} is £#{value}"}
end

show_beers
@beers[:JokerIPA] = 5.20
puts " "
what_price
