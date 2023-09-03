
from random import randint


min_number = int(input('please enter the min number'))
max_number = int(input('please enter the max number'))

if max_number < min_number:
    print('invalid input')
else:
    rnd_number = randint(min_number, max_number)
    print(rnd_number)
