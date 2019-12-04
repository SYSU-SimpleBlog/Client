import Mock from 'mockjs'

const Random = Mock.Random

const produceNewsData = function(){
    let articles = []
    for(let i = 0; i < 100; i++){
        let newArticleObject = {
            title: Random.csentence(5, 30),
            img: Random.dataImage('300*250', 'mock图片'),
            author_name: Random.cname(),
            data: Random.date() + '' + Random.time()
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles
    }
}

Mock.mock('/api/articles', 'get', produceNewsData)