import os
import json

# Define the folder path
folder_path = "./raw"  # Change this to your target folder

merged_data = []

# Iterate over all JSON files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".json"):
        file_path = os.path.join(folder_path, filename)
        with open(file_path, "r") as file:
            data = json.load(file)
            # Flatten by extending the list
            if isinstance(data, list):
                merged_data.extend(data)
            else:
                print(f"Skipping {filename}: not a list")

# Save the merged data into a new file
output_file = "merged_data.json"
with open(output_file, "w") as output:
    json.dump(merged_data, output, indent=4)

print(f"Merged JSON saved as {output_file}")