const fs = require('fs');

fs.readFile('../source/01.原始题目+答案数据.md', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(data, 'data')
  const result = []
  let i = 1
  data.replace(/(##.+)[\s\S]+?([\s\S]+?(?=##))/g, (content, $1, $2) => {
    console.log(content, 'content',  $1, '$1', $2, '$2')
    let obj = {title: $1, content: $2.replace(/(^[\r\n]*)|([\r\n]*$)/, ''), index: i++}
    result.push(obj)
  })
  fs.writeFile('../output/01.subjectsJson.json', JSON.stringify(result), (err) => {
    if(err) {
      console.log(err)
    }
  })
  // console.log(data, 'data');
});
