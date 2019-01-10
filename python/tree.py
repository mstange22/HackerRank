""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""

def left(root, parent_data):
    if root == None:
        return True
    if root.data >= parent_data:
        return False
    return left(root.left, root.data) and left(root.left, parent_data) \
        and left(root.right, parent_data) and right(root.right, root.data)

def right(root, parent_data):
    if root == None:
        return True
    if root.data <= parent_data:
        return False
    return right(root.right, root.data) and right(root.right, parent_data) \
        and right(root.left, parent_data) and left(root.left, root.data)

def check_binary_search_tree_(root):
    return left(root.left, root.data) and right(root.right, root.data)