# DataVisualisation - Timothée POULAIN - 2022

## Comment ouvrir la visualisation
 - Cloner le repo
 - Ouvrir le fichier **visualisation/index.html** avec un navigateur (testé avec *Firefox* et *Microsoft Edge*)
 
## Contenu du repo
- dossier **visualisation** : contient le code de visualisation
 - dossier **data** : contient les données traitées au format CSV et JSON, ainsi qu'une liste des genres
 - dossier **scripts** :
    - *read_rds.R* : Fichier de traitement des données .rds vers JSON (la conversion en CSV a été faite avec un outil externe)
    - *tools.py* : Permet d'extraire les genres et générer les gammes possibles parmi toutes les chansons
    
## Sources
- Parallel coordinates : https://bl.ocks.org/syntagmatic/482706e0638c67836d94b20f0cb37122
- Box-And-Whisker plots : https://d3-graph-gallery.com/graph/boxplot_basic.html
