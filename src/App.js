import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861effd194bae87d73dd00522794070855d',
  'name': '라이언',
  'birthday': '170101',
  'gender': '남자',
  'job': '마스코트'
},
{
  'id': 2,
  'image': 'https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861effd194bae87d73dd00522794070855d',
  'name': '라이언',
  'birthday': '150101',
  'gender': '남자',
  'job': '마스코트'
},
{
  'id': 3,
  'image': 'https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861effd194bae87d73dd00522794070855d',
  'name': '라이언',
  'birthday': '190101',
  'gender': '남자',
  'job': '마스코트'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>
    );
  }
}

export default App;

