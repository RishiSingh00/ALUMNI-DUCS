const apiResult = [
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    title: "News Title",
    url: "https://picsum.photos/id/1/200/100",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

// import { readFile } from 'fs';

// readFile('./path/to/data.json', 'utf-8', (err, data) => {
//   if (err) throw err;

//   const jsonData = JSON.parse(data);
//   const arrayData = Object.values(jsonData);

//   const apiResult = arrayData;
//   console.log(dataArray);
// });

const container = document.getElementById("news_display");

apiResult.forEach((result, idx) => {
  const content = `
    <div class="news_card" id="card-${idx}">
        <img src=${result.url} alt="news">
        <div class="news_card_content">
            <div class="news_card_title">
                <h3>${result.title}</h3>
            </div>
            <div class="news_card_body">
                <p>${result.description}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
