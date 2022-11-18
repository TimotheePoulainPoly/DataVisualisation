import pandas as pd

df = pd.read_csv('../songs4.csv')
i = 0
for genre in df['genres'].values:
    if genre.lower() == '[]':
        df.loc[i, 'genres'] = 'unknown'
    elif genre.lower().__contains__('soul'):
        df.loc[i, 'genres'] = 'soul'
    elif genre.lower().__contains__('metal'):
        df.loc[i, 'genres'] = 'metal'
    elif genre.lower().__contains__('blues'):
        df.loc[i, 'genres'] = 'blues'
    elif genre.lower().__contains__('r&b'):
        df.loc[i, 'genres'] = 'R&B'
    elif genre.lower().__contains__('hip hop'):
        df.loc[i, 'genres'] = 'hip-hop'
    elif genre.lower().__contains__('lo-fi'):
        df.loc[i, 'genres'] = 'lo-fi'
    elif genre.lower().__contains__('disco'):
        df.loc[i, 'genres'] = 'disco'
    elif genre.lower().__contains__('jazz'):
        df.loc[i, 'genres'] = 'jazz'
    elif genre.lower().__contains__('country'):
        df.loc[i, 'genres'] = 'country'
    elif genre.lower().__contains__('alternative rock'):
        df.loc[i, 'genres'] = 'alternative-rock'
    elif genre.lower().__contains__('hard rock'):
        df.loc[i, 'genres'] = 'hard-rock'
    elif genre.lower().__contains__('soft rock'):
        df.loc[i, 'genres'] = 'soft-rock'
    elif genre.lower().__contains__('folk rock'):
        df.loc[i, 'genres'] = 'folk-rock'
    elif genre.lower().__contains__('pop'):
        df.loc[i, 'genres'] = 'pop'
    elif genre.lower().__contains__('rock'):
        df.loc[i, 'genres'] = 'classic-rock'
    else:
        df.loc[i, 'genres'] = 'other'
    i = i + 1

df.to_csv("../songs4.csv", index=False)

print(df["genres"])


