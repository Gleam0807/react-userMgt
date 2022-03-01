const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    setTimeout(function(){
    res.send([
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
    ]);
    },2000);
});

app.listen(port, () => console.log(`Listening on port ${port}`));