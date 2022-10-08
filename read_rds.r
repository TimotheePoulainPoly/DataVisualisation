library(tidyverse)
library(data.table)

print("Set current directory...")
setwd("C:\\Users\\timop\\Desktop\\Polytech\\SI5\\B1\\DataViz\\DB\\rds")

print("Reading rds file...")
songs_df <- readRDS("songs_all_artists_3000.rds")

colnames(songs_df)

filtered_songs <- filter(songs_df, chords_metadata != "NULL" & genre != "NULL" & bpm != "")

mutated_songs <- filtered_songs %>% mutate(genres = str_match_all(genre, '\"(.*)\"')) %>% mutate(chords = str_match_all(chords_metadata, '\"(.*)\"')) %>% select(title, genres, bpm, length, gain, chords, chords_metadata)

print(mutated_songs)
