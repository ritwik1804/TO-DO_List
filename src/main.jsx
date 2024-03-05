import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return (
  <div>
    <h1> First <React></React> </h1>
  </div>
  )
}

/*const reactElement= {
  type:'a',
  props: {
      href:'http://google.com',
      target: '_blank'
  },
  children: 'click to visit google'
}*/

/*const anotherUser= "RM"

const anotherElement = (
  <a href= 'https://google.com' target= '_blank'>Visit google</a>
)

const reactElement= React.createElement(
  'a',// tags
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)*/





ReactDOM.createRoot(document.getElementById('root')).render(
  
    <MyApp/>

)
