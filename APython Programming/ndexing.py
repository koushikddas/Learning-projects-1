months = ['january','february','march','april','may','june','july','august','sepetember','october','november','december']

# a list with one ending for each number
endings = ['st','nd','rd'] + 17 * ['th'] \
         +['st','nd','rd'] + 7 * ['th'] \
         +['st']

year = input('Input year: ')
month = input('Month(1-12): ')
day = input('Day(1-31): ')

month_number = int(month)
day_number = int(day)

#remember to substract 1 to get correct index number
month_name = months[month_number - 1]
ordinal = day+endings[day_number-1]

print(month_name + ' ' + ordinal + ', ' + year)
