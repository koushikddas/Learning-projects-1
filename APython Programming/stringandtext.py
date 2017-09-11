types_of_people = 10
x = f"there are {types_of_people} types of people"

binary = "Binary"
do_not = "Don't"
y = f"those who knows {binary} and those who {do_not}"

print(x)
print(y)

print(f"i said:{x}")
print(f"i also said:'{y}'")

hilarious = False
joke_evalution = "isn't the joke funny?! {}"

print(joke_evalution.format(hilarious))

w = "This is the left side of..."
e = "a string with a right side."

print(w + e)
