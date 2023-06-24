const fs = require('fs');

// 生成随机日期时间
function generateRandomDatetime(startDate, endDate) {
  var startTimestamp = startDate.getTime();
  var endTimestamp = endDate.getTime();
  var randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
  return new Date(randomTimestamp);
}

// 随机生成封面图片链接
function generateRandomCover() {

  const covers = [
    "https://source.unsplash.com/128x128/?nature",
    "https://source.unsplash.com/128x128/?city",
    "https://source.unsplash.com/128x128/?food",
    "https://source.unsplash.com/128x128/?animals",
    "https://source.unsplash.com/128x128/?travel",
    "https://source.unsplash.com/128x128/?architecture",
    "https://source.unsplash.com/128x128/?technology",
    "https://source.unsplash.com/128x128/?music",
    "https://source.unsplash.com/128x128/?sports",
    "https://source.unsplash.com/128x128/?art",
    "https://source.unsplash.com/128x128/?fashion",
    "https://source.unsplash.com/128x128/?cars",
    "https://source.unsplash.com/128x128/?books",
    "https://source.unsplash.com/128x128/?fitness",
    "https://source.unsplash.com/128x128/?mountains",
    "https://source.unsplash.com/128x128/?beach",
    "https://source.unsplash.com/128x128/?dogs",
    "https://source.unsplash.com/128x128/?cats",
    "https://source.unsplash.com/128x128/?wildlife",
    "https://source.unsplash.com/128x128/?sunsets",
  ];
  var randomIndex = Math.floor(Math.random() * covers.length);
  return covers[randomIndex];
}

// 随机生成标题
function generateRandomTitle() {
  var titles = [
    "Lorem Ipsum",
    "Dolor Sit Amet",
    "Consectetur Adipiscing Elit",
    // 添加更多标题...
  ];
  var randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
}

// 随机生成标签
function generateRandomTags() {
  var tags = [
    "technology",
    "science",
    "programming",
    "data",
    "AI",
    // 添加更多标签...
  ];
  var shuffledTags = tags.sort(function () { return 0.5 - Math.random() });
  var numTags = Math.floor(Math.random() * 5) + 1;
  return shuffledTags.slice(0, numTags);
}

// 随机生成内容
function generateRandomContent() {
  var contents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    // 添加更多内容...
  ];
  var randomIndex = Math.floor(Math.random() * contents.length);
  return contents[randomIndex];
}

// 生成十组随机数据
var startDate = new Date(2022, 0, 1);
var endDate = new Date(2023, 11, 31);

var data = [];
for (var i = 0; i < 10; i++) {
  var item = {
    "datetime": generateRandomDatetime(startDate, endDate),
    "cover": generateRandomCover(),
    "title": generateRandomTitle(),
    "tags": generateRandomTags(),
    "content": generateRandomContent()
  };
  data.push(item);
}

// 将数据写入JSON文件
fs.writeFile('random_data.json', JSON.stringify(data, null, 2), function (err) {
  if (err) {
    console.error('Error writing JSON file: ' + err);
  } else {
    console.log('JSON file saved successfully.');
  }
});
