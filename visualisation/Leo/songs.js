const songs = [
    {
        "title": "I'll Never Smile Again",
        "genres": "jazz",
        "bpm": 122.3,
        "length": 148,
        "gain": -18.8,
        "key": ""
    },
    {
        "title": "Dear God",
        "genres": "alternative-rock",
        "bpm": 181,
        "length": 227,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "It's All In The Game",
        "genres": "pop",
        "bpm": 105.5,
        "length": 160,
        "gain": -15.2,
        "key": ""
    },
    {
        "title": "Hanky Panky",
        "genres": "classic-rock",
        "bpm": 125,
        "length": 173,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Good Lovin'",
        "genres": "soul",
        "bpm": 105,
        "length": 143,
        "gain": null,
        "key": ""
    },
    {
        "title": "Say I Am (What I Am)",
        "genres": "classic-rock",
        "bpm": 128,
        "length": 151,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "It's Only Love",
        "genres": "classic-rock",
        "bpm": 139.2,
        "length": 127,
        "gain": -14,
        "key": ""
    },
    {
        "title": "I Think We're Alone Now",
        "genres": "pop",
        "bpm": 129.6,
        "length": 130,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Gettin' Together",
        "genres": "classic-rock",
        "bpm": 139.7,
        "length": 138,
        "gain": -11.2,
        "key": ""
    },
    {
        "title": "Mirage",
        "genres": "pop",
        "bpm": 128.8,
        "length": 165,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Mony Mony",
        "genres": "hard-rock",
        "bpm": 129,
        "length": 174,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Crimson And Clover",
        "genres": "pop",
        "bpm": 169,
        "length": 332,
        "gain": -14,
        "key": ""
    },
    {
        "title": "Do Something To Me",
        "genres": "classic-rock",
        "bpm": 122,
        "length": 149,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Crystal Blue Persuasion",
        "genres": "soul",
        "bpm": 99.9,
        "length": 241,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Sweet Cherry Wine",
        "genres": "classic-rock",
        "bpm": 106.8,
        "length": 260,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Ball Of Fire",
        "genres": "classic-rock",
        "bpm": 153,
        "length": 187,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "She",
        "genres": "classic-rock",
        "bpm": 168,
        "length": 121,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Gotta Get Back To You",
        "genres": "classic-rock",
        "bpm": 148,
        "length": 185,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "I Follow Rivers",
        "genres": "pop",
        "bpm": 110,
        "length": 214,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "Pitbull:Go Girl",
        "genres": "other",
        "bpm": 114.8,
        "length": 230,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Draggin' The Line",
        "genres": "classic-rock",
        "bpm": 115,
        "length": 166,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:I Think We're Alone Now",
        "genres": "pop",
        "bpm": 129.6,
        "length": 130,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Mirage",
        "genres": "pop",
        "bpm": 128.8,
        "length": 165,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Sweet Cherry Wine",
        "genres": "classic-rock",
        "bpm": 106.8,
        "length": 260,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Hanky Panky",
        "genres": "classic-rock",
        "bpm": 125.3,
        "length": 177,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:It's Only Love",
        "genres": "classic-rock",
        "bpm": 139.2,
        "length": 127,
        "gain": -14,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Gettin' Together",
        "genres": "classic-rock",
        "bpm": 139.7,
        "length": 138,
        "gain": -11.2,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Mony Mony",
        "genres": "hard-rock",
        "bpm": 129,
        "length": 174,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Do Something To Me",
        "genres": "classic-rock",
        "bpm": 120,
        "length": 151,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Crimson And Clover",
        "genres": "pop",
        "bpm": 171,
        "length": 209,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Crystal Blue Persuasion",
        "genres": "soul",
        "bpm": 99.9,
        "length": 241,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Ball Of Fire",
        "genres": "classic-rock",
        "bpm": 153,
        "length": 187,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:She",
        "genres": "classic-rock",
        "bpm": 168,
        "length": 121,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Tommy James And The Shondells:Gotta Get Back To You",
        "genres": "classic-rock",
        "bpm": 148,
        "length": 185,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "I'll Be Your Everything",
        "genres": "pop",
        "bpm": 144,
        "length": 247,
        "gain": -10.7,
        "key": "Fmaj"
    },
    {
        "title": "Sheila",
        "genres": "pop",
        "bpm": 130.8,
        "length": 127,
        "gain": -13.6,
        "key": "Emin"
    },
    {
        "title": "Dizzy",
        "genres": "pop",
        "bpm": 101.6,
        "length": 172,
        "gain": -10.8,
        "key": "Emin"
    },
    {
        "title": "Hi-Heel Sneakers",
        "genres": "blues",
        "bpm": 168,
        "length": 169,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "867-5309/Jenny",
        "genres": "pop",
        "bpm": 137,
        "length": 224,
        "gain": -11.1,
        "key": "Emin"
    },
    {
        "title": "The Doxology",
        "genres": "unknown",
        "bpm": 95.7,
        "length": 50,
        "gain": -26.1,
        "key": ""
    },
    {
        "title": "All Gold Everything",
        "genres": "hip-hop",
        "bpm": 99.9,
        "length": 279,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Leaving On A Jet Plane",
        "genres": "other",
        "bpm": 140,
        "length": 191,
        "gain": -13.1,
        "key": "Emaj"
    },
    {
        "title": "Spanish Harlem (Aquella Rosa)",
        "genres": "soul",
        "bpm": 114,
        "length": 186,
        "gain": -14.6,
        "key": "Dmaj"
    },
    {
        "title": "They're Playing Our Song",
        "genres": "unknown",
        "bpm": 123,
        "length": 335,
        "gain": -10.4,
        "key": "Bbmaj"
    },
    {
        "title": "Da Da Da Ich Lieb Dich Nicht Du Liebst Mich Nicht Aha Aha Aha",
        "genres": "other",
        "bpm": 132,
        "length": 392,
        "gain": -18.3,
        "key": ""
    },
    {
        "title": "Da Da Da I Don't Love You You Don't Love Me Aha Aha Aha",
        "genres": "other",
        "bpm": 131,
        "length": 199,
        "gain": -17.3,
        "key": ""
    },
    {
        "title": "Anna",
        "genres": "classic-rock",
        "bpm": 147,
        "length": 210,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Rauch-Haus-Song",
        "genres": "unknown",
        "bpm": 129.604,
        "length": 219,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Wild Thing",
        "genres": "classic-rock",
        "bpm": 125,
        "length": 263,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "Funky Cold Medina",
        "genres": "classic-rock",
        "bpm": 117,
        "length": 248,
        "gain": -18.5,
        "key": ""
    },
    {
        "title": "Mickey",
        "genres": "pop",
        "bpm": 148.2,
        "length": 254,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "You're Makin Me High",
        "genres": "unknown",
        "bpm": 92,
        "length": 268,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "Un-Break My Heart",
        "genres": "unknown",
        "bpm": 110,
        "length": 271,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "How Could An Angel Break My Heart",
        "genres": "unknown",
        "bpm": 82,
        "length": 260,
        "gain": -14.7,
        "key": ""
    },
    {
        "title": "Let It Flow",
        "genres": "unknown",
        "bpm": 168,
        "length": 262,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "You're Makin' Me High",
        "genres": "unknown",
        "bpm": 92,
        "length": 268,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "If You Could Only See",
        "genres": "alternative-rock",
        "bpm": 190,
        "length": 261,
        "gain": -8.8,
        "key": ""
    },
    {
        "title": "You Wanted More",
        "genres": "unknown",
        "bpm": 181.3,
        "length": 233,
        "gain": -8,
        "key": ""
    },
    {
        "title": "She's In Love With The Boy",
        "genres": "country",
        "bpm": 124,
        "length": 245,
        "gain": -9.5,
        "key": "Ebmaj"
    },
    {
        "title": "Wrong Side Of Memphis",
        "genres": "country",
        "bpm": 141,
        "length": 167,
        "gain": -11.2,
        "key": "Dmaj"
    },
    {
        "title": "Walkaway Joe",
        "genres": "country",
        "bpm": 114,
        "length": 260,
        "gain": -13.7,
        "key": "Cmaj"
    },
    {
        "title": "The Song Remembers When",
        "genres": "country",
        "bpm": 159,
        "length": 234,
        "gain": -11.4,
        "key": "Fmaj"
    },
    {
        "title": "Sweet Little Jesus Boy",
        "genres": "unknown",
        "bpm": 113,
        "length": 162,
        "gain": -17.7,
        "key": "Bbmaj"
    },
    {
        "title": "Away In A Manger",
        "genres": "unknown",
        "bpm": 150,
        "length": 157,
        "gain": -15.6,
        "key": "Cmaj"
    },
    {
        "title": "Let It Snow, Let It Snow, Let It Snow",
        "genres": "unknown",
        "bpm": 137,
        "length": 146,
        "gain": null,
        "key": "Dmin"
    },
    {
        "title": "The Christmas Song (Chestnuts Roasting On An Open Fire)",
        "genres": "jazz",
        "bpm": 127,
        "length": 238,
        "gain": null,
        "key": "Amin"
    },
    {
        "title": "Believe Me Baby (I Lied)",
        "genres": "country",
        "bpm": 120,
        "length": 222,
        "gain": -10,
        "key": "Bmin"
    },
    {
        "title": "Everybody Knows",
        "genres": "country",
        "bpm": 98,
        "length": 194,
        "gain": -10.2,
        "key": "E"
    },
    {
        "title": "Silent Night",
        "genres": "unknown",
        "bpm": 72,
        "length": 249,
        "gain": -9.3,
        "key": "Gmaj"
    },
    {
        "title": "How Do I Live",
        "genres": "country",
        "bpm": 126,
        "length": 242,
        "gain": -11,
        "key": "Dmaj"
    },
    {
        "title": "There Goes My Baby",
        "genres": "country",
        "bpm": 108,
        "length": 230,
        "gain": -8.9,
        "key": "Cmaj"
    },
    {
        "title": "Powerful Thing",
        "genres": "country",
        "bpm": 148,
        "length": 176,
        "gain": -8.9,
        "key": "Bmin"
    },
    {
        "title": "Sad Eyes",
        "genres": "pop",
        "bpm": 113.9,
        "length": 251,
        "gain": -12.8,
        "key": "Dbmaj"
    },
    {
        "title": "Seven Year Ache",
        "genres": "country",
        "bpm": 122,
        "length": 215,
        "gain": -10.8,
        "key": "Cmaj"
    },
    {
        "title": "Georgia Rain",
        "genres": "country",
        "bpm": 99,
        "length": 311,
        "gain": -9.5,
        "key": "Bbmaj"
    },
    {
        "title": "Pull Harder On The Strings Of Your Martyr",
        "genres": "metal",
        "bpm": 145,
        "length": 291,
        "gain": -6.9,
        "key": "Dmaj"
    },
    {
        "title": "A Gunshot To The Head Of Trepidation",
        "genres": "metal",
        "bpm": 145,
        "length": 355,
        "gain": -7.4,
        "key": "Dmin"
    },
    {
        "title": "Like Light To The Flies",
        "genres": "metal",
        "bpm": 106,
        "length": 340,
        "gain": -7.4,
        "key": "Bbmaj"
    },
    {
        "title": "Dying In Your Arms",
        "genres": "metal",
        "bpm": 160,
        "length": 173,
        "gain": -7.1,
        "key": "Amin"
    },
    {
        "title": "Entrance Of The Conflagration",
        "genres": "metal",
        "bpm": 99,
        "length": 275,
        "gain": -6.7,
        "key": "Emin"
    },
    {
        "title": "In Waves",
        "genres": "unknown",
        "bpm": 153.1,
        "length": 302,
        "gain": -7.3,
        "key": "Amaj"
    },
    {
        "title": "Built To Fall",
        "genres": "metal",
        "bpm": 144,
        "length": 188,
        "gain": -6.9,
        "key": "Dbmin"
    },
    {
        "title": "Slave New World",
        "genres": "metal",
        "bpm": 96,
        "length": 178,
        "gain": -7.4,
        "key": "Dmaj"
    },
    {
        "title": "Amami Se Vuoi",
        "genres": "unknown",
        "bpm": 87.8,
        "length": 209,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "A Fine Fine Day",
        "genres": "classic-rock",
        "bpm": 112.961,
        "length": 265,
        "gain": -13.4,
        "key": "Fmin"
    },
    {
        "title": "I Did What I Did For Maria",
        "genres": "unknown",
        "bpm": 123,
        "length": 220,
        "gain": -10.9,
        "key": "Gmaj"
    },
    {
        "title": "(Is This The Way To) Amarillo",
        "genres": "pop",
        "bpm": 134,
        "length": 190,
        "gain": -8.7,
        "key": "Amaj"
    },
    {
        "title": "It Had To Be You",
        "genres": "pop",
        "bpm": 99.1457,
        "length": 178,
        "gain": -16.8,
        "key": ""
    },
    {
        "title": "Taking A Chance On Love",
        "genres": "unknown",
        "bpm": 152.56,
        "length": 130,
        "gain": -14.8,
        "key": ""
    },
    {
        "title": "These Foolish Things (Remind Me Of You)",
        "genres": "blues",
        "bpm": 131.25,
        "length": 208,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "I'll Be Seeing You",
        "genres": "unknown",
        "bpm": 143,
        "length": 176,
        "gain": null,
        "key": ""
    },
    {
        "title": "Lost In The Stars",
        "genres": "unknown",
        "bpm": 99.1457,
        "length": 205,
        "gain": -14.8,
        "key": ""
    },
    {
        "title": "Without A Song",
        "genres": "unknown",
        "bpm": 119.837,
        "length": 168,
        "gain": -17,
        "key": ""
    },
    {
        "title": "Lullaby Of Broadway",
        "genres": "unknown",
        "bpm": 180.5,
        "length": 144,
        "gain": -16.9,
        "key": ""
    },
    {
        "title": "Let There Be Love",
        "genres": "unknown",
        "bpm": 173.7,
        "length": 123,
        "gain": -16.4,
        "key": ""
    },
    {
        "title": "Love For Sale",
        "genres": "unknown",
        "bpm": 131.2,
        "length": 188,
        "gain": -16.7,
        "key": ""
    },
    {
        "title": "Blues In The Night",
        "genres": "unknown",
        "bpm": 99.6235,
        "length": 170,
        "gain": -18.5,
        "key": ""
    },
    {
        "title": "Let's Face The Music And Dance",
        "genres": "jazz",
        "bpm": 91.4685,
        "length": 167,
        "gain": -16.8,
        "key": ""
    },
    {
        "title": "Just One Of Those Things",
        "genres": "unknown",
        "bpm": 149.8,
        "length": 123,
        "gain": -18.9,
        "key": ""
    },
    {
        "title": "You Go To My Head",
        "genres": "jazz",
        "bpm": 115.485,
        "length": 160,
        "gain": -18.1,
        "key": ""
    },
    {
        "title": "I Only Have Eyes For You",
        "genres": "soft-rock",
        "bpm": 105.738,
        "length": 133,
        "gain": -16.8,
        "key": ""
    },
    {
        "title": "Begin The Beguine",
        "genres": "jazz",
        "bpm": 118.463,
        "length": 261,
        "gain": -18.8,
        "key": ""
    },
    {
        "title": "Every Time We Say Goodbye",
        "genres": "unknown",
        "bpm": 78,
        "length": 189,
        "gain": -11.8,
        "key": ""
    },
    {
        "title": "The Way You Look Tonight",
        "genres": "pop",
        "bpm": 95.7,
        "length": 184,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "My Foolish Heart",
        "genres": "unknown",
        "bpm": 87,
        "length": 183,
        "gain": null,
        "key": ""
    },
    {
        "title": "Time After Time",
        "genres": "jazz",
        "bpm": 156.6,
        "length": 171,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Blue Moon",
        "genres": "unknown",
        "bpm": 138,
        "length": 131,
        "gain": -23.2,
        "key": ""
    },
    {
        "title": "So Far",
        "genres": "unknown",
        "bpm": 93.75,
        "length": 219,
        "gain": -16.3,
        "key": ""
    },
    {
        "title": "Just In Time",
        "genres": "pop",
        "bpm": 154,
        "length": 114,
        "gain": -17.5,
        "key": ""
    },
    {
        "title": "Ol' Man River",
        "genres": "unknown",
        "bpm": 155,
        "length": 319,
        "gain": -16.3,
        "key": ""
    },
    {
        "title": "Till",
        "genres": "unknown",
        "bpm": 84.2032,
        "length": 176,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Tenderly",
        "genres": "unknown",
        "bpm": 129.199,
        "length": 216,
        "gain": -15.1,
        "key": ""
    },
    {
        "title": "Bewitched, Bothered And Bewildered",
        "genres": "unknown",
        "bpm": 74,
        "length": 154,
        "gain": null,
        "key": ""
    },
    {
        "title": "My Funny Valentine",
        "genres": "unknown",
        "bpm": 118.125,
        "length": 157,
        "gain": -19,
        "key": ""
    },
    {
        "title": "Man That Got Away",
        "genres": "unknown",
        "bpm": 95,
        "length": 233,
        "gain": -18.5,
        "key": ""
    },
    {
        "title": "Sleepin' Bee",
        "genres": "unknown",
        "bpm": 85,
        "length": 203,
        "gain": null,
        "key": ""
    },
    {
        "title": "Street Of Dreams",
        "genres": "jazz",
        "bpm": 91,
        "length": 133,
        "gain": null,
        "key": ""
    },
    {
        "title": "I Left My Heart In San Francisco",
        "genres": "pop",
        "bpm": 129.2,
        "length": 171,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "Once Upon A Time",
        "genres": "unknown",
        "bpm": 152.6,
        "length": 178,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "Candy Kisses",
        "genres": "country",
        "bpm": 125,
        "length": 143,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "The Best Is Yet To Come",
        "genres": "jazz",
        "bpm": 120.888,
        "length": 152,
        "gain": -19.3,
        "key": ""
    },
    {
        "title": "Climb Ev'ry Mountain",
        "genres": "unknown",
        "bpm": 93.1166,
        "length": 141,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "How About You/April In Paris",
        "genres": "jazz",
        "bpm": 129,
        "length": 158,
        "gain": -19.1,
        "key": ""
    },
    {
        "title": "Blue Velvet",
        "genres": "pop",
        "bpm": 131,
        "length": 272,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Rags To Riches",
        "genres": "unknown",
        "bpm": 135,
        "length": 72,
        "gain": -20.3,
        "key": ""
    },
    {
        "title": "Sing You Sinners",
        "genres": "unknown",
        "bpm": 105,
        "length": 121,
        "gain": -18.1,
        "key": ""
    },
    {
        "title": "Speak Low",
        "genres": "unknown",
        "bpm": 135,
        "length": 121,
        "gain": -21.4,
        "key": ""
    },
    {
        "title": "Chicago (That Toddling Town)",
        "genres": "unknown",
        "bpm": 118.8,
        "length": 124,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Pennies From Heaven",
        "genres": "unknown",
        "bpm": 142,
        "length": 136,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Smile",
        "genres": "unknown",
        "bpm": 116,
        "length": 83,
        "gain": -17.9,
        "key": ""
    },
    {
        "title": "I Wanna Be Around",
        "genres": "unknown",
        "bpm": 103,
        "length": 131,
        "gain": -16.5,
        "key": ""
    },
    {
        "title": "This Is All I Ask",
        "genres": "unknown",
        "bpm": 112,
        "length": 193,
        "gain": -15.3,
        "key": ""
    },
    {
        "title": "Young And Foolish",
        "genres": "unknown",
        "bpm": 85,
        "length": 202,
        "gain": -19.6,
        "key": ""
    },
    {
        "title": "Ain't Misbehavin'",
        "genres": "jazz",
        "bpm": 87,
        "length": 161,
        "gain": -15.4,
        "key": ""
    },
    {
        "title": "Who Can I Turn To (When Nobody Needs Me)",
        "genres": "unknown",
        "bpm": 102.1,
        "length": 175,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Between The Devil And The Deep Blue Sea",
        "genres": "unknown",
        "bpm": 87.8,
        "length": 197,
        "gain": -16.9,
        "key": ""
    },
    {
        "title": "Waltz For Debby",
        "genres": "jazz",
        "bpm": 142.6,
        "length": 219,
        "gain": -17.9,
        "key": ""
    },
    {
        "title": "Fly Me To The Moon (In Other Words)",
        "genres": "pop",
        "bpm": 94.2,
        "length": 240,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "How Insensitive",
        "genres": "other",
        "bpm": 109,
        "length": 263,
        "gain": -16.5,
        "key": ""
    },
    {
        "title": "If I Ruled The World",
        "genres": "unknown",
        "bpm": 124,
        "length": 180,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "Sweet Lorraine",
        "genres": "unknown",
        "bpm": 149,
        "length": 218,
        "gain": -17.2,
        "key": ""
    },
    {
        "title": "Girl Talk",
        "genres": "unknown",
        "bpm": 108,
        "length": 191,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "The Shadow Of Your Smile",
        "genres": "unknown",
        "bpm": 112,
        "length": 217,
        "gain": -16.9,
        "key": ""
    },
    {
        "title": "Days Of Wine And Roses",
        "genres": "other",
        "bpm": 100,
        "length": 176,
        "gain": -18.5,
        "key": ""
    },
    {
        "title": "The Trolley Song",
        "genres": "unknown",
        "bpm": 137,
        "length": 154,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "The Very Thought Of You",
        "genres": "unknown",
        "bpm": 81,
        "length": 270,
        "gain": null,
        "key": ""
    },
    {
        "title": "In The Wee Small Hours",
        "genres": "pop",
        "bpm": 103,
        "length": 203,
        "gain": -16.5,
        "key": ""
    },
    {
        "title": "Yesterdays",
        "genres": "jazz",
        "bpm": 107,
        "length": 195,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "On The Sunny Side Of The Street",
        "genres": "unknown",
        "bpm": 120,
        "length": 140,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "I Let A Song Go Out Of My Heart",
        "genres": "unknown",
        "bpm": 119,
        "length": 118,
        "gain": null,
        "key": ""
    },
    {
        "title": "Old Devil Moon",
        "genres": "jazz",
        "bpm": 113,
        "length": 182,
        "gain": null,
        "key": ""
    },
    {
        "title": "Out Of This World",
        "genres": "unknown",
        "bpm": 102,
        "length": 188,
        "gain": null,
        "key": ""
    },
    {
        "title": "Love Is Here To Stay",
        "genres": "unknown",
        "bpm": 163.4,
        "length": 163,
        "gain": -14,
        "key": ""
    },
    {
        "title": "There Will Never Be Another You",
        "genres": "unknown",
        "bpm": 91.1,
        "length": 114,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "My Favorite Things",
        "genres": "unknown",
        "bpm": 139,
        "length": 197,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "Santa Claus Is Coming To Town",
        "genres": "unknown",
        "bpm": 132,
        "length": 172,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Winter Wonderland",
        "genres": "pop",
        "bpm": 115,
        "length": 131,
        "gain": -10.3,
        "key": ""
    },
    {
        "title": "Have Yourself A Merry Little Christmas",
        "genres": "unknown",
        "bpm": 132,
        "length": 182,
        "gain": -14.7,
        "key": ""
    },
    {
        "title": "The Long And Winding Road",
        "genres": "pop",
        "bpm": 132.9,
        "length": 283,
        "gain": -15.9,
        "key": ""
    },
    {
        "title": "Wave",
        "genres": "unknown",
        "bpm": 113.9,
        "length": 277,
        "gain": -18.3,
        "key": ""
    },
    {
        "title": "Make It Easy On Yourself",
        "genres": "blues",
        "bpm": 123.4,
        "length": 272,
        "gain": -17.8,
        "key": ""
    },
    {
        "title": "Come Saturday Morning",
        "genres": "pop",
        "bpm": 130,
        "length": 264,
        "gain": -16.7,
        "key": ""
    },
    {
        "title": "Because Of You",
        "genres": "unknown",
        "bpm": 108.2,
        "length": 177,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "Cold, Cold Heart",
        "genres": "blues",
        "bpm": 99,
        "length": 163,
        "gain": -12,
        "key": ""
    },
    {
        "title": "(Where Do I Begin) Love Story",
        "genres": "unknown",
        "bpm": 140,
        "length": 193,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "Stranger In Paradise",
        "genres": "unknown",
        "bpm": 84,
        "length": 183,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "But Beautiful",
        "genres": "unknown",
        "bpm": 130,
        "length": 216,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "How Do You Keep The Music Playing?",
        "genres": "jazz",
        "bpm": 133,
        "length": 326,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Cheek To Cheek",
        "genres": "unknown",
        "bpm": 134,
        "length": 205,
        "gain": -19.6,
        "key": ""
    },
    {
        "title": "On Green Dolphin Street",
        "genres": "unknown",
        "bpm": 114,
        "length": 240,
        "gain": null,
        "key": ""
    },
    {
        "title": "Just Friends",
        "genres": "jazz",
        "bpm": 117.5,
        "length": 146,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "East Of The Sun (West Of The Moon)",
        "genres": "unknown",
        "bpm": 92,
        "length": 251,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "I Thought About You",
        "genres": "unknown",
        "bpm": 97,
        "length": 176,
        "gain": -15.2,
        "key": ""
    },
    {
        "title": "Night And Day",
        "genres": "unknown",
        "bpm": 111,
        "length": 215,
        "gain": -14.8,
        "key": ""
    },
    {
        "title": "A Nightingale Sang In Berkeley Square",
        "genres": "unknown",
        "bpm": 101,
        "length": 175,
        "gain": -16.4,
        "key": ""
    },
    {
        "title": "I Wished On The Moon",
        "genres": "jazz",
        "bpm": 122,
        "length": 188,
        "gain": -16.7,
        "key": ""
    },
    {
        "title": "Call Me Irresponsible",
        "genres": "unknown",
        "bpm": 108,
        "length": 204,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Last Night When We Were Young",
        "genres": "unknown",
        "bpm": 95,
        "length": 145,
        "gain": -16.3,
        "key": ""
    },
    {
        "title": "Angel Eyes",
        "genres": "unknown",
        "bpm": 93,
        "length": 162,
        "gain": -15.6,
        "key": ""
    },
    {
        "title": "Steppin' Out With My Baby",
        "genres": "jazz",
        "bpm": 170.1,
        "length": 173,
        "gain": -16.7,
        "key": ""
    },
    {
        "title": "Top Hat, White Tie And Tails",
        "genres": "jazz",
        "bpm": 93.5,
        "length": 155,
        "gain": -16.1,
        "key": ""
    },
    {
        "title": "September Song",
        "genres": "unknown",
        "bpm": 131.2,
        "length": 231,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "Moonglow",
        "genres": "unknown",
        "bpm": 110,
        "length": 272,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "People",
        "genres": "unknown",
        "bpm": 80,
        "length": 282,
        "gain": -14,
        "key": ""
    },
    {
        "title": "Somewhere Over The Rainbow",
        "genres": "unknown",
        "bpm": 116,
        "length": 237,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Poor Butterfly",
        "genres": "unknown",
        "bpm": 142,
        "length": 341,
        "gain": null,
        "key": ""
    },
    {
        "title": "Sentimental Journey",
        "genres": "unknown",
        "bpm": 76,
        "length": 208,
        "gain": null,
        "key": ""
    },
    {
        "title": "Moonlight In Vermont",
        "genres": "unknown",
        "bpm": 116,
        "length": 172,
        "gain": -19.5,
        "key": ""
    },
    {
        "title": "God Bless The Child",
        "genres": "jazz",
        "bpm": 76,
        "length": 169,
        "gain": null,
        "key": ""
    },
    {
        "title": "Honeysuckle Rose",
        "genres": "jazz",
        "bpm": 104,
        "length": 175,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Solitude",
        "genres": "jazz",
        "bpm": 89,
        "length": 176,
        "gain": -18.7,
        "key": ""
    },
    {
        "title": "When A Woman Loves A Man",
        "genres": "jazz",
        "bpm": 151,
        "length": 191,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Willow Weep For Me",
        "genres": "unknown",
        "bpm": 157,
        "length": 180,
        "gain": -20.2,
        "key": ""
    },
    {
        "title": "What A Little Moonlight Can Do",
        "genres": "jazz",
        "bpm": 98,
        "length": 165,
        "gain": -17.5,
        "key": ""
    },
    {
        "title": "Ill Wind",
        "genres": "unknown",
        "bpm": 113,
        "length": 184,
        "gain": -18.2,
        "key": ""
    },
    {
        "title": "Good Morning Heartache",
        "genres": "blues",
        "bpm": 120,
        "length": 157,
        "gain": -19.5,
        "key": ""
    },
    {
        "title": "Swinging On A Star",
        "genres": "pop",
        "bpm": 164,
        "length": 125,
        "gain": -16.3,
        "key": ""
    },
    {
        "title": "New York State Of Mind",
        "genres": "pop",
        "bpm": 170,
        "length": 269,
        "gain": -13.8,
        "key": ""
    },
    {
        "title": "Tony Bennett & K.d. Lang:Dream A Little Dream Of Me",
        "genres": "unknown",
        "bpm": 81,
        "length": 233,
        "gain": -13.8,
        "key": "Amin"
    },
    {
        "title": "I Remember You",
        "genres": "unknown",
        "bpm": 121.6,
        "length": 304,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "Silver Bells",
        "genres": "unknown",
        "bpm": 131,
        "length": 195,
        "gain": -13.8,
        "key": ""
    },
    {
        "title": "O Christmas Tree",
        "genres": "unknown",
        "bpm": 108,
        "length": 207,
        "gain": -16.1,
        "key": ""
    },
    {
        "title": "Sting & Tony Bennett:Boulevard Of Broken Dreams",
        "genres": "unknown",
        "bpm": 149,
        "length": 201,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "In The Middle Of An Island",
        "genres": "unknown",
        "bpm": 138.737,
        "length": 130,
        "gain": -14.3,
        "key": ""
    },
    {
        "title": "I Will",
        "genres": "folk-rock",
        "bpm": 112,
        "length": 244,
        "gain": -17.4,
        "key": ""
    },
    {
        "title": "I Can Understand It",
        "genres": "unknown",
        "bpm": 120.2,
        "length": 340,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "Save A Prayer",
        "genres": "pop",
        "bpm": 106,
        "length": 307,
        "gain": -13.4,
        "key": ""
    },
    {
        "title": "Slave To Love",
        "genres": "soft-rock",
        "bpm": 152,
        "length": 236,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "She's Gone",
        "genres": "soul",
        "bpm": 156,
        "length": 297,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "The First Cut Is The Deepest",
        "genres": "classic-rock",
        "bpm": 94.6,
        "length": 216,
        "gain": -13,
        "key": ""
    },
    {
        "title": "Free Fallin'",
        "genres": "alternative-rock",
        "bpm": 183.8,
        "length": 251,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "First Of May",
        "genres": "other",
        "bpm": 136,
        "length": 321,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Spandau Ballet:True",
        "genres": "soul",
        "bpm": 97,
        "length": 344,
        "gain": -12.8,
        "key": "Gmaj"
    },
    {
        "title": "I Can't Make You Love Me",
        "genres": "R&B",
        "bpm": 123.8,
        "length": 288,
        "gain": -17.3,
        "key": ""
    },
    {
        "title": "Polk Salad Annie",
        "genres": "unknown",
        "bpm": 131,
        "length": 223,
        "gain": -11.3,
        "key": "Emaj"
    },
    {
        "title": "Who's Making Love",
        "genres": "soul",
        "bpm": 117,
        "length": 192,
        "gain": -11.3,
        "key": "Emin"
    },
    {
        "title": "Little Green Apples",
        "genres": "soul",
        "bpm": 144,
        "length": 238,
        "gain": -15.9,
        "key": "Cmaj"
    },
    {
        "title": "Look Of Love",
        "genres": "jazz",
        "bpm": 97,
        "length": 198,
        "gain": -14.6,
        "key": "Amin"
    },
    {
        "title": "Rainy Night In Georgia",
        "genres": "soul",
        "bpm": 170,
        "length": 214,
        "gain": -15.2,
        "key": "Dmaj"
    },
    {
        "title": "Hard To Handle",
        "genres": "soul",
        "bpm": 105,
        "length": 173,
        "gain": -14.4,
        "key": "Amaj"
    },
    {
        "title": "Boom Boom",
        "genres": "blues",
        "bpm": 166,
        "length": 472,
        "gain": -14.5,
        "key": "Gbmin"
    },
    {
        "title": "Tomorrow Never Knows",
        "genres": "hard-rock",
        "bpm": 131.7,
        "length": 329,
        "gain": -10,
        "key": ""
    },
    {
        "title": "Burt Bacharach & Tony Middleton:My Little Red Book",
        "genres": "classic-rock",
        "bpm": 161,
        "length": 296,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "Candida",
        "genres": "unknown",
        "bpm": 127,
        "length": 183,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "Knock Three Times",
        "genres": "pop",
        "bpm": 123,
        "length": 177,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Happy Little Pill",
        "genres": "pop",
        "bpm": 92,
        "length": 224,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "Orange Blossom Special",
        "genres": "other",
        "bpm": 145,
        "length": 337,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Antisocial",
        "genres": "hard-rock",
        "bpm": 182,
        "length": 309,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Little Walter",
        "genres": "R&B",
        "bpm": 107,
        "length": 289,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Alicia Keys:Diary",
        "genres": "soul",
        "bpm": 128,
        "length": 284,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Blow The Whistle",
        "genres": "hip-hop",
        "bpm": 100,
        "length": 171,
        "gain": null,
        "key": ""
    },
    {
        "title": "L'Hymne De Nos Campagnes",
        "genres": "other",
        "bpm": 180.5,
        "length": 205,
        "gain": -9.5,
        "key": "Fmaj"
    },
    {
        "title": "Your Love",
        "genres": "pop",
        "bpm": 140,
        "length": 190,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "When You're Looking Like That",
        "genres": "pop",
        "bpm": 140,
        "length": 224,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Summer Of '69",
        "genres": "hard-rock",
        "bpm": 139.2,
        "length": 229,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Here I Go Again",
        "genres": "metal",
        "bpm": 128,
        "length": 217,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Living On A Prayer",
        "genres": "metal",
        "bpm": 136,
        "length": 255,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "China In Your Hand",
        "genres": "pop",
        "bpm": 142,
        "length": 245,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Take On Me",
        "genres": "pop",
        "bpm": 140,
        "length": 285,
        "gain": -7.4,
        "key": ""
    },
    {
        "title": "Fly On The Wings Of Love",
        "genres": "unknown",
        "bpm": 140,
        "length": 239,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Cool On Your Island",
        "genres": "pop",
        "bpm": 126.8,
        "length": 321,
        "gain": -19.4,
        "key": ""
    },
    {
        "title": "Crucify",
        "genres": "alternative-rock",
        "bpm": 166,
        "length": 299,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Silent All These Years",
        "genres": "pop",
        "bpm": 127,
        "length": 249,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Winter",
        "genres": "unknown",
        "bpm": 157,
        "length": 343,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Me And A Gun",
        "genres": "other",
        "bpm": 77,
        "length": 222,
        "gain": -18.3,
        "key": ""
    },
    {
        "title": "Angie",
        "genres": "soft-rock",
        "bpm": 135.6,
        "length": 265,
        "gain": -17.2,
        "key": ""
    },
    {
        "title": "Smells Like Teen Spirit",
        "genres": "alternative-rock",
        "bpm": 87,
        "length": 195,
        "gain": -14.3,
        "key": ""
    },
    {
        "title": "God",
        "genres": "alternative-rock",
        "bpm": 151,
        "length": 234,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "Cornflake Girl",
        "genres": "alternative-rock",
        "bpm": 133,
        "length": 305,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Professional Widow",
        "genres": "alternative-rock",
        "bpm": 138,
        "length": 271,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Caught A Lite Sneeze",
        "genres": "alternative-rock",
        "bpm": 158,
        "length": 265,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Talula",
        "genres": "alternative-rock",
        "bpm": 169,
        "length": 248,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Putting The Damage On",
        "genres": "pop",
        "bpm": 107,
        "length": 310,
        "gain": -17.5,
        "key": ""
    },
    {
        "title": "This Old Man",
        "genres": "unknown",
        "bpm": 140,
        "length": 105,
        "gain": -16.1,
        "key": ""
    },
    {
        "title": "Amazing Grace",
        "genres": "unknown",
        "bpm": 133,
        "length": 409,
        "gain": -17.1,
        "key": ""
    },
    {
        "title": "Raspberry Swirl",
        "genres": "other",
        "bpm": 128,
        "length": 221,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Bliss",
        "genres": "alternative-rock",
        "bpm": 114,
        "length": 222,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Dātura",
        "genres": "alternative-rock",
        "bpm": 122,
        "length": 506,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "1000 Oceans",
        "genres": "alternative-rock",
        "bpm": 136,
        "length": 258,
        "gain": -13,
        "key": ""
    },
    {
        "title": "New Age",
        "genres": "unknown",
        "bpm": 149,
        "length": 276,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "Strange Little Girl",
        "genres": "unknown",
        "bpm": 119,
        "length": 229,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Enjoy The Silence",
        "genres": "pop",
        "bpm": 161,
        "length": 249,
        "gain": -15.9,
        "key": ""
    },
    {
        "title": "I'm Not In Love",
        "genres": "soft-rock",
        "bpm": 136,
        "length": 339,
        "gain": -16.2,
        "key": ""
    },
    {
        "title": "I Don't Like Mondays",
        "genres": "pop",
        "bpm": 110,
        "length": 260,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Happiness Is A Warm Gun",
        "genres": "blues",
        "bpm": 136,
        "length": 595,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Raining Blood",
        "genres": "metal",
        "bpm": 146,
        "length": 382,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "A Sorta Fairytale",
        "genres": "pop",
        "bpm": 153,
        "length": 330,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Don't Make Me Come To Vegas",
        "genres": "other",
        "bpm": 97,
        "length": 291,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "Taxi Ride",
        "genres": "alternative-rock",
        "bpm": 166,
        "length": 240,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Sweet The Sting",
        "genres": "soul",
        "bpm": 89.9,
        "length": 254,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Sleeps With Butterflies",
        "genres": "pop",
        "bpm": 149.8,
        "length": 215,
        "gain": -11.8,
        "key": ""
    },
    {
        "title": "Home On The Range (Cherokee Edition)",
        "genres": "unknown",
        "bpm": 122,
        "length": 321,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "Big Wheel",
        "genres": "alternative-rock",
        "bpm": 94,
        "length": 198,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "Bouncing Off Clouds",
        "genres": "alternative-rock",
        "bpm": 124,
        "length": 248,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "What Child, Nowell",
        "genres": "unknown",
        "bpm": 115,
        "length": 225,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "Star Of Wonder",
        "genres": "unknown",
        "bpm": 137,
        "length": 230,
        "gain": -11.2,
        "key": ""
    },
    {
        "title": "Holly, Ivy And Rose",
        "genres": "unknown",
        "bpm": 128,
        "length": 284,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Harps Of Gold",
        "genres": "unknown",
        "bpm": 95,
        "length": 190,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Jeanette, Isabella",
        "genres": "unknown",
        "bpm": 140,
        "length": 268,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Emmanuel",
        "genres": "unknown",
        "bpm": 128,
        "length": 179,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "Comfort And Joy",
        "genres": "unknown",
        "bpm": 162,
        "length": 236,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Stille Nacht, Heilige Nacht (Silent Night, Holy Night)",
        "genres": "unknown",
        "bpm": 162,
        "length": 219,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Good King Wenceslas",
        "genres": "unknown",
        "bpm": 138,
        "length": 333,
        "gain": null,
        "key": ""
    },
    {
        "title": "Famous Blue Raincoat",
        "genres": "other",
        "bpm": 135,
        "length": 339,
        "gain": -19.6,
        "key": ""
    },
    {
        "title": "You Belong To Me",
        "genres": "unknown",
        "bpm": 108,
        "length": 182,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "BT:Blue Skies",
        "genres": "other",
        "bpm": 126,
        "length": 306,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Humpty Dumpty",
        "genres": "unknown",
        "bpm": 114,
        "length": 171,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Como Una Paloma Herida",
        "genres": "pop",
        "bpm": 124.9,
        "length": 152,
        "gain": -9.7,
        "key": ""
    },
    {
        "title": "Vienna",
        "genres": "pop",
        "bpm": 160,
        "length": 275,
        "gain": -12.7,
        "key": "Amin"
    },
    {
        "title": "Dancing With Tears In My Eyes",
        "genres": "pop",
        "bpm": 144,
        "length": 244,
        "gain": -12,
        "key": "Gbmaj"
    },
    {
        "title": "Can't You See",
        "genres": "blues",
        "bpm": 86,
        "length": 277,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "What About Us",
        "genres": "R&B",
        "bpm": 178,
        "length": 151,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "I'll Supply The Love",
        "genres": "hard-rock",
        "bpm": 125,
        "length": 224,
        "gain": -11.8,
        "key": ""
    },
    {
        "title": "Georgy Porgy",
        "genres": "disco",
        "bpm": 97,
        "length": 248,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Hold The Line",
        "genres": "hard-rock",
        "bpm": 95.9,
        "length": 236,
        "gain": -16.2,
        "key": ""
    },
    {
        "title": "99",
        "genres": "soft-rock",
        "bpm": 178,
        "length": 312,
        "gain": -15.8,
        "key": ""
    },
    {
        "title": "Rosanna",
        "genres": "blues",
        "bpm": 166,
        "length": 331,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Make Believe",
        "genres": "unknown",
        "bpm": 141,
        "length": 223,
        "gain": -16.5,
        "key": ""
    },
    {
        "title": "I Won't Hold You Back",
        "genres": "soft-rock",
        "bpm": 102,
        "length": 293,
        "gain": -15.7,
        "key": ""
    },
    {
        "title": "Africa",
        "genres": "soft-rock",
        "bpm": 92,
        "length": 295,
        "gain": -19.7,
        "key": ""
    },
    {
        "title": "Stranger In Town",
        "genres": "other",
        "bpm": 154,
        "length": 288,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "I'll Be Over You",
        "genres": "soft-rock",
        "bpm": 174.446,
        "length": 149,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "Pamela",
        "genres": "jazz",
        "bpm": 97.3,
        "length": 310,
        "gain": -20.8,
        "key": ""
    },
    {
        "title": "Stop Loving You",
        "genres": "soft-rock",
        "bpm": 102,
        "length": 270,
        "gain": -12,
        "key": ""
    },
    {
        "title": "2 Hearts",
        "genres": "hard-rock",
        "bpm": 115,
        "length": 313,
        "gain": -11,
        "key": ""
    },
    {
        "title": "Miss Sun",
        "genres": "unknown",
        "bpm": 100.1,
        "length": 304,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "Could You Be Loved",
        "genres": "disco",
        "bpm": 103.4,
        "length": 230,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "While My Guitar Gently Weeps",
        "genres": "classic-rock",
        "bpm": 109.086,
        "length": 345,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Bottom Of Your Soul",
        "genres": "soft-rock",
        "bpm": 189.65,
        "length": 424,
        "gain": -9.7,
        "key": ""
    },
    {
        "title": "I Got Erection",
        "genres": "metal",
        "bpm": 147,
        "length": 126,
        "gain": -11.2,
        "key": "Bmin"
    },
    {
        "title": "Suffragette City",
        "genres": "hard-rock",
        "bpm": 148,
        "length": 173,
        "gain": -9.1,
        "key": "Amaj"
    },
    {
        "title": "Ti Amo",
        "genres": "pop",
        "bpm": 186,
        "length": 242,
        "gain": -9.3,
        "key": "Amaj"
    },
    {
        "title": "Gloria",
        "genres": "disco",
        "bpm": 131,
        "length": 302,
        "gain": -18.7,
        "key": "Emaj"
    },
    {
        "title": "Gloria (Italiano)",
        "genres": "disco",
        "bpm": 131,
        "length": 262,
        "gain": -6.4,
        "key": "Emaj"
    },
    {
        "title": "So Freakin' Tight",
        "genres": "other",
        "bpm": 122,
        "length": 344,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Habits (Stay High)",
        "genres": "pop",
        "bpm": 120,
        "length": 258,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Talking Body",
        "genres": "pop",
        "bpm": 119,
        "length": 238,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Alesso:Heroes (We Could Be)",
        "genres": "other",
        "bpm": 126,
        "length": 209,
        "gain": -7,
        "key": ""
    },
    {
        "title": "So Very Hard To Go",
        "genres": "blues",
        "bpm": 95,
        "length": 217,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Pancho And Lefty",
        "genres": "country",
        "bpm": 154,
        "length": 229,
        "gain": -13.6,
        "key": "Dmaj"
    },
    {
        "title": "Follow Me",
        "genres": "country",
        "bpm": 104,
        "length": 218,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "In A Little While",
        "genres": "country",
        "bpm": 102,
        "length": 249,
        "gain": -6.7,
        "key": ""
    },
    {
        "title": "Undercover:Baker Street",
        "genres": "jazz",
        "bpm": 123,
        "length": 250,
        "gain": -14.8,
        "key": ""
    },
    {
        "title": "I Melt With You",
        "genres": "other",
        "bpm": 146,
        "length": 240,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Pearl's Girl",
        "genres": "other",
        "bpm": 149.796,
        "length": 496,
        "gain": -11.2,
        "key": ""
    },
    {
        "title": "Crocodile",
        "genres": "unknown",
        "bpm": 124,
        "length": 390,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "Born Slippy",
        "genres": "other",
        "bpm": 140,
        "length": 456,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Wie Wir Waren",
        "genres": "pop",
        "bpm": 119,
        "length": 220,
        "gain": -9,
        "key": "Abmaj"
    },
    {
        "title": "Wie Wir Waren (Demoversion)",
        "genres": "pop",
        "bpm": 119,
        "length": 220,
        "gain": -9,
        "key": "Abmaj"
    },
    {
        "title": "In The Air",
        "genres": "other",
        "bpm": 128,
        "length": 196,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Staring At The Sun",
        "genres": "classic-rock",
        "bpm": 119.837,
        "length": 241,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Dreams",
        "genres": "classic-rock",
        "bpm": 129.6,
        "length": 309,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "King Eternal",
        "genres": "classic-rock",
        "bpm": 134.7,
        "length": 268,
        "gain": -7.9,
        "key": ""
    },
    {
        "title": "Ambulance",
        "genres": "classic-rock",
        "bpm": 93.3,
        "length": 294,
        "gain": -15.8,
        "key": ""
    },
    {
        "title": "Poppy",
        "genres": "classic-rock",
        "bpm": 114.8,
        "length": 367,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Don't Love You",
        "genres": "classic-rock",
        "bpm": 99.9,
        "length": 332,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Bomb Yourself",
        "genres": "classic-rock",
        "bpm": 130,
        "length": 332,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Wear You Out",
        "genres": "classic-rock",
        "bpm": 119.8,
        "length": 440,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "Wolf Like Me",
        "genres": "classic-rock",
        "bpm": 175,
        "length": 277,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Crying",
        "genres": "alternative-rock",
        "bpm": 113.9,
        "length": 251,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Dancing Choose",
        "genres": "alternative-rock",
        "bpm": 102.8,
        "length": 176,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "Golden Age",
        "genres": "classic-rock",
        "bpm": 110,
        "length": 252,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "DLZ",
        "genres": "alternative-rock",
        "bpm": 175.9,
        "length": 229,
        "gain": -8.1,
        "key": ""
    },
    {
        "title": "Lover's Day",
        "genres": "alternative-rock",
        "bpm": 119.8,
        "length": 354,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "I Do!!",
        "genres": "R&B",
        "bpm": 99,
        "length": 288,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Life",
        "genres": "pop",
        "bpm": 136,
        "length": 183,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Swing",
        "genres": "country",
        "bpm": 107,
        "length": 216,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Muddy Water",
        "genres": "country",
        "bpm": 130.8,
        "length": 234,
        "gain": -8.3,
        "key": "Gmaj"
    },
    {
        "title": "Oops (Oh My)",
        "genres": "soul",
        "bpm": 159,
        "length": 237,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "Guns For Hands",
        "genres": "pop",
        "bpm": 130,
        "length": 277,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "Holding On To You",
        "genres": "hip-hop",
        "bpm": 179,
        "length": 263,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Stressed Out",
        "genres": "hip-hop",
        "bpm": 170,
        "length": 202,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Fairly Local",
        "genres": "hip-hop",
        "bpm": 114,
        "length": 207,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Lane Boy",
        "genres": "other",
        "bpm": 160,
        "length": 253,
        "gain": -9,
        "key": ""
    },
    {
        "title": "They Don't Know",
        "genres": "pop",
        "bpm": 113,
        "length": 179,
        "gain": -13.4,
        "key": ""
    },
    {
        "title": "Control",
        "genres": "unknown",
        "bpm": 140,
        "length": 432,
        "gain": -10.9,
        "key": "Fmaj"
    },
    {
        "title": "Fallen Angel",
        "genres": "unknown",
        "bpm": 133,
        "length": 299,
        "gain": -12.2,
        "key": "Bmin"
    },
    {
        "title": "Woki Mit Deim Popo",
        "genres": "hip-hop",
        "bpm": 120,
        "length": 177,
        "gain": -6.6,
        "key": ""
    },
    {
        "title": "Holdin' Heaven",
        "genres": "country",
        "bpm": 189.7,
        "length": 151,
        "gain": -12.7,
        "key": "Fmaj"
    },
    {
        "title": "Lifestyles Of The Not So Rich And Famous",
        "genres": "country",
        "bpm": 138,
        "length": 172,
        "gain": -14.3,
        "key": "B"
    },
    {
        "title": "Watermelon Crawl",
        "genres": "country",
        "bpm": 136.9,
        "length": 183,
        "gain": -14.2,
        "key": "Dmin"
    },
    {
        "title": "The Keeper Of The Stars",
        "genres": "country",
        "bpm": 78,
        "length": 247,
        "gain": -15.9,
        "key": "Dmaj"
    },
    {
        "title": "Big Love",
        "genres": "country",
        "bpm": 114.5,
        "length": 219,
        "gain": -11.2,
        "key": "Ebmin"
    },
    {
        "title": "Put Your Hand In Mine",
        "genres": "country",
        "bpm": 146.1,
        "length": 272,
        "gain": -11.9,
        "key": "Fmaj"
    },
    {
        "title": "Just Let Me Be In Love",
        "genres": "country",
        "bpm": 96,
        "length": 226,
        "gain": -11.2,
        "key": "Dmin"
    },
    {
        "title": "Ten Rounds With Jose Cuervo",
        "genres": "country",
        "bpm": 126,
        "length": 182,
        "gain": -11.5,
        "key": "Dmaj"
    },
    {
        "title": "Drinkin' Bone",
        "genres": "country",
        "bpm": 110,
        "length": 132,
        "gain": -9.1,
        "key": "Fmaj"
    },
    {
        "title": "The Truth About Men",
        "genres": "country",
        "bpm": 146,
        "length": 176,
        "gain": -8.9,
        "key": "Emin"
    },
    {
        "title": "Making Memories Of Us",
        "genres": "country",
        "bpm": 107,
        "length": 224,
        "gain": -10.2,
        "key": "Gbmaj"
    },
    {
        "title": "Come, Thou Fount Of Every Blessing",
        "genres": "unknown",
        "bpm": 122,
        "length": 90,
        "gain": -19.7,
        "key": "Dmaj"
    },
    {
        "title": "Talkin' Bout A Revolution",
        "genres": "other",
        "bpm": 119,
        "length": 161,
        "gain": -11.2,
        "key": "Emin"
    },
    {
        "title": "Fast Car",
        "genres": "pop",
        "bpm": 103,
        "length": 296,
        "gain": -20.3,
        "key": "Gbmin"
    },
    {
        "title": "Baby Can I Hold You",
        "genres": "pop",
        "bpm": 147,
        "length": 193,
        "gain": -15.5,
        "key": "Dmaj"
    },
    {
        "title": "Give Me One Reason",
        "genres": "blues",
        "bpm": 100,
        "length": 268,
        "gain": -14.2,
        "key": "Emin"
    },
    {
        "title": "Runnin' Behind",
        "genres": "country",
        "bpm": 144,
        "length": 174,
        "gain": -12.3,
        "key": "Emaj"
    },
    {
        "title": "Somebody Paints The Wall",
        "genres": "country",
        "bpm": 161,
        "length": 195,
        "gain": -12.7,
        "key": "Amaj"
    },
    {
        "title": "Today's Lonely Fool",
        "genres": "country",
        "bpm": 160,
        "length": 229,
        "gain": -10.9,
        "key": "Dmaj"
    },
    {
        "title": "Can't Break It To My Heart",
        "genres": "country",
        "bpm": 136,
        "length": 174,
        "gain": -11.3,
        "key": "Fmaj"
    },
    {
        "title": "Alibis",
        "genres": "country",
        "bpm": 107,
        "length": 182,
        "gain": -16.1,
        "key": "Emaj"
    },
    {
        "title": "If The Good Die Young",
        "genres": "country",
        "bpm": 156,
        "length": 147,
        "gain": -11.6,
        "key": "Emin"
    },
    {
        "title": "I See It Now",
        "genres": "country",
        "bpm": 91,
        "length": 216,
        "gain": -11.1,
        "key": "Fmaj"
    },
    {
        "title": "If The World Had A Front Porch",
        "genres": "country",
        "bpm": 162,
        "length": 185,
        "gain": -13.3,
        "key": "Fmaj"
    },
    {
        "title": "Dear Mr. Fantasy",
        "genres": "blues",
        "bpm": 163,
        "length": 342,
        "gain": -12,
        "key": "Amaj"
    },
    {
        "title": "Coloured Rain",
        "genres": "classic-rock",
        "bpm": 92,
        "length": 163,
        "gain": -12.6,
        "key": "Fmaj"
    },
    {
        "title": "Paper Sun",
        "genres": "pop",
        "bpm": 133,
        "length": 213,
        "gain": -11.8,
        "key": "Fmaj"
    },
    {
        "title": "Hole In My Shoe",
        "genres": "pop",
        "bpm": 101,
        "length": 181,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Feelin' Alright?",
        "genres": "folk-rock",
        "bpm": 190,
        "length": 258,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "John Barleycorn",
        "genres": "unknown",
        "bpm": 166,
        "length": 382,
        "gain": -13.6,
        "key": ""
    },
    {
        "title": "Gimme Some Lovin'",
        "genres": "soul",
        "bpm": 129,
        "length": 542,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "The Low Spark Of High Heeled Boys",
        "genres": "jazz",
        "bpm": 106,
        "length": 704,
        "gain": -10.5,
        "key": "Bmin"
    },
    {
        "title": "Slow Jamz",
        "genres": "R&B",
        "bpm": 145,
        "length": 212,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Overnight Celebrity",
        "genres": "hip-hop",
        "bpm": 134,
        "length": 233,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Hope",
        "genres": "R&B",
        "bpm": 107,
        "length": 254,
        "gain": -10.2,
        "key": "Bmin"
    },
    {
        "title": "Rabbit In Your Headlights",
        "genres": "other",
        "bpm": 149,
        "length": 377,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "We're Not Gonna Take It",
        "genres": "metal",
        "bpm": 148,
        "length": 219,
        "gain": -10.1,
        "key": "Amaj"
    },
    {
        "title": "I Wanna Rock",
        "genres": "metal",
        "bpm": 106,
        "length": 185,
        "gain": -6.4,
        "key": "A"
    },
    {
        "title": "I Saw Mommy Kissing Santa Claus",
        "genres": "unknown",
        "bpm": 142.1,
        "length": 219,
        "gain": -9.4,
        "key": "Abmaj"
    },
    {
        "title": "Dappens",
        "genres": "lo-fi",
        "bpm": 185.4,
        "length": 387,
        "gain": -15.5,
        "key": "Fmaj"
    },
    {
        "title": "Don't Want No Woman Who Stays Out All Night Long",
        "genres": "lo-fi",
        "bpm": 162.8,
        "length": 158,
        "gain": -9.9,
        "key": "Dmin"
    },
    {
        "title": "Seems Like Home To Me",
        "genres": "lo-fi",
        "bpm": 114.8,
        "length": 227,
        "gain": -8.1,
        "key": "Bmin"
    },
    {
        "title": "Lady",
        "genres": "lo-fi",
        "bpm": 123,
        "length": 342,
        "gain": -10.4,
        "key": "Emin"
    },
    {
        "title": "Up The Country",
        "genres": "lo-fi",
        "bpm": 116.1,
        "length": 367,
        "gain": -10.4,
        "key": "Cmaj"
    },
    {
        "title": "All Your Faithless Loyalties",
        "genres": "lo-fi",
        "bpm": 136,
        "length": 317,
        "gain": -15,
        "key": "Amaj"
    },
    {
        "title": "Linger On",
        "genres": "lo-fi",
        "bpm": 91.3,
        "length": 477,
        "gain": -8.6,
        "key": "Cmaj"
    },
    {
        "title": "The Deader",
        "genres": "lo-fi",
        "bpm": 167.4,
        "length": 295,
        "gain": -9.2,
        "key": "Cmaj"
    },
    {
        "title": "Miss Meri",
        "genres": "lo-fi",
        "bpm": 157.8,
        "length": 198,
        "gain": -8.4,
        "key": "Bmin"
    },
    {
        "title": "The Hand That Held Me Down",
        "genres": "lo-fi",
        "bpm": 135.6,
        "length": 332,
        "gain": -8.4,
        "key": "Dbmin"
    },
    {
        "title": "Trembling Of The Rose",
        "genres": "lo-fi",
        "bpm": 86.5,
        "length": 312,
        "gain": -14.5,
        "key": "Gmaj"
    },
    {
        "title": "Reflections Of The Marionette",
        "genres": "lo-fi",
        "bpm": 117.8,
        "length": 342,
        "gain": -9.6,
        "key": "Gbmin"
    },
    {
        "title": "Ribbons Round My Tongue",
        "genres": "lo-fi",
        "bpm": 89.9,
        "length": 306,
        "gain": -13.8,
        "key": "Emaj"
    },
    {
        "title": "Fly Low Carrion Crow",
        "genres": "lo-fi",
        "bpm": 94.8,
        "length": 236,
        "gain": -12.3,
        "key": "Gmin"
    },
    {
        "title": "My Baby's Gone",
        "genres": "lo-fi",
        "bpm": 175.2,
        "length": 355,
        "gain": -9.9,
        "key": "Bmaj"
    },
    {
        "title": "Something Good Can Work",
        "genres": "pop",
        "bpm": 119,
        "length": 165,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "I Can Talk",
        "genres": "unknown",
        "bpm": 162.8,
        "length": 175,
        "gain": -7,
        "key": ""
    },
    {
        "title": "Undercover Martyn",
        "genres": "pop",
        "bpm": 159.6,
        "length": 166,
        "gain": -7.5,
        "key": ""
    },
    {
        "title": "What You Know",
        "genres": "classic-rock",
        "bpm": 138.7,
        "length": 189,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "Next Year",
        "genres": "pop",
        "bpm": 127.6,
        "length": 251,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Sun",
        "genres": "pop",
        "bpm": 97,
        "length": 187,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Sleep Alone",
        "genres": "unknown",
        "bpm": 148.2,
        "length": 236,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Changing Of The Seasons",
        "genres": "pop",
        "bpm": 130,
        "length": 222,
        "gain": -7,
        "key": ""
    },
    {
        "title": "Seein' Red",
        "genres": "alternative-rock",
        "bpm": 102,
        "length": 227,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Please Come Home For Christmas",
        "genres": "blues",
        "bpm": 121.243,
        "length": 122,
        "gain": -5.4,
        "key": ""
    },
    {
        "title": "Friendship To Last",
        "genres": "unknown",
        "bpm": 156,
        "length": 193,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "Paranoid",
        "genres": "R&B",
        "bpm": 97.5,
        "length": 216,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Drop That Kitty",
        "genres": "hip-hop",
        "bpm": 106,
        "length": 216,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Turn Down For What",
        "genres": "other",
        "bpm": 99.9,
        "length": 221,
        "gain": -6.8,
        "key": ""
    },
    {
        "title": "You Can Leave Your Hat On",
        "genres": "classic-rock",
        "bpm": 87.8,
        "length": 279,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Rack City",
        "genres": "hip-hop",
        "bpm": 98,
        "length": 208,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "Make It Nasty",
        "genres": "hip-hop",
        "bpm": 195,
        "length": 186,
        "gain": -20,
        "key": ""
    },
    {
        "title": "Faded",
        "genres": "hip-hop",
        "bpm": 95,
        "length": 213,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Far Away",
        "genres": "pop",
        "bpm": 92,
        "length": 207,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Still Got It",
        "genres": "hip-hop",
        "bpm": 95,
        "length": 223,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Hookah",
        "genres": "hip-hop",
        "bpm": 95,
        "length": 202,
        "gain": -8.8,
        "key": ""
    },
    {
        "title": "Rändajad",
        "genres": "pop",
        "bpm": 123.8,
        "length": 180,
        "gain": -9.3,
        "key": "Fmaj"
    },
    {
        "title": "Sanomi",
        "genres": "other",
        "bpm": 170,
        "length": 180,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Cantaloop (Flip Fantasia)",
        "genres": "jazz",
        "bpm": 115,
        "length": 279,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "We Are The World",
        "genres": "pop",
        "bpm": 145.1,
        "length": 427,
        "gain": -18.7,
        "key": ""
    },
    {
        "title": "Redneck Crazy",
        "genres": "country",
        "bpm": 146.1,
        "length": 216,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Whiskey In My Water",
        "genres": "country",
        "bpm": 153.7,
        "length": 188,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Can U Get Wit It",
        "genres": "soul",
        "bpm": 124,
        "length": 295,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "Think Of You",
        "genres": "soul",
        "bpm": 93,
        "length": 229,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "The Many Ways",
        "genres": "R&B",
        "bpm": 153,
        "length": 343,
        "gain": -13,
        "key": ""
    },
    {
        "title": "You Make Me Wanna...",
        "genres": "unknown",
        "bpm": 164,
        "length": 220,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Nice & Slow",
        "genres": "soul",
        "bpm": 122,
        "length": 227,
        "gain": -15.2,
        "key": ""
    },
    {
        "title": "My Way",
        "genres": "R&B",
        "bpm": 90,
        "length": 214,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Bedtime",
        "genres": "R&B",
        "bpm": 159,
        "length": 285,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "U Remind Me",
        "genres": "R&B",
        "bpm": 94,
        "length": 266,
        "gain": -10.3,
        "key": ""
    },
    {
        "title": "U Got It Bad",
        "genres": "R&B",
        "bpm": 123,
        "length": 247,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Pop Ya Collar",
        "genres": "R&B",
        "bpm": 107,
        "length": 219,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "U-Turn",
        "genres": "blues",
        "bpm": 182,
        "length": 189,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Yeah!",
        "genres": "hip-hop",
        "bpm": 104,
        "length": 250,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Confessions Part II",
        "genres": "R&B",
        "bpm": 137,
        "length": 211,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Burn",
        "genres": "R&B",
        "bpm": 119,
        "length": 256,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Caught Up",
        "genres": "R&B",
        "bpm": 110,
        "length": 224,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "My Boo",
        "genres": "soul",
        "bpm": 86,
        "length": 223,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Love In This Club",
        "genres": "R&B",
        "bpm": 139,
        "length": 309,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Trading Places",
        "genres": "R&B",
        "bpm": 146,
        "length": 268,
        "gain": -10.3,
        "key": ""
    },
    {
        "title": "Moving Mountains",
        "genres": "R&B",
        "bpm": 115.8,
        "length": 301,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Lil Freak",
        "genres": "blues",
        "bpm": 140.2,
        "length": 234,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Papers",
        "genres": "R&B",
        "bpm": 119.8,
        "length": 260,
        "gain": -10,
        "key": ""
    },
    {
        "title": "More",
        "genres": "other",
        "bpm": 124.9,
        "length": 219,
        "gain": -6.7,
        "key": ""
    },
    {
        "title": "DJ Got Us Fallin' In Love",
        "genres": "pop",
        "bpm": 119,
        "length": 222,
        "gain": -6.7,
        "key": ""
    },
    {
        "title": "Hot Tottie",
        "genres": "R&B",
        "bpm": 175.2,
        "length": 299,
        "gain": -6.9,
        "key": ""
    },
    {
        "title": "Enrique Iglesias:Dirty Dancer",
        "genres": "pop",
        "bpm": 132,
        "length": 245,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Scream",
        "genres": "unknown",
        "bpm": 128,
        "length": 235,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Climax",
        "genres": "other",
        "bpm": 136,
        "length": 233,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Lemme See",
        "genres": "unknown",
        "bpm": 154,
        "length": 252,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Numb",
        "genres": "unknown",
        "bpm": 124,
        "length": 225,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Euphoria",
        "genres": "unknown",
        "bpm": 128,
        "length": 260,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "David Guetta:Without You",
        "genres": "unknown",
        "bpm": 128,
        "length": 225,
        "gain": -16.2,
        "key": ""
    },
    {
        "title": "Good Kisser",
        "genres": "R&B",
        "bpm": 97,
        "length": 236,
        "gain": -10,
        "key": ""
    },
    {
        "title": "I Don't Mind",
        "genres": "R&B",
        "bpm": 113,
        "length": 251,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Justin Bieber:The Christmas Song (Chestnuts Roasting On an Open Fire)",
        "genres": "jazz",
        "bpm": 103,
        "length": 215,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Enrique Iglesias & Usher:Dirty Dancer",
        "genres": "pop",
        "bpm": 132,
        "length": 245,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Call Me A Mack",
        "genres": "blues",
        "bpm": 91,
        "length": 246,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "DJ Got Us Falling In Love",
        "genres": "pop",
        "bpm": 110,
        "length": 244,
        "gain": -21.9,
        "key": ""
    },
    {
        "title": "Yonkers",
        "genres": "hip-hop",
        "bpm": 78.9,
        "length": 251,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Domo23",
        "genres": "hip-hop",
        "bpm": 132.9,
        "length": 161,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Christian Woman",
        "genres": "metal",
        "bpm": 89,
        "length": 538,
        "gain": -12.2,
        "key": "Bmin"
    },
    {
        "title": "Black No. 1 (Little Miss Scare-All)",
        "genres": "metal",
        "bpm": 107,
        "length": 675,
        "gain": -12.5,
        "key": "Abmaj"
    },
    {
        "title": "Summer Breeze",
        "genres": "soul",
        "bpm": 126,
        "length": 289,
        "gain": -11.8,
        "key": "Amaj"
    },
    {
        "title": "Cinnamon Girl",
        "genres": "hard-rock",
        "bpm": 98,
        "length": 235,
        "gain": -9.2,
        "key": "Fmaj"
    },
    {
        "title": "Day Tripper",
        "genres": "classic-rock",
        "bpm": 107,
        "length": 422,
        "gain": -9,
        "key": "B"
    },
    {
        "title": "Black Sabbath (From The Satanic Perspective)",
        "genres": "metal",
        "bpm": 94,
        "length": 464,
        "gain": -13.5,
        "key": "Amaj"
    },
    {
        "title": "Do Ya",
        "genres": "hard-rock",
        "bpm": 119,
        "length": 260,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "Love Is The Answer",
        "genres": "soft-rock",
        "bpm": 99,
        "length": 257,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Get Silly",
        "genres": "other",
        "bpm": 149,
        "length": 228,
        "gain": -8.8,
        "key": ""
    },
    {
        "title": "Wobble (Skit)",
        "genres": "hip-hop",
        "bpm": 142,
        "length": 25,
        "gain": -16.9,
        "key": ""
    },
    {
        "title": "Wobble",
        "genres": "hip-hop",
        "bpm": 95,
        "length": 323,
        "gain": -6.3,
        "key": ""
    },
    {
        "title": "Can I Change My Mind",
        "genres": "soul",
        "bpm": 101.3,
        "length": 174,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Turn Back The Hands Of Time",
        "genres": "soul",
        "bpm": 118,
        "length": 159,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Ain't No Sunshine",
        "genres": "soul",
        "bpm": 111.1,
        "length": 141,
        "gain": -11.4,
        "key": "Amin"
    },
    {
        "title": "Eleanor Rigby",
        "genres": "pop",
        "bpm": 109.4,
        "length": 261,
        "gain": -11.8,
        "key": ""
    },
    {
        "title": "Ormurin Langi",
        "genres": "unknown",
        "bpm": 119,
        "length": 353,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "The Wild Rover",
        "genres": "pop",
        "bpm": 92,
        "length": 252,
        "gain": null,
        "key": ""
    },
    {
        "title": "Lokka Táttur",
        "genres": "unknown",
        "bpm": 160,
        "length": 364,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Stargazer",
        "genres": "metal",
        "bpm": 92,
        "length": 379,
        "gain": null,
        "key": ""
    },
    {
        "title": "Accept:Balls To The Wall",
        "genres": "metal",
        "bpm": 118.1,
        "length": 343,
        "gain": -10.9,
        "key": "E"
    },
    {
        "title": "Accept:Fast As A Shark",
        "genres": "metal",
        "bpm": 140,
        "length": 234,
        "gain": -15.7,
        "key": "Emin"
    },
    {
        "title": "Little Altar Boy",
        "genres": "unknown",
        "bpm": 122,
        "length": 197,
        "gain": -15,
        "key": "Ebmin"
    },
    {
        "title": "Red Roses For A Blue Lady",
        "genres": "unknown",
        "bpm": 109,
        "length": 170,
        "gain": -12.8,
        "key": "Gbmaj"
    },
    {
        "title": "Shangri-La",
        "genres": "unknown",
        "bpm": 99,
        "length": 126,
        "gain": -11.6,
        "key": "Amaj"
    },
    {
        "title": "Garden In The Rain",
        "genres": "unknown",
        "bpm": 77,
        "length": 136,
        "gain": -12.4,
        "key": "Ab"
    },
    {
        "title": "Distant Drums",
        "genres": "unknown",
        "bpm": 95,
        "length": 186,
        "gain": -15.3,
        "key": "Abmin"
    },
    {
        "title": "Red Red Wine",
        "genres": "soft-rock",
        "bpm": 82,
        "length": 191,
        "gain": null,
        "key": "Emaj"
    },
    {
        "title": "I Will Follow",
        "genres": "classic-rock",
        "bpm": 155,
        "length": 217,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "An Cat Dubh",
        "genres": "classic-rock",
        "bpm": 113,
        "length": 286,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "A Day Without Me",
        "genres": "classic-rock",
        "bpm": 155,
        "length": 193,
        "gain": -11,
        "key": ""
    },
    {
        "title": "The Electric Co.",
        "genres": "classic-rock",
        "bpm": 171,
        "length": 286,
        "gain": -11.9,
        "key": ""
    },
    {
        "title": "Another Day",
        "genres": "classic-rock",
        "bpm": 154,
        "length": 208,
        "gain": -15.3,
        "key": ""
    },
    {
        "title": "Fire",
        "genres": "classic-rock",
        "bpm": 149,
        "length": 232,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "A Celebration",
        "genres": "classic-rock",
        "bpm": 150,
        "length": 177,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Sunday Bloody Sunday",
        "genres": "classic-rock",
        "bpm": 101,
        "length": 279,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "New Year's Day",
        "genres": "classic-rock",
        "bpm": 126.8,
        "length": 398,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "Two Hearts Beat As One",
        "genres": "classic-rock",
        "bpm": 141,
        "length": 243,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "40",
        "genres": "classic-rock",
        "bpm": 150,
        "length": 157,
        "gain": -11,
        "key": ""
    },
    {
        "title": "A Sort Of Homecoming",
        "genres": "classic-rock",
        "bpm": 117,
        "length": 328,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Pride (In The Name Of Love)",
        "genres": "classic-rock",
        "bpm": 209,
        "length": 230,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "The Unforgettable Fire",
        "genres": "classic-rock",
        "bpm": 136,
        "length": 295,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "MLK",
        "genres": "other",
        "bpm": 134,
        "length": 154,
        "gain": -18.3,
        "key": ""
    },
    {
        "title": "Where The Streets Have No Name",
        "genres": "classic-rock",
        "bpm": 125,
        "length": 336,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "I Still Haven't Found What I'm Looking For",
        "genres": "classic-rock",
        "bpm": 100,
        "length": 277,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "With Or Without You",
        "genres": "classic-rock",
        "bpm": 110,
        "length": 295,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Bullet The Blue Sky",
        "genres": "classic-rock",
        "bpm": 152,
        "length": 271,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "Running To Stand Still",
        "genres": "blues",
        "bpm": 94,
        "length": 257,
        "gain": -18.6,
        "key": ""
    },
    {
        "title": "Red Hill Mining Town",
        "genres": "classic-rock",
        "bpm": 138,
        "length": 292,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "One Tree Hill",
        "genres": "classic-rock",
        "bpm": 123,
        "length": 322,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Mothers Of The Disappeared",
        "genres": "classic-rock",
        "bpm": 103,
        "length": 314,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Sweetest Thing",
        "genres": "pop",
        "bpm": 141,
        "length": 184,
        "gain": -13.4,
        "key": ""
    },
    {
        "title": "Helter Skelter",
        "genres": "metal",
        "bpm": 157,
        "length": 188,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Desire",
        "genres": "blues",
        "bpm": 108,
        "length": 179,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Hawkmoon 269",
        "genres": "classic-rock",
        "bpm": 189,
        "length": 382,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "All Along The Watchtower",
        "genres": "blues",
        "bpm": 128,
        "length": 264,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Angel Of Harlem",
        "genres": "soul",
        "bpm": 102,
        "length": 230,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "When Love Comes To Town",
        "genres": "blues",
        "bpm": 115,
        "length": 252,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "All I Want Is You",
        "genres": "pop",
        "bpm": 186,
        "length": 389,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "Even Better Than The Real Thing",
        "genres": "alternative-rock",
        "bpm": 128,
        "length": 221,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "One",
        "genres": "soul",
        "bpm": 181,
        "length": 277,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Until The End Of The World",
        "genres": "alternative-rock",
        "bpm": 102,
        "length": 279,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "So Cruel",
        "genres": "classic-rock",
        "bpm": 183,
        "length": 349,
        "gain": -14.4,
        "key": ""
    },
    {
        "title": "The Fly",
        "genres": "alternative-rock",
        "bpm": 108,
        "length": 275,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Mysterious Ways",
        "genres": "alternative-rock",
        "bpm": 99,
        "length": 244,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Tryin' To Throw Your Arms Around The World",
        "genres": "classic-rock",
        "bpm": 179,
        "length": 232,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Ultra Violet (Light My Way)",
        "genres": "classic-rock",
        "bpm": 107,
        "length": 330,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Acrobat",
        "genres": "alternative-rock",
        "bpm": 200,
        "length": 270,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Love Is Blindness",
        "genres": "alternative-rock",
        "bpm": 146,
        "length": 263,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "Blow Your House Down",
        "genres": "alternative-rock",
        "bpm": 133,
        "length": 210,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Zooropa",
        "genres": "alternative-rock",
        "bpm": 94,
        "length": 391,
        "gain": -15.9,
        "key": ""
    },
    {
        "title": "Lemon",
        "genres": "disco",
        "bpm": 116,
        "length": 418,
        "gain": -17.5,
        "key": ""
    },
    {
        "title": "Stay (Faraway, So Close!)",
        "genres": "alternative-rock",
        "bpm": 94,
        "length": 299,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Daddy's Gonna Pay For Your Crashed Car",
        "genres": "alternative-rock",
        "bpm": 119,
        "length": 320,
        "gain": -15.7,
        "key": ""
    },
    {
        "title": "Dirty Day",
        "genres": "alternative-rock",
        "bpm": 102,
        "length": 324,
        "gain": -18.5,
        "key": ""
    },
    {
        "title": "The Wanderer",
        "genres": "classic-rock",
        "bpm": 117,
        "length": 341,
        "gain": -16,
        "key": ""
    },
    {
        "title": "Discothèque",
        "genres": "alternative-rock",
        "bpm": 120,
        "length": 320,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Mofo",
        "genres": "alternative-rock",
        "bpm": 120,
        "length": 347,
        "gain": -8.8,
        "key": ""
    },
    {
        "title": "Last Night On Earth",
        "genres": "alternative-rock",
        "bpm": 116,
        "length": 285,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "Gone",
        "genres": "alternative-rock",
        "bpm": 175,
        "length": 266,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Please",
        "genres": "alternative-rock",
        "bpm": 101,
        "length": 302,
        "gain": -13.4,
        "key": ""
    },
    {
        "title": "Dancing Barefoot",
        "genres": "classic-rock",
        "bpm": 119,
        "length": 285,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Everlasting Love",
        "genres": "soul",
        "bpm": 126,
        "length": 199,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Unchained Melody",
        "genres": "soul",
        "bpm": 100,
        "length": 291,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Beautiful Day",
        "genres": "classic-rock",
        "bpm": 136,
        "length": 245,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Elevation",
        "genres": "alternative-rock",
        "bpm": 110,
        "length": 227,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Walk On",
        "genres": "classic-rock",
        "bpm": 99.9,
        "length": 270,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Peace On Earth",
        "genres": "classic-rock",
        "bpm": 101,
        "length": 288,
        "gain": -13,
        "key": ""
    },
    {
        "title": "When I Look At The World",
        "genres": "classic-rock",
        "bpm": 99,
        "length": 257,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "New York",
        "genres": "alternative-rock",
        "bpm": 125,
        "length": 330,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "Passengers:Miss Sarajevo",
        "genres": "classic-rock",
        "bpm": 104,
        "length": 340,
        "gain": -13.8,
        "key": "Abmin"
    },
    {
        "title": "The Hands That Built America",
        "genres": "classic-rock",
        "bpm": 162,
        "length": 298,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Hold Me, Thrill Me, Kiss Me, Kill Me",
        "genres": "alternative-rock",
        "bpm": 171,
        "length": 286,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Vertigo",
        "genres": "alternative-rock",
        "bpm": 140,
        "length": 190,
        "gain": -7,
        "key": ""
    },
    {
        "title": "Miracle Drug",
        "genres": "classic-rock",
        "bpm": 124,
        "length": 239,
        "gain": -8,
        "key": ""
    },
    {
        "title": "City Of Blinding Lights",
        "genres": "classic-rock",
        "bpm": 139,
        "length": 347,
        "gain": -7.2,
        "key": ""
    },
    {
        "title": "All Because Of You",
        "genres": "alternative-rock",
        "bpm": 133,
        "length": 219,
        "gain": -5.9,
        "key": ""
    },
    {
        "title": "One Step Closer",
        "genres": "classic-rock",
        "bpm": 88,
        "length": 231,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Original Of The Species",
        "genres": "classic-rock",
        "bpm": 173,
        "length": 281,
        "gain": -7.5,
        "key": ""
    },
    {
        "title": "Yahweh",
        "genres": "classic-rock",
        "bpm": 126,
        "length": 261,
        "gain": -6.4,
        "key": ""
    },
    {
        "title": "Window In The Skies",
        "genres": "classic-rock",
        "bpm": 91,
        "length": 239,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "No Line On The Horizon",
        "genres": "classic-rock",
        "bpm": 199,
        "length": 252,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Magnificent",
        "genres": "classic-rock",
        "bpm": 114,
        "length": 324,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Moment Of Surrender",
        "genres": "classic-rock",
        "bpm": 173,
        "length": 444,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Unknown Caller",
        "genres": "classic-rock",
        "bpm": 103,
        "length": 362,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Get On Your Boots",
        "genres": "alternative-rock",
        "bpm": 148,
        "length": 205,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Stand Up Comedy",
        "genres": "alternative-rock",
        "bpm": 179,
        "length": 229,
        "gain": -7,
        "key": ""
    },
    {
        "title": "Fez - Being Born",
        "genres": "classic-rock",
        "bpm": 187,
        "length": 316,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "White As Snow",
        "genres": "folk-rock",
        "bpm": 87,
        "length": 281,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Breathe",
        "genres": "classic-rock",
        "bpm": 117,
        "length": 300,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "The Miracle (Of Joey Ramone)",
        "genres": "pop",
        "bpm": 135,
        "length": 255,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Fortunate Son",
        "genres": "hard-rock",
        "bpm": 137,
        "length": 159,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "Jesus Christ",
        "genres": "unknown",
        "bpm": 132,
        "length": 191,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "Ordinary Love",
        "genres": "classic-rock",
        "bpm": 120,
        "length": 221,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Paint It Black",
        "genres": "blues",
        "bpm": 149,
        "length": 200,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Satellite Of Love",
        "genres": "alternative-rock",
        "bpm": 99,
        "length": 240,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "The Ballad Of Ronnie Drew",
        "genres": "classic-rock",
        "bpm": 184,
        "length": 290,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "The Night",
        "genres": "disco",
        "bpm": 110.5,
        "length": 233,
        "gain": -11.4,
        "key": "Fmaj"
    },
    {
        "title": "Trials, Troubles, Tribulations",
        "genres": "unknown",
        "bpm": 160.9,
        "length": 182,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Das Boot",
        "genres": "other",
        "bpm": 122,
        "length": 314,
        "gain": -11.7,
        "key": "Fmaj"
    },
    {
        "title": "I Got You Babe",
        "genres": "metal",
        "bpm": 173,
        "length": 188,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Here I Am (Come And Take Me)",
        "genres": "soul",
        "bpm": 95,
        "length": 257,
        "gain": -19.2,
        "key": ""
    },
    {
        "title": "The Way You Do The Things You Do",
        "genres": "soul",
        "bpm": 161,
        "length": 182,
        "gain": -19,
        "key": ""
    },
    {
        "title": "Holly Holy",
        "genres": "pop",
        "bpm": 99,
        "length": 215,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "Dog Days Are Over",
        "genres": "soul",
        "bpm": 149,
        "length": 213,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Warum Nur, Warum",
        "genres": "unknown",
        "bpm": 179,
        "length": 178,
        "gain": -8,
        "key": ""
    },
    {
        "title": "House Of The Rising Sun",
        "genres": "unknown",
        "bpm": 117,
        "length": 211,
        "gain": -12.9,
        "key": ""
    },
    {
        "title": "Merci, Chérie",
        "genres": "unknown",
        "bpm": 150,
        "length": 194,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Griechischer Wein",
        "genres": "unknown",
        "bpm": 148,
        "length": 245,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Aber Bitte Mit Sahne",
        "genres": "metal",
        "bpm": 124,
        "length": 217,
        "gain": -9.7,
        "key": ""
    },
    {
        "title": "Sag Ihr, Ich Lass Sie Grüßen",
        "genres": "unknown",
        "bpm": 124.9,
        "length": 222,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Justice:Tthhee Ppaarrttyy",
        "genres": "hip-hop",
        "bpm": 119,
        "length": 243,
        "gain": -10.3,
        "key": "Emaj"
    },
    {
        "title": "All Or Nothing",
        "genres": "unknown",
        "bpm": 120,
        "length": 269,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "Mystery Train",
        "genres": "blues",
        "bpm": 108.23,
        "length": 235,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Breaking Benjamin:Blow Me Away (Valora Version)",
        "genres": "metal",
        "bpm": 99,
        "length": 205,
        "gain": -7.3,
        "key": "Gmin"
    },
    {
        "title": "The Night The Lights Went Out In Georgia",
        "genres": "country",
        "bpm": 86,
        "length": 220,
        "gain": null,
        "key": "Ebmin"
    },
    {
        "title": "Turn The Beat Around",
        "genres": "disco",
        "bpm": 130,
        "length": 203,
        "gain": -8.8,
        "key": ""
    },
    {
        "title": "Joyful, Joyful",
        "genres": "unknown",
        "bpm": 110,
        "length": 274,
        "gain": -14.6,
        "key": "G"
    },
    {
        "title": "Mary Did You Know",
        "genres": "country",
        "bpm": 110.2,
        "length": 251,
        "gain": -15.1,
        "key": "Amin"
    },
    {
        "title": "Giving Up The Gun",
        "genres": "pop",
        "bpm": 133.8,
        "length": 286,
        "gain": -7.9,
        "key": "Amaj"
    },
    {
        "title": "Oxford Comma",
        "genres": "soul",
        "bpm": 119.8,
        "length": 195,
        "gain": -8.6,
        "key": "A"
    },
    {
        "title": "A-Punk",
        "genres": "pop",
        "bpm": 175.2,
        "length": 137,
        "gain": -7,
        "key": "Amaj"
    },
    {
        "title": "Holiday",
        "genres": "pop",
        "bpm": 156,
        "length": 138,
        "gain": -7.6,
        "key": "Bmin"
    },
    {
        "title": "Cousins",
        "genres": "unknown",
        "bpm": 175.9,
        "length": 145,
        "gain": -7.4,
        "key": "Dbmin"
    },
    {
        "title": "Diane Young",
        "genres": "classic-rock",
        "bpm": 179.8,
        "length": 160,
        "gain": -8.5,
        "key": "Dbmin"
    },
    {
        "title": "Time To Say Goodbye (Con Te Partirò)",
        "genres": "pop",
        "bpm": 132,
        "length": 193,
        "gain": null,
        "key": "Gmaj"
    },
    {
        "title": "Bed Of Nails",
        "genres": "metal",
        "bpm": 145.1,
        "length": 217,
        "gain": -7.2,
        "key": ""
    },
    {
        "title": "J.J. Cale:Cocaine",
        "genres": "blues",
        "bpm": 103,
        "length": 172,
        "gain": -14.9,
        "key": "Dbmaj"
    },
    {
        "title": "Everything About You",
        "genres": "unknown",
        "bpm": 124,
        "length": 253,
        "gain": -11,
        "key": "Dbmaj"
    },
    {
        "title": "Sonderzug Nach Pankow",
        "genres": "unknown",
        "bpm": 161,
        "length": 211,
        "gain": -10.7,
        "key": "Fmaj"
    },
    {
        "title": "Big Rock Candy Mountain",
        "genres": "unknown",
        "bpm": 115,
        "length": 102,
        "gain": -22.2,
        "key": "Emaj"
    },
    {
        "title": "Runnin' With The Devil",
        "genres": "metal",
        "bpm": 95,
        "length": 216,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Eruption",
        "genres": "classic-rock",
        "bpm": 149,
        "length": 101,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Ain't Talkin' 'Bout Love",
        "genres": "metal",
        "bpm": 139,
        "length": 227,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "Dance The Night Away",
        "genres": "hard-rock",
        "bpm": 128,
        "length": 189,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Spanish Fly",
        "genres": "classic-rock",
        "bpm": 163,
        "length": 61,
        "gain": -17.6,
        "key": ""
    },
    {
        "title": "Beautiful Girls",
        "genres": "hard-rock",
        "bpm": 100,
        "length": 237,
        "gain": -7.9,
        "key": ""
    },
    {
        "title": "And The Cradle Will Rock...",
        "genres": "hard-rock",
        "bpm": 107,
        "length": 213,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Everybody Wants Some!!",
        "genres": "hard-rock",
        "bpm": 143,
        "length": 308,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Romeo Delight",
        "genres": "metal",
        "bpm": 106,
        "length": 259,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Unchained",
        "genres": "metal",
        "bpm": 136,
        "length": 209,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "So This Is Love?",
        "genres": "metal",
        "bpm": 159,
        "length": 185,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Where Have All The Good Times Gone!",
        "genres": "classic-rock",
        "bpm": 122.3,
        "length": 184,
        "gain": -8.1,
        "key": ""
    },
    {
        "title": "(Oh) Pretty Woman",
        "genres": "classic-rock",
        "bpm": 127,
        "length": 173,
        "gain": -7.3,
        "key": ""
    },
    {
        "title": "Little Guitars (Intro)",
        "genres": "hard-rock",
        "bpm": 137,
        "length": 42,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Little Guitars",
        "genres": "hard-rock",
        "bpm": 148,
        "length": 227,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Big Bad Bill (Is Sweet William Now)",
        "genres": "unknown",
        "bpm": 100,
        "length": 164,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "Happy Trails",
        "genres": "country",
        "bpm": 95,
        "length": 65,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Jump",
        "genres": "pop",
        "bpm": 129,
        "length": 244,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Panama",
        "genres": "metal",
        "bpm": 140,
        "length": 212,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Hot For Teacher",
        "genres": "unknown",
        "bpm": 126,
        "length": 281,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "I'll Wait",
        "genres": "unknown",
        "bpm": 115,
        "length": 282,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "Why Can't This Be Love",
        "genres": "pop",
        "bpm": 176,
        "length": 211,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Love Walks In",
        "genres": "classic-rock",
        "bpm": 174,
        "length": 311,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "When It's Love",
        "genres": "other",
        "bpm": 99,
        "length": 338,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "Finish What Ya Started",
        "genres": "hard-rock",
        "bpm": 125,
        "length": 263,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Black And Blue",
        "genres": "hard-rock",
        "bpm": 99,
        "length": 327,
        "gain": -8.2,
        "key": ""
    },
    {
        "title": "Poundcake",
        "genres": "hard-rock",
        "bpm": 105,
        "length": 320,
        "gain": -7.1,
        "key": ""
    },
    {
        "title": "Runaround",
        "genres": "unknown",
        "bpm": 130,
        "length": 260,
        "gain": -8.2,
        "key": ""
    },
    {
        "title": "Right Now",
        "genres": "hard-rock",
        "bpm": 187,
        "length": 322,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Top Of The World",
        "genres": "hard-rock",
        "bpm": 128,
        "length": 234,
        "gain": -7.1,
        "key": ""
    },
    {
        "title": "One Way To Rock",
        "genres": "hard-rock",
        "bpm": 154,
        "length": 298,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "You Really Got Me/Cabo Wabo",
        "genres": "metal",
        "bpm": 137,
        "length": 478,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Won't Get Fooled Again",
        "genres": "hard-rock",
        "bpm": 136,
        "length": 341,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Can't Stop Lovin' You",
        "genres": "hard-rock",
        "bpm": 117,
        "length": 248,
        "gain": -7.4,
        "key": ""
    },
    {
        "title": "Amsterdam",
        "genres": "hard-rock",
        "bpm": 173,
        "length": 285,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Humans Being",
        "genres": "hard-rock",
        "bpm": 124,
        "length": 307,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Can't Get This Stuff No More",
        "genres": "hard-rock",
        "bpm": 151,
        "length": 315,
        "gain": -10,
        "key": ""
    },
    {
        "title": "Me Wise Magic",
        "genres": "metal",
        "bpm": 98,
        "length": 366,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Without You",
        "genres": "hard-rock",
        "bpm": 96,
        "length": 390,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Tattoo",
        "genres": "hard-rock",
        "bpm": 99,
        "length": 283,
        "gain": -6.6,
        "key": ""
    },
    {
        "title": "She's The Woman",
        "genres": "hard-rock",
        "bpm": 102,
        "length": 176,
        "gain": -5.9,
        "key": ""
    },
    {
        "title": "Norwegian Wood",
        "genres": "folk-rock",
        "bpm": 184.57,
        "length": 293,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Not Such An Innocent Girl",
        "genres": "unknown",
        "bpm": 202,
        "length": 199,
        "gain": -8.6,
        "key": "Dbmin"
    },
    {
        "title": "A Mind Of Its Own",
        "genres": "pop",
        "bpm": 101,
        "length": 229,
        "gain": -8.9,
        "key": "Dbmaj"
    },
    {
        "title": "Make It Shine",
        "genres": "pop",
        "bpm": 136.9,
        "length": 187,
        "gain": -6.8,
        "key": ""
    },
    {
        "title": "Freak The Freak Out",
        "genres": "pop",
        "bpm": 140.2,
        "length": 234,
        "gain": -6.5,
        "key": ""
    },
    {
        "title": "Beggin' On Your Knees",
        "genres": "pop",
        "bpm": 130,
        "length": 194,
        "gain": -6.7,
        "key": ""
    },
    {
        "title": "Sommersprossen",
        "genres": "other",
        "bpm": 137.812,
        "length": 241,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "The Hustle",
        "genres": "disco",
        "bpm": 111,
        "length": 242,
        "gain": -16.8,
        "key": ""
    },
    {
        "title": "Palästinalied",
        "genres": "unknown",
        "bpm": 107.9,
        "length": 163,
        "gain": -11.5,
        "key": ""
    },
    {
        "title": "Star Of The County Down",
        "genres": "unknown",
        "bpm": 181,
        "length": 162,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "Irish Heartbeat",
        "genres": "other",
        "bpm": 174.446,
        "length": 231,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Raglan Road",
        "genres": "other",
        "bpm": 122.682,
        "length": 296,
        "gain": -14.3,
        "key": ""
    },
    {
        "title": "She Moved Through The Fair",
        "genres": "unknown",
        "bpm": 127.212,
        "length": 284,
        "gain": -15.6,
        "key": ""
    },
    {
        "title": "Carrickfergus",
        "genres": "unknown",
        "bpm": 87,
        "length": 265,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "My Lagan Love",
        "genres": "unknown",
        "bpm": 106,
        "length": 320,
        "gain": -16,
        "key": ""
    },
    {
        "title": "Brown Eyed Girl",
        "genres": "blues",
        "bpm": 149,
        "length": 183,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "T.B. Sheets",
        "genres": "classic-rock",
        "bpm": 173,
        "length": 574,
        "gain": -15.7,
        "key": ""
    },
    {
        "title": "Midnight Special",
        "genres": "unknown",
        "bpm": 109.7,
        "length": 171,
        "gain": -14,
        "key": ""
    },
    {
        "title": "Astral Weeks",
        "genres": "folk-rock",
        "bpm": 162,
        "length": 426,
        "gain": -18.8,
        "key": ""
    },
    {
        "title": "Sweet Thing",
        "genres": "folk-rock",
        "bpm": 173,
        "length": 265,
        "gain": -17.7,
        "key": ""
    },
    {
        "title": "Cyprus Avenue",
        "genres": "folk-rock",
        "bpm": 132.938,
        "length": 359,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "The Way Young Lovers Do",
        "genres": "soul",
        "bpm": 190,
        "length": 197,
        "gain": -15.7,
        "key": ""
    },
    {
        "title": "Madame George",
        "genres": "folk-rock",
        "bpm": 132,
        "length": 585,
        "gain": -19.4,
        "key": ""
    },
    {
        "title": "Ballerina",
        "genres": "folk-rock",
        "bpm": 136,
        "length": 423,
        "gain": -18.6,
        "key": ""
    },
    {
        "title": "Slim Slow Slider",
        "genres": "folk-rock",
        "bpm": 134,
        "length": 197,
        "gain": -22.8,
        "key": ""
    },
    {
        "title": "And It Stoned Me",
        "genres": "blues",
        "bpm": 151,
        "length": 272,
        "gain": -14.3,
        "key": ""
    },
    {
        "title": "Moondance",
        "genres": "jazz",
        "bpm": 134,
        "length": 274,
        "gain": -15.6,
        "key": ""
    },
    {
        "title": "Crazy Love",
        "genres": "soul",
        "bpm": 154,
        "length": 155,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Caravan",
        "genres": "blues",
        "bpm": 164,
        "length": 300,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Into The Mystic",
        "genres": "blues",
        "bpm": 173,
        "length": 207,
        "gain": -17.5,
        "key": ""
    },
    {
        "title": "Come Running",
        "genres": "unknown",
        "bpm": 195,
        "length": 151,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "These Dreams Of You",
        "genres": "blues",
        "bpm": 122,
        "length": 242,
        "gain": -13.7,
        "key": ""
    },
    {
        "title": "Brand New Day",
        "genres": "blues",
        "bpm": 132,
        "length": 68,
        "gain": -15.3,
        "key": ""
    },
    {
        "title": "Everyone",
        "genres": "blues",
        "bpm": 105,
        "length": 212,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "Glad Tidings",
        "genres": "blues",
        "bpm": 150,
        "length": 238,
        "gain": -15.1,
        "key": ""
    },
    {
        "title": "Domino",
        "genres": "blues",
        "bpm": 130,
        "length": 189,
        "gain": -18,
        "key": ""
    },
    {
        "title": "Blue Money",
        "genres": "blues",
        "bpm": 154,
        "length": 228,
        "gain": -19.4,
        "key": ""
    },
    {
        "title": "Wild Night",
        "genres": "blues",
        "bpm": 144.6,
        "length": 213,
        "gain": -11.6,
        "key": ""
    },
    {
        "title": "Tupelo Honey",
        "genres": "soul",
        "bpm": 145.1,
        "length": 415,
        "gain": -13.3,
        "key": ""
    },
    {
        "title": "Moonshine Whiskey",
        "genres": "soul",
        "bpm": 118,
        "length": 411,
        "gain": -13.2,
        "key": ""
    },
    {
        "title": "Listen To The Lion",
        "genres": "blues",
        "bpm": 147.656,
        "length": 671,
        "gain": -17.8,
        "key": ""
    },
    {
        "title": "Redwood Tree",
        "genres": "blues",
        "bpm": 121.243,
        "length": 185,
        "gain": -13.1,
        "key": ""
    },
    {
        "title": "Warm Love",
        "genres": "blues",
        "bpm": 88.5305,
        "length": 203,
        "gain": -12.7,
        "key": ""
    },
    {
        "title": "Help Me",
        "genres": "blues",
        "bpm": 166.709,
        "length": 369,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "I Just Want To Make Love To You",
        "genres": "blues",
        "bpm": 98,
        "length": 400,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "Bring It On Home To Me",
        "genres": "soul",
        "bpm": 145,
        "length": 282,
        "gain": -13.6,
        "key": ""
    },
    {
        "title": "Here Comes The Night",
        "genres": "blues",
        "bpm": 197,
        "length": 165,
        "gain": null,
        "key": "Emaj"
    },
    {
        "title": "Streets Of Arklow",
        "genres": "folk-rock",
        "bpm": 119.146,
        "length": 262,
        "gain": -12,
        "key": ""
    },
    {
        "title": "Bulbs",
        "genres": "folk-rock",
        "bpm": 177.441,
        "length": 258,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Cul De Sac",
        "genres": "folk-rock",
        "bpm": 94.6081,
        "length": 173,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Wavelength",
        "genres": "pop",
        "bpm": 148.7,
        "length": 365,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Bright Side Of The Road",
        "genres": "country",
        "bpm": 176.683,
        "length": 226,
        "gain": -12,
        "key": ""
    },
    {
        "title": "And The Healing Has Begun",
        "genres": "folk-rock",
        "bpm": 131.25,
        "length": 482,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Summertime In England",
        "genres": "blues",
        "bpm": 116,
        "length": 940,
        "gain": -16.1,
        "key": ""
    },
    {
        "title": "Dweller On The Threshold",
        "genres": "jazz",
        "bpm": 102.336,
        "length": 289,
        "gain": -11.4,
        "key": ""
    },
    {
        "title": "Cleaning Windows",
        "genres": "jazz",
        "bpm": 182.937,
        "length": 286,
        "gain": -13.9,
        "key": ""
    },
    {
        "title": "Vanlose Stairway",
        "genres": "other",
        "bpm": 112.961,
        "length": 252,
        "gain": -14.4,
        "key": ""
    },
    {
        "title": "Tore Down A La Rimbaud",
        "genres": "classic-rock",
        "bpm": 89.9,
        "length": 246,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "In The Garden",
        "genres": "jazz",
        "bpm": 139.675,
        "length": 347,
        "gain": -13,
        "key": ""
    },
    {
        "title": "Ivory Tower",
        "genres": "folk-rock",
        "bpm": 135.553,
        "length": 213,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "Queen Of The Slipstream",
        "genres": "folk-rock",
        "bpm": 144.1,
        "length": 297,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Someone Like You",
        "genres": "jazz",
        "bpm": 138,
        "length": 243,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "Did Ye Get Healed?",
        "genres": "folk-rock",
        "bpm": 152.56,
        "length": 248,
        "gain": -11.2,
        "key": ""
    },
    {
        "title": "Have I Told You Lately",
        "genres": "soft-rock",
        "bpm": 144.055,
        "length": 258,
        "gain": -13.5,
        "key": ""
    },
    {
        "title": "Coney Island",
        "genres": "other",
        "bpm": 132.938,
        "length": 123,
        "gain": -14.1,
        "key": ""
    },
    {
        "title": "Orangefield",
        "genres": "other",
        "bpm": 164.062,
        "length": 232,
        "gain": -12,
        "key": ""
    },
    {
        "title": "When The Saints Go Marching In",
        "genres": "unknown",
        "bpm": 120.5,
        "length": 361,
        "gain": -18.9,
        "key": ""
    },
    {
        "title": "Them:Baby Please Don't Go",
        "genres": "blues",
        "bpm": 105,
        "length": 160,
        "gain": -16.3,
        "key": "Fmin"
    },
    {
        "title": "Wonderful Remark",
        "genres": "classic-rock",
        "bpm": 100.106,
        "length": 481,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Days Like This",
        "genres": "folk-rock",
        "bpm": 187.926,
        "length": 190,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Real Real Gone",
        "genres": "blues",
        "bpm": 142.075,
        "length": 217,
        "gain": -11,
        "key": ""
    },
    {
        "title": "Enlightenment",
        "genres": "folk-rock",
        "bpm": 108.2,
        "length": 244,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "Why Must I Always Explain?",
        "genres": "folk-rock",
        "bpm": 173,
        "length": 230,
        "gain": -12,
        "key": ""
    },
    {
        "title": "Be Thou My Vision",
        "genres": "other",
        "bpm": 106.3,
        "length": 231,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Carrying A Torch",
        "genres": "folk-rock",
        "bpm": 144.1,
        "length": 293,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Brown Eyed Girl (Alternate Take)",
        "genres": "blues",
        "bpm": 158.405,
        "length": 215,
        "gain": -15.4,
        "key": ""
    },
    {
        "title": "Lonely Avenue",
        "genres": "blues",
        "bpm": 115.485,
        "length": 385,
        "gain": -12,
        "key": ""
    },
    {
        "title": "Good Morning Little Schoolgirl",
        "genres": "blues",
        "bpm": 157.2,
        "length": 247,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "You Make Me Feel So Free",
        "genres": "folk-rock",
        "bpm": 102.336,
        "length": 193,
        "gain": -11,
        "key": ""
    },
    {
        "title": "I Will Be There",
        "genres": "jazz",
        "bpm": 135.1,
        "length": 151,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "How Long Has This Been Going On?",
        "genres": "jazz",
        "bpm": 73.8281,
        "length": 229,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Rough God Goes Riding",
        "genres": "folk-rock",
        "bpm": 131.7,
        "length": 374,
        "gain": -12.8,
        "key": ""
    },
    {
        "title": "Sometimes We Cry",
        "genres": "folk-rock",
        "bpm": 145.6,
        "length": 314,
        "gain": -17,
        "key": ""
    },
    {
        "title": "Goin' Down Geneva",
        "genres": "blues",
        "bpm": 124.9,
        "length": 267,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "Back On Top",
        "genres": "blues",
        "bpm": 113.9,
        "length": 261,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Precious Time",
        "genres": "blues",
        "bpm": 131.668,
        "length": 228,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "Hey Mr. DJ",
        "genres": "blues",
        "bpm": 104.403,
        "length": 229,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "Choppin' Wood",
        "genres": "classic-rock",
        "bpm": 113,
        "length": 211,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Georgia On My Mind",
        "genres": "soul",
        "bpm": 157.2,
        "length": 339,
        "gain": -14.7,
        "key": ""
    },
    {
        "title": "Baby Please Don't Go",
        "genres": "blues",
        "bpm": 105,
        "length": 160,
        "gain": -16.3,
        "key": "Fmin"
    },
    {
        "title": "Riptide",
        "genres": "pop",
        "bpm": 103.1,
        "length": 204,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Mess Is Mine",
        "genres": "pop",
        "bpm": 107,
        "length": 223,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "Wasted Time",
        "genres": "pop",
        "bpm": 112,
        "length": 301,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Georgia",
        "genres": "pop",
        "bpm": 145,
        "length": 230,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "First Time",
        "genres": "pop",
        "bpm": 116,
        "length": 224,
        "gain": -10,
        "key": ""
    },
    {
        "title": "Fire And The Flood",
        "genres": "pop",
        "bpm": 114.844,
        "length": 249,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Absolutely Everybody",
        "genres": "pop",
        "bpm": 123.047,
        "length": 226,
        "gain": -8.3,
        "key": "Fmaj"
    },
    {
        "title": "Shine",
        "genres": "pop",
        "bpm": 91.1,
        "length": 236,
        "gain": -10.7,
        "key": "Emaj"
    },
    {
        "title": "Have A Look",
        "genres": "pop",
        "bpm": 189.7,
        "length": 218,
        "gain": -9.7,
        "key": "Amaj"
    },
    {
        "title": "Absolutely Everybody (Latino Mix)",
        "genres": "pop",
        "bpm": 123,
        "length": 208,
        "gain": -12,
        "key": "Emin"
    },
    {
        "title": "Spin",
        "genres": "soul",
        "bpm": 99.9,
        "length": 186,
        "gain": -11.3,
        "key": "Dbmaj"
    },
    {
        "title": "Perfect",
        "genres": "soul",
        "bpm": 109,
        "length": 286,
        "gain": -7.9,
        "key": "Gbmaj"
    },
    {
        "title": "Kiss Your Mama!",
        "genres": "pop",
        "bpm": 129,
        "length": 188,
        "gain": -6.7,
        "key": "Emin"
    },
    {
        "title": "The Simple Things (Something Emotional)",
        "genres": "soul",
        "bpm": 110,
        "length": 270,
        "gain": -7.2,
        "key": "Amin"
    },
    {
        "title": "This Is Who I Am",
        "genres": "pop",
        "bpm": 146,
        "length": 204,
        "gain": -5.8,
        "key": "Dmaj"
    },
    {
        "title": "Mr. Mysterious",
        "genres": "pop",
        "bpm": 119,
        "length": 240,
        "gain": -6.3,
        "key": "Fmaj"
    },
    {
        "title": "This Is Who I Am (Macho Psycho Euro Tech Remix)",
        "genres": "pop",
        "bpm": 146,
        "length": 204,
        "gain": -5.8,
        "key": "Dmaj"
    },
    {
        "title": "Mary J. Blige:Each Tear",
        "genres": "unknown",
        "bpm": 92,
        "length": 255,
        "gain": -8.6,
        "key": "Bmin"
    },
    {
        "title": "Amazing",
        "genres": "pop",
        "bpm": 113.9,
        "length": 214,
        "gain": -6.7,
        "key": "Emaj"
    },
    {
        "title": "Big Log",
        "genres": "blues",
        "bpm": 164,
        "length": 305,
        "gain": -15.5,
        "key": "Gmaj"
    },
    {
        "title": "Ordinary Day",
        "genres": "pop",
        "bpm": 92,
        "length": 238,
        "gain": -8.3,
        "key": "Amin"
    },
    {
        "title": "A Thousand Miles",
        "genres": "pop",
        "bpm": 95,
        "length": 236,
        "gain": -9.9,
        "key": "Emaj"
    },
    {
        "title": "Pretty Baby",
        "genres": "pop",
        "bpm": 138,
        "length": 247,
        "gain": -8.7,
        "key": "Amaj"
    },
    {
        "title": "White Houses",
        "genres": "other",
        "bpm": 135,
        "length": 224,
        "gain": -10.2,
        "key": "Cmin"
    },
    {
        "title": "Nolita Fairytale",
        "genres": "pop",
        "bpm": 186,
        "length": 206,
        "gain": -8.5,
        "key": "G"
    },
    {
        "title": "Hands On Me",
        "genres": "pop",
        "bpm": 122,
        "length": 180,
        "gain": -9.9,
        "key": "Dmin"
    },
    {
        "title": "Do You Hear What I Hear?",
        "genres": "unknown",
        "bpm": 144.1,
        "length": 262,
        "gain": -9.3,
        "key": "Cmaj"
    },
    {
        "title": "Wishin' And Hopin'",
        "genres": "pop",
        "bpm": 107,
        "length": 174,
        "gain": -12.8,
        "key": "Amaj"
    },
    {
        "title": "Come Back To Me",
        "genres": "R&B",
        "bpm": 175.9,
        "length": 166,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Say OK",
        "genres": "R&B",
        "bpm": 95,
        "length": 223,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Whatever Will Be",
        "genres": "soft-rock",
        "bpm": 136,
        "length": 227,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Sneakernight",
        "genres": "jazz",
        "bpm": 103.9,
        "length": 181,
        "gain": -8.2,
        "key": ""
    },
    {
        "title": "Attention",
        "genres": "unknown",
        "bpm": 149.8,
        "length": 174,
        "gain": -7.9,
        "key": ""
    },
    {
        "title": "Wichita Lineman",
        "genres": "country",
        "bpm": 94.1771,
        "length": 240,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Macho Man",
        "genres": "disco",
        "bpm": 132.9,
        "length": 321,
        "gain": -13.8,
        "key": ""
    },
    {
        "title": "Y.M.C.A.",
        "genres": "disco",
        "bpm": 127,
        "length": 225,
        "gain": -15.1,
        "key": ""
    },
    {
        "title": "In The Navy",
        "genres": "disco",
        "bpm": 127,
        "length": 339,
        "gain": -12,
        "key": ""
    },
    {
        "title": "Go West",
        "genres": "disco",
        "bpm": 124.5,
        "length": 217,
        "gain": -10.4,
        "key": ""
    },
    {
        "title": "Save The Best For Last",
        "genres": "unknown",
        "bpm": 95,
        "length": 219,
        "gain": -13.6,
        "key": ""
    },
    {
        "title": "What Child Is This",
        "genres": "unknown",
        "bpm": 122,
        "length": 232,
        "gain": -13.5,
        "key": ""
    },
    {
        "title": "Colors Of The Wind",
        "genres": "other",
        "bpm": 168,
        "length": 259,
        "gain": -15.2,
        "key": ""
    },
    {
        "title": "Chariots Of Fire",
        "genres": "other",
        "bpm": 136,
        "length": 209,
        "gain": -21.1,
        "key": ""
    },
    {
        "title": "Conquest Of Paradise",
        "genres": "other",
        "bpm": 148,
        "length": 284,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "Ticket To Ride",
        "genres": "folk-rock",
        "bpm": 93,
        "length": 356,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "She's Not There",
        "genres": "jazz",
        "bpm": 100,
        "length": 298,
        "gain": -17.2,
        "key": ""
    },
    {
        "title": "Bang Bang",
        "genres": "pop",
        "bpm": 137,
        "length": 316,
        "gain": -10.2,
        "key": ""
    },
    {
        "title": "Stra (Illusions Of My Childhood-Part One) / You Keep Me Hanging On / Wber (Illusions Of My Childhood-Part Two)",
        "genres": "soul",
        "bpm": 172,
        "length": 445,
        "gain": -14.9,
        "key": ""
    },
    {
        "title": "Eleanor Rigby / Elds",
        "genres": "pop",
        "bpm": 137,
        "length": 491,
        "gain": -20.3,
        "key": ""
    },
    {
        "title": "Season Of The Witch",
        "genres": "classic-rock",
        "bpm": 137,
        "length": 539,
        "gain": -16.5,
        "key": ""
    },
    {
        "title": "Walk On By",
        "genres": "soul",
        "bpm": 171,
        "length": 299,
        "gain": -15.4,
        "key": ""
    },
    {
        "title": "You Keep Me Hangin' On",
        "genres": "soul",
        "bpm": 170,
        "length": 179,
        "gain": -12.5,
        "key": ""
    },
    {
        "title": "Immigrant Song",
        "genres": "metal",
        "bpm": 109.1,
        "length": 200,
        "gain": -6.8,
        "key": ""
    },
    {
        "title": "Ramble On",
        "genres": "hard-rock",
        "bpm": 98.9,
        "length": 269,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Linus And Lucy",
        "genres": "unknown",
        "bpm": 164,
        "length": 185,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Hark The Herald Angels Sing",
        "genres": "unknown",
        "bpm": 96,
        "length": 113,
        "gain": -12.1,
        "key": ""
    },
    {
        "title": "The Christmas Song",
        "genres": "jazz",
        "bpm": 110,
        "length": 197,
        "gain": -16.9,
        "key": ""
    },
    {
        "title": "Cast Your Fate To The Wind",
        "genres": "jazz",
        "bpm": 125,
        "length": 186,
        "gain": -21.7,
        "key": ""
    },
    {
        "title": "When I Call Your Name",
        "genres": "country",
        "bpm": 70,
        "length": 254,
        "gain": -20,
        "key": "Fmaj"
    },
    {
        "title": "My Kind Of Woman/My Kind Of Man",
        "genres": "country",
        "bpm": 86,
        "length": 235,
        "gain": -12.6,
        "key": "Fmaj"
    },
    {
        "title": "He's A Whore",
        "genres": "hard-rock",
        "bpm": 159,
        "length": 169,
        "gain": -5.9,
        "key": "Amin"
    },
    {
        "title": "Ice Ice Baby",
        "genres": "hip-hop",
        "bpm": 116.1,
        "length": 254,
        "gain": -7.9,
        "key": ""
    },
    {
        "title": "Cool Vibes",
        "genres": "hard-rock",
        "bpm": 126,
        "length": 182,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Hitchin' A Ride",
        "genres": "pop",
        "bpm": 137.8,
        "length": 185,
        "gain": -14.2,
        "key": ""
    },
    {
        "title": "Let It Snow! Let It Snow! Let It Snow!",
        "genres": "unknown",
        "bpm": 117,
        "length": 185,
        "gain": -14.5,
        "key": ""
    },
    {
        "title": "1979",
        "genres": "alternative-rock",
        "bpm": 135.1,
        "length": 237,
        "gain": -11,
        "key": ""
    },
    {
        "title": "One Silver Dollar",
        "genres": "unknown",
        "bpm": 120,
        "length": 180,
        "gain": -19.3,
        "key": ""
    },
    {
        "title": "If You Could Read My Mind (Extended Mix)",
        "genres": "pop",
        "bpm": 123.4,
        "length": 309,
        "gain": -15.8,
        "key": "Gmaj"
    },
    {
        "title": "If You Could Read My Mind (Club Mix)",
        "genres": "pop",
        "bpm": 123.4,
        "length": 315,
        "gain": -15.2,
        "key": "Bmin"
    },
    {
        "title": "If You Could Read My Mind",
        "genres": "pop",
        "bpm": 122.3,
        "length": 723,
        "gain": -12.7,
        "key": "Gmaj"
    },
    {
        "title": "Blister In The Sun",
        "genres": "alternative-rock",
        "bpm": 97,
        "length": 144,
        "gain": -21.9,
        "key": "Gmaj"
    },
    {
        "title": "Do You Really Want To Hurt Me",
        "genres": "soul",
        "bpm": 106,
        "length": 289,
        "gain": -15.5,
        "key": "Gmaj"
    },
    {
        "title": "Fall To Pieces",
        "genres": "hard-rock",
        "bpm": 132,
        "length": 270,
        "gain": -8.2,
        "key": "Dbmaj"
    },
    {
        "title": "Slither",
        "genres": "metal",
        "bpm": 141,
        "length": 248,
        "gain": -7.5,
        "key": "Dmaj"
    },
    {
        "title": "She Builds Quick Machines",
        "genres": "hard-rock",
        "bpm": 149,
        "length": 242,
        "gain": -7.1,
        "key": "Dmin"
    },
    {
        "title": "Come On, Come In",
        "genres": "hard-rock",
        "bpm": 136,
        "length": 239,
        "gain": -10.7,
        "key": "D"
    },
    {
        "title": "We're Going To Ibiza",
        "genres": "other",
        "bpm": 103.9,
        "length": 216,
        "gain": -9.7,
        "key": ""
    },
    {
        "title": "After Hours",
        "genres": "classic-rock",
        "bpm": 160.2,
        "length": 232,
        "gain": -7.1,
        "key": "Emaj"
    },
    {
        "title": "Bury Me Alive",
        "genres": "metal",
        "bpm": 119,
        "length": 286,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "I Knew You Were Trouble",
        "genres": "pop",
        "bpm": 154.268,
        "length": 218,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Tonight",
        "genres": "other",
        "bpm": 133,
        "length": 128,
        "gain": null,
        "key": ""
    },
    {
        "title": "You Were On My Mind",
        "genres": "pop",
        "bpm": 142,
        "length": 155,
        "gain": -12,
        "key": ""
    },
    {
        "title": "Can't Help Falling In Love",
        "genres": "pop",
        "bpm": 72,
        "length": 157,
        "gain": null,
        "key": ""
    },
    {
        "title": "Softly As I Leave You",
        "genres": "pop",
        "bpm": 92,
        "length": 163,
        "gain": -15.6,
        "key": ""
    },
    {
        "title": "Great Is Thy Faithfulness",
        "genres": "unknown",
        "bpm": 160.2,
        "length": 221,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "We'll Meet Again",
        "genres": "unknown",
        "bpm": 90,
        "length": 180,
        "gain": -13.4,
        "key": ""
    },
    {
        "title": "Check Yes Juliet",
        "genres": "alternative-rock",
        "bpm": 166.7,
        "length": 220,
        "gain": -6.9,
        "key": ""
    },
    {
        "title": "Fade To Grey",
        "genres": "pop",
        "bpm": 112,
        "length": 243,
        "gain": -15.2,
        "key": "Fmaj"
    },
    {
        "title": "Dancing Lasha Tumbai",
        "genres": "other",
        "bpm": 144,
        "length": 191,
        "gain": -8.2,
        "key": ""
    },
    {
        "title": "Till The End",
        "genres": "country",
        "bpm": 92,
        "length": 166,
        "gain": -20,
        "key": ""
    },
    {
        "title": "Today My World Slipped Away",
        "genres": "country",
        "bpm": 142.1,
        "length": 185,
        "gain": -19.2,
        "key": "Cmaj"
    },
    {
        "title": "Dream Of Me",
        "genres": "country",
        "bpm": 175.2,
        "length": 167,
        "gain": -19.8,
        "key": "Amaj"
    },
    {
        "title": "If You're Gonna Do Me Wrong (Do It Right)",
        "genres": "country",
        "bpm": 146,
        "length": 209,
        "gain": -13.3,
        "key": "Emaj"
    },
    {
        "title": "I Wonder Where We'd Be Tonight",
        "genres": "country",
        "bpm": 127.2,
        "length": 214,
        "gain": -18.1,
        "key": "Bmin"
    },
    {
        "title": "Way Down Deep",
        "genres": "country",
        "bpm": 98,
        "length": 165,
        "gain": -11.4,
        "key": "Bmin"
    },
    {
        "title": "Turn! Turn! Turn! (To Everything There Is A Season)",
        "genres": "folk-rock",
        "bpm": 120.2,
        "length": 185,
        "gain": -17,
        "key": "Dbmaj"
    },
    {
        "title": "I Can Tell By The Way You Dance (You're Gonna Love Me Tonight)",
        "genres": "country",
        "bpm": 112,
        "length": 166,
        "gain": -12.9,
        "key": "Ebmaj"
    },
    {
        "title": "What Would Your Memories Do",
        "genres": "country",
        "bpm": 86.1,
        "length": 169,
        "gain": -16.6,
        "key": ""
    },
    {
        "title": "Slow Burnin' Memory",
        "genres": "country",
        "bpm": 118,
        "length": 186,
        "gain": -13.9,
        "key": "Bbmaj"
    },
    {
        "title": "Dim Lights, Thick Smoke (And Loud, Loud Music)",
        "genres": "country",
        "bpm": 142.6,
        "length": 211,
        "gain": -16.3,
        "key": "Emaj"
    },
    {
        "title": "Do You Believe Me Now",
        "genres": "country",
        "bpm": 144.6,
        "length": 215,
        "gain": -16.9,
        "key": "Fmin"
    },
    {
        "title": "Is It Raining At Your House",
        "genres": "country",
        "bpm": 140.1,
        "length": 179,
        "gain": -18.1,
        "key": "Dmaj"
    },
    {
        "title": "Set 'Em Up Joe",
        "genres": "country",
        "bpm": 119,
        "length": 146,
        "gain": -16.8,
        "key": "Dmaj"
    },
    {
        "title": "Chiseled In Stone",
        "genres": "country",
        "bpm": 140.6,
        "length": 230,
        "gain": -17.3,
        "key": "Ebmaj"
    },
    {
        "title": "Who You Gonna Blame It On This Time",
        "genres": "country",
        "bpm": 170.1,
        "length": 170,
        "gain": -17.7,
        "key": "Dmin"
    },
    {
        "title": "That Just About Does It",
        "genres": "country",
        "bpm": 102.1,
        "length": 239,
        "gain": -17.5,
        "key": "Bbmin"
    },
    {
        "title": "I'm Still Crazy",
        "genres": "country",
        "bpm": 187.9,
        "length": 166,
        "gain": -17.1,
        "key": "Dmin"
    },
    {
        "title": "Right In The Wrong Direction",
        "genres": "country",
        "bpm": 168.8,
        "length": 134,
        "gain": -16.9,
        "key": "Dbmin"
    },
    {
        "title": "This Ain't My First Rodeo",
        "genres": "country",
        "bpm": 166,
        "length": 184,
        "gain": -16.6,
        "key": "Bbmin"
    },
    {
        "title": "Independent",
        "genres": "hip-hop",
        "bpm": 173.7,
        "length": 213,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "In The Jailhouse Now",
        "genres": "country",
        "bpm": 84,
        "length": 107,
        "gain": null,
        "key": "Emaj"
    },
    {
        "title": "More And More",
        "genres": "unknown",
        "bpm": 113.6,
        "length": 147,
        "gain": -14.9,
        "key": "Gbmin"
    },
    {
        "title": "I Don't Care",
        "genres": "country",
        "bpm": 154.3,
        "length": 146,
        "gain": -12.2,
        "key": "Gmaj"
    },
    {
        "title": "There Stands The Glass",
        "genres": "country",
        "bpm": 111.7,
        "length": 135,
        "gain": -15.5,
        "key": "Ebmin"
    },
    {
        "title": "Back Street Affair",
        "genres": "unknown",
        "bpm": 126,
        "length": 167,
        "gain": -15.4,
        "key": ""
    },
    {
        "title": "It's Been So Long",
        "genres": "unknown",
        "bpm": 143,
        "length": 137,
        "gain": -13.5,
        "key": "Bbmaj"
    },
    {
        "title": "Slowly",
        "genres": "unknown",
        "bpm": 116,
        "length": 149,
        "gain": -16,
        "key": ""
    },
    {
        "title": "Crazy Arms",
        "genres": "country",
        "bpm": 128.8,
        "length": 163,
        "gain": -13.2,
        "key": "Gmaj"
    },
    {
        "title": "I Ain't Never",
        "genres": "country",
        "bpm": 118.8,
        "length": 119,
        "gain": -13.9,
        "key": "Bmaj"
    },
    {
        "title": "Graduation (Friends Forever)",
        "genres": "pop",
        "bpm": 160,
        "length": 340,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Jesus Jones:Right Here, Right Now",
        "genres": "alternative-rock",
        "bpm": 110,
        "length": 202,
        "gain": null,
        "key": ""
    },
    {
        "title": "You're A God",
        "genres": "alternative-rock",
        "bpm": 193,
        "length": 218,
        "gain": -8.2,
        "key": "Bbmaj"
    },
    {
        "title": "Best I Ever Had (Grey Sky Morning)",
        "genres": "country",
        "bpm": 85.8,
        "length": 270,
        "gain": -10.3,
        "key": "Gbmaj"
    },
    {
        "title": "Hasta Siempre, Comandante",
        "genres": "unknown",
        "bpm": 111.7,
        "length": 231,
        "gain": -14.8,
        "key": ""
    },
    {
        "title": "Seether",
        "genres": "alternative-rock",
        "bpm": 105,
        "length": 196,
        "gain": null,
        "key": "Bbmaj"
    },
    {
        "title": "Number One Blind",
        "genres": "alternative-rock",
        "bpm": 104,
        "length": 223,
        "gain": -13,
        "key": ""
    },
    {
        "title": "Victrola",
        "genres": "alternative-rock",
        "bpm": 146,
        "length": 139,
        "gain": -12.4,
        "key": ""
    },
    {
        "title": "Volcano Girls",
        "genres": "alternative-rock",
        "bpm": 131,
        "length": 198,
        "gain": -7,
        "key": "Dmaj"
    },
    {
        "title": "Shutterbug",
        "genres": "unknown",
        "bpm": 162,
        "length": 256,
        "gain": -8.2,
        "key": "Dmin"
    },
    {
        "title": "Demais",
        "genres": "pop",
        "bpm": 89.7,
        "length": 221,
        "gain": -13.8,
        "key": ""
    },
    {
        "title": "My Name Is Jonas",
        "genres": "alternative-rock",
        "bpm": 186,
        "length": 203,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Buddy Holly",
        "genres": "alternative-rock",
        "bpm": 121,
        "length": 159,
        "gain": -9.4,
        "key": "Fmaj"
    },
    {
        "title": "Undone (The Sweater Song)",
        "genres": "alternative-rock",
        "bpm": 160,
        "length": 299,
        "gain": -8.9,
        "key": ""
    },
    {
        "title": "The Good Life",
        "genres": "alternative-rock",
        "bpm": 136,
        "length": 257,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "El Scorcho",
        "genres": "alternative-rock",
        "bpm": 146,
        "length": 247,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Hash Pipe",
        "genres": "alternative-rock",
        "bpm": 125,
        "length": 186,
        "gain": -8.5,
        "key": ""
    },
    {
        "title": "Island In The Sun",
        "genres": "alternative-rock",
        "bpm": 114,
        "length": 199,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Dope Nose",
        "genres": "pop",
        "bpm": 128,
        "length": 136,
        "gain": -6.8,
        "key": ""
    },
    {
        "title": "Beverly Hills",
        "genres": "pop",
        "bpm": 88,
        "length": 201,
        "gain": -8,
        "key": ""
    },
    {
        "title": "Perfect Situation",
        "genres": "alternative-rock",
        "bpm": 93,
        "length": 254,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Troublemaker",
        "genres": "pop",
        "bpm": 130,
        "length": 164,
        "gain": -11.1,
        "key": ""
    },
    {
        "title": "The Greatest Man That Ever Lived (Variations On A Shaker Hymn)",
        "genres": "alternative-rock",
        "bpm": 152,
        "length": 352,
        "gain": -10.9,
        "key": ""
    },
    {
        "title": "Pork And Beans",
        "genres": "alternative-rock",
        "bpm": 119,
        "length": 189,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Dreamin'",
        "genres": "alternative-rock",
        "bpm": 123,
        "length": 309,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "(If You're Wondering If I Want You To) I Want You To",
        "genres": "pop",
        "bpm": 110,
        "length": 208,
        "gain": -9.6,
        "key": ""
    },
    {
        "title": "Back To The Shack",
        "genres": "unknown",
        "bpm": 172,
        "length": 186,
        "gain": -8.1,
        "key": ""
    },
    {
        "title": "Lonely Girl",
        "genres": "alternative-rock",
        "bpm": 133,
        "length": 169,
        "gain": -6.9,
        "key": ""
    },
    {
        "title": "The British Are Coming",
        "genres": "alternative-rock",
        "bpm": 126,
        "length": 248,
        "gain": -7.6,
        "key": ""
    },
    {
        "title": "Cleopatra",
        "genres": "alternative-rock",
        "bpm": 118,
        "length": 191,
        "gain": -7.9,
        "key": ""
    },
    {
        "title": "We Wish You A Merry Christmas",
        "genres": "unknown",
        "bpm": 149,
        "length": 84,
        "gain": -7,
        "key": ""
    },
    {
        "title": "The Weight",
        "genres": "soul",
        "bpm": 142,
        "length": 270,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "Rainbow Connection",
        "genres": "unknown",
        "bpm": 104,
        "length": 240,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "You Might Think",
        "genres": "pop",
        "bpm": 133,
        "length": 187,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "Best Of Colour Solvers",
        "genres": "alternative-rock",
        "bpm": 121,
        "length": 159,
        "gain": -9.4,
        "key": "Fmaj"
    },
    {
        "title": "Everything I Want",
        "genres": "unknown",
        "bpm": 98,
        "length": 180,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Gracias A La Vida",
        "genres": "pop",
        "bpm": 107,
        "length": 275,
        "gain": -10.2,
        "key": "Gmaj"
    },
    {
        "title": "Alane",
        "genres": "other",
        "bpm": 122,
        "length": 220,
        "gain": -11,
        "key": ""
    },
    {
        "title": "Astronomy Domine",
        "genres": "classic-rock",
        "bpm": 129.604,
        "length": 330,
        "gain": -13.6,
        "key": ""
    },
    {
        "title": "I Only Wanna Be With You",
        "genres": "pop",
        "bpm": 138,
        "length": 164,
        "gain": -5.6,
        "key": "Dmaj"
    },
    {
        "title": "I'm So Lonesome I Could Cry",
        "genres": "blues",
        "bpm": 116,
        "length": 201,
        "gain": -5,
        "key": "Bbmaj"
    },
    {
        "title": "Fallen",
        "genres": "hard-rock",
        "bpm": 148,
        "length": 300,
        "gain": -6.7,
        "key": "Dmaj"
    },
    {
        "title": "A Warrior's Call",
        "genres": "metal",
        "bpm": 145,
        "length": 263,
        "gain": -6.8,
        "key": "Dmaj"
    },
    {
        "title": "My Body",
        "genres": "alternative-rock",
        "bpm": 141,
        "length": 221,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Domino Dancing",
        "genres": "pop",
        "bpm": 110,
        "length": 249,
        "gain": -7.6,
        "key": "Amin"
    },
    {
        "title": "Suburbia",
        "genres": "pop",
        "bpm": 126,
        "length": 216,
        "gain": -7.2,
        "key": "Emaj"
    },
    {
        "title": "West End Girls",
        "genres": "pop",
        "bpm": 116.5,
        "length": 224,
        "gain": -12.7,
        "key": "Emin"
    },
    {
        "title": "If I Let You Go",
        "genres": "pop",
        "bpm": 90,
        "length": 221,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Flying Without Wings",
        "genres": "R&B",
        "bpm": 146,
        "length": 214,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "Fool Again",
        "genres": "pop",
        "bpm": 152,
        "length": 235,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "Miss You",
        "genres": "pop",
        "bpm": 156,
        "length": 232,
        "gain": -9.2,
        "key": ""
    },
    {
        "title": "My Love",
        "genres": "pop",
        "bpm": 102,
        "length": 209,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "What Makes A Man",
        "genres": "pop",
        "bpm": 136,
        "length": 232,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Uptown Girl",
        "genres": "pop",
        "bpm": 128,
        "length": 184,
        "gain": -8.1,
        "key": ""
    },
    {
        "title": "My Girl",
        "genres": "soul",
        "bpm": 104,
        "length": 174,
        "gain": -9.5,
        "key": ""
    },
    {
        "title": "Queen Of My Heart",
        "genres": "pop",
        "bpm": 109,
        "length": 259,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Bop Bop Baby",
        "genres": "pop",
        "bpm": 118.1,
        "length": 262,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "World Of Our Own",
        "genres": "pop",
        "bpm": 97,
        "length": 211,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Hey Whatever",
        "genres": "pop",
        "bpm": 154,
        "length": 209,
        "gain": -7.5,
        "key": ""
    },
    {
        "title": "Obvious",
        "genres": "pop",
        "bpm": 164,
        "length": 209,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "To Be With You",
        "genres": "other",
        "bpm": 166,
        "length": 199,
        "gain": -9,
        "key": ""
    },
    {
        "title": "Fly Me To The Moon",
        "genres": "pop",
        "bpm": 118,
        "length": 150,
        "gain": -11,
        "key": ""
    },
    {
        "title": "Come Fly With Me",
        "genres": "pop",
        "bpm": 136,
        "length": 193,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "Mack The Knife",
        "genres": "jazz",
        "bpm": 166,
        "length": 188,
        "gain": -9.3,
        "key": ""
    },
    {
        "title": "Summer Wind",
        "genres": "unknown",
        "bpm": 88,
        "length": 177,
        "gain": -11,
        "key": ""
    },
    {
        "title": "Clementine",
        "genres": "unknown",
        "bpm": 153,
        "length": 197,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "When I Fall In Love",
        "genres": "pop",
        "bpm": 76,
        "length": 188,
        "gain": -12.3,
        "key": ""
    },
    {
        "title": "Moon River",
        "genres": "other",
        "bpm": 153.7,
        "length": 160,
        "gain": -10.6,
        "key": ""
    },
    {
        "title": "In This Life",
        "genres": "country",
        "bpm": 128,
        "length": 248,
        "gain": -10.1,
        "key": ""
    },
    {
        "title": "The Rose",
        "genres": "country",
        "bpm": 128,
        "length": 220,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Total Eclipse Of The Heart",
        "genres": "other",
        "bpm": 131.7,
        "length": 279,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "All Out Of Love",
        "genres": "soft-rock",
        "bpm": 106,
        "length": 225,
        "gain": -10.7,
        "key": ""
    },
    {
        "title": "You Light Up My Life",
        "genres": "country",
        "bpm": 84.9,
        "length": 207,
        "gain": -9.4,
        "key": ""
    },
    {
        "title": "Easy",
        "genres": "soul",
        "bpm": 130,
        "length": 266,
        "gain": -9.7,
        "key": ""
    },
    {
        "title": "You Are So Beautiful (To Me)",
        "genres": "soul",
        "bpm": 128,
        "length": 184,
        "gain": -15.5,
        "key": ""
    },
    {
        "title": "Love Can Build A Bridge",
        "genres": "country",
        "bpm": 130,
        "length": 235,
        "gain": -8.4,
        "key": ""
    },
    {
        "title": "The Dance",
        "genres": "country",
        "bpm": 126,
        "length": 238,
        "gain": -10.3,
        "key": ""
    },
    {
        "title": "Butterfly Kisses",
        "genres": "country",
        "bpm": 82,
        "length": 275,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "If",
        "genres": "soft-rock",
        "bpm": 92,
        "length": 162,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Solitaire",
        "genres": "pop",
        "bpm": 147,
        "length": 307,
        "gain": -10.8,
        "key": ""
    },
    {
        "title": "Us Against The World",
        "genres": "pop",
        "bpm": 119.8,
        "length": 238,
        "gain": -8.3,
        "key": ""
    },
    {
        "title": "Something Right",
        "genres": "R&B",
        "bpm": 187.9,
        "length": 192,
        "gain": -7.7,
        "key": ""
    },
    {
        "title": "I'm Already There",
        "genres": "country",
        "bpm": 131.7,
        "length": 256,
        "gain": -9.1,
        "key": ""
    },
    {
        "title": "Have You Ever",
        "genres": "unknown",
        "bpm": 133.8,
        "length": 269,
        "gain": -8.6,
        "key": ""
    },
    {
        "title": "Hard To Say I'm Sorry",
        "genres": "R&B",
        "bpm": 142.1,
        "length": 237,
        "gain": -8,
        "key": ""
    },
    {
        "title": "What About Now",
        "genres": "alternative-rock",
        "bpm": 162.1,
        "length": 250,
        "gain": -6.4,
        "key": ""
    },
    {
        "title": "Safe",
        "genres": "pop",
        "bpm": 140.2,
        "length": 234,
        "gain": -9.9,
        "key": ""
    },
    {
        "title": "The Reason",
        "genres": "pop",
        "bpm": 83,
        "length": 234,
        "gain": -7.8,
        "key": ""
    },
    {
        "title": "Please Stay",
        "genres": "unknown",
        "bpm": 97.5,
        "length": 223,
        "gain": -11.3,
        "key": ""
    },
    {
        "title": "Lighthouse",
        "genres": "pop",
        "bpm": 140.2,
        "length": 262,
        "gain": -8.7,
        "key": ""
    },
    {
        "title": "Bill Haley And His Comets:Shake, Rattle And Roll",
        "genres": "blues",
        "bpm": 167.4,
        "length": 152,
        "gain": -14.6,
        "key": ""
    },
    {
        "title": "Bad Boys",
        "genres": "disco",
        "bpm": 119,
        "length": 200,
        "gain": -12.2,
        "key": ""
    },
    {
        "title": "Club Tropicana",
        "genres": "disco",
        "bpm": 117,
        "length": 265,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "Wake Me Up Before You Go-Go",
        "genres": "pop",
        "bpm": 81,
        "length": 230,
        "gain": -10.5,
        "key": ""
    },
    {
        "title": "Everything She Wants",
        "genres": "R&B",
        "bpm": 115,
        "length": 302,
        "gain": -19,
        "key": ""
    },
    {
        "title": "Freedom",
        "genres": "pop",
        "bpm": 132,
        "length": 302,
        "gain": -9.8,
        "key": ""
    },
    {
        "title": "George Michael:Careless Whisper",
        "genres": "soul",
        "bpm": 152.56,
        "length": 302,
        "gain": -16.3,
        "key": "Gbmin"
    },
    {
        "title": "The Edge Of Heaven",
        "genres": "pop",
        "bpm": 152.56,
        "length": 274,
        "gain": -12.6,
        "key": ""
    },
    {
        "title": "I'm Your Man",
        "genres": "pop",
        "bpm": 132.089,
        "length": 243,
        "gain": -11.7,
        "key": ""
    },
    {
        "title": "Where Did Your Heart Go?",
        "genres": "disco",
        "bpm": 96.5975,
        "length": 342,
        "gain": -16.8,
        "key": ""
    },
    {
        "title": "Careless Whisper",
        "genres": "soul",
        "bpm": 152.56,
        "length": 302,
        "gain": -16.3,
        "key": "Gbmin"
    },
    {
        "title": "Wishing I Was Lucky",
        "genres": "pop",
        "bpm": 109,
        "length": 236,
        "gain": -16.5,
        "key": "Cmaj"
    },
    {
        "title": "Angel Eyes (Home And Away)",
        "genres": "soft-rock",
        "bpm": 94,
        "length": 312,
        "gain": -17,
        "key": "Bmaj"
    }
]