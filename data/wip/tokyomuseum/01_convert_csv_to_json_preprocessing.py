import pandas as pd
import json
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

pd.set_option("display.max_columns", None)
pd.set_option("display.width", 1000)
# Limit the display width of each column (truncate content)
pd.set_option("display.max_colwidth", 20)  # Truncate column values to 20 characters


df = pd.read_csv(r'tokyomuseum.csv')


# print (df)

# df = df.drop(columns=["order_online", "position", "price", "place_id",
#  "unclaimed_listing", "service_options", "data_id", "data_cid", "hours", "operating_hours", "gps_coordinates"])

df = df[['title', "gps_coordinates", "reviews"]]
# print(df["gps_coordinates"].apply(type).unique())


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


# value_counts = df["popularity"].value_counts().sort_index()
# print(value_counts)

# print (df)

df.to_json("tokyo_museum.json", orient='records', lines=False, indent=4)


# print (df.head(10))



'''
float_values = df["reviews"].dropna()

# Plot histogram using Seaborn
plt.figure(figsize=(8, 5))
sns.histplot(float_values, bins=50, kde=True, color='skyblue')
plt.title("Distribution of Reviews")
plt.xlabel("Review Scores")
plt.ylabel("Frequency")
plt.show()
'''

