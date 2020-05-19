import React from 'react';
import Header from './components/Header';
import Search from './components/SearchForm';
import Table from './components/Table';
import Api from './util/Api'

class App extends React.Component {
    state = {
        data: [],
        table: []
    }

    componentDidMount() {
        Api.search().then(data => {
            this.setState({
                data: data.data.results,
                table: data.data.results
            })
        })
    }

    handleSort = (sort, order) => {
        if(sort === 'first') {
          let arrange = this.state.table.sort((a,b) => a.name.first.localeCompare(b.name.first))
          return  order === 'asc' ? this.setState({table: arrange}) :  this.setState({table: arrange.reverse()})
        }
        if(sort === 'last') {
            let arrange = this.state.table.sort((a,b) => a.name.last.localeCompare(b.name.last))
            return  order === 'asc' ? this.setState({table: arrange}) :  this.setState({table: arrange.reverse()})
        }
        if(sort === 'age') {
            let arrange = this.state.table.sort((a,b) => a.dob.age-b.dob.age)
            return  order === 'asc' ? this.setState({table: arrange}) :  this.setState({table: arrange.reverse()})
        }
        if(sort === 'email') {
            let arrange = this.state.table.sort((a,b) => a.email.localeCompare(b.email))
            return  order === 'asc' ? this.setState({table: arrange}) :  this.setState({table: arrange.reverse()}) 
        }
        if(sort === 'cell') {
            let arrange = this.state.table.sort((a,b) => a.cell.localeCompare(b.cell))
            return  order === 'asc' ? this.setState({table: arrange}) :  this.setState({table: arrange.reverse()})
        }
    }

    handleInputChange = (e) => {
    //  console.log(e.target.value)
    let value = e.target.value
    let fil= this.state.data.filter(el => {
         let {name:{first,last},dob:{age},email,cell} = el;
      
         if(first.includes(value) ||
            last.includes(value) ||
            age.toString().includes(value) ||
            email.includes(value) ||
            cell.includes(value)) return el
     })
     console.log(fil)
     this.setState({table: fil})
    }
    render() {
      return (
          <div>
              <Header />
              <Search handleInputChange= {this.handleInputChange}/>
              <Table data= {this.state.table} handleSort= {this.handleSort} />
          </div>
      )
    }
}

export default App;