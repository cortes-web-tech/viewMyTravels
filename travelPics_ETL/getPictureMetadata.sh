# Change directories to folder containing pictures
cd pics
echo -e "\nExtracting data from these files:"
ls

# Get metadata from all pictures
mdls * -name kMDItemDisplayName -name kMDItemContentCreationDate \
-name kMDItemGPSDestBearing -name kMDItemLatitude -name kMDItemLongitude \
-name kMDItemOrientation -name kMDItemPixelHeight -name kMDItemPixelWidth \
-name kMDItemFSName > ../filteredData.txt
# ^^^ Temporarily stores data in filteredData.txt ^^^

# Return to root folder
cd ..
# Parse data using python script
python parseData.py

# Delete temp file
rm filteredData.txt

