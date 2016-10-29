def floorOrCeil(prices):
	bins = [bin(i)[0:1:-1] for i in range(2**n)]
	sumOfPrices = int(sum(prices))
	min_loss = len(prices)#bigger than any other option
	current_loss = 0
	for num in bins:
		#str representation of a binary number: 0000000
		for n, digit in enumerate(prices):
			current_loss += digit - int(digit) + num[n]#if digit in binary num is 0, floor, if 1, ceiling
		if current_loss < min_loss:
			min_loss = current_loss
	return min_loss

# GOOD QUESTION: there seem to be two goals that are at odds with each other.

# 1: Make the sum of intified sub-prices be closest to the 