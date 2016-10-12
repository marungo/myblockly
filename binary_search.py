def binary_search_helper(a,left,right,val):
	if right < left:
		return -1
	else:
		mid_index = (left+right)/2
		if val == a[mid_index]:
			return mid_index
		elif val > a[mid_index]:
			return binary_search_helper(a, mid_index+1, right, val)
		else:
			return binary_search_helper(a, left, mid_index-1, val)

def binary_search(a,val):
	return binary_search_helper(a, 0, len(a)-1, val)