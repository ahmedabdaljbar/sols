# I know how to work with classes but not so good at it so...
from cs50 import get_string

# Getting user input
input = get_string("Input: s = ")

# we'll suppose that the user typed at least one char so the least palindromes is 1
palindromes_len = 1 
# The start variable is for storing the palindrome start location than we can add on that the len and voala
start_loc = 0

for i in range(len(input)):
    for j in range(i, len(input)):
        is_palindrome = True
        
        # A check for the palidromes letters
        validator = ((j - i) // 2) + 1
        for k in range(0, validator):
            if (input[i + k] != input[j - k]):
                is_palindrome = False

        # To know where the palidrome starts and how long it is
        if (is_palindrome and (j - i + 1) > palindromes_len):
            start_loc = i
            palindromes_len = j - i + 1

# Now we have the palidrome starting location and length we can eaisly know what it is
print("Output: \"", end = "")
for i in range(start_loc, (start_loc+palindromes_len)):
    print(input[i], end="")
print("\"")