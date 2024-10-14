class MyClass:
    def __init__(self):
        self.a="This is my class"
        self._b="This is protected member"
        self.__c="This is private member"
obj1=MyClass()
print(obj1.a)
print(obj1._b)
#print(obj1.__c)