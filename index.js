const express = require('express')
const app = express()
const todos = [{
    id: '38347',
    message: 'Cook the carbonara',
    completed: false
  }]

  
app.set("view engine", "ejs")

app.get( '/', (req,res) => {
    res.render('index')
})

app.get('/todo/:id', (req,res) => {
    const id = req.params.id
  
    let todo = null
    let i = 0
  
    // find the todo with the same Id
    while (i < todos.length ){
      if (todos[i].id == id){
        todo = todos[i]
      }
      i++;
    }
    if ( todo ){
      res.render('todo',{
        id : id,
        todo: todo
      })  
    }else{
      res.render('404')
    }
  })

app.listen(3000)

