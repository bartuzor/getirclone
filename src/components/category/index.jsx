import Item from "./item";

const CategoryItems = [
  {
    id: 1,
    title: "Atıştırmalık",
    image:
      "https://cdn-image.getir.com/market/category/6abf7aa5-20ba-4979-919f-e84e8a5b8b01.png?format=webp&height=500&width=500",
  },
  {
    id: 2,
    title: "Su & İçecek",
    image:
      "https://cdn-image.getir.com/market/category/da5a5b90-5b5c-4c73-9ef4-056f18589e1e.png?format=webp&height=500&width=500",
  },
  {
    id: 3,
    title: "Meyve & Sebze",
    image:
      "https://cdn-image.getir.com/market/category/9166a172-e49a-429a-8655-061094811ddb.png?format=webp&height=500&width=500",
  },
  {
    id: 4,
    title: "Süt Ürünleri",
    image:
      "https://cdn-image.getir.com/market/category/f3771c5b-70b1-46d1-8646-9da5ee1cc69f.png?format=webp&height=500&width=500",
  },
  {
    id: 5,
    title: "Kahvaltılık",
    image:
      "https://cdn-image.getir.com/market/category/606729b7-278e-44a9-8594-577c6416ffac.png?format=webp&height=500&width=500",
  },
  {
    id: 6,
    title: "Fırından",
    image:
      "https://cdn-image.getir.com/market/category/9e8d8807-daf3-4a21-a6a8-123fa99b29bb.png?format=webp&height=500&width=500",
  },
  {
    id: 7,
    title: "Dondurma",
    image:
      "https://cdn-image.getir.com/market/category/17750559-32c6-4ce8-a77a-f7c0378b9b7b.png?format=webp&height=500&width=500",
  },
  {
    id: 8,
    title: "Temel Gıda",
    image:
      "https://cdn-image.getir.com/market/category/549a2e70-ec8e-4f02-b73a-8f44e2a05ff9.png?format=webp&height=500&width=500",
  },
  {
    id: 9,
    title: "Yiyecek",
    image:
      "https://cdn-image.getir.com/market/category/8a5bd926-1ae1-4463-a12e-d70a8951c6da.png?format=webp&height=500&width=500",
  },
  {
    id: 10,
    title: "Et,Tavuk & Balık",
    image:
      "https://cdn-image.getir.com/market/category/5ec88274-7c14-4ebb-ad97-3c36b8cb015e.png?format=webp&height=500&width=500",
  },
  {
    id: 11,
    title: "Fit & Form",
    image:
      "https://cdn-image.getir.com/market/category/76b7d020-e723-41df-9b2a-0a00a05a6225.png?format=webp&height=500&width=500",
  },
  {
    id: 12,
    title: "Kişisel Bakım",
    image:
      "https://cdn-image.getir.com/market/category/ebe6c5f5-1f77-43fa-a82e-928cbb9c4717.png?format=webp&height=500&width=500",
  },
  {
    id: 13,
    title: "Ev Bakım",
    image:
      "https://cdn-image.getir.com/market/category/97df6cb0-4f95-4af5-b7e7-fd7ea7464fd5.png?format=webp&height=500&width=500",
  },
  {
    id: 14,
    title: "Ev & Yaşam",
    image:
      "https://cdn-image.getir.com/market/category/9153e546-5e76-402a-9169-903ef90b8f26.png?format=webp&height=500&width=500",
  },
  {
    id: 15,
    title: "Evcil Hayvan",
    image:
      "https://cdn-image.getir.com/market/category/1ff61bc1-867a-434b-8c4c-09746ccfcdd8.png?format=webp&height=500&width=500",
  },
  {
    id: 16,
    title: "Bebek",
    image:
      "https://cdn-image.getir.com/market/category/f28962b9-1c3c-4659-8d1e-43c2eb2a5bd6.png?format=webp&height=500&width=500",
  },
  {
    id: 17,
    title: "Cinsel Sağlık",
    image:
      "https://cdn-image.getir.com/market/category/bd9c8f39-7f3d-4dfe-be33-4e444db9dea6.png?format=webp&height=500&width=500",
  },
];

function Category() {
  return (
    <div className=" bg-white flex items-center py-[20px] flex-col h-full w- font-semibold ">
      <div className="container">
        <div className="mb-[8px]">Kategoriler</div>
        <div className="grid grid-cols-10 grid-rows-2 gap-[10px] items-center">
          {CategoryItems.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
