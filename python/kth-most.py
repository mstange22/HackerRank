from collections import defaultdict

def kth(arr, k):
  counts = defaultdict(int)
  for s in arr:
    counts[s] += 1

  sorted_items = [item[0] for item in sorted(counts.items(), key=lambda x: -x[1])]

  return sorted_items[:k]


list_of_strings = ['hi', 'hello', 'hiya', 'hi', 'hi', 'hello', 'hola', 'hola', 'hiya', 'hi', 'hello', 'hiya']

print('result:', kth(list_of_strings, 5))