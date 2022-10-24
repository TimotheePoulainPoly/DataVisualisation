library(r2d3)
library("tidyverse")

data <- fromJSON(file = "transformed_data_rows.json")

ui <- fluidPage(
  verbatimTextOutput("selected"),
  d3Output("d3")
)

server <- function(input, output) {
  output$d3 <- renderD3({
    r2d3(
      c(0.3, 0.6, 0.8, 0.95, 0.40),
      script = "d3js.js"
    )
  })
  output$selected <- renderText({
    bar_number <- as.numeric(req(input$bar_clicked))
    if (bar_number > 0) cos(bar_number)
  })
}

shinyApp(ui, server)