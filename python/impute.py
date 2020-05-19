
def impute(a):
	invalid_rows = set()
	table_sum = 0

  # defermine invalid rows
	for i in range(len(a)):
		neg_count = 0
		for j in range(len(a[i])):
			if (a[i][j] < 0):
				neg_count += 1
				if neg_count > len(a[i]) / 2:
					invalid_rows.add(i)
					break
  
	print('invalid_rows:', invalid_rows)

	num_valid_rows = len(a) - len(invalid_rows)
	print('num_valid_rows:', num_valid_rows)

	num_valid_cells = num_valid_rows * len(a[0])
	print('num_valid_cells', num_valid_cells)

	for j in range(len(a[0])):
		col_sum = 0
		non_neg_value_count = 0

    # add positive values from valid rows to column sum
		for i in range(len(a)):
			if i not in invalid_rows and a[i][j] >= 0:
				print('adding', a[i][j], 'to col_sum')
				col_sum += a[i][j]
				non_neg_value_count += 1

			print('col_sum:', col_sum)
			col_avg = col_sum / non_neg_value_count
			print('column average:', col_avg)
    
    # replace negative values from valid rows with column average
		for i in range(len(a)):
			if i not in invalid_rows and a[i][j] < 0:
				a[i][j] = col_avg
				print('adding average', col_avg)
				col_sum += col_avg
    
		print('total_col_sum:', col_sum)
		table_sum += col_sum
  
	return table_sum / num_valid_cells

a = [[1.0, 2.0, 10.0],
    [-1.0, -99.0, 0],
    [-1.0, 4.0, 0],
    [3.0, -6.0, -0.1],
    [1.0, -0.31, 6.0]]

# a = [
#   [1.0, 1.0, 1.0, 3.0, 0.0],
#   [-0.1, 0.0, 0.0, 0.0, 0.0],
#   [-5.0, -0.1, -99.0, -1.0, -0.5]
# ]
print(impute(a))