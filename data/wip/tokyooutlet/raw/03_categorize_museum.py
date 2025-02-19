'''
import pandas as pd



df = pd.read_csv(r"combined_tokyomuseum.csv")


unique_types = df["type"].unique()
type_counts = df["type"].value_counts()
print(type_counts)
print (unique_types)
'''


import pandas as pd

# Sample DataFrame
data = {'type': ['Museum', 'Art museum', 'Science museum', 'Local history museum', 
                      'Zoo', 'Wax museum', 'Toy museum', 'Corporate office']}
df = pd.DataFrame(data)

# Mapping dictionary
category_mapping = {
    'Museum': 'general',
    'National museum': 'general',
    'History museum': 'history',
    'Heritage museum': 'history',
    'Art museum': 'art',
    'Modern art museum': 'art',
    'Sculpture museum': 'art',
    'Art gallery': 'art',
    'Science museum': 'stem',
    'Technology museum': 'stem',
    'Museum of space history': 'stem',
    'Local history museum': 'history',
    'War museum': 'history',
    'Archaeological museum': 'history',
    'Rail museum': 'history',
    'Natural history museum': 'history',
    'Museum of zoology': 'history',
    'Handicraft museum': 'specialty',
    'Toy museum': 'specialty',
    'Maritime museum': 'specialty',
    'Wax museum': 'specialty',
    'Zoo': 'zoo',
    'Theme park': 'specialty',
    'Toy store': 'specialty',
    'Corporate office': 'specialty'
}

# Apply mapping
df['category'] = df['type'].replace(category_mapping)

print(df)