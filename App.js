import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/Items"






class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Order: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'charis',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 2,
          title: 'Диван',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofac',
          price: '235.99'

        },
        {
          id: 3,
          title: 'кровать',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'beds',
          price: '555.5'
        },
        {
          id: 4,
          title: 'кровать',
          img: '3.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'beds',
          price: '666'
        }
        
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
   <div className="wrapper">
    <Header orders={this.state.orders}/>
    <Items items={this.state.items} onAdd={this.addToOrder}/>
    <Footer/>
   

   
   </div>
  )
  }

  addToOrder(item){
      this.setState({order: [...this.state.order, item]})
  }
}

export default App;