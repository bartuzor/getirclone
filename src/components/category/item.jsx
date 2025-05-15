function Item({ data }) {
  return (
    <div className="flex flex-col h-[90px] w-[115px]  items-center">
      <img
        className="h-[50px] w-[50px] border rounded-[10px]"
        src={data.image}
      />
      {data.title}
    </div>
  );
}

export default Item;
