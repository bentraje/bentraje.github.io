import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# df_a = pd.read_csv(r'tokyomuseum_01.csv')
# df_b = pd.read_csv(r'tokyomuseum_02.csv')
# df_c = pd.read_csv(r'tokyomuseum_03.csv')
# df_4 = pd.read_csv(r'tokyomuseum_04.csv')

# # Find unique entries in df_b not in df_a
# unique_entries = df_b[~df_b["title"].isin(df_a["title"])]

# # Append unique entries to df_a
# combined_df = pd.concat([df_a, unique_entries], ignore_index=True)


# unique_entries = df_c[~df_c["title"].isin(combined_df["title"])]

# combined_df = pd.concat([combined_df, unique_entries], ignore_index=True)



# Read all CSVs into a list of DataFrames
dfs = [pd.read_csv(file) for file in ['search-result-Outlet-Mall_01.csv', 'search-result-Outlet-Mall_02.csv', 'search-result-Outlet-Mall_03.csv']]

# Concatenate and drop duplicates based on "title"
combined_df = pd.concat(dfs, ignore_index=True).drop_duplicates(subset="title", keep="first")

# Count of unique entries added
# added_count = len(unique_entries)

# print(f"Number of unique entries added: {added_count}")
# print(combined_df)


df = combined_df
df = df[
    df["title"].str.lower().str.contains("outlet") |
    df["type"].str.lower().str.contains("outlet")
]


df = df[['title', "gps_coordinates", "reviews", "types", "type", "website"]]
print (df)
# category_mapping = {
#     'Museum': 'general',
#     'National museum': 'general',
#     'History museum': 'history',
#     'Heritage museum': 'history',
#     'Art museum': 'art',
#     'Modern art museum': 'art',
#     'Sculpture museum': 'art',
#     'Art gallery': 'art',
#     'Science museum': 'stem',
#     'Technology museum': 'stem',
#     'Museum of space history': 'stem',
#     'Local history museum': 'history',
#     'War museum': 'history',
#     'Archaeological museum': 'history',
#     'Rail museum': 'history',
#     'Natural history museum': 'history',
#     'Museum of zoology': 'history',
#     'Handicraft museum': 'specialty',
#     'Toy museum': 'specialty',
#     'Maritime museum': 'specialty',
#     'Wax museum': 'specialty',
#     'Zoo': 'zoo',
#     'Theme park': 'specialty',
#     'Toy store': 'specialty',
#     'Corporate office': 'specialty'
# }

# df['category'] = df['type'].replace(category_mapping)


df["gps_coordinates"] = df["gps_coordinates"].apply(
    lambda x: json.loads(x) if isinstance(x, str) else {"latitude": None, "longitude": None}
)

df[["latitude", "longitude"]] = pd.DataFrame(df["gps_coordinates"].tolist(), index=df.index)
df = df.drop(columns=["gps_coordinates"])

conditions = [
    (df["reviews"] > 5000.0),
    (df["reviews"] >= 2000.0) & (df["reviews"] <= 5000.0),
    (df["reviews"] >= 500.0) & (df["reviews"] <= 2000.0),
    (df["reviews"] >= 50.0) & (df["reviews"] <= 500.0),
    (df["reviews"] < 50.0)
]
choices = ["A","B","C", "D", "E"]

df["popularity"] = np.select(conditions, choices, default=choices[-1])
df.rename(columns={"title": "name"}, inplace=True)
df.to_json("tokyo_museum.json", orient='records', lines=False, indent=4)

df.to_csv('combined_tokyomuseum.csv', index=False)

