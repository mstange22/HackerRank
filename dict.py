targets = [2,4,6,2,6,8,1,2,6]
labels = [2,3,6,2,5,6,3,2,5]

confusion = dict()

for target, label in zip(targets, labels):
    confusion[(target, label)] = confusion.get((target, label), 0) + 1
    print(confusion)