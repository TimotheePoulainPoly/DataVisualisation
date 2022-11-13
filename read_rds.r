library(tidyverse)
library(data.table)
library(jsonlite)

print("Set current directory...")
setwd("C:\\Users\\timop\\Desktop\\Polytech\\SI5\\B1\\DataViz\\DB\\rds")

print("Reading rds file...")
songs_df <- readRDS("songs_all_artists_3000.rds")

colnames(songs_df)

filtered_songs <- filter(songs_df, genre != "NULL" & bpm != "")

mutated_songs <- filtered_songs %>% mutate(genres = strsplit(as.character(str_extract_all(genre, '"(.*)"')), ", ")) %>% mutate(key = str_extract(chords_metadata, '[A-G](b|)(maj|min|)')) %>% select(title, genres, bpm, length, gain, key, rank, publicationDate)

print(mutated_songs)

setClass("song", slots=list(title="character", genres="character", bpm="numeric", length="numeric", gain="numeric", key="character"))

songs <- toJSON(mutated_songs)
write_json(songs, "transformed_data_rows.json")

cat(songs)
