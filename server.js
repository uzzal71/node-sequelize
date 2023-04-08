import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome nodejs with sequelize',
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://locahost:${port}`);
});
